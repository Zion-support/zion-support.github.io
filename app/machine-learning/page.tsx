<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function MachineLearningZionTechGroup() {

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Machine Learning - Zion Tech Group</title>
        <meta name="description" content="Machine Learning solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Machine Learning</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive machine learning solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const MachineLearningPage: React.FC = () => {
  const features = [
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
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
=======
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
const MachineLearningPage: React.FC = () => {
  const services = [
    {
      title: 'Predictive Analytics',
      description: 'Build models that forecast future trends and behaviors with high accuracy',
      features: ['Time Series Forecasting', 'Customer Behavior Prediction', 'Sales Forecasting', 'Risk Assessment'],
      icon: BarChart;
      color: 'text-blue-400'},
    {
      title: 'Custom Model Development',
      description: 'Tailored machine learning models designed for your specific business needs',
      features: ['Algorithm Selection', 'Feature Engineering', 'Model Training', 'Performance Optimization'],
      icon: Brain;
      color: 'text-purple-400'},
    {
      title: 'Data Pipeline Setup',
      description: 'Automated data processing and preparation for machine learning workflows',
      features: ['Data Collection', 'Data Cleaning', 'Feature Extraction', 'Real-time Processing'],
      icon: Zap;
      color: 'text-green-400'},
    {
      title: 'Model Monitoring',
      description: 'Continuous monitoring and optimization of deployed machine learning models',
      features: ['Performance Tracking', 'Drift Detection', 'Model Retraining', 'Alert Systems'],
      icon: Target;
      color: 'text-cyan-400'}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

<<<<<<< HEAD
=======
export default function MachinelearningPage() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Machine Learning - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced machine learning solutions for your business." />
        <meta name="keywords" content="machine learning, AI, algorithms, data science" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Machine Learning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced machine learning solutions for your business.
=======
  return(<>
      <SEOOptimizer;
        title="Machine Learning Solutions - Zion Tech Group"
        description="Advanced machine learning solutions including predictive analytics, custom model development, and AI infrastructure. Transform your business with data-driven insights."
        keywords={['machine learning', 'predictive analytics', 'AI models', 'data science', 'ML solutions', 'custom AI development']}
        canonicalUrl="https: //ziontechgroup.com/machine-learning",
      />,
      <PerformanceOptimizer;
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer;
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer;
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24"></main>
          {/* Hero Section */}
          <section className="text-center mb-16"></section>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Machine Learning Solutions"></h1>
              Machine Learning Solutions;
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium"></p>
              Advanced AI Models for Business Intelligence;
            </p>,
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">,
              Transform your business with cutting-edge machine learning solutions. From predictive analytics;
              to custom AI models, we help you harness the power of data to drive growth and efficiency.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div>
=======
import React  from 'react';
const MachineLearningPage: React.FC = () => {
  return (
      <Helmet>
        <title>Machine Learning - Zion Tech Group</title>
        <meta name="description" content="Machine Learning services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="machine-learning, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Machine Learning
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional machine learning services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive machine learning solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
          </div>
      </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
=======
          {/* Services */})
          <section className="mb-16">)
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our ML Services</h2>)
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">),
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover: scale-105 transition-all duration-300">,
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Our ML Services</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{services.map((service, index) => (</section>
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <service.icon className={`w-16 h-16 ${service.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text text-center">{service.title}</h3><p className="text-gray-300 mb-4 text-sm text-center leading-relaxed">{service.description}</p><ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300"></li>
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
      <Footer />
    </>
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
=======
          {/* Benefits */}
          <section className="mb-16"></section>
            <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl font-bold text-white mb-6 text-center neon-text">Why Choose Our ML Solutions?</h2>
              <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,
                <div>,
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits</h3>,
                  <ul className="space-y-3">,
                    {benefits.map((benefit, index) => (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                <div></div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Key Benefits</h3><ul className="space-y-3">{benefits.map((benefit, index) => (</ul>
                      <li key={index} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div></div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Our Approach</h3>
                  <div className="space-y-4"></div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Data Analysis<p className="text-sm text-gray-300">Comprehensive analysis of your data landscape</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-purple-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Model Development<p className="text-sm text-gray-300">Custom ML models tailored to your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-green-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Deployment<p className="text-sm text-gray-300">Seamless integration and deployment</p>
                      </div>
                    </div>
                    <div className="flex items-start"></div>
                      <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">4</div>
                      <div></div>
                        <h4 className="font-semibold text-white">Monitoring<p className="text-sm text-gray-300">Continuous monitoring and optimization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center"></section>
            <div className="cyber-card p-8 max-w-4xl mx-auto"></section>
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Harness the Power of Machine Learning?</h2><p className="text-lg text-gray-300 mb-8">Our ML experts are ready to help you build custom models that transform your business.</p>
                Contact us today for a free consultation and discover the potential of your data.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                ></a>
                  Get Free Consultation;
                </a>
                <a;
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                ></a>
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950;
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>,
    </>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default MachineLearningPage;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import React from 'react';

const MachineLearningPage: React.FC = () => {return (
    <>
      <title>MachineLearning - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
        <meta name="description" content="Professional machine learning services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Machine Learning</h1>
          <p className="text-lg text-gray-300 mb-8">Professional machine learning services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
