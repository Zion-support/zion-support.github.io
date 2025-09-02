import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
// import { SEO } from '../components/SEO';
// import { Button } from '../components/ui/Button';
// import { Card } from '../components/ui/Card';
// import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';

export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions including AI agents, content creation, and intelligent automation",
      icon: Brain,
      href: "/services#ai"
    },
    {
      title: "IT Services", 
      description: "Comprehensive information technology services including cloud platforms, cybersecurity, and DevOps",
      icon: Network,
      href: "/services#cloud"
    },
    {
      title: "Micro SaaS",
      description: "Scalable software as a service solutions including custom applications and workflow automation",
      icon: Cloud,
      href: "/services#saas"
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Email Responder",
      description: "Automated email responses with intelligent categorization",
      price: "From $199/mo",
      icon: Mail,
      href: "/services"
    },
    {
      title: "E-Commerce Return Management",
      description: "Automated return processing with intelligent tracking",
      price: "From $299/mo",
      icon: ArrowRight,
      href: "/services"
    },
    {
      title: "Healthcare Appointment Scheduler",
      description: "HIPAA-compliant scheduling with telemedicine support",
      price: "From $199/mo",
      icon: Clock,
      href: "/services"
    },
    {
      title: "AI Content Creation Suite",
      description: "Generate high-quality content with brand consistency",
      price: "From $249/mo",
      icon: Brain,
      href: "/services"
    }
  ];
  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Leading technology solutions provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="p-8 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link href={service.href}>
                  <button className="w-full border border-white text-white hover:bg-white hover:text-slate-900 px-4 py-2 rounded-lg transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Featured Services Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular AI, IT, and Micro SaaS solutions with transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {featuredServices.map((service, index) => (
              <div key={index} className="p-6 hover:shadow-lg transition-shadow border border-gray-200 rounded-lg">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  <Link href={service.href} className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6">
              Contact us today to discuss your project requirements and discover how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-blue-200">+1 302 464 0950</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-200">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </main>
</>
  );
}