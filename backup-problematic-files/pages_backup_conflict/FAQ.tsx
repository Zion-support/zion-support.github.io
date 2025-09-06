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

interface FAQProps {
  className?: string;
}
import React from 'react'; import Head from 'next/head'; export default function FAQ() { return ( <> <Head> <title>FAQ | Zion Tech Group</title> <meta name="description" content="FAQ page for Zion Tech Group." /> <link rel="canonical" href="https: </Head> <div className="min-h-screen bg-gray-50"> <div className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1> <p className="text-xl text-center text-gray-600 mb-12"> FAQ information for Zion Tech Group. </p> <div className="text-center"> <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"> Contact Us </a> </div> </div> </div> </> )}
import React from 'react'; import Head from 'next/head'; export default function FAQ() { return ( <> <Head> <title>FAQ | Zion Tech Group</title> <meta name="description" content="FAQ page for Zion Tech Group." /> <link rel="canonical" href="https: </Head> <div className="min-h-screen bg-gray-50"> <div className="max-w-4xl mx-auto px-4 py-16"> <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1> <p className="text-xl text-center text-gray-600 mb-12"> FAQ information for Zion Tech Group. </p> <div className="text-center"> <a href="mailto:kleber@ziontechgroup.com" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"> Contact Us </a> </div> </div> </div> </> )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
