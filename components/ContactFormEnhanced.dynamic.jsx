import dynamic from 'next/dynamic';
const ContactFormEnhanced = dynamic(() => import('./ContactFormEnhanced'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default ContactFormEnhanced
=======
export default ContactFormEnhanced;
'
>>>>>>> main
