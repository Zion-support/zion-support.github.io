import React from 'react';
import SEOHead from '../components/SEOHead';

const CloudSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cloud Solutions - Zion Tech Group"
        description="Scalable cloud infrastructure and solutions for modern businesses. AWS, Azure, and Google Cloud expertise."
        keywords="cloud solutions, cloud infrastructure, AWS, Azure, Google Cloud, cloud migration, cloud consulting"
        canonicalUrl="https://ziontechgroup.com/cloud-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Cloud Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Scale your business with <span className="text-blue-400 font-semibold">powerful cloud infrastructure</span> 
              and solutions designed for growth
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Get Cloud Assessment
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-blue-400 text-blue-400 hover:border-blue-300 hover:text-blue-300">
                View Cloud Plans
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Cloud Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Cloud Migration",
                  description: "Seamlessly migrate your applications and data to the cloud",
                  icon: "☁️",
                  features: ["AWS migration", "Azure migration", "Google Cloud migration", "Zero-downtime migration"]
                },
                {
                  title: "Cloud Infrastructure",
                  description: "Design and deploy scalable cloud infrastructure solutions",
                  icon: "🏗️",
                  features: ["Auto-scaling", "Load balancing", "High availability", "Disaster recovery"]
                },
                {
                  title: "Cloud Security",
                  description: "Comprehensive security solutions for your cloud environment",
                  icon: "🔒",
                  features: ["Identity management", "Access controls", "Data encryption", "Compliance"]
                },
                {
                  title: "Cloud Monitoring",
                  description: "24/7 monitoring and management of your cloud resources",
                  icon: "📊",
                  features: ["Performance monitoring", "Cost optimization", "Alert management", "Reporting"]
                },
                {
                  title: "DevOps & CI/CD",
                  description: "Automate your development and deployment processes",
                  icon: "🚀",
                  features: ["CI/CD pipelines", "Container orchestration", "Infrastructure as code", "Automated testing"]
                },
                {
                  title: "Cloud Consulting",
                  description: "Expert guidance on cloud strategy and implementation",
                  icon: "💡",
                  features: ["Cloud strategy", "Architecture design", "Cost optimization", "Best practices"]
                }
              ].map((service, index) => (
                <div key={index} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
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

        {/* Cloud Providers */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Cloud <span className="gradient-text">Providers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to give you the best solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Amazon Web Services", logo: "AWS", description: "Leading cloud platform with comprehensive services" },
                { name: "Microsoft Azure", logo: "Azure", description: "Enterprise-grade cloud solutions and services" },
                { name: "Google Cloud Platform", logo: "GCP", description: "Advanced data analytics and AI capabilities" }
              ].map((provider, index) => (
                <div key={index} className="glass-dark rounded-lg p-8 text-center hover-lift">
                  <div className="text-6xl mb-4">{provider.logo}</div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{provider.name}</h3>
                  <p className="text-gray-300">{provider.description}</p>
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
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our cloud solutions can accelerate your business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Get Cloud Assessment
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                  Contact Cloud Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudSolutionsPage;