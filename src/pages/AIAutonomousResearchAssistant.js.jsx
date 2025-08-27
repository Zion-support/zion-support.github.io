import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, BookOpen, Zap, TrendingUp, Users, Globe, ArrowRight, Cpu, Database, Network, Target, Shield, Rocket, BarChart3, Lightbulb, Code, Cloud, Lock, Eye, Sparkles, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AIAutonomousResearchAssistant() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Research Areas', icon: <Brain className="w-5 h-5"/>, count: 12 },
    { id: 'AI', name: 'Artificial Intelligence', icon: <Cpu className="w-5 h-5"/>, count: 4 },
    { id: 'Data', name: 'Data Science', icon: <Database className="w-5 h-5"/>, count: 3 },
    { id: 'Tech', name: 'Technology', icon: <Code className="w-5 h-5"/>, count: 5 }
  ];

  const researchAreas = [
    {
      id: 1,
      title: 'AI-Powered Research Automation',
      description: 'Automated research workflows using advanced AI algorithms for data collection, analysis, and insights generation',
      category: 'AI',
      complexity: 'Advanced',
      estimatedTime: '2-4 weeks',
      price: '$15,000',
      features: ['Automated data collection', 'AI-powered analysis', 'Real-time insights', 'Custom reporting'],
      icon: <Brain className="w-8 h-8 text-blue-400"/>
    },
    {
      id: 2,
      title: 'Predictive Analytics Platform',
      description: 'Machine learning models for forecasting trends and making data-driven predictions',
      category: 'Data',
      complexity: 'Intermediate',
      estimatedTime: '3-5 weeks',
      price: '$12,000',
      features: ['ML model development', 'Data preprocessing', 'Model validation', 'Deployment support'],
      icon: <BarChart3 className="w-8 h-8 text-green-400"/>
    },
    {
      id: 3,
      title: 'Natural Language Processing Research',
      description: 'Advanced NLP techniques for text analysis, sentiment analysis, and language understanding',
      category: 'AI',
      complexity: 'Advanced',
      estimatedTime: '4-6 weeks',
      price: '$18,000',
      features: ['Text preprocessing', 'Model training', 'API development', 'Documentation'],
      icon: <Code className="w-8 h-8 text-purple-400"/>
    }
  ];

  const filteredResearch = researchAreas.filter(area => {
    const matchesSearch = area.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         area.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || area.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <SEO 
        title="AI Autonomous Research Assistant - Zion Tech Group" 
        description="Advanced AI-powered research automation and data analysis solutions. Transform your research capabilities with cutting-edge technology." 
        keywords="AI research, research automation, data analysis, machine learning, Zion Tech Group" 
        canonical="https://ziontechgroup.com/ai-research-assistant"
      />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <Brain className="h-12 w-12 text-blue-400"/>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Research Assistant
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your research capabilities with AI-powered automation, advanced analytics, 
              and intelligent insights generation. Accelerate discovery and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                <Rocket className="w-5 h-5 mr-2"/>
                Start Research Project
              </Button>
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <BookOpen className="w-5 h-5 mr-2"/>
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-cyan-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Phone className="w-5 h-5 text-blue-200"/>
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Mail className="w-5 h-5 text-blue-200"/>
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-blue-200"/>
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
                <input 
                  type="text" 
                  placeholder="Search research areas..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="w-full px-4 py-3 pl-10 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)} 
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-blue-400 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Research Areas Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredResearch.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No research areas found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search criteria or browse all categories</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }} 
                className="bg-blue-600 hover:bg-blue-700"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-gray-300">
                  Showing <span className="text-blue-400 font-medium">{filteredResearch.length}</span> of{' '}
                  <span className="text-blue-400 font-medium">{researchAreas.length}</span> research areas
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredResearch.map((area, index) => (
                  <motion.div
                    key={area.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              {area.icon}
                              <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-600/30">
                                {area.category}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl font-bold text-white mb-2">
                              {area.title}
                            </CardTitle>
                            <CardDescription className="text-gray-300 text-sm leading-relaxed">
                              {area.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0 space-y-4">
                        {/* Complexity & Time */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-blue-400"/>
                            <span className="text-gray-300">Complexity:</span>
                            <span className="text-blue-300 font-medium">{area.complexity}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-400"/>
                            <span className="text-gray-300">Time:</span>
                            <span className="text-green-300 font-medium">{area.estimatedTime}</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-center p-3 bg-blue-600/20 rounded-lg border border-blue-600/30">
                          <div className="text-2xl font-bold text-blue-400">{area.price}</div>
                          <div className="text-sm text-blue-200">Project Cost</div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Features</h4>
                          <div className="grid grid-cols-2 gap-1">
                            {area.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                                <CheckCircle className="w-3 h-3 text-blue-400"/>
                                <span className="truncate">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                          <ArrowRight className="w-4 h-4 mr-2"/>
                          Start Research Project
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our AI-powered research solutions can transform your capabilities and accelerate discovery. 
            Contact us to discuss your research needs and get started today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2"/>
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2"/>
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
