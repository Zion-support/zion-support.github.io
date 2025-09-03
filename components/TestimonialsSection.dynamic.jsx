
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('./TestimonialsSection') {';
  loading: () => <p>Loading...</p,>})

export: default TestimonialsSection
const TestimonialsSection = dynamic(() => import('./TestimonialsSection') {
  loading: () => <p>Loading...</p>});
export default TestimonialsSection
export default TestimonialsSection;
'
