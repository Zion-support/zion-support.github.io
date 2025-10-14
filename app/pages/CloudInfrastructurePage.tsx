import React from &apos;react&apos;;
import { Helmet } from &apos;react-helmet-async&apos;;
import { Cloud, Server, Shield, Zap, Database, Globe } from &apos;lucide-react&apos;;

const CloudInfrastructurePage: React.FC = () => {
  const services = [{
      icon: Cloud,
      title: &apos;Cloud Migration&apos;,
      description: &apos;Seamlessly migrate your applications and data to the cloud with minimal downtime.&apos;,
      features: [&apos;Assessment & Planning&apos;, &apos;Data Migration&apos;, &apos;Application Modernization&apos;, &apos;Testing & Validation&apos]
    },
    {
      icon: Server,
      title: &apos;Cloud Architecture&apos;,
      description: &apos;Design and implement scalable, secure, and cost-effective cloud architectures.&apos;,
      features: [&apos;Multi-cloud Strategy&apos;, &apos;Auto-scaling&apos;, &apos;Load Balancing&apos;, &apos;Disaster Recovery&apos]
    },
    {
      icon: Shield,
      title: &apos;Cloud Security&apos;,
      description: &apos;Comprehensive security solutions to protect your cloud infrastructure and data.&apos;,
      features: [&apos;Identity Management&apos;, &apos;Data Encryption&apos;, &apos;Compliance&apos;, &apos;Threat Monitoring&apos]
    },
    {
      icon: Zap,
      title: &apos;DevOps & Automation&apos;,
      description: &apos;Streamline your development and deployment processes with modern DevOps practices.&apos;,
      features: [&apos;CI/CD Pipelines&apos;, &apos;Infrastructure as Code&apos;, &apos;Monitoring&apos;, &apos;Automated Testing&apos]
    },
    {
      icon: Database,
      title: &apos;Cloud Databases&apos;,
      description: &apos;Managed database services with high availability, scalability, and performance.&apos;,
      features: [&apos;Database Migration&apos;, &apos;Backup & Recovery&apos;, &apos;Performance Tuning&apos;, &apos;Security Hardening&apos]
    },
    {
      icon: Globe,
      title: &apos;Global Infrastructure&apos;,
      description: &apos;Worldwide cloud infrastructure to ensure low latency and high availability.&apos;,
      features: [&apos;CDN Setup&apos;, &apos;Edge Computing&apos;, &apos;Global Load Balancing&apos;, &apos;Multi-region Deployment&apos]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, security, and DevOps solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, DevOps, cloud security, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, migrate, and optimize your cloud infrastructure with our expert solutions. 
            Scale efficiently and securely in the cloud.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale in the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our cloud infrastructure services can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Start Your Cloud Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>;
  );
};

export default CloudInfrastructurePage;