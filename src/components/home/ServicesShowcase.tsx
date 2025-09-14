<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, 
  Shield, 
  BarChart3, 
  Cloud, 
  Globe, 
  Network, 
  Video, 
  TrendingUp, 
  Eye, 
  Key, 
  Server, 
  MessageSquare, 
  Zap,
  ArrowRight,
  Check,
  Star,
  Lightbulb,
  Building
} from 'lucide-react';

export function ServicesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, count: 0 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'security', name: 'Security', icon: Shield, count: 0 },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3, count: 0 },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Globe, count: 0 },
    { id: 'iot', name: 'IoT & Edge', icon: Network, count: 0 },
    { id: 'enterprise', name: 'Enterprise', icon: Building, count: 0 }
  ];

  const services = [
    // AI & Machine Learning Services
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Generate high-quality content, code, and documentation using advanced AI models.',
      category: 'ai',
      icon: Brain,
      price: '$29/month',
      features: ['Blog posts & articles', 'Technical documentation', 'Marketing copy', 'Code snippets', 'Multi-language support'],
      badge: 'Hot',
      link: '/ai-content-generator',
      popular: true
    },
    {
      id: 'ai-model-training',
      title: 'AI Model Training',
      description: 'Custom AI model development and training for your specific business use cases.',
      category: 'ai',
      icon: Brain,
      price: '$5,000+',
      features: ['Data preparation', 'Model architecture design', 'Training & optimization', 'Deployment support', 'Ongoing maintenance'],
      badge: 'Premium',
      link: '/ai-model-training',
      popular: false
    },
    {
      id: 'ai-chatbot-platform',
      title: 'AI Chatbot Platform',
      description: 'Build intelligent chatbots and virtual assistants for customer support and engagement.',
      category: 'ai',
      icon: MessageSquare,
      price: '$49/month',
      features: ['Natural language processing', 'Multi-channel support', 'Analytics dashboard', 'Custom integrations', '24/7 availability'],
      badge: 'Popular',
      link: '/ai-chatbot',
      popular: false
    },
    {
      id: 'video-analytics-ai',
      title: 'Video Analytics AI',
      description: 'AI-powered video analysis for security, retail analytics, and content optimization.',
      category: 'ai',
      icon: Video,
      price: '$89/month',
      features: ['Object detection', 'Behavior tracking', 'Content analysis', 'Real-time processing', 'Custom algorithms'],
      badge: 'New',
      link: '/video-analytics',
      popular: false
    },

    // Cloud & DevOps Services
    {
      id: 'cloud-migration-service',
      title: 'Cloud Migration Service',
      description: 'Seamlessly migrate your applications and infrastructure to modern cloud platforms.',
      category: 'cloud',
      icon: Cloud,
      price: '$2,500+',
      features: ['AWS, Azure, GCP support', 'Zero-downtime migration', 'Cost optimization', 'Security compliance', 'Performance tuning'],
      badge: 'Featured',
      link: '/cloud-migration',
      popular: true
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Streamline your development workflow with automated CI/CD pipelines and infrastructure management.',
      category: 'cloud',
      icon: Zap,
      price: '$89/month',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & alerting', 'Security scanning', 'Performance optimization'],
      badge: 'Popular',
      link: '/devops-automation',
      popular: false
    },
    {
      id: 'serverless-functions',
      title: 'Serverless Functions',
      description: 'Deploy and manage serverless functions for scalable, cost-effective application development.',
      category: 'cloud',
      icon: Server,
      price: '$19/month',
      features: ['Auto-scaling', 'Pay-per-use pricing', 'Multi-cloud support', 'Monitoring & logging', 'Security & compliance'],
      badge: 'Budget',
      link: '/serverless',
      popular: false
    },

    // Security Services
    {
      id: 'cybersecurity-assessment',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audits and vulnerability assessments for your digital infrastructure.',
      category: 'security',
      icon: Shield,
      price: '$299/assessment',
      features: ['Vulnerability scanning', 'Penetration testing', 'Security audit report', 'Remediation guidance', 'Compliance check'],
      badge: 'Essential',
      link: '/cybersecurity-assessment',
      popular: true
    },
    {
      id: 'network-security',
      title: 'Network Security',
      description: 'Advanced network security solutions including firewalls, VPNs, and threat detection.',
      category: 'security',
      icon: Shield,
      price: '$199/month',
      features: ['Next-gen firewalls', 'VPN solutions', 'Threat detection', '24/7 monitoring', 'Incident response'],
      badge: 'Enterprise',
      link: '/network-security',
      popular: false
    },
    {
      id: 'biometric-authentication',
      title: 'Biometric Authentication',
      description: 'Secure authentication using fingerprint, facial recognition, and voice biometrics.',
      category: 'security',
      icon: Key,
      price: '$99/month',
      features: ['Multi-factor authentication', 'Biometric verification', 'Secure storage', 'API integration', 'Compliance ready'],
      badge: 'Advanced',
      link: '/biometric-auth',
      popular: false
    },

    // Data & Analytics Services
    {
      id: 'data-analytics-dashboard',
      title: 'Data Analytics Dashboard',
      description: 'Transform raw data into actionable insights with interactive visualizations and real-time reporting.',
      category: 'data',
      icon: BarChart3,
      price: '$79/month',
      features: ['Data connectors', 'Custom dashboards', 'Real-time updates', 'Collaboration tools', 'Export capabilities'],
      badge: 'Popular',
      link: '/data-analytics',
      popular: true
    },
    {
      id: 'user-behavior-analytics',
      title: 'User Behavior Analytics',
      description: 'Understand user behavior patterns and optimize conversion rates with advanced analytics.',
      category: 'data',
      icon: Eye,
      price: '$79/month',
      features: ['Heatmaps', 'Session recordings', 'Funnel analysis', 'A/B testing', 'Conversion optimization'],
      badge: 'Growth',
      link: '/user-analytics',
      popular: false
    },
    {
      id: 'performance-monitoring',
      title: 'Performance Monitoring',
      description: 'Real-time performance monitoring and optimization for web and mobile applications.',
      category: 'data',
      icon: TrendingUp,
      price: '$69/month',
      features: ['Page load monitoring', 'API performance', 'User experience metrics', 'Alerting system', 'Performance reports'],
      badge: 'Essential',
      link: '/performance-monitoring',
      popular: false
    },

    // Blockchain & Web3 Services
    {
      id: 'blockchain-development',
      title: 'Blockchain Development',
      description: 'Smart contract development, DeFi applications, and blockchain infrastructure solutions.',
      category: 'blockchain',
      icon: Globe,
      price: '$8,000+',
      features: ['Smart contracts', 'DeFi protocols', 'Token development', 'DApp creation', 'Blockchain consulting'],
      badge: 'Premium',
      link: '/blockchain-development',
      popular: false
    },

    // IoT & Edge Services
    {
      id: 'iot-platform',
      title: 'IoT Platform',
      description: 'End-to-end IoT solution for device management, data collection, and analytics.',
      category: 'iot',
      icon: Network,
      price: '$149/month',
      features: ['Device management', 'Data collection', 'Real-time analytics', 'Predictive maintenance', 'Scalable infrastructure'],
      badge: 'Industrial',
      link: '/iot-platform',
      popular: false
    },

    // Enterprise Services
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      description: 'Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.',
      category: 'enterprise',
      icon: Building,
      price: '$999/month',
      features: ['White-label solution', 'Dedicated support', 'Custom integrations', 'Advanced analytics', 'SLA guarantees'],
      badge: 'Enterprise',
      link: '/enterprise',
      popular: true
    },
    {
      id: 'compliance-management',
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulations.',
      category: 'enterprise',
      icon: Shield,
      price: '$129/month',
      features: ['Automated audits', 'Policy management', 'Regulatory reporting', 'Risk assessment', 'Compliance dashboard'],
      badge: 'Compliance',
      link: '/compliance',
      popular: false
    }
  ];

  // Calculate category counts
  categories.forEach(category => {
    category.count = services.filter(service => 
      selectedCategory === 'all' || service.category === category.id
    ).length;
  });

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark to-zion-slate relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-zion-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 px-4 py-2 text-sm font-medium mb-4">
            <Zap className="h-3 w-3 mr-2" />
            Micro SAAS Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Technology Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Choose from our comprehensive suite of micro SAAS services designed to accelerate your digital transformation journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-zion-cyan text-zion-blue-dark border-zion-cyan'
                  : 'bg-transparent text-zion-slate-light border-zion-slate-light/30 hover:border-zion-cyan/50 hover:text-zion-cyan'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
              <span className="bg-zion-slate-light/20 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card 
              key={service.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                service.popular ? 'ring-2 ring-zion-cyan' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-zion-cyan text-zion-blue-dark">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              {/* Service Badge */}
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light">
                  {service.badge}
                </Badge>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                  </div>
                </div>
                <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features List */}
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <Check className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-zion-slate-light/70">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group">
                  <Link to={service.link}>
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Our expert team can build tailored solutions that perfectly fit your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white">
                <Link to="/contact">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Request Custom Quote
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark">
                <Link to="/enterprise">
                  <Building className="h-5 w-5 mr-2" />
                  Enterprise Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
