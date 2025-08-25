import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Globe, 
  TrendingUp, 
  Smartphone,
  Lock,
  Users,
  Building,
  ArrowRight
} from 'lucide-react';

const featuredServices = [
  {
    id: "ai-automation",
    title: "AI Process Automation",
    description: "Streamline business processes with intelligent automation that reduces manual work by 80%",
    icon: <Brain className="w-8 h-8" />,
    category: "AI & Automation",
    price: "From $2,999",
    color: "from-purple-500 to-indigo-600",
    link: "/enhanced-services#ai-automation"
  },
  {
    id: "zero-trust",
    title: "Zero Trust Security",
    description: "Comprehensive security framework that reduces breaches by 95% with continuous monitoring",
    icon: <Shield className="w-8 h-8" />,
    category: "Cybersecurity",
    price: "From $8,999",
    color: "from-red-500 to-pink-600",
    link: "/enhanced-services#zero-trust"
  },
  {
    id: "multi-cloud",
    title: "Multi-Cloud Management",
    description: "Unified platform for AWS, Azure, and GCP with 30% cost reduction and optimization",
    icon: <Cloud className="w-8 h-8" />,
    category: "Cloud & DevOps",
    price: "From $5,999",
    color: "from-blue-500 to-cyan-600",
    link: "/enhanced-services#multi-cloud"
  },
  {
    id: "real-time-data",
    title: "Real-Time Data Pipeline",
    description: "Process millions of events per second with sub-second latency for instant insights",
    icon: <Database className="w-8 h-8" />,
    category: "Data & Analytics",
    price: "From $6,999",
    color: "from-green-500 to-emerald-600",
    link: "/enhanced-services#real-time-data"
  },
  {
    id: "iot-platform",
    title: "Enterprise IoT Platform",
    description: "Manage millions of connected devices with predictive maintenance and edge computing",
    icon: <Smartphone className="w-8 h-8" />,
    category: "IoT & Edge",
    price: "From $7,999",
    color: "from-orange-500 to-red-600",
    link: "/enhanced-services#iot-platform"
  },
  {
    id: "blockchain",
    title: "Enterprise Blockchain",
    description: "Private blockchain networks for supply chain, identity, and smart contracts",
    icon: <Lock className="w-8 h-8" />,
    category: "Blockchain & Web3",
    price: "From $12,999",
    color: "from-indigo-500 to-purple-600",
    link: "/enhanced-services#blockchain"
  }
];

