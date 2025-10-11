'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Brain, 
  Wind, 
  Sun, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Users,
  TrendingUp,
  Zap,
  Target,
  FileText,
  BarChart,
  Cpu,
  Eye,
  Mic,
  Database,
  Globe,
  Phone,
  Mail,
  MapPin,
  Activity,
  Shield,
  Droplets,
  Thermometer
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiClimateSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'ai-climate-modeling',
      name: 'AI Climate Modeling Platform',
      description: 'Advanced AI climate modeling system for accurate weather prediction, climate analysis, and environmental forecasting',
      price: '$3,999/month',
      marketPrice: '$8000-30000/month',
      features: [
        'High-resolution climate modeling',
        'Weather pattern prediction',
        'Extreme weather event forecasting',
        'Climate change impact analysis',
        'Real-time data integration',
        'Multi-scale modeling capabilities'
      ],
      benefits: [
        'Improve prediction accuracy by 60%',
        'Reduce modeling time by 80%',
        'Better disaster preparedness',
        'Enhanced climate research'
      ],
      category: 'Modeling',
      popular: true,
      icon: Brain
    },
    {
      id: 'ai-energy-optimization',
      name: 'AI Energy Grid Optimization',
      description: 'Intelligent energy grid management system for renewable energy integration and smart grid optimization',
      price: '$2,999/month',
      marketPrice: '$6000-25000/month',
      features: [
        'Smart grid optimization',
        'Renewable energy forecasting',
        'Demand response management',
        'Energy storage optimization',
        'Grid stability monitoring',
        'Carbon footprint tracking'
      ],
      benefits: [
        'Reduce energy waste by 40%',
        'Increase renewable integration by 50%',
        'Lower operational costs',
        'Improve grid reliability'
      ],
      category: 'Energy',
      popular: true,
      icon: Zap
    },
    {
      id: 'ai-carbon-tracking',
      name: 'AI Carbon Footprint Tracking',
      description: 'Comprehensive AI platform for carbon footprint monitoring, tracking, and reduction strategies',
      price: '$1,999/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Real-time carbon monitoring',
        'Automated footprint calculation',
        'Reduction strategy recommendations',
        'Supply chain carbon tracking',
        'Regulatory compliance reporting',
        'Sustainability analytics'
      ],
      benefits: [
        'Reduce carbon emissions by 35%',
        'Automate reporting processes',
        'Improve sustainability metrics',
        'Ensure regulatory compliance'
      ],
      category: 'Carbon Management',
      popular: true,
      icon: Leaf
    },
    {
      id: 'ai-waste-management',
      name: 'AI Waste Management System',
      description: 'Smart waste management platform with AI-powered sorting, recycling optimization, and circular economy solutions',
      price: '$2,499/month',
      marketPrice: '$5000-20000/month',
      features: [
        'AI-powered waste sorting',
        'Recycling optimization algorithms',
        'Waste reduction strategies',
        'Circular economy planning',
        'Composting optimization',
        'Waste analytics and reporting'
      ],
      benefits: [
        'Increase recycling rates by 45%',
        'Reduce waste generation by 30%',
        'Lower waste management costs',
        'Improve environmental impact'
      ],
      category: 'Waste Management',
      popular: false,
      icon: Activity
    },
    {
      id: 'ai-water-management',
      name: 'AI Water Resource Management',
      description: 'Intelligent water management system for conservation, quality monitoring, and distribution optimization',
      price: '$2,199/month',
      marketPrice: '$4500-18000/month',
      features: [
        'Water quality monitoring',
        'Leak detection and prevention',
        'Water usage optimization',
        'Flood prediction and management',
        'Irrigation optimization',
        'Water treatment efficiency'
      ],
      benefits: [
        'Reduce water waste by 50%',
        'Improve water quality by 40%',
        'Lower water management costs',
        'Better resource conservation'
      ],
      category: 'Water Management',
      popular: true,
      icon: Droplets
    },
    {
      id: 'ai-agriculture-optimization',
      name: 'AI Agriculture Optimization',
      description: 'Smart agriculture platform with precision farming, crop optimization, and sustainable farming practices',
      price: '$1,799/month',
      marketPrice: '$3500-15000/month',
      features: [
        'Precision farming algorithms',
        'Crop yield optimization',
        'Soil health monitoring',
        'Pest and disease detection',
        'Irrigation management',
        'Sustainable farming practices'
      ],
      benefits: [
        'Increase crop yields by 25%',
        'Reduce water usage by 40%',
        'Lower pesticide use by 30%',
        'Improve soil health'
      ],
      category: 'Agriculture',
      popular: true,
      icon: Sun
    },
    {
      id: 'ai-air-quality-monitoring',
      name: 'AI Air Quality Monitoring',
      description: 'Advanced air quality monitoring and pollution control system with real-time analysis and alerts',
      price: '$1,499/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Real-time air quality monitoring',
        'Pollution source identification',
        'Health impact assessment',
        'Air quality forecasting',
        'Regulatory compliance tracking',
        'Public health alerts'
      ],
      benefits: [
        'Improve air quality by 35%',
        'Reduce health risks by 50%',
        'Better pollution control',
        'Enhanced public health'
      ],
      category: 'Air Quality',
      popular: false,
      icon: Wind
    },
    {
      id: 'ai-biodiversity-conservation',
      name: 'AI Biodiversity Conservation',
      description: 'AI-powered biodiversity monitoring and conservation platform for wildlife protection and ecosystem management',
      price: '$2,799/month',
      marketPrice: '$5500-22000/month',
      features: [
        'Wildlife population monitoring',
        'Habitat analysis and mapping',
        'Threat detection and prevention',
        'Ecosystem health assessment',
        'Conservation planning',
        'Biodiversity analytics'
      ],
      benefits: [
        'Improve conservation effectiveness by 60%',
        'Better wildlife protection',
        'Enhanced ecosystem management',
        'Data-driven conservation'
      ],
      category: 'Biodiversity',
      popular: true,
      icon: Shield
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Modeling', name: 'Climate Modeling', count: services.filter(s => s.category === 'Modeling').length },
    { id: 'Energy', name: 'Energy Management', count: services.filter(s => s.category === 'Energy').length },
    { id: 'Carbon Management', name: 'Carbon Management', count: services.filter(s => s.category === 'Carbon Management').length },
    { id: 'Waste Management', name: 'Waste Management', count: services.filter(s => s.category === 'Waste Management').length },
    { id: 'Water Management', name: 'Water Management', count: services.filter(s => s.category === 'Water Management').length },
    { id: 'Agriculture', name: 'Agriculture', count: services.filter(s => s.category === 'Agriculture').length },
    { id: 'Air Quality', name: 'Air Quality', count: services.filter(s => s.category === 'Air Quality').length },
    { id: 'Biodiversity', name: 'Biodiversity', count: services.filter(s => s.category === 'Biodiversity').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions - Zion Tech Group | Advanced Environmental AI Technology</title>
        <meta name="description" content="Revolutionary AI climate solutions including climate modeling, energy optimization, carbon tracking, and environmental monitoring. Combat climate change with cutting-edge AI technology." />
        <meta name="keywords" content="AI climate solutions, environmental AI, climate technology, carbon tracking AI, energy optimization, climate modeling, environmental monitoring, sustainability AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 py-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-4">
                🌱 Trusted by 100+ Environmental Organizations
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              AI Climate Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Combat climate change with cutting-edge AI technology. From climate modeling to carbon tracking, 
              we provide comprehensive AI solutions that help organizations achieve their sustainability goals.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Carbon Neutral Solutions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Real-Time Monitoring</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Regulatory Compliance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Scientific Validation</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{service.category}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-slate-800/50 to-green-900/50 rounded-3xl p-12 border border-green-500/20 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Combat Climate Change with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 100+ environmental organizations that have already transformed their operations with our AI solutions. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ Carbon neutral • ✓ Scientific validation • ✓ 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiClimateSolutionsPage;