import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results."
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30">
              <Star className="w-4 h-4 mr-2" />
              Leading AI & Technology Solutions
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Business with AI
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 1000+ successful businesses that have transformed their operations with our cutting-edge technology solutions. 
              From AI-powered automation to quantum-ready security, get a free consultation and discover how we can accelerate your growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/pricing" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg">
              <span className="flex items-center justify-center">
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
            <Link href="/case-studies" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg">
              <span className="flex items-center justify-center">
                See Success Stories
                <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link to={service.href}>
                  <Button variant="outline" className="w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Innovations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Innovations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our cutting-edge technology solutions and industry-leading innovations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <div className="text-blue-600 mb-4">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing</h3>
              <p className="text-gray-600 mb-4">
                Revolutionary quantum computing solutions for complex problem-solving and advanced simulations.
              </p>
              <Link href="/services/quantum-computing-simulator" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
              <div className="text-purple-600 mb-4">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Drug Discovery</h3>
              <p className="text-gray-600 mb-4">
                Accelerate pharmaceutical research with our AI-powered drug discovery platform.
              </p>
              <Link href="/services/ai-drug-discovery" className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn More →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
              <div className="text-green-600 mb-4">
                <Shield className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Security</h3>
              <p className="text-gray-600 mb-4">
                Future-proof your security with quantum-resistant cryptography and quantum key distribution.
              </p>
              <Link href="/services/quantum-security-implementation" className="text-green-600 hover:text-green-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with cutting-edge technology solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/pricing" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg">
              <span className="flex items-center justify-center">
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;