import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  TrendingUp,
  Star,
  Zap,
  Brain,
  CheckCircle
} from "lucide-react";

interface ContentPromotionalBannerProps {
  type?: 'blog' | 'case-study' | 'resource' | 'service';
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  badge?: string;
  featured?: boolean;
}

const contentItems = [
  {
    type: 'blog' as const,
    title: 'The AI Revolution 2025: Transforming Business Operations',
    description: 'Discover how AI is reshaping industries and learn about the latest trends in business automation.',
    ctaText: 'Read Article',
    ctaLink: '/blog/ai-revolution-2025-transforming-business-operations',
    badge: 'Latest Blog',
    icon: BookOpen,
    color: 'from-purple-500 to-purple-600',
    featured: true
  },
  {
    type: 'case-study' as const,
    title: 'GlobalCorp Achieves 300% ROI in 6 Months',
    description: 'Learn how a Fortune 500 company saved $2.3M annually with our AI solutions.',
    ctaText: 'View Case Study',
    ctaLink: '/case-studies/enterprise-ai-transformation-success-story',
    badge: 'Success Story',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    featured: true
  },
  {
    type: 'resource' as const,
    title: 'Complete AI Implementation Guide 2025',
    description: 'Everything you need to know about implementing AI in your business. 50+ pages of expert insights.',
    ctaText: 'Download Guide',
    ctaLink: '/resources/complete-ai-implementation-guide-2025',
    badge: 'Free Guide',
    icon: FileText,
    color: 'from-cyan-500 to-cyan-600',
    featured: true
  },
  {
    type: 'service' as const,
    title: 'Autonomous Business Process Automation',
    description: 'Transform your operations with AI that automates 80% of repetitive tasks and reduces costs by 40-60%.',
    ctaText: 'Learn More',
    ctaLink: '/services/autonomous-business-process-automation',
    badge: 'Most Popular',
    icon: Brain,
    color: 'from-blue-500 to-blue-600',
    featured: true
  }
];

export function ContentPromotionalBanner({ 
  type = 'blog', 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  badge,
  featured = false 
}: ContentPromotionalBannerProps) {
  const item = contentItems.find(i => i.type === type) || contentItems[0];
  const IconComponent = item.icon;

  const displayTitle = title || item.title;
  const displayDescription = description || item.description;
  const displayCtaText = ctaText || item.ctaText;
  const displayCtaLink = ctaLink || item.ctaLink;
  const displayBadge = badge || item.badge;

  return (
    <div className={`relative overflow-hidden rounded-lg ${featured ? 'p-6' : 'p-4'} bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 hover:border-zion-purple/50 transition-all duration-300`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className={`border-${item.color.split('-')[1]}-400 text-${item.color.split('-')[1]}-400 text-xs`}>
                {displayBadge}
              </Badge>
              {featured && (
                <Badge className="bg-zion-purple/20 text-zion-purple border-zion-purple/30 text-xs">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
              {displayTitle}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {displayDescription}
            </p>
            
            <Link to={displayCtaLink}>
              <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                {displayCtaText}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedContentShowcase() {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Latest Insights & Resources
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay ahead with our latest AI insights, success stories, and implementation guides
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <ContentPromotionalBanner 
              key={index}
              type={item.type}
              featured={true}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/resources">
            <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
              View All Resources
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServicePromotionalBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg p-6 bg-gradient-to-r from-zion-purple to-zion-purple-dark border border-zion-purple/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Zap className="h-6 w-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-white/20 text-white border-white/30 text-xs">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              Ready to Transform Your Business?
            </h3>
            
            <p className="text-zion-purple-light text-sm mb-4">
              Get a free AI assessment and discover how our solutions can deliver 300% ROI within 6 months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Link to="/contact">
                <Button size="sm" className="bg-white text-zion-purple hover:bg-gray-100">
                  Get Free Assessment
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SuccessMetricsBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg p-6 bg-gradient-to-r from-green-600 to-green-700 border border-green-500/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-white/20 text-white border-white/30 text-xs">
                <CheckCircle className="h-3 w-3 mr-1" />
                Proven Results
              </Badge>
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              Join 500+ Companies Achieving 300% ROI
            </h3>
            
            <p className="text-green-100 text-sm mb-4">
              Our clients save an average of $2.3M annually while improving operational efficiency by 90%.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-xl font-bold text-white">300%</div>
                <div className="text-green-100 text-xs">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">$2.3M</div>
                <div className="text-green-100 text-xs">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">90%</div>
                <div className="text-green-100 text-xs">Efficiency Gain</div>
              </div>
            </div>
            
            <Link to="/case-studies">
              <Button size="sm" className="bg-white text-green-600 hover:bg-gray-100">
                View Success Stories
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}