import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  TrendingUp, 
  Code, 
  Zap, 
  Heart, 
  DollarSign, 
  Link as LinkIcon,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

// Sample featured services data
const featuredServices = [
  {
    id: "ai-automation-suite",
    title: "AI Process Automation Suite",
    description: "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency.",
    category: "AI Automation",
    price: 2999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Optimization"],
    rating: 4.9,
    reviewCount: 156,
    availability: "2-3 Weeks",
    aiScore: 96
  },
  {
    id: "multi-cloud-orchestration",
    title: "Multi-Cloud Orchestration Platform",
    description: "Unified management platform for AWS, Azure, and Google Cloud with automated cost optimization, security compliance monitoring, and disaster recovery.",
    category: "Cloud Management",
    price: 4499,
    currency: "$",
    tags: ["Multi-Cloud", "Cost Optimization", "Security"],
    rating: 4.9,
    reviewCount: 78,
    availability: "3-4 Weeks",
    aiScore: 94
  },
  {
    id: "cybersecurity-suite",
    title: "Advanced Cybersecurity Suite",
    description: "Comprehensive security solution including threat detection, incident response, and compliance management for enterprise environments.",
    category: "Cybersecurity",
    price: 5999,
    currency: "$",
    tags: ["Threat Detection", "Incident Response", "Compliance"],
    rating: 4.8,
    reviewCount: 234,
    availability: "1-2 Weeks",
    aiScore: 95
  },
  {
    id: "data-analytics-platform",
    title: "AI-Powered Data Analytics Platform",
    description: "Intelligent data analysis platform that provides real-time insights, predictive analytics, and automated reporting capabilities.",
    category: "Data Engineering",
    price: 3499,
    currency: "$",
    tags: ["Data Analytics", "Predictive Insights", "Automation"],
    rating: 4.7,
    reviewCount: 189,
    availability: "2-3 Weeks",
    aiScore: 93
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence Dashboard",
    description: "Comprehensive BI solution with interactive dashboards, KPI tracking, and automated insights for data-driven decision making.",
    category: "Business Intelligence",
    price: 2499,
    currency: "$",
    tags: ["BI Dashboard", "KPI Tracking", "Insights"],
    rating: 4.8,
    reviewCount: 145,
    availability: "1-2 Weeks",
    aiScore: 91
  },
  {
    id: "developer-tools",
    title: "AI-Enhanced Developer Tools",
    description: "Advanced development toolkit with AI-powered code review, automated testing, and intelligent debugging capabilities.",
    category: "Developer Tools",
    price: 1999,
    currency: "$",
    tags: ["Code Review", "Testing", "Debugging"],
    rating: 4.9,
    reviewCount: 267,
    availability: "Immediate",
    aiScore: 97
  }
];

const serviceIcons = {
  'AI Automation': Brain,
  'Cloud Management': Cloud,
  'Cybersecurity': Shield,
  'Data Engineering': Database,
  'Business Intelligence': TrendingUp,
  'Developer Tools': Code,
  'Digital Transformation': Zap,
  'Healthcare Technology': Heart,
  'Financial Technology': DollarSign,
  'Blockchain': LinkIcon,
};

export function EnhancedServicesShowcase() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive AI & IT Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our extensive portfolio of micro SAAS services, AI solutions, and enterprise-grade IT services designed to transform your business operations
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => {
            const IconComponent = serviceIcons[service.category as keyof typeof serviceIcons] || Code;
            return (
              <Card key={service.id} className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="default" className="bg-zion-purple">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description.substring(0, 120)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-white font-medium">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price?.toLocaleString()}
                      </div>
                      <div className="text-sm text-zion-slate-light">
                        {service.availability}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-purple">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <TrendingUp className="w-4 h-4" />
                      AI Score: {service.aiScore}
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                      asChild
                    >
                      <Link to="/services">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Service Categories Overview */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">
            Explore Our Service Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(serviceIcons).slice(0, 8).map(([category, Icon]) => (
              <div key={category} className="group cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <h4 className="text-white font-medium text-sm group-hover:text-zion-cyan transition-colors">
                  {category}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue-dark/30 to-zion-purple-dark/30 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Discover how our AI and IT solutions can drive innovation, 
              increase efficiency, and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan/90 hover:to-zion-blue/90 text-white font-semibold"
                asChild
              >
                <Link to="/services">
                  <Zap className="w-5 h-5 mr-2" />
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-semibold"
                asChild
              >
                <Link to="/contact">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}