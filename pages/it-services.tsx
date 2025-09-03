import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, Shield, Database, Smartphone, Globe, Code, Server, BarChart3, Link as LinkIcon, Cpu, TestTube, BookOpen, Wrench } from 'lucide-react';

export default function ITServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };
  
  const itServices = [
    {
      icon: Cloud,
      name: 'Cloud DevOps & SRE',
      description: 'Complete cloud infrastructure management with CI/CD pipelines, infrastructure as code, and site reliability engineering.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring, logging, and alerting systems',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup strategies'
      ],
      pricing: '$120 – $220/hour',
      projectPricing: '$6,000 – $30,000/project',
      timeline: '2–8 weeks',
      benefits: [
        '99.9% uptime guarantee',
        'Automated deployment processes',
        'Reduced infrastructure costs',
        'Improved system reliability'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Shield,
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including zero trust architecture, endpoint detection, and security operations center setup.',
      features: [
        'Zero Trust security architecture',
        'Endpoint Detection and Response (EDR)',
        'Security Operations Center (SOC) setup',
        'Vulnerability assessment and penetration testing',
        'Compliance and regulatory adherence',
        'Security awareness training programs'
      ],
      pricing: '$5,000 – $40,000/project',
      projectPricing: '$2,000 – $8,000/month managed',
      timeline: '4–12 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced security incidents',
        'Compliance with regulations',
        '24/7 security monitoring'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Data Lake & Analytics Platform',
      description: 'Enterprise data lake implementation with real-time analytics, machine learning pipelines, and business intelligence.',
      features: [
        'Data lake architecture and implementation',
        'Real-time data processing pipelines',
        'Machine learning model deployment',
        'Business intelligence and reporting',
        'Data governance and compliance',
        'Integration with existing systems'
      ],
      pricing: '$20,000 – $150,000/project',
      projectPricing: '$5,000 – $25,000/month managed',
      timeline: '8–20 weeks',
      benefits: [
        'Unified data management',
        'Real-time business insights',
        'Scalable analytics infrastructure',
        'Data-driven decision making'
      ],
      category: 'Data & Analytics'
    },
    {
      icon: Smartphone,
      name: 'Mobile App Development & DevOps',
      description: 'Full-stack mobile application development with CI/CD pipelines, testing automation, and app store deployment.',
      features: [
        'Native and cross-platform development',
        'CI/CD pipeline setup and automation',
        'Automated testing and quality assurance',
        'App store optimization and deployment',
        'Performance monitoring and analytics',
        'User experience optimization'
      ],
      pricing: '$100 – $200/hour',
      projectPricing: '$15,000 – $80,000/project',
      timeline: '6–16 weeks',
      benefits: [
        'Faster time to market',
        'Automated deployment processes',
        'Improved app quality and performance',
        'Enhanced user experience'
      ],
      category: 'Mobile Development'
    },
    {
      icon: Globe,
      name: 'Edge Computing & CDN Optimization',
      description: 'Edge computing infrastructure setup with content delivery network optimization and global performance enhancement.',
      features: [
        'Edge computing infrastructure design',
        'CDN configuration and optimization',
        'Global content distribution',
        'Performance monitoring and analytics',
        'Edge security and compliance',
        'Cost optimization strategies'
      ],
      pricing: '$5,000 – $40,000/project',
      projectPricing: '$2,000 – $10,000/month managed',
      timeline: '3–8 weeks',
      benefits: [
        'Improved global performance',
        'Reduced latency and bandwidth costs',
        'Enhanced user experience worldwide',
        'Scalable content delivery'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Code,
      name: 'API Gateway & Microservices Architecture',
      description: 'Enterprise API gateway implementation with microservices architecture, service mesh, and API management.',
      features: [
        'API gateway design and implementation',
        'Microservices architecture planning',
        'Service mesh configuration',
        'API security and rate limiting',
        'Service discovery and load balancing',
        'Monitoring and observability'
      ],
      pricing: '$12,000 – $75,000/project',
      projectPricing: '$3,000 – $15,000/month managed',
      timeline: '6–14 weeks',
      benefits: [
        'Scalable and maintainable architecture',
        'Improved API security and performance',
        'Enhanced developer experience',
        'Better system observability'
      ],
      category: 'Architecture & Development'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>IT & Cloud Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT and cloud services including DevOps, cybersecurity, cloud migration, and enterprise architecture. Expert solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud services, DevOps, cybersecurity, cloud migration, enterprise architecture, infrastructure management" />
        <link rel="canonical" href={`${contact.site}/it-services`} />
        <meta property="og:title" content="IT & Cloud Services — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT and cloud services including DevOps, cybersecurity, cloud migration, and enterprise architecture. Expert solutions for modern businesses." />
        <meta property="og:url" content={`${contact.site}/it-services`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT & Cloud Services — Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive IT and cloud services including DevOps, cybersecurity, cloud migration, and enterprise architecture. Expert solutions for modern businesses." />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            IT & Cloud Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT and cloud solutions to modernize your infrastructure, 
            enhance security, and accelerate your digital transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {itServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-400">
                    <span className="font-semibold text-green-400">{service.pricing}</span>
                    {service.projectPricing && (
                      <span className="block text-xs mt-1">{service.projectPricing}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-slate-700 px-2 py-1 rounded text-gray-300">
                    {service.category}
                  </span>
                  <Link 
                    href="/contact" 
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    Get Quote →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our experts to discuss your IT needs and discover how our solutions 
            can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Request a Quote
            </Link>
            <a 
              href="tel:+13024640950" 
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}