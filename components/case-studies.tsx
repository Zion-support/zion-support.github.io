

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function CaseStudiesPage() {
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function CaseStudiesPage() {

  return (

}

<<<<<<< HEAD
<<<<<<< HEAD
export default function CaseStudiesPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">;
      <SEO title="Case Studies | Zion Tech Group" description="Proven outcomes across AI, cloud, and automation projects." canonical="https: //ziontechgroup && ziontechgroup.com/case-studies/" />;
      <div className="container mx-auto px-4 py-16 text-white">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</h1>;
        <p className="mt-4 text-gray-300 max-w-3xl">Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup && ziontechgroup.com.</p>;
      </div>;
    </UltraFuturisticBackground>;
  );
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup.com.</p>
    <UltraFuturisticBackground intensity=&quot;high&quot; variant=&quot;quantum&quot;>
      <SEO title=&quot;Case Studies | Zion Tech Group&quot; description=&quot;Proven outcomes across AI, cloud, and automation projects.&quot; canonical=&quot;https://ziontechgroup.com/case-studies/&quot; />
      <div className=&quot;container mx-auto px-4 py-16 text-white&quot;>
        <h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>Case Studies</h1>
        <p className=&quot;mt-4 text-gray-300 max-w-3xl&quot;>Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup.com.</p>

      </div>
    </UltraFuturisticBackground>
  )
}
  );}

import React from 'react',
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';


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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Case Studies | Zion Tech Group" description="Proven outcomes across AI, cloud, and automation projects." canonical="https: //ziontechgroup.com/case-studies/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup.com.</p>
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </UltraFuturisticBackground>
  );

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </UltraFuturisticBackground>;
  );
}

}
    </UltraFuturisticBackground>
  );
<<<<<<< HEAD
}
}
=======

    </UltraFuturisticBackground>
  );

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
