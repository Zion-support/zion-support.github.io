import { useEffect } from 'react';
/**
 * Custom hook for handling key press events
 * @param targetKey - The key to listen for
 * @param callback - Function to call when the key is pressed
 * @param options - Additional options for the hook
 */
export function useKeyPress(targetKey, callback, options = {}) {
    const { preventDefault = false, stopPropagation = false, target = document, } = options;
    useEffect(() => {
        const handleKeyPress = (event) => {
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
