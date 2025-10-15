import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Code } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Accessibility Solutions
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Making technology accessible to everyone through innovative solutions and 
            inclusive design practices.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                WCAG Compliance
              </h3>
              <p className="text-gray-600">
                Ensure your applications meet WCAG 2.1 AA standards for accessibility.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Inclusive Design
              </h3>
              <p className="text-gray-600">
                Design products that work for users with diverse abilities and needs.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Code className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technical Implementation
              </h3>
              <p className="text-gray-600">
                Implement accessibility features with clean, semantic code.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}