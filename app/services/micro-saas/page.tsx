import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Micro SaaS Solutions | Zion Tech Group",
  description:
    "Comprehensive micro SaaS development services including AI-powered tools, productivity apps, business automation, and revenue-generating solutions. From MVP to enterprise scale.",
  keywords:
    "micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence",
};

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Quote Request - {name}"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

interface ServiceFeatureProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  pricing: string;
  href: string;
}

function ServiceFeature({
  icon,
  title,
  description,
  benefits,
  pricing,
  href,
}: ServiceFeatureProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{pricing}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default function MicroSaaSPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Micro SaaS Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete SaaS development from concept to deployment. We build
          scalable, secure, and user-friendly micro SaaS applications that drive
          business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Featured Micro SaaS Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Micro SaaS Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real, useful, and intelligent micro SaaS tools that solve specific
            business problems and generate recurring revenue.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceFeature
            icon="📧"
            title="AI Email Optimizer Pro"
            description="AI-powered email marketing platform with smart subject lines, content personalization, and automated A/B testing"
            benefits={[
              "40% higher open rates",
              "Smart content personalization",
              "Automated A/B testing",
              "Advanced analytics dashboard",
              "Multi-platform integration",
            ]}
            pricing="From $99/month"
            href="/services/ai-email-optimizer"
          />
          <ServiceFeature
            icon="📱"
            title="Social Media AI Scheduler"
            description="Intelligent social media management with AI content generation, optimal timing, and hashtag optimization"
            benefits={[
              "3x more engagement",
              "AI content generation",
              "Multi-platform support",
              "Optimal posting times",
              "Hashtag optimization",
            ]}
            pricing="From $29/month"
            href="/services/ai-social-media-scheduler"
          />
          <ServiceFeature
            icon="🎧"
            title="AI Customer Support Bot"
            description="24/7 AI-powered customer support with chatbots, sentiment analysis, and multilingual capabilities"
            benefits={[
              "95% accuracy rate",
              "50+ language support",
              "60% cost reduction",
              "Sentiment analysis",
              "Live chat integration",
            ]}
            pricing="From $199/month"
            href="/services/ai-customer-support-automation"
          />
          <ServiceFeature
            icon="📄"
            title="Smart Invoice Generator"
            description="Automated invoicing with AI data extraction, smart categorization, and payment processing"
            benefits={[
              "10+ hours saved/week",
              "99% accuracy",
              "30% faster payments",
              "Smart categorization",
              "Payment tracking",
            ]}
            pricing="From $49/month"
            href="/services/ai-invoice-generator"
          />
          <ServiceFeature
            icon="📋"
            title="AI Project Management Suite"
            description="Intelligent project management with AI task automation, resource optimization, and risk prediction"
            benefits={[
              "40% productivity boost",
              "Smart resource allocation",
              "Risk prediction AI",
              "Team collaboration tools",
              "Time tracking automation",
            ]}
            pricing="From $99/month"
            href="/services/ai-project-management-suite"
          />
          <ServiceFeature
            icon="📊"
            title="Business Analytics Dashboard"
            description="Real-time business intelligence with AI insights, predictive analytics, and custom reporting"
            benefits={[
              "Real-time insights",
              "Predictive analytics",
              "Custom dashboards",
              "Data visualization",
              "Automated reporting",
            ]}
            pricing="From $149/month"
            href="/services/analytics-dashboard"
          />
          <ServiceFeature
            icon="🔍"
            title="SEO Analyzer Pro"
            description="AI-powered SEO analysis and optimization with keyword research, competitor analysis, and content suggestions"
            benefits={[
              "50% better rankings",
              "Keyword research AI",
              "Competitor analysis",
              "Content optimization",
              "Technical SEO audit",
            ]}
            pricing="From $79/month"
            href="/services/seo-analyzer"
          />
          <ServiceFeature
            icon="💼"
            title="Lead Generation Tool"
            description="Automated lead generation with AI prospecting, email sequences, and CRM integration"
            benefits={[
              "3x more qualified leads",
              "AI prospecting",
              "Automated sequences",
              "CRM integration",
              "Lead scoring",
            ]}
            pricing="From $199/month"
            href="/services/lead-generation-tool"
          />
          <ServiceFeature
            icon="📈"
            title="Expense Tracker AI"
            description="Smart expense tracking with AI categorization, receipt scanning, and financial insights"
            benefits={[
              "Automatic categorization",
              "Receipt scanning",
              "Financial insights",
              "Tax preparation",
              "Budget tracking",
            ]}
            pricing="From $39/month"
            href="/services/expense-tracker"
          />
          <ServiceFeature
            icon="🏥"
            title="Healthcare Analytics AI"
            description="Advanced healthcare AI for predictive diagnostics, treatment optimization, and clinical decision support"
            benefits={[
              "25% better outcomes",
              "HIPAA compliant",
              "Predictive diagnostics",
              "Treatment optimization",
              "Clinical insights",
            ]}
            pricing="From $2,999/month"
            href="/services/ai-healthcare-analytics"
          />
          <ServiceFeature
            icon="💳"
            title="Fintech AI Solutions"
            description="AI-powered financial services including fraud detection, risk assessment, and algorithmic trading"
            benefits={[
              "99.9% fraud detection",
              "40% cost reduction",
              "Bank-level security",
              "Risk assessment",
              "Algorithmic trading",
            ]}
            pricing="From $1,999/month"
            href="/services/ai-fintech-solutions"
          />
          <ServiceFeature
            icon="🎓"
            title="EdTech Learning Platform"
            description="AI-powered educational platform with personalized learning paths, progress tracking, and adaptive content"
            benefits={[
              "Personalized learning",
              "Progress tracking",
              "Adaptive content",
              "Student analytics",
              "Gamification",
            ]}
            pricing="From $299/month"
            href="/services/edtech"
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use modern, proven technologies to build fast, secure, and
            scalable micro SaaS applications.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React", icon: "⚛️", description: "Frontend framework" },
            { name: "Next.js", icon: "▲", description: "Full-stack framework" },
            { name: "Node.js", icon: "🟢", description: "Backend runtime" },
            { name: "PostgreSQL", icon: "🐘", description: "Database" },
            { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
            { name: "Redis", icon: "🔴", description: "Caching layer" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Stripe", icon: "💳", description: "Payment processing" },
            { name: "Auth0", icon: "🔐", description: "Authentication" },
            { name: "Vercel", icon: "▲", description: "Deployment" },
            { name: "GitHub", icon: "🐙", description: "Version control" },
          ].map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Micro SaaS Development Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits
            your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="MVP Sprint"
            price="$8,000"
            period="project"
            description="Perfect for MVPs and simple applications"
            features={[
              "2-4 weeks development",
              "Basic user authentication",
              "Simple database design",
              "Basic API endpoints",
              "Deployment setup",
              "3 months support",
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Growth"
            price="$25,000"
            period="project"
            description="Most popular for growing businesses"
            features={[
              "6-10 weeks development",
              "Advanced user management",
              "Payment integration",
              "Admin dashboard",
              "API documentation",
              "6 months support",
              "Analytics integration",
            ]}
            popular={true}
            cta="Get Started"
          />
          <PricingTier
            name="Enterprise"
            price="$75,000"
            period="project"
            description="For complex, scalable applications"
            features={[
              "12+ weeks development",
              "Multi-tenant architecture",
              "Advanced security features",
              "Custom integrations",
              "Performance optimization",
              "12 months support",
              "Dedicated project manager",
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to ensure your micro SaaS is
            delivered on time and within budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery & Planning",
              description:
                "We analyze your requirements and create a detailed project plan with timelines and milestones.",
            },
            {
              step: "02",
              title: "Design & Prototyping",
              description:
                "Our designers create wireframes and prototypes to visualize your application before development.",
            },
            {
              step: "03",
              title: "Development & Testing",
              description:
                "We build your application using agile methodology with regular testing and quality assurance.",
            },
            {
              step: "04",
              title: "Deployment & Launch",
              description:
                "We deploy your application to production and provide ongoing support and maintenance.",
            },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses transform their ideas into
            successful micro SaaS applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-commerce Analytics Platform",
              description:
                "Built a comprehensive analytics dashboard for an e-commerce business, resulting in 40% increase in conversion rates.",
              metrics: "40% conversion increase",
              tech: "React, Node.js, PostgreSQL",
              revenue: "$50K MRR",
            },
            {
              title: "AI Email Marketing Tool",
              description:
                "Developed an AI-powered email optimization platform that increased open rates by 40% for 500+ businesses.",
              metrics: "40% higher open rates",
              tech: "Next.js, OpenAI API, Stripe",
              revenue: "$25K MRR",
            },
            {
              title: "Project Management SaaS",
              description:
                "Created a custom project management solution with team collaboration features and time tracking.",
              metrics: "50% productivity boost",
              tech: "React, MongoDB, Stripe",
              revenue: "$75K MRR",
            },
          ].map((caseStudy, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 mb-4">{caseStudy.description}</p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold text-green-600">Result: </span>
                  <span className="text-gray-700">{caseStudy.metrics}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-blue-600">
                    Tech Stack:{" "}
                  </span>
                  <span className="text-gray-700">{caseStudy.tech}</span>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-purple-600">
                    Revenue:{" "}
                  </span>
                  <span className="text-gray-700">{caseStudy.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Your Micro SaaS?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss your project and create a custom micro SaaS solution
          that drives your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Project Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}