=======
  BarChart3, 
  Smartphone, 
  TrendingUp, 
  Code, 
  Server,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

const categoryIcons = {
  "AI & Machine Learning": <Brain className="h-8 w-8 text-zion-cyan" />,
  "Cloud & DevOps": <Cloud className="h-8 w-8 text-zion-cyan" />,
  "Cybersecurity": <Shield className="h-8 w-8 text-zion-cyan" />,
  "Data & Analytics": <BarChart3 className="h-8 w-8 text-zion-cyan" />,
  "Web & Mobile Development": <Smartphone className="h-8 w-8 text-zion-cyan" />,
  "Digital Transformation": <TrendingUp className="h-8 w-8 text-zion-cyan" />,
  "Blockchain & Web3": <Code className="h-8 w-8 text-zion-cyan" />,
  "IoT & Edge Computing": <Server className="h-8 w-8 text-zion-cyan" />
};

// Get featured services from each category
const getFeaturedServices = () => {
  const categories = [
    "AI & Machine Learning",
    "Cloud & DevOps", 
    "Cybersecurity",
    "Data & Analytics"
  ];
  
  return categories.map(category => {
    const services = COMPREHENSIVE_SERVICES.filter(s => s.category === category);
    return services[0]; // Get first service from each category
  }).filter(Boolean);
};

