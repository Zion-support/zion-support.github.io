import React from 'react';
<<<<<<< HEAD:src/components/ServicesShowcase.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MICRO_SAAS_SERVICES, 
  MICRO_SAAS_CATEGORIES,
  CONTACT_INFO 
} from "@/data/microSaasServices";
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Code, 
  DollarSign, 
  Heart, 
  ShoppingCart, 
  GraduationCap,
  Star,
  TrendingUp,
=======
import { Link } from 'react-router-dom';
import {
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Smartphone,
  Globe,
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ServicesShowcase.tsx
  Zap,
  CheckCircle,
  ArrowRight,
<<<<<<< HEAD:src/components/ServicesShowcase.tsx
  Phone,
  Mail,
  MapPin,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons = {
  'AI Business Solutions': Brain,
  'IT Infrastructure': Cloud,
  'Data Analytics': BarChart3,
  'AI Development': Code,
  'FinTech': DollarSign,
  'HealthTech': Heart,
  'E-commerce': ShoppingCart,
  'EdTech': GraduationCap
};

const categoryColors = {
  'AI Business Solutions': 'from-purple-500 to-indigo-600',
  'IT Infrastructure': 'from-blue-500 to-cyan-600',
  'Data Analytics': 'from-green-500 to-emerald-600',
  'AI Development': 'from-orange-500 to-red-600',
  'FinTech': 'from-yellow-500 to-orange-600',
  'HealthTech': 'from-pink-500 to-rose-600',
  'E-commerce': 'from-indigo-500 to-purple-600',
  'EdTech': 'from-teal-500 to-green-600'
};

const features = [
  "AI-Powered Automation",
  "Real-time Analytics",
  "Multi-cloud Support",
  "API-First Architecture",
  "Scalable Infrastructure",
  "Custom Integrations",
  "White-label Solutions",
  "Comprehensive Documentation",
  "24/7 Technical Support",
  "99.9% Uptime Guarantee",
  "SOC 2 Type II Compliant",
  "30-Day Money Back Guarantee"
];

const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Immediate Deployment",
    description: "All services are ready for immediate deployment with no setup delays"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Proven ROI",
    description: "Average 300% ROI within 6 months of implementation"
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Quality Guaranteed",
    description: "30-day money-back guarantee with free migration support"
  }
];

export function ServicesShowcase() {
  const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 6);

=======
  CheckCircle
} from 'lucide-react';
export function ServicesShowcase() {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions, predictive analytics, and intelligent automation systems.",
      features: ["Custom AI Models", "Predictive Analytics", "Process Automation", "Natural Language Processing"],
      color: "from-zion-cyan to-zion-blue",
      link: "/services/ai-ml"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions protecting your digital infrastructure and data.",
      features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Compliance Management"],
      color: "from-zion-purple to-zion-red",
      link: "/services/cybersecurity"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Design", "DevOps Automation", "Cost Optimization"],
      color: "from-zion-blue to-zion-cyan",
      link: "/services/cloud"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics platforms.",
      features: ["Business Intelligence", "Data Warehousing", "Real-time Analytics", "Performance Dashboards"],
      color: "from-zion-green to-zion-cyan",
      link: "/services/analytics"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Infrastructure",
      description: "Robust networking solutions for seamless connectivity and performance.",
      features: ["Network Design", "Security Implementation", "Performance Optimization", "24/7 Monitoring"],
      color: "from-zion-orange to-zion-yellow",
      link: "/services/networking"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Development", "Cross-platform Apps", "UI/UX Design", "App Store Optimization"],
      color: "from-zion-purple to-zion-pink",
      link: "/services/mobile"
    }
  ];
  const enterpriseFeatures = [
    "24/7 Dedicated Support",
    "Custom SLA Agreements",
    "Enterprise Security",
    "Scalable Solutions",
    "Compliance Ready",
    "Performance Guarantees"
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ServicesShowcase.tsx
  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Micro SAAS Solutions
          </h2>
<<<<<<< HEAD:src/components/ServicesShowcase.tsx
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with our enterprise-grade micro SAAS services. 
            From AI automation to infrastructure management, we provide solutions that scale with your growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                <Brain className="h-5 w-5 mr-2" />
                Explore All Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <Phone className="h-5 w-5 mr-2" />
                Get Consultation
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {MICRO_SAAS_CATEGORIES.map((category) => {
            const IconComponent = categoryIcons[category.label as keyof typeof categoryIcons];
            const colorClass = categoryColors[category.label as keyof typeof categoryColors];
            return (
              <Card key={category.value} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center mb-4`}>
                    {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                  </div>
                  <CardTitle className="text-lg">{category.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light text-sm">
                    {MICRO_SAAS_SERVICES.filter(s => s.category === category.label).length} services available
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Featured Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-zion-purple">
                    {service.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description.substring(0, 100)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm">{service.rating}</span>
                      <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                    </div>
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                      AI Score: {service.aiScore}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-cyan">
                      ${service.price}
                      <span className="text-sm text-zion-slate-light">/month</span>
                    </div>
                    <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Enterprise Features, Startup Pricing
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-zion-purple" />
                </div>
                <p className="font-medium text-white text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zion-blue mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get in touch with our team to discuss your needs and discover how our micro SAAS solutions can drive your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-zion-blue mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{CONTACT_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a href={CONTACT_INFO.website} className="text-zion-cyan hover:underline">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-zion-blue mb-6">Quick Actions</h4>
              <div className="space-y-4">
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/micro-saas-services">
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                    View All Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20">
                <h5 className="font-medium text-zion-blue mb-2">What's Included:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 Technical Support</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• SOC 2 Type II Compliant</li>
                  <li>• 30-Day Money Back Guarantee</li>
                  <li>• Free Migration Support</li>
                  <li>• Custom Integration Services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                Explore All Micro SAAS Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
=======
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business transformation
            and drive innovation across all digital touchpoints.
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/10"
            >
              <div className="p-6">
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                {/* Service Content */}
                <h3 className="text-2xl font-bold text-white mb-3 font-tech">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300 group-hover:gap-3"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Enterprise Section */}
        <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-futuristic">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Solutions</span>
              </h3>
              <p className="text-lg text-zion-slate-light mb-6 leading-relaxed">
                Tailored technology solutions for enterprise organizations requiring
                scalability, security, and performance at scale.
              </p>
              {/* Enterprise Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center text-zion-slate-light">
                    <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/enterprise"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:shadow-neon-lg hover:scale-105 transition-all duration-300 transform"
              >
                Enterprise Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block p-8 bg-white/5 rounded-2xl border border-white/10">
                <Zap className="w-24 h-24 text-zion-cyan mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Ready to Scale?</h4>
                <p className="text-zion-slate-light">Let's discuss your enterprise needs</p>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that trust Zion Tech Group to deliver
            innovative technology solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-neon-lg hover:scale-105 transition-all duration-300 transform"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Request Quote
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ServicesShowcase.tsx
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}