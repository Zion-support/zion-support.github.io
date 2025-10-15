import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Zap, Users, BarChart3, Settings, TrendingUp, Globe, Database } from 'lucide-react';

const ITSupportPage = () => {
  const services = [
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock technical assistance for all your IT needs.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "24/7 phone and email support",
        "Remote desktop assistance",
        "Priority ticket handling",
        "Expert technical team",
        "Multi-language support"
      ],
      pricing: "From $199/month"
    },
    {
      title: "System Monitoring",
      description: "Proactive monitoring of your IT infrastructure to prevent issues.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Real-time system monitoring",
        "Performance analytics",
        "Automated alerts",
        "Health reports",
        "Capacity planning"
      ],
      pricing: "From $299/month"
    },
    {
      title: "Security Management",
      description: "Comprehensive security solutions to protect your business data.",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Firewall management",
        "Antivirus protection",
        "Security updates",
        "Vulnerability scanning",
        "Incident response"
      ],
      pricing: "From $399/month"
    },
    {
      title: "Backup & Recovery",
      description: "Reliable backup solutions to ensure your data is always safe.",
      icon: <Database className="w-8 h-8" />,
      features: [
        "Automated backups",
        "Cloud storage",
        "Disaster recovery",
        "Data encryption",
        "Recovery testing"
      ],
      pricing: "From $149/month"
    },
    {
      title: "Network Management",
      description: "Optimize your network performance and connectivity.",
      icon: <Globe className="w-8 h-8" />,
      features: [
        "Network optimization",
        "Bandwidth management",
        "VPN setup",
        "WiFi configuration",
        "Troubleshooting"
      ],
      pricing: "From $249/month"
    },
    {
      title: "Software Management",
      description: "Keep your software updated and secure across all devices.",
      icon: <Settings className="w-8 h-8" />,
      features: [
        "Software updates",
        "License management",
        "Installation support",
        "Compatibility testing",
        "User training"
      ],
      pricing: "From $179/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              IT Support Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive IT support solutions to keep your business running smoothly. 
            From technical assistance to proactive monitoring, we've got you covered.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-white/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Reliable IT Support?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get professional IT support that keeps your business running smoothly. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Shield className="w-5 h-5 mr-2" />
              Get Support Now
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSupportPage;
