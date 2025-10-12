import React from 'react';
import { ArrowRight } from 'lucide-react';

import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';

export default function InfrastructureManagementPage() {
  return (
    <div>
      <Helmet>
        <title>Infrastructure Management Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructure setup, management, and optimization services." />
      </Helmet>
      
      <section>
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Infrastructure Management
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Complete IT infrastructure setup, management, and optimization services.
          </p>
          <div>
            <Link;
to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link;
to="/it-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              All IT Services
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're developing comprehensive infrastructure management services. Contact us to discuss your infrastructure needs.
          </p>
          <Link;
to="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  </meta>
  </ArrowRight>
  );
}