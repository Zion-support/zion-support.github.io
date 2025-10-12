'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCirc l e, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart3 } from 'lucide-react';

export default function AIProjectManagementP r o() {
  constfeatures= [
    {
      icon: <BrainclassName="w-6h-6text-cyan-400" />,
      title: 'AI-PoweredProjectPlanning',
      description: 'Intellige n t project planning with automated resource allocation and timeline optimizati o n';
    },
    {
      icon: <ZapclassName="w-6h-6text-purple-400" />,
      title: 'Real-timeCollaboratio n',
      description: 'Seamless team collaborati o n with instant updates, notificatio n s, and progress tracking';
    },
    {
      icon: <ShieldclassName="w-6h-6text-yellow-400" />,
      title: 'Risk Management',
      description: 'Advanced risk assessment and mitigation strategies powered by machine learning';
    },
    {
      icon: <BarChart3className="w-6h-6text-green-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensi v e project insights, performan c e metrics, and predictive analytics';
    }
  ];

return (
    <>
      <Helmet></Helmet>
        <title>AI Project Management Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI project management, automation, productivi t y, Zion Tech Group" />
        <metaproperty="og:title" content="AI Project Management Pro - Zion Tech Group" />
        <metaproperty="og:description" content="Professional AI project management services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <metaproperty="og:type" content="website" />
        <metaproperty="og:url" content="https://ziontechgro u p.com/ai-project-management-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="containermx-autopx-4text-center">
            <h1 className="text-5xlmd:text-6xlfont-boldtext-whitemb-6">
              <span className="bg-gradient-to-rfrom-cyan-400via-purple-400to-pink-400bg-clip-texttext-transparent">
                AI Project Management Pro;
              </span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              Revolutioni z e your project management with AI-poweredtools.;
              Streamline workflows, boost productivi t y, and deliver projects on time and within budget.;
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <Link;
                to="/contact";
                className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
              >
                Get Started;
                <ArrowRight className="w-5h-5ml-2" />
              </Link>
              <Link;
                to="/services";
                className="borderborder-cyan-400text-cyan-400px-8py-4rounded-lgfont-semiboldhover:bg-cyan-400hover:text-whitetransition-allduration-300flexitems-centerjustify-center"
              >
                View All Services;
              </Link>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <h2 className="text-4xl font-boldtext-whitetext-centermb-16">
              Powerful Features;
            </h2>
            <div className="gridmd:grid-cols-2lg:grid-cols-4gap-8">
              {features.map((feature, index) => ())
                <divkey={index} className="bg-white/10backdrop-blur-smrounded-xlp-6hover:bg-white/20transition-allduration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="containermx-autopx-4text-center">
            <h2 className="text-4xl font-boldtext-whitemb-6">
              Ready to Transform Your Project Management?;
            </h2>
            <p className="text-xltext-gray-300mb-8max-w-2xlmx-auto">
              Join thousands of teams already using our AI-poweredprojectmanagement solutions to achieve better results.;
            </p>
            <Link;
              to="/contact";
              className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300inline-flexitems-center"
            >
              Contact Us Today;
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
