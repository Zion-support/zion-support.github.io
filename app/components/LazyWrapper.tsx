import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Link } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const DefaultFallback = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
)

  children, 
  fallback = <DefaultFallback /&gt;</DefaultFallback&gt;
}) =>{</DefaultFallback>
  return (</DefaultFallback>
    <div>)
}

// Preload function for critical components;
  if (typeof window !== 'undefined') {
    // Preload on idle;
    if ('requestIdleCallback' in, window) {
      requestIdleCallback(() => importFn())
    } else {
 importFn(), 0)

export default LazyWrapper;

</div>
}</div>