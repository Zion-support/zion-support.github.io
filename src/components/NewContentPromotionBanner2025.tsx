import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  TrendingUp, 
  Zap, 
  Brain, 
  Star,
  ArrowRight,
  Calendar,
  Clock,
  Users,
  Target,
  Award,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Rocket,
  Lightbulb
} from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  stats?: {
    roi?: string;
    improvement?: string;
    savings?: string;
  };
}

const newContentItems: ContentItem[] = [
  {
    id: "ai-enterprise-transformation-2025",
    title: "AI 2025: The Enterprise Autonomous Transformation Revolution",
    description: "Discover how AI-powered autonomous systems are revolutionizing enterprise operations, delivering unprecedented efficiency and ROI in 2025.",
    type: "blog",
    category: "AI Transformation",
    tags: ["AI", "Enterprise", "Autonomous Systems", "Digital Transformation", "ROI"],
    featured: true,
    readTime: "12 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group AI Research Team",
    image: "/images/blog/ai-2025-enterprise-transformation.jpg",
    stats: {
      roi: "300-500%",
      improvement: "40-70%",
      savings: "25-50%"
    }
  },
  {
    id: "quantum-ai-fusion-2025",
    title: "Quantum AI Fusion 2025: The Next Revolution in Computing",
    description: "Explore how quantum computing and AI are merging to create unprecedented computational power, revolutionizing industries from healthcare to finance.",
    type: "blog",
    category: "Quantum Computing",
    tags: ["Quantum AI", "Quantum Computing", "AI Revolution", "Future Technology"],
    featured: true,
    readTime: "15 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group Quantum AI Research Team",
    image: "/images/blog/quantum-ai-fusion-2025.jpg"
  },
  {
    id: "retail-ai-transformation-2025",
    title: "Retail AI Transformation 2025: How a Global Retailer Achieved 400% ROI",
    description: "Discover how a major retail chain transformed their operations with AI, achieving unprecedented efficiency gains and customer satisfaction improvements.",
    type: "case-study",
    category: "Retail AI Transformation",
    tags: ["Retail", "AI", "Transformation", "ROI", "Customer Experience"],
    featured: true,
    readTime: "18 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group Case Study Team",
    image: "/images/case-studies/retail-ai-transformation-2025.jpg",
    stats: {
      roi: "400%",
      improvement: "65%",
      savings: "$480M"
    }
  },
  {
    id: "financial-quantum-ai-transformation",
    title: "Financial Services Quantum AI Transformation: $2.1B Portfolio Optimization Success",
    description: "How a major investment bank leveraged quantum AI to achieve unprecedented portfolio performance and risk management capabilities.",
    type: "case-study",
    category: "Financial Services AI",
    tags: ["Financial Services", "Quantum AI", "Portfolio Optimization", "Risk Management"],
    featured: true,
    readTime: "20 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group Financial Services Team",
    image: "/images/case-studies/financial-services-quantum-ai.jpg",
    stats: {
      roi: "340%",
      improvement: "85%",
      savings: "$1.38B"
    }
  },
  {
    id: "ai-transformation-roadmap-2025",
    title: "AI Transformation Roadmap 2025: Complete Implementation Guide",
    description: "A comprehensive step-by-step guide to successfully implementing AI transformation in your organization, with proven strategies and actionable insights.",
    type: "resource",
    category: "Implementation Guide",
    tags: ["AI Transformation", "Implementation", "Strategy", "Roadmap", "Best Practices"],
    featured: true,
    readTime: "25 min read",
    publishDate: "2025-01-17",
    author: "Zion Tech Group AI Strategy Team",
    image: "/images/resources/ai-transformation-roadmap-2025.jpg"
  }
];

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = newContentItems[currentIndex];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="h-4 w-4" />;
      case 'case-study': return <TrendingUp className="h-4 w-4" />;
      case 'resource': return <Target className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'case-study': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'resource': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-zion-purple/20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-zion-purple" />
            <span className="text-zion-purple text-sm font-medium">New Content 2025</span>
            <Rocket className="h-4 w-4 text-zion-purple" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Revolutionary AI Content Just Released
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover cutting-edge insights, real-world success stories, and comprehensive guides 
            that are transforming industries worldwide
          </p>
        </div>

        {/* Content Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className={`${getTypeColor(currentContent.type)} border`}>
                      {getTypeIcon(currentContent.type)}
                      <span className="ml-2 capitalize">{currentContent.type.replace('-', ' ')}</span>
                    </Badge>
                    <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {currentContent.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(currentContent.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-2xl md:text-3xl text-white mb-3">
                  {currentContent.title}
                </CardTitle>
                
                <CardDescription className="text-lg text-gray-300 mb-4">
                  {currentContent.description}
                </CardDescription>

                {/* Stats */}
                {currentContent.stats && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    {currentContent.stats.roi && (
                      <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-2">
                        <TrendingUp className="h-4 w-4 text-green-400" />
                        <span className="text-green-400 font-semibold">{currentContent.stats.roi} ROI</span>
                      </div>
                    )}
                    {currentContent.stats.improvement && (
                      <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-2">
                        <Zap className="h-4 w-4 text-blue-400" />
                        <span className="text-blue-400 font-semibold">{currentContent.stats.improvement} Improvement</span>
                      </div>
                    )}
                    {currentContent.stats.savings && (
                      <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-lg px-3 py-2">
                        <Award className="h-4 w-4 text-purple-400" />
                        <span className="text-purple-400 font-semibold">{currentContent.stats.savings} Savings</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentContent.tags.slice(0, 5).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/50">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                  <Users className="h-4 w-4" />
                  <span>By {currentContent.author}</span>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-zion-purple hover:bg-zion-purple/90 text-white">
                    <Link to={`/${currentContent.type}s/${currentContent.id}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" asChild className="border-slate-600 text-slate-300 hover:bg-slate-700/50">
                    <Link to="/content-showcase">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Explore All Content
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {newContentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-zion-purple scale-125' 
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          {/* Content Preview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {newContentItems.slice(0, 3).map((item, index) => (
              <Card key={item.id} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${getTypeColor(item.type)} border`}>
                      {getTypeIcon(item.type)}
                      <span className="ml-2 capitalize text-xs">{item.type.replace('-', ' ')}</span>
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      {item.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg text-white group-hover:text-zion-purple transition-colors line-clamp-2">
                    {item.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-gray-400 line-clamp-3">
                    {item.description}
                  </CardDescription>

                  {item.stats && (
                    <div className="flex gap-2 mt-3">
                      {item.stats.roi && (
                        <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                          {item.stats.roi} ROI
                        </Badge>
                      )}
                      {item.stats.improvement && (
                        <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                          {item.stats.improvement} Better
                        </Badge>
                      )}
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Button asChild variant="ghost" size="sm" className="w-full text-zion-purple hover:bg-zion-purple/10">
                    <Link to={`/${item.type}s/${item.id}`}>
                      Read More
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-zion-purple/20 to-blue-500/20 border border-zion-purple/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of organizations already using our proven AI transformation strategies 
                to achieve unprecedented results and competitive advantages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple/90 text-white">
                  <Link to="/contact">
                    <Rocket className="h-5 w-5 mr-2" />
                    Start Your AI Transformation
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">
                  <Link to="/resources">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Browse All Resources
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2025;