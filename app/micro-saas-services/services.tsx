import React from 'react';
'use client';
import { Helmet } from 'react-helmet-async';

import { ArrowRight, Mail, Brain } from 'lucide-react';
const ServicesPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: Brain,
      title: 'AI-PoweredSolutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performan c e',
      description: 'Lightning-fastprocessingand real-timeanalyticsfor optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-levelsecuritywith encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for internation a l businesses',
    }
  ];
  constbenefits= [
    'Advanced AI technology integrati o n',
    'Real-timeprocessingand analytics',
    'Enterprise-gradesecurityand compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integrati o n with existing systems',
    'Cost-effectivepricingplans',
    'Proven track record of success';
  ];
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />
                Services;

              <span className="text-white">Solutions</span>
            </h1>
            <p className="w-5h-5ml-2">Transform your business with our advanced services solutions.;
              Powered by cutting-edgeAItechnology and industry expertise.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <button className="w-5h-5ml-2" />
                Get Started;
                <ArrowRight className="w-5h-5ml-2" />
              </button>
              <button className="w-5h-5ml-2" />
                Learn More;
  </;
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Why Choose Our Services?;
            </h2>
            <p className="w-5h-5ml-2">Our services solutions deliver unmatched performan c e, security, and scalabili t y.;
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey={index} className="bg-white/10backdrop-blur-smrounded-xlp-6borderborder-white/20hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <feature.iconclassName="h-6w-6text-white" />
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Key Benefits;
  </;
            <p className="w-5h-5ml-2">Experience the power of our services solutions for your business.;
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {benefits.map((benefit, index) => ())
              <divkey={index} className="flexitems-startspace-x-3" />
                <CheckCirc leclassName="w-5h-5ml-2" />
                <p className="text-gray-300text-lg">{benefit}</p>
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
            <p className="w-5h-5ml-2">Contact our experts to discuss your services needs and get a customized solution.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <button className="w-5h-5ml-2" />
                <PhoneclassName="w-5h-5ml-2" />
                Call Now;
  </;
              <button className="w-5h-5ml-2" />
                <MailclassName="w-5h-5ml-2" />
                Email Us;
  </;
            </div>
        </div>
      </section>
    </div>
  )}
export default ServicesPa g e
  </button>
  </button>
  </h2>
  </button>
  </span>

    {icon: Brain,
      title: 'AI-PoweredSolutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',}
    },
    {icon: Zap,
      title: 'High Performan c e',
      description: 'Lightning-fastprocessingand real-timeanalyticsfor optimal results',}
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-levelsecuritywith encryption and compliance standards',}
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for internation a l businesses',}
    }
  ];constbenefits= [
    'Advanced AI technology integrati o n',
    'Real-timeprocessingand analytics',
    'Enterprise-gradesecurityand compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integrati o n with existing systems',
    'Cost-effectivepricingplans',
    'Proven track record of success';
  ];return (<div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900"></div>)
      <Helmet></Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
      {/* Hero Section */}
      <section className="relativepy-20px-4sm:px-6lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center"></div>
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />
                Services;
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="w-5h-5ml-2">Transform your business with our advanced services solutions.;
              Powered by cutting-edgeAItechnology and industry expertise.;
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center"></div>
              <button className="w-5h-5ml-2" />
                Get Started;
                <ArrowRight className="w-5h-5ml-2" />
              </button>
              <button className="w-5h-5ml-2">Learn More;
              </button>
            </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="w-5h-5ml-2" />
              Why Choose Our Services?;
            </h2>
            <p className="w-5h-5ml-2">Our services solutions deliver unmatched performan c e, security, and scalabili t y.;
            </p>
          </div>
          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (}))
              <divkey={index} className="bg-white/10backdrop-blur-smrounded-xlp-6borderborder-white/20hover:bg-white/20transition-allduration-300"></div>
                <div className="flexitems-centerjustify-centerw-12h-12bg-gradient-to-rfrom-purple-500to-blue-600rounded-lgmb-4"></div>
                  <feature.iconclassName="h-6w-6text-white" />
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-centermb-16"></div>
            <h2 className="w-5h-5ml-2" />
              Key Benefits;
            </h2>
            <p className="w-5h-5ml-2">Experience the power of our services solutions for your business.;
            </p>
          </div>
          <div className="gridgrid-cols-1md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}))
              <divkey={index} className="flexitems-startspace-x-3"></div>
                <CheckCirc leclassName="w-5h-5ml-2" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8"></section>
        <div className="max-w-4xlmx-autotext-center"></div>
          <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xlp-8md:p-12"></div>
            <h2 className="w-5h-5ml-2" />
              Ready to Get Started?;
            </h2>
            <p className="w-5h-5ml-2">Contact our experts to discuss your services needs and get a customized solution.;
            </p>
            <div className="flexflex-colsm:flex-rowgap-4justify-center"></div>
              <button className="w-5h-5ml-2" />
                <PhoneclassName="w-5h-5ml-2" />
                Call Now;
              </button>
              <button className="w-5h-5ml-2" />
                <MailclassName="w-5h-5ml-2" />
                Email Us;
              </button>
            </div>
        </div>
      </section>