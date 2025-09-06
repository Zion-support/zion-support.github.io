
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
import React from 'react';
import { SEO } from "../components/SEO";
import { GradientHeading } from "../components/GradientHeading";
import { ContactSection } from "../components/ContactSection";
import Link from "next/link";

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To deliver cutting-edge technology solutions that empower businesses
                  to achieve their goals and stay competitive in today's fast-paced market.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the go-to partner for businesses seeking innovative AI and
                  technology solutions that drive growth and success.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  );
};
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
