import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
// import dynamic from 'next/dynamic';
import SEO from '../src/components/SEO';

// Lazy load heavy components
// const AccessibilityEnhancer = dynamic(() => import('../src/components/AccessibilityEnhancer'), {
//   ssr: false
// });

const Home = React.memo(function Home(): JSX.Element {
  // const [isVisible, setIsVisible] = useState(false);
  // const [performanceMetrics, setPerformanceMetrics] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const heroRef = useRef(null);
  // const featuresRef = useRef(null);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, []);

  return (
    <>
      <SEO 
        title="Zion App - Advanced Technology Solutions"
        description="Leading provider of AI, cloud infrastructure, and cybersecurity solutions"
        keywords={["technology", "AI", "cloud", "cybersecurity", "solutions"]}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion App</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Advanced technology solutions for modern businesses
          </p>
        </div>
      </main>
    </>
  );
});

export default Home;