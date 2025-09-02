const React = dynamic(() => import('react'), { ssr: false });;
const Head = dynamic(() => import('next/head'), { ssr: false });;
const Link = dynamic(() => import('next/link'), { ssr: false });;
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
        <title>Zion Tech Group</title>
        <meta name='description' content='Leading technology solutions provider' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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
  );
}