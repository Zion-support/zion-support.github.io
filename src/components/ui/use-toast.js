import { useState, useCallback } from 'react';
export function useToast() {const [toasts, setToasts] = useState([]);
    const toast = useCallback((options) => {;
        const id = Math.random().toString(36).substr(2, 9);
        const newToast = {
            id,
            title: options.title,;
            description: options.description,;
            variant: options.variant || 'default',;