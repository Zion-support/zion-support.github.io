<<<<<<< HEAD
import React from 'react';

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI solutions, micro SaaS development, and enterprise IT services.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions, micro SaaS development, and enterprise IT services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              AI Solutions
            </h3>
            <p className="text-gray-600">
              Custom AI solutions including machine learning, natural language processing, and computer vision.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Micro SaaS Development
            </h3>
            <p className="text-gray-600">
              Build and deploy scalable micro SaaS applications with modern technologies and best practices.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Enterprise IT Services
            </h3>
            <p className="text-gray-600">
              Comprehensive IT services including cloud migration, cybersecurity, and digital transformation.
            </p>
          </div>
        </div>
=======
<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  price?: string;
  features?: string[];
}

function ServiceCard({ title, href, description, bullets = [], icon, price, features = [] }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {price && (
        <div className="text-lg font-bold text-blue-600 mb-4">Starting at {price}</div>
      )}
      {bullets.length > 0 && (
        <ul className="space-y-1 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {features.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {features.map((feature, index) => (
              <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
=======

export const metadata = {
  title: "Services | Zion Tech Group",
  description:
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};
import Link from 'next/link';

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics",
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and AI automation"
          bullets={[
            'Custom LLM development',
            'RAG systems',
            'AI agents & automation'
          ]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications"
          bullets={["Smart contracts", "DeFi protocols", "Web3 apps"]}
          icon="⛓️"
        />
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Innovative Micro SAAS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/ai-analytics-dashboard"
            title="AI Analytics Dashboard"
            description="Transform data into actionable insights with AI-powered analytics"
            bullets={["Real-time visualization", "Predictive analytics", "Automated reporting"]}
            icon="📊"
          />
          <ServiceCard
            href="/services/social-media-automation"
            title="Social Media Automation"
            description="Automate your social presence with AI-powered content creation"
            bullets={["Auto-generated posts", "Smart scheduling", "Engagement analytics"]}
            icon="📱"
          />
          <ServiceCard
            href="/services/smart-invoice-generator"
            title="Smart Invoice Generator"
            description="Automate invoicing with AI-powered generation and payment tracking"
            bullets={["Auto-populate invoices", "Payment automation", "Financial analytics"]}
            icon="💰"
          />
          <ServiceCard
            href="/services/customer-feedback-analyzer"
            title="Customer Feedback Analyzer"
            description="Transform feedback into insights with AI sentiment analysis"
            bullets={["Sentiment analysis", "Trend detection", "Automated reporting"]}
            icon="💬"
          />
          <ServiceCard
            href="/services/ai-project-management"
            title="AI Project Management"
            description="Streamline projects with AI-powered task management and optimization"
            bullets={["Smart task assignment", "Team collaboration", "Project analytics"]}
            icon="📋"
          />
          <ServiceCard
            href="/services/email-marketing-automation"
            title="Email Marketing Automation"
            description="Boost ROI with AI-powered email campaigns and personalization"
            bullets={["Personalized campaigns", "Advanced segmentation", "Comprehensive analytics"]}
            icon="📧"
          />
        </div>
      </div>
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
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
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
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
    </Link>
  );
}

export default function ServicesPage() {
  return (
<<<<<<< HEAD
    <div className="space-y-16">
      {/* Header */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive solutions for modern businesses. From AI-powered tools to complete IT infrastructure, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
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

      {/* Micro SaaS Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete SaaS development from concept to deployment with modern tech stack and best practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="SaaS Platform Builder"
            href="/services/micro-saas"
            description="End-to-end SaaS platform development with user management, billing, and analytics"
            price="$5,000 - $50,000"
            features={["React/Next.js", "Node.js", "PostgreSQL", "Stripe", "Auth0"]}
            bullets={[
              "User authentication & authorization",
              "Subscription billing & payments",
              "Admin dashboard & analytics",
              "API development & documentation",
              "Cloud deployment & scaling"
            ]}
            icon="🚀"
          />
          <ServiceCard
            title="API-First SaaS"
            href="/services/api-testing-suite"
            description="RESTful and GraphQL APIs with comprehensive testing and documentation"
            price="$2,000 - $15,000"
            features={["REST API", "GraphQL", "OpenAPI", "Testing", "Documentation"]}
            bullets={[
              "RESTful API design",
              "GraphQL implementation",
              "API testing suite",
              "Interactive documentation",
              "Rate limiting & security"
            ]}
            icon="🔌"
          />
          <ServiceCard
            title="Analytics Dashboard"
            href="/services/data-analytics"
            description="Real-time analytics and reporting dashboard for your SaaS application"
            price="$3,000 - $20,000"
            features={["Real-time", "Charts", "Export", "Alerts", "Custom Metrics"]}
            bullets={[
              "Real-time data visualization",
              "Custom metrics & KPIs",
              "Export capabilities",
              "Automated reporting",
              "Mobile-responsive design"
            ]}
            icon="📊"
          />
        </div>
      </section>

      {/* AI Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Services & Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge AI solutions powered by the latest machine learning and natural language processing technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Chatbot Platform"
            href="/services/ai-chatbot-platform"
            description="Intelligent chatbots with natural language understanding and multi-channel support"
            price="$2,500 - $25,000"
            features={["NLP", "Multi-channel", "Analytics", "Integration", "Custom Training"]}
            bullets={[
              "Natural language processing",
              "Multi-platform integration",
              "Custom training & fine-tuning",
              "Analytics & insights",
              "24/7 customer support"
            ]}
            icon="🤖"
          />
          <ServiceCard
            title="AI Content Generator"
            href="/services/ai-content-generation"
            description="Automated content creation for blogs, social media, and marketing materials"
            price="$1,500 - $12,000"
            features={["GPT-4", "SEO Optimized", "Multi-format", "Brand Voice", "Plagiarism Check"]}
            bullets={[
              "Blog posts & articles",
              "Social media content",
              "Email campaigns",
              "SEO optimization",
              "Brand voice consistency"
            ]}
            icon="✍️"
          />
          <ServiceCard
            title="AI Data Analytics"
            href="/services/ai-data-analytics"
            description="Predictive analytics and intelligent insights from your business data"
            price="$3,000 - $30,000"
            features={["Predictive", "ML Models", "Visualization", "Alerts", "Custom Reports"]}
            bullets={[
              "Predictive modeling",
              "Anomaly detection",
              "Trend analysis",
              "Automated insights",
              "Custom ML models"
            ]}
            icon="🧠"
          />
          <ServiceCard
            title="AI Code Reviewer"
            href="/services/ai-code-reviewer"
            description="Automated code review and quality assurance with AI-powered suggestions"
            price="$1,000 - $8,000"
            features={["Code Quality", "Security", "Performance", "Best Practices", "Integration"]}
            bullets={[
              "Code quality analysis",
              "Security vulnerability detection",
              "Performance optimization",
              "Best practice recommendations",
              "CI/CD integration"
            ]}
            icon="🔍"
          />
          <ServiceCard
            title="AI Meeting Assistant"
            href="/services/ai-meeting-assistant"
            description="Intelligent meeting transcription, summarization, and action item tracking"
            price="$2,000 - $15,000"
            features={["Transcription", "Summarization", "Action Items", "Integration", "Analytics"]}
            bullets={[
              "Real-time transcription",
              "Meeting summaries",
              "Action item extraction",
              "Calendar integration",
              "Meeting analytics"
            ]}
            icon="🎤"
          />
          <ServiceCard
            title="AI Customer Insights"
            href="/services/ai-customer-insights"
            description="Customer behavior analysis and personalized recommendations"
            price="$2,500 - $20,000"
            features={["Behavior Analysis", "Personalization", "Predictions", "Segmentation", "ROI Tracking"]}
            bullets={[
              "Customer segmentation",
              "Behavior prediction",
              "Personalized recommendations",
              "Churn prediction",
              "ROI analysis"
            ]}
            icon="👥"
          />
        </div>
      </section>

      {/* IT Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services & Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete IT infrastructure, cloud solutions, and digital transformation services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Cloud Migration"
            href="/services/cloud-migration"
            description="Seamless migration to AWS, Azure, or Google Cloud with zero downtime"
            price="$5,000 - $100,000"
            features={["AWS", "Azure", "GCP", "Zero Downtime", "Cost Optimization"]}
            bullets={[
              "Infrastructure assessment",
              "Migration planning",
              "Data migration",
              "Application modernization",
              "Cost optimization"
            ]}
            icon="☁️"
          />
          <ServiceCard
            title="DevOps & CI/CD"
            href="/services/ci-cd-pipeline-builder"
            description="Automated deployment pipelines and infrastructure as code"
            price="$3,000 - $25,000"
            features={["Docker", "Kubernetes", "Jenkins", "Terraform", "Monitoring"]}
            bullets={[
              "CI/CD pipeline setup",
              "Infrastructure as code",
              "Container orchestration",
              "Automated testing",
              "Monitoring & alerting"
            ]}
            icon="⚙️"
          />
          <ServiceCard
            title="Cybersecurity Suite"
            href="/services/cybersecurity-suite"
            description="Comprehensive security assessment and implementation"
            price="$2,000 - $50,000"
            features={["Penetration Testing", "Vulnerability Scan", "Compliance", "Training", "24/7 Monitoring"]}
            bullets={[
              "Security assessment",
              "Penetration testing",
              "Vulnerability scanning",
              "Compliance audit",
              "Security training"
            ]}
            icon="🔒"
          />
          <ServiceCard
            title="Mobile Development"
            href="/services/mobile-development"
            description="Native and cross-platform mobile app development"
            price="$5,000 - $75,000"
            features={["iOS", "Android", "React Native", "Flutter", "App Store"]}
            bullets={[
              "iOS & Android apps",
              "Cross-platform solutions",
              "App store optimization",
              "Push notifications",
              "Analytics integration"
            ]}
            icon="📱"
          />
          <ServiceCard
            title="API Development"
            href="/services/api-testing-suite"
            description="RESTful APIs, GraphQL, and microservices architecture"
            price="$2,000 - $20,000"
            features={["REST API", "GraphQL", "Microservices", "Documentation", "Testing"]}
            bullets={[
              "RESTful API design",
              "GraphQL implementation",
              "Microservices architecture",
              "API documentation",
              "Performance optimization"
            ]}
            icon="🔗"
          />
          <ServiceCard
            title="Database Solutions"
            href="/services/data-analytics"
            description="Database design, optimization, and migration services"
            price="$1,500 - $15,000"
            features={["PostgreSQL", "MongoDB", "Redis", "Optimization", "Backup"]}
            bullets={[
              "Database design",
              "Performance optimization",
              "Data migration",
              "Backup & recovery",
              "Monitoring & maintenance"
            ]}
            icon="🗄️"
          />
        </div>
      </section>

      {/* Business Automation */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Automation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Streamline your business processes with intelligent automation solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Workflow Automation"
            href="/services/automation-solutions"
            description="Automate repetitive tasks and business processes"
            price="$1,000 - $10,000"
            features={["Zapier", "Make", "Custom Scripts", "Integration", "Monitoring"]}
            bullets={[
              "Process mapping",
              "Automation design",
              "Integration setup",
              "Testing & validation",
              "Ongoing maintenance"
            ]}
            icon="🔄"
          />
          <ServiceCard
            title="Email Marketing Automation"
            href="/services/email-automation-suite"
            description="Automated email campaigns and customer journey optimization"
            price="$1,500 - $12,000"
            features={["Mailchimp", "HubSpot", "Custom Templates", "Analytics", "A/B Testing"]}
            bullets={[
              "Campaign design",
              "Automation workflows",
              "Template creation",
              "Analytics setup",
              "Performance optimization"
            ]}
            icon="📧"
          />
          <ServiceCard
            title="Invoice Automation"
            href="/services/invoice-automation"
            description="Automated invoicing and payment processing system"
            price="$2,000 - $15,000"
            features={["QuickBooks", "Stripe", "Automation", "Templates", "Reporting"]}
            bullets={[
              "Invoice generation",
              "Payment processing",
              "Automated reminders",
              "Financial reporting",
              "Integration setup"
            ]}
            icon="💰"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get a free consultation and custom quote for your project. No commitment required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Quote
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
=======
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Talk to our experts about your project. We'll help you choose the right
        service and create a custom solution for your business needs.
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
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
