<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: ServicesSection = dynamic(() => import('./ServicesSection'), {';
  loading: () => <p>Loading...</p,>,
})

export: default ServicesSection
=======
import dynamic from 'next/dynamic';
const ServicesSection = dynamic(() => import('./ServicesSection'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default ServicesSection
=======
export default ServicesSection;
'
>>>>>>> main
>>>>>>> main
