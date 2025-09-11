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
import React from 'react'; const ComprehensivePricing = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Comprehensive Pricing Guide 2025 </h1> <p className="text-xl text-gray-600"> Detailed pricing information for all our services and solutions. </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic Plan</h3> <p className="text-3xl font-bold text-gray-900 mb-4">$99/month</p> <ul className="space-y-2 text-gray-600"> <li>Basic AI solutions</li> <li>Email support</li> <li>Standard security</li> <li>Monthly reports</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Get Started </button> </div> <div className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-600"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Plan</h3> <p className="text-3xl font-bold text-gray-900 mb-4">$299/month</p> <ul className="space-y-2 text-gray-600"> <li>Advanced AI solutions</li> <li>Priority support</li> <li>Enhanced security</li> <li>Custom integrations</li> <li>Weekly reports</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Get Started </button> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Plan</h3> <p className="text-3xl font-bold text-gray-900 mb-4">Custom</p> <ul className="space-y-2 text-gray-600"> <li>Full AI suite</li> <li>24/7 support</li> <li>Enterprise security</li> <li>Custom development</li> <li>Real-time reports</li> </ul> <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"> Contact Sales </button> </div> </div> </div> </div> )}; export default ComprehensivePricing;

