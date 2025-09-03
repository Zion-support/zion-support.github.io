import dynamic from 'next/dynamic';
const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), {
  loading: () => <p>Loading...</p>,
});
<<<<<<< HEAD
export default TestimonialsSection
=======
export default TestimonialsSection;
'
>>>>>>> main