const serviceCategories = [
  {
    name: "AI & Machine Learning",
    description: "Intelligent automation, predictive analytics, and content optimization",
    icon: <Brain className="w-6 h-6" />,
    count: "8 Services",
    link: "/enhanced-services"
  },
  {
    name: "Cybersecurity & Compliance",
    description: "Zero trust security, threat detection, and regulatory compliance",
    icon: <Shield className="w-6 h-6" />,
    count: "6 Services",
    link: "/enhanced-services"
  },
  {
    name: "Cloud & DevOps",
    description: "Multi-cloud orchestration, CI/CD automation, and containerization",
    icon: <Cloud className="w-6 h-6" />,
    count: "5 Services",
    link: "/enhanced-services"
  },
  {
    name: "Data & Analytics",
    description: "Real-time processing, governance, and business intelligence",
    icon: <Database className="w-6 h-6" />,
    count: "4 Services",
    link: "/enhanced-services"
  },
  {
    name: "IoT & Edge Computing",
    description: "Device management, edge AI, and predictive maintenance",
    icon: <Smartphone className="w-6 h-6" />,
    count: "3 Services",
    link: "/enhanced-services"
  },
  {
    name: "Digital Transformation",
    description: "Strategy consulting, legacy modernization, and change management",
    icon: <Building className="w-6 h-6" />,
    count: "4 Services",
    link: "/enhanced-services"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-zion-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zion-blue mb-4">
            Enterprise IT & AI Services
          </h2>
          <p className="text-xl text-zion-slate max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge technology solutions. Our comprehensive suite of services 
            covers every aspect of modern enterprise IT needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/enhanced-services">
              <Button size="lg" className="bg-zion-blue hover:bg-zion-blue-dark">
                View All Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-zion-blue">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-zion-purple">{service.price}</span>
                  <Link to={service.link}>
                    <Button variant="ghost" size="sm" className="text-zion-cyan hover:text-zion-cyan-dark">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
=======
import { SERVICE_CATEGORIES } from '@/data/expandedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Zap, Shield, Database, Code, Smartphone, Link as LinkIcon, Settings, BarChart3 } from 'lucide-react';

const getCategoryIcon = (icon: string) => {
  return <span className="text-4xl">{icon}</span>;
};

const getCategoryFeatures = (categoryName: string) => {
  const features = {
    "AI & Machine Learning": ["Custom AI Models", "NLP Solutions", "Computer Vision", "Predictive Analytics"],
    "Cloud & DevOps": ["Multi-Cloud Migration", "Kubernetes Management", "CI/CD Automation", "Infrastructure as Code"],
    "Cybersecurity": ["Penetration Testing", "Zero Trust Security", "SOC Setup", "Security Audits"],
    "Data & Analytics": ["Real-time Streaming", "BI Dashboards", "Data Warehouse Optimization", "Big Data Processing"],
    "Web & Mobile Development": ["Progressive Web Apps", "Cross-platform Apps", "E-commerce Platforms", "Custom Solutions"],
    "Blockchain & Web3": ["Smart Contracts", "NFT Marketplaces", "DeFi Protocols", "DApp Development"],
    "IoT & Hardware Integration": ["IoT Platforms", "Hardware APIs", "Device Management", "Sensor Integration"],
    "Business Process Automation": ["Workflow Automation", "Document Management", "Process Optimization", "Integration Services"]
  };
  
  return features[categoryName as keyof typeof features] || [];
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            From cutting-edge AI solutions to enterprise-grade infrastructure, we deliver professional 
            services that drive business growth and digital transformation.
          </p>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICE_CATEGORIES.map((category) => (
            <Card key={category.name} className="bg-white/10 border-zion-blue-light text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mb-4">{getCategoryIcon(category.icon)}</div>
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan mb-3">
                  {category.count} Services
                </Badge>
                <div className="text-sm text-zion-slate-light">
                  Starting from $3,200
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

<<<<<<< HEAD
        {/* Service Categories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-zion-blue text-center mb-12">
            Service Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <Link key={category.name} to={category.link}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-zion-blue/10 rounded-lg group-hover:bg-zion-blue/20 transition-colors">
                        <div className="text-zion-blue">
                          {category.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-zion-blue group-hover:text-zion-blue-dark transition-colors">
                          {category.name}
                        </h4>
                        <p className="text-sm text-zion-slate-light">{category.count}</p>
                      </div>
                    </div>
                    <p className="text-zion-slate text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
=======
        {/* Featured Services Preview */}
        <div className="bg-white/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Featured Services</h3>
            <p className="text-zion-slate-light">
              Explore our most popular and innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* AI Chatbot Service */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">🤖</span>
                </div>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark">AI Chatbot Development</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Intelligent chatbots with NLP capabilities for customer service automation
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-zion-purple">$3,500</div>
                <Badge className="bg-green-100 text-green-800">Popular</Badge>
              </div>
            </div>

            {/* Cybersecurity Service */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark">Penetration Testing</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="text-sm text-gray-600">4.9 (267 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive security assessment and vulnerability testing
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-zion-purple">$6,800</div>
                <Badge className="bg-red-100 text-red-800">High Demand</Badge>
              </div>
            </div>

            {/* Cloud Migration Service */}
            <div className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-zion-blue-dark">Multi-Cloud Migration</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="text-sm text-gray-600">4.8 (203 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Strategic migration across multiple cloud providers for optimal performance
              </p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-zion-purple">$8,500</div>
                <Badge className="bg-blue-100 text-blue-800">Enterprise</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Service Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
            <p className="text-zion-slate-light">Quick turnaround times without compromising quality</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Enterprise Security</h4>
            <p className="text-zion-slate-light">Bank-level security and compliance standards</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
            <p className="text-zion-slate-light">Track record of successful implementations</p>
          </div>
          
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold mb-2">24/7 Support</h4>
            <p className="text-zion-slate-light">Round-the-clock technical support and maintenance</p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
          </div>
        </div>

        {/* CTA Section */}
<<<<<<< HEAD
        <div className="bg-gradient-to-r from-zion-blue to-zion-purple rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement cutting-edge solutions that drive real business results. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/enhanced-services">
              <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-sm">
              <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
=======
        <div className="text-center">
          <div className="bg-white/10 rounded-2xl p-8 border border-zion-blue-light">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Join hundreds of businesses that trust Zion Tech Group for their digital transformation needs. 
              Get started with a free consultation and discover how our services can drive your success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/expanded-services">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Explore All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">📞</span>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">✉️</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">🌐</span>
              <span>ziontechgroup.com</span>
            </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-1baf
          </div>
        </div>
      </div>
    </section>
  );
}