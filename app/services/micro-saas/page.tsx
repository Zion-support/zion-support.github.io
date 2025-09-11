export default function MicroSaaSPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From MVP to scale, we handle every aspect of your product journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          title="Core Features" 
          features={[
            "Multi-tenant architecture",
            "Authentication (email, OAuth, SSO)",
            "Billing & subscriptions (Stripe, PayPal)",
            "Admin dashboard & analytics",
            "In-app onboarding & tutorials",
            "API development & documentation"
          ]}
          icon="🚀"
        />
        <FeatureCard 
          title="Growth Stack" 
          features={[
            "SEO-optimized marketing site",
            "Blog & documentation system",
            "Email marketing automation",
            "Referral & affiliate programs",
            "A/B testing framework",
            "Analytics & conversion tracking"
          ]}
          icon="📈"
        />
        <FeatureCard 
          title="Operations & Reliability" 
          features={[
            "CI/CD pipelines",
            "Monitoring & observability",
            "Error tracking & budgets",
            "SLOs & performance metrics",
            "24/7 on-call support",
            "Disaster recovery planning"
          ]}
          icon="⚙️"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Core Features" 
          details={[
            "Multi-tenant architecture",
            "Auth (email, OAuth, SSO)",
            "Billing (Stripe, PayPal, Paddle)",
            "Admin dashboard + analytics",
            "In-app onboarding flows",
            "API rate limiting & security"
          ]} 
        />
        <Item 
          title="Growth Stack" 
          details={[
            "SEO-ready marketing site",
            "Blog + documentation",
            "Email marketing campaigns",
            "Referral + affiliate systems",
            "A/B testing framework",
            "Customer success tools"
          ]} 
        />
        <Item 
          title="Ops & Reliability" 
          details={[
            "CI/CD pipelines",
            "Monitoring & observability",
            "Error tracking & budgets",
            "SLOs & uptime guarantees",
            "On-call setup & alerts",
            "Backup & disaster recovery"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Analytics Dashboard"
            description="Real-time business intelligence and user behavior tracking"
            price="Starting at $12k"
            features={["Custom metrics", "Real-time updates", "Export capabilities", "White-label options"]
          />
          <ServiceCard
            title="Customer Portal"
            description="Self-service customer management and billing portal"
            price="Starting at $8k"
            features={["Account management", "Billing history", "Support tickets", "Document access"]
          />
          <ServiceCard
            title="API Management"
            description="Secure API gateway with rate limiting and analytics"
            price="Starting at $15k"
            features={["API documentation", "Rate limiting", "Usage analytics", "Webhook management"]
          />
          <ServiceCard
            title="Content Management"
            description="Headless CMS with multi-tenant content management"
            price="Starting at $10k"
            features={["Multi-tenant", "Version control", "Media management", "SEO optimization"]
          />
          <ServiceCard
            title="Notification System"
            description="Multi-channel notification and communication platform"
            price="Starting at $7k"
            features={["Email, SMS, Push", "Templates", "Scheduling", "Analytics"]
          />
          <ServiceCard
            title="Workflow Automation"
            description="No-code workflow builder with integrations"
            price="Starting at $18k"
            features={["Visual builder", "Integrations", "Conditional logic", "Monitoring"]
          />
        </div>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete micro SaaS development services from concept to launch. We build revenue-generating 
            micro SaaS products with modern tech stacks, billing, analytics, and growth features.
          </p>
        </div>

        {/* Core Development Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <DevelopmentArea
            title="Core Features"
            icon="⚙️"
            description="Essential functionality for micro SaaS success"
            features={[
              "Multi-tenant architecture",
              "Authentication (email, OAuth)",
              "Billing & subscriptions (Stripe)",
              "Admin dashboard & analytics",
              "In-app onboarding",
              "User management system"
            ]}
          />
          <DevelopmentArea
            title="Growth Stack"
            icon="📈"
            description="Marketing and growth optimization tools"
            features={[
              "SEO-ready marketing site",
              "Blog & documentation",
              "Email marketing campaigns",
              "Referral & affiliate systems",
              "A/B testing framework",
              "Analytics & tracking"
            ]}
          />
          <DevelopmentArea
            title="Operations & Reliability"
            icon="🔧"
            description="Production-ready infrastructure and monitoring"
            features={[
              "CI/CD pipelines",
              "Observability & monitoring",
              "Error tracking & budgets",
              "SLOs & uptime monitoring",
              "On-call setup",
              "Backup & disaster recovery"
            ]}
          />
        </div>

        {/* Featured Micro SaaS Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Micro SaaS Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MicroSaaSSolution
              title="AI Content Generator"
              description="AI-powered content creation tool for marketers and writers"
              features={[
                "Multiple content types",
                "Brand voice training",
                "SEO optimization",
                "Plagiarism detection",
                "Content calendar",
                "Team collaboration"
              ]}
              price="$15k - $45k"
              timeline="8-16 weeks"
              techStack={["Next.js", "OpenAI API", "Stripe", "PostgreSQL"]}
            />
            <MicroSaaSSolution
              title="Social Media Scheduler"
              description="Advanced social media management and scheduling platform"
              features={[
                "Multi-platform posting",
                "Content calendar",
                "Analytics dashboard",
                "Team management",
                "Hashtag research",
                "Post optimization"
              ]}
              price="$20k - $60k"
              timeline="10-20 weeks"
              techStack={["React", "Node.js", "MongoDB", "Social APIs"]}
            />
            <MicroSaaSSolution
              title="Invoice & Billing Manager"
              description="Complete invoicing and billing solution for small businesses"
              features={[
                "Invoice generation",
                "Payment processing",
                "Expense tracking",
                "Tax calculations",
                "Client portal",
                "Reporting dashboard"
              ]}
              price="$12k - $35k"
              timeline="6-12 weeks"
              techStack={["Vue.js", "Laravel", "MySQL", "Stripe"]}
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechStack
              category="Frontend"
              technologies={["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]}
            />
            <TechStack
              category="Backend"
              technologies={["Node.js", "Python", "Laravel", "Express.js", "FastAPI"]}
            />
            <TechStack
              category="Database"
              technologies={["PostgreSQL", "MongoDB", "Redis", "Supabase", "PlanetScale"]}
            />
            <TechStack
              category="Infrastructure"
              technologies={["AWS", "Vercel", "Railway", "Docker", "Kubernetes"]}
            />
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Discovery & Planning"
              description="Requirements gathering, market research, and technical architecture"
              duration="1-2 weeks"
            />
            <ProcessStep
              step="2"
              title="Design & Prototyping"
              description="UI/UX design, user flows, and interactive prototypes"
              duration="2-3 weeks"
            />
            <ProcessStep
              step="3"
              title="Development & Testing"
              description="Agile development with continuous testing and feedback"
              duration="6-16 weeks"
            />
            <ProcessStep
              step="4"
              title="Launch & Optimization"
              description="Deployment, monitoring, and performance optimization"
              duration="2-4 weeks"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Micro SaaS Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MicroSaaSPricingPlan
              name="MVP Sprint"
              price="$8k - $20k"
              duration="4-8 weeks"
              features={[
                "Core functionality only",
                "Basic authentication",
                "Stripe billing integration",
                "Simple admin dashboard",
                "Basic analytics",
                "Deployment & hosting"
              ]}
              popular={false}
            />
            <MicroSaaSPricingPlan
              name="Growth Ready"
              price="$20k - $60k"
              duration="8-16 weeks"
              features={[
                "Full feature set",
                "Advanced authentication",
                "Complete billing system",
                "Advanced analytics",
                "Marketing site",
                "Email automation",
                "SEO optimization"
              ]}
              popular={true}
            />
            <MicroSaaSPricingPlan
              name="Enterprise Scale"
              price="$60k+"
              duration="12+ weeks"
              features={[
                "Custom roadmap",
                "Multi-tenant architecture",
                "Advanced security",
                "SRE & monitoring",
                "Multi-region deployment",
                "SLA guarantees",
                "Ongoing support"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              metric="50+"
              description="Micro SaaS products launched"
              icon="🚀"
            />
            <MetricCard
              metric="$2M+"
              description="Total revenue generated"
              icon="💰"
            />
            <MetricCard
              metric="95%"
              description="Client satisfaction rate"
              icon="⭐"
            />
            <MetricCard
              metric="6 months"
              description="Average time to profitability"
              icon="📈"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your micro SaaS idea and create a revenue-generating product that scales with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
=======
export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, marketing automation, and business intelligence solutions.',
  keywords: 'micro SaaS development, SaaS products, AI tools, productivity apps, marketing automation, business intelligence'
};

export default function MicroSaaSPage() {
  return (
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
          />
        </div>
      </section>

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
          />
        </div>
      </section>

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

      <CTASection />    </div>
  );
}

      <PricingSection />
      
      <ContactSection />
    </div>
  );
}

function FeatureCard({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>          </li>
        ))}
      </ul>
=======
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
      >
        Get Started
      </a>    </div>
  );
}

<<<<<<< HEAD
function MicroSaaSPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-blue-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
=======
function PricingCard({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
<<<<<<< HEAD
function MetricCard({ metric, description, icon }: { metric: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-blue-600 mb-2">{metric}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}

export const metadata = { title: 'Micro SaaS Development | Zion Tech Group' } export default /**
 * MicroSaaSPage - Function description
 */
function MicroSaaSPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>Micro SaaS Development</h1> <p style={{margin_top: 8, color: '#374151'}}>We design, build, launch and operate revenue - generating micro SaaS products end - to - end.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Core features" details={["Multi - tenant architecture", "Auth (email, OAuth)", "Billing (Stripe)", "Admin + analytics", "In - app onboarding"]} /> <Item title="Growth stack" details={["SEO - ready marketing site", "Blog + docs", "Email campaigns", "Referral + affiliates"]} /> <Item title="Ops & reliability" details={["CI / CD", "Observability", "Error budgets", "SLOs", "On - call setup"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="MVP Sprint" price="$8k–$20k" features={["2–4 weeks", "MVP scope", "Stripe billing", "Basic analytics"]} /> <Plan name="Growth" price="$20k–$60k" features={["6–10 weeks", "SEO + content", "CRM + email", "Observability"]} /> <Plan name="Scale" price="$60k+" features={["Custom roadmap", "SRE + security", "Multi - region", "SLAs"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-sm text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
=======
function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your project and create a custom solution that drives revenue and growth for your business.
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
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>    </div>
  );
}
=======
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
}