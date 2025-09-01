import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Users,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Headphones,
  Globe,
  BarChart3,
  Star,
  Brain,
  Shield,
  Phone,
  Mail,
} from 'lucide-react';

export default function AICustomerSupportAutomation() {
  const features = [
    {
      icon: MessageSquare,
      title: '24/7 Chatbot Support',
      description:
        'Intelligent chatbots that provide instant responses and handle common customer inquiries.',
    },
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description:
        'Advanced NLP that understands customer intent and provides accurate, contextual responses.',
    },
    {
      icon: Users,
      title: 'Human-AI Handoff',
      description:
        'Seamless escalation to human agents when complex issues require personal attention.',
    },
    {
      icon: Zap,
      title: 'Automated Ticket Routing',
      description:
        'Smart ticket routing that directs inquiries to the most qualified support agents.',
    },
    {
      icon: Clock,
      title: 'Response Time Optimization',
      description:
        'Reduce response times and improve customer satisfaction with automated workflows.',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description:
        'Comprehensive analytics to monitor support performance and identify improvement areas.',
    },
  ];

  const benefits = [
    'Reduce support costs by up to 60%',
    'Improve response times by 80%',
    'Increase customer satisfaction scores',
    'Handle multiple inquiries simultaneously',
    'Provide consistent support quality',
    'Scale support operations efficiently',
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'AI-powered live chat with instant responses.',
      icon: MessageSquare,
    },
    {
      name: 'Email Support',
      description: 'Automated email categorization and response.',
      icon: Mail,
    },
    {
      name: 'Phone Support',
      description: 'Intelligent call routing and IVR systems.',
      icon: Phone,
    },
    {
      name: 'Social Media',
      description: 'Monitor and respond to social media inquiries.',
      icon: Globe,
    },
  ];

  const industries = [
    'E-commerce & Retail',
    'Technology & SaaS',
    'Healthcare & Medical',
    'Financial Services',
    'Travel & Hospitality',
    'Education & Training',
    'Real Estate',
    'Manufacturing',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                AI Customer Support Automation
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
                Transform your customer support with AI-powered automation that
                provides instant, accurate responses and scales your support
                operations efficiently.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Automate Support Today
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
                >
                  View All Services{' '}
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Platform Features
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our AI support automation platform provides comprehensive tools to
              enhance your customer support experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Why Choose AI Support Automation?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform delivers measurable results that transform your
                customer support operations and improve satisfaction.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <MessageSquare className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Brain className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Zap className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Multi-Channel Support
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Provide consistent support across all customer touchpoints with
              our integrated platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <channel.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {channel.name}
                </h3>
                <p className="text-gray-600 text-sm">{channel.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Our AI support automation platform works across industries,
              providing tailored solutions for your specific support needs.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                    <span className="font-medium text-gray-900">
                      {industry}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Transform Your Support?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let's discuss how our AI support automation can revolutionize your
              customer support operations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule Demo
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                View Support Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
