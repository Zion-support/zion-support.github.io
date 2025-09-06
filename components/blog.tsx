<<<<<<< HEAD
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
<<<<<<< HEAD
import React from 'react',
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
=======
import React from 'react';
import SEO from '../components/SEO';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
<<<<<<< HEAD

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function BlogPage() {
  return (
<<<<<<< HEAD
    <UltraFuturisticBackground intensity="high" variant="quantum">;
      <SEO title="Blog | Zion Tech Group" description="Insights and updates on AI, cloud, and automation." canonical="https://ziontechgroup && ziontechgroup.com/blog/" />;
      <div className="container mx-auto px-4 py-16 text-white">;
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</h1>;
        <p className="mt-4 text-gray-300 max-w-3xl">Curated insights, implementation guides, and trend reports. New articles are published regularly. For press or guest posts, contact kleber@ziontechgroup && ziontechgroup.com.</p>;
      </div>;
=======
    <UltraFuturisticBackground intensity='high' variant='quantum'>
      <SEO
        title='Blog | Zion Tech Group'
        description='Insights and updates on AI, cloud, and automation.'
        canonical='https://ziontechgroup.com/blog/'
      />
      <div className='container mx-auto px-4 py-16 text-white'>
        <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Blog
        </h1>
        <p className='mt-4 text-gray-300 max-w-3xl'>
          Curated insights, implementation guides, and trend reports. New
          articles are published regularly. For press or guest posts, contact
          kleber@ziontechgroup.com.
        </p>
      </div>
<<<<<<< HEAD
    </UltraFuturisticBackground>;
=======
    </UltraFuturisticBackground>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );export default function BlogPage() {
  return (
    <UltraFuturisticBackground intensity="high" variant="quantum">
      <SEO title="Blog | Zion Tech Group" description="Insights and updates on AI, cloud, and automation." canonical="https://ziontechgroup.com/blog/" />
      <div className="container mx-auto px-4 py-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Curated insights, implementation guides, and trend reports. New articles are published regularly. For press or guest posts, contact kleber@ziontechgroup.com.</p>
      </div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    </UltraFuturisticBackground>;
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
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

=======
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
