<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
import React from "react";
import Layout from "../components/Layout";
<<<<<<< HEAD
import React from 'react';
import Layout from '../components/Layout';
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from "react";
import Layout from "../components/Layout";

import React from 'react';
import Layout from '../components/Layout';

<<<<<<< HEAD



=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React from "react";
import Layout from "../components/Layout";
import React from "react";
import Layout from "../components/Layout";
import React from 'react';
import Layout from '../components/Layout';
origin/automation-improvements-final

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export default function Status() {
  return (
    <Layout
      title="System Status - Zion Tech Group"
      description="Check the current status of Zion Tech Group services and systems."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
            <h1 className="text-4xl font-bold text-gray-900 mb-4">System Status</h1>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            <h1 className="text-4xl font-bold text-gray-900 mb-4">System Status</h1>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              System Status
            </h1>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              System Status
            </h1>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">System Status</h1>
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All systems are operational.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Status page is under construction.</p>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </Layout>
export default function Status() {;
  return (
    <Layout
      title="System Status - Zion Tech Group"
      description="Check the current status of Zion Tech Group services and systems.">;
      <div className="min-h-screen bg-gray-50 py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              System Status;
            </h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              All systems are operational.;
            </p>;
          </div>;
          <div className="text-center">;
            <p className="text-gray-600">Status page is under construction.</p>;
          </div>;
        </div>;
      </div>;
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    </Layout>;
  );
import React from './react';
import Layout from "../components / Layout";
;
export default /**
 * Status - Function description
 */
function Status() {
  return (
    <Layout;
      title="System Status - Zion Tech Group";
      description="Check the current status of Zion Tech Group services and systems.";
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;
              System Status;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              All systems are operational.;
            </p>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">Status page is under construction.</p>;
          </div>;
        </div>;
      </div>;
    </Layout>);
}