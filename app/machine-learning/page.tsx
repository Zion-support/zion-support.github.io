'use client';
import React from 'react';
import { Brain, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Cpu, Database, TrendingUp, Shield, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const MachineLearningPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Custom ML Model Development',
      description: 'Build tailored machine learning models for your specific business needs and data patterns.',
      features: ['Custom Algorithm Design', 'Data Preprocessing', 'Model Training', 'Performance Optimization'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Leverage historical data to predict future trends, behaviors, and outcomes with high accuracy.',
      features: ['Forecasting Models', 'Risk Assessment', 'Trend Analysis', 'Scenario Planning'],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Target,
      title: 'Recommendation Systems',
      description: 'Build intelligent recommendation engines that personalize user experiences and boost engagement.',
      features: ['Collaborative Filtering', 'Content-Based Filtering', 'Hybrid Approaches', 'Real-time Updates'],
      price: 'Starting at $2,200/month'
    },
    {
      icon: Zap,
      title: 'Automated Decision Making',
      description: 'Implement ML-powered decision systems that can process complex scenarios and make optimal choices.',
      features: ['Decision Trees', 'Neural Networks', 'Rule-based Systems', 'Continuous Learning'],
      price: 'Starting at $3,000/month'
    }
  ];

  const industries = [
    { name: 'Healthcare', applications: ['Diagnosis Support', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization'] },
    { name: 'Finance', applications: ['Fraud Detection', 'Credit Scoring', 'Algorithmic Trading', 'Risk Management'] },
    { name: 'E-commerce', applications: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Segmentation'] },
    { name: 'Manufacturing', applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation'] }
  ];

  const process = [
    {
      step: '01',
      title: 'Data Assessment',
      description: 'We analyze your data quality, volume, and structure to determine the best ML approach.',
      icon: Database
    },
    {
      step: '02',
      title: 'Model Design',
      description: 'Our experts design custom ML models tailored to your specific business requirements.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Training & Testing',
      description: 'We train models using your data and rigorously test them for accuracy and performance.',
      icon: Cpu
    },
    {
      step: '04',
      title: 'Deployment & Monitoring',
      description: 'We deploy your ML solution and provide ongoing monitoring and optimization services.',
      icon: TrendingUp
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Machine Learning Solutions - Zion Tech Group"
        description="Transform your business with custom machine learning solutions. Predictive analytics, recommendation systems, and automated decision making for enterprise success."
        keywords={['machine learning', 'ML solutions', 'predictive analytics', 'AI models', 'custom ML', 'enterprise ML']}
        canonicalUrl="https://ziontechgroup.com/machine-learning"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              Machine Learning Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Intelligent Automation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Leverage the power of machine learning to automate processes, predict outcomes, and make data-driven decisions. 
              Our custom ML solutions are designed to deliver measurable business value and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">95% Accuracy</h3>
                <p className="text-gray-300">Our ML models achieve industry-leading accuracy rates for predictive analytics and decision making.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">70% Cost Reduction</h3>
                <p className="text-gray-300">Automate manual processes and reduce operational costs through intelligent automation.</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">300% ROI</h3>
                <p className="text-gray-300">Our clients see an average 300% return on investment within the first year.</p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our ML Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-bold text-lg mb-4">{service.price}</div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Industry Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">Our ML Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Case Study */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text text-center">Success Story</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Fortune 500 Retailer</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    We implemented a custom recommendation system that increased customer engagement by 45% 
                    and boosted sales by 30% within 6 months. The ML model processes over 10 million 
                    customer interactions daily.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400">45%</div>
                      <div className="text-gray-300 text-sm">Engagement Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">30%</div>
                      <div className="text-gray-300 text-sm">Sales Boost</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-white mb-4">Key Results</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Personalized product recommendations
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Real-time customer behavior analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Automated inventory optimization
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      Dynamic pricing strategies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Harness the Power of ML?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how machine learning can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your ML Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default MachineLearningPage;