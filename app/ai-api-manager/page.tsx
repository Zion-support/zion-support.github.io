import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      title: 'Feature 2',
      description: 'Description of feature 2',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      title: 'Feature 3',
      description: 'Description of feature 3',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    }
      title: 'Advanced Analytics',
      description: 'Get deep insights into API usage, performance metrics, and user behavior with AI-powered analytics.',
      benefits: ['Usage analytics', 'Performance metrics', 'User insights', 'Predictive analytics']},
    {title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection.',
      benefits: ['Threat detection', 'Compliance monitoring', 'Security scanning', 'Access control']},
  ];

  const benefits = [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
    'Benefit 4',
    'Benefit 5',
    'Benefit 6'
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">)</div>
      <Helmet />
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered API management platform by Zion Tech Group. Centralized control, analytics, and security for all your APIs." />
        <meta name="keywords" content="API manager, API platform, API analytics, API security, centralized management, Zion Tech Group" />

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function AIAPIManagerZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional page solutions by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Page
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional page solutions by Zion Tech Group. Advanced AI and IT solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
            AI API Manager

          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"></p>
            Comprehensive API management platform with AI-powered insights, security, and optimization
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
              Get Started
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              View Demo,
  </
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
            {stats.map((stat, index) => (
              <div key={index}className="text-center">
                <div className="flex justify-center mb-4">{stat.icon</div>} </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
      {/* Stats Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-6xl mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div>
                <div className="flex justify-center mb-4"></div>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2"></di>{stat.value}</div>
                <div className="text-gray-300"></di>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */} <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Page Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced solutions designed for modern business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-4"></h>{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                      <span></spa>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Page?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h>Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>

              Experience the benefits of our comprehensive API management solution
            </p>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                  <CheckCircle className="w-8 h-8 text-white" /></CheckCircle>
                </div>
                <h3 className="text-lg font-semibold text-white"></h>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your business with our page solutions today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">,</h2>
              Ready to Manage Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Start managing your APIs more effectively with our comprehensive platform.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">,</button>
                Start Free Trial;
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
                Contact Sales;
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6"></h2>
              Ready to Manage Your APIs?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Start managing your APIs more effectively with our comprehensive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                  )}
        <Footer />
      </div>
    </>
  );
};

export default PagePage;
  )
}
export default AIApiManagerPage
        {
      icon: Target,
      title: 'Precision Management',
      description: 'Target specific API endpoints and optimize them with precision and accuracy.',
      benefits: ['Endpoint optimization', 'Performance tuning', 'Strategic planning', 'Success metrics']
    },
        {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your API infrastructure for business growth with data-driven strategies.',
      benefits: ['Scalability planning', 'Performance analysis', 'Cost optimization', 'ROI tracking']
import     { CheckCircle, ArrowRight } from 'lucide-react';
const PagePage: React.FC = () => {
};
  const features = [
[
        {
      title: 'Feature 1',
      description: 'Description of feature 1',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
        {
      icon: Globe,
      title: 'Global Distribution',
      description: 'Distribute your APIs globally with intelligent routing and caching.',
      benefits: ['Global CDN', 'Edge computing', 'Load balancing', 'Geographic optimization']
    },
        {
      title: 'Feature 3',
      description: 'Description of feature 3',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    };
  ];
const benefits = [
;
];
const benefits = [
];
    'Benefit 1',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'    'Benefit 1',
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <title>Ai Api Manager - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai api manager solution for modern businesses." />
        <meta name="keywords" content="AI ai api manager, artificial intelligence, ai api manager, AI solutions, intelligent automation" />
      </Helmet>
    'Benefit 2',
    'Benefit 3',
    'Benefit 4',
    'Benefit 5',
    'Benefit 6'
        {/* Features Section */};
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered API Manager
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your API management with our intelligent platform. Get real-time monitoring, 
                optimization, and security for all your APIs in one place.
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
            </div>
          </div>
        </section>
        {/* Features Section */};
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful API Management Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive API management platform provides everything you need to build, deploy, and scale APIs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature .icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (<li key={idx} className="flex items-center text-sm text-gray-400">
                          {benefit};
                        </li>
                      ));
                    </ul>);
                </div>
              ))};
            </div>
          </div>
        </section>
        {/* Use Cases Section */};
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI API management platform can transform your development workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase .icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ));
            </div>
          </div>
        </section>
        {/* Benefits Section */};
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our API Manager?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered API management platform is designed to help you build, deploy, 
                  and scale APIs efficiently while maintaining security and performance.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))};
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Code className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Developer-First Design</h3>
                    <p className="text-gray-300 mb-6">
                      Built by developers for developers, with intuitive tools and comprehensive documentation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-gray-300 text-sm">Uptime</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">50ms</div>
                        <div className="text-gray-300 text-sm">Response Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              ));
            </div>
          </div>
        </section>
        {/* CTA Section */};
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your API Management?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start building better APIs with our AI-powered management platform. 
                Get started today and see the difference intelligent API management can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      <Footer />
      </div>
    </>
        <Footer />
      </div>
    </div>
  );
};
    </div>)
export default PagePage;
      </section>export default AiApiManagerPage;
export default PagePage;
import Footer from '../components/Footer';
  return (
    <>
      <Helmet>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI platform can revolutionize your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI platform.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

