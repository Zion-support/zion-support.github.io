import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DollarSign, TrendingUp, Users, Target, ArrowRight, CheckCircle, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Startup Funding Guide 2025 | Zion Tech Group',
  description: 'Complete guide to AI startup funding in 2025. Learn about investment trends, funding strategies, and how to secure capital for your AI venture.',
  keywords: 'AI startup funding, AI investment, venture capital, AI funding guide, startup capital',
  openGraph: {
    title: 'AI Startup Funding Guide 2025',
    description: 'Master the art of AI startup funding and investment',
    type: 'website',
  },
};

const fundingStages = [
  {
    stage: 'Pre-Seed',
    range: '$50K - $500K',
    description: 'Initial funding to validate your AI concept',
    typicalInvestors: ['Angel Investors', 'Friends & Family', 'Incubators'],
    milestones: ['MVP Development', 'Market Validation', 'Team Building'],
    duration: '3-6 months',
    equity: '5-15%'
  },
  {
    stage: 'Seed',
    range: '$500K - $2M',
    description: 'Funding to build and launch your AI product',
    typicalInvestors: ['Seed VCs', 'Angel Groups', 'Corporate VCs'],
    milestones: ['Product Launch', 'Customer Acquisition', 'Revenue Generation'],
    duration: '6-12 months',
    equity: '10-25%'
  },
  {
    stage: 'Series A',
    range: '$2M - $15M',
    description: 'Scale your AI startup with proven traction',
    typicalInvestors: ['VC Firms', 'Strategic Investors', 'Growth Funds'],
    milestones: ['Market Expansion', 'Team Scaling', 'Technology Advancement'],
    duration: '12-18 months',
    equity: '15-30%'
  },
  {
    stage: 'Series B+',
    range: '$15M+',
    description: 'Accelerate growth and market dominance',
    typicalInvestors: ['Late-stage VCs', 'PE Firms', 'Strategic Acquirers'],
    milestones: ['Global Expansion', 'Market Leadership', 'Exit Preparation'],
    duration: '18-24 months',
    equity: '10-20%'
  }
];

const fundingSources = [
  {
    type: 'Venture Capital',
    description: 'Professional investment firms focused on high-growth startups',
    pros: ['Large funding amounts', 'Expertise and mentorship', 'Network access'],
    cons: ['High equity dilution', 'Pressure for rapid growth', 'Complex due diligence'],
    bestFor: 'Scaling AI startups with proven traction',
    averageCheck: '$5M - $50M'
  },
  {
    type: 'Angel Investors',
    description: 'High-net-worth individuals investing personal capital',
    pros: ['Faster decisions', 'Flexible terms', 'Personal mentorship'],
    cons: ['Smaller check sizes', 'Limited follow-on capacity', 'Less structured support'],
    bestFor: 'Early-stage AI startups needing initial capital',
    averageCheck: '$25K - $500K'
  },
  {
    type: 'Corporate VC',
    description: 'Investment arms of large corporations',
    pros: ['Strategic partnerships', 'Market validation', 'Exit opportunities'],
    cons: ['Slower decisions', 'Strategic constraints', 'Potential conflicts'],
    bestFor: 'AI startups aligned with corporate strategies',
    averageCheck: '$1M - $20M'
  },
  {
    type: 'Government Grants',
    description: 'Non-dilutive funding from government programs',
    pros: ['No equity dilution', 'Credibility boost', 'Research support'],
    cons: ['Complex application process', 'Limited amounts', 'Compliance requirements'],
    bestFor: 'Research-heavy AI startups with innovative technology',
    averageCheck: '$100K - $2M'
  }
];

