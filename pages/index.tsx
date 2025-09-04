import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield, Brain, Settings, Server, Cloud, Lock } from 'lucide-react';

const Home: NextPage = () => {
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge AI solutions including autonomous systems, machine learning, and intelligent automation.',
      icon: Brain,
      href: '/ai-services'
    },
    {
      title: 'Micro SAAS Services',
      description: 'Comprehensive micro SAAS solutions including project management, CRM, analytics, and productivity tools.',
      icon: Settings,
      href: '/micro-saas-services'
    },
    {
      title: 'IT Services',
      description: 'Complete IT services including cloud migration, DevOps, cybersecurity, and infrastructure management.',
      icon: Server,
      href: '/it-services'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Decentralized applications, smart contracts, DeFi platforms, and cross-chain integration.',
      icon: Shield,
      href: '/blockchain-solutions'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, migration services, and multi-cloud management for modern applications.',
      icon: Cloud,
      href: '/it-services'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions, threat detection, and compliance services to protect your digital assets.',
      icon: Lock,
      href: '/it-services'
    }
  ];

  const features = [
    {
      title: 'Expert Team',
      description: 'Experienced developers and consultants with deep industry knowledge.',
      icon: Users
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality control processes for reliable solutions.',
      icon: CheckCircle
    },
    {
      title: 'Fast Delivery',
      description: 'Agile development methodology ensuring timely project completion.',
      icon: Clock
    },
    {
      title: 'Security First',
      description: 'Built-in security measures to protect your data and applications.',
      icon: Shield
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with
              <span className="text-blue-400"> Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Leading technology solutions provider helping businesses innovate and grow 
              with cutting-edge AI, cloud architecture, and digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Zion Tech Group
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a team of passionate technologists dedicated to helping businesses 
                leverage the power of modern technology to achieve their goals. With years 
                of experience across various industries, we understand the unique challenges 
                that organizations face in today's digital landscape.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to deliver innovative, scalable, and secure technology 
                solutions that drive business growth and operational efficiency.
              </p>
              <Link
                href="/about"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;