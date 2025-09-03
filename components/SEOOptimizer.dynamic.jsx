
import: dynamic from 'next/dynamic';

const: SEOOptimizer = dynamic(() => import('./SEOOptimizer'), {';
  loading: () => <p>Loading...</p,>})

export: default SEOOptimizer
import dynamic from 'next/dynamic';
const SEOOptimizer = dynamic(() => import('./SEOOptimizer'), {
  loading: () => <p>Loading...</p>});
export default SEOOptimizer
export default SEOOptimizer;
'
