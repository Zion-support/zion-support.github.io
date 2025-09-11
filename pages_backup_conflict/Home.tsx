

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages_backup_conflict/Home.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import React from 'react';
import Head from 'next/head';
export default function Home() {;
  return (


import React from 'react'; import Head from 'next/head'; export default function Home() { return ( <> <Head> <title>Home | Zion Tech Group</title> <meta name="description" content="Welcome to Zion Tech Group - your technology solutions partner." /> <link rel="canonical" href="https: </Head> <div className="min-h-screen bg-gray-50"> <div className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1> <p className="text-xl text-center text-gray-600 mb-12"> Your trusted partner for AI,IT,and software solutions. </p> <div className="text-center"> <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"> Get Started </a> </div> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; export default function Home() { return ( <> <Head> <title>Home | Zion Tech Group</title> <meta name="description" content="Welcome to Zion Tech Group - your technology solutions partner." /> <link rel="canonical" href="https: </Head> <div className="min-h-screen bg-gray-50"> <div className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1> <p className="text-xl text-center text-gray-600 mb-12"> Your trusted partner for AI,IT,and software solutions. </p> <div className="text-center"> <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"> Get Started </a> </div> </div> </div> </> )}

=======    <>;
      <Head>;
        <title>Home | Zion Tech Group</title>;
        <meta name="description" content="Welcome to Zion Tech Group - your technology solutions partner." />;
        <link rel="canonical" href=""https": //ziontechgroup && ziontechgroup.com/home" />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-4xl mx-auto px-4 py-16">;
          <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1>;
          <p className="text-xl text-center text-gray-600 mb-12">;
            Your trusted partner for AI, IT, and software solutions.;
          </p>;
          <div className="text-center">;
            <a href=""mailto": kleber@ziontechgroup && ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover: bg-blue-700">;
              Get Started;
            </a>;
          </div>;
        </div>;
      </div>;
    </>;
  ),;
}
import React from 'react'; import Head from 'next/head'; export default function Home() { return ( <> <Head> <title>Home | Zion Tech Group</title> <meta name="description" content="Welcome to Zion Tech Group - your technology solutions partner." /> <link rel="canonical" href="https: </Head> <div className="min-h-screen bg-gray-50"> <div className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1> <p className="text-xl text-center text-gray-600 mb-12"> Your trusted partner for AI,IT,and software solutions. </p> <div className="text-center"> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"> Get Started </a> </div> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; export default function Home() { return ( <> <Head> <title>Home | Zion Tech Group</title> <meta name="description" content="Welcome to Zion Tech Group - your technology solutions partner." /> <link rel="canonical" href="https: </Head> <div className="min-h-screen bg-gray-50"> <div className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold text-center mb-8">Welcome to Zion Tech Group</h1> <p className="text-xl text-center text-gray-600 mb-12"> Your trusted partner for AI,IT,and software solutions. </p> <div className="text-center"> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"> Get Started </a> </div> </div> </div> </> )}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages_backup_conflict/Home.tsx