export function ServicesShowcase() {
  const featuredServices = getFeaturedServices();

  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, cutting-edge IT solutions, and innovative AI services designed to transform your business.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-zion-cyan">
              <Phone className="h-5 w-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Mail className="h-5 w-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <MapPin className="h-5 w-5" />
              <span>Middletown DE 19709</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comprehensive-services">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Service Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(categoryIcons).map(([category, icon]) => (
            <div key={category} className="text-center">
              <div className="bg-zion-blue rounded-lg p-6 border border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
                <p className="text-zion-slate-light text-sm mb-4">
                  {COMPREHENSIVE_SERVICES.filter(s => s.category === category).length} services available
                </p>
                <Link to="/comprehensive-services">
                  <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Zion Tech Group */}
        <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <p className="text-zion-slate-light">Your trusted partner for innovative technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI-First Approach</h4>
              <p className="text-zion-slate-light text-sm">Cutting-edge AI, machine learning, and emerging technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light text-sm">Bank-level security and compliance for your business</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
              <p className="text-zion-slate-light text-sm">Track record of successful digital transformations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-zion-slate-light mb-6">
            Contact our team today to discuss your project requirements and get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="mr-2 h-5 w-5" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-6 text-zion-slate-light">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
=======

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our expert team can create tailored technology solutions that perfectly fit your business needs. 
              Get in touch for a free consultation and discover how we can help you succeed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-zion-purple hover:underline">ziontechgroup.com</a></p>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 h-full">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs">
            {service.category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-xs text-zion-slate-light">{service.rating}</span>
          </div>
        </div>
        
        <CardTitle className="text-white text-base leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
          {service.description.substring(0, 100)}...
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-left">
            <div className="text-xl font-bold text-zion-cyan">${service.price.toLocaleString()}</div>
            <div className="text-xs text-zion-slate-light">
              {service.pricingModel === 'monthly' ? '/month' : 'one-time'}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-zion-slate-light">
              Market: {service.marketPrice}
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {service.tags.slice(0, 2).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Button */}
        <Button 
          size="sm" 
          className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white"
          onClick={() => window.open(service.contactLink, '_blank')}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Get Quote
        </Button>

        {/* AI Score */}
        <div className="mt-3 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-zion-purple" />
            <span className="text-xs text-zion-slate-light">AI Score: {service.aiScore}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-0682
}