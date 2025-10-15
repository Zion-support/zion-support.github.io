import React from "react";
import { Helmet } from "react-helmet-async";
import { Zap, Shield, Globe, Brain, Cloud, Database, Smartphone, Lock, ArrowRight, CheckCircle } from "lucide-react";

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
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from cyber threats and ensure data integrity and compliance.",
    services: [
      "Security Assessment & Auditing",
      "Penetration Testing",
      "Security Monitoring & Incident Response",
      "Compliance & Risk Management",
      "Identity & Access Management",
      "Data Protection & Encryption"
    ],
    color: "from-red-600 to-orange-600"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.",
    services: [
      "Cloud Migration & Strategy",
      "Multi-Cloud Architecture",
      "Cloud Security & Compliance",
      "Cost Optimization",
      "Disaster Recovery & Backup",
      "Cloud Monitoring & Management"
    ],
    color: "from-green-600 to-teal-600"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics, visualization, and business intelligence solutions.",
    services: [
      "Data Strategy & Architecture",
      "Business Intelligence & Reporting",
      "Real-time Analytics",
      "Data Visualization",
      "Data Warehousing",
      "Machine Learning Integration"
    ],
    color: "from-indigo-600 to-purple-600"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Custom mobile applications for iOS and Android that deliver exceptional user experiences and drive business growth.",
    services: [
      "Native iOS & Android Apps",
      "Cross-Platform Development",
      "Mobile App UI/UX Design",
      "App Store Optimization",
      "Mobile Security & Testing",
      "Progressive Web Apps"
    ],
    color: "from-pink-600 to-rose-600"
  }
];

// Key benefits
const keyBenefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Deployment",
    description: "Get your solutions up and running quickly with our agile development approach."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-level security measures to protect your data and ensure compliance."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance for all our solutions."
  }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, 5G & IT Solutions</title>
        <meta name="description" content="Comprehensive AI solutions, 5G technology, cybersecurity, cloud services, and IT consulting from Zion Tech Group. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, 5G technology, cybersecurity, cloud services, IT consulting, data analytics, mobile development" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI, 5G, and IT solutions." />
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
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-3">{category.title}</h2>
                      <p className="text-gray-300 leading-relaxed">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-4">Our Services Include:</h3>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through our expertise, innovation, and commitment to excellence.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {keyBenefits.map((benefit, index) => (
                <div key={index} className="text-center bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started Today
                </a>
                <a
                  href="/demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;