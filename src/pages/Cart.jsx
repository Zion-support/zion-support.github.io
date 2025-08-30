import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartLoading, setCartLoading] = useState(true);
    const [showEmpty, setShowEmpty] = useState(false);

    useEffect(() => {
        // Simulate loading cart data
        const timer = setTimeout(() => {
            setCartLoading(false);
            setShowEmpty(true);
        }, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    if (cartLoading) {
        return (
            <div className="container py-10 space-y-4">
                <div className="h-8 w-1/3 bg-gray-200 rounded animate-pulse"/>
                <div className="h-32 w-full bg-gray-200 rounded animate-pulse"/>
            </div>
        );
    }

    if (showEmpty) {
        return (
            <div className="container py-10 text-center">
                <div className="mx-auto mb-4 w-48 h-36 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-500 text-4xl">🛒</span>
                </div>
                <p className="text-gray-600 mb-4">Your cart is empty</p>
                <Link 
                    to="/services" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Browse Services
                </Link>
            </div>
        );
    }

    return (
        <div className="container max-w-2xl py-10">
            <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
            <p className="text-gray-600">Cart functionality coming soon...</p>
            <div className="mt-6">
                <Link 
                    to="/services" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}
