import React from 'react';
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate';
import { Bot, Users, TrendingUp } from 'lucide-react';

export default function AITalentMatchingPage() {
title: 'Precise Candidate Matching',
      description:
        'Leverage AI algorithms to pair your roles with the most qualified experts.',
      icon: <Bot className='h-8 w-8' />,
    },
    {
      icon: Users
      title: "Verified Professionals"
      description: "All candidates are pre-screened and verified for quality"
    }
    {
      title: 'Scalable Talent Pools',
      description:
        'Access a global network of vetted professionals ready for your projects.',
      icon: <TrendingUp className='h-8 w-8' />,
    },
  ];

  const testimonials = [
    {
      name: 'Emily Stone',
      role: 'HR Director',
      text: "Zion's AI talent matching connected us with exceptional engineers in days, not weeks.",
      avatar: '/placeholder.svg',
    },
    {
      name: 'Raj Patel',
      role: 'Startup Founder',
      text: "The quality of candidates has improved dramatically since using Zion's platform.",
      avatar: '/placeholder.svg',
    },
  ];

  
    />
  );
  return (
    <ServiceLandingTemplate
      title="AI Talent Matching"
      subtitle="Find the perfect talent with our AI-powered matching system"
      description="Our advanced AI technology analyzes skills, experience, and cultural fit to match the right candidates with the right opportunities, ensuring successful placements and satisfied clients."
      benefits={benefits}
      features={features}
      stats={stats}
      ctaText="Start Matching Talent"
      ctaLink="/contact"
    />
  )
}
