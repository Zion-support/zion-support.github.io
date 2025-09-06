
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
import React from "react";
import SEO from "../components/SEO";
export default function AISustainabilityPlatformPage() {;
<<<<<<< HEAD

=======

import React from "react";
import SEO from "../components/SEO";

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export default function AISustainabilityPlatformPage() {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
<<<<<<< HEAD
import React from 'react';
import SEO from '../components/SEO';
=======
import React from "react";
import SEO from "../components/SEO";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export default function AISustainabilityPlatformPage() {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="min-h-[60vh] px-6 py-24">;
      <SEO
        title="AI Sustainability Platform | Zion Tech Group"
        description="Sustainability analytics and optimization"
<<<<<<< HEAD

=======
<<<<<<< HEAD
      />;
      <div className="max-w-3xl mx-auto">;
        <h1 className="text-4xl font-bold text-white mb-4">;
          AI Sustainability Platform;
        </h1>;
        <p className="text-gray-300">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          Measure and optimize sustainability metrics with AI. Details coming;
          soon.;
        </p>;
      </div>;
<<<<<<< HEAD

    </div>);

=======
    </div>);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
=======
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          AI Sustainability Platform
        </h1>
        <p className="text-gray-300">
          Measure and optimize sustainability metrics with AI. Details coming
          soon.
        </p>
      </div>
<<<<<<< HEAD

<<<<<<< HEAD
  );

=======
    </div>

  );

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
    </div>;
=======
    </div>
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
