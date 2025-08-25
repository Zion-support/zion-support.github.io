import React from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Building, 
  Smartphone, 
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  ArrowRight,
  Star
} from "lucide-react";
import { EXPANDED_SERVICES } from "@/data/expandedServices";

// Featured services to showcase on home page
const FEATURED_SERVICES = EXPANDED_SERVICES.filter(service => service.featured).slice(0, 6);

const getCategoryIcon = (category: string) => {
  const categoryIcons: { [key: string]: React.ReactNode } = {
    'AI Automation': <Zap className="h-5 w-5" />,
    'Customer Intelligence': <Users className="h-5 w-5" />,
    'Cybersecurity': <Shield className="h-5 w-5" />,
    'Cloud Management': <Globe className="h-5 w-5" />,
    'Data Analytics': <TrendingUp className="h-5 w-5" />,
    'Digital Transformation': <Building className="h-5 w-5" />,
    'Mobile Development': <Smartphone className="h-5 w-5" />,
    'E-commerce': <ShoppingCart className="h-5 w-5" />,
    'Healthcare Technology': <Heart className="h-5 w-5" />,
    'Education Technology': <GraduationCap className="h-5 w-5" />,
    'Supply Chain': <Truck className="h-5 w-5" />
  };
  return categoryIcons[category] || <Zap className="h-5 w-5" />;
};

