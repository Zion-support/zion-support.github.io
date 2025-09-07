import React from 'react';
import Link from 'next/link';
};
export default function AboutPage() {
}
return (;
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">"
      <div className="container mx-auto px-4 py-20">"
        <div className="text-center mb-16">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            We are a leading technology company specializing in AI solutions,
            micro SaaS development, and comprehensive enterprise IT services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses with innovative AI and technology solutions 
                that transform operations and drive sustainable growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the global leader in AI-powered business solutions, 
                making advanced technology accessible to enterprises of all sizes.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge AI and technology solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h3>
                <p className="text-gray-600">500+ specialized services and solutions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRightIcon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Results</h3>
                <p className="text-gray-600">Proven track record of success</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
import { ArrowRightIcon } from '@heroicons/react/24/outline';
