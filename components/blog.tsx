

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
=======
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';

export default function BlogPage() {
export default function BlogPage() {
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <UltraFuturisticBackground intensity='high' variant='quantum'>
      <SEO
        title='Blog | Zion Tech Group'
        description='Insights and updates on AI, cloud, and automation.'
=======
=======
=======
export default function BlogPage() {

  );export default function BlogPage() {
    </UltraFuturisticBackground>;
    </UltraFuturisticBackground>
  );export default function BlogPage() {
=======

    </UltraFuturisticBackground>

  );export default function BlogPage() {>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </UltraFuturisticBackground>;
    </UltraFuturisticBackground>
  );export default function BlogPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Blog | Zion Tech Group" description="Insights and updates on AI, cloud, and automation." canonical="https://ziontechgroup.com/blog/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Curated insights, implementation guides, and trend reports. New articles are published regularly. For press or guest posts, contact kleber@ziontechgroup.com.</p>
      </div>
    </UltraFuturisticBackground>;
  );
}
=======
import React from 'react';
import SEO from '../components / SEO';
import UltraFuturisticBackground from '../components / ui / UltraFuturisticBackground';
export default /**
 * BlogPage - Function description
 */
function BlogPage() {
  return (
    <UltraFuturisticBackground intensity='high' variant='quantum'>;
      <SEO;
        title='Blog | Zion Tech Group';
        description='Insights and updates on AI, cloud, and automation.';
        canonical='https://ziontechgroup.com / blog/';
      />;
      <div className='container mx - auto px - 4 py - 16 text - white'>;
        <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
          Blog;
        </h1>;
        <p className='mt - 4 text - gray - 300 max - w-3xl'>;
          Curated insights, implementation guides, and trend reports. New;
          articles are published regularly. For press or guest posts, contact;
          kleber@ziontechgroup.com.;
        </p>;
      </div>;
    </UltraFuturisticBackground>);export default /**
 * BlogPage - Function description
 */
function BlogPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">;
      <SEO title="Blog | Zion Tech Group" description="Insights and updates on AI, cloud, and automation." canonical="https://ziontechgroup.com / blog/" />;
      <div className="container mx - auto px - 4 py - 16 text - white">;
        <h1 className="text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">Blog</h1>;
        <p className="mt - 4 text - gray - 300 max - w-3xl">Curated insights, implementation guides, and trend reports. New articles are published regularly. For press or guest posts, contact kleber@ziontechgroup.com.</p>;
      </div>;
    </UltraFuturisticBackground>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}

}


}
}

}
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======

}

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
