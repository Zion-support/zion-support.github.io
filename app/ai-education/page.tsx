import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AieducationPage() {
  return (
    <div>
      <Helmet>
        <title>Ai Education - Zion Tech Group</title>
        <meta name="description" content="Professional ai education services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">Ai Education</h1>
        <p className="text-lg text-gray-300 mb-8">Professional ai education services coming soon.</p>
        <Link;
to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  </meta>
  </ArrowRight>
  );
}