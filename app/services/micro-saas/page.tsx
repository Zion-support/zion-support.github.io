import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, analytics platforms, and automation solutions. From MVP to scale.'
};

export default function MicroSaasPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From AI-powered tools to productivity apps, we create solutions that solve real problems and generate sustainable revenue.
        </p>
      </section>

      {/* Featured Micro SaaS Solutions */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSaaSProduct
            title="AI Content Generator"
            description="AI-powered content creation tool with templates, brand voice training, and multi-platform publishing"
            features={["GPT-4 integration", "Brand voice training", "SEO optimization", "Multi-platform publishing", "Analytics dashboard"]}
            pricing="$29-199/month"
            icon="✍️"
          />
          <MicroSaaSProduct
            title="Social Media Scheduler"
            description="Advanced social media management with AI-powered optimal posting times and content suggestions"
            features={["Multi-platform posting", "AI timing optimization", "Content calendar", "Analytics & insights", "Team collaboration"]}
            pricing="$19-149/month"
            icon="📱"
          />
          <MicroSaaSProduct
            title="Email Marketing Automation"
            description="Intelligent email marketing platform with behavioral triggers and advanced segmentation"
            features={["Behavioral triggers", "Advanced segmentation", "A/B testing", "Template library", "Deliverability optimization"]}
            pricing="$39-299/month"
            icon="📧"
          />
          <MicroSaaSProduct
            title="Project Management AI"
            description="AI-enhanced project management with predictive analytics and automated resource allocation"
            features={["AI task prioritization", "Resource optimization", "Risk prediction", "Time tracking", "Team performance insights"]}
            pricing="$49-249/month"
            icon="📊"
          />
          <MicroSaaSProduct
            title="Customer Support Bot"
            description="Intelligent customer support automation with multi-language support and escalation management"
            features={["Multi-language support", "Ticket routing", "Knowledge base", "Sentiment analysis", "Performance metrics"]}
            pricing="$79-399/month"
            icon="🤖"
          />
          <MicroSaaSProduct
            title="Analytics Dashboard"
            description="Custom business intelligence platform with real-time data visualization and predictive insights"
            features={["Real-time dashboards", "Custom metrics", "Data integration", "Predictive analytics", "Export capabilities"]}
            pricing="$99-499/month"
            icon="📈"
          />
        </div>
      </section>

      {/* Core Development Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceItem 
            title="Core Features" 
            details={[
              "Multi-tenant architecture",
              "Authentication (email, OAuth, SSO)",
              "Payment processing (Stripe, PayPal)",
              "Admin dashboard & analytics",
              "In-app onboarding & tutorials",
              "API development & documentation"
            ]} 
          />
          <ServiceItem 
            title="Growth Stack" 
            details={[
              "SEO-optimized marketing site",
              "Blog & documentation system",
              "Email marketing automation",
              "Referral & affiliate programs",
              "A/B testing framework",
              "User feedback collection"
            ]} 
          />
          <ServiceItem 
            title="Operations & Reliability" 
            details={[
              "CI/CD pipeline setup",
              "Monitoring & observability",
              "Error tracking & alerting",
              "Performance optimization",
              "Security hardening",
              "Backup & disaster recovery"
            ]} 
          />
        </div>
      </section>
    </div>
  );
}