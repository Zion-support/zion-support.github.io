<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Migration & Infrastructure</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive cloud services. Expert cloud migration, infrastructure management, and security solutions from Zion Tech Group."
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, BarChart3, CheckCircle, ArrowRight, Server, Database, Lock, Globe, Cpu, Smartphone } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      name: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.",
      features: ["Assessment & planning", "Data migration", "Application modernization", "Performance optimization", "Security implementation", "24/7 support"],
      price: "From $2,999",
      icon: <Cloud className="w-8 h-8" />,
      popular: true
    },
    {
      name: "Cloud Infrastructure",
      description: "Build and manage scalable cloud infrastructure tailored to your business needs.",
      features: ["Infrastructure design", "Auto-scaling setup", "Load balancing", "Monitoring & alerting", "Backup & recovery", "Cost optimization"],
      price: "From $1,999",
      icon: <Server className="w-8 h-8" />,
      popular: false
    },
    {
      name: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud environment from threats.",
      features: ["Security assessment", "Identity management", "Data encryption", "Compliance auditing", "Threat monitoring", "Incident response"],
      price: "From $3,999",
      icon: <Shield className="w-8 h-8" />,
      popular: true
    },
    {
      name: "Cloud Analytics",
      description: "Harness the power of cloud-based analytics to drive data-driven decisions.",
      features: ["Data warehousing", "Real-time analytics", "Machine learning", "Business intelligence", "Custom dashboards", "Predictive modeling"],
      price: "From $2,499",
      icon: <BarChart3 className="w-8 h-8" />,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Deploy your applications worldwide with our global infrastructure"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Performance",
      description: "Optimized performance with cutting-edge cloud technology"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Migration</title>
        <meta 
          name="description" 
          content="Transform your business with our comprehensive cloud services. From migration to security, we provide end-to-end cloud solutions for modern enterprises."
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
        />
        <meta 
          name="keywords" 
          content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></h1>
              Cloud Services
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Transform your business with our comprehensive cloud services. Expert cloud migration;
              infrastructure management, and security solutions.
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive cloud solutions. From migration to security, 
              we provide end-to-end cloud services for modern enterprises.
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Cloud Migration</h3>
              <p className="text-gray-300 mb-4"></p>
                Seamless migration to cloud platforms with zero downtime and maximum efficiency.
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• AWS Migration</li>
                <li>• Azure Migration</li>
                <li>• Google Cloud Migration</li>
                <li>• Hybrid Cloud Solutions</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"></div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Infrastructure Management</h3>
              <p className="text-gray-300 mb-4"></p>
                Complete cloud infrastructure setup, monitoring, and optimization services.
=======
        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    {service.popular && (
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium ml-auto">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive cloud solutions that help your business scale, secure, and optimize its operations.
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• Cloud Architecture Design</li>
                <li>• Auto-scaling Solutions</li>
                <li>• Performance Optimization</li>
                <li>• 24/7 Monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20"></div>
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Cloud Security</h3>
              <p className="text-gray-300 mb-4"></p>
                Advanced security solutions to protect your cloud infrastructure and data.
              </p>
              <ul className="text-sm text-gray-400 space-y-2"></ul>
                <li>• Security Assessment</li>
                <li>• Compliance Management</li>
                <li>• Data Encryption</li>
                <li>• Threat Detection</li>
              </ul>
            </div>
          </div>
<<<<<<< HEAD

          <div className="text-center"></div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"></button>
              Get Started with Cloud Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
};

export default CloudServicesPage;
=======
        </section>
      </div>
    </>
  );
}
};

export default CloudServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-13a9
