import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Code, BarChart3, Lock } from 'lucide-react';

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
      description: 'Cutting-edge artificial intelligence solutions including code review, API testing, customer success automation, and SEO optimization',
      icon: Brain,
      href: '/services#ai',
      features: ['AI Code Review Assistant', 'Intelligent API Testing', 'Customer Success Automation', 'AI-Powered SEO']
    },
    {
      title: 'IT Services',
      description: 'Advanced IT solutions including blockchain integration, IoT management, edge computing, and quantum-ready security',
      icon: Network,
      href: '/services#cloud',
      features: ['Blockchain Integration', 'IoT Platform Management', 'Edge Computing', 'Quantum Security']
    },
    {
      title: 'Micro SaaS',
      description: 'Innovative software solutions including email automation, inventory management, pricing optimization, and lead scoring',
      icon: Cloud,
      href: '/services#saas',
      features: ['Email Marketing Automation', 'Smart Inventory Management', 'Pricing Optimization', 'Lead Scoring']
    }
  ];
  const featuredServices = [
    {
      title: 'AI Code Review Assistant',
      description: 'Intelligent code analysis with security vulnerability detection and performance optimization suggestions.',
      price: 'From $149/mo',
      icon: Code,
      color: 'blue'
    },
    {
      title: 'Blockchain Integration Services',
      description: 'Enterprise blockchain solutions with smart contracts and DeFi integration.',
      price: 'From $15k–$75k',
      icon: Lock,
      color: 'green'
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaigns with personalized content and optimal send timing.',
      price: 'From $129/mo',
      icon: Mail,
      color: 'purple'
    },
    {
      title: 'IoT Platform Management',
      description: 'End-to-end IoT solutions with device management and data analytics.',
      price: 'From $8k–$40k',
      icon: Globe,
      color: 'orange'
    }
  ];
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SaaS Solutions</title>
        <meta name='description' content='Leading provider of AI services, IT solutions, and innovative micro SaaS platforms. Transform your business with cutting-edge technology.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='AI services, IT solutions, micro SaaS, blockchain, IoT, edge computing, quantum security' />
      </Head>
      <main className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-50 to-indigo-100 py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-5xl font-bold text-gray-900 mb-6'>
                Welcome to Zion Tech Group
              </h1>
              <p className='text-xl text-gray-600 max-w-4xl mx-auto mb-8'>
                Leading provider of revolutionary AI services, advanced IT solutions, and innovative micro SaaS platforms. 
                Transform your business with cutting-edge technology and intelligent automation.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/services'>
                  <Button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3'>
                    Explore Our Services
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Button>
                </Link>
                <Link href='/contact'>
                  <Button variant='outline' className='px-8 py-3'>
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                  <div className='text-gray-600'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Our Core Services</h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {services.map((service, index) => (
                <Card key={index} className='p-8 hover:shadow-lg transition-shadow bg-white'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>{service.title}</h3>
                  <p className='text-gray-600 mb-6'>{service.description}</p>
                  <ul className='text-sm text-gray-700 space-y-2 mb-6'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center'>
                        <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button variant='outline' className='w-full'>
                      Learn More
                      <ArrowRight className='w-4 h-4 ml-2' />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-gray-900 mb-4'>Featured Solutions</h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Discover our most popular and innovative solutions with transparent pricing and clear value propositions.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {featuredServices.map((service, index) => (
                <Card key={index} className='p-6 hover:shadow-lg transition-shadow bg-white border border-gray-200'>
                  <div className={`p-3 rounded-full bg-${service.color}-100 w-fit mb-4`}>
                    <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-3'>{service.title}</h3>
                  <p className='text-sm text-gray-600 mb-4'>{service.description}</p>
                  <div className='flex items-center justify-between'>
                    <span className={`font-semibold text-${service.color}-600`}>{service.price}</span>
                    <Link href='/contact' className={`text-${service.color}-600 hover:text-${service.color}-500 text-sm`}>
                      Learn more →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-white mb-4'>Ready to Get Started?</h2>
              <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto'>
                Contact our team of experts to discuss your project requirements and discover how our innovative solutions can drive your success.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                <div className='text-center'>
                  <Phone className='h-8 w-8 text-blue-300 mx-auto mb-4' />
                  <h3 className='text-lg font-semibold text-white mb-2'>Phone</h3>
                  <a href='tel:+13024640950' className='text-blue-300 hover:text-white transition-colors'>
                    +1 302 464 0950
                  </a>
                </div>
                <div className='text-center'>
                  <Mail className='h-8 w-8 text-blue-300 mx-auto mb-4' />
                  <h3 className='text-lg font-semibold text-white mb-2'>Email</h3>
                  <a href='mailto:kleber@ziontechgroup.com' className='text-blue-300 hover:text-white transition-colors'>
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className='text-center'>
                  <Globe className='h-8 w-8 text-blue-300 mx-auto mb-4' />
                  <h3 className='text-lg font-semibold text-white mb-2'>Address</h3>
                  <p className='text-blue-300'>
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/contact'>
                  <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3'>
                    Contact Us Now
                    <ArrowRight className='w-4 h-4 ml-2' />
                  </Button>
                </Link>
                <Link href='/services'>
                  <Button variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3'>
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}