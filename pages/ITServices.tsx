

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
import React from "react";
import Layout from "../components/Layout";
origin/main

import React from "react";
import Layout from "../components/Layout";

export default function ITServices() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h1>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
origin/automation-improvements-final
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions to power your digital transformation.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              IT Services page is under construction.
            </p>
            <p className="text-gray-600">IT Services page is under construction.</p>
origin/automation-improvements-final
          </div>
        </div>
      </div>
    </Layout>;
  );
            <p className="text-gray-600">IT Services page is under construction.</p>

          </div>
        </div>
      </div>
    </Layout>;
  );
}
}