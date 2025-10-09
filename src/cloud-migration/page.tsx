import React from 'react';
import { ArrowLeft, Cloud, Shield, Zap, CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Settings, Database, Globe, Users, BarChart, Code, Target, Lock, MessageSquare, Eye, Cpu, CreditCard, Smartphone, Calendar, FileText, Search, Bot, Calculator, BarChart3 } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CloudMigrationPage: React.FC = () => {
  const migrationServices = [
    {
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration strategy',
      icon: Brain,
      features: ['Infrastructure Assessment', 'Application Analysis', 'Migration Strategy', 'Risk Assessment', 'Cost Analysis', 'Timeline Planning'],
      benefits: ['Clear migration path', 'Risk mitigation', 'Cost optimization', 'Smooth transition']
    },
    {
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with zero business disruption and data integrity',
      icon: Zap,
      features: ['Live Migration', 'Data Synchronization', 'Rollback Planning', 'Performance Monitoring', 'User Training', 'Go-Live Support'],
      benefits: ['No business disruption', '100% data integrity', 'Minimal risk', 'Seamless transition']
    },
    {
      title: 'Security Hardening',
      description: 'Enhanced security implementation and compliance for cloud environments',
      icon: Shield,
      features: ['Security Assessment', 'Compliance Setup', 'Access Controls', 'Data Encryption', 'Monitoring Setup', 'Security Training'],
      benefits: ['Enhanced security', 'Compliance ready', 'Data protection', 'Risk reduction']
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize cloud resources for maximum performance and cost efficiency',
      icon: Settings,
      features: ['Resource Optimization', 'Cost Management', 'Performance Tuning', 'Auto-scaling Setup', 'Monitoring Configuration', 'Regular Reviews'],
      benefits: ['Better performance', 'Cost savings', 'Scalability', 'Efficiency']
    },
    {
      title: 'Data Migration',
      description: 'Secure and efficient transfer of all your data to the cloud',
      icon: Database,
      features: ['Data Mapping', 'ETL Processes', 'Data Validation', 'Backup Strategy', 'Testing & Verification', 'Data Governance'],
      benefits: ['Data integrity', 'Secure transfer', 'Complete migration', 'Data quality']
    },
    {
      title: 'Post-Migration Support',
      description: 'Ongoing support and optimization after migration completion',
      icon: Users,
      features: ['24/7 Support', 'Performance Monitoring', 'Issue Resolution', 'Optimization', 'Training & Documentation', 'Regular Reviews'],
      benefits: ['Ongoing support', 'Continuous optimization', 'Peace of mind', 'Expert guidance']
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current infrastructure, applications, and data to understand migration requirements and challenges.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive migration strategy with detailed timelines, resource requirements, and risk mitigation plans.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Pre-Migration Setup',
      description: 'We prepare the target cloud environment, set up security, and create backup and rollback procedures.',
      icon: Settings
    },
    {
      step: '04',
      title: 'Migration Execution',
      description: 'We execute the migration with zero downtime, ensuring data integrity and minimal business disruption.',
      icon: Zap
    },
    {
      step: '05',
      title: 'Testing & Validation',
      description: 'We thoroughly test all systems, validate data integrity, and ensure everything works as expected.',
      icon: CheckCircle
    },
    {
      step: '06',
      title: 'Go-Live & Support',
      description: 'We support the go-live process and provide ongoing support to ensure smooth operations.',
      icon: Users
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services (AWS)', icon: '☁️', description: 'Leading cloud platform with comprehensive services' },
    { name: 'Microsoft Azure', icon: '🔷', description: 'Enterprise-focused cloud solution with hybrid capabilities' },
    { name: 'Google Cloud Platform (GCP)', icon: '🔵', description: 'Advanced analytics and AI-powered cloud services' },
    { name: 'Multi-Cloud', icon: '🌐', description: 'Hybrid and multi-cloud strategies for maximum flexibility' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cloud Migration Services - Zion Tech Group"
        description="Expert cloud migration services with zero downtime, data integrity, and seamless transition. AWS, Azure, GCP migration specialists."
        keywords={['cloud migration', 'AWS migration', 'Azure migration', 'GCP migration', 'zero downtime migration', 'cloud transformation', 'data migration']}
        canonicalUrl="https://ziontechgroup.com/cloud-migration"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </a>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Seamless cloud migration with zero downtime and data integrity. 
              We help you transition to the cloud with confidence and minimal risk.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {migrationServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Services Include:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <TrendingUp className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Migration Process */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Migration Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Providers */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Cloud Providers We Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{provider.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{provider.name}</h3>
                  <p className="text-gray-300 text-sm">{provider.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Cloud Migration?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Zero Downtime</h3>
                <p className="text-gray-300 text-sm">Our migration process ensures zero business disruption and continuous operations.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Integrity</h3>
                <p className="text-gray-300 text-sm">100% data integrity guaranteed with comprehensive validation and testing.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
                <p className="text-gray-300 text-sm">Dedicated team of cloud experts with years of migration experience.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-slate-800/50 rounded-2xl p-8 border border-cyan-400/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Migrate to the Cloud?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our cloud migration experts help you transition to the cloud with confidence. 
              Zero downtime, data integrity, and seamless migration guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Start Migration
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
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CloudMigrationPage;