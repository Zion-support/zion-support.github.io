import { useState } from 'react';
import { Loader2 import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
export function ProductActions({ onAddToCart }) {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState('Add to Cart');
    const addToCart = async () => {
        setLoading(true);
        try {
            await onAddToCart();
            toast('2U Rack Mount Server added to cart');
            setLabel('Added!');
<<<<<<< HEAD
            setTimeout(() => setLabel('Add to Cart'), 1500);

        finally {
            setLoading(false);

=======
            setTimeout(() => setLabel('Add to Cart'), 1500)}
        finally {
            setLoading(false)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };
    return (<Button onClick={addToCart} disabled={loading}>
      {loading ? (<span className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin"/>
          {label}
        </span>) : (label)}
<<<<<<< HEAD
    </Button>);
}}}}
=======
    </Button>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
