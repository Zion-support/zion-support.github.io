import { useState, useEffect, useCallback } from 'react';
/**
 * Custom hook for handling async operations
 * @param asyncFunction - The async function to execute
 * @param options - Configuration options
 * @returns [state, execute, reset] tuple
 */
export function useAsync(asyncFunction, options = {}) {
    const { immediate = false } = options;
    const [state, setState] = useState({
        data: null,
        loading: false,
        error: null,
    });
    const execute = useCallback(async (...args) => {
        setState(prev => (Object.assign(Object.assign({}, prev), { loading: true, error: null })));
        try {
            const result = await asyncFunction(...args);
            setState({ data: result, loading: false, error: null });
            return result;
        }
        catch (error) {
            const errorObj = error instanceof Error ? error : new Error(String(error));
            setState({ data: null, loading: false, error: errorObj });
            throw errorObj;
        }
    }, [asyncFunction]);
    const reset = useCallback(() => {
        setState({ data: null, loading: false, error: null });
    }, []);
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [immediate, execute]);
    return [state, execute, reset];
}
