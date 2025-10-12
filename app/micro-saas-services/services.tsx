import React from 'react';
'use client'
import {Helmet} from 'react-helmet-async';

import {ArrowRight, Mail, Brain} from 'lucide-react';
const Services Page: React.FC = () => {
  constfeatures = [
    {
      icon: Brain,
      title: 'AI- Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];
  constbenefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet>
        <title>Services | ZionTech Group</title>
        <meta name ="description" content="Professional Services servicesby Zion Tech Group. Advanced AI and IT solutionsfor yourbusiness." />
        <meta name ="keywords" content="services, AIsolutions, ITservices, Zion Tech Group, services" />
      </Helmet>
      {/* HeroSection */}
      <sectionclassName ="relativepy-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-center" />
            <h1className ="text-4xlmd:text-6xlfont-boldtext-whitemb-6" />
              <spanclassName ="bg-gradient-to-rfrom-purple-400 to-blue-400bg-clip-texttext-transparent" />
                Services

              <spanclassName ="text-white">Solutions</span>
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8max-w-3xlmx-auto" />
              Transformyour businesswith ouradvanced servicessolutions.
              Poweredby cutting-edgeAI technologyand industryexpertise.
            </p>
            <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
              <buttonclassName ="bg-gradient-to-rfrom-purple-500 to-blue-600 text-white px-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300flexitems-center" />
                GetStarted
                <Arrow Rightclass Name="ml-2h-5w-5" />
              </button>
              <buttonclassName ="borderborder-whitetext-white px-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />
                LearnMore
  </
            </div>
          </div>
        </div>
      </section>
      {/* FeaturesSection */}
      <sectionclassName ="py-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-3xlmd:text-4xlfont-boldtext-whitemb-4" />
              WhyChoose OurServices?
            </h2>
            <pclassName ="text-xltext-gray-300max-w-3xlmx-auto" />
              Ourservices solutionsdeliver unmatchedperformance, security, andscalability.
            </p>
          </div>
          <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
            {features.map((feature, index) => (
              <divkey ={index} className="bg-white/10 backdrop-blur-smrounded-xlp-6 borderborder-white/20 hover:bg-white/20transition-allduration-300" />
                <div className ="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-purple-500 to-blue-600rounded-lgmb-4" />
                  <feature.iconclassName ="h-6w-6text-white" />
                </div>
                <h3className ="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <pclassName ="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <sectionclassName ="py-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Key Benefits
  </
            <pclassName ="text-xl text-gray-300max-w-3xlmx-auto" />
              Experience the power of our services solutions for your business.
            </p>
          </div>
          <div className ="grid grid-cols-1md:grid-cols-2gap-6" />
            {benefits.map((benefit, index) => (
              <divkey ={index} className="flexitems-startspace-x-3" />
                <Check Circleclass Name="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <pclassName ="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <sectionclassName ="py-20 px-4sm:px-6lg:px-8" />
        <div className ="max-w-4xlmx-autotext-center" />
          <div className ="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xlp-8md:p-12" />
            <h2className ="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Ready to Get Started?
            </h2>
            <pclassName ="text-xltext-purple-100mb-8" />
              Contact our experts to discuss your services needs and get a customized solution.
            </p>
            <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
              <buttonclassName ="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flexitems-centerjustify-center" />
                <Phoneclass Name ="mr-2h-5w-5" />
                Call Now
  </
              <buttonclassName ="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flexitems-centerjustify-center" />
                <Mailclass Name ="mr-2h-5w-5" />
                Email Us
  </
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
export default Services Page
  </button>
  </button>
  </h2>
  </button>
  </span>

    {icon: Brain,
      title: 'AI- Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'}
    },
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'}
    },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'}
    },
    {icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'}
    }
  ];constbenefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];return (<div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"></div>
      <Helmet />
        <title>Services | ZionTech Group</title>
        <meta name ="description" content="Professional Services servicesby Zion Tech Group. Advanced AI and IT solutionsfor yourbusiness." />
        <meta name ="keywords" content="services, AIsolutions, ITservices, Zion Tech Group, services" />
      </Helmet>
      {/* HeroSection */}
      <sectionclassName ="relativepy-20 px-4sm:px-6lg:px-8"></section>
        <div className ="max-w-7xlmx-auto"></div>
          <div className ="text-center"></div>
            <h1className ="text-4xlmd:text-6xlfont-boldtext-whitemb-6" />
              <spanclassName ="bg-gradient-to-rfrom-purple-400 to-blue-400bg-clip-texttext-transparent" />
                Services
              </span>
              <br />
              <spanclassName ="text-white">Solutions</span>
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8max-w-3xlmx-auto" />
              Transformyour businesswith ouradvanced servicessolutions.
              Poweredby cutting-edgeAI technologyand industryexpertise.
            </p>
            <div className ="flexflex-colsm:flex-rowgap-4justify-center"></div>
              <buttonclassName ="bg-gradient-to-rfrom-purple-500 to-blue-600 text-white px-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300flexitems-center" />
                GetStarted
                <Arrow Rightclass Name="ml-2h-5w-5" />
              </button>
              <buttonclassName ="borderborder-whitetext-white px-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />
                LearnMore
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* FeaturesSection */}
      <sectionclassName ="py-20 px-4sm:px-6lg:px-8"></section>
        <div className ="max-w-7xlmx-auto"></div>
          <div className ="text-centermb-16"></div>
            <h2className ="text-3xlmd:text-4xlfont-boldtext-whitemb-4" />
              WhyChoose OurServices?
            </h2>
            <pclassName ="text-xltext-gray-300max-w-3xlmx-auto" />
              Ourservices solutionsdeliver unmatchedperformance, security, andscalability.
            </p>
          </div>
          <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (}
              <divkey ={index} className="bg-white/10 backdrop-blur-smrounded-xlp-6 borderborder-white/20 hover:bg-white/20transition-allduration-300"></div>
                <div className ="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-purple-500 to-blue-600rounded-lgmb-4"></div>
                  <feature.iconclassName ="h-6w-6text-white" />
                </div>
                <h3className ="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <pclassName ="text-gray-300">{feature.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <sectionclassName ="py-20 px-4 sm:px-6lg:px-8bg-white/5"></section>
        <div className ="max-w-7xlmx-auto"></div>
          <div className ="text-centermb-16"></div>
            <h2className ="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Key Benefits
            </h2>
            <pclassName ="text-xl text-gray-300max-w-3xlmx-auto" />
              Experience the power of our services solutions for your business.
            </p>
          </div>
          <div className ="grid grid-cols-1md:grid-cols-2gap-6"></div>
            {benefits.map((benefit, index) => (}
              <divkey ={index} className="flexitems-startspace-x-3"></div>
                <Check Circleclass Name="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <pclassName ="text-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <sectionclassName ="py-20 px-4sm:px-6lg:px-8"></section>
        <div className ="max-w-4xlmx-autotext-center"></div>
          <div className ="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xlp-8md:p-12"></div>
            <h2className ="text-3xl md:text-4xl font-boldtext-whitemb-4" />
              Ready to Get Started?
            </h2>
            <pclassName ="text-xltext-purple-100mb-8" />
              Contact our experts to discuss your services needs and get a customized solution.
            </p>
            <div className ="flex flex-col sm:flex-rowgap-4justify-center"></div>
              <buttonclassName ="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flexitems-centerjustify-center" />
                <Phoneclass Name ="mr-2h-5w-5" />
                Call Now
              </button>
              <buttonclassName ="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flexitems-centerjustify-center" />
                <Mailclass Name ="mr-2h-5w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>