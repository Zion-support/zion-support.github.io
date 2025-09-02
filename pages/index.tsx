import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';

export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
  
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      icon: Brain,
      href: '/services/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology services',
      icon: Network,
      href: '/services/it-services'
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions',
      icon: Cloud,
      href: '/services/micro-saas'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600"> Technology</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <Link href={service.href} className="block">
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication to your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Fast Delivery</h3>
                <p className="text-gray-600 text-center mb-4">
                  Quick turnaround times without compromising quality. Most projects delivered in 2-8 weeks.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Rapid prototyping and MVP development</li>
                  <li>• Agile development methodology</li>
                  <li>• 24/7 development team availability</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Enterprise Security</h3>
                <p className="text-gray-600 text-center mb-4">
                  Bank-level security and compliance standards with SOC 2, GDPR, and HIPAA compliance.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• End-to-end encryption and data protection</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Compliance with industry standards</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Expert Team</h3>
                <p className="text-gray-600 text-center mb-4">
                  Dedicated professionals with years of experience in cutting-edge technologies.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Certified AI and ML engineers</li>
                  <li>• Full-stack developers and architects</li>
                  <li>• DevOps and cloud specialists</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Global Reach</h3>
                <p className="text-gray-600 text-center mb-4">
                  Serving clients worldwide with local expertise and 24/7 support across all time zones.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Multi-timezone development teams</li>
                  <li>• Local compliance and regulations</li>
                  <li>• International deployment expertise</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Scalable Solutions</h3>
                <p className="text-gray-600 text-center mb-4">
                  Built to grow with your business from startup to enterprise scale.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Auto-scaling cloud infrastructure</li>
                  <li>• Microservices architecture</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Proven Results</h3>
                <p className="text-gray-600 text-center mb-4">
                  Track record of successful projects with measurable ROI and client satisfaction.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 500+ successful projects delivered</li>
                  <li>• 99.9% uptime guarantee</li>
                  <li>• 50+ satisfied enterprise clients</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive your success. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More About Us
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-white hover:text-blue-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Website</p>
                <a href="https://ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}