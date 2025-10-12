import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function InfrastructureManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title />Infrastructure Management Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructure setup, management, and optimization services." />
      </Helmet>
      
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <h1 className="w-5 h-5ml-2">Infrastructure Management
          </h1>
          <p className="w-5 h-5ml-2">Complete IT infrastructure setup, management, and optimization services.
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-blue-600to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center"
        >
          Get Started
              
          <ArrowRight className="w-5 h-5ml-2" />
        </Link>
            <Link to="/it-services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10 transition-colors">All IT Services
            </Link>
          </div>
      </section>

      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <h2 className="w-5 h-5ml-2" />Coming Soon</h2>
          <p className="w-5 h-5ml-2">We're developing comprehensive infrastructure management services. Contact us to discuss your infrastructure needs.
          </p>
          <Link to="/contact" className="bg-gradient-to-rfrom-purple-600to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700transition-allduration-300">Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
