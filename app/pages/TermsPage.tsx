import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - AI and IT Solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
            
            <div className="prose prose-invert max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              
              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
              </p>
              
              <h2>3. Disclaimer</h2>
              <p>
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
              
              <h2>4. Limitations</h2>
              <p>
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on Zion Tech Group's website.
              </p>
              
              <h2>5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors.
              </p>
              
              <h2>6. Links</h2>
              <p>
                Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site.
              </p>
              
              <h2>7. Modifications</h2>
              <p>
                Zion Tech Group may revise these terms of service for its website at any time without notice.
              </p>
              
              <h2>8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;