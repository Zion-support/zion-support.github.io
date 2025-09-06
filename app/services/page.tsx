import Link from "next/link";

export const metadata = {
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description: "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard 
            number="500+" 
            label="Successful Projects" 
            description="Delivered worldwide" 
          />
          <StatCard 
            number="$2B+" 
            label="Combined Market Value" 
            description="Generated for clients" 
          />
          <StatCard 
            number="99.9%" 
            label="Uptime Guarantee" 
            description="Enterprise reliability" 
          />
          <StatCard 
            number="300%" 
            label="Average ROI" 
            description="Client return on investment" 
          />
        </div>
      </div>

      {/* Micro SaaS Services */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized micro SaaS tools designed to solve specific business problems with minimal overhead and maximum impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            href="/services/ai-chatbot-builder"
            title="AI Chatbot Builder"
            description="No-code platform to create intelligent chatbots for customer support, sales, and engagement"
            bullets={[
              "Drag-and-drop interface",
              "Multi-language support",
              "Integration with 50+ platforms",
              "Advanced analytics dashboard"
            ]}
            icon="🤖"
            pricing="$299/month"
          />
          <ServiceCard
            href="/services/smart-invoice-generator"
            title="Smart Invoice Generator"
            description="AI-powered invoice creation with automated follow-ups and payment tracking"
            bullets={[
              "Automated invoice generation",
              "Payment reminders",
              "Multi-currency support",
              "Tax compliance features"
            ]}
            icon="📄"
            pricing="$199/month"
          />
          <ServiceCard
            href="/services/expense-tracker"
            title="Expense Tracker Pro"
            description="Advanced expense management with receipt scanning and automated categorization"
            bullets={[
              "Receipt scanning with OCR",
              "Automated categorization",
              "Expense reporting",
              "Team collaboration features"
            ]}
            icon="💰"
            pricing="$149/month"
          />
          <ServiceCard
            href="/services/lead-generation-tool"
            title="Lead Generation Tool"
            description="Automated lead generation and qualification with CRM integration"
            bullets={[
              "Multi-channel lead capture",
              "Lead scoring algorithms",
              "CRM integration",
              "Email sequence automation"
            ]}
            icon="🎯"
            pricing="$399/month"
          />
          <ServiceCard
            href="/services/social-media-scheduler"
            title="Social Media Scheduler"
            description="AI-powered social media management with content optimization and analytics"
            bullets={[
              "Multi-platform posting",
              "Content optimization",
              "Engagement analytics",
              "Hashtag research"
            ]}
            icon="📱"
            pricing="$249/month"
          />
          <ServiceCard
            href="/services/email-campaign-manager"
            title="Email Campaign Manager"
            description="Advanced email marketing automation with personalization and A/B testing"
            bullets={[
              "Drag-and-drop editor",
              "Advanced segmentation",
              "A/B testing tools",
              "Deliverability optimization"
            ]}
            icon="📧"
            pricing="$179/month"
          />
        </div>
      </section>

      {/* AI Services */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence solutions to automate processes, gain insights, and drive innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            href="/services/ai-content-generation"
            title="AI Content Generation"
            description="Automated content creation for blogs, social media, and marketing materials"
            bullets={[
              "Multi-format content generation",
              "Brand voice customization",
              "SEO optimization",
              "Plagiarism detection"
            ]}
            icon="✍️"
            pricing="$499/month"
          />
          <ServiceCard
            href="/services/ai-data-analytics"
            title="AI Data Analytics"
            description="Advanced analytics platform with predictive modeling and real-time insights"
            bullets={[
              "Predictive analytics",
              "Real-time dashboards",
              "Custom ML models",
              "Data visualization"
            ]}
            icon="📊"
            pricing="$799/month"
          />
          <ServiceCard
            href="/services/ai-customer-support"
            title="AI Customer Support"
            description="Intelligent customer service automation with natural language processing"
            bullets={[
              "24/7 automated support",
              "Multi-language processing",
              "Sentiment analysis",
              "Escalation management"
            ]}
            icon="🎧"
            pricing="$599/month"
          />
          <ServiceCard
            href="/services/ai-project-management"
            title="AI Project Management"
            description="Intelligent project planning and resource optimization with predictive insights"
            bullets={[
              "Automated task scheduling",
              "Resource optimization",
              "Risk prediction",
              "Progress tracking"
            ]}
            icon="📋"
            pricing="$699/month"
          />
          <ServiceCard
            href="/services/ai-financial-analyzer"
            title="AI Financial Analyzer"
            description="Advanced financial analysis and forecasting with machine learning models"
            bullets={[
              "Financial forecasting",
              "Risk assessment",
              "Investment analysis",
              "Compliance monitoring"
            ]}
            icon="💹"
            pricing="$999/month"
          />
          <ServiceCard
            href="/services/ai-testing-automation"
            title="AI Testing Automation"
            description="Intelligent test case generation and automated quality assurance"
            bullets={[
              "Automated test generation",
              "Bug prediction",
              "Performance testing",
              "Code coverage analysis"
            ]}
            icon="🧪"
            pricing="$799/month"
          />
        </div>
      </section>

      {/* IT Services */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT infrastructure, cloud solutions, and digital transformation services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            href="/services/cloud-migration"
            title="Cloud Migration"
            description="Seamless migration to AWS, Azure, or GCP with zero downtime"
            bullets={[
              "Multi-cloud strategy",
              "Zero-downtime migration",
              "Cost optimization",
              "Security compliance"
            ]}
            icon="☁️"
            pricing="$5,000/project"
          />
          <ServiceCard
            href="/services/cybersecurity-suite"
            title="Cybersecurity Suite"
            description="Comprehensive security solutions including threat detection and incident response"
            bullets={[
              "Threat monitoring",
              "Penetration testing",
              "Security audits",
              "Incident response"
            ]}
            icon="🔒"
            pricing="$3,999/month"
          />
          <ServiceCard
            href="/services/devops-automation"
            title="DevOps Automation"
            description="Complete CI/CD pipeline setup with automated testing and deployment"
            bullets={[
              "CI/CD pipeline setup",
              "Infrastructure as code",
              "Monitoring & alerting",
              "Performance optimization"
            ]}
            icon="⚙️"
            pricing="$4,999/month"
          />
          <ServiceCard
            href="/services/database-optimization"
            title="Database Optimization"
            description="Database performance tuning and optimization for maximum efficiency"
            bullets={[
              "Performance tuning",
              "Query optimization",
              "Backup & recovery",
              "Scalability planning"
            ]}
            icon="🗄️"
            pricing="$2,999/month"
          />
          <ServiceCard
            href="/services/api-development"
            title="API Development"
            description="RESTful and GraphQL API development with comprehensive documentation"
            bullets={[
              "REST & GraphQL APIs",
              "API documentation",
              "Rate limiting",
              "Authentication & authorization"
            ]}
            icon="🔌"
            pricing="$3,499/project"
          />
          <ServiceCard
            href="/services/mobile-development"
            title="Mobile Development"
            description="Native and cross-platform mobile app development for iOS and Android"
            bullets={[
              "Native iOS & Android",
              "Cross-platform solutions",
              "App store optimization",
              "Push notifications"
            ]}
            icon="📱"
            pricing="$8,999/project"
          />
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized solutions tailored to specific industries with compliance and regulatory expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            href="/services/fintech"
            title="FinTech Solutions"
            description="Complete financial technology solutions including digital banking and payment processing"
            bullets={[
              "Digital banking platforms",
              "Payment processing",
              "Regulatory compliance",
              "Fraud detection"
            ]}
            icon="💳"
            pricing="$25,000/project"
          />
          <ServiceCard
            href="/services/healthtech"
            title="HealthTech Solutions"
            description="Healthcare technology solutions including EHR systems and telemedicine platforms"
            bullets={[
              "EHR system integration",
              "Telemedicine platforms",
              "HIPAA compliance",
              "Medical AI diagnostics"
            ]}
            icon="🏥"
            pricing="$40,000/project"
          />
          <ServiceCard
            href="/services/edtech"
            title="EdTech Solutions"
            description="Educational technology platforms including LMS systems and virtual classrooms"
            bullets={[
              "Learning management systems",
              "Virtual classrooms",
              "Student analytics",
              "AI-powered tutoring"
            ]}
            icon="🎓"
            pricing="$30,000/project"
          />
        </div>
      </section>

      <CTA />
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
  pricing
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  pricing: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

function StatCard({ 
  number, 
  label, 
  description 
}: { 
  number: string; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Join 500+ successful businesses that trust Zion Tech Group for their technology needs. 
        Get a free consultation and discover how our solutions can drive 300% ROI and accelerate your growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}