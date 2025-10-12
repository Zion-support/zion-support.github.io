import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client';


const MainPage: React.FC = () => {
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
        <title>Main | Zion Tech Group</title>
        <meta name="description" content="Professional Main services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="main, AI solutions, IT services, Zion Tech Group, main" />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h1 className="w-5h-5ml-2" />
              <span className="w-5h-5ml-2" />Main;
              </span>
              <br />
              <span className="text-white"  >Solutions</span>
            </h1>
            <p className="w-5h-5ml-2">Transform your business with our advanced main solutions.;
              Powered by cutting-edgeAItechnology and industry expertise.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
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
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Why Choose Our Main?;
            </h2>
            <p className="w-5h-5ml-2">Our main solutions deliver unmatched performan c e, security, and scalabili t y.;
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="bg-white/10backdrop-blur-smrounded-xlp-6borderborder-white/20hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <feature.iconclassName="h-6w-6text-white"  />
                </div>
                <h3 className="text-xlfont-semiboldtext-whitemb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Key Benefits;
            </h2>
            <p className="w-5h-5ml-2">Experience the power of our main solutions for your business.;
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {benefits.map((benefit, index) => ())
              <divkey="{index}" className="flexitems-startspace-x-3" />
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
            <h2 className="w-5h-5ml-2" />Ready to Get Started?;
            </h2>
            <p className="w-5h-5ml-2">Contact our experts to discuss your main needs and get a customized solution.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
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
    </div>
  )
};