<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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

<<<<<<< HEAD
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
<<<<<<< HEAD
              Zion Tech Group is a leading provider of AI and technology solutions
              that help businesses scale and succeed in the digital age.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We specialize in enterprise-grade AI, micro SaaS development, and IT services
              that drive real business results for our clients.
=======
              Zion Tech Group is a leading provider of AI and technology solutions,
              empowering businesses with cutting-edge technology to drive innovation and growth.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experts specializes in artificial intelligence, cloud computing,
              cybersecurity, and digital transformation services. We help organizations
              leverage technology to achieve their business objectives.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver innovative technology solutions that transform businesses and
              create lasting value for our clients.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
=======
const About: React.FC = () => {;
  return (
    <div className="min-h-screen bg-gray-50">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>;
        <div className="prose max-w-none">;
          <p className="text-lg text-gray-600 mb-6">;
            Zion Tech is a leading technology company specializing in innovative solutions;
            for businesses of all sizes. We combine cutting-edge technology with deep;
            industry expertise to deliver exceptional results.;
          </p>;
          <p className="text-lg text-gray-600">;
            Our team of experienced professionals is dedicated to helping our clients;
            achieve their technology goals and drive business growth.;
          </p>;
        </div>;
      </div>;
    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  );
};
<<<<<<< HEAD

export default About;
=======
export default About;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
