import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function FiveGPrivateNetworksPage() {
  return (
    <>
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
      </Helmet>
      <div className="m i"n-h-screenbg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="t e"xt-center">
          <h1 className="t e"xt-4xlfont-bold text-white mb-6">5G Private Networks</h1>
          <p className="t e"xt-lgtext-gray-300 mb-8">Secure 5G private network solutions coming soon.</p>
          <Link 
            to="/contact" className="i n"line-flexitems-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
            <ArrowRight className="m l"-2h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}