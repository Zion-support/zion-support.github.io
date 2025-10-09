import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Shield, Zap, CheckCircle, ArrowRight, Phone } from 'lucide-react';

const DatabaseManagementPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Advanced database performance tuning and optimization',
      benefits: ['Performance tuning', 'Query optimization', 'Index management']
    },
    {
      icon: Shield,
      title: 'Security & Backup',
      description: 'Comprehensive database security and backup solutions',
      benefits: ['Data encryption', 'Automated backups', 'Access control']
    },
    {
      icon: Zap,
      title: 'Monitoring & Maintenance',
      description: '24/7 database monitoring and proactive maintenance',
      benefits: ['Real-time monitoring', 'Automated maintenance', 'Performance alerts']
    }
  ];

  const useCases = [
    {
      title: 'Performance Tuning',
      description: 'Optimize database performance and query execution',
      icon: '⚡'
    },
    {
      title: 'Data Migration',
      description: 'Seamless database migration and data transfer',
      icon: '🔄'
    },
    {
      title: 'Backup & Recovery',
      description: 'Comprehensive backup and disaster recovery solutions',
      icon: '💾'
    },
    {
      title: 'Security Hardening',
      description: 'Advanced database security and compliance',
      icon: '🔒'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Database Management
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Comprehensive Database Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Optimize, secure, and maintain your databases with our expert management services. 
            Get 24/7 monitoring, performance tuning, and disaster recovery solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Key Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our database management solutions provide comprehensive database services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="text-4xl mb-4 text-cyan-400">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Use Cases
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Discover how database management can optimize your infrastructure
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the perfect plan for your database needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$599/month</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">Basic database management</li>
                <li className="text-gray-300">Performance monitoring</li>
                <li className="text-gray-300">Email support</li>
                <li className="text-gray-300">Basic backups</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$1,499/month</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">Advanced database management</li>
                <li className="text-gray-300">24/7 monitoring</li>
                <li className="text-gray-300">Priority support</li>
                <li className="text-gray-300">Automated backups</li>
                <li className="text-gray-300">Performance optimization</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="text-gray-300">Full database suite</li>
                <li className="text-gray-300">Custom development</li>
                <li className="text-gray-300">24/7 dedicated support</li>
                <li className="text-gray-300">Enterprise security</li>
                <li className="text-gray-300">Disaster recovery</li>
              </ul>
              <Link
                to="/contact"
                className="block w-full text-center bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Databases?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with database management today and ensure optimal performance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DatabaseManagementPage;
