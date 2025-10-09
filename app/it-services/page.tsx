'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Globe, Smartphone, Users, Server, HardDrive, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Microphone, Speaker, Battery, Power, Wrench, Hammer, Screwdriver, Tool, Cog, Gear, Settings2, ArrowRight, CheckCircle, Star, Phone, Zap, Award, Clock, ShieldCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to AWS, Azure, or GCP with 99.9% uptime guarantee.',
      features: ['AWS/Azure/GCP Migration', 'Cloud Architecture Design', 'Cost Optimization', '24/7 Monitoring'],
      price: 'Starting at $1,299/month',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions with threat detection and automated response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Automated Response', 'Compliance Reporting'],
      price: 'Starting at $799/month',
      color: 'text-red-400'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamline development workflows with automated testing, deployment, and monitoring.',
      features: ['Automated Testing', 'Continuous Deployment', 'Infrastructure as Code', 'Performance Monitoring'],
      price: 'Starting at $599/month',
      color: 'text-green-400'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Database design, optimization, migration, and management with AI-powered performance tuning.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup & Recovery'],
      price: 'Starting at $399/month',
      color: 'text-teal-400'
    },
    {
      icon: Globe,
      title: 'Network Solutions',
      description: 'Enterprise networking with high-speed connectivity and advanced security features.',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Support'],
      price: 'Starting at $699/month',
      color: 'text-purple-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with modern UI/UX design.',
      features: ['iOS & Android Apps', 'Cross-Platform Development', 'UI/UX Design', 'App Store Optimization'],
      price: 'Starting at $2,500/project',
      color: 'text-orange-400'
    }
  ];

  const additionalServices = [
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmap development.',
      price: '$200/hour'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: '24/7 server monitoring, maintenance, and optimization.',
      price: 'Starting at $299/month'
    },
    {
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Automated backup solutions and disaster recovery planning.',
      price: 'Starting at $199/month'
    },
    {
      icon: Monitor,
      title: 'System Integration',
      description: 'API development and system integration services.',
      price: 'Starting at $1,500/project'
    },
    {
      icon: Printer,
      title: 'Hardware Support',
      description: 'Computer, printer, and network equipment support.',
      price: 'Starting at $99/month'
    },
    {
      icon: Router,
      title: 'Network Security',
      description: 'Firewall configuration and network security implementation.',
      price: 'Starting at $399/month'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Proven Expertise',
      description: '10+ years of experience with 100+ successful projects'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all solutions'
    },
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'Microsoft, AWS, and Google certified engineers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              IT Services & Infrastructure
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to support and optimize your business infrastructure. 
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Get Free IT Assessment
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Core IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className={`text-lg font-bold ${service.color} mb-2`}>{service.price}</div>
                  <a
                    href="/contact"
                    className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Additional IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <service.icon className="w-6 h-6 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                <div className="text-cyan-400 font-bold text-sm">{service.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Basic Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Business hours support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Remote assistance
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Basic monitoring
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500">
              <h3 className="text-xl font-bold text-white mb-4">Professional Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$499/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 support
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  On-site visits
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority response
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started
              </a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Dedicated team
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom SLAs
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Proactive monitoring
                </li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Strategic consulting
                </li>
              </ul>
              <a
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Free IT Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;