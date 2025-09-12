import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import ErrorBoundary from '../../components/ErrorBoundary';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { ArrowRight, Brain, Zap, Shield, Target, TrendingUp, Users, Globe, Code, Database, Cpu, Network } from 'lucide-react';

export default function AIToolsShowcase() {
  return (
    <ErrorBoundary>
      <SEO
        title="AI Tools Showcase - Zion Tech Group"
        description="Explore our comprehensive collection of cutting-edge AI tools, platforms, and solutions designed to accelerate your digital transformation and drive business success."
        keywords="AI tools, artificial intelligence platform, AI solutions, machine learning tools, AI development, AI automation"
        url="/ai-tools-showcase"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                🛠️ COMPREHENSIVE AI TOOLS
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Tools Showcase
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
                Discover our comprehensive suite of AI tools, platforms, and solutions designed to 
                accelerate your digital transformation and drive unprecedented business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
                  <Brain className="mr-2 h-5 w-5" />
                  Explore Tools
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900">
                  <Target className="mr-2 h-5 w-5" />
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Platform Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                AI Platform Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI tools are organized into specialized categories, each designed to address 
                specific business challenges and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Machine Learning Platform */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning Platform</h3>
                  <p className="text-gray-600 mb-6">
                    End-to-end ML platform for building, training, and deploying machine learning models at scale.
                  </p>
                  <Badge className="bg-blue-100 text-blue-800 mb-4">Core Platform</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• AutoML capabilities</div>
                    <div>• Model versioning</div>
                    <div>• A/B testing framework</div>
                    <div>• Real-time inference</div>
                  </div>
                </div>
              </Card>

              {/* AI Automation Suite */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-emerald-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Automation Suite</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive automation tools powered by AI to streamline workflows and boost productivity.
                  </p>
                  <Badge className="bg-green-100 text-green-800 mb-4">Productivity</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Workflow automation</div>
                    <div>• Document processing</div>
                    <div>• Data extraction</div>
                    <div>• Process optimization</div>
                  </div>
                </div>
              </Card>

              {/* AI Security Tools */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-orange-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Security Tools</h3>
                  <p className="text-gray-600 mb-6">
                    Advanced security solutions powered by AI to protect against threats and ensure compliance.
                  </p>
                  <Badge className="bg-red-100 text-red-800 mb-4">Security</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Threat detection</div>
                    <div>• Anomaly detection</div>
                    <div>• Compliance monitoring</div>
                    <div>• Risk assessment</div>
                  </div>
                </div>
              </Card>

              {/* Data Analytics Platform */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-pink-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Analytics Platform</h3>
                  <p className="text-gray-600 mb-6">
                    Powerful analytics platform with AI-driven insights and predictive capabilities.
                  </p>
                  <Badge className="bg-purple-100 text-purple-800 mb-4">Analytics</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Real-time analytics</div>
                    <div>• Predictive modeling</div>
                    <div>• Data visualization</div>
                    <div>• Business intelligence</div>
                  </div>
                </div>
              </Card>

              {/* AI Development Tools */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-amber-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Development Tools</h3>
                  <p className="text-gray-600 mb-6">
                    Comprehensive development environment for building and deploying AI applications.
                  </p>
                  <Badge className="bg-yellow-100 text-yellow-800 mb-4">Development</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• IDE integration</div>
                    <div>• Code generation</div>
                    <div>• Testing frameworks</div>
                    <div>• Deployment tools</div>
                  </div>
                </div>
              </Card>

              {/* Edge AI Solutions */}
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-teal-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Edge AI Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Edge computing solutions for real-time AI processing and decision making.
                  </p>
                  <Badge className="bg-cyan-100 text-cyan-800 mb-4">Edge Computing</Badge>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Real-time processing</div>
                    <div>• Low latency inference</div>
                    <div>• Offline capabilities</div>
                    <div>• IoT integration</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured AI Tools */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured AI Tools
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our most powerful and innovative AI tools that are transforming businesses worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      AI Model Builder Pro
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Advanced no-code platform for building, training, and deploying machine learning models 
                      without requiring extensive technical expertise.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">No-Code</Badge>
                      <Badge variant="secondary">AutoML</Badge>
                      <Badge variant="secondary">Enterprise</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• Drag-and-drop interface</div>
                      <div>• Automated feature engineering</div>
                      <div>• One-click deployment</div>
                      <div>• Performance monitoring</div>
                    </div>
                    <Button variant="outline" className="mt-4 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Intelligent Process Automation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AI-powered automation platform that can understand, learn, and optimize business processes 
                      to maximize efficiency and reduce costs.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">RPA</Badge>
                      <Badge variant="secondary">AI-Powered</Badge>
                      <Badge variant="secondary">Scalable</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• Process discovery</div>
                      <div>• Automated optimization</div>
                      <div>• Exception handling</div>
                      <div>• Performance analytics</div>
                    </div>
                    <Button variant="outline" className="mt-4 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      AI Security Guardian
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive AI security platform that provides real-time threat detection, 
                      vulnerability assessment, and automated response capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Cybersecurity</Badge>
                      <Badge variant="secondary">Real-time</Badge>
                      <Badge variant="secondary">Compliance</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• Threat intelligence</div>
                      <div>• Behavioral analysis</div>
                      <div>• Automated response</div>
                      <div>• Compliance reporting</div>
                    </div>
                    <Button variant="outline" className="mt-4 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Smart Data Platform
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Intelligent data platform that automatically discovers, cleans, and prepares data 
                      for AI applications with minimal human intervention.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Data Engineering</Badge>
                      <Badge variant="secondary">Auto-Processing</Badge>
                      <Badge variant="secondary">Quality</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>• Data discovery</div>
                      <div>• Quality assessment</div>
                      <div>• Automated cleaning</div>
                      <div>• Feature engineering</div>
                    </div>
                    <Button variant="outline" className="mt-4 group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Tools by Industry */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                AI Tools by Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized AI tools and solutions tailored to meet the unique challenges 
                and opportunities of different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-gray-600 mb-4">AI tools for trading, risk management, and fraud detection</p>
                <Badge className="bg-blue-100 text-blue-800">FinTech</Badge>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600 mb-4">AI solutions for diagnosis, treatment, and patient care</p>
                <Badge className="bg-green-100 text-green-800">HealthTech</Badge>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing</h3>
                <p className="text-gray-600 mb-4">AI tools for predictive maintenance and quality control</p>
                <Badge className="bg-purple-100 text-purple-800">Industry 4.0</Badge>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Retail & E-commerce</h3>
                <p className="text-gray-600 mb-4">AI solutions for personalization and inventory management</p>
                <Badge className="bg-orange-100 text-orange-800">RetailTech</Badge>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover how our comprehensive AI tools can accelerate your digital transformation, 
              boost productivity, and drive unprecedented business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
                <Brain className="mr-2 h-5 w-5" />
                Explore All Tools
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900">
                <Target className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}