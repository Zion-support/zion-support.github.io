import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Handshake, Rocket, CheckCircle, Users, Zap, Target } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your business needs, current infrastructure, and goals to create a tailored solution roadmap.',
      icon: <Search className="h-8 w-8 text-cyan-400" />,
      features: ['Business Analysis', 'Technology Audit', 'Requirement Gathering', 'Solution Design']
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a comprehensive implementation strategy with clear milestones and deliverables.',
      icon: <Target className="h-8 w-8 text-blue-400" />,
      features: ['Project Planning', 'Resource Allocation', 'Timeline Creation', 'Risk Assessment']
    },
    {
      step: '03',
      title: 'Implementation & Development',
      description: 'We execute the plan using cutting-edge technologies and best practices to deliver your solution.',
      icon: <Rocket className="h-8 w-8 text-purple-400" />,
      features: ['Agile Development', 'Quality Assurance', 'Continuous Integration', 'Regular Updates']
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We ensure smooth deployment and provide ongoing support to maximize your success.',
      icon: <CheckCircle className="h-8 w-8 text-green-400" />,
      features: ['Deployment', 'Training', '24/7 Support', 'Performance Monitoring']
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-cyan-400" />,
      title: 'Expert Team',
      description: 'Certified professionals with deep industry expertise'
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      title: 'Fast Delivery',
      description: 'Rapid development cycles with quick time-to-market'
    },
    {
      icon: <Handshake className="h-6 w-6 text-purple-400" />,
      title: 'Partnership Approach',
      description: 'Long-term collaboration focused on your success'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery and long-term partnership success
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full flex items-center justify-center border border-slate-600">
                    {step.icon}
                  </div>
                </div>
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 mb-3">
                  {step.step}
                </Badge>
                <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                <CardDescription className="text-slate-300">
                  {step.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Our Process Works
            </h3>
            <p className="text-slate-300">
              We've refined our approach over years of successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-600">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-slate-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;