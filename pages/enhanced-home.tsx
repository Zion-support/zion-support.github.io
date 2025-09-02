import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
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
  Code
} from 'lucide-react';

export default function EnhancedHome() {
  const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions that transform your business operations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable, secure, and efficient cloud solutions designed for modern enterprise needs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'DevOps Excellence',
      description: 'Streamlined development and deployment processes for faster, more reliable software delivery.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics platforms.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire technology infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'The cloud architecture they designed is incredibly scalable and secure. We can now handle 10x more traffic.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'Their cybersecurity implementation gave us complete peace of mind. Zero breaches since deployment.',
      rating: 5
    }
  ];

  return (
    <>
      <SEO
        title='Zion Tech Group - Leading Technology Solutions'
        description='Transform your business with cutting-edge AI, cloud solutions, cybersecurity, and digital transformation services.'
        keywords='AI services, cloud solutions, cybersecurity, digital transformation, technology consulting'
      />
      
      <main className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
        {/* Hero Section */}
        <section className='relative overflow-hidden py-20 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className='mb-4 bg-blue-600 text-white'>
                  <Award className='w-4 h-4 mr-2' />
                  Leading Technology Provider
                </Badge>
                <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
                  Transform Your Business with
                  <span className='text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text'>
                    {' '}Cutting-Edge Technology
                  </span>
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-300'>
                  We deliver innovative AI solutions, cloud architecture, cybersecurity, and digital transformation services that drive real business results.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='mt-10 flex items-center justify-center gap-x-6'
              >
                <Button size='lg' className='bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
                  Get Started
                  <ArrowRight className='ml-2 h-5 w-5' />
                </Button>
                <Button variant='outline' size='lg' className='text-white border-gray-600 hover:bg-gray-800'>
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='py-16 sm:py-24'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='text-3xl font-bold text-white sm:text-4xl'>
                    {stat.number}
                  </div>
                  <div className='text-sm font-medium text-gray-400'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center mb-16'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Our Services
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Comprehensive technology solutions designed to accelerate your digital transformation.
              </p>
            </div>
            
            <div className='grid gap-8 lg:grid-cols-2 xl:grid-cols-3'>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className='p-8 h-full bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors'>
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-6`}>
                      <service.icon className='h-6 w-6 text-white' />
                    </div>
                    <h3 className='text-xl font-semibold text-white mb-4'>
                      {service.title}
                    </h3>
                    <p className='text-gray-300 mb-6'>
                      {service.description}
                    </p>
                    <Button variant='outline' className='w-full text-white border-gray-600 hover:bg-gray-800'>
                      Learn More
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-24 sm:py-32 bg-slate-800/50'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center mb-16'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                What Our Clients Say
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Trusted by industry leaders worldwide.
              </p>
            </div>
            
            <div className='grid gap-8 lg:grid-cols-3'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className='p-8 bg-slate-800 border-slate-700'>
                    <div className='flex items-center mb-4'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className='h-5 w-5 text-yellow-400 fill-current' />
                      ))}
                    </div>
                    <p className='text-gray-300 mb-6'>
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className='font-semibold text-white'>
                        {testimonial.name}
                      </div>
                      <div className='text-sm text-gray-400'>
                        {testimonial.role}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-24 sm:py-32'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Ready to Transform Your Business?
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Let's discuss how our technology solutions can drive your success.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <Button size='lg' className='bg-gradient-to-r from-blue-600 to-purple-600 text-white'>
                  <Phone className='mr-2 h-5 w-5' />
                  Contact Us
                </Button>
                <Button variant='outline' size='lg' className='text-white border-gray-600 hover:bg-gray-800'>
                  <Mail className='mr-2 h-5 w-5' />
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}