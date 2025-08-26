import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Smartphone, 
  Globe, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function ServicesShowcase() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, predictive analytics, and intelligent automation systems.",
      features: ["Custom AI Models", "Predictive Analytics", "Process Automation", "Natural Language Processing"],
      color: "from-zion-cyan to-zion-blue",
      link: "/services/ai-ml"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions protecting your digital infrastructure and data.",
      features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Compliance Management"],
      color: "from-zion-purple to-zion-red",
      link: "/services/cybersecurity"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Design", "DevOps Automation", "Cost Optimization"],
      color: "from-zion-blue to-zion-cyan",
      link: "/services/cloud"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics platforms.",
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Performance Dashboards"],
      color: "from-zion-green to-zion-cyan",
      link: "/services/analytics"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Infrastructure",
      description: "Robust networking solutions for seamless connectivity and performance.",
      features: ["Network Design", "Security Implementation", "Performance Optimization", "24/7 Monitoring"],
      color: "from-zion-orange to-zion-yellow",
      link: "/services/networking"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Development", "Cross-platform Apps", "UI/UX Design", "App Store Optimization"],
      color: "from-zion-purple to-zion-pink",
      link: "/services/mobile"
    }
  ];

  const enterpriseFeatures = [
    "24/7 Dedicated Support",
    "Custom SLA Agreements",
    "Enterprise Security",
    "Scalable Solutions",
    "Compliance Ready",
    "Performance Guarantees"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-zion-blue-dark to-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-futuristic">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Services</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business transformation 
            and drive innovation across all digital touchpoints.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10"
            >
              <div className="p-6">
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-3 font-tech">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-futuristic">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Solutions</span>
              </h3>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                Tailored technology solutions for enterprise organizations requiring 
                scalability, security, and performance at scale.
              </p>
              
              {/* Enterprise Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/enterprise"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-neon-lg hover:scale-105 transition-all duration-300 transform"
              >
                Enterprise Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="text-center lg:text-right">
              <div className="inline-block p-8 bg-white/5 rounded-2xl border border-white/10">
                <Zap className="w-24 h-24 text-zion-cyan mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Ready to Scale?</h4>
                <p className="text-zion-slate-light">Let's discuss your enterprise needs</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that trust Zion Tech Group to deliver 
            innovative technology solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-neon-lg hover:scale-105 transition-all duration-300 transform"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}