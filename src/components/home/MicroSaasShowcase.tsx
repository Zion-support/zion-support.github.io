import React from 'react';
<<<<<<< HEAD
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  BarChart3,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function MicroSaasShowcase() {
  const featuredServices = MICRO_SAAS_SERVICES.filter(service => service.featured).slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Zap className="h-6 w-6 text-zion-cyan" />;
      case 'IT Services':
        return <Shield className="h-6 w-6 text-zion-purple" />;
      case 'Business Solutions':
        return <Users className="h-6 w-6 text-zion-green" />;
      case 'Specialized Services':
        return <BarChart3 className="h-6 w-6 text-zion-orange" />;
      default:
        return <Zap className="h-6 w-6 text-zion-cyan" />;
    }
  };

  const getPricingDisplay = (service: any) => {
    if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price}/month`;
    } else if (service.pricingModel === 'yearly') {
      return `${service.currency}${service.price}/year`;
    } else if (service.pricingModel === 'one-time') {
      return `${service.currency}${service.price}`;
    } else {
      return `${service.currency}${service.price}`;
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  Zap, 
  Network,
  ArrowRight,
  Star,
  TrendingUp,
  Users
} from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';

export function MicroSaasShowcase() {
  // Get featured services (first 6)
  const featuredServices = MICRO_SAAS_SERVICES.slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-6 w-6" />;
      case 'IT': return <Cloud className="h-6 w-6" />;
      case 'Development': return <Code className="h-6 w-6" />;
      case 'Analytics': return <Database className="h-6 w-6" />;
      case 'Security': return <Shield className="h-6 w-6" />;
      case 'Automation': return <Zap className="h-6 w-6" />;
      case 'Integration': return <Network className="h-6 w-6" />;
      case 'Consulting': return <Users className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI': return 'from-purple-500 to-pink-500';
      case 'IT': return 'from-blue-500 to-cyan-500';
      case 'Development': return 'from-green-500 to-emerald-500';
      case 'Analytics': return 'from-orange-500 to-red-500';
      case 'Security': return 'from-red-500 to-pink-500';
      case 'Automation': return 'from-indigo-500 to-purple-500';
      case 'Integration': return 'from-teal-500 to-blue-500';
      case 'Consulting': return 'from-gray-500 to-slate-500';
      default: return 'from-zion-purple to-zion-cyan';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Micro SAAS Services
          </h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Discover innovative technology solutions that drive business growth. From AI-powered tools to enterprise IT services, 
            we provide cutting-edge solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <Link to="/micro-saas-services">
                View All Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <a href="tel:+13024640950">
                <Phone className="h-5 w-5 mr-2" />
                Get Consultation
              </a>
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="border-zion-blue-light bg-zion-blue hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                      {service.category}
                    </Badge>
                  </div>
                  {service.featured && (
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light text-sm">
=======
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 via-transparent to-zion-cyan/5"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-zion-cyan mr-4 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Micro SAAS Services
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge micro SAAS solutions. 
            From AI-powered automation to enterprise-grade security, we provide the tools you need to succeed.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{MICRO_SAAS_SERVICES.length}</div>
            <div className="text-zion-slate-light">Services Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">8</div>
            <div className="text-zion-slate-light">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">4.8</div>
            <div className="text-zion-slate-light">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">24/7</div>
            <div className="text-zion-slate-light">Support</div>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service) => (
            <Card 
              key={service.id} 
              className="bg-zion-slate-dark/50 border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group futuristic-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                    {getCategoryIcon(service.category)}
                  </div>
                  <div className="flex items-center gap-2">
                    {service.freeTier && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        Free Tier
                      </Badge>
                    )}
                    {service.apiAvailable && (
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        API
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light leading-relaxed">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
<<<<<<< HEAD
                {/* Pricing & Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-bold text-lg">
                    {getPricingDisplay(service)}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="h-3 w-3 text-zion-cyan" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-medium mb-2 text-sm">Benefits:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <TrendingUp className="h-3 w-3 text-zion-cyan" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Level */}
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Support:</span>
                  <Badge variant="outline" className="border-zion-cyan text-zion-cyan text-xs">
                    {service.supportLevel}
                  </Badge>
                </div>

                {/* Free Tier Notice */}
                {service.freeTier && (
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-2 text-center">
                    <div className="text-green-400 font-medium text-xs">Free Tier Available</div>
                  </div>
                )}
              </CardContent>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
                      <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Get Quote
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                      <Link to={`/micro-saas-services#${service.id}`}>
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
=======
                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-zion-purple/20 text-zion-slate-light border-zion-purple/30">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-zion-slate/50 text-zion-slate-light">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Starting at</h4>
                  <div className="text-white">
                    <span className="text-2xl font-bold">{service.pricing.currency}{service.pricing.monthly}</span>
                    <span className="text-zion-slate-light text-sm">/month</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(service.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-zion-slate-light'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm">
                    {service.rating} ({service.reviewCount} reviews)
                  </span>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan-light text-black group-hover:scale-105 transition-transform">
                  <Link to={`/micro-saas-services#${service.id}`}>
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
            </Card>
          ))}
        </div>

<<<<<<< HEAD
        {/* Stats Section */}
        <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">10+</div>
              <div className="text-zion-slate-light">Micro SAAS Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-purple mb-2">40%</div>
              <div className="text-zion-slate-light">Average Cost Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-green mb-2">24/7</div>
              <div className="text-zion-slate-light">Expert Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-orange mb-2">100+</div>
              <div className="text-zion-slate-light">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Our expert team is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <a href="tel:+13024640950">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <a href="mailto:kleber@ziontechgroup.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </Button>
=======
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-purple-dark/50 via-zion-purple/50 to-zion-cyan/50 rounded-2xl p-8 md:p-12 border border-zion-purple/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our micro SAAS services to drive growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-black font-semibold px-8 py-3">
                <Link to="/micro-saas-services">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Explore All Services
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple font-semibold px-8 py-3">
                <Link to="/contact">
                  <Users className="h-5 w-5 mr-2" />
                  Get Consultation
                </Link>
              </Button>
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
          </div>
        </div>
      </div>
    </section>
  );
}