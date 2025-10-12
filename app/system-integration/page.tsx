'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Cloud } from 'lucide-react';

const Page: React.FC = () => {
  constfeatures= [
    {
      icon: <CloudclassName="w-5h-5ml-2" />,
      title: "Cloud Integrati o n",
      description: "Seamlessly integrate with all major cloud platforms and services.";
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: "Real-timeSync",
      description: "Keep all your systems synchroniz e d with real-timedataupdates.";
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: "Secure & Reliable",
      description: "Enterprise-gradesecurityensures your data is protected during integrati o n.";
    }
  ];

return (
    <>
      <Helmet></Helmet>
        <title />System Integrati o n - Zion Tech Group</title>
        <meta name="description" content="Professional system integrati o n services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="system integrati o n, IT services, Zion Tech Group" />
        <metaproperty="og:title" content="System Integrati o n - Zion Tech Group" />
        <metaproperty="og:description" content="Professional system integrati o n services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <metaproperty="og:type" content="website" />
        <metaproperty="og:url" content="https://ziontechgro u p.com/system-integration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />
                System Integrati o n;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional system integrati o n services by Zion Tech Group. Expert solutions tailored to your business needs.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105shadow-lghover:shadow-cyan-500/25flexitems-centerjustify-centergroup"
        >
          Get Started;
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <Linkto="/contact" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105" />
                Learn More;
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Why Choose Our System Integrati o n Services?;
              </h2>
              <p className="w-5h-5ml-2">Our expert team helps you connect and optimize all your business systems;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey={index} className="bg-slate-800/50backdrop-blur-smborderborder-slate-700rounded-xlp-8text-centerhover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Ready to Get Started?;
              </h2>
              <p className="w-5h-5ml-2">Contact us to learn more about our solutions and how we can help your business.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Linkto="/services" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105" />
                  View All Services;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;