import React from &quot;react&quot;;
import { ServiceLandingTemplate } from &quot;@/components/services/ServiceLandingTemplate&quot;;
import { Bot, Users, TrendingUp } from 'lucide-react'

export default function AITalentMatchingPage() {
  const benefits = [
    {
      title: &quot;Precise Candidate Matching&quot;,
      description: &quot;Leverage AI algorithms to pair your roles with the most qualified experts.&quot;,
      icon: <Bot className=&quot;h-8 w-8&quot; />},
    {
      title: &quot;Streamlined Hiring Workflow&quot;,
      description: &quot;Automated screening and ranking saves your team valuable time.&quot;,
      icon: <Users className=&quot;h-8 w-8&quot; />},
    {
      title: &quot;Scalable Talent Pools&quot;,
      description: &quot;Access a global network of vetted professionals ready for your projects.&quot;,
      icon: <TrendingUp className=&quot;h-8 w-8&quot; />}];

  const testimonials = [
    {
      name: &quot;Emily Stone&quot;,
      role: &quot;HR Director&quot;,
      text: &quot;Zion's AI talent matching connected us with exceptional engineers in days, not weeks.&quot;,
      avatar: &quot;/placeholder.svg&quot;},
    {
      name: &quot;Raj Patel&quot;,
      role: &quot;Startup Founder&quot;,
      text: &quot;The quality of candidates has improved dramatically since using Zion's platform.&quot;,
      avatar: &quot;/placeholder.svg&quot;}];

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
    />
  );
}
