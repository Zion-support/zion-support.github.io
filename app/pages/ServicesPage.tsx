import React from 'react';
import React from 'react';
import React from 'react';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Zion Tech Group Services",
    "description": "Comprehensive AI and IT solutions including cybersecurity, cloud infrastructure, digital transformation, and more.",
    "url": "https://ziontechgroup.com/services",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "serviceType": "Technology Solutions",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Technology Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Infrastructure"
          }
        }
      ]
    }
  };

  const services = [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.",
      icon: CpuChipIcon,
      href: "/ai-solutions",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving threats.",
      icon: ShieldCheckIcon,
      href: "/cybersecurity",
      features: ["Security Audits", "Threat Detection", "Data Protection", "Compliance"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and infrastructure management to optimize performance and reduce operational costs.",
      icon: CloudIcon,
      href: "/cloud-solutions",
      features: ["Cloud Migration", "Infrastructure Management", "Scalability", "Cost Optimization"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Digital Transformation",
      description: "Strategic digital transformation services to modernize your business processes and enhance customer experiences.",
      icon: ChartBarIcon,
      href: "/digital-transformation",
      features: ["Process Automation", "Digital Strategy", "Change Management", "Technology Integration"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Micro SaaS Solutions",
      description: "Custom micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications.",
      icon: GlobeAltIcon,
      href: "/micro-saas-solutions",
      features: ["Custom Development", "SaaS Architecture", "API Integration", "Scalable Solutions"],
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "5G Solutions",
      description: "Next-generation 5G technology solutions for enhanced connectivity, IoT applications, and ultra-low latency services.",
      icon: GlobeAltIcon,
      href: "/5g-solutions",
      features: ["5G Implementation", "IoT Solutions", "Edge Computing", "Network Optimization"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Services - Zion Tech Group AI and IT Solutions"
        description="Comprehensive AI and IT solutions including cybersecurity, cloud infrastructure, digital transformation, micro SaaS, and 5G solutions."
        keywords="AI solutions, cybersecurity services, cloud infrastructure, digital transformation, micro SaaS, 5G solutions, IT services"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              From AI and cybersecurity to cloud infrastructure and digital transformation, 
              we provide end-to-end technology solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive suite of services is designed to address every aspect 
                of your technology needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.href} 
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery</h3>
                <p className="text-gray-300">
                  We analyze your business needs, challenges, and goals to understand 
                  your requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strategy</h3>
                <p className="text-gray-300">
                  We develop a comprehensive strategy and roadmap tailored to your 
                  specific business objectives.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
                <p className="text-gray-300">
                  Our expert team implements the solution with regular updates and 
                  transparent communication.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Support</h3>
                <p className="text-gray-300">
                  We provide ongoing support, maintenance, and optimization to ensure 
                  long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our services can help transform your business 
              and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
