import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Briefcase, BarChart, Users, DollarSign, Clock, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const BusinessAppsPage: React.FC = () => {
  const apps = [
    {
      icon: Briefcase,
      title: 'CRM & Sales Management',
      description: 'AI-powered customer relationship management with intelligent lead scoring',
      features: ['Automated lead qualification', 'Predictive analytics', 'Sales forecasting'],
      price: 'Starting at $199/month'
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Real-time analytics and reporting dashboard for data-driven decisions',
      features: ['Custom dashboards', 'Automated reports', 'Data visualization'],
      price: 'Starting at $299/month'
    },
    {
      icon: Users,
      title: 'HR Management Suite',
      description: 'Complete human resources management with AI-powered insights',
      features: ['Employee onboarding', 'Performance tracking', 'Payroll automation'],
      price: 'Starting at $249/month'
    },
    {
      icon: DollarSign,
      title: 'Financial Management',
      description: 'Automated accounting and financial planning tools',
      features: ['Expense tracking', 'Invoice generation', 'Budget planning'],
      price: 'Starting at $179/month'
    },
    {
      icon: Clock,
      title: 'Project Management',
      description: 'AI-enhanced project tracking and team collaboration platform',
      features: ['Task automation', 'Resource allocation', 'Timeline optimization'],
      price: 'Starting at $149/month'
    },
    {
      icon: Shield,
      title: 'Compliance Manager',
      description: 'Automated compliance monitoring and regulatory reporting',
      features: ['Risk assessment', 'Audit trails', 'Regulatory updates'],
      price: 'Starting at $399/month'
    }
  ];

  const benefits = [
    'Streamlined business processes',
    'Reduced operational costs',
    'Improved team productivity',
    'Real-time data insights',
    'Automated routine tasks',
    'Enhanced decision making',
    'Scalable solutions',
    '24/7 support available'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Business Applications
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            AI-Powered Business Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business operations with our comprehensive suite of AI-powered business applications. 
            From CRM to financial management, we provide everything you need to run a modern, efficient business.
          </p>
        </section>

        {/* Apps Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our Business Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">
                  <app.icon className="w-12 h-12 mx-auto text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {app.title}
                </h3>
                <p className="text-gray-300 mb-4 text-center leading-relaxed">
                  {app.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400 mb-4">
                    {app.price}
                  </div>
                  <button className="cyber-button w-full">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Business Apps?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Seamless Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Easy Setup</h3>
                <p className="text-gray-300">Quick deployment with minimal configuration required</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-300">Enterprise-grade security with 99.9% uptime guarantee</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Scalable</h3>
                <p className="text-gray-300">Grows with your business from startup to enterprise</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already streamlined their operations with our AI-powered applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessAppsPage;
