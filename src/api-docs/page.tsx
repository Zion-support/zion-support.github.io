import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ApiDocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">API Documentation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive API documentation for integrating with our AI and IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">REST API</h3>
              <p className="text-gray-300 mb-4">
                Complete REST API documentation with examples and interactive testing
              </p>
              <Link
                to="/api/rest"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Documentation →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">GraphQL API</h3>
              <p className="text-gray-300 mb-4">
                Flexible GraphQL API for efficient data fetching and real-time updates
              </p>
              <Link
                to="/api/graphql"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Documentation →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">WebSocket API</h3>
              <p className="text-gray-300 mb-4">
                Real-time communication API for live updates and streaming data
              </p>
              <Link
                to="/api/websocket"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                View Documentation →
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Getting Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you integrate our APIs successfully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our solutions can help your business.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ApiDocsPage;