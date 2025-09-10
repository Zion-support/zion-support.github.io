<<<<<<< HEAD
import React from "react";
import { SEO } from "@/components/SEO";
export default function ProductActions("props": "any) {return (;
    <div className = "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">";
      <SEO title="ProductActions - Zion Tech Group" description="Professional ProductActions services by Zion Tech Group"   />";
      <div className="container mx-auto px-4 py-20">";
        <h1 className="text-4xl font-bold text-white mb-8">ProductActions</h1>";
        <p className="text-gray-300 text-lg">;
          Professional ProductActions services to help your business grow.;
        </p>;
      </div>;
  );""}";</div>
=======
import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
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
>>>>>>> origin/backup-improvements-20250827-015311
