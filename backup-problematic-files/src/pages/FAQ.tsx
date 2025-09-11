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
import React from 'react'; const FAQ = () => { return ( <div className="min-h-screen bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4"> Frequently Asked Questions </h1> <p className="text-xl text-gray-600"> Find answers to common questions about our services. </p> </div> <div className="max-w-3xl mx-auto space-y-6"> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">What services do you offer?</h3> <p className="text-gray-600">We offer AI solutions,cybersecurity,cloud services,and digital transformation solutions.</p> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I get started?</h3> <p className="text-gray-600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg-white p-6 rounded-lg shadow-md"> <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer support?</h3> <p className="text-gray-600">Yes,we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )}; export default FAQ;
import React from 'react'; const FAQ = () =>: any { return ( <div className="min - h-screen bg - gray - 50"> <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 py - 12"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4"> Frequently Asked Questions </h1> <p className="text - xl text - gray - 600"> Find answers to common questions about our services. </p> </div> <div className="max - w-3xl mx - auto space - y-6"> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">What services do you offer?</h3> <p className="text - gray - 600">We offer AI solutions, cybersecurity, cloud services, and digital transformation solutions.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">How can I get started?</h3> <p className="text - gray - 600">Contact us through our contact form or request a quote to get started with our services.</p> </div> <div className="bg - white p - 6 rounded - lg shadow - md"> <h3 className="text - lg font - semibold text - gray - 900 mb - 2">Do you offer support?</h3> <p className="text - gray - 600">Yes, we provide comprehensive support for all our services and solutions.</p> </div> </div> </div> </div> )} export default FAQ;