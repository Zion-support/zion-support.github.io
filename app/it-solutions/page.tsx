import React from 'react';
import SEOHead from '../components/SEOHead';

const ITSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="IT Solutions - Zion Tech Group"
        description="Comprehensive IT solutions and services for modern businesses. Infrastructure, development, and support services."
        keywords="IT solutions, IT services, infrastructure, development, support, technology consulting"
        canonicalUrl="https://ziontechgroup.com/it-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive <span className="text-green-400 font-semibold">IT solutions and services</span> 
              to power your business success
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Get IT Assessment
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                View IT Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions designed to optimize your technology infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Infrastructure Management",
                  description: "Complete management of your IT infrastructure and systems",
                  icon: "🏗️",
                  features: ["Server management", "Network administration", "System monitoring", "Performance optimization"]
                },
                {
                  title: "Software Development",
                  description: "Custom software solutions tailored to your business needs",
                  icon: "💻",
                  features: ["Web applications", "Mobile apps", "Desktop software", "API development"]
                },
                {
                  title: "Database Solutions",
                  description: "Robust database design, implementation, and management",
                  icon: "🗄️",
                  features: ["Database design", "Data migration", "Performance tuning", "Backup & recovery"]
                },
                {
                  title: "Network Security",
                  description: "Comprehensive security solutions for your network infrastructure",
                  icon: "🔒",
                  features: ["Firewall setup", "VPN configuration", "Intrusion detection", "Security audits"]
                },
                {
                  title: "Cloud Services",
                  description: "Cloud migration, management, and optimization services",
                  icon: "☁️",
                  features: ["Cloud migration", "Multi-cloud management", "Cost optimization", "Disaster recovery"]
                },
                {
                  title: "IT Support",
                  description: "24/7 technical support and maintenance services",
                  icon: "🛠️",
                  features: ["Help desk support", "Remote assistance", "System maintenance", "User training"]
                }
              ].map((service, index) => (
                <div key={index} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full cyber-button">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Technology <span className="gradient-text">Stack</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest technologies and frameworks to deliver cutting-edge solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                "React", "Node.js", "Python", "Java", "AWS", "Azure",
                "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Redis", "Elasticsearch"
              ].map((tech, index) => (
                <div key={index} className="glass-dark rounded-lg p-6 text-center hover-lift">
                  <div className="text-2xl font-semibold text-white">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-dark rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT solutions can improve your business operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Get IT Assessment
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300">
                  Contact IT Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;