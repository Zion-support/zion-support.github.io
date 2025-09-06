import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services including AI-powered tools, productivity apps, business automation, and revenue-generating solutions. From MVP to enterprise scale.',
};

export default function MicroSaasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build profitable, scalable micro SaaS products that generate real revenue. 
              From AI-powered tools to business automation, we create solutions that solve real problems.
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
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Micro SaaS Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven micro SaaS products that generate real revenue and solve real business problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MicroSaaSCard
              title="AI Content Generator Pro"
              description="Advanced AI-powered content creation tool with multi-language support, SEO optimization, and brand voice customization."
              features={[
                "GPT-4 powered content generation",
                "Multi-language support (50+ languages)",
                "SEO optimization tools",
                "Brand voice training",
                "Content scheduling & publishing",
                "Analytics & performance tracking"
              ]}
              pricing="$29-99/month"
              marketSize="$2.1B content marketing market"
              icon="🤖"
            />
            <MicroSaaSCard
              title="Smart Invoice Manager"
              description="Automated invoicing and payment processing with AI-powered expense categorization and financial insights."
              features={[
                "Automated invoice generation",
                "Payment processing integration",
                "Expense categorization AI",
                "Financial reporting dashboard",
                "Multi-currency support",
                "Client portal access"
              ]}
              pricing="$19-79/month"
              marketSize="$4.2B invoicing software market"
              icon="📊"
            />
            <MicroSaaSCard
              title="Social Media Scheduler"
              description="AI-driven social media management with optimal posting times, hashtag suggestions, and performance analytics."
              features={[
                "Multi-platform scheduling",
                "AI-optimized posting times",
                "Hashtag suggestion engine",
                "Content calendar management",
                "Engagement analytics",
                "Team collaboration tools"
              ]}
              pricing="$15-59/month"
              marketSize="$6.1B social media management market"
              icon="📱"
            />
            <MicroSaaSCard
              title="Email Marketing Automation"
              description="Intelligent email marketing platform with behavioral triggers, A/B testing, and advanced segmentation."
              features={[
                "Behavioral trigger automation",
                "Advanced segmentation",
                "A/B testing framework",
                "Template library",
                "Deliverability optimization",
                "ROI tracking & analytics"
              ]}
              pricing="$25-99/month"
              marketSize="$7.5B email marketing market"
              icon="📧"
            />
            <MicroSaaSCard
              title="Project Management Hub"
              description="AI-enhanced project management with predictive analytics, resource optimization, and team productivity insights."
              features={[
                "AI-powered task prioritization",
                "Resource allocation optimization",
                "Predictive deadline management",
                "Team productivity analytics",
                "Integration ecosystem",
                "Custom workflow automation"
              ]}
              pricing="$35-149/month"
              marketSize="$5.3B project management market"
              icon="📋"
            />
            <MicroSaaSCard
              title="Customer Support AI"
              description="Intelligent customer support platform with chatbot automation, sentiment analysis, and knowledge base management."
              features={[
                "AI chatbot automation",
                "Sentiment analysis",
                "Knowledge base management",
                "Multi-channel support",
                "Performance analytics",
                "Custom integration APIs"
              ]}
              pricing="$45-199/month"
              marketSize="$8.9B customer service market"
              icon="🎧"
            />
            <MicroSaaSCard
              title="Analytics Dashboard Pro"
              description="Comprehensive business analytics with real-time data visualization, predictive insights, and custom reporting."
              features={[
                "Real-time data visualization",
                "Predictive analytics engine",
                "Custom report builder",
                "Data source integrations",
                "Automated insights",
                "White-label options"
              ]}
              pricing="$39-179/month"
              marketSize="$3.8B business intelligence market"
              icon="📈"
            />
            <MicroSaaSCard
              title="E-commerce Optimization"
              description="AI-powered e-commerce tools for conversion optimization, inventory management, and customer behavior analysis."
              features={[
                "Conversion rate optimization",
                "Inventory management AI",
                "Customer behavior analysis",
                "Pricing optimization",
                "Abandoned cart recovery",
                "Multi-platform sync"
              ]}
              pricing="$49-249/month"
              marketSize="$6.2B e-commerce tools market"
              icon="🛒"
            />
            <MicroSaaSCard
              title="HR Management Suite"
              description="Comprehensive HR management with AI-powered recruitment, employee analytics, and performance tracking."
              features={[
                "AI-powered candidate screening",
                "Employee performance analytics",
                "Automated onboarding",
                "Benefits management",
                "Compliance tracking",
                "Custom HR workflows"
              ]}
              pricing="$29-149/month"
              marketSize="$4.7B HR software market"
              icon="👥"
            />
            <MicroSaaSCard
              title="Lead Generation Engine"
              description="AI-powered lead generation and qualification system with automated outreach and CRM integration."
              features={[
                "AI lead scoring & qualification",
                "Automated email sequences",
                "LinkedIn & social prospecting",
                "CRM integration (Salesforce, HubSpot)",
                "Lead nurturing workflows",
                "ROI tracking & analytics"
              ]}
              pricing="$39-199/month"
              marketSize="$3.2B lead generation market"
              icon="🎯"
            />
            <MicroSaaSCard
              title="Time Tracking & Productivity"
              description="Advanced time tracking with AI insights, productivity analytics, and team performance optimization."
              features={[
                "AI-powered time categorization",
                "Productivity analytics & insights",
                "Team performance dashboards",
                "Project profitability tracking",
                "Automated timesheet generation",
                "Integration with 50+ tools"
              ]}
              pricing="$12-79/month"
              marketSize="$2.8B time tracking market"
              icon="⏰"
            />
            <MicroSaaSCard
              title="Customer Feedback Analytics"
              description="AI-powered customer feedback analysis with sentiment tracking, trend identification, and actionable insights."
              features={[
                "Multi-channel feedback collection",
                "AI sentiment analysis",
                "Trend identification & alerts",
                "Competitor analysis",
                "Actionable insights dashboard",
                "Custom reporting & exports"
              ]}
              pricing="$25-149/month"
              marketSize="$1.9B feedback management market"
              icon="💬"
            />
            <MicroSaaSCard
              title="Inventory Management AI"
              description="Intelligent inventory management with demand forecasting, automated reordering, and cost optimization."
              features={[
                "AI demand forecasting",
                "Automated reorder points",
                "Multi-location inventory sync",
                "Cost optimization algorithms",
                "Supplier performance tracking",
                "Real-time stock alerts"
              ]}
              pricing="$45-299/month"
              marketSize="$4.1B inventory management market"
              icon="📦"
            />
            <MicroSaaSCard
              title="Document Management System"
              description="AI-powered document management with OCR, smart categorization, and automated workflow processing."
              features={[
                "OCR & text extraction",
                "AI document categorization",
                "Automated workflow processing",
                "Version control & collaboration",
                "Advanced search capabilities",
                "Compliance & audit trails"
              ]}
              pricing="$19-129/month"
              marketSize="$5.6B document management market"
              icon="📄"
            />
            <MicroSaaSCard
              title="Expense Management Pro"
              description="Automated expense tracking with receipt scanning, policy compliance, and intelligent categorization."
              features={[
                "Receipt scanning & OCR",
                "AI expense categorization",
                "Policy compliance checking",
                "Automated approval workflows",
                "Multi-currency support",
                "Integration with accounting systems"
              ]}
              pricing="$15-89/month"
              marketSize="$2.3B expense management market"
              icon="💰"
            />
            <MicroSaaSCard
              title="Website Performance Monitor"
              description="Comprehensive website monitoring with performance optimization, uptime tracking, and user experience analytics."
              features={[
                "Real-time performance monitoring",
                "Uptime & availability tracking",
                "User experience analytics",
                "Core Web Vitals monitoring",
                "Automated alerts & notifications",
                "Performance optimization recommendations"
              ]}
              pricing="$29-199/month"
              marketSize="$3.7B website monitoring market"
              icon="🌐"
            />
            <MicroSaaSCard
              title="API Management Platform"
              description="Complete API lifecycle management with monitoring, security, documentation, and developer portal."
              features={[
                "API gateway & routing",
                "Rate limiting & throttling",
                "Authentication & authorization",
                "API documentation generator",
                "Developer portal",
                "Analytics & monitoring"
              ]}
              pricing="$99-999/month"
              marketSize="$4.8B API management market"
              icon="🔌"
            />
            <MicroSaaSCard
              title="A/B Testing Platform"
              description="Advanced A/B testing platform with statistical significance, multivariate testing, and conversion optimization."
              features={[
                "Visual editor for tests",
                "Statistical significance calculator",
                "Multivariate testing",
                "Conversion funnel analysis",
                "Real-time results dashboard",
                "Integration with analytics tools"
              ]}
              pricing="$49-399/month"
              marketSize="$1.4B A/B testing market"
              icon="🧪"
            />
            <MicroSaaSCard
              title="Customer Onboarding Automation"
              description="Automated customer onboarding with personalized journeys, progress tracking, and success metrics."
              features={[
                "Personalized onboarding flows",
                "Progress tracking & analytics",
                "Automated email sequences",
                "In-app guidance & tooltips",
                "Success metrics dashboard",
                "Integration with CRM systems"
              ]}
              pricing="$35-199/month"
              marketSize="$1.8B customer onboarding market"
              icon="🚀"
            />
            <MicroSaaSCard
              title="Subscription Billing Engine"
              description="Flexible subscription billing with proration, dunning management, and revenue recognition."
              features={[
                "Flexible pricing models",
                "Proration & billing adjustments",
                "Dunning management",
                "Revenue recognition",
                "Tax calculation & compliance",
                "Analytics & reporting"
              ]}
              pricing="$79-599/month"
              marketSize="$2.9B subscription billing market"
              icon="💳"
            />
            <MicroSaaSCard
              title="White-Label Mobile App Builder"
              description="No-code mobile app builder with white-label options, custom branding, and app store deployment."
              features={[
                "Drag-and-drop app builder",
                "White-label customization",
                "App store deployment",
                "Push notifications",
                "Analytics & user tracking",
                "Custom integrations"
              ]}
              pricing="$199-1,999/month"
              marketSize="$6.2B mobile app development market"
              icon="📱"
            />
            <MicroSaaSCard
              title="Workflow Automation Hub"
              description="Visual workflow automation platform connecting 200+ apps with conditional logic and error handling."
              features={[
                "Visual workflow designer",
                "200+ app integrations",
                "Conditional logic & branching",
                "Error handling & retry logic",
                "Real-time execution monitoring",
                "Custom webhook support"
              ]}
              pricing="$29-299/month"
              marketSize="$5.1B workflow automation market"
              icon="⚡"
            />
            <MicroSaaSCard
              title="Data Backup & Recovery"
              description="Automated data backup with point-in-time recovery, cross-platform sync, and disaster recovery planning."
              features={[
                "Automated backup scheduling",
                "Point-in-time recovery",
                "Cross-platform synchronization",
                "Disaster recovery planning",
                "Encryption & security",
                "Compliance reporting"
              ]}
              pricing="$19-199/month"
              marketSize="$3.4B data backup market"
              icon="💾"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with market insights to create profitable, scalable micro SaaS products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Market-Validated"
            description="Every solution is based on real market needs and validated business models."
          />
          <FeatureCard
            title="Rapid Development"
            description="From concept to launch in 4-12 weeks with modern development practices."
          />
          <FeatureCard
            title="Revenue-Focused"
            description="Built with monetization in mind, featuring proven pricing strategies and payment integration."
          />
          <FeatureCard
            title="Scalable Architecture"
            description="Cloud-native architecture designed to handle growth from startup to enterprise scale."
          />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="MVP Sprint"
            price="$8,000 - $20,000"
            duration="2-4 weeks"
            features={[
              "Core functionality development",
              "Basic UI/UX design",
              "Stripe payment integration",
              "User authentication",
              "Basic analytics",
              "Deployment & hosting setup"
            ]}
            bestFor="Startups and entrepreneurs"
          />
          <PricingCard
            name="Growth Package"
            price="$20,000 - $60,000"
            duration="6-10 weeks"
            features={[
              "Full-featured application",
              "Advanced UI/UX design",
              "SEO-optimized marketing site",
              "Email marketing integration",
              "Advanced analytics & reporting",
              "API development",
              "Mobile responsiveness",
              "Performance optimization"
            ]}
            bestFor="Growing businesses"
            popular={true}
          />
          <PricingCard
            name="Enterprise Scale"
            price="$60,000+"
            duration="Custom timeline"
            features={[
              "Enterprise-grade architecture",
              "Multi-tenant support",
              "Advanced security features",
              "Custom integrations",
              "White-label options",
              "24/7 monitoring & support",
              "SLA guarantees",
              "Custom development"
            ]}
            bestFor="Large enterprises"
          />
        </div>
      </section>

      <section className="py-12 bg-blue-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your idea and create a custom solution that generates real revenue. 
            Our team has launched 50+ successful micro SaaS products with combined revenue of $2M+.
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
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function MicroSaaSCard({ 
  title, 
  description, 
  features, 
  pricing, 
  marketSize, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  marketSize: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-blue-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  bestFor, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  bestFor: string; 
  popular?: boolean; 
}) {
  return (
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}