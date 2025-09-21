import React from 'react',
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate',
import { Bot, Users, TrendingUp } from 'lucide-react',
export default function AITalentMatchingPage() {
  const benefits = [
    {
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms match talent with opportunities',
      icon: <Bot className="h-6 w-6" />
    },
    {
      title: 'Quality Candidates',
      description: 'Pre-screened and verified professionals',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Success Metrics',
      description: 'Track and measure placement success rates',
      icon: <TrendingUp className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Director',
      text: 'The AI matching system has revolutionized our hiring process.',
      avatar: '/images/avatars/sarah.jpg'
    }
  ];

  return (
    <ServiceLandingTemplate
      title="AI Talent Matching"
      subtitle="Find the perfect talent with our AI-powered matching system"
      description="Our advanced AI technology analyzes skills experience and cultural fit to match the right candidates with the right opportunities ensuring successful placements and satisfied clients."
      benefits={benefits}
      testimonials={testimonials}
      ctaText="Start Matching Talent"
      ctaLink="/contact"
    />
  );
}