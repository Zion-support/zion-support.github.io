'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cloud, Shield, Zap, Target, CheckCircle, ArrowRight, Database, Server, Lock } from 'lucide-react'

const CloudMigration: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Seamless Migration',
      description: 'Migrate your applications and data to the cloud with zero downtime and minimal disruption.',
      benefits: ['Zero Downtime', 'Automated Migration', 'Data Integrity', 'Rollback Capability']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security measures ensure your data is protected throughout the migration process.',
      benefits: ['End-to-End Encryption', 'Compliance Standards', 'Access Controls', 'Audit Trails']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimize your cloud infrastructure for maximum performance and scalability.',
      benefits: ['Performance Tuning', 'Auto Scaling', 'Load Balancing', 'Resource Optimization']
    },
    {
      icon: Target,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs while maintaining performance with intelligent resource management.',
      benefits: ['Cost Analysis', 'Resource Right-sizing', 'Automated Scaling', 'Budget Controls']
    }
  ];

  const benefits = [
    'Advanced cloud migration technology',
    'Real-time migration monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans'
  ];

  const migrationTypes = [
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Migrate your databases to cloud platforms with data integrity and performance optimization'
    },
    {
      icon: Server,
      title: 'Application Migration',
      description: 'Move your applications to the cloud with minimal code changes and maximum compatibility'
    },
    {
      icon: Lock,
      title: 'Security Migration',
      description: 'Implement cloud security best practices and compliance standards during migration'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration | Zion Tech Group | Professional Cloud Migration Services</title>
        <meta name="description" content="Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="cloud migration, cloud services, AWS migration, Azure migration, cloud consulting" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Migration</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business.
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Migration Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud migration services provide everything you need to successfully move to the cloud.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive migration services for all your cloud needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {migrationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="flex items-center justify-center mb-6">
                  <type.icon className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Migration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional cloud migration services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to migrate your infrastructure to the cloud with confidence.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center mx-auto">
            Start Migration Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudMigration;