<<<<<<< HEAD
import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Bot, Users, TrendingUp } from 'lucide-react'
=======
import React from 'react';
import { ServiceLandingTemplate } from '@/components/services/ServiceLandingTemplate';
import { Bot, Users, TrendingUp } from 'lucide-react';
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b

export default function AITalentMatchingPage() {
<<<<<<< HEAD
  const benefits = null;
=======
  const benefits = [
    {
<<<<<<< HEAD
      icon: Bot
      title: "AI-Powered Matching"
      description: "Advanced algorithms match the right talent with the right opportunities"
    }
=======
      title: 'Precise Candidate Matching',
      description:
        'Leverage AI algorithms to pair your roles with the most qualified experts.',
      icon: <Bot className='h-8 w-8' />,
    },
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    {
      icon: Users
      title: "Verified Professionals"
      description: "All candidates are pre-screened and verified for quality"
    }
    {
<<<<<<< HEAD
      icon: TrendingUp
      title: "Success Tracking"
      description: "Monitor performance and success rates of placements"
    }
  ]
  const features = [
    "Machine learning-based candidate matching"
    "Comprehensive skill assessment tools"
    "Real-time market analysis"
    "Automated interview scheduling"
    "Performance analytics dashboard"
    "Custom matching criteria"
  ]
  const stats = [
    { label: "Successful Placements", value: "95%" }
    { label: "Client Satisfaction", value: "98%" }
    { label: "Time to Hire", value: "50% faster" }
  ]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
