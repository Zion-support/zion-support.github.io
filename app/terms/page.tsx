import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's terms of service. Read our terms and conditions for using our AI and IT services." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>
            
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-6">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 mb-6">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not modify or copy the materials.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Availability</h2>
              <p className="text-gray-700 mb-6">
                We strive to provide continuous service availability, but we do not guarantee that our services 
                will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue 
                any part of our services at any time.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-700 mb-6">
                You are responsible for maintaining the confidentiality of your account and password. You agree 
                to accept responsibility for all activities that occur under your account or password.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Prohibited Uses</h2>
              <p className="text-gray-700 mb-6">
                You may not use our services for any unlawful purpose or to solicit others to perform unlawful 
                acts. You may not violate any international, federal, provincial, or state regulations, rules, 
                laws, or local ordinances.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@ziontechgroup.com
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: New York, NY
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;