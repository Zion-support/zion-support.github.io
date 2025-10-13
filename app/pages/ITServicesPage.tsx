import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Cloud, Shield, Wrench, Monitor, Database } from 'lucide-react;
const ITServicesPage: React.FC = () => {
  const services = [{
      icon: Server,
      title: 'Infrastructure Management',';
      description: 'Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.',';
      features: ['Server Configuration', 'Network Setup', 'Hardware Maintenance', 'Performance Monitoring']';
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',';
      description: 'Migrate to the cloud and optimize your cloud infrastructure for scalability and cost-effectiveness.',';
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Disaster Recovery']';
    },
    {
      icon: Shield,
      title: 'Cybersecurity',';
      description: 'Protect your business with comprehensive security solutions and threat monitoring.',';
      features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']';
    },
    {
      icon: Wrench,
      title: 'Technical Support',';
      description: '24/7 technical support and maintenance to keep your systems running smoothly.',';
      features: ['Help Desk Support', 'Remote Monitoring', 'Preventive Maintenance', 'Emergency Response']';
    },
    {
      icon: Monitor,
      title: 'System Integration',';
      description: 'Seamlessly integrate different systems and applications for improved workflow efficiency.',';
      features: ['API Integration', 'Data Synchronization', 'Workflow Automation', 'Legacy System Modernization']';
    },
    {
      icon: Database,
      title: 'Data Management',';
      description: 'Organize, secure, and optimize your data infrastructure for better insights and compliance.',';
      features: ['Database Design', 'Data Backup', 'Data Migration', 'Performance Tuning']';
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">;
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure, cloud computing, cybersecurity, technical support, system integration" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">;
        {/* Hero Section */}
        <div className="text-center mb-16">;
          <h1 className="text-5xl font-bold text-white mb-6">;
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>;
          </h1>;
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
            Comprehensive IT solutions to keep your business running efficiently and securely.;
            From infrastructure to support, we've got you covered.';
          </p>;
        </div>;
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">;
          {services.map((service, _index) => {
            const Icon = service.icon;
            return (
              <div key={_index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">;
                <div className="flex items-center mb-4">;
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">;
                    <Icon className="w-6 h-6 text-white" />;
                  </div>;
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>;
                </div>;
                <p className="text-gray-300 mb-4">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">;
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </div>;
            );
          })}
        </div>;
        {/* CTA Section */}
        <div className="text-center">;
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">;
            <h2 className="text-2xl font-bold text-white mb-4">Need Reliable IT Support?</h2>;
            <p className="text-gray-300 mb-6">;
              Our IT experts are ready to help you maintain, secure, and optimize your technology infrastructure.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">;
                Get Support;
              </button>;
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">;
                Request Quote;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
};

export default ITServicesPage;