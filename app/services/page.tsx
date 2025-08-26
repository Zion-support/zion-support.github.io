import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  Rocket,
  Target,
  Lightbulb,
  BarChart3,
  MessageSquare
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Advanced artificial intelligence and machine learning solutions",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "AI Automation"],
      color: "from-cyan-500 to-purple-500",
      textColor: "text-cyan-400"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Quantum Computing",
      description: "Next-generation quantum processors and algorithms",
      features: ["Quantum Algorithms", "Quantum Cryptography", "Quantum Machine Learning", "Quantum Simulation"],
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-400"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation",
      features: ["Cloud Migration", "DevOps Automation", "Serverless Computing", "Container Orchestration"],
      color: "from-green-500 to-blue-500",
      textColor: "text-green-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      features: ["Security Assessment", "Penetration Testing", "Compliance Management", "Identity & Access Management"],
      color: "from-red-500 to-orange-500",
      textColor: "text-red-400"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Blockchain Solutions",
      description: "Distributed ledger and smart contract platforms",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Blockchain Analytics"],
      color: "from-blue-500 to-indigo-500",
      textColor: "text-blue-400"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "IoT & Edge Computing",
      description: "Connected devices and real-time processing",
      features: ["Connected Devices", "Edge Processing", "Real-time Analytics", "Smart Cities"],
      color: "from-yellow-500 to-orange-500",
      textColor: "text-yellow-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge technology solutions designed to transform your business 
              and accelerate your digital transformation journey.
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-lg font-medium">
              <Zap className="w-5 h-5 mr-2" />
              Innovation at Scale
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 rounded-xl p-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className={`${service.textColor} text-xl font-semibold mb-2`}>{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className={`${service.textColor} hover:bg-gray-800 p-0`}>
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how our technology solutions 
              can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 px-8 py-3 text-lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 text-lg">
                <Rocket className="w-5 h-5 mr-2" />
                Request Demo
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}