import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Eye, MessageSquare, Bot, Link2, Wifi, Atom, Glasses, Plug } from 'lucide-react';

export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
  
  const mainServices = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including computer vision, NLP, and predictive analytics',
      icon: Brain,
      href: '/services#ai',
      features: ['Computer Vision', 'Natural Language Processing', 'Predictive Analytics', 'AI Chatbots']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology services from cloud platforms to cybersecurity',
      icon: Network,
      href: '/services#cloud',
      features: ['Cloud Platforms', 'Cybersecurity', 'DevOps Automation', 'Infrastructure Monitoring']
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to your business needs',
      icon: Cloud,
      href: '/services#saas',
      features: ['Custom Web Apps', 'API Development', 'Workflow Automation', 'Real-time Analytics']
    }
  ];

  const emergingTech = [
    { name: 'Blockchain & Web3', icon: Link2 },
    { name: 'IoT & Edge Computing', icon: Wifi },
    { name: 'Quantum Computing', icon: Atom },
    { name: 'AR/VR & Metaverse', icon: Glasses },
    { name: 'Computer Vision', icon: Eye },
    { name: 'Advanced NLP', icon: MessageSquare }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider</title>
        <meta name='description' content='Zion Tech Group delivers cutting-edge AI services, IT solutions, and Micro SaaS platforms. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='AI services, IT solutions, Micro SaaS, cloud computing, cybersecurity, blockchain, IoT, quantum computing' />
      </Head>
      <main className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
                Transform Your Business with
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'> Cutting-Edge Technology</span>
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
                Zion Tech Group delivers revolutionary AI services, comprehensive IT solutions, and innovative Micro SaaS platforms. 
                From blockchain to quantum computing, we're your partner in digital transformation.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <Link href='/contact'>
                  <Button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg'>
                    Get Started Today
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </Button>
                </Link>
                <a href='tel:+13024640950' className='flex items-center text-blue-600 hover:text-blue-500 font-medium'>
                  <Phone className='w-5 h-5 mr-2' />
                  +1 302 464 0950
                </a>
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
                  <div className='text-3xl sm:text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                  <div className='text-gray-600'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Our Core Services
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive technology solutions designed to accelerate your business growth and innovation.
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {mainServices.map((service, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 text-center'>{service.title}</h3>
                  <p className='text-gray-600 mb-6 text-center'>{service.description}</p>
                  <ul className='space-y-2 mb-6'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center text-sm text-gray-700'>
                        <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href}>
                    <Button variant='outline' className='w-full'>
                      Explore Services
                      <ArrowRight className='w-4 h-4 ml-2' />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Technologies */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                Emerging Technologies
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Stay ahead of the curve with our expertise in the latest technological innovations.
              </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
              {emergingTech.map((tech, index) => (
                <div key={index} className='text-center group'>
                  <div className='p-4 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors mb-3'>
                    <tech.icon className='w-8 h-8 text-gray-600 group-hover:text-blue-600 mx-auto' />
                  </div>
                  <h3 className='text-sm font-medium text-gray-900'>{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Get in touch with our experts to discuss your project requirements and discover how we can help you achieve your goals.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link href='/contact'>
                <Button className='bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-lg'>
                  Contact Us Now
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
              </Link>
              <div className='flex items-center space-x-6 text-white'>
                <a href='tel:+13024640950' className='flex items-center hover:text-blue-100 transition-colors'>
                  <Phone className='w-5 h-5 mr-2' />
                  +1 302 464 0950
                </a>
                <a href='mailto:kleber@ziontechgroup.com' className='flex items-center hover:text-blue-100 transition-colors'>
                  <Mail className='w-5 h-5 mr-2' />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className='mt-8 text-blue-100'>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🌐 <a href='https://ziontechgroup.com' className='hover:text-white underline' target='_blank' rel='noreferrer'>ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}