import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  DocumentTextIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  UserIcon
} from '@heroicons/react/24/outline'

export default function TermsPage() {
  const lastUpdated = "January 15, 2024";

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6">
              These Terms of Service ("Terms") govern your use of our website and services provided by Zion Tech Group.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, 
              non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability 
              to use the materials on Zion Tech Group's website.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
