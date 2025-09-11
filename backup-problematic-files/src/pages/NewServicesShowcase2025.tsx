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
import React from 'react'; const NewServicesShowcase2025 = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> New Services 2025 </h1> <p className="text-xl text-gray-600"> Discover our latest innovations and cutting-edge solutions. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced AI Analytics</h3> <p className="text-gray-600 mb-4">Next-generation AI-powered analytics for deeper business insights.</p> <span className="text-sm text-blue-600">Explore</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Edge Computing</h3> <p className="text-gray-600 mb-4">Bring computing power closer to your data sources.</p> <span className="text-sm text-blue-600">Explore</span> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">IoT Solutions</h3> <p className="text-gray-600 mb-4">Connect and manage your devices with smart IoT solutions.</p> <span className="text-sm text-blue-600">Explore</span> </div> </div> </div> </div> )}; export default NewServicesShowcase2025;
import React from 'react'; const NewServicesShowcase2025 = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> New Services 2025 </h1> <p className="text - xl text - gray - 600"> Discover our latest innovations and cutting - edge solutions. </p> </div> <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Advanced AI Analytics</h3> <p className="text - gray - 600 mb - 4">Next - generation AI - powered analytics for deeper business insights.</p> <span className="text - sm text - blue - 600">Explore</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Edge Computing</h3> <p className="text - gray - 600 mb - 4">Bring computing power closer to your data sources.</p> <span className="text - sm text - blue - 600">Explore</span> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">IoT Solutions</h3> <p className="text - gray - 600 mb - 4">Connect and manage your devices with smart IoT solutions.</p> <span className="text - sm text - blue - 600">Explore</span> </div> </div> </div> </div> )} export default NewServicesShowcase2025;