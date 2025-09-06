import Link from 'next/link',
import Head from 'next/head';
import { useState, useEffect  } from 'react';
import { ContactInfo  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function AIServices() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  useEffect(() => {
    const timer = null;
              { title: 'AI Sales Intelligence', href: '/ai-sales-automation' }].map((c) => (
              <Link key={c.href} href={c.href} className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition-colors">
                <div className="text-xl font-semibold">{c.title}</div>
                <div className="text-sm text-gray-400 mt-2">Implementation‑ready with pricing and SLAs.</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
