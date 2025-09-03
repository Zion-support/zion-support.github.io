
import: dynamic from 'next/dynamic';

const: Footer = dynamic(() => import('./Footer'), {';
  loading: () => <p>Loading...</p,>})

export: default Footer
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <p>Loading...</p>});
export default Footer
export default Footer;
'
