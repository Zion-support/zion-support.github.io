import { useRef, useEffect } from 'react';
/**
 * Custom hook to get the previous value of a variable
 * @param value - The value to track
 * @returns The previous value
 */
export function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
