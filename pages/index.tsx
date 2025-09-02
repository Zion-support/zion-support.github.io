<<<<<<< HEAD
import React from 'react';
import { SEO } from '../components/SEO';
import Navigation from '../src/components/Navigation';
import { SiteFooter } from '../src/components/SiteFooter';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { 
  Brain, 
  Cloud, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Rocket, 
  Code, 
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
=======
import React from
  'react';
import Head from
  'next/head';
>>>>>>> origin/main

export default function Home() {
  const services = [
    {
      name: 'AI Services',
      description: 'Artificial Intelligence solutions for automation, machine learning, and intelligent systems.',
      icon: Brain,
      href: '/services/ai-services',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT infrastructure, cloud solutions, and technical support.',
      icon: Network,
      href: '/services/it-services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Micro SaaS',
      description: 'Custom software-as-a-service solutions tailored to your business needs.',
      icon: Code,
      href: '/services/micro-saas',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Emerging Tech',
      description: 'Cutting-edge technologies including blockchain, AR/VR, and quantum computing.',
      icon: Rocket,
      href: '/emerging-tech',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      title: 'Expert Team',
      description: 'Experienced professionals with deep expertise in modern technologies.',
      icon: Users
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful implementations and satisfied clients.',
      icon: TrendingUp
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEO 
        title="Zion Tech Group - Leading Technology Solutions Provider"
        description="Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services."
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Innovation in Technology
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations. 
            We help businesses transform and thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through innovation, expertise, and unwavering commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center text-white">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <Mail className="w-5 h-5 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center text-white">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Services
            </Button>
          </div>
        </div>
      </section>
      
      <SiteFooter />
    </div>
  );
}