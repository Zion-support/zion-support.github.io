import { useState } from 'react';
import { Loader2 } from 'lucide-react';

// Simple Button component to avoid import issues
const Button = ({ children, onClick, disabled = false, className = '' }) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const classes = `${baseClasses} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 px-4 py-2 text-sm ${className}`;
    
    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};
export function ProductActions({ onAddToCart }) {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState('Add to Cart');
    const addToCart = async () => {
        setLoading(true);
        try {
            await onAddToCart();
            console.log('2U Rack Mount Server added to cart');
            setLabel('Added!');
            setTimeout(() => setLabel('Add to Cart'), 1500);
        }
        finally {
            setLoading(false);
        }
    };
    return (<Button onClick={addToCart} disabled={loading}>
      {loading ? (<span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin"/>
          {label}
        </span>) : (label)}
    </Button>);
}
