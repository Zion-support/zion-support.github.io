import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Bot, Users, TrendingUp } from 'lucide-react',
import React from './react';
import { ServiceLandingTemplate  } from '../components / services / ServiceLandingTemplate';
import { Bot, Users, TrendingUp, Star } from 'lucide-react';
import { Bot, Users, TrendingUp } from 'lucide-react';
export default function AITalentMatchingPage() {;
  const benefits = [;
    {;
      icon: Bot;
      title: "AI-Powered Matching";
      description: "Advanced algorithms match the right talent with the right opportunities",};
    {;
      icon: Users;
      title: "Verified Professionals";
      description: "All candidates are pre-screened and verified for quality",};
    {;
      icon: TrendingUp;
      title: "Success Tracking";
      description: "Monitor performance and success rates of placements",}
,
  return (,
    <ServiceLandingTemplate,
      title="AI Talent Matching",
      subtitle="Find the perfect talent with our AI-powered matching system",
      description="Our advanced AI technology analyzes skills, experience, and cultural fit to match the right candidates with the right opportunities, ensuring successful placements and satisfied clients.",
export default function AITalentMatchingPage() {,
  const benefits = [,
    {,
      title: "Precise Candidate Matching";
      description: "Leverage AI algorithms to pair your roles with the most qualified experts.";
      icon: <Bot className="h-8 w-8" />,};
    {,
      title: "Streamlined Hiring Workflow";
      description: "Automated screening and ranking saves your team valuable time.";
      icon: <Users className="h-8 w-8" />,};
    {,
      title: "Scalable Talent Pools";
      description: "Access a global network of vetted professionals ready for your projects.";
      icon: <TrendingUp className="h-8 w-8" />,}];
  const testimonials = [,
    {,
      name: "Emily Stone";
      role: "HR Director";
      text: "Zion's AI talent matching connected us with exceptional engineers in days, not weeks.";
      avatar: "/placeholder.svg",};
    {,
      name: "Raj Patel";
      role: "Startup Founder";
      text: "The quality of candidates has improved dramatically since using Zion's platform.";
  const features = [;
    "Machine learning-based candidate matching";
    "Comprehensive skill assessment tools";
    "Real-time market analysis";
    "Automated interview scheduling";
    "Performance analytics dashboard";
    "Custom matching criteria";
  ];
  const stats = [;
    { label: "Successful Placements", value: "95%" ,};
    { label: "Client Satisfaction", value: "98%" ,};
    { label: "Time to Hire", value: "50% faster" ,}
  ],
export default /**,
 * AITalentMatchingPage - Function description,
 */,
function AITalentMatchingPage() {,
  const benefits = [;
    {,
      icon: Bot;
      title: "AI - Powered Matching";
      description: "Advanced algorithms match the right talent with the right opportunities",};
    {,
      icon: Users;
      title: "Verified Professionals";
      description: "All candidates are pre - screened and verified for quality",};
    {,
      icon: TrendingUp;
      title: "Success Tracking";
      description: "Monitor performance and success rates of placements",}
  ];
  const features = [;
    "Machine learning - based candidate matching";
    "Comprehensive skill assessment tools";
    "Real - time market analysis";
    "Automated interview scheduling";
    "Performance analytics dashboard";
    "Custom matching criteria";
  ];
  const stats = [;
    { label: "Successful Placements", value: "95%" ,};
    { label: "Client Satisfaction", value: "98%" ,};
    { label: "Time to Hire", value: "50% faster" ,}
  ];
  return (,
    <ServiceLandingTemplate,
      title="AI Talent Matching",
      subtitle="Find the perfect experts for your projects with intelligent matching.",
      heroImage="https: //placehold.co/600x300/192134/9b87f5?text=AI+Talent+Matching",
      description="Our AI-powered system analyzes your requirements and quickly surfaces the best talent for the job. Reduce hiring time and make smarter selections with data-driven insights.",
      benefits={benefits,}
      testimonials={testimonials}
      ctaText="Find Your AI Talent",
      ctaLink="/request-quote",
    />,
  ),
export default function AITalentMatchingPage() {;
  const benefits = [;
    {;
      title: "Precise Candidate Matching";
      description: "Leverage AI algorithms to pair your roles with the most qualified experts.";
      icon: <Bot className="h-8 w-8" />,};
    {;
      title: "Streamlined Hiring Workflow";
      description: "Automated screening and ranking saves your team valuable time.";
      icon: <Users className="h-8 w-8" />,};
    {;
      title: "Scalable Talent Pools";
      description: "Access a global network of vetted professionals ready for your projects.";
      icon: <TrendingUp className="h-8 w-8" />,}];
  const testimonials = [;
    {;
      name: "Emily Stone";
      role: "HR Director";
      text: "Zion's AI talent matching connected us with exceptional engineers in days, not weeks.";
      avatar: "/placeholder.svg",};
    {;
      name: "Raj Patel";
      role: "Startup Founder";
      text: "The quality of candidates has improved dramatically since using Zion's platform.";
      avatar: "/placeholder.svg",}];
  return (;
    <ServiceLandingTemplate;
      title="AI Talent Matching";
      subtitle="Find the perfect experts for your projects with intelligent matching.";
      heroImage="https: //placehold.co/600x300/192134/9b87f5?text=AI+Talent+Matching";
      description="Our AI-powered system analyzes your requirements and quickly surfaces the best talent for the job. Reduce hiring time and make smarter selections with data-driven insights.";
      benefits={benefits}
      features={features}
      stats={stats}
,
    />;
  );
      cta_text="Start Matching Talent";
      cta_link="/contact";
    />);
}
,
}
;
}}}]]