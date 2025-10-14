import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, Globe, Brain, Cloud, Database, Smartphone, Lock, ArrowRight, CheckCircle } from 'lucide-react';

// Service categories
const serviceCategories = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description: "Advanced artificial intelligence solutions including deep learning, natural language processing, computer vision, and predictive analytics.",
    services: [
      "Machine Learning Model Development",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
      "AI Chatbots & Virtual Assistants",
      "Recommendation Systems"
    ],
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "5G Technology",
    description: "Next-generation 5G implementation, optimization, and IoT solutions for ultra-fast connectivity and smart infrastructure.",
    services: [
      "5G Network Implementation",
      "IoT Solutions & Integration",
      "Edge Computing",
      "Smart City Solutions",
      "5G Performance Optimization",
      "Private 5G Networks"
    ],
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from cyber threats and ensure data integrity.",
    services: [
      "Security Audits & Assessments",
      "Threat Detection & Response",
      "Data Encryption & Protection",
      "Compliance Management",
      "Security Training",
      "Incident Response"
    ],
    color: "from-red-600 to-pink-600"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your IT environment.",
    services: [
      "Cloud Migration & Strategy",
      "Multi-Cloud Management",
      "Cloud Security",
      "Cost Optimization",
      "Disaster Recovery",
      "Cloud-Native Development"
    ],
    color: "from-purple-600 to-indigo-600"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
    services: [
      "Data Warehousing",
      "Business Intelligence",
      "Real-time Analytics",
      "Data Visualization",
      "Predictive Modeling",
      "Data Governance"
    ],
    color: "from-orange-600 to-yellow-600"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Custom mobile applications for iOS and Android that deliver exceptional user experiences.",
    services: [
      "Native App Development",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Mobile Security",
      "Performance Optimization"
    ],
    color: "from-teal-600 to-cyan-600"
  }
];

// Why choose us
const whyChooseUs = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and methodologies to deliver innovative solutions."
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Your data and systems are protected with industry-leading security measures."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Expertise",
    description: "Our team brings international experience and best practices to every project."
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Proven Results",
    description: "We have a track record of successful implementations and satisfied clients."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services for modern businesses. From artificial intelligence and 5G technology to cybersecurity and cloud solutions." />
        <meta name="keywords" content="AI services, IT solutions, 5G technology, cybersecurity, cloud computing, data analytics, mobile development" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT services for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive AI and IT solutions designed to accelerate your business growth, 
                enhance efficiency, and drive innovation across all industries.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Service Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive range of cutting-edge technology solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {serviceCategories.map((category, index) => (
                <div key={index} className={`bg-gradient-to-br ${category.color} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  <div className="text-white mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;