import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Brain, Shield, Zap, Users, Target, ArrowRight, Cloud, Database, Globe, Code } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence solutions for business automation and optimization",
      icon: Brain,
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: Shield,
      features: ["Threat Detection", "Security Audits", "Penetration Testing", "Incident Response"]
    },
    {
      title: "5G Technology",
      description: "Next-generation 5G infrastructure and implementation services",
      icon: Zap,
      features: ["Network Design", "Infrastructure Setup", "Performance Optimization", "IoT Integration"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern business needs",
      icon: Cloud,
      features: ["Cloud Migration", "Multi-Cloud Strategy", "Cost Optimization", "Disaster Recovery"]
    },
    {
      title: "Database Solutions",
      description: "Advanced database design and optimization services",
      icon: Database,
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Solutions"]
    },
    {
      title: "Web Development",
      description: "Modern web applications with cutting-edge technologies",
      icon: Globe,
      features: ["Responsive Design", "Progressive Web Apps", "API Development", "Performance Optimization"]
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions for unique business requirements",
      icon: Code,
      features: ["Custom Development", "System Integration", "Legacy Modernization", "Quality Assurance"]
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation strategies and implementation",
      icon: Target,
      features: ["Process Automation", "Digital Strategy", "Change Management", "Training & Support"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including cybersecurity, cloud solutions, and digital transformation." />
        <meta name="keywords" content="AI services, IT solutions, cybersecurity, cloud computing, digital transformation" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT services including cybersecurity, cloud solutions, and digital transformation." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zion.app/services" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you choose the right solutions for your business needs
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;