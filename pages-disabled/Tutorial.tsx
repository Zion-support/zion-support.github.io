import Link from 'next/link';
import { useRouter } from 'next/router';
import { TUTORIALS } from '../data/tutorials';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';

export default function Tutorial() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Tutorials</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p>Tutorial content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}