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
    </Link>
  );
}

export default function ServicesPage() {
  return (
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
}