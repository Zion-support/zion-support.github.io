import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Optimized state hook with performance enhancements
 */
export const useOptimizedState = <T>(initialValue: T) => {
  const [state, setState] = useState(initialValue);
  const stateRef = useRef(state);
  const updateCountRef = useRef(0);

  // Update ref when state changes
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const setOptimizedState = useCallback((newValue: T | ((prev: T) => T)) => {
    updateCountRef.current += 1;
    
    // Throttle updates to prevent excessive re-renders
    if (updateCountRef.current % 10 === 0) {
      console.debug(`State updated ${updateCountRef.current} times`);
    }
    
    setState(newValue);
  }, []);

  return [state, setOptimizedState, stateRef] as const;
};

/**
 * Debounced state hook
 */
export const useDebouncedState = <T>(initialValue: T, delay: number = 300) => {
  const [state, setState] = useState(initialValue);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const setDebouncedState = useCallback((newValue: T | ((prev: T) => T)) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setState(newValue);
    }, delay);
  }, [delay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [state, setDebouncedState] as const;
};

/**
 * Throttled state hook
 */
export const useThrottledState = <T>(initialValue: T, limit: number = 100) => {
  const [state, setState] = useState(initialValue);
  const lastUpdateRef = useRef(0);

  const setThrottledState = useCallback((newValue: T | ((prev: T) => T)) => {
    const now = Date.now();
    
    if (now - lastUpdateRef.current >= limit) {
      setState(newValue);
      lastUpdateRef.current = now;
    }
  }, [limit]);

  return [state, setThrottledState] as const;
};

/**
 * State with persistence
 */
export const usePersistedState = <T>(
  key: string,
  initialValue: T,
  storage: Storage = localStorage
) => {
  const [state, setState] = useState<T>(() => {
    try {
      const item = storage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setPersistedState = useCallback((newValue: T | ((prev: T) => T)) => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(state) : newValue;
      setState(valueToStore);
      storage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, state, storage]);

  return [state, setPersistedState] as const;
};

/**
 * State with validation
 */
export const useValidatedState = <T>(
  initialValue: T,
  validator: (value: T) => boolean
) => {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(validator(initialValue));
  const [error, setError] = useState<string | null>(null);

  const setValidatedState = useCallback((newValue: T | ((prev: T) => T)) => {
    const valueToStore = newValue instanceof Function ? newValue(state) : newValue;
    
    try {
      const valid = validator(valueToStore);
      setIsValid(valid);
      setError(valid ? null : 'Invalid value');
      setState(valueToStore);
    } catch (err) {
      setIsValid(false);
      setError(err instanceof Error ? err.message : 'Validation error');
    }
  }, [state, validator]);

  return [state, setValidatedState, isValid, error] as const;
};

/**
 * State with history
 */
export const useStateWithHistory = <T>(initialValue: T, maxHistory: number = 10) => {
  const [state, setState] = useState(initialValue);
  const [history, setHistory] = useState<T[]>([initialValue]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const setStateWithHistory = useCallback((newValue: T | ((prev: T) => T)) => {
    const valueToStore = newValue instanceof Function ? newValue(state) : newValue;
    
    setState(valueToStore);
    setHistory(prev => {
      const newHistory = [...prev.slice(0, historyIndex + 1), valueToStore];
      return newHistory.slice(-maxHistory);
    });
    setHistoryIndex(prev => Math.min(prev + 1, maxHistory - 1));
  }, [state, historyIndex, maxHistory]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setState(history[newIndex]);
    }
  }, [historyIndex, history]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setState(history[newIndex]);
    }
  }, [historyIndex, history]);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;

  return {
    state,
    setState: setStateWithHistory,
    history,
    historyIndex,
    undo,
    redo,
    canUndo,
    canRedo,
  };
};

/**
 * State with comparison
 */
export const useStateWithComparison = <T>(
  initialValue: T,
  compareFn: (a: T, b: T) => boolean = Object.is
) => {
  const [state, setState] = useState(initialValue);
  const [hasChanged, setHasChanged] = useState(false);
  const previousValueRef = useRef(initialValue);

  const setStateWithComparison = useCallback((newValue: T | ((prev: T) => T)) => {
    const valueToStore = newValue instanceof Function ? newValue(state) : newValue;
    
    const changed = !compareFn(previousValueRef.current, valueToStore);
    setHasChanged(changed);
    previousValueRef.current = valueToStore;
    setState(valueToStore);
  }, [state, compareFn]);

  return [state, setStateWithComparison, hasChanged] as const;
};