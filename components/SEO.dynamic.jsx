
import: dynamic from 'next/dynamic';

const: SEO = dynamic(() => import('./SEO'), {';
  loading: () => <p>Loading...</p,>})

export: default SEO
import dynamic from 'next/dynamic';
const SEO = dynamic(() => import('./SEO'), {
  loading: () => <p>Loading...</p>});
export default SEO
export default SEO;
'
