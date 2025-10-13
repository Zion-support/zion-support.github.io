<<<<<<< HEAD
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'
const PagePage: React.FC = () => {
<<<<<<< HEAD
  const features = [
=======
<<<<<<< HEAD
    const features = [
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    {
=======
};
return (;
const features = [
[
        {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
        {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
        {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
        {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
        {
      icon: Globe,
      title: 'Global Reach',
      description: 'Scale your solutions globally with intelligent distribution.',
      benefits: ['Global deployment', 'Edge computing', 'Load balancing', 'Geographic optimization']
    },
        {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enterprise-grade security to protect your data and operations.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    };
  ];
  const benefits = [
];
    'Transform your business with AI technology',
    'Make data-driven decisions with confidence',
    'Identify trends and opportunities early',
    'Optimize business processes and workflows',
    'Reduce costs through intelligent automation',
    'Gain competitive advantage with advanced technology'
  ];
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solution powered by artificial intelligence." />
        <meta name="keywords" content="page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        {/* Hero Section */};
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Advanced page solution powered by artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>}{/* Features Section */}
      <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
=======
      </section>
<<<<<<< HEAD
  }
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Why Choose Our Page?,</h2>
            </h2>
<<<<<<< HEAD
            <p>Our page solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature />
=======
            <p>
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                  <feature.icon className="w-8 h-8 text-white" />
=======
);
};
        {/* Features Section */};
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive platform provides everything you need to succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature .icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))};
                  </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Key Benefits;</h2>
=======
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>
=======
      {/* Benefits Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              Key Benefits
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </h2>
            <p>Experience the power of our page solutions for your business.,</p>
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                <CheckCircle />
                <p className="text-gray-300 text-lg">{benefit</p>}</p>
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle>
                <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
            <h2>Ready to Get Started?</h2>
            </h2>
            <p>Contact our experts to discuss your page needs and get a customized solution.</p>
=======
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p>
=======
      {/* CTA Section */};
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              Contact our experts to discuss your page needs and get a customized solution.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>
                <Phone>
                Call Now;
              </button>
              <button>
                <Mail>
                Email Us;
              </button>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  ),
=======
=======
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
};

export default PagePage;

import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
const SpecializedServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your operations worldwide with our robust infrastructure',}];
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce operational costs by 30%',
    'Improve decision-making with real-time insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with cutting-edge technology',
    'Ensure 99.9% uptime and reliability'
  ]

  return (
    <>
  <Helmet />
        <title>Specialized Services - Zion Tech Group</title>
        <meta name="description" content="Advanced specialized services for modern businesses including AI solutions, automation, and digital transformation." />
        <meta name="keywords" content="specialized services, AI solutions, automation, digital transformation, business optimization" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */</div>} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6">,</h1>
              Specialized Services;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Advanced specialized services designed to transform your business with cutting-edge technology and expert solutions.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Get Started;
              </button>
              <button className="border border-purple-400 text-purple-400 hover: bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                View Demo;
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our specialized solutions deliver unmatched performance, security, and scalability.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">,</div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">,</section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
                Key Benefits;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our specialized solutions for your business.</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
              {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12">,</div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your specialized service needs and get a customized solution.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now;
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
<<<<<<< HEAD
  ),
};

export default SpecializedServicesPage;

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  )
}
export default SpecializedServicesPage
=======
    </div>)
export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
