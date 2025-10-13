import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ServerIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function CloudSolutionsPage() {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with minimal downtime and maximum efficiency.",
      icon: CloudIcon,
      features: [
        "Application assessment",
        "Migration planning",
        "Data migration",
        "Performance optimization",
        "Security implementation",
        "Post-migration support"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $5,000",
      benefits: ["Zero downtime", "Cost optimization", "Scalability"],
      useCases: ["Legacy modernization", "Cost reduction", "Scalability needs"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Design, deploy, and manage robust cloud infrastructure tailored to your business requirements.",
      icon: ServerIcon,
      features: [
        "Infrastructure design",
        "Auto-scaling setup",
        "Load balancing",
        "Monitoring & alerting",
        "Backup & disaster recovery",
        "Cost optimization"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,500/month",
      benefits: ["High availability", "Auto-scaling", "Cost efficiency"],
      useCases: ["High-traffic applications", "Global deployment", "Disaster recovery"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Implement DevOps practices and continuous integration/deployment pipelines for faster, more reliable software delivery.",
      icon: CogIcon,
      features: [
        "CI/CD pipeline setup",
        "Container orchestration",
        "Infrastructure as Code",
        "Automated testing",
        "Deployment automation",
        "Monitoring & logging"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $3,000/month",
      benefits: ["Faster deployments", "Reduced errors", "Better collaboration"],
      useCases: ["Software development", "Faster releases", "Team collaboration"]
    },
    {
      title: "Cloud Security",
      description: "Comprehensive cloud security solutions to protect your data and applications in the cloud environment.",
      icon: ShieldCheckIcon,
      features: [
        "Identity & access management",
        "Data encryption",
        "Network security",
        "Compliance monitoring",
        "Threat detection",
        "Security auditing"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $2,000/month",
      benefits: ["Enhanced security", "Compliance ready", "Threat protection"],
      useCases: ["Data protection", "Compliance requirements", "Risk mitigation"]
    },
    {
      title: "Cloud Monitoring",
      description: "24/7 monitoring and management of your cloud infrastructure with proactive issue detection and resolution.",
      icon: ChartBarIcon,
      features: [
        "Performance monitoring",
        "Cost tracking",
        "Alert management",
        "Capacity planning",
        "Incident response",
        "Reporting & analytics"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $1,500/month",
      benefits: ["Proactive monitoring", "Cost control", "Performance optimization"],
      useCases: ["Performance optimization", "Cost management", "Reliability"]
    },
    {
      title: "Cloud Consulting",
      description: "Strategic cloud consulting to help you make informed decisions about your cloud strategy and implementation.",
      icon: LightBulbIcon,
      features: [
        "Cloud strategy planning",
        "Technology assessment",
        "Cost analysis",
        "Vendor evaluation",
        "Migration planning",
        "Best practices guidance"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $200/hour",
      benefits: ["Strategic guidance", "Cost optimization", "Risk mitigation"],
      useCases: ["Strategic planning", "Technology decisions", "Cost optimization"]
    }
  ];

  const cloudStats = [
    { label: "Uptime", value: "99.99%", color: "text-green-400" },
    { label: "Cost Savings", value: "40%", color: "text-blue-400" },
    { label: "Migration Success", value: "100%", color: "text-purple-400" },
    { label: "Client Satisfaction", value: "100%", color: "text-yellow-400" }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, infrastructure, DevOps, security, and monitoring services." />
        <meta name="keywords" content="cloud solutions, cloud migration, cloud infrastructure, DevOps, CI/CD, cloud security, cloud monitoring" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with scalable, secure, and cost-effective cloud solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From migration to management, we provide end-to-end cloud services that help you 
              leverage the full power of cloud computing for your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Cloud Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Stats */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {cloudStats.map((stat, _index) => (
              <div key={stat.label} className="text-center">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cloudServices.map((service, _index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                    <Link 
                      to="/demo" 
                      className="w-full border border-blue-400 text-blue-300 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Cloud Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Cloud Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide enterprise-grade cloud services with proven expertise and dedicated support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CloudIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Migration</h3>
                <p className="text-gray-300">
                  Seamless cloud migration with zero downtime and 100% data integrity guaranteed.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CogIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">
                  Round-the-clock monitoring and support to ensure your cloud infrastructure runs smoothly.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
                <p className="text-gray-300">
                  Enterprise-grade security measures to protect your data and applications in the cloud.
                </p>
              </div>
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
              Get a free cloud assessment and discover how we can accelerate your digital transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}