import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Building, Globe, Brain, Zap, Shield, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Industry Insights 2026 - Market Analysis & Trends | Zion Tech Group',
  description: 'Stay ahead with comprehensive AI industry insights, market analysis, and trend predictions for 2026. Expert analysis and data-driven insights.',
  keywords: 'AI industry insights 2026, artificial intelligence market analysis, AI trends, AI market predictions, technology industry report',
};

const insights = [
  {
    id: 1,
    title: 'Neural Interface Market Explosion',
    category: 'Market Analysis',
    description: 'The neural interface market is projected to reach $15.2B by 2026, driven by breakthrough technologies and enterprise adoption.',
    stats: {
      marketSize: '$15.2B',
      growth: '+340%',
      timeframe: '2024-2026'
    },
    icon: Brain,
    trending: true,
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'Quantum Computing Enterprise Adoption',
    category: 'Technology Trends',
    description: 'Fortune 500 companies are rapidly adopting quantum computing for optimization problems, with 78% planning implementation by 2026.',
    stats: {
      adoption: '78%',
      companies: '390+',
      timeframe: '2026 Target'
    },
    icon: Zap,
    trending: true,
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'AI Automation ROI Analysis',
    category: 'ROI Insights',
    description: 'Companies implementing AI automation report average ROI of 340% within 18 months, with manufacturing leading at 450%.',
    stats: {
      avgROI: '340%',
      timeframe: '18 months',
      leaders: 'Manufacturing'
    },
    icon: TrendingUp,
    trending: false,
    readTime: '10 min read'
  },
  {
    id: 4,
    title: 'Cybersecurity AI Investment Surge',
    category: 'Security Trends',
    description: 'AI cybersecurity investments increased by 280% in 2025, with predictive threat detection showing 95% accuracy rates.',
    stats: {
      investment: '+280%',
      accuracy: '95%',
      timeframe: '2025 Growth'
    },
    icon: Shield,
    trending: true,
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Multimodal AI Market Penetration',
    category: 'Market Analysis',
    description: 'Multimodal AI systems are expected to capture 45% of the enterprise AI market by 2026, revolutionizing customer interactions.',
    stats: {
      marketShare: '45%',
      timeframe: '2026',
      focus: 'Customer AI'
    },
    icon: Database,
    trending: true,
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'Edge AI Deployment Statistics',
    category: 'Technology Trends',
    description: 'Edge AI deployments increased by 420% in 2025, with real-time processing capabilities driving enterprise adoption.',
    stats: {
      growth: '+420%',
      timeframe: '2025',
      focus: 'Real-time AI'
    },
    icon: Zap,
    trending: false,
    readTime: '5 min read'
  }
];

const categories = ['All', 'Market Analysis', 'Technology Trends', 'ROI Insights', 'Security Trends', 'Industry Reports'];

const industries = [
  { name: 'Healthcare', growth: '+280%', companies: '2.1K' },
  { name: 'Manufacturing', growth: '+340%', companies: '3.8K' },
  { name: 'Financial Services', growth: '+290%', companies: '1.9K' },
  { name: 'Retail', growth: '+260%', companies: '2.7K' },
  { name: 'Technology', growth: '+380%', companies: '4.2K' },
  { name: 'Energy', growth: '+220%', companies: '1.3K' }
];

export default function AIIndustryInsights2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Industry Insights 2026
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with comprehensive AI industry insights, market analysis, 
            and expert predictions for 2026 and beyond.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Latest Report
              <TrendingUp className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Subscribe to Updates
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">$2.4T</div>
            <div className="text-gray-600">Global AI Market</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">+340%</div>
            <div className="text-gray-600">Growth Rate</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">15.2M</div>
            <div className="text-gray-600">AI Professionals</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">78%</div>
            <div className="text-gray-600">Enterprise Adoption</div>
          </div>
        </div>

        {/* Industry Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Industry Adoption by Sector</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{industry.name}</h3>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {industry.growth}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{industry.companies} companies</span>
                    <span>AI adoption</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category}
              variant={category === 'All' ? 'default' : 'secondary'}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-purple-100"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight) => {
            const IconComponent = insight.icon;
            return (
              <Card key={insight.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    {insight.trending && (
                      <Badge variant="destructive" className="text-xs">
                        Trending
                      </Badge>
                    )}
                  </div>
                  <Badge variant="secondary" className="w-fit text-xs mb-2">
                    {insight.category}
                  </Badge>
                  <CardTitle className="text-lg font-semibold line-clamp-2">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {insight.description}
                  </CardDescription>
                  
                  <div className="space-y-2 mb-4">
                    {Object.entries(insight.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-500 capitalize">{key}:</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{insight.readTime}</span>
                    <Button size="sm" variant="outline">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Ahead of AI Trends</h2>
            <p className="text-lg mb-6 opacity-90">
              Get weekly insights, market analysis, and trend predictions delivered to your inbox.
            </p>
            <div className="flex justify-center space-x-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}