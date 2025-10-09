'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, ArrowRight, CheckCircle, Shield, Zap, Database, Server, Users } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'AWS Migration',
      description: 'Complete migration to Amazon Web Services with zero downtime.',
      features: ['EC2, S3, RDS setup', 'Auto-scaling configuration', 'Security hardening']
    },
    {
      icon: Database,
      title: 'Azure Migration',
      description: 'Microsoft Azure cloud migration with hybrid cloud solutions.',
      features: ['Azure SQL migration', 'Active Directory integration', 'Cost optimization']
    },
    {
      icon: Server,
      title: 'Google Cloud Migration',
      description: 'Google Cloud Platform migration with AI/ML integration.',
      features: ['BigQuery setup', 'Kubernetes deployment', 'AI services integration']
    },
    {
      icon: Shield,
      title: 'Multi-Cloud Strategy',
      description: 'Distributed cloud architecture across multiple providers.',
      features: ['Vendor lock-in prevention', 'Disaster recovery', 'Cost optimization']
    }
  ];

  const benefits = [
    { icon: Zap, text: '50% cost reduction' },
    { icon: Shield, text: '99.9% uptime guarantee' },
    { icon: Users, text: '24/7 expert support' },
    { icon: CheckCircle, text: 'Zero downtime migration' }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2 mb-8">
                <Cloud className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Cloud Migration Services</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Seamless Cloud
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Migration
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Migrate your infrastructure to the cloud with zero downtime and maximum security. 
                Our experts handle everything from planning to execution.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="cyber-button-enhanced px-8 py-4 text-lg">
                  Start Migration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  Get Free Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{benefit.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Cloud Migration Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive cloud migration services tailored to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-8 hover:cyber-glow-effect transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CloudMigrationPage;
