import React from 'react';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Automation Suite - Complete Business Process Automation | Zion Tech Group',
  description: 'Transform your business with our comprehensive AI Automation Suite. Reduce costs by 60%, increase productivity by 300%, and achieve ROI in just 3 months.',
  keywords: 'AI automation, business process automation, AI suite, enterprise automation, workflow automation',
  openGraph: {
    title: 'AI Automation Suite - Complete Business Process Automation',
    description: 'Comprehensive AI automation solutions for enterprise businesses',
    type: 'product',
  },
};

const AIAutomationSuite = () => {
  const features = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation for complex business processes',
      icon: Brain,
      benefits: ['Reduce manual work by 80%', 'Eliminate human errors', 'Scale operations instantly'],
    },
    {
      title: 'Real-time Analytics',
      description: 'Advanced analytics and insights for data-driven decisions',
      icon: BarChart3,
      benefits: ['Instant business insights', 'Predictive analytics', 'Performance monitoring'],
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade security with compliance features',
      icon: Shield,
      benefits: ['SOC 2 compliance', 'End-to-end encryption', 'Audit trails'],
    },
    {
      title: '24/7 Operations',
      description: 'Continuous operation without downtime',
      icon: Clock,
      benefits: ['Always-on automation', 'Self-healing systems', 'Zero maintenance'],
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 automated processes',
        'Basic analytics dashboard',
        'Email support',
        'Standard security features',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automated processes',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom integrations',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited processes',
        'Custom AI models',
        'Dedicated support team',
        'White-label options',
        'On-premise deployment',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      role: 'CTO, TechCorp',
      content: 'The AI Automation Suite transformed our operations. We achieved 250% productivity increase in just 6 months.',
      rating: 5,
    },
    {
      name: 'Sarah Williams',
      role: 'Operations Director, InnovateLabs',
      content: 'Outstanding results! Our operational costs decreased by 45% while improving accuracy by 95%.',
      rating: 5,
    },
    {
      name: 'David Rodriguez',
      role: 'CEO, GrowthTech',
      content: 'The best investment we made. ROI was achieved in 2 months, and the results keep improving.',
      rating: 5,
    },
  ];

  const useCases = [
    {
      industry: 'Finance',
      application: 'Automated loan processing',
      result: '85% faster approvals',
    },
    {
      industry: 'Healthcare',
      application: 'Patient data management',
      result: '90% reduction in errors',
    },
    {
      industry: 'Manufacturing',
      application: 'Quality control automation',
      result: '75% cost reduction',
    },
    {
      industry: 'Retail',
      application: 'Inventory management',
      result: '60% stock optimization',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            AI Automation Suite
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
            Complete AI Automation Suite
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Transform your business with our comprehensive AI automation platform. 
            Reduce costs by 60%, increase productivity by 300%, and achieve measurable ROI in just 3 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-cyan-500/50 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">300%</h3>
              <p className="text-gray-300">Productivity Increase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">80%</h3>
              <p className="text-gray-300">Time Reduction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-2">60%</h3>
              <p className="text-gray-300">Cost Reduction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">95%</h3>
              <p className="text-gray-300">Accuracy Rate</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                        <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Flexible Pricing Plans
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 relative ${
                tier.popular ? 'ring-2 ring-cyan-500/50' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400">{tier.period}</span>
                  </div>
                  <CardDescription className="text-gray-300 mt-2">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' 
                      : 'bg-slate-700 hover:bg-slate-600'
                  } text-white`}>
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Industry Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-3">{useCase.application}</p>
                  <Badge variant="outline" className="text-green-400 border-green-400/50">
                    {useCase.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/30">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI Automation Suite to achieve 
                unprecedented results. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-cyan-500/50 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AIAutomationSuite;