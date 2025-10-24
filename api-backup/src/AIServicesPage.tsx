import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Zap, 
  Brain, 
  Cloud, 
  Database, 
  Shield, 
  Settings, 
  Eye, 
  Leaf, 
  CreditCard, 
  Heart, 
  Truck, 
  ShoppingCart, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Bot, 
  Cpu, 
  Network, 
  ArrowRight, 
  CheckCircle, 
  ExternalLink, 
  Sparkles, 
  Rocket, 
  TrendingUp, 
  BarChart3, 
  Target, 
  MessageSquare 
} from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for AI services
const AI_SERVICES = [
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot Solutions',
    description: 'Intelligent conversational AI that understands context and provides human-like responses.',
    price: '$299',
    period: '/month',
    features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Custom Training'],
    category: 'AI & Machine Learning',
    popular: true,
    icon: Bot,
    color: 'from-blue-600 to-purple-700',
  },
  {
    id: 'ai-analytics',
    name: 'AI-Powered Analytics',
    description: 'Advanced analytics platform that uses machine learning to uncover insights from your data.',
    price: '$499',
    period: '/month',
    features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Data Visualization'],
    category: 'AI & Machine Learning',
    popular: true,
    icon: BarChart3,
    color: 'from-green-600 to-teal-700',
  },
  {
    id: 'ai-automation',
    name: 'AI Process Automation',
    description: 'Automate repetitive tasks and workflows with intelligent AI agents.',
    price: '$399',
    period: '/month',
    features: ['Workflow Automation', 'Task Scheduling', 'Error Handling', 'Performance Monitoring'],
    category: 'AI & Machine Learning',
    popular: false,
    icon: Zap,
    color: 'from-orange-600 to-red-700',
  }
];

export default function AIServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const filteredServices = AI_SERVICES.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(AI_SERVICES.map(service => service.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to analytics, we provide the AI tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="price">Sort by Price</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      {service.popular && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                      <span className="text-gray-500">{service.period}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant="outline">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI services today and see the difference artificial intelligence can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
