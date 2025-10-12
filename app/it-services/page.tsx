import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Code, Database, Smartphone, Server, Zap, CheckCircle } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services',
      features: ['SQL/NoSQL', 'Performance Tuning', 'Backup & Recovery', 'Data Migration']
    },
    {
      icon: Server,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows and automated deployment pipelines',
      features: ['Docker/Kubernetes', 'Jenkins/GitHub Actions', 'Monitoring', 'Infrastructure Automation']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to modernize your business infrastructure, 
              enhance security, and accelerate digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300">
                <Zap className="w-4 h-4 inline mr-2" />
                24/7 Support
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300">
                <Shield className="w-4 h-4 inline mr-2" />
                Enterprise Security
              </div>
              <div className="bg-purple-500/20 px-4 py-2 rounded-full text-purple-300">
                <Cloud className="w-4 h-4 inline mr-2" />
                Cloud-First Approach
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 md:p-12 text-center border border-purple-500/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our expert team help you build, secure, and optimize your technology stack 
              for maximum performance and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border border-purple-500 text-purple-300 font-semibold py-3 px-8 rounded-lg hover:bg-purple-500/20 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;
