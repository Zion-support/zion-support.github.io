import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState(null);

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Product Details
        </h1>
        <p className="text-zion-cyan text-center">
          Product details coming soon...
        </p>
      </div>
    </div>
  );
}