<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
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
=======
      title: 'Centralized API Control',
      description: 'Manage all your APIs from a single, intuitive dashboard with comprehensive monitoring and control capabilities.',
      benefits: ['Unified dashboard', 'Centralized control', 'Real-time monitoring', 'Easy management']},
    {title: 'Advanced Analytics',
      description: 'Get deep insights into API usage, performance metrics, and user behavior with AI-powered analytics.',
<<<<<<< HEAD
      benefits: ['Usage analytics', 'Performance metrics', 'User insights', 'Predictive analytics']},
    {title: 'Security & Compliance',
=======
      benefits: ['Usage analytics', 'Performance metrics', 'User insights', 'Predictive analytics']
    },
    {

      title: 'Security & Compliance',
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection.',
      benefits: ['Threat detection', 'Compliance monitoring', 'Security scanning', 'Access control']},
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
  ];

  const benefits = [
    'Benefit 1',
    'Benefit 2',
    'Benefit 3',
    'Benefit 4',
    'Benefit 5',
    'Benefit 6'
  ];
<<<<<<< HEAD
=======
  const stats = [
<<<<<<< HEAD
<<<<<<< HEAD
    {icon: <Settings className="w-8 h-8 text-blue-500" />, value: '500+', label: 'APIs Managed' ,},
    {icon: <Zap className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' ,},
    {icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Security' ,},
    {icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Efficiency Gain' ,}]
=======
    { icon: <Settings className="w-8 h-8 text-blue-500" />, value: '500+', label: 'APIs Managed' },
    { icon: <Zap className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Security' },
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '60%', label: 'Efficiency Gain' }
  ]
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">)</div>
      <Helmet />
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered API management platform by Zion Tech Group. Centralized control, analytics, and security for all your APIs." />
        <meta name="keywords" content="API manager, API platform, API analytics, API security, centralized management, Zion Tech Group" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function AIAPIManagerZionTechGroup() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
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
<<<<<<< HEAD
=======
            <button className="border border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">,</button>
=======
    { icon: <Settings className="w-8 h-8 text-blue-500" /></Settings>, value: '500+', label: 'APIs Managed' },
    { icon: <Zap className="w-8 h-8 text-green-500" /></Zap>, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" /></Shield>, value: '100%', label: 'Security' },
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" /></BarChart3>, value: '60%', label: 'Efficiency Gain' }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title></titl>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered API management platform by Zion Tech Group. Centralized control, analytics, and security for all your APIs." /></meta>
        <meta name="keywords" content="API manager, API platform, API analytics, API security, centralized management, Zion Tech Group" /></meta>

      </Helmet>
      <Navigation /></Navigation>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              View Demo,
  </
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4">
=======
<<<<<<< HEAD
      {/* Stats Section */} <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,</div>
            {stats.map((stat, index) => (
              <div key={index}className="text-center">
                <div className="flex justify-center mb-4">{stat.icon</div>} </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value</div>}</div>
                <div className="text-gray-300">{stat.label</div>}</div>
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
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
<<<<<<< HEAD
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
=======
                    <li key={benefitIndex}className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit</span>}</span>
=======
      {/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>

              Everything you need to manage your APIs effectively
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8"></div>

            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"></div>
                <h3 className="text-2xl font-bold text-white mb-4"></h>{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                      <span></spa>{benefit}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Benefits Section */}
      <section className="py-20 px-4">
=======
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
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
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
                </div>
                <h3 className="text-lg font-semibold text-white"></h>{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

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
=======
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
</div>
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
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
              </button>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      <Footer /></Footer>
    </div>
  ),
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
};

export default PagePage;
