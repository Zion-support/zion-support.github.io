import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, Target, ArrowRight, Calendar, Eye } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Industry Trends 2025 | Zion Tech Group',
  description: 'Discover the latest AI industry trends, market insights, and future predictions for 2025. Stay ahead with expert analysis.',
  keywords: 'AI trends 2025, AI industry insights, AI market analysis, AI predictions, AI future',
  openGraph: {
    title: 'AI Industry Trends 2025',
    description: 'Comprehensive analysis of AI trends shaping 2025',
    type: 'website',
  },
};

const trendCategories = [
  {
    id: 1,
    title: 'Generative AI Revolution',
    description: 'How generative AI is transforming industries',
    growth: '+340%',
    marketSize: '$67.2B',
    keyTrends: [
      'Multimodal AI models',
      'Real-time generation',
      'Industry-specific solutions',
      'Democratization of AI creation'
    ],
    impact: 'High',
    timeline: '2025-2026'
  },
  {
    id: 2,
    title: 'Enterprise AI Adoption',
    description: 'Large-scale AI implementation in enterprises',
    growth: '+180%',
    marketSize: '$45.8B',
    keyTrends: [
      'AI-first business strategies',
      'Automated decision making',
      'Predictive analytics',
      'Customer experience AI'
    ],
    impact: 'Very High',
    timeline: '2025'
  },
  {
    id: 3,
    title: 'AI Ethics & Governance',
    description: 'Responsible AI development and deployment',
    growth: '+250%',
    marketSize: '$12.4B',
    keyTrends: [
      'AI transparency requirements',
      'Bias detection and mitigation',
      'Regulatory compliance',
      'Ethical AI frameworks'
    ],
    impact: 'Critical',
    timeline: '2025-2027'
  },
  {
    id: 4,
    title: 'Edge AI Computing',
    description: 'AI processing at the edge of networks',
    growth: '+220%',
    marketSize: '$28.9B',
    keyTrends: [
      'Real-time inference',
      'Privacy-preserving AI',
      'IoT integration',
      'Autonomous systems'
    ],
    impact: 'High',
    timeline: '2025-2026'
  }
];

const marketInsights = [
  {
    title: 'AI Market Growth',
    value: '$1.8T',
    description: 'Projected AI market size by 2030',
    change: '+45%',
    trend: 'up'
  },
  {
    title: 'AI Job Creation',
    value: '97M',
    description: 'New AI-related jobs expected',
    change: '+23%',
    trend: 'up'
  },
  {
    title: 'AI Investment',
    value: '$200B',
    description: 'Global AI investment in 2025',
    change: '+67%',
    trend: 'up'
  },
  {
    title: 'AI Adoption Rate',
    value: '87%',
    description: 'Of enterprises planning AI adoption',
    change: '+12%',
    trend: 'up'
  }
];

const industryAnalysis = [
  {
    industry: 'Healthcare',
    adoptionRate: 94,
    keyUseCases: ['Diagnostic AI', 'Drug Discovery', 'Personalized Medicine', 'Robotic Surgery'],
    investment: '$45B',
    growth: '+180%'
  },
  {
    industry: 'Finance',
    adoptionRate: 89,
    keyUseCases: ['Algorithmic Trading', 'Risk Assessment', 'Fraud Detection', 'Customer Service'],
    investment: '$38B',
    growth: '+165%'
  },
  {
    industry: 'Manufacturing',
    adoptionRate: 82,
    keyUseCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Robotic Automation'],
    investment: '$32B',
    growth: '+155%'
  },
  {
    industry: 'Retail',
    adoptionRate: 76,
    keyUseCases: ['Personalized Recommendations', 'Inventory Management', 'Customer Analytics', 'Chatbots'],
    investment: '$28B',
    growth: '+145%'
  }
];

export default function AITrendsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
              📊 Industry Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
              AI Industry Trends 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive analysis of the AI landscape, market trends, and future predictions. Stay ahead of the curve with data-driven insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>Updated Daily</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Eye className="w-5 h-5" />
                <span>10K+ Views</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp className="w-5 h-5" />
                <span>Expert Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Overview
            </h2>
            <p className="text-lg text-gray-600">
              Key metrics and projections for the AI industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{insight.value}</div>
                  <div className="text-sm text-gray-600 mb-1">{insight.title}</div>
                  <div className="text-xs text-gray-500 mb-2">{insight.description}</div>
                  <Badge 
                    variant={insight.trend === 'up' ? 'default' : 'secondary'}
                    className="bg-green-100 text-green-800"
                  >
                    {insight.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trend Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Trend Categories
            </h2>
            <p className="text-lg text-gray-600">
              Deep dive into the most impactful AI trends
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {trendCategories.map((trend) => (
              <Card key={trend.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      {trend.timeline}
                    </Badge>
                    <Badge 
                      variant={
                        trend.impact === 'Critical' ? 'destructive' : 
                        trend.impact === 'Very High' ? 'default' : 
                        'secondary'
                      }
                    >
                      {trend.impact} Impact
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{trend.title}</CardTitle>
                  <CardDescription className="text-base">{trend.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{trend.growth}</div>
                      <div className="text-sm text-gray-600">Growth Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{trend.marketSize}</div>
                      <div className="text-sm text-gray-600">Market Size</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Trends:</h4>
                    <div className="space-y-1">
                      {trend.keyTrends.map((keyTrend, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{keyTrend}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Analysis */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Adoption Analysis
            </h2>
            <p className="text-lg text-gray-600">
              AI adoption rates and investment across key industries
            </p>
          </div>
          
          <div className="space-y-6">
            {industryAnalysis.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{industry.industry}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          {industry.adoptionRate}% Adoption
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-600">Investment</div>
                          <div className="text-lg font-semibold text-blue-600">{industry.investment}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Growth</div>
                          <div className="text-lg font-semibold text-green-600">{industry.growth}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Use Cases:</h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.keyUseCases.map((useCase, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Ahead with Our AI Insights
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get weekly updates on AI trends, market analysis, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/newsletter">Subscribe to Newsletter</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}