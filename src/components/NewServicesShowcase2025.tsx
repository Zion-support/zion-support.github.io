import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Star,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Cpu,
  Microscope,
  Truck,
  Search,
  BarChart3,
  Network,
  Globe,
  Target,
  DollarSign,
  Rocket
} from "lucide-react";
import { Link } from 'react-router-dom';

export default function NewServicesShowcase2025() {
  const newServices = [
    {
      id: 'ai-quantum-hybrid',
      title: 'AI Quantum Hybrid Platform',
      description: 'Experience 1000x faster processing with our revolutionary quantum computing platform that combines AI and quantum algorithms.',
      icon: Cpu,
      color: 'zion-purple',
      features: ['1000x Faster Processing', 'Quantum AI Processing', 'Unbreakable Security', 'Exponential Scalability'],
      route: '/services/ai-quantum-hybrid-platform',
      stats: { value: '1000x', label: 'Faster Processing' },
      badge: 'Revolutionary'
    },
    {
      id: 'ai-research-assistant',
      title: 'AI Autonomous Research Assistant',
      description: 'Automate literature reviews, data analysis, and hypothesis generation with 95% accuracy and 10x speed.',
      icon: Microscope,
      color: 'zion-cyan',
      features: ['10x Faster Research', '95% Accuracy Rate', 'Automated Reports', 'Knowledge Integration'],
      route: '/services/ai-autonomous-research-assistant',
      stats: { value: '10x', label: 'Faster Research' },
      badge: 'Breakthrough'
    },
    {
      id: 'ai-supply-chain',
      title: 'AI Supply Chain Optimization',
      description: 'Reduce costs by 40% and improve delivery times by 60% with intelligent supply chain automation.',
      icon: Truck,
      color: 'green-500',
      features: ['40% Cost Reduction', '60% Faster Delivery', '99.9% Accuracy', 'Global Optimization'],
      route: '/services/ai-supply-chain-optimization',
      stats: { value: '40%', label: 'Cost Reduction' },
      badge: 'Game-Changing'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-zion-purple/20 border border-zion-purple/30 text-zion-purple mb-6">
            <Zap className="h-4 w-4 mr-2" />
            New in 2025
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary New Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our latest AI-powered solutions that are transforming industries and creating unprecedented business value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="bg-slate-800 border-slate-700 hover:border-zion-purple/50 transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-${service.color}/20 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 text-${service.color}`} />
                    </div>
                    <Badge className={`bg-${service.color}/20 text-${service.color} border-${service.color}/30`}>
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-zion-cyan mb-1">{service.stats.value}</div>
                    <div className="text-gray-400 text-sm">{service.stats.label}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.route} className="block">
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features Section */}
        <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-2xl p-8 border border-zion-purple/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our New Services?</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our revolutionary AI services are designed to deliver unprecedented results and transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-3 bg-zion-purple/20 rounded-lg w-fit mx-auto mb-3">
                <Rocket className="h-6 w-6 text-zion-purple" />
              </div>
              <h4 className="text-white font-semibold mb-2">Cutting-Edge Technology</h4>
              <p className="text-gray-300 text-sm">Latest AI and quantum computing innovations</p>
            </div>
            
            <div className="text-center">
              <div className="p-3 bg-zion-cyan/20 rounded-lg w-fit mx-auto mb-3">
                <Target className="h-6 w-6 text-zion-cyan" />
              </div>
              <h4 className="text-white font-semibold mb-2">Proven Results</h4>
              <p className="text-gray-300 text-sm">Measurable improvements in efficiency and cost</p>
            </div>
            
            <div className="text-center">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mx-auto mb-3">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
              <p className="text-gray-300 text-sm">Bank-grade security and compliance</p>
            </div>
            
            <div className="text-center">
              <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mx-auto mb-3">
                <Users className="h-6 w-6 text-yellow-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">Expert Support</h4>
              <p className="text-gray-300 text-sm">24/7 dedicated support and consultation</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-4 text-lg">
                Get Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white px-8 py-4 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}