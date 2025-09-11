
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
import React from "react";
import Layout from "../components/Layout";
origin/main
=======
    
    return this.props.children;
  }
}

import React from "react";
import Layout from "../components/Layout";

import React from 'react';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function AIServices() {
  return (
    <Layout
      title="AI Services - Zion Tech Group"
=======

            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions and services.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">AI Services page is under construction.</p>


          </div>
        </div>
      </div>
    </Layout>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
