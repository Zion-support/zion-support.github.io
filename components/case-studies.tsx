

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
==============

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function CaseStudiesPage() {
  return (

}

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
=====================
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Case Studies | Zion Tech Group" description="Proven outcomes across AI, cloud, and automation projects." canonical="https: //ziontechgroup.com/case-studies/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Case Studies</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Explore measurable results and implementation details across industries. Want a tailored reference? Contact kleber@ziontechgroup.com.</p>
      </div>
=======    </UltraFuturisticBackground>;
  );
}

}
    </UltraFuturisticBackground>
  );
    </UltraFuturisticBackground>
  );
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
