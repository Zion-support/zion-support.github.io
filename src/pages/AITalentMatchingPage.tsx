import React from "react";

export default function AITalentMatchingPage() {_const _benefits = [
    {
      title: "Precise Candidate Matching", _description: "Leverage AI algorithms to pair your roles with the most qualified experts.", _icon: <Bot className="h-8 w-8" />},
    {_title: "Streamlined Hiring Workflow", _description: "Automated screening and ranking saves your team valuable time.", _icon: <Users className="h-8 w-8" />},
    {_title: "Scalable Talent Pools", _description: "Access a global network of vetted professionals ready for your projects.", _icon: <TrendingUp className="h-8 w-8" />}];

  const _testimonials = [
    {_name: "Emily Stone", _role: "HR Director", _text: "Zion's AI talent matching connected us with exceptional engineers in days, _not weeks.", _avatar: "/placeholder.svg"},
    {_name: "Raj Patel", _role: "Startup Founder", _text: "The quality of candidates has improved dramatically since using Zion's platform.", _avatar: "/placeholder.svg"}];

  return (
    <ServiceLandingTemplate
      title="AI Talent Matching"
      subtitle="Find the perfect experts for your projects with intelligent matching."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=AI+Talent+Matching"
      description="Our AI-powered system analyzes your requirements and quickly surfaces the best talent for the job. Reduce hiring time and make smarter selections with data-driven insights."
      benefits={_benefits}
      testimonials={_testimonials}
      ctaText="Find Your AI Talent"
      ctaLink="/request-quote"
    />
  );
}
