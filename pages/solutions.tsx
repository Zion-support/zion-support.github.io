import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import Layout from '../components/Layout';
import { SEO } from '../components/SEO';
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
  Bot,
  Calendar,
  Workflow,
  BarChart3,
  MessageSquare,
  FileText,
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      title: 'AI Content Creation',
      description:
        'Automated content generation for blogs, social media, and marketing materials',
      icon: FileText,
      href: '/solutions/ai-content-creation',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Campaigns',
        'SEO Optimization',
      ],
      color: 'blue',
    },
    {
      title: 'Email Automation',
      description:
        'Streamlined email workflows and automated customer communication',
      icon: Mail,
      href: '/solutions/email-automation',
      features: [
        'Drip Campaigns',
        'Welcome Sequences',
        'Abandoned Cart Recovery',
        'Newsletter Automation',
      ],
      color: 'green',
    },
    {
      title: 'Customer Support Platform',
      description: 'AI-powered customer service and support ticket management',
      icon: MessageSquare,
      href: '/solutions/customer-support',
      features: [
        'Live Chat Integration',
        'Ticket Management',
        'Knowledge Base',
        'Response Automation',
      ],
      color: 'purple',
    },
    {
      title: 'Event Management',
      description: 'Complete event planning and management solution',
      icon: Calendar,
      href: '/solutions/event-management',
      features: [
        'Event Registration',
        'Attendee Management',
        'Payment Processing',
        'Analytics Dashboard',
      ],
      color: 'orange',
    },
    {
      title: 'Project Management',
      description:
        'Comprehensive project tracking and team collaboration tools',
      icon: Workflow,
      href: '/solutions/project-management',
      features: [
        'Task Management',
        'Team Collaboration',
        'Time Tracking',
        'Progress Reports',
      ],
      color: 'indigo',
    },
    {
      title: 'Workflow Automation',
      description: 'Automate repetitive business processes and workflows',
      icon: Zap,
      href: '/solutions/workflow-automation',
      features: [
        'Process Automation',
        'Integration Management',
        'Approval Workflows',
        'Performance Monitoring',
      ],
      color: 'red',
    },
  ];

  const stats = [
    { number: '95%', label: 'Process Efficiency' },
    { number: '60%', label: 'Time Savings' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '99%', label: 'Customer Satisfaction' },
=======
import { Target, Users, Building, Zap, CheckCircle, ArrowRight, Globe, Shield, BarChart3, Lightbulb } from 'lucide-react';

export default function Solutions() {
  const solutions = [
  {
      icon: Building,
      title: 'Enterprise Solutions',
      description: 'Comprehensive technology solutions for large organizations and enterprises.',
      features: ['Scalable Architecture,Enterprise Security,Integration Services,24/7 Support'],
      href: '/solutions/enterprise'
    },
    {
      icon: Users,
      title: 'Small Business Solutions',
      description: 'Cost-effective technology solutions designed for small and medium businesses.',
      features: ['Affordable Pricing,Quick Deployment,Easy Management,Local Support'],
      href: '/solutions/small-business'
    },
    {
      icon: Zap,
      title: 'Startup Solutions',
      description: 'Rapid development and deployment solutions for startups and new ventures.',
      features: ['Fast Time-to-Market,MVP Development,Scalable Infrastructure,Growth Support'],
      href: '/solutions/startups'
    },
    {
      icon: Target,
      title: 'Custom Development',
      description: 'Tailored software solutions built specifically for your unique business needs.',
      features: ['Bespoke Solutions,Flexible Architecture,Custom Integrations,Ongoing Evolution'],
      href: '/solutions/custom-development'
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Transform your business processes with modern digital solutions.',
      features: ['Process Automation,Digital Workflows,Data Analytics,Cloud Migration'],
      href: '/solutions/digital-transformation'
    }
  ];

  const benefits = [
  {
      icon: BarChart3,
      title: 'Improved Efficiency',
      description: 'Streamline operations and boost productivity with our technology solutions.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with enterprise-grade security and compliance measures.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Stay ahead of the competition with cutting-edge technology and innovation.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Get dedicated support from our team of technology experts and specialists.'
    }
  ];

  const industries = [
    'Healthcare & Medical,Financial Services,E-commerce & Retail,Manufacturing,Education,Real Estate,Professional Services,Non-Profit Organizations'
>>>>>>> main
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
<<<<<<< HEAD
        <meta
          name="description"
          content="Comprehensive business solutions powered by AI and automation"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Business Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive suite of
                AI-powered solutions designed to automate, optimize, and scale
                your operations.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Schedule Demo
                </Button>
=======
        <meta name="description" content="Comprehensive technology solutions for enterprises, small businesses, and startups. Custom development and digital transformation services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-base font-semibold leading-7 text-blue-600">Solutions</span>
>>>>>>> main
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Technology Solutions for Every Business
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From startups to enterprises, we provide tailored technology solutions that drive growth, efficiency, and innovation.
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
=======
        {/* Solutions Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer specialized solutions designed to meet the unique needs of different business types and sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <solution.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={solution.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
>>>>>>> main
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of business solutions, each
                designed to address specific challenges and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="p-8 hover: shadow-xl transition-shadow duration-300"
                >
                  <div className="text-center mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${solution.color}-100 mb-4`}
                    >
                      <solution.icon
                        className={`h-8 w-8 text-${solution.color}-600`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={solution.href}>
                    <Button className="w-full" variant="outline">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </Card>
=======
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Solutions?</h2>
              <p className="text-lg text-gray-600">
                Our solutions are designed to deliver measurable business value and competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
>>>>>>> main
              ))}
            </div>
          </div>
        </section>

        {/* Industries & CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our solutions are designed to work across various industries, with deep understanding of sector-specific challenges and requirements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-lg mb-6">
                  Let's discuss your specific needs and find the perfect solution for your business. Our experts are here to help you succeed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Free consultation and assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Customized solution design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3" />
                    <span>Expert implementation support</span>
                  </div>
                </div>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
<<<<<<< HEAD
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you choose the right solutions for your
              business needs and implement them successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  View Pricing
                </Button>
=======
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Find Your Perfect Solution
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Every business is unique. Let us help you find the technology solution that fits your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Services
>>>>>>> main
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
