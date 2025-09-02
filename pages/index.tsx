import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
<<<<<<< HEAD
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Award,
  Clock,
  Brain,
  Cloud,
  Database,
  Network,
  Target,
  Phone,
  Mail,
} from 'lucide-react';
=======
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Code, BarChart3, Lock } from 'lucide-react';
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27

export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];
<<<<<<< HEAD

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content:
        'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content:
        'Outstanding service and cutting-edge technology. They delivered our project on time and within budget.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, StartupXYZ',
      content:
        'The team at Zion Tech Group is exceptional. Their expertise in cloud infrastructure saved us months of development.',
      rating: 5,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow with confidence using our scalable architecture',
    },
  ];
  const services = [
    {
      title: 'AI Services',
      description:
        'Cutting-edge artificial intelligence solutions and automation tools',
      icon: Brain,
      href: '/services#ai',
      features: [
        'Content Creation',
        'Email Automation',
        'Customer Support',
        'Business Intelligence',
      ],
=======
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including code review, API testing, customer success automation, and SEO optimization',
      icon: Brain,
      href: '/services#ai',
      features: ['AI Code Review Assistant', 'Intelligent API Testing', 'Customer Success Automation', 'AI-Powered SEO']
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
    },
    {
      title: 'IT Services',
      description: 'Advanced IT solutions including blockchain integration, IoT management, edge computing, and quantum-ready security',
      icon: Network,
      href: '/services#cloud',
<<<<<<< HEAD
      features: [
        'DevOps Automation',
        'Cloud Migration',
        'Security Assessment',
        'API Management',
      ],
=======
      features: ['Blockchain Integration', 'IoT Platform Management', 'Edge Computing', 'Quantum Security']
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
    },
    {
      title: 'Micro SaaS',
      description: 'Innovative software solutions including email automation, inventory management, pricing optimization, and lead scoring',
      icon: Cloud,
      href: '/services#saas',
<<<<<<< HEAD
      features: [
        'Project Management',
        'Analytics Dashboard',
        'HR Management',
        'Financial Tracking',
      ],
    },
  ];
  return (
    <>
      <SEO
        title="Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider"
        description="Transform your business with Zion Tech Group's cutting-edge AI services, enterprise IT solutions, and innovative Micro SaaS platforms. 500+ projects completed, 99.9% uptime guarantee."
        keywords={[
          'AI services',
          'IT solutions',
          'Micro SaaS',
          'cloud computing',
          'cybersecurity',
          'business automation',
          'technology consulting',
          'enterprise software',
        ]}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          logo: 'https://ziontechgroup.com/logo.png',
          description:
            'Leading provider of AI services, IT solutions, and Micro SaaS platforms',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '364 E Main St STE 1008',
            addressLocality: 'Middletown',
            addressRegion: 'DE',
            postalCode: '19709',
            addressCountry: 'US',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-302-464-0950',
            contactType: 'customer service',
            email: 'kleber@ziontechgroup.com',
          },
          sameAs: ['https://ziontechgroup.com'],
        })}
      </script>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Leading provider of revolutionary technology solutions, AI
                services, and cutting-edge innovations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/services">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Explore Our Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
                  >
=======
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
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
<<<<<<< HEAD
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
=======
        <section className='py-16 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {stats.map((stat, index) => (
                <div key={index} className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                  <div className='text-gray-600'>{stat.label}</div>
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
<<<<<<< HEAD
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Core Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to transform your
                business and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg"
                >
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={service.href}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
=======
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
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise,
                and unwavering commitment to excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
=======
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
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
                Don't just take our word for it. Here's what our satisfied
                clients have to say about working with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
=======
                Don&apos;t just take our word for it. Here&apos;s what our
                satisfied clients have to say about working with us.
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 bg-white border-0 shadow-lg hover: shadow-xl transition-all duration-300"
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
<<<<<<< HEAD
=======

>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our
              solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center text-white hover:text-blue-200 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-4 text-center text-blue-100">
              <p className="text-sm">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
              <p className="text-sm mt-1">
                Visit us at{' '}
                <a
                  href="https://ziontechgroup.com"
                  className="underline hover:text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  ziontechgroup.com
                </a>
              </p>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
=======
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
>>>>>>> c85b090ce825e411719bdab0fc9c351cfd986e27
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
