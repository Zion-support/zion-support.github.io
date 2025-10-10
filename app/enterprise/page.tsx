'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Shield, Users, Award, Globe, Brain, Cloud, Code, Settings, Lock, BarChart, Zap, Target, Star } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  const enterpriseSolutions = [
    {
      icon: Brain,
      title: 'AI-Powered Enterprise Analytics',
      description: 'Transform your enterprise data into actionable insights with our advanced AI analytics platform.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Machine learning models'],
      benefits: ['Increase efficiency by 40%', 'Reduce operational costs', 'Improve decision making', 'Scale with your business']
    },
    {
      icon: Cloud,
      title: 'Enterprise Cloud Migration',
      description: 'Seamlessly migrate your entire infrastructure to the cloud with zero downtime and maximum security.',
      features: ['Multi-cloud strategy', 'Hybrid cloud solutions', 'Data migration', 'Security compliance'],
      benefits: ['99.9% uptime guarantee', '50% cost reduction', 'Enhanced security', 'Global scalability']
    },
    {
      icon: Shield,
      title: 'Enterprise Security Suite',
      description: 'Comprehensive security solutions designed to protect your enterprise from advanced threats.',
      features: ['Threat detection', 'Compliance management', 'Data encryption', 'Security monitoring'],
      benefits: ['Zero security breaches', 'Regulatory compliance', '24/7 monitoring', 'Advanced threat protection']
    },
    {
      icon: Code,
      title: 'Custom Enterprise Software',
      description: 'Build tailored software solutions that integrate seamlessly with your existing enterprise systems.',
      features: ['Custom development', 'System integration', 'API development', 'Legacy modernization'],
      benefits: ['Perfect fit for your needs', 'Seamless integration', 'Future-proof architecture', 'Reduced maintenance costs']
    },
    {
      icon: Settings,
      title: 'DevOps & Automation',
      description: 'Streamline your development and operations with enterprise-grade DevOps and automation solutions.',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Performance optimization'],
      benefits: ['Faster deployments', 'Reduced errors', 'Improved reliability', 'Cost optimization']
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Advanced business intelligence solutions to help you make data-driven decisions at scale.',
      features: ['Data visualization', 'Report generation', 'KPI tracking', 'Trend analysis'],
      benefits: ['Better insights', 'Faster reporting', 'Improved performance', 'Strategic planning']
    }
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '$2B+', label: 'Client Savings', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '15+', label: 'Years Experience', icon: Award }
  ];

  return (
    <>
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
        canonicalUrl="/enterprise"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive enterprise-grade solutions designed to scale with your business and drive digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Enterprise Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to meet the complex needs of large-scale enterprises.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterpriseSolutions.map((solution, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your enterprise needs and create a customized solution that drives growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EnterprisePage;