const getPriceRange = (price: number) => {
  if (price <= 4999) return 'starter';
  if (price <= 9999) return 'professional';
  if (price <= 25000) return 'enterprise';
  return 'custom';
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT & AI Solutions
          </h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            From AI automation to cybersecurity, we provide cutting-edge technology solutions 
            that drive business growth and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-cyan">25+</div>
              <div className="text-sm text-zion-cyan-light">Services Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-purple">Global</div>
              <div className="text-sm text-zion-cyan-light">Coverage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-zion-cyan">24/7</div>
              <div className="text-sm text-zion-cyan-light">Support</div>
            </div>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURED_SERVICES.map((service) => (
            <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {getPriceRange(service.price || 0)}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg text-white line-clamp-2">{service.title}</CardTitle>
                <CardDescription className="text-zion-cyan-light line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/10 text-zion-cyan-light border-white/20 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-zion-cyan-light">
                      <Star className="h-3 w-3" />
                      <span>{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                    <span className="font-semibold text-zion-cyan">
                      ${service.price?.toLocaleString()}
                    </span>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white"
                    onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`, '_blank')}
                  >
                    Get Quote
                  </Button>
=======
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Monitor, 
  Eye, 
  DollarSign,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Users,
  X,
  BarChart3,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceHighlights = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description: "Cutting-edge AI solutions that automate processes, provide intelligent insights, and drive business transformation.",
    benefits: ["80% reduction in manual work", "95% prediction accuracy", "Real-time decision making"],
    color: "from-purple-500 to-indigo-600"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity Excellence",
    description: "Comprehensive security solutions including zero trust architecture, threat intelligence, and compliance automation.",
    benefits: ["90% reduction in security incidents", "99.9% threat detection accuracy", "Automated compliance"],
    color: "from-red-500 to-pink-600"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    description: "Multi-cloud orchestration, DevOps automation, and serverless architecture for scalable, efficient operations.",
    benefits: ["80% faster deployment", "Multi-cloud optimization", "Auto-scaling infrastructure"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics",
    description: "Real-time analytics, data governance, and predictive maintenance using advanced ML algorithms.",
    benefits: ["Sub-second latency", "60% downtime reduction", "Predictive insights"],
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Blockchain & Web3",
    description: "Enterprise blockchain solutions and DeFi platforms with audited smart contracts and security best practices.",
    benefits: ["Supply chain transparency", "Decentralized finance", "Audited security"],
    color: "from-orange-500 to-yellow-600"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Edge & Quantum Computing",
    description: "Edge computing for ultra-low latency and quantum algorithms for complex optimization problems.",
    benefits: ["Ultra-low latency", "Quantum advantage", "5G integration"],
    color: "from-indigo-500 to-purple-600"
  }
];

const competitiveAdvantages = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Industry Expertise",
    description: "15+ years of experience in cutting-edge technologies with proven track record across industries."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Implementation",
    description: "Average delivery time of 3-6 weeks with agile methodology and continuous deployment."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Reach",
    description: "Services available worldwide with local support teams and 24/7 customer service."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Support",
    description: "Personal account managers, technical support, and ongoing maintenance for all solutions."
  },
  {
    icon: <X className="w-6 h-6" />,
    title: "Custom Solutions",
    description: "Tailored implementations designed specifically for your business needs and industry requirements."
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "ROI Guarantee",
    description: "Measurable business outcomes with performance metrics and continuous optimization."
  }
];

const pricingComparison = [
  {
    feature: "AI Process Automation",
    market: "$8,000 - $15,000",
    ziontech: "$2,999",
    savings: "63% savings"
  },
  {
    feature: "Zero Trust Security",
    market: "$15,000 - $25,000",
    ziontech: "$8,999",
    savings: "44% savings"
  },
  {
    feature: "Multi-Cloud Orchestration",
    market: "$10,000 - $18,000",
    ziontech: "$5,499",
    savings: "45% savings"
  },
  {
    feature: "Real-Time Analytics",
    market: "$12,000 - $20,000",
    ziontech: "$7,999",
    savings: "40% savings"
  },
  {
    feature: "Enterprise Blockchain",
    market: "$25,000 - $40,000",
    ziontech: "$14,999",
    savings: "40% savings"
  }
];

export function ServicesOverview() {
  return (
    <div className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose ZionTech Services?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our comprehensive suite of technology services delivers measurable business outcomes, 
            competitive pricing, and world-class support to help you stay ahead of the competition.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceHighlights.map((service, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-zion-cyan">{benefit}</span>
                    </div>
                  ))}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

<<<<<<< HEAD
        {/* Service Categories Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Service Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: 'AI & ML', icon: <Zap className="h-6 w-6" />, count: 4 },
              { name: 'Cybersecurity', icon: <Shield className="h-6 w-6" />, count: 2 },
              { name: 'Cloud & DevOps', icon: <Globe className="h-6 w-6" />, count: 2 },
              { name: 'Data Analytics', icon: <TrendingUp className="h-6 w-6" />, count: 3 },
              { name: 'Digital Transformation', icon: <Building className="h-6 w-6" />, count: 2 },
              { name: 'Mobile & Web', icon: <Smartphone className="h-6 w-6" />, count: 2 },
              { name: 'E-commerce', icon: <ShoppingCart className="h-6 w-6" />, count: 1 },
              { name: 'Healthcare', icon: <Heart className="h-6 w-6" />, count: 1 },
              { name: 'FinTech', icon: <TrendingUp className="h-6 w-6" />, count: 1 },
              { name: 'EdTech', icon: <GraduationCap className="h-6 w-6" />, count: 1 }
            ].map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center text-white hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-zion-cyan">{category.icon}</span>
                </div>
                <div className="text-sm font-medium">{category.name}</div>
                <div className="text-xs text-zion-cyan-light">{category.count} services</div>
=======
        {/* Competitive Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Competitive Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                <div className="p-2 bg-zion-purple/20 rounded-lg flex-shrink-0">
                  <div className="text-zion-cyan">
                    {advantage.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{advantage.title}</h4>
                  <p className="text-zion-slate-light text-sm">{advantage.description}</p>
                </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
              </div>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple to-zion-blue rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore Our Full Service Portfolio?
            </h3>
            <p className="text-zion-cyan-light mb-6">
              Discover 25+ innovative solutions designed to transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/expanded-services">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan-light">
                  View All Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Service Consultation', '_blank')}
              >
                Schedule Consultation
=======
        {/* Pricing Comparison */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Competitive Pricing Comparison
          </h3>
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-zion-blue-light border-b border-zion-blue-light">
              <div className="font-semibold text-white">Service Feature</div>
              <div className="font-semibold text-white text-center">Market Average</div>
              <div className="font-semibold text-zion-cyan text-center">ZionTech Price</div>
              <div className="font-semibold text-green-400 text-center">Your Savings</div>
            </div>
            {pricingComparison.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-zion-blue-light last:border-b-0">
                <div className="text-white">{item.feature}</div>
                <div className="text-zion-slate-light text-center">{item.market}</div>
                <div className="text-zion-cyan text-center font-semibold">{item.ziontech}</div>
                <div className="text-green-400 text-center font-semibold">{item.savings}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Badge className="bg-green-500 text-white text-lg px-6 py-2">
              Average 46% Cost Savings
            </Badge>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-12 mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their operations with our innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enhanced-services">
                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                                <ArrowUpRight className="w-5 h-5 mr-2" />
              Explore All Services
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Lock className="w-5 h-5 mr-2" />
                  Get Free Security Audit
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
              </Button>
            </div>
          </div>
          
<<<<<<< HEAD
          {/* Contact Information */}
          <div className="text-zion-cyan-light">
            <p className="mb-2">
              <strong>Contact us:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
            </p>
            <p className="text-sm">
              364 E Main St STE 1008, Middletown DE 19709 | 
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-cyan hover:underline ml-1"
              >
                ziontechgroup.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
=======
          <div className="text-zion-slate-light">
            <p className="mb-2">Contact us today for a free consultation and custom quote</p>
            <div className="flex flex-wrap justify-center gap-6 text-zion-cyan">
              <span>📞 +1 302 464 0950</span>
              <span>✉️ kleber@ziontechgroup.com</span>
              <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-e6db
  );
}