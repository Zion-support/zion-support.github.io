import { useState, useCallback } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning';
  duration?: number;
}

interface ToastState {
  toasts: Toast[];
}

const initialState: ToastState = {
  toasts: [],
};

let toastState = initialState;
const listeners = new Set<() => void>();

function dispatch(action: { type: string; payload?: any }) {
  switch (action.type) {
    case 'ADD_TOAST':
      toastState = {
        ...toastState,
        toasts: [...toastState.toasts, action.payload],
      };
      break;
    case 'REMOVE_TOAST':
      toastState = {
        ...toastState,
        toasts: toastState.toasts.filter((t) => t.id !== action.payload),
      };
      break;
    case 'CLEAR_TOASTS':
      toastState = initialState;
      break;
    default:
      break;
  }

  listeners.forEach((listener) => listener());
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

export const toast = ({
  title,
  description,
  variant = 'default',
  duration = 5000,
  ...props
}: Omit<Toast, 'id'>) => {
  const id = generateId();
  
  dispatch({
    type: 'ADD_TOAST',
    payload: {
      id,
      title,
      description,
      variant,
      duration,
      ...props,
    },
  });

  if (duration > 0) {
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_TOAST',
        payload: id,
      });
    }, duration);
  }

  return id;
};

export const useToast = () => {
  const [state, setState] = useState(toastState);

  const subscribe = useCallback(() => {
    const listener = () => setState(toastState);
    listeners.add(listener);
    
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const dismiss = useCallback((toastId?: string) => {
    if (toastId) {
      dispatch({
        type: 'REMOVE_TOAST',
        payload: toastId,
      });
    } else {
      dispatch({ type: 'CLEAR_TOASTS' });
    }
  }, []);

  return {
    toasts: state.toasts,
    toast,
    dismiss,
    subscribe,
  };
};