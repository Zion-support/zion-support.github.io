<<<<<<< HEAD

import: dynamic from 'next/dynamic';';

const: ContactForm = dynamic(() => import('./ContactForm'), {';
  loading: () => <p>Loading...</p,>,
})

export: default ContactForm
=======
import dynamic from 'next/dynamic';
const ContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default ContactForm
=======
export default ContactForm;
'
>>>>>>> main
>>>>>>> main
