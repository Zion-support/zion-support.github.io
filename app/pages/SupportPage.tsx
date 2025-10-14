import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support from our expert team" />
        <meta name="keywords" content="support, help, customer service, technical support" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-9 00via-purple-9 0 0to-slate-9 0 0">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Support</h1>
            <p className="text-xl text-gray-300 mb-8">
              Get help and support from our expert team
            </p>
            <div className="text-gray-40 0">
              <p>Support information coming soon...</p>
              </div>
        </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </>
  )
  };

export default SupportPage;