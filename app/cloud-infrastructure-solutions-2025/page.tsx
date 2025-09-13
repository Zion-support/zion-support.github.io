import React from 'react';
import SEO from '../../components/SEO';
import { Cloud, Database, Globe, Lock, Server, Shield, Zap, ArrowRight } from 'lucide-react';

export default function CloudInfrastructureSolutionsPage() {
  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration & Strategy",
      description: "Seamlessly migrate your infrastructure to the cloud with our proven migration strategies.",
      features: ["Zero-downtime migration", "Cost optimization", "Security compliance", "Performance monitoring"],
      pricing: "Starting at $5,000/month"
    },
    {
      icon: Server,
      title: "Scalable Infrastructure",
      description: "Build resilient, auto-scaling cloud infrastructure that grows with your business.",
      features: ["Auto-scaling", "Load balancing", "High availability", "Disaster recovery"],
      pricing: "Starting at $3,000/month"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Managed database services with automated backups, monitoring, and optimization.",
      features: ["Automated backups", "Performance tuning", "Security hardening", "24/7 monitoring"],
      pricing: "Starting at $2,000/month"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions to protect your cloud infrastructure.",
      features: ["Identity management", "Encryption at rest", "Network security", "Compliance auditing"],
      pricing: "Starting at $4,000/month"
    },
    {
      icon: Globe,
      title: "Global CDN & Edge",
      description: "Worldwide content delivery network for lightning-fast global performance.",
      features: ["Global edge locations", "DDoS protection", "SSL certificates", "Analytics dashboard"],
      pricing: "Starting at $1,000/month"
    },
    {
      icon: Zap,
      title: "DevOps & Automation",
      description: "Streamline your development workflow with automated CI/CD pipelines and infrastructure as code.",
      features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Deployment automation"],
      pricing: "Starting at $3,500/month"
    }
  ];

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs by up to 60% with our cloud optimization strategies.",
      icon: "💰"
    },
    {
      title: "Scalability",
      description: "Scale your infrastructure automatically based on demand without manual intervention.",
      icon: "📈"
    },
    {
      title: "Security",
      description: "Enterprise-grade security with 99.99% uptime and comprehensive threat protection.",
      icon: "🔒"
    },
    {
      title: "Performance",
      description: "Lightning-fast performance with global CDN and optimized cloud architecture.",
      icon: "⚡"
    }
  ];

  const caseStudies = [
    {
      company: "E-commerce Giant",
      challenge: "High traffic spikes during peak seasons causing server crashes",
      solution: "Implemented auto-scaling cloud infrastructure with load balancing",
      results: "99.9% uptime during peak season, 50% cost reduction"
    },
    {
      company: "SaaS Startup",
      challenge: "Need to scale rapidly while maintaining security and compliance",
      solution: "Multi-cloud strategy with automated security and compliance monitoring",
      results: "10x growth capacity, SOC 2 compliance achieved"
    },
    {
      company: "Healthcare Provider",
      challenge: "Migrate legacy systems to cloud while maintaining HIPAA compliance",
      solution: "Secure cloud migration with dedicated compliance framework",
      results: "100% HIPAA compliance, 70% faster application performance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Cloud Infrastructure Solutions 2025 - Zion Tech Group"
        description="Transform your business with scalable, secure, and cost-effective cloud infrastructure solutions. Expert cloud migration, DevOps, and managed services."
        keywords="cloud infrastructure, cloud migration, DevOps, cloud security, scalable infrastructure, managed cloud services"
        url="/cloud-infrastructure-solutions-2025"
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Cloud className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-white">CLOUD INFRASTRUCTURE SOLUTIONS 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Scalable Cloud Infrastructure
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                for Modern Business
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Build, migrate, and optimize your cloud infrastructure with our expert solutions. 
              From AWS and Azure to multi-cloud strategies, we deliver scalable, secure, and cost-effective cloud solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                Get Cloud Assessment
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Cloud Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cloud infrastructure solutions are designed to deliver maximum performance, 
              security, and cost-effectiveness for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cloud migration to ongoing management, we provide end-to-end cloud infrastructure solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Case Studies */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how leading companies have transformed their infrastructure with our cloud solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{study.company}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <p className="text-green-600 text-sm font-medium">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free cloud assessment and discover how our solutions can optimize your infrastructure costs and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Free Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}