"use client";
'use client';

import React{ useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown
  ChevronUp
  Brain
  Zap
  Target
  Calendar,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';

export default function AI2030ContentNavigation() {
  const [isExpandedsetIsExpanded] = useState(false);

  const contentSections = [
    {
      title: "AI 2030 Insights",
      icon: Brain,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        {
          title: "Future Workforce Revolution",
          description: "Autonomous collaboration and human-AI partnerships",
          href: "/blog/ai-2030-future-workforce-autonomous-collaboration-revolution",
          badge: "NEW",
          badgeColor: "bg-yellow-500 text-yellow-900"
        },
        {
          title: "Sustainable Enterprise Transformation",
          description: "Net-zero operations through intelligent automation",
          href: "/blog/ai-2030-sustainable-enterprise-transformation-ultimate-guide",
          badge: "SUSTAINABILITY",
          badgeColor: "bg-green-500 text-green-900"
        }
      ]
    },
    {
      title: "Interactive Tools",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      items: [
        {
          title: "AI 2030 Readiness Assessment",
          description: "Evaluate your 'organization', 's AI transformation readiness",
          href: "/tools/ai-2030-readiness-assessment",
          badge: "ASSESSMENT",
          badgeColor: "bg-purple-500 text-purple-900"
        },
        {
          title: "AI ROI Calculator 2025",
          description: "Calculate potential returns from AI investments",
          href: "/tools/ai-roi-calculator-2025",
          badge: "CALCULATOR",
          badgeColor: "bg-blue-500 text-blue-900"
        }
      ]
    },
    {
      title: "Success Stories",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: [
        {
          title: "Fortune 500 Net-Zero Success",
          description: "400% ROI through AI-powered sustainability transformation",
          href: "/case-studies/fortune-500-ai-2030-transformation-net-zero-success-story",
          badge: "CASE STUDY",
          badgeColor: "bg-orange-500 text-orange-900"
        },
        {
          title: "AI Transformation ROI Success",
          description: "Real-world examples of AI implementation success",
          href: "/case-studies/ai-transformation-600-roi-success-story-2025",
          badge: "SUCCESS",
          badgeColor: "bg-green-500 text-green-900"
        }
      ]
    },
    {
      title: "Future Predictions",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      items: [
        {
          title: "AI 2030 Trends & Predictions",
          description: "Comprehensive guide to AI trends through 2030",
          href: "/blog/ai-2026-trends-predictions-ultimate-guide",
          badge: "TRENDS",
          badgeColor: "bg-orange-500 text-orange-900"
        },
        {
          title: "Quantum AI Business Revolution",
          description: "How quantum computing will transform business",
          href: "/blog/quantum-ai-2026-business-revolution",
          badge: "QUANTUM",
          badgeColor: "bg-indigo-500 text-indigo-900"
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">AI 2030 CONTENT HUB</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore the Future of AI
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge insightstoolsand success stories that will prepare your organization 
            for the AI-driven future. From workforce transformation to sustainable operations.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">15+</div>
            <div className="text-sm text-gray-600">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">5</div>
            <div className="text-sm text-gray-600">Interactive Tools</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">20+</div>
            <div className="text-sm text-gray-600">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">2030</div>
            <div className="text-sm text-gray-600">Future Focus</div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentSections.map((sectionIndex) => (
            <Card key={sectionIndex} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${section.bgColor}`}>
                    <section.icon className={`h-5 w-5 ${section.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900">{section.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {section.items.slice(0isExpanded ? section.items.length : 2).map((itemIndex) => (
                    <div key={itemIndex} className="group">
                      <a href={item.href} className="block">
                        <div className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="flex items-start gap-2 mb-2">
                            <Badge className={`text-xs ${item.badgeColor}`}>
                              {item.badge}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-purple-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="flex items-center text-purple-600 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>Read more</span>
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                  
                  {section.items.length > 2 && !isExpanded && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="w-full text-xs text-gray-500 hover:text-purple-600"
                    >
                      Show {section.items.length - 2} more
                      <ChevronDown className="h-3 w-3 ml-1" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Content CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Join the AI 2030 Community</h3>
              </div>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Stay ahead of the curve with exclusive insightsearly access to new tools
                and networking opportunities with AI transformation leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                    Join Community <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </a>
                <a href="/newsletter">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                    Subscribe to Updates
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:text-purple-600"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="h-4 w-4 ml-2" />
              </>
            ) : (
              <>
                Show All Content <ChevronDown className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}