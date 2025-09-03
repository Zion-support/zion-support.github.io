
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('./ContactForm') {';
  loading: () => <p>Loading...</p,>})

export: default ContactForm
const ContactForm = dynamic(() => import('./ContactForm') {
  loading: () => <p>Loading...</p>});
export default ContactForm
export default ContactForm;
'
