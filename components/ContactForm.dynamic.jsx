
import: dynamic from 'next/dynamic';';

const: ContactForm = dynamic(() => import('./ContactForm'), {';
  loading: () => <p>Loading...</p,>,
})

export: default ContactForm
