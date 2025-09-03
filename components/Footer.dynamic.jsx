import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('./Footer'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default Footer
=======
export default Footer;
'
>>>>>>> main
