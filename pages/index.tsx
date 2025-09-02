import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions including AI email responders, content creation, and business intelligence",
      icon: Brain,
      href: "/services#ai"
    },
    {
      title: "IT Services", 
      description: "Comprehensive information technology services including cloud platforms, cybersecurity, and data engineering",
      icon: Network,
      href: "/services#cloud"
    },
    {
      title: "Micro SaaS",
      description: "Scalable software as a service solutions including workflow automation, project management, and IoT platforms",
      icon: Cloud,
      href: "/services#saas"
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Leading technology solutions provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to <span className="text-blue-600">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
                Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
                Transform your business with our comprehensive suite of services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Explore Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your project requirements and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  Contact Us
                  <Phone className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+13024640950" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors text-lg font-medium rounded-md">
                Call Now: +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-100">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="underline hover:text-white">kleber@ziontechgroup.com</a></p>
              <p className="mt-2">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;