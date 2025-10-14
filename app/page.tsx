import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon,
  GlobeAltIcon,
  SignalIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";
import FuturisticBackground from "./components/FuturisticBackground";

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com/",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown",
      "addressRegion": "DE",
      "postalCode": "19709",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-302-464-0950",
      "contactType": "customer service",
      "email": "kleber@ziontechgroup.com"
    },
    "sameAs": [
      "https://linkedin.com/company/ziontechgroup",
      "https://twitter.com/ziontechgroup"
    ]
  };

  const features = [
    {
      icon: BriefcaseIcon,
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence solutions for your business needs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CloudIcon,
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: SignalIcon,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      name: "AI Solutions",
      description: "Advanced artificial intelligence solutions for your business",
      href: "/ai-solutions"
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions",
      href: "/cloud-infrastructure"
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive security solutions",
      href: "/cybersecurity"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
              <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-lg border border-white/20 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you leverage cutting-edge technology to drive innovation and growth.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Your Journey
            <ArrowRightIcon className="inline-block w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;