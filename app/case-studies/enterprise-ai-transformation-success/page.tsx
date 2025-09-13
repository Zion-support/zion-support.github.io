import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, DollarSign, Clock, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise AI Transformation Success Story | Zion Tech Group',
  description: 'Discover how a Fortune 500 company achieved 300% productivity increase and $2M annual savings through our comprehensive AI transformation solutions.',
  keywords: 'AI transformation case study, enterprise AI success, business automation, AI implementation results',
  openGraph: {
    title: 'Enterprise AI Transformation Success Story',
    description: 'Real results from AI implementation: 300% productivity increase, $2M annual savings',
    type: 'article',
  },
};

const EnterpriseAICaseStudy = () => {
  const results = [
    {
      metric: '300%',
      label: 'Productivity Increase',
      icon: TrendingUp,
      description: 'Overall operational efficiency improvement',
    },
    {
      metric: '$2M',
      label: 'Annual Savings',
      icon: DollarSign,
      description: 'Cost reduction through automation',
    },
    {
      metric: '85%',
      label: 'Time Reduction',
      icon: Clock,
      description: 'Faster process completion',
    },
    {
      metric: '95%',
      label: 'Accuracy Rate',
      icon: CheckCircle,
      description: 'Error reduction in operations',
    },
  ];

  const challenges = [
    'Manual processes consuming 60% of staff time',
    'High error rates in data processing',
    'Limited scalability with growing demand',
    'Inconsistent customer service quality',
    'Compliance and reporting bottlenecks',
  ];

  const solutions = [
    {
      title: 'AI-Powered Process Automation',
      description: 'Implemented intelligent automation for repetitive tasks',
      impact: 'Reduced manual work by 80%',
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Advanced analytics for data-driven decision making',
      impact: 'Improved forecasting accuracy by 90%',
    },
    {
      title: 'Intelligent Customer Support',
      description: 'AI chatbots and automated response systems',
      impact: 'Enhanced customer satisfaction by 45%',
    },
    {
      title: 'Smart Document Processing',
      description: 'Automated document analysis and data extraction',
      impact: 'Reduced processing time by 75%',
    },
  ];

  const timeline = [
    {
      phase: 'Phase 1',
      title: 'Assessment & Planning',
      duration: '2 weeks',
      description: 'Comprehensive analysis of current processes and AI readiness assessment',
    },
    {
      phase: 'Phase 2',
      title: 'Pilot Implementation',
      duration: '6 weeks',
      description: 'Deployed AI solutions in key departments with measurable results',
    },
    {
      phase: 'Phase 3',
      title: 'Full Deployment',
      duration: '8 weeks',
      description: 'Organization-wide rollout with training and optimization',
    },
    {
      phase: 'Phase 4',
      title: 'Optimization & Scale',
      duration: 'Ongoing',
      description: 'Continuous improvement and expansion to new use cases',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            Success Story
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-600 bg-clip-text text-transparent mb-6">
            Enterprise AI Transformation Success
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover how a Fortune 500 manufacturing company achieved unprecedented results 
            through our comprehensive AI transformation solutions, delivering measurable ROI 
            and sustainable competitive advantage.
          </p>
        </div>

        {/* Key Results */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Measurable Results
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => {
              const IconComponent = result.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-4xl font-bold text-green-400 mb-2">{result.metric}</h3>
                    <p className="text-white font-semibold text-lg mb-2">{result.label}</p>
                    <p className="text-gray-300 text-sm">{result.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-red-400 flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Business Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solutions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Our Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{solution.title}</h3>
                    <p className="text-gray-300 mb-2">{solution.description}</p>
                    <Badge variant="outline" className="text-green-400 border-green-400/50">
                      {solution.impact}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Implementation Timeline
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((phase, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                      {phase.phase}
                    </Badge>
                    <span className="text-blue-400 text-sm font-semibold">{phase.duration}</span>
                  </div>
                  <CardTitle className="text-lg text-white">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {phase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30">
            <CardContent className="py-12 text-center">
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-2xl text-white mb-8 italic">
                  "Zion Tech Group's AI transformation solutions have revolutionized our operations. 
                  The 300% productivity increase and $2M annual savings exceeded our expectations. 
                  Their expertise and support throughout the implementation was exceptional."
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg">Sarah Johnson</p>
                    <p className="text-green-300">Chief Technology Officer</p>
                    <p className="text-gray-400">Fortune 500 Manufacturing Company</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Achieve Similar Results?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Transform your business with our proven AI solutions. Get a free consultation 
                and discover how we can help you achieve measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
                  Get Free Consultation
                </button>
                <button className="border border-green-500/50 text-green-300 px-8 py-3 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300">
                  View More Case Studies
                </button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default EnterpriseAICaseStudy;