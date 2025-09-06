
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react";
import SEO from "../components/SEO";

export default function AISustainabilityPlatformPage() {
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import React from 'react';
import SEO from '../components/SEO';
import React from "react";
import SEO from "../components/SEO";
export default function AISustainabilityPlatformPage() {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <div className="min-h-[60vh] px-6 py-24">;
      <SEO
        title="AI Sustainability Platform | Zion Tech Group"
        description="Sustainability analytics and optimization"
<<<<<<< HEAD

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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          Measure and optimize sustainability metrics with AI. Details coming;
          soon.;
        </p>;
      </div>;
<<<<<<< HEAD

    </div>);

=======
    </div>);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>

  );

}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
    </div>;
    </div>
  );
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
