
import: dynamic from 'next/dynamic';

const: SEOHead = dynamic(() => import('./SEOHead'), {';
  loading: () => <p>Loading...</p,>})

export: default SEOHead
import dynamic from 'next/dynamic';
const SEOHead = dynamic(() => import('./SEOHead'), {
  loading: () => <p>Loading...</p>});
export default SEOHead
export default SEOHead;
'
