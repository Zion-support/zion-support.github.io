import { useState, useEffect } from 'react';

export function useAuth() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        // Check if user is logged in from localStorage or session
        const storedUser = localStorage.getItem('zion_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                localStorage.removeItem('zion_user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email, password) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const mockUser = {
                id: '1',
                name: 'Demo User',
                email: email,
                avatar: '/avatars/demo.jpg'
            };
            setUser(mockUser);
            localStorage.setItem('zion_user', JSON.stringify(mockUser));
            return { success: true, user: mockUser };
        } catch (error) {
            return { success: false, error: 'Login failed' };
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('zion_user');
    };

    const signup = async (email, password, name) => {
        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            const mockUser = {
                id: '1',
                name: name,
                email: email,
                avatar: '/avatars/demo.jpg'
            };
            setUser(mockUser);
            localStorage.setItem('zion_user', JSON.stringify(mockUser));
            return { success: true, user: mockUser };
        } catch (error) {
            return { success: false, error: 'Signup failed' };
        } finally {
            setIsLoading(false);
        }
    };

    return {
        user,
        isLoading,
        login,
        logout,
        signup
    };
}