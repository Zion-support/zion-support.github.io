import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiCustomerSupportBot() {
  return (
    <>
      <Helmet>
        <title>Ai Customer Support Bot - Zion Tech Group</title>
        <meta name="description" content="Professional ai customer support bot services for businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Customer Support Bot</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai customer support bot services coming soon.</p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}