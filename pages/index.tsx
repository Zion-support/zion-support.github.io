import React from 'react';
import Link from 'next/link';
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
  BarChart3,
  Lightbulb,
  Heart
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed', description: 'Successfully delivered projects across various industries' },
    { number: '50+', label: 'Happy Clients', description: 'Satisfied customers who trust us with their technology needs' },
    { number: '99.9%', label: 'Uptime Guarantee', description: 'Reliable service availability for all our solutions' },
    { number: '24/7', label: 'Support Available', description: 'Round-the-clock technical assistance and support' }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Transform your business with cutting-edge artificial intelligence solutions that automate processes and drive innovation.',
      icon: Brain,
      href: '/ai-services',
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions and compliance frameworks.',
      icon: Shield,
      href: '/services/ai-cybersecurity-platform',
      features: ['Threat Detection', 'Risk Assessment', 'Compliance Management', 'Security Architecture']
    },
    {
      title: 'Cloud & DevOps',
      description: 'Scale your infrastructure with modern cloud solutions and automated deployment pipelines.',
      icon: Cloud,
      href: '/services/cloud-devops',
      features: ['Cloud Migration', 'Containerization', 'CI/CD Pipelines', 'Infrastructure as Code']
    }
  ];

  const features = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new ways to solve complex business challenges.'
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.'
    },
    {
      icon: Users,
      title: 'Client Centric',
      description: 'We work closely with our clients to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: Zap,
      title: 'Rapid Delivery',
      description: 'Our agile approach ensures quick turnaround times without compromising on quality or security.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 85% and reduced costs significantly.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'The cybersecurity implementation was flawless. We feel confident knowing our systems are protected by their expert team.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Technology, DataFlow',
      content: 'Their cloud migration strategy was perfect. We achieved 99.9% uptime and improved our scalability dramatically.',
      rating: 5
    }
  ];

  return (
    <MainLayout 
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Transform your business with cutting-edge AI services, cybersecurity solutions, and cloud infrastructure. Leading provider of revolutionary technology solutions."
      url="https://ziontechgroup.com"
    >
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">Welcome to Zion Tech Group</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Pioneering the Future of Technology
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations. We help businesses transform, secure, and scale their digital infrastructure.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/contact"
                  className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our impact in numbers
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Core Services
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Zion Tech Group?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The advantages of partnering with us
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Success stories from our satisfied customers
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-blue-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our innovative technology solutions can help you achieve your business goals and stay competitive in the digital marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}