<<<<<<< HEAD
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Micro SaaS Solutions | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services including AI-powered tools, productivity apps, business automation, and revenue-generating solutions. From MVP to enterprise scale.',
=======
export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
};

export default function MicroSaasPage() {
  return (
<<<<<<< HEAD
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
=======
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From AI-powered tools to productivity apps, we create solutions that solve real business problems.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Content Generator"
            description="Automated content creation for blogs, social media, and marketing materials"
            features={["GPT-4 integration", "Brand voice training", "SEO optimization", "Multi-language support", "Content calendar"]}
            price="$2,500-8,000"
            icon="🤖"
          />
          <ServiceCard
            title="Social Media Scheduler"
            description="Cross-platform social media management with AI-powered optimal timing"
            features={["Multi-platform posting", "AI timing optimization", "Analytics dashboard", "Team collaboration", "Content library"]}
            price="$3,000-10,000"
            icon="📱"
          />
          <ServiceCard
            title="Email Marketing Automation"
            description="Advanced email campaigns with behavioral triggers and personalization"
            features={["Drag-drop builder", "Behavioral triggers", "A/B testing", "Advanced analytics", "CRM integration"]}
            price="$4,000-12,000"
            icon="📧"
          />
          <ServiceCard
            title="Project Management Tool"
            description="Team collaboration platform with time tracking and resource management"
            features={["Kanban boards", "Time tracking", "Resource planning", "Team chat", "Reporting suite"]}
            price="$5,000-15,000"
            icon="📊"
          />
          <ServiceCard
            title="Customer Support Chatbot"
            description="AI-powered customer service with multi-channel support and ticket management"
            features={["Natural language processing", "Multi-channel support", "Ticket routing", "Knowledge base", "Analytics"]}
            price="$3,500-9,000"
            icon="💬"
          />
          <ServiceCard
            title="Analytics Dashboard"
            description="Business intelligence platform with real-time data visualization"
            features={["Real-time dashboards", "Custom reports", "Data integration", "Alerts & notifications", "Export capabilities"]}
            price="$4,500-13,000"
            icon="📈"
          />
          <MicroSaaSCard
            title="AI Content Creation Suite"
            description="Complete content marketing automation with AI writing, SEO optimization, and multi-format generation"
            features={["AI blog writing", "SEO optimization", "Social media content", "Video scripts", "Email campaigns", "Content calendar"]}
            price="$2,299/month"
            icon="✍️"
          />
          <MicroSaaSCard
            title="Smart Inventory Management"
            description="AI-powered inventory optimization with demand forecasting and automated reordering"
            features={["Demand forecasting", "Auto reordering", "Stock optimization", "Supplier management", "Cost analysis", "Multi-location sync"]}
            price="$1,899/month"
            icon="📦"
          />
          <MicroSaaSCard
            title="Lead Generation & CRM Automation"
            description="Intelligent lead scoring, nurturing, and conversion optimization with AI insights"
            features={["Lead scoring", "Auto-nurturing", "CRM integration", "Conversion tracking", "Pipeline analytics", "Follow-up automation"]}
            price="$2,199/month"
            icon="🎯"
          />
          <MicroSaaSCard
            title="AI-Powered HR Management"
            description="Complete HR automation with AI recruitment, performance tracking, and employee engagement"
            features={["AI resume screening", "Interview scheduling", "Performance analytics", "Employee surveys", "Compliance tracking", "Benefits management"]}
            price="$2,799/month"
            icon="👥"
          />
          <MicroSaaSCard
            title="Smart Document Processing"
            description="AI-powered document analysis, extraction, and workflow automation for business documents"
            features={["Document OCR", "Data extraction", "Contract analysis", "Compliance checking", "Workflow automation", "Version control"]}
            price="$1,599/month"
            icon="📄"
          />
          <MicroSaaSCard
            title="AI Sales Forecasting Platform"
            description="Advanced sales prediction and pipeline management with AI-driven insights and recommendations"
            features={["Sales forecasting", "Pipeline analysis", "Deal scoring", "Revenue prediction", "Market trends", "Performance optimization"]}
            price="$2,399/month"
            icon="📈"
          />
          <MicroSaaSCard
            title="Automated Customer Feedback System"
            description="AI-powered feedback collection, analysis, and action planning for customer experience optimization"
            features={["Multi-channel feedback", "Sentiment analysis", "Trend identification", "Action recommendations", "ROI tracking", "Competitor analysis"]}
            price="$1,299/month"
            icon="💬"
          />
          <MicroSaaSCard
            title="Smart Expense Management"
            description="AI-driven expense tracking, categorization, and approval workflows for businesses"
            features={["Receipt scanning", "Auto-categorization", "Policy compliance", "Approval workflows", "Budget tracking", "Tax preparation"]}
            price="$999/month"
            icon="💳"
          />
          <MicroSaaSCard
            title="AI Website Optimization Suite"
            description="Complete website performance optimization with AI testing, personalization, and conversion enhancement"
            features={["A/B testing", "Personalization", "Speed optimization", "SEO enhancement", "Conversion tracking", "User behavior analysis"]}
            price="$1,799/month"
            icon="🌐"
          />
          <MicroSaaSCard
            title="Automated Meeting Scheduler"
            description="AI-powered scheduling with timezone management, conflict resolution, and meeting optimization"
            features={["Smart scheduling", "Timezone handling", "Conflict resolution", "Meeting prep", "Follow-up automation", "Calendar integration"]}
            price="$799/month"
            icon="📅"
          />
          <MicroSaaSCard
            title="AI-Powered Learning Management"
            description="Intelligent training platform with personalized learning paths and progress tracking"
            features={["Personalized courses", "Progress tracking", "Skill assessment", "Certification management", "Content creation", "Analytics dashboard"]}
            price="$2,599/month"
            icon="🎓"
          />
          <MicroSaaSCard
            title="Smart Contract Management"
            description="AI-powered contract lifecycle management with risk assessment and compliance monitoring"
            features={["Contract analysis", "Risk assessment", "Renewal tracking", "Compliance monitoring", "Template library", "Digital signatures"]}
            price="$2,199/month"
            icon="📋"
          />
          <MicroSaaSCard
            title="AI Data Quality Platform"
            description="Automated data cleaning, validation, and quality monitoring for business intelligence"
            features={["Data validation", "Duplicate detection", "Quality scoring", "Auto-correction", "Monitoring alerts", "Compliance reporting"]}
            price="$1,499/month"
            icon="🔍"
          />
          <MicroSaaSCard
            title="Intelligent Backup & Recovery"
            description="AI-powered data backup with intelligent scheduling, compression, and disaster recovery planning"
            features={["Smart scheduling", "Data compression", "Incremental backups", "Recovery testing", "Compliance reporting", "Multi-cloud support"]}
            price="$1,199/month"
            icon="💾"
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
          />
        </div>
      </section>

<<<<<<< HEAD
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
=======
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            step="1"
            title="Discovery & Planning"
            description="Market research, user personas, feature specification, and technical architecture"
          />
          <ProcessStep
            step="2"
            title="Design & Prototyping"
            description="UI/UX design, user flow mapping, and interactive prototypes for validation"
          />
          <ProcessStep
            step="3"
            title="Development & Testing"
            description="Agile development with continuous testing, code reviews, and quality assurance"
          />
          <ProcessStep
            step="4"
            title="Launch & Growth"
            description="Deployment, user onboarding, marketing setup, and ongoing optimization"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechStack
            title="Frontend"
            technologies={["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Chart.js"]}
          />
          <TechStack
            title="Backend"
            technologies={["Node.js/Express", "Python/FastAPI", "PostgreSQL", "Redis", "Docker"]}
          />
          <TechStack
            title="AI/ML"
            technologies={["OpenAI GPT-4", "Hugging Face", "LangChain", "Vector DBs", "MLflow"]}
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
          />
        </div>
      </section>

<<<<<<< HEAD
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
=======
      <Pricing />
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Micro SaaS Development?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            title="Rapid Time-to-Market"
            description="Launch your MVP in 4-8 weeks with our proven development framework"
            icon="⚡"
          />
          <BenefitCard
            title="Scalable Architecture"
            description="Built for growth with cloud-native, microservices architecture"
            icon="🏗️"
          />
          <BenefitCard
            title="Revenue-Focused"
            description="Every feature designed to drive user engagement and revenue growth"
            icon="💰"
          />
          <BenefitCard
            title="24/7 Support"
            description="Round-the-clock monitoring and support for your critical systems"
            icon="🛡️"
          />
          <BenefitCard
            title="AI Integration"
            description="Leverage cutting-edge AI to differentiate your product in the market"
            icon="🧠"
          />
          <BenefitCard
            title="Growth Analytics"
            description="Built-in analytics and growth tools to optimize user acquisition and retention"
            icon="📊"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function ServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      >
        Get Started
      </a>
    </div>
  );
<<<<<<< HEAD
=======
}

function ProcessStep({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function BenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          features={["2–4 weeks", "MVP scope", "Stripe billing", "Basic analytics", "Hosting setup"]} 
          popular={false}
        />
        <Plan 
          name="Growth" 
          price="$20k–$60k" 
          features={["6–10 weeks", "SEO + content", "CRM + email", "Observability", "Advanced features"]} 
          popular={true}
        />
        <Plan 
          name="Scale" 
          price="$60k+" 
          features={["Custom roadmap", "SRE + security", "Multi-region", "SLAs", "Dedicated support"]} 
          popular={false}
        />
      </div>
    </section>
  );
<<<<<<< HEAD
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build Your Micro SaaS?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your idea and create a custom solution that drives real business value. 
        Our team of experts is ready to help you launch your next successful micro SaaS product.
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
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
    </div>
  );
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}