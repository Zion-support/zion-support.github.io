import Link from 'next/link';
import { useRouter } from 'next/router';
import { TUTORIALS } from '@/data/tutorials';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO title="Tutorials" description="Learning resources" />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Tutorials
        </h1>
        <div className="text-center">
          <p className="text-zion-cyan text-lg mb-8">
            Learning resources coming soon...
          </p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}