import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CloudIcon, 
  ServerIcon,
  GlobeAltIcon,
  CpuChipIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const CloudSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ServerIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure designed for your business needs.',
      features: ['Auto-scaling', 'Load Balancing', 'High Availability', 'Disaster Recovery'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize your cloud strategy across multiple providers for maximum flexibility.',
      features: ['Provider Selection', 'Cost Optimization', 'Risk Mitigation', 'Unified Management'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CpuChipIcon,
      title: 'Serverless Architecture',
      description: 'Build and deploy applications using serverless computing for maximum efficiency.',
      features: ['Function as a Service', 'Event-driven Architecture', 'Auto-scaling', 'Pay-per-use'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services (AWS)', logo: '☁️', description: 'Comprehensive cloud platform with extensive services' },
    { name: 'Microsoft Azure', logo: '🔷', description: 'Enterprise-grade cloud solutions and hybrid capabilities' },
    { name: 'Google Cloud Platform', logo: '🔵', description: 'AI and machine learning focused cloud services' },
    { name: 'IBM Cloud', logo: '🔵', description: 'Enterprise cloud with AI and blockchain capabilities' }
  ];

  const benefits = [
    'Cost Reduction',
    'Scalability',
    'Flexibility',
    'Security',
    'Reliability',
    'Performance',
    'Global Reach',
    'Innovation',
    'Compliance',
    'Disaster Recovery',
    'Automation',
    'Monitoring'
  ];

  return (
    <>
      <SEOHead
        title="Cloud Solutions - Zion Tech Group"
        description="Comprehensive cloud solutions including migration, infrastructure, multi-cloud strategy, and serverless architecture. Transform your business with cloud technology."
        keywords="cloud solutions, cloud migration, cloud infrastructure, multi-cloud, serverless, AWS, Azure, Google Cloud, cloud consulting"
        canonicalUrl="https://ziontechgroup.com/cloud-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with comprehensive cloud solutions. From migration to optimization, we help you leverage the power of the cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Get Cloud Assessment
                </a>
                <a href="/cloud-infrastructure" className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Cloud Infrastructure
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Cloud Services</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud solutions designed to accelerate your digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Cloud <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Providers</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the best solution for your needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{provider.logo}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{provider.name}</h3>
                  <p className="text-gray-400 text-sm">{provider.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Cloud <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Benefits</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Discover the advantages of moving your business to the cloud.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Cloud <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A systematic approach to your cloud transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Assessment',
                  description: 'Evaluate your current infrastructure and identify cloud opportunities'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Develop a comprehensive cloud strategy and migration plan'
                },
                {
                  step: '03',
                  title: 'Migration',
                  description: 'Execute the migration with minimal downtime and disruption'
                },
                {
                  step: '04',
                  title: 'Optimization',
                  description: 'Continuously optimize your cloud environment for performance and cost'
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Start Your Cloud Journey
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to transform your business with cloud technology? Let's discuss your cloud strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Get Cloud Assessment
              </a>
              <a href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudSolutionsPage;