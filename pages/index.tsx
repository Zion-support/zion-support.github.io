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
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-500/20">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From innovative micro SaaS applications to cutting-edge AI solutions and enterprise IT services, 
              we provide comprehensive technology solutions to help your business thrive in the digital age.
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

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Innovative Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest cutting-edge solutions that are transforming industries and driving business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Document Processor */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Document Processor Pro</h3>
              <p className="text-gray-600 mb-6">
                Intelligent document processing with 99.9% OCR accuracy, smart data extraction, and automated workflows.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$35/mo</span>
                <Link href="/services/ai-document-processor" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Blockchain Integration */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⛓️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blockchain Integration Services</h3>
              <p className="text-gray-600 mb-6">
                Complete blockchain solutions including smart contracts, DeFi protocols, and NFT platforms.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">$15K+</span>
                <Link href="/services/blockchain-integration" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* AI Drug Discovery */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Drug Discovery Platform</h3>
              <p className="text-gray-600 mb-6">
                Advanced AI platform for pharmaceutical drug discovery, molecular design, and clinical trial optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">$50K+</span>
                <Link href="/services/ai-drug-discovery" className="text-green-600 hover:text-green-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Computing Consulting</h3>
              <p className="text-gray-600 mb-6">
                Expert quantum computing consulting for optimization problems, cryptography, and research applications.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-indigo-600">$25K+</span>
                <Link href="/services/quantum-computing-consulting" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* AI Climate Modeling */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Climate Modeling Solutions</h3>
              <p className="text-gray-600 mb-6">
                Advanced AI climate modeling for weather prediction, environmental monitoring, and climate change analysis.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-600">$20K+</span>
                <Link href="/services/ai-climate-modeling" className="text-teal-600 hover:text-teal-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Smart Calendar Scheduler */}
            <div className="bg-gradient-to-br from-orange-50 to-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Calendar Scheduler</h3>
              <p className="text-gray-600 mb-6">
                AI-powered calendar management with intelligent scheduling, conflict resolution, and time optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-600">$12/mo</span>
                <Link href="/services/smart-calendar-scheduler" className="text-orange-600 hover:text-orange-700 font-semibold">
                  Learn More →
                </Link>
              </div>
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
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;