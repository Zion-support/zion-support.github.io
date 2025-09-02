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
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      href: "/ai-services"
    },
    {
      title: "IT Services", 
      description: "Comprehensive information technology services",
      icon: Network,
      href: "/it-services"
    },
    {
      title: "Micro SaaS",
      description: "Scalable software as a service solutions",
      icon: Cloud,
      href: "/micro-saas"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link href={service.href}>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Contact Information Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-50 rounded-lg">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-sm sm:text-base text-blue-600 hover:text-blue-500 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-50 rounded-lg">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-sm sm:text-base text-green-600 hover:text-green-500 transition-colors break-all">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-50 rounded-lg sm:col-span-2 lg:col-span-1">
                <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Website</h3>
                <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-sm sm:text-base text-purple-600 hover:text-purple-500 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-sm sm:text-base text-gray-600">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </main>
</>
  );
}