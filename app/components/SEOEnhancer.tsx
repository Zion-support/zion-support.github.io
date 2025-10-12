'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, Zap, Shield, Globe, CheckCirc l e } from 'lucide-react';

<<<<<<< HEAD;
import { ArrowRight } from 'lucide-react';
=======;
import { Brain } from 'lucide-react';
>>>>>>> origin/main;
const SEOEnhanc e r: React.FC = () => {
  constfeatures= [
    {
      icon: Brain,
      title: 'AI-PoweredSEO',
      description: 'Advanced AI technology to optimize your website for search engines',
    },
    {
      icon: Zap,
      title: 'Real-timeAnalysis',
      description: 'Lightning-fastSEOanalysis and optimizati o n with instant recommendatio n s',
    },
    {
      icon: Shield,
      title: 'White-HatTechniques',
      description: 'Ethical SEO practices with long-termsustainabl e results and compliance',
    },
    {
      icon: Globe,
      title: 'Global Optimizati o n',
      description: 'Worldwide SEO optimizati o n and support for internation a l businesses',
    },
  ];

  constbenefits= [
    'Advanced AI technology integrati o n',
    'Real-timeprocessingand analytics',
    'Enterprise-gradesecurityand compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integrati o n with existing systems',
    'Cost-effectivepricingplans',
    'Proven track record of success',
  ];

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900">
      <Helmet></Helmet>
        <title>SEO Enhancer | Zion Tech Group</title>
        <meta name="description" content="Professional SEO Enhancer services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="SEO Enhancer, AI solutions, IT services, Zion Tech Group, search engine optimizati o n" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-boldtext-whitemb-6">
              <span className="bg-gradient-to-rfrom-purple-400to-blue-400bg-clip-texttext-transparent">
                SEO;
              </span>
              <br />
              <span className="text-white">Enhancer</span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xlmx-auto">
              Transform your website's search engine visibility with our advanced SEO enhanceme n t solutions.;
              Powered by cutting-edgeAItechnology and industry expertise.;
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-rfrom-purple-500to-blue-600text-whitepx-8py-3rounded-lgfont-semiboldhover:from-purple-600hover:to-blue-700transition-allduration-300flexitems-center">
                Get Started;
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="borderborder-gray-300text-whitepx-8py-3rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300">
                Learn More;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xlfont-boldtext-whitemb-4">
              Our Features;
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Discover the powerful features that make our SEO enhancer solutions stand out.;
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-8">
            {features.map((feature, index) => ())
              <divkey={index} className="bg-white/10backdrop-blur-smrounded-xlp-6hover:bg-white/20transition-allduration-300borderborder-white/20">
                <div className="bg-gradient-to-rfrom-purple-600to-blue-600w-12h-12rounded-lgflexitems-centerjustify-centermb-4">
                  <feature.iconclassName="w-6h-6text-white" />
                </div>
                <h3 className="text-xlfont-boldtext-whitemb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xlfont-boldtext-whitemb-4">
              Why Choose Our Solutions?;
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Experience the benefits of working with our cutting-edgeSEOenhancer solutions.;
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2gap-8">
            {benefits.map((benefit, index) => ())
              <divkey={index} className="flexitems-startspace-x-4">
                <div className="bg-gradient-to-rfrom-purple-600to-blue-600w-8h-8rounded-fullflexitems-centerjustify-centerflex-shrink-0mt-1">
                  <CheckCirc leclassName="w-5h-5text-white" />
                </div>
                <p className="text-gray-300text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10backdrop-blur-smrounded-3xlp-12borderborder-white/20text-center">
            <h2 className="text-3xlmd:text-4xlfont-boldtext-whitemb-6">
              Ready to Get Started?;
            </h2>
            <p className="text-xltext-gray-300mb-8max-w-2xlmx-auto">
              Contact us today to learn more about our SEO enhanceme n t solutions and how they can benefit your business.;
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-rfrom-purple-500to-blue-600text-whitepx-8py-3rounded-lgfont-semiboldhover:from-purple-600hover:to-blue-700transition-allduration-300">
                Contact Us
              </button>
              <button className="borderborder-whitetext-whitepx-8py-3rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300">
                Schedule Demo;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOEnhanc e r;