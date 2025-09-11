export const metadata = {
  title: 'AI Marketing Automation | Zion Tech Group',
  description: 'AI-powered marketing automation for better campaign performance.',
  keywords: 'ai-marketing-automation, services, business, technology'
}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional page solutions for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <p className="text-gray-600 mb-4">
              Advanced features and capabilities for your business needs.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai-marketing-automation solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

export default function AIMarketingAutomationPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-pink-50 to-purple-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Marketing Automation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your marketing with AI-driven personalization, predictive analytics, and automated campaign optimization. 
          Our platform increases conversion rates by 60% and reduces marketing costs by 40%.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          title="AI-Powered Campaigns"
          features={[
            'Automated email marketing sequences',
            'Social media content generation',
            'Personalized ad targeting',
            'A/B testing optimization',
            'Cross-channel campaign orchestration',
            'Real-time campaign adjustments',
          ]}
          icon="📧"
        />
        <FeatureCard
          title="Customer Segmentation"
          features={[
            'AI-driven customer profiling',
            'Behavioral segmentation',
            'Predictive customer scoring',
            'Dynamic audience creation',
            'Lifecycle stage identification',
            'Churn prediction & prevention',
          ]}
          icon="🎯"
        />
        <FeatureCard
          title="Analytics & Optimization"
          features={[
            'Real-time performance tracking',
            'ROI analysis & attribution',
            'Predictive analytics & forecasting',
            'Automated optimization recommendations',
            'Customer journey mapping',
            'Competitive intelligence',
          ]}
          icon="📊"
        />
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Marketing Automation Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              300% ROI Increase
            </h3>
            <p className="text-gray-600">
              AI optimization boosts marketing returns
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              75% Time Savings
            </h3>
            <p className="text-gray-600">
              Automated workflows reduce manual tasks
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              45% Higher Engagement
            </h3>
            <p className="text-gray-600">
              Personalized content drives better results
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              50% Cost Reduction
            </h3>
            <p className="text-gray-600">
              Efficient automation reduces ad spend waste
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Marketing Automation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform learns from customer behavior to deliver personalized experiences at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="AI-Powered Personalization"
            description="Machine learning algorithms analyze customer behavior to deliver highly personalized content, offers, and experiences."
            benefits={[
              "Real-time personalization",
              "Behavioral analysis",
              "Dynamic content",
              "Cross-channel consistency"
            ]}
          />
          <FeatureCard
            icon="📧"
            title="Smart Email Campaigns"
            description="AI optimizes email timing, subject lines, content, and send frequency for maximum engagement and conversion."
            benefits={[
              "Optimal send timing",
              "Subject line optimization",
              "Content personalization",
              "A/B testing automation"
            ]}
          />
          <FeatureCard
            icon="📱"
            title="Social Media Automation"
            description="Intelligent social media management with AI-generated content, optimal posting times, and engagement optimization."
            benefits={[
              "Content generation",
              "Optimal posting times",
              "Engagement optimization",
              "Multi-platform management"
            ]}
          />
          <FeatureCard
            icon="🔍"
            title="Advanced Lead Scoring"
            description="AI analyzes lead behavior, demographics, and engagement to score and prioritize leads for maximum conversion."
            benefits={[
              "Behavioral scoring",
              "Predictive analytics",
              "Lead prioritization",
              "Conversion optimization"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Advanced analytics predict customer lifetime value, churn risk, and optimal marketing spend allocation."
            benefits={[
              "Lifetime value prediction",
              "Churn prevention",
              "Budget optimization",
              "ROI forecasting"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Chatbot & AI Assistants"
            description="Intelligent chatbots handle customer inquiries, qualify leads, and provide personalized recommendations 24/7."
            benefits={[
              "24/7 availability",
              "Lead qualification",
              "Personalized responses",
              "Multi-language support"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that scales with your marketing needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$199"
            period="per month"
            description="Perfect for small businesses and startups"
            features={[
              "Up to 10,000 contacts",
              "Basic AI personalization",
              "Email automation",
              "Social media scheduling",
              "Basic analytics",
              "Email support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$499"
            period="per month"
            description="Most popular for growing businesses"
            features={[
              "Up to 50,000 contacts",
              "Advanced AI features",
              "Multi-channel campaigns",
              "Lead scoring",
              "Priority support",
              "API access",
              "Advanced analytics"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$1,299"
            period="per month"
            description="For large organizations"
            features={[
              "Unlimited contacts",
              "All AI features",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Custom integrations",
              "SLA guarantee"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Marketing Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI-powered marketing automation has transformed businesses across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudy
            company="E-commerce Plus"
            industry="E-commerce"
            result="60% increase in conversion rates"
            description="Implemented AI personalization and automated email campaigns, resulting in 60% higher conversion rates and 45% increase in average order value."
            metrics={["60% conversion increase", "45% higher AOV", "50% more engaged users"]}
          />
          <CaseStudy
            company="SaaS Startup"
            industry="Software"
            result="70% improvement in lead quality"
            description="Used AI lead scoring and automated nurturing to improve lead quality and reduce sales cycle time by 40%."
            metrics={["70% better lead quality", "40% faster sales cycle", "80% more qualified leads"]}
          />
          <CaseStudy
            company="Retail Chain"
            industry="Retail"
            result="50% reduction in marketing costs"
            description="Deployed AI budget optimization and predictive analytics to reduce marketing costs while maintaining the same level of performance."
            metrics={["50% cost reduction", "35% better ROI", "60% more efficient campaigns"]}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Marketing Scale</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is built on enterprise-grade technology for maximum performance and reliability.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React", icon: "⚛️", description: "Frontend framework" },
            { name: "Node.js", icon: "🟢", description: "Backend runtime" },
            { name: "PostgreSQL", icon: "🐘", description: "Primary database" },
            { name: "Redis", icon: "🔴", description: "Caching layer" },
            { name: "OpenAI GPT-4", icon: "🧠", description: "AI engine" },
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "SendGrid", icon: "📧", description: "Email delivery" },
            { name: "HubSpot", icon: "🔗", description: "CRM integration" },
            { name: "MongoDB", icon: "🍃", description: "Document store" },
            { name: "Grafana", icon: "📊", description: "Monitoring" }
          ].map((tech, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 400+ marketers using our AI platform to create more effective campaigns and drive better results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation Platform Demo"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
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

function FeatureCard({ icon, title, description, benefits }: {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Marketing Automation Pricing
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter Marketing"
          price="$149/mo"
          duration="Up to 10,000 contacts"
          features={[
            'Basic email automation',
            'Simple segmentation',
            'Standard templates',
            'Basic analytics',
            'Email support',
            'Mobile app access',
          ]}
          popular={false}
        />
        <PricingCard
          name="Professional Marketing"
          price="$399/mo"
          duration="Up to 50,000 contacts"
          features={[
            'Everything in Starter Marketing',
            'AI-powered personalization',
            'Advanced automation workflows',
            'Multi-channel campaigns',
            'Advanced analytics & reporting',
            'API access & integrations',
            'Priority support',
          ]}
          popular={true}
        />
        <PricingCard
          name="Enterprise Marketing"
          price="$999/mo"
          duration="Unlimited contacts"
          features={[
            'Everything in Professional Marketing',
            'Custom AI model development',
            'Advanced security & compliance',
            'Dedicated marketing strategist',
            'Custom integrations',
            'White-label options',
            '24/7 phone support',
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  duration,
  features,
  popular,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-yellow-500 shadow-lg' : 'border-gray-200'}`}
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
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-yellow-600 text-white hover:bg-yellow-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function CaseStudy({ company, industry, result, description, metrics }: {
  company: string;
  industry: string;
  result: string;
  description: string;
  metrics: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{company}</h3>
        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{industry}</span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        <div className="text-sm">
          <span className="font-semibold text-green-600">Result: </span>
          <span className="text-gray-700">{result}</span>
        </div>
        <div className="space-y-1">
          {metrics.map((metric, index) => (
            <div key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
              {metric}
            </div>
          ))}
        </div>
      </div>
export default function AIMarketingAutomationPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-pink-50 to-purple-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Marketing Automation Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Revolutionize your marketing with AI-powered automation that personalizes every customer interaction, 
          optimizes campaigns in real-time, and increases conversion rates by 65% with intelligent insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Marketing Automation Demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Request Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Marketing Automation</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform transforms your marketing with smart automation and personalized customer experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="AI Customer Segmentation"
            description="Automatically segment customers based on behavior, preferences, and predicted lifetime value using machine learning."
            benefits={[
              "Behavioral segmentation",
              "Predictive modeling",
              "Dynamic segments",
              "Custom criteria",
              "Real-time updates"
            ]}
          />
          <FeatureCard
            icon="📧"
            title="Smart Email Campaigns"
            description="AI-powered email marketing with personalized content, optimal send times, and automated A/B testing."
            benefits={[
              "Personalized content",
              "Send time optimization",
              "Subject line testing",
              "Content optimization",
              "Performance tracking"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Automated Lead Nurturing"
            description="Intelligent lead nurturing sequences that adapt based on customer behavior and engagement patterns."
            benefits={[
              "Behavioral triggers",
              "Multi-channel nurturing",
              "Content personalization",
              "Lead scoring",
              "Conversion optimization"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Advanced analytics that predict customer behavior, campaign performance, and optimal marketing strategies."
            benefits={[
              "Behavior prediction",
              "Campaign forecasting",
              "ROI optimization",
              "Trend analysis",
              "Performance insights"
            ]}
          />
          <FeatureCard
            icon="🎨"
            title="AI Content Generation"
            description="Automated content creation for ads, emails, and social media with brand voice consistency and optimization."
            benefits={[
              "Content automation",
              "Brand voice training",
              "Multi-format generation",
              "SEO optimization",
              "Performance testing"
            ]}
          />
          <FeatureCard
            icon="📱"
            title="Cross-Channel Orchestration"
            description="Seamlessly coordinate marketing campaigns across email, social media, SMS, and web channels."
            benefits={[
              "Multi-channel campaigns",
              "Unified customer journey",
              "Channel optimization",
              "Message consistency",
              "Performance tracking"
            ]}
          />
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Marketing Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI marketing automation platform delivers measurable improvements across all key marketing metrics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">65%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Higher Conversion</div>
            <div className="text-sm text-gray-600">Average increase in conversion rates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">More Leads</div>
            <div className="text-sm text-gray-600">Increase in qualified lead generation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Cost Reduction</div>
            <div className="text-sm text-gray-600">Reduction in cost per acquisition</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">80%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Time Saved</div>
            <div className="text-sm text-gray-600">Reduction in manual marketing tasks</div>
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Channel Marketing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach your customers across all touchpoints with intelligent, coordinated campaigns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Marketing</h3>
            <p className="text-gray-600 mb-4">AI-powered email campaigns with personalization and optimization.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Personalized content
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Send time optimization
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                A/B testing automation
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

}
