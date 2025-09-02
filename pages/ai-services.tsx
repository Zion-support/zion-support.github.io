import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Lightbulb
} from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function AIServices() {
  const services = [
    {
      icon: Brain,
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI-powered business intelligence solutions.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Data Visualization'],
      href: '/services/ai-business-intelligence'
    },
    {
      icon: Zap,
      title: 'AI Autonomous Systems',
      description: 'Deploy intelligent autonomous systems that can make decisions and take actions without human intervention.',
      features: ['Self-healing Systems', 'Automated Decision Making', 'Process Optimization', 'Continuous Learning'],
      href: '/services/ai-autonomous-business-intelligence-platform'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your digital assets with AI-powered cybersecurity solutions that adapt to emerging threats.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment'],
      href: '/services/ai-cybersecurity-platform'
    },
    {
      icon: BarChart3,
      title: 'AI Healthcare Analytics',
      description: 'Revolutionize healthcare with AI-driven analytics for better patient outcomes and operational efficiency.',
      features: ['Patient Risk Scoring', 'Treatment Optimization', 'Resource Allocation', 'Outcome Prediction'],
      href: '/services/ai-healthcare-analytics-platform'
    },
    {
      icon: Users,
      title: 'AI Customer Support',
      description: 'Enhance customer experience with intelligent chatbots and automated support systems.',
      features: ['24/7 Support', 'Natural Language Processing', 'Sentiment Analysis', 'Escalation Management'],
      href: '/services/ai-customer-support-automation'
    },
    {
      icon: Globe,
      title: 'AI Content Marketing',
      description: 'Create and optimize content at scale with AI-powered marketing automation and personalization.',
      features: ['Content Generation', 'SEO Optimization', 'Personalization', 'Performance Analytics'],
      href: '/services/ai-content-marketing-suite'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to focus on strategic initiatives.'
    },
    {
      icon: BarChart3,
      title: 'Better Decision Making',
      description: 'Leverage data-driven insights to make informed business decisions.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with AI-powered threat detection and prevention.'
    },
    {
      icon: Users,
      title: 'Improved Customer Experience',
      description: 'Deliver personalized experiences that drive customer satisfaction and loyalty.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems and identify opportunities for AI implementation.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your business objectives.'
    },
    {
      step: '03',
      title: 'Development & Integration',
      description: 'Build and integrate AI solutions that seamlessly work with your existing infrastructure.'
    },
    {
      step: '04',
      title: 'Training & Support',
      description: 'Provide comprehensive training and ongoing support to ensure successful adoption.'
    }
  ];

  return (
    <MainLayout 
      title="AI Services - Zion Tech Group"
      description="Transform your business with cutting-edge AI solutions. From business intelligence to autonomous systems, we deliver AI-powered innovations that drive growth."
      url="https://ziontechgroup.com/ai-services"
    >
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">AI Services</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Transform Your Business with AI
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation. Our comprehensive AI solutions are designed to help your business stay ahead in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our AI Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Comprehensive AI services tailored to your business needs
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
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

        {/* Benefits Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Choose Our AI Solutions?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                The benefits of implementing AI in your business
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our AI Implementation Process
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                A structured approach to AI success
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                AI Success Stories
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Measurable results from our AI implementations
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Efficiency Increase</div>
                <div className="text-gray-600">Average improvement in process efficiency</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Cost Reduction</div>
                <div className="text-gray-600">Average reduction in operational costs</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Accuracy Rate</div>
                <div className="text-gray-600">AI prediction and analysis accuracy</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Availability</div>
                <div className="text-gray-600">Continuous AI-powered operations</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your business goals and stay competitive in the digital marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}