import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { ArrowRight, Star } from "lucide-react";
import { FuturisticCard } from '@/components/ui/futuristic-card';
import { NeonText } from '@/components/ui/neon-text';
export function ServicesShowcase() {
    const featuredServices = COMPREHENSIVE_SERVICES.slice(0, 6);
    
    const emergingServices = [
        {
            title: "AI Workflow Orchestrator",
            description: "Intelligent process automation with AI-driven optimization",
            category: "AI & Automation",
            price: "$99/month",
            icon: "🤖",
            link: "/services/ai-workflow-orchestrator"
        },
        {
            title: "AI Data Governance Platform",
            description: "Enterprise data protection and compliance automation",
            category: "Data & Security",
            price: "$149/month",
            icon: "🛡️",
            link: "/services/ai-data-governance-platform"
        },
        {
            title: "AI Customer Experience Analytics",
            description: "Intelligent analytics and insights for data-driven decisions",
            category: "Analytics",
            price: "$99/month",
            icon: "📊",
            link: "/services/ai-customer-experience-analytics"
        },
        {
            title: "Cloud DevOps Platform",
            description: "Streamlined cloud infrastructure and deployment automation",
            category: "Cloud & DevOps",
            price: "$299/month",
            icon: "☁️",
            link: "/services/cloud-devops"
        }
    ];
    return (<section className="py-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/5 to-transparent"/>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <NeonText color="#00ffff" glowIntensity="high">
              Micro SAAS Services
            </NeonText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of micro SAAS solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredServices.map((service, index) => (<FuturisticCard key={index} glowColor={service.glowColor} intensity="medium" className="h-full group hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-black/20 backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Pricing */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-purple">
                    ${service.price?.toLocaleString()}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (<Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>))}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Get Started
                  </Button>
                  <Link to={`/micro-saas-services#${service.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1"/>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </FuturisticCard>
          ))}
        </div>

        {/* Emerging Technologies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            <NeonText color="#ff00ff" glowIntensity="medium">
              Emerging Technologies
            </NeonText>
          </h3>
          <p className="text-muted-foreground">
            Stay ahead of the curve with cutting-edge technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergingServices.map((service, index) => (<Card key={index} className="group hover:shadow-lg hover:border-primary/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-lg bg-black/20">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-lg text-center group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-3">
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
                <div className="flex items-center justify-center">
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <div className="text-lg font-bold text-primary">
                  {service.price}
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link to={service.link}>
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 rounded-2xl p-8 border border-zion-purple/20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our micro SAAS services to accelerate growth, 
              improve efficiency, and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/services">
                  Explore All Services
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Link to="/request-quote">
                  Request Custom Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
