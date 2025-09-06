

<<<<<<< HEAD
=======
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
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function CaseStudiesPage() {
  return (
    <UltraFuturisticBackground intensity='high' variant='quantum'>
      <SEO
        title='Case Studies | Zion Tech Group'
        description='Proven outcomes across AI, cloud, and automation projects.'
        canonical='https://ziontechgroup.com/case-studies/'
      />
      <div className='container mx-auto px-4 py-16 text-white'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Case Studies
        </h1>
        <p className='mt-4 text-gray-300 max-w-3xl'>
          Explore measurable results and implementation details across
          industries. Want a tailored reference? Contact
          kleber@ziontechgroup.com.
        </p>
      </div>
    </UltraFuturisticBackground>;
  );export default function CaseStudiesPage() {
  return (
=======
export default function CaseStudiesPage() {
export default function CaseStudiesPage() {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">;
      <SEO title="Case Studies | Zion Tech Group" description="Proven outcomes across AI, cloud, and automation projects." canonical="https: //ziontechgroup && ziontechgroup.com/case-studies/" />;
      <div className="container mx-auto px-4 py-16 text-white">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</h1>;
        <p className="mt-4 text-gray-300 max-w-3xl">Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup && ziontechgroup.com.</p>;
      </div>;
    </UltraFuturisticBackground>;
  );
import React from 'react';
import SEO from '../components / SEO';
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground';
export default /**
 * CaseStudiesPage - Function description
 */
function CaseStudiesPage() {
  return (
    <UltraFuturisticBackground intensity='high' variant='quantum'>;
      <SEO;
        title='Case Studies | Zion Tech Group';
        description='Proven outcomes across AI, cloud, and automation projects.';
        canonical='https://ziontechgroup.com / case - studies/';
      />;
      <div className='container mx - auto px - 4 py - 16 text - white'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
          Case Studies;
        </h1>;
        <p className='mt - 4 text - gray - 300 max - w-3xl'>;
          Explore measurable results and implementation details across;
          industries. Want a tailored reference? Contact;
          kleber@ziontechgroup.com.;
        </p>;
      </div>;
    </UltraFuturisticBackground>);export default /**
 * CaseStudiesPage - Function description
 */
function CaseStudiesPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">;
      <SEO title="Case Studies | Zion Tech Group" description="Proven outcomes across AI, cloud, and automation projects." canonical="https: //ziontechgroup.com / case - studies/" />;
      <div className="container mx - auto px - 4 py - 16 text - white">;
        <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">Case Studies</h1>;
        <p className="mt - 4 text - gray - 300 max - w-3xl">Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup.com.</p>;
      </div>;
    </UltraFuturisticBackground>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Case Studies | Zion Tech Group" description="Proven outcomes across AI, cloud, and automation projects." canonical="https: //ziontechgroup.com/case-studies/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup.com.</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

}
    </UltraFuturisticBackground>
  );
}
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
