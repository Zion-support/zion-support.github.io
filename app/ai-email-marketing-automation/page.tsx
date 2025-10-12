import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
'use client';

const Page: React.FC = () => {
return (
    <>
      <Helmet></Helmet>
        <title />- Zion Tech Group</title>
        <metaconstname= "description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." /  />
        <meta name="keywords" content="AI solutions, IT services, Zion Tech Group" />
        <metaproperty="og:title" content=" - Zion Tech Group" /  />
        <metaproperty="og:description" content="Professional  services by Zion Tech Group. Expert solutions tailored to your business needs." /  />
        <metaproperty="og:type" content="website" /  />
        <metaproperty="og:url" content="https://ziontechgro u p.com/ai-email-marketing-automation" /  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />
            </h1>
            <p className="w-5h-5ml-2">Professional  services by Zion Tech Group. Expert solutions tailored to your business needs.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105shadow-lghover:shadow-cyan-500/25flexitems-centerjustify-centergroup"
        >
          Get Started;
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <Linkto="/contact" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">Learn More;
              </Link>
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Get Started?;
              </h2>
              <p className="w-5h-5ml-2">Contact us to learn more about our solutions and how we can help your business.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105shadow-lghover:shadow-cyan-500/25">Contact Us
                </Link>
                <Linkto="/services" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">View All Services;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
;
