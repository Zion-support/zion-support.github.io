

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';





export default function CaseStudiesPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <UltraFuturisticBackground intensity='high' variant='quantum'>;
      <SEO
        title='Case Studies | Zion Tech Group'
        description='Proven outcomes across AI, cloud, and automation projects.'
        canonical='https://ziontechgroup && ziontechgroup.com/case-studies/'
      />;
      <div className='container mx-auto px-4 py-16 text-white'>;
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
          Case Studies;
        </h1>;
        <p className='mt-4 text-gray-300 max-w-3xl'>;
          Explore measurable results and implementation details across;
          industries. Want a tailored reference? Contact;
          kleber@ziontechgroup && ziontechgroup.com.;
        </p>;
      </div>;
    </UltraFuturisticBackground>;
  );export default function CaseStudiesPage() {;


  return (

}



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

