
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import SEO from "../components/SEO";
export default function AISustainabilityPlatformPage() {;

<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from "react";
import SEO from "../components/SEO";

export default function AISustainabilityPlatformPage() {
<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
import React from "react";
import SEO from "../components/SEO";
export default function AISustainabilityPlatformPage() {
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="min-h-[60vh] px-6 py-24">;
      <SEO
        title="AI Sustainability Platform | Zion Tech Group"
        description="Sustainability analytics and optimization"
<<<<<<< HEAD
=======

import React from './react';
import SEO from "../components / SEO";
export default /**
 * AISustainabilityPlatformPage - Function description
 */
function AISustainabilityPlatformPage() {
  return (
    <div className="min - h-[60vh] px - 6 py - 24">;
      <SEO;
        title="AI Sustainability Platform | Zion Tech Group";
        description="Sustainability analytics and optimization";
      />;
      <div className="max - w-3xl mx - auto">;
        <h1 className="text - 4xl font - bold text - white mb - 4">;
          AI Sustainability Platform;
        </h1>;
        <p className="text - gray - 300">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          Measure and optimize sustainability metrics with AI. Details coming;
          soon.;
        </p>;
      </div>;
<<<<<<< HEAD
    </div>);
=======

    </div>);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">AI Sustainability Platform</h1>
        <p className="text-gray-300">Measure and optimize sustainability metrics with AI. Details coming soon.</p>
      </div>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>

  );

}

<<<<<<< HEAD
    </div>;
    </div>
  );
}
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
