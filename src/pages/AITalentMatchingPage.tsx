<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate",
=======
import React from &quot;react&quot;;
import { ServiceLandingTemplate } from &quot;@/components/services/ServiceLandingTemplate&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Bot, Users, TrendingUp } from 'lucide-react'
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function AITalentMatchingPage() {_const _benefits = [
    {
<<<<<<< HEAD
      title: &quot;Precise Candidate Matching&quot;,
      description: &quot;Leverage AI algorithms to pair your roles with the most qualified experts.&quot;,
      icon: <Bot className=&quot;h-8 w-8&quot; />},
    {
      title: &quot;Streamlined Hiring Workflow&quot;,
      description: &quot;Automated screening and ranking saves your team valuable time.&quot;,
      icon: <Users className=&quot;h-8 w-8&quot; />},
    {
<<<<<<< HEAD
      title: "Scalable Talent Pools",
      description: "Access a global network of vetted professionals ready for your projects.",
      icon: <TrendingUp className="h-8 w-8" />}],
=======
      title: &quot;Scalable Talent Pools&quot;,
      description: &quot;Access a global network of vetted professionals ready for your projects.&quot;,
      icon: <TrendingUp className=&quot;h-8 w-8&quot; />}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const testimonials = [
    {
      name: &quot;Emily Stone&quot;,
      role: &quot;HR Director&quot;,
      text: &quot;Zion's AI talent matching connected us with exceptional engineers in days, not weeks.&quot;,
      avatar: &quot;/placeholder.svg&quot;},
    {
<<<<<<< HEAD
      name: "Raj Patel",
      role: "Startup Founder",
      text: "The quality of candidates has improved dramatically since using Zion's platform.",
      avatar: "/placeholder.svg"}],
=======
      name: &quot;Raj Patel&quot;,
      role: &quot;Startup Founder&quot;,
      text: &quot;The quality of candidates has improved dramatically since using Zion's platform.&quot;,
      avatar: &quot;/placeholder.svg&quot;}];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <ServiceLandingTemplate
      title=&quot;AI Talent Matching&quot;
      subtitle=&quot;Find the perfect experts for your projects with intelligent matching.&quot;
      heroImage=&quot;https://placehold.co/600x300/192134/9b87f5?text=AI+Talent+Matching&quot;
      description=&quot;Our AI-powered system analyzes your requirements and quickly surfaces the best talent for the job. Reduce hiring time and make smarter selections with data-driven insights.&quot;
      benefits={benefits}
      testimonials={testimonials}
      ctaText=&quot;Find Your AI Talent&quot;
      ctaLink=&quot;/request-quote&quot;
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    />
  )
}
