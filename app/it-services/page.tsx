import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Settings, Database, Users, CheckCircle, ArrowRight, Phone, Mail, Server, Network, Lock, Monitor } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business needs.',
      icon: Cloud,
      features: ['AWS/Azure/GCP Setup', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
      price: 'Starting at $1,999/month'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Threat Detection', 'Firewall Management', 'Security Audits', 'Incident Response'],
      price: 'Starting at $2,499/month'
    },
    {
      title: 'System Administration',
      description: 'Expert management of your IT infrastructure and systems.',
      icon: Settings,
      features: ['Server Management', 'User Administration', 'System Monitoring', 'Performance Optimization'],
      price: 'Starting at $1,499/month'
    },
    {
      title: 'Database Management',
      description: 'Professional database design, optimization, and maintenance.',
      icon: Database,
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
      price: 'Starting at $1,799/month'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support for your business operations.',
      icon: Users,
      features: ['Help Desk Support', 'Remote Assistance', 'Hardware Support', 'Software Installation'],
      price: 'Starting at $999/month'
    },
    {
      title: 'Network Solutions',
      description: 'Robust networking solutions for seamless connectivity.',
      icon: Network,
      features: ['Network Design', 'VPN Setup', 'Wireless Solutions', 'Network Security'],
      price: 'Starting at $1,299/month'
    }
  ];

  const testimonials = [
    {
      name: "David Wilson",
      company: "Enterprise Solutions Inc",
      content: "Zion Tech Group's IT services have been instrumental in our digital transformation. Highly recommended!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "TechStart Corp",
      content: "Their cybersecurity solutions gave us peace of mind. Professional and reliable service.",
      rating: 5
    },
    {
      name: "Robert Martinez",
      company: "Global Industries",
      content: "Outstanding IT support and infrastructure management. They truly understand our needs.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, system administration, and technical support." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, system administration, technical support" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Professional IT Services
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Comprehensive IT solutions to keep your business running smoothly and securely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Started
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud infrastructure to cybersecurity, we provide comprehensive IT solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Upgrade Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how our IT services can help your business thrive.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ITServicesPage;
