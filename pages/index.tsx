import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
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
      description: 'Cutting-edge artificial intelligence solutions including autonomous systems, data quality management, and intelligent automation',
      icon: Brain,
      href: '/services#ai',
      features: ['AI-Powered Email Marketing', 'Data Quality Management', 'Security Threat Detection', 'Business Intelligence']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology services including cloud platforms, cybersecurity, and infrastructure management',
      icon: Network,
      href: '/services#cloud',
      features: ['Edge Computing', 'API Management', 'DevOps Automation', 'Real-Time Analytics']
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to your specific business needs and workflows',
      icon: Cloud,
      href: '/services#saas',
      features: ['Code Review Assistant', 'HR Management', 'E-Commerce Automation', 'Project Management']
    }
  ];
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name='description' content='Leading provider of AI services, cloud platforms, cybersecurity, and micro SaaS solutions. Transform your business with cutting-edge technology.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='AI services, cloud computing, cybersecurity, micro SaaS, technology solutions, digital transformation' />
      </Head>
      <main className='min-h-screen bg-white'>
        {/* Hero Section */}
        <section className='bg-gradient-to-br from-blue-50 to-purple-50 py-20'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center'>
              <h1 className='text-5xl font-bold text-gray-900 mb-6'>
                Welcome to Zion Tech Group
              </h1>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
                Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations. 
                Transform your business with our comprehensive suite of services.
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
                    Get Started
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
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {services.map((service, index) => (
                <Card key={index} className='p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>{service.title}</h3>
                  <p className='text-gray-600 mb-6'>{service.description}</p>
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-700 mb-3'>Key Features:</h4>
                    <ul className='text-sm text-gray-600 space-y-1'>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className='flex items-center justify-center'>
                          <CheckCircle className='w-4 h-4 text-green-500 mr-2' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl font-bold text-white mb-4'>Ready to Transform Your Business?</h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Let's discuss how our innovative solutions can help you achieve your goals. 
              Contact us today for a free consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact'>
                <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-3'>
                  <Phone className='w-4 h-4 mr-2' />
                  Call +1 302 464 0950
                </Button>
              </Link>
              <Link href='mailto:kleber@ziontechgroup.com'>
                <Button variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3'>
                  <Mail className='w-4 h-4 mr-2' />
                  Email Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}