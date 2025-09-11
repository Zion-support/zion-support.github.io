
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
import React from \"react\"; ); export default function Authroutes() {; return ( <div className=\"min-h-screen bg-white\"> <div className=\"max-w-4xl mx-auto px-6 py-16\"> <h1 className=\"text-4xl font-bold text-gray-900 mb-8\">Authroutes></div> <p className=\"text-lg text-gray-600 mb-8\"> This is a placeholder component for authroutes.; ></div> ></div> );}
const React from "react"; ); export default function Authroutes() {; return ( <div className="min-h-screen bg-white"> <div className="max-w-4xl mx-auto px-6 py-16"> <h1 className="text-4xl font-bold text-gray-900 mb-8">Authroutes></div> <p className="text-lg text-gray-600 mb-8"> This is a placeholder component for authroutes.; ></div> ></div> );}""

import _React from "react"; ); export default function Authroutes() {; return ( <div className="min-h-screen bg-white"> <div className="max-w-4xl mx-auto px-6 py-16"> <h1 className="text-4xl font-bold text-gray-900 mb-8">Authroutes></div> <p className="text-lg text-gray-600 mb-8"> This is a placeholder component for authroutes.; ></div> ></div> );}

