import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Building, Clock, Brain, Server, TrendingUp, CheckCircle } from "lucide-react";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Services & Solutions",
      description: "Comprehensive AI services from strategy to implementation, including custom model development and AI consulting.",
      icon: <Brain className="h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700"/>,
      link: "/ai-services",
      badge: "New",
      details: "Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and strategic AI consulting."
    },
    {
      title: "IT Services & Infrastructure",
      description: "Complete IT solutions including cloud management, cybersecurity, DevOps, and infrastructure modernization.",
      icon: <Server className="h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700"/>,
      link: "/it-services",
      badge: "Popular",
      details: "From cloud migration to cybersecurity, our IT experts help you build robust, scalable, and secure technology infrastructure."
    },
    {
      title: "Digital Marketing Services",
      description: "Full-service digital marketing including SEO, PPC, social media, content marketing, and analytics.",
      icon: <TrendingUp className="h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700"/>,
      link: "/digital-marketing",
      badge: "Featured",
      details: "Drive growth with data-driven marketing strategies, conversion optimization, and comprehensive digital marketing solutions."
    },
    {
      title: "Business Solutions & Consulting",
      description: "Strategic business consulting, process optimization, and digital transformation services.",
      icon: <CheckCircle className="h-10 w-10 p-2 rounded-md bg-green-100 text-green-700"/>,
      link: "/business-solutions",
      details: "Our business consultants help you optimize operations, implement automation, and achieve sustainable growth through strategic planning."
    },
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700"/>,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700"/>,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-3">Discover Zion's Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  {feature.icon}
                  {feature.badge && (
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="line-clamp-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.details}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-1">
                  <Link to={feature.link}>
                    <span>Explore {feature.title}</span>
                    <ArrowRight className="h-4 w-4"/>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
