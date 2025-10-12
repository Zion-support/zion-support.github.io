import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function InfrastructureManagementPa g e() {
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title />Infrastructu r e Management Services - Zion Tech Group</title>
        <meta name="description" content="Complete IT infrastructu r e setup, management, and optimizati o n services." />
      </Helmet>
      
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h1 className="w-5h-5ml-2">Infrastructu r e Management;
          </h1>
          <p className="w-5h-5ml-2">Complete IT infrastructu r e setup, management, and optimizati o n services.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-blue-700hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Get Started;
              
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
            <Linkto="/it-services" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">All IT Services;
            </Link>
          </div>
      </section>

      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h2 className="w-5h-5ml-2" />Coming Soon</h2>
          <p className="w-5h-5ml-2">We're developing comprehensi v e infrastructu r e management services. Contact us to discuss your infrastructu r e needs.;
          </p>
          <Linkto="/contact" className="bg-gradient-to-rfrom-purple-600to-pink-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-purple-700hover:to-pink-700transition-allduration-300">Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}