const aiInvestmentTrends = [
  {
    category: 'Generative AI',
    investment: '$25.2B',
    growth: '+340%',
    topDeals: ['OpenAI ($10B)', 'Anthropic ($4B)', 'Cohere ($270M)'],
    trend: 'Explosive growth in consumer and enterprise applications'
  },
  {
    category: 'AI Infrastructure',
    investment: '$18.7B',
    growth: '+180%',
    topDeals: ['Databricks ($1B)', 'Scale AI ($1B)', 'Hugging Face ($235M)'],
    trend: 'Strong demand for AI development and deployment tools'
  },
  {
    category: 'AI Applications',
    investment: '$22.1B',
    growth: '+220%',
    topDeals: ['Stripe ($6.5B)', 'Canva ($1.4B)', 'Notion ($275M)'],
    trend: 'Vertical AI solutions showing strong traction'
  },
  {
    category: 'AI Hardware',
    investment: '$12.4B',
    growth: '+150%',
    topDeals: ['NVIDIA ($1.9T)', 'Cerebras ($2.4B)', 'SambaNova ($676M)'],
    trend: 'Growing demand for specialized AI computing hardware'
  }
];

const fundingChecklist = [
  'Market size analysis and validation',
  'Competitive landscape assessment',
  'Technical feasibility demonstration',
  'Business model validation',
  'Team composition and expertise',
  'Financial projections and unit economics',
  'Go-to-market strategy',
  'Intellectual property protection',
  'Regulatory compliance planning',
  'Exit strategy consideration'
];

export default function AIFundingGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              💰 Funding Guide 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              AI Startup Funding Guide
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Master the art of AI startup funding. Learn about investment trends, funding strategies, and how to secure capital for your AI venture in 2025.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign className="w-5 h-5" />
                <span>$78B+ Invested</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp className="w-5 h-5" />
                <span>+200% Growth</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>5,000+ Deals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Investment Trends */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              2025 AI Investment Landscape
            </h2>
            <p className="text-lg text-gray-600">
              Current trends and investment patterns in AI startups
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aiInvestmentTrends.map((trend, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="bg-purple-50 text-purple-700">
                      {trend.category}
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      {trend.growth}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{trend.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{trend.investment}</div>
                      <div className="text-sm text-gray-600">Total Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{trend.growth}</div>
                      <div className="text-sm text-gray-600">YoY Growth</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-gray-900">Top Deals:</h4>
                    <div className="space-y-1">
                      {trend.topDeals.map((deal, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                          <span>{deal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">{trend.trend}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Stages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Startup Funding Stages
            </h2>
            <p className="text-lg text-gray-600">
              Understanding the funding journey from idea to exit
            </p>
          </div>
          
          <div className="space-y-6">
            {fundingStages.map((stage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-purple-100 text-purple-700">
                          Stage {index + 1}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900">{stage.stage}</h3>
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          {stage.range}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{stage.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-600">Duration</div>
                          <div className="font-semibold">{stage.duration}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">Typical Equity</div>
                          <div className="font-semibold">{stage.equity}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Typical Investors:</h4>
                          <div className="flex flex-wrap gap-2">
                            {stage.typicalInvestors.map((investor, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {investor}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Milestones:</h4>
                          <div className="space-y-1">
                            {stage.milestones.map((milestone, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                                <span>{milestone}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Sources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funding Sources for AI Startups
            </h2>
            <p className="text-lg text-gray-600">
              Compare different funding options and their characteristics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {fundingSources.map((source, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl">{source.type}</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700">
                      {source.averageCheck}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{source.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                      <div className="space-y-1">
                        {source.pros.map((pro, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                      <div className="space-y-1">
                        {source.cons.map((con, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            </div>
                            <span>{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2">
                      <Badge className="bg-purple-100 text-purple-700">
                        Best for: {source.bestFor}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Checklist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Startup Funding Checklist
            </h2>
            <p className="text-lg text-gray-600">
              Essential preparation steps before seeking funding
            </p>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                {fundingChecklist.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-semibold text-purple-700">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Fund Your AI Startup?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get personalized funding guidance and connect with the right investors for your AI venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Link href="/contact">Get Funding Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/tools/ai-roi-calculator">Calculate Your Valuation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}