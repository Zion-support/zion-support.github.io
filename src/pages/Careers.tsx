import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join our team and help shape the future of technology
            </p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600">
                We're always looking for talented individuals to join our team
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Senior AI Engineer
                </h3>
                <p className="text-gray-600 mb-4">
                  We're looking for an experienced AI engineer to join our team and help develop 
                  cutting-edge artificial intelligence solutions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">Full-time • Remote</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Cloud Solutions Architect
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our team as a Cloud Solutions Architect and help design and implement 
                  scalable cloud infrastructure solutions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">Full-time • Hybrid</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  DevOps Engineer
                </h3>
                <p className="text-gray-600 mb-4">
                  We're seeking a DevOps Engineer to help streamline our development processes 
                  and improve our infrastructure automation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">Full-time • Remote</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Don't See a Position That Fits?
                </h3>
                <p className="text-gray-600 mb-6">
                  We're always interested in hearing from talented individuals. 
                  Send us your resume and let us know how you'd like to contribute.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Send Us Your Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;