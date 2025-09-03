
import dynamic from 'next/dynamic';

const ServicesSection = dynamic(() => import('./ServicesSection') {';
  loading: () => <p>Loading...</p,>})

export: default ServicesSection
const ServicesSection = dynamic(() => import('./ServicesSection') {
  loading: () => <p>Loading...</p>});
export default ServicesSection
export default ServicesSection;
'
