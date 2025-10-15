import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  SignalIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence solutions to transform your business operations.",
      icon: CpuChipIcon,
      color: "from-blue-600 to-cyan-600",
      href: "/ai-solutions",
      services: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Automation",
        "AI Consulting"
      ]
    },
    {
      title: "IT Solutions",
      description: "Comprehensive IT services to power your business with reliable technology solutions.",
      icon: CloudIcon,
      color: "from-purple-600 to-pink-600",
      href: "/it-solutions",
      services: [
        "Cloud Infrastructure",
        "Cybersecurity Solutions",
        "Network Infrastructure",
        "Database Management",
        "IT Support & Maintenance",
        "Digital Transformation"
      ]
    },
    {
      title: "5G Solutions",
      description: "Next-generation 5G implementation and optimization for ultra-fast connectivity.",
      icon: SignalIcon,
      color: "from-green-600 to-emerald-600",
      href: "/5g-solutions",
      services: [
        "5G Network Implementation",
        "IoT Solutions & Integration",
        "Edge Computing",
        "Smart City Solutions",
        "5G Security",
        "5G Consulting"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your business from cyber threats.",
      icon: ShieldCheckIcon,
      color: "from-red-600 to-orange-600",
      href: "/cybersecurity",
      services: [
        "Security Assessment",
        "Penetration Testing",
        "Firewall Configuration",
        "Intrusion Detection",
        "Security Training",
        "Compliance Auditing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT, 5G & Cybersecurity Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, 5G technology, and cybersecurity solutions from Zion Tech Group." />
        <meta name="keywords" content="AI solutions, IT services, 5G technology, cybersecurity, cloud infrastructure, digital transformation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology solutions to transform your business and drive innovation
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From artificial intelligence to 5G technology, we deliver cutting-edge solutions 
              that help businesses stay ahead in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Service Categories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology services designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={category.href} 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              Schedule Demo
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
