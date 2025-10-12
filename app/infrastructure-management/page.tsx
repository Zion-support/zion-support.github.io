import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InfrastructureManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50" />
      <Helmet />
        <title>Infrastructure Management Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructure setup, management, and optimization services."  />
      </Helmet>
      
      <section className="pt-20 px-4 py-12sm:py-16lg:py-20bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="max-w-7xl mx-auto text-center" />
          <h1 className="text-3xlsm:text-4xlmd:text-5xlfont-bold text-whitemb-4"  />Infrastructure Management
          </h1>
          <p className="text-lgsm:text-xltext-gray-300 max-w-3xl mx-auto mb-8">
            Complete IT infrastructure setup, management, and optimization services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4justify-center" />
            <Link
          to="/contact"
              className="bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-8py-4rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
             
        >
          Get Started
              
          <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/it-services"
              className="border-2 border-white text-whitepx-8py-4rounded-lg font-semibold hover:bg-white/10 transition-colors"
              />All IT Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20px-4" />
        <div className="max-w-4xl mx-auto text-center" />
          <h2 className="text-3xlfont-bold text-gray-900 mb-6"  >Coming Soon</h2>
          <p className="text-xltext-gray-600 mb-8">
            We're developing comprehensive infrastructure management services. Contact us to discuss your infrastructure needs.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-rfrom-purple-600 to-pink-600 text-whitepx-8py-4rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            />Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}