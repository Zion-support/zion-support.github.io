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
import React from 'react'; const WhitePapers = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> White Papers </h1> <p className="text-xl text-gray-600"> In-depth research and insights on technology trends and solutions. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">The Future of AI in Business</h3> <p className="text-gray-600 mb-4">A comprehensive analysis of how artificial intelligence is transforming modern business operations.</p> <span className="text-sm text-blue-600">Download PDF</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity Best Practices</h3> <p className="text-gray-600 mb-4">Essential security measures every business should implement to protect their digital assets.</p> <span className="text-sm text-blue-600">Download PDF</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Migration Strategies</h3> <p className="text-gray-600 mb-4">A complete guide to successful cloud adoption and migration strategies.</p> <span className="text-sm text-blue-600">Download PDF</span> </div> </div> </div> </div> )}; export default WhitePapers;
import React from 'react'; const WhitePapers = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> White Papers </h1> <p className="text - xl text - gray - 600"> In - depth research and insights on technology trends and solutions. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">The Future of AI in Business</h3> <p className="text - gray - 600 mb - 4">A comprehensive analysis of how artificial intelligence is transforming modern business operations.</p> <span className="text - sm text - blue - 600">Download PDF</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Cybersecurity Best Practices</h3> <p className="text - gray - 600 mb - 4">Essential security measures every business should implement to protect their digital assets.</p> <span className="text - sm text - blue - 600">Download PDF</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Cloud Migration Strategies</h3> <p className="text - gray - 600 mb - 4">A complete guide to successful cloud adoption and migration strategies.</p> <span className="text - sm text - blue - 600">Download PDF</span> </div> </div> </div> </div> )} export default WhitePapers;