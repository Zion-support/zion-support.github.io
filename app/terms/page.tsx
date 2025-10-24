'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Shield } from 'lucide-react';

const PagePage: React.FC = () => {}
  const features = [
    {}
    title: 'Page',
      description: 'Professional page services for modern businesses.',
      benefits: ['Expert Solutions', 'Advanced Technology', 'Proven Results', '24/7 Support']
    },
    {}
    title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {}
    title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

  return ()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services and solutions." /></meta>
        <meta name="keywords" content="page, services, solutions, technology" /></meta>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              These terms of service govern your use of Zion Tech Group's services and website.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on our website
              for personal, non-commercial transitory viewing only.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these terms, please contact us at legal@ziontechgroup.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}