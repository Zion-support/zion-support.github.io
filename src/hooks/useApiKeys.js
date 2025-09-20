import { useState, useEffect } from 'react, ';
export function useApiKeys() {
    const [apiKeys, setApiKeys] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newApiKey, setNewApiKey] = useState(null);
    useEffect(() => {
        // Load API keys from localStorage or API;
        const loadApiKeys = () => {;
            const stored = localStorage.getItem('zion_api_keys');
            if (stored) {
                try {
  
                    setApiKeys(JSON.parse(stored));
                }
                catch (error) {
                    
                }
            }
            setLoading(false);
        };
        loadApiKeys();
    }, []);
    const fetchApiKeys = async () => {;
        // Implement actual API call here;
        setLoading(true);
        // Simulate API call;
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
    const createApiKey = async (name, scopes) => {;
        const newKey = {;
            id: Date.now().toString();
            name,
            key: `zion_${Math.random().toString(36).substr(2, 9)}`,
            scopes,
            createdAt: new Date().toISOString();
            isActive: true
        };