import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Clock, 
  Users, 
  Zap, 
  TrendingUp, 
  Shield, 
  Cloud, 
  Brain,
  Code,
  Settings,
  BarChart3,
  ArrowRight
} from "lucide-react";

interface EnhancedServicesShowcaseProps {
  showTitle?: boolean;
}

export function EnhancedServicesShowcase({ showTitle = true }: EnhancedServicesShowcaseProps) {
  const services = [
    {
      id: 1,
      title: "AI Development",
      description: "Custom AI solutions and machine learning models",
      icon: Brain,
      rating: 5.0,
      price: "From $5,000",
      category: "AI & ML"
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and DevOps services",
      icon: Cloud,
      rating: 4.9,
      price: "From $3,000",
      category: "Cloud"
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and audits",
      icon: Shield,
      rating: 5.0,
      price: "From $2,500",
      category: "Security"
    },
    {
      id: 4,
      title: "Data Analytics",
      description: "Advanced analytics and business intelligence",
      icon: BarChart3,
      rating: 4.8,
      price: "From $4,000",
      category: "Data"
    },
    {
      id: 5,
      title: "Web Development",
      description: "Modern web applications and e-commerce solutions",
      icon: Code,
      rating: 4.9,
      price: "From $2,000",
      category: "Development"
    },
    {
      id: 6,
      title: "IT Consulting",
      description: "Strategic technology consulting and implementation",
      icon: Settings,
      rating: 5.0,
      price: "From $1,500",
      category: "Consulting"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Tech Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              From AI-powered solutions to enterprise IT services, we offer comprehensive technology solutions 
              that drive innovation and business growth.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="bg-zion-slate-dark/50 backdrop-blur-sm border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-white font-medium">{service.rating}</span>
                      </div>
                      <span className="text-lg font-bold text-zion-cyan">{service.price}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white px-8 py-3">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}