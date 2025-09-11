import { useEffect } from 'react';

/**
 * Custom hook for handling key press events
 * @param targetKey - The key to listen for
 * @param callback - Function to call when the key is pressed
 * @param options - Additional options for the hook
 */
export function useKeyPress(
  targetKey: string,
  callback: (event: KeyboardEvent) => void,
  options: {
    preventDefault?: boolean;
    stopPropagation?: boolean;
    target?: EventTarget | null;
  } = {}
): void {
  const { preventDefault = false, stopPropagation = false, target = document } = options;

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        if (preventDefault) {
          event.preventDefault();
        }
        if (stopPropagation) {
          event.stopPropagation();
        }
        callback(event);
      }
    };

    const targetElement = target || document;
    targetElement.addEventListener('keydown', handleKeyPress);

    return () => {
      targetElement.removeEventListener('keydown', handleKeyPress);
    };
  }, [targetKey, callback, preventDefault, stopPropagation, target]);
}