import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',
      features: [&apos;Server Configuration&apos;, &apos;Network Setup&apos;, &apos;Hardware Maintenance&apos;, &apos;Performance Monitoring&apos;]
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with our expert cloud architecture and management services.',
      features: [&apos;Cloud Migration&apos;, &apos;Multi-cloud Strategy&apos;, &apos;Cost Optimization&apos;, &apos;Security Implementation&apos;]
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions and threat monitoring.',
      features: [&apos;Security Audits&apos;, &apos;Threat Detection&apos;, &apos;Incident Response&apos;, &apos;Compliance Management&apos;]
    },
    {
      icon: Wrench,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance to keep your systems running smoothly.',
      features: [&apos;24/7 Monitoring&apos;, &apos;Remote Support&apos;, &apos;Preventive Maintenance&apos;, &apos;Emergency Response&apos;]
    },
    {
      icon: Monitor,
      title: 'System Integration',
      description: 'Seamlessly integrate different systems and applications for improved efficiency.',
      features: [&apos;API Integration&apos;, &apos;Data Migration&apos;, &apos;System Customization&apos;, &apos;Workflow Automation&apos;]
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and recovery solutions.',
      features: [&apos;Database Design&apos;, &apos;Data Backup&apos;, &apos;Recovery Planning&apos;, &apos;Data Security&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900text-white">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-900to-slate-900">
        <div className="container mx-auto px-4text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent">
            IT Services
          </h1>
<p className="Comprehensive IT solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we&apos;ve got you covered.
             ">$2</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=" py-20">
        <div className="container mx-autopx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transformhover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8text-white" />
                  </div>
        </div>
                
                <h3 className="text-2xl font-bold text-white mb-4  ">{service.title}</h3>
                <p className="text-gray-300 mb-6   ">{service.description}</p>
                
                <div className=" mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flexitems-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-allduration-300">
                  Learn More
                </button>
                </div>
        </div>
            ))}
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/30to-purple-900/30">
        <div className="container mx-auto px-4text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
<p className="Let&apos;s discuss how our IT services can improve your business operations and security.
             ">$2</p>
          <div className="flex flex-col sm:flex-row gap-4justify-center">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transformhover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-allduration-300">
              Schedule Consultation
            </button>
            </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;