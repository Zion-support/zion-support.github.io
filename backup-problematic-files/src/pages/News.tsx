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
import React from 'react'; const News = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> News & Updates </h1> <p className="text-xl text-gray-600"> Stay informed with the latest news and updates from our team. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">New AI Solutions Launch</h3> <p className="text-gray-600 mb-4">We're excited to announce our latest AI-powered solutions for businesses.</p> <span className="text-sm text-blue-600">Read More</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Update</h3> <p className="text-gray-600 mb-4">Important security updates and best practices for protecting your data.</p> <span className="text-sm text-blue-600">Read More</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Milestone</h3> <p className="text-gray-600 mb-4">Celebrating another year of growth and innovation in technology solutions.</p> <span className="text-sm text-blue-600">Read More</span> </div> </div> </div> </div> )}; export default News;
import React from 'react'; const News = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> News & Updates </h1> <p className="text - xl text - gray - 600"> Stay informed with the latest news and updates from our team. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">New AI Solutions Launch</h3> <p className="text - gray - 600 mb - 4">We're excited to announce our latest AI - powered solutions for businesses.</p> <span className="text - sm text - blue - 600">Read More</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Security Update</h3> <p className="text - gray - 600 mb - 4">Important security updates and best practices for protecting your data.</p> <span className="text - sm text - blue - 600">Read More</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Company Milestone</h3> <p className="text - gray - 600 mb - 4">Celebrating another year of growth and innovation in technology solutions.</p> <span className="text - sm text - blue - 600">Read More</span> </div> </div> </div> </div> )} export default News;