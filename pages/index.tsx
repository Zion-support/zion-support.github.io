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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content: 'Outstanding service and cutting-edge technology. They delivered our project on time and within budget.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StartupXYZ',
      content: 'The team at Zion Tech Group is exceptional. Their expertise in cloud infrastructure saved us months of development.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow with confidence using our scalable architecture'
    }
  ];
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions and automation tools',
      icon: Brain,
      href: '/services#ai',
      features: ['Content Creation', 'Email Automation', 'Customer Support', 'Business Intelligence']
    },
    {
      title: 'IT Services',
      description: 'Enterprise-grade infrastructure and development services',
      icon: Network,
      href: '/services#cloud',
      features: ['DevOps Automation', 'Cloud Migration', 'Security Assessment', 'API Management']
    },
    {
      title: 'Micro SaaS',
      description: 'Specialized software solutions for business challenges',
      icon: Cloud,
      href: '/services#saas',
      features: ['Project Management', 'Analytics Dashboard', 'HR Management', 'Financial Tracking']
    }
  ];
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider</title>
        <meta name='description' content='Transform your business with Zion Tech Group cutting-edge AI services, enterprise IT solutions, and innovative Micro SaaS platforms. 500+ projects completed, 99.9% uptime guarantee.' />
        <meta name='keywords' content='AI services, IT solutions, Micro SaaS, cloud computing, cybersecurity, business automation, technology consulting, enterprise software' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content='Zion Tech Group - Leading Technology Solutions Provider' />
        <meta property='og:description' content='Transform your business with cutting-edge AI, IT, and Micro SaaS solutions. Expert team, proven results, 24/7 support.' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ziontechgroup.com' />
        <meta property='og:image' content='https://ziontechgroup.com/og-image.jpg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Zion Tech Group - Leading Technology Solutions Provider' />
        <meta name='twitter:description' content='Transform your business with cutting-edge AI, IT, and Micro SaaS solutions.' />
        <meta name='twitter:image' content='https://ziontechgroup.com/og-image.jpg' />
        <link rel='canonical' href='https://ziontechgroup.com' />
        <script type='application/ld+json'>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": "Leading provider of AI services, IT solutions, and Micro SaaS platforms",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
              "https://ziontechgroup.com"
            ]
          })}
        </script>
      </Head>
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
                Welcome to Zion Tech Group
              </h1>
              <p className='text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8'>
                Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <Link href='/services'>
                  <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>
                    Explore Our Services
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </Button>
                </Link>
                <Link href='/contact'>
                  <Button variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold'>
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
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-3xl sm:text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                  <div className='text-sm sm:text-base text-gray-600'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-20 sm:py-32'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                Our Core Services
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive technology solutions designed to transform your business and drive growth.
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {services.map((service, index) => (
                <Card key={index} className='p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 text-center'>{service.title}</h3>
                  <p className='text-gray-600 mb-6 text-center'>{service.description}</p>
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-900 mb-3'>Key Features:</h4>
                    <div className='grid grid-cols-2 gap-2'>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className='flex items-center text-sm text-gray-600'>
                          <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={service.href}>
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'>
                      Learn More
                      <ArrowRight className='w-4 h-4 ml-2' />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
                We deliver exceptional results through innovation, expertise, and unwavering commitment to excellence.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {features.map((feature, index) => (
                <div key={index} className='text-center group'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <feature.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                What Our Clients Say
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
                Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className='p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300'>
                  <div className='flex items-center mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                    ))}
                  </div>
                  <p className='text-gray-600 mb-6 italic'>"{testimonial.content}"</p>
                  <div className='border-t pt-4'>
                    <div className='font-semibold text-gray-900'>{testimonial.name}</div>
                    <div className='text-sm text-gray-500'>{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h2>
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
              Contact us today for a free consultation and discover how our solutions can drive your success.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a href='tel:+13024640950' className='flex items-center text-white hover:text-blue-200 transition-colors'>
                <Phone className='w-5 h-5 mr-2' />
                +1 302 464 0950
              </a>
              <a href='mailto:kleber@ziontechgroup.com' className='flex items-center text-white hover:text-blue-200 transition-colors'>
                <Mail className='w-5 h-5 mr-2' />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className='mt-4 text-center text-blue-100'>
              <p className='text-sm'>364 E Main St STE 1008, Middletown DE 19709</p>
              <p className='text-sm mt-1'>Visit us at <a href='https://ziontechgroup.com' className='underline hover:text-white' target='_blank' rel='noreferrer'>ziontechgroup.com</a></p>
            </div>
            <div className='mt-8'>
              <Link href='/contact'>
                <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>
                  Get Free Consultation
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}