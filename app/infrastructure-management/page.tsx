import React  from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function InfrastructureManagementPage() {
  return (
    <div className="mi n-h-screenbg-gray-50">
      <Helmet />
        <title   />Infrastructure Management Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructure setup, management, and optimization services." />
      </Helmet>
      
    <>
      <section className="p t-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        <div className="ma x-w-7xlmx-autotext-center">
          <h1 className="tex t-3 xl sm:text-4xl md:text-5 xl font-bold text-white mb-4"  />Infrastructure Management
          </h1>
          <p className="tex t-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Complete IT infrastructure setup, management, and optimization services.
          </p>
          <div className="fle x flex-col sm:flex-rowgap-4justify-center">
            <Link to="/contact" className="b g-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-centerjustify-center" >
          Get Started
              
          <ArrowRight className="w-5 h-5ml-2"  />
        </Link>
            <Link to="/it-services" className="borde r-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">All IT Services
            </Link>
          </div>
      </section>

    <>
      <section className="p y-20px-4" />
        <div className="ma x-w-4 xlmx-autotext-center">
          <h2 className="tex t-3 xl font-boldtext-gray-900mb-6"   />Coming Soon</h2>
          <p className="tex t-xltext-gray-600mb-8">
              We're developing comprehensive infrastructure management services. Contact us to discuss your infrastructure needs.
          </p>
          <Link to="/contact" className="b g-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700transition-allduration-300">Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
    </>