import { useState, useEffect } from 'react';
/**
 * Custom hook for media query matching
 * @param query - CSS media query string
 * @returns boolean indicating if the query matches
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const mediaQuery = window.matchMedia(query);
        // Set initial value
        setMatches(mediaQuery.matches);
        // Create event listener
        const handler = (event) => {
            setMatches(event.matches);
        };
        // Add listener
        mediaQuery.addEventListener('change', handler);
        // Cleanup
        return () => {
            mediaQuery.removeEventListener('change', handler);
        };
    }, [query]);
    return matches;
}
