import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: [
        'Assessment & Planning',
        'Data Migration',
        'Application Modernization',
        'Security Implementation',
        'Performance Optimization',
        '24/7 Support'
      ],
      pricing: 'Starting at $5,000/month'
    },
    {
      icon: Server,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure, and cost-effective cloud infrastructure.',
      features: [
        'Multi-cloud Strategy',
        'Auto-scaling Solutions',
        'Load Balancing',
        'Disaster Recovery',
        'Cost Optimization',
        'Monitoring & Alerting'
      ],
      pricing: 'Starting at $3,500/month'
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Managed database solutions with high availability and performance optimization.',
      features: [
        'Database Migration',
        'Performance Tuning',
        'Backup & Recovery',
        'Security Hardening',
        'Monitoring & Maintenance',
        'Expert Support'
      ],
      pricing: 'Starting at $2,800/month'
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: [
        'Security Assessment',
        'Identity & Access Management',
        'Data Encryption',
        'Threat Detection',
        'Compliance Management',
        'Security Monitoring'
      ],
      pricing: 'Starting at $4,200/month'
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with cloud-native DevOps solutions.',
      features: [
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Container Orchestration',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Logging'
      ],
      pricing: 'Starting at $3,200/month'
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Deliver content faster worldwide with our global content delivery network.',
      features: [
        'Global Edge Locations',
        'Content Caching',
        'DDoS Protection',
        'SSL/TLS Certificates',
        'Performance Analytics',
        'Real-time Monitoring'
      ],
      pricing: 'Starting at $1,500/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, security, and DevOps solutions for modern businesses." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, DevOps, cloud security, AWS, Azure, Google Cloud" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Scalable, secure, and efficient cloud solutions for your business
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From migration to optimization, our cloud infrastructure services help you 
              leverage the full power of cloud computing to drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-green-400">
                      {service.pricing}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Cloud Services */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide enterprise-grade cloud solutions that are secure, scalable, and cost-effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Cloud Expertise</h3>
              <p className="text-gray-300">
                We work with AWS, Azure, and Google Cloud to provide the best solution for your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and advanced threat protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Monitoring</h3>
              <p className="text-gray-300">
                Proactive monitoring and support to ensure your cloud infrastructure runs smoothly.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
              <p className="text-gray-300">
                Deploy your applications globally with our worldwide cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our cloud infrastructure services can transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Cloud Consultation
              </a>
              <a 
                href="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudInfrastructurePage;