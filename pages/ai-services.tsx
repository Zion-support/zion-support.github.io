import React from 'react';
import Head from 'next/head';
import { Brain, Cpu, Database, Network, Rocket, Phone, Mail, MapPin, Check, FlaskConical } from 'lucide-react';
import Button from '../components/ui/Button';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: Cpu,
      title: "Automation",
      description: "Streamline your operations with intelligent automation",
      features: ["Process Automation", "Workflow Optimization", "Data Processing", "System Integration"]
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Protect your systems with AI-powered security solutions",
      features: ["Threat Detection", "Anomaly Detection", "Security Monitoring", "Incident Response"]
    },
    {
      icon: Users,
      title: "AI Consulting",
      description: "Expert guidance on AI strategy and implementation",
      features: ["AI Strategy", "Technology Assessment", "Implementation Planning", "Training & Support"]
    }
  ];

  const benefits = [
    "Increased efficiency and productivity",
    "Reduced operational costs",
    "Enhanced decision-making capabilities",
    "Improved customer experience",
    "Competitive advantage in the market"
  ];

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including development, automation, security, and consulting. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, AI consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Services</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From development to deployment, we provide comprehensive AI services that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-colors"
                >
                  <div className="mb-4">
                    <service.icon className="h-12 w-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-center mb-4">
                    <Check className="h-6 w-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact us today for a free consultation and discover how AI can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;