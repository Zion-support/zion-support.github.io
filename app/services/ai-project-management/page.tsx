import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI-Powered Project Management Platform | Zion Tech Group',
  description: 'Intelligent project management with AI task prioritization, resource optimization, risk prediction, and automated reporting. Increase team productivity by 50% with smart project insights.',
  keywords: 'AI project management, task automation, resource optimization, project analytics, team productivity, smart scheduling'
};

export default function AIProjectManagementPage() {
  return (
<div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Project Management
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your project management with AI-driven insights, automated task prioritization, and intelligent resource allocation. 
          Our platform increases team productivity by 50% and reduces project delays by 70%.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Platform Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Free Trial
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Project Management</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform learns from your team's patterns to optimize workflows and predict project outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="AI Task Prioritization"
            description="Machine learning algorithms analyze project requirements, team capacity, and deadlines to automatically prioritize tasks for maximum efficiency."
            benefits={[
              "Automatic task ranking",
              "Deadline optimization",
              "Resource-aware scheduling",
              "Dynamic priority updates"
            ]}
          />
          <FeatureCard
            icon="👥"
            title="Smart Resource Allocation"
            description="AI analyzes team skills, workload, and availability to automatically assign tasks to the most suitable team members."
            benefits={[
              "Skill-based matching",
              "Workload balancing",
              "Availability optimization",
              "Conflict resolution"
            ]}
          />
          <FeatureCard
            icon="⚠️"
            title="Risk Prediction & Mitigation"
            description="Advanced analytics predict potential project risks and suggest mitigation strategies before they impact delivery."
            benefits={[
              "Early risk detection",
              "Mitigation recommendations",
              "Impact assessment",
              "Preventive actions"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Automated Reporting"
            description="AI generates comprehensive project reports, status updates, and stakeholder communications automatically."
            benefits={[
              "Real-time dashboards",
              "Automated status updates",
              "Stakeholder notifications",
              "Custom report templates"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Workflow Optimization"
            description="AI analyzes team workflows and suggests improvements to eliminate bottlenecks and increase efficiency."
            benefits={[
              "Bottleneck identification",
              "Process optimization",
              "Efficiency recommendations",
              "Continuous improvement"
            ]}
          />
          <FeatureCard
            icon="💬"
            title="Smart Communication"
            description="AI-powered communication tools ensure all team members stay informed and aligned on project goals."
            benefits={[
              "Context-aware notifications",
              "Meeting optimization",
              "Documentation automation",
              "Knowledge sharing"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that scales with your team. All plans include our core AI features and 24/7 support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Team"
            price="$29"
            period="per user/month"
            description="Perfect for small teams up to 10 members"
            features={[
              "Up to 10 team members",
              "AI task prioritization",
              "Basic resource allocation",
              "Project templates",
              "Mobile app access",
              "Email support"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$49"
            period="per user/month"
            description="Most popular for growing teams"
            features={[
              "Up to 50 team members",
              "Advanced AI features",
              "Risk prediction",
              "Custom workflows",
              "API access",
              "Priority support",
              "Advanced analytics"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$99"
            period="per user/month"
            description="For large organizations"
            features={[
              "Unlimited team members",
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our AI-powered project management has transformed teams across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudy
            company="TechCorp Solutions"
            industry="Software Development"
            result="50% increase in project delivery speed"
            description="Implemented AI task prioritization and resource allocation, resulting in 50% faster project delivery and 30% reduction in overtime."
            metrics={["50% faster delivery", "30% less overtime", "40% better resource utilization"]}
          />
          <CaseStudy
            company="Marketing Agency Pro"
            industry="Marketing"
            result="70% reduction in project delays"
            description="Used AI risk prediction and workflow optimization to eliminate bottlenecks and improve project predictability."
            metrics={["70% fewer delays", "60% better deadline adherence", "45% improved client satisfaction"]}
          />
          <CaseStudy
            company="Construction Plus"
            industry="Construction"
            result="35% improvement in resource efficiency"
            description="Deployed smart resource allocation and automated reporting to optimize construction project management."
            metrics={["35% efficiency gain", "25% cost reduction", "50% better communication"]}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Scale and Reliability</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is built on enterprise-grade technology for maximum performance and security.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React", icon: "⚛️", description: "Frontend framework" },
            { name: "Next.js", icon: "▲", description: "Full-stack framework" },
            { name: "Node.js", icon: "🟢", description: "Backend runtime" },
            { name: "PostgreSQL", icon: "🐘", description: "Primary database" },
            { name: "Redis", icon: "🔴", description: "Caching layer" },
            { name: "OpenAI GPT-4", icon: "🧠", description: "AI engine" },
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "MongoDB", icon: "🍃", description: "Document store" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" },
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
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 300+ teams using our AI-powered platform to deliver projects faster and more efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Platform Demo"
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
  title: 'AI Project Management Platform | Zion Tech Group',
  description: 'Intelligent project management with AI-driven task prioritization, resource optimization, and predictive analytics. Increase team productivity by 45% with smart automation.',
  keywords: 'AI project management, task automation, resource optimization, team productivity, project analytics, smart scheduling'
};

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

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
<div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
function PricingTier({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular?: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
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
href="mailto:kleber@ziontechgroup.com?subject=AI Project Management - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
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
export default function AIProjectManagementPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Project Management Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your project management with AI that learns from your team's patterns, optimizes resource allocation, 
          and predicts project risks. Increase team productivity by 45% with intelligent automation and insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Demo"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Project Management</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform goes beyond traditional project management with smart automation and predictive insights.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎯"
            title="AI Task Prioritization"
            description="Automatically prioritize tasks based on deadlines, dependencies, team capacity, and business impact using machine learning."
            benefits={[
              "Smart task ranking",
              "Dependency analysis",
              "Resource optimization",
              "Deadline management",
              "Impact assessment"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Predictive Analytics"
            description="Forecast project completion dates, identify potential bottlenecks, and predict resource needs with advanced AI models."
            benefits={[
              "Completion forecasting",
              "Bottleneck detection",
              "Resource prediction",
              "Risk assessment",
              "Timeline optimization"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Smart Automation"
            description="Automate routine project tasks, status updates, and notifications based on project progress and team behavior patterns."
            benefits={[
              "Automated status updates",
              "Smart notifications",
              "Task assignment",
              "Progress tracking",
              "Workflow automation"
            ]}
          />
          <FeatureCard
            icon="👥"
            title="Team Optimization"
            description="AI-driven team member matching, workload balancing, and skill-based task assignment for maximum efficiency."
            benefits={[
              "Skill-based matching",
              "Workload balancing",
              "Team performance insights",
              "Capacity planning",
              "Collaboration optimization"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Performance Analytics"
            description="Deep insights into team productivity, project velocity, and individual performance with actionable recommendations."
            benefits={[
              "Productivity metrics",
              "Velocity tracking",
              "Performance insights",
              "Improvement suggestions",
              "ROI analysis"
            ]}
          />
          <FeatureCard
            icon="🔮"
            title="Risk Prediction"
            description="Identify potential project risks, resource conflicts, and timeline issues before they become problems."
            benefits={[
              "Risk identification",
              "Early warning system",
              "Mitigation strategies",
              "Resource conflict detection",
              "Timeline risk analysis"
            ]}
          />
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI project management platform delivers measurable improvements in team productivity and project success rates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">45%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Productivity Increase</div>
            <div className="text-sm text-gray-600">Average improvement in team efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Faster Delivery</div>
            <div className="text-sm text-gray-600">Reduction in project completion time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Risk Reduction</div>
            <div className="text-sm text-gray-600">Fewer project delays and overruns</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">Cost Savings</div>
            <div className="text-sm text-gray-600">Reduction in project management overhead</div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI project management platform is designed for teams and organizations of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Teams</h3>
            <p className="text-gray-600 mb-4">Large organizations managing complex, multi-team projects with advanced resource allocation needs.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Multi-team coordination
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Advanced resource management
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Enterprise integrations
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Startups & SMBs</h3>
            <p className="text-gray-600 mb-4">Growing companies that need efficient project management without the complexity of enterprise tools.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Quick setup & onboarding
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Cost-effective scaling
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Agile methodologies
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Agencies</h3>
            <p className="text-gray-600 mb-4">Marketing and creative agencies managing multiple client projects with varying timelines and requirements.</p>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Client project tracking
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Resource allocation
              </li>
              <li className="text-sm text-gray-600 flex items-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                Deadline management
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team size and project complexity. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Team"
            price="$29"
            period="user/month"
            description="Perfect for small teams and startups"
            features={[
              "Up to 10 users",
              "AI task prioritization",
              "Basic automation",
              "Project templates",
              "Mobile app access",
              "Email support"
            ]}
          />
          <PricingTier
            name="Professional"
            price="$59"
            period="user/month"
            description="Most popular for growing teams"
            features={[
              "Up to 50 users",
              "Full AI suite",
              "Advanced analytics",
              "Custom workflows",
              "API access",
              "Priority support",
              "Advanced reporting"
            ]}
            popular={true}
          />
          <PricingTier
            name="Enterprise"
            price="$99"
            period="user/month"
            description="For large organizations with complex needs"
            features={[
              "Unlimited users",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Advanced security",
              "Custom integrations",
              "On-premise deployment"
            ]}
          />
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with your existing tools and workflows for a unified project management experience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "Slack", icon: "💬" },
            { name: "Microsoft Teams", icon: "🔵" },
            { name: "Jira", icon: "🔧" },
            { name: "Asana", icon: "📋" },
            { name: "Trello", icon: "📌" },
            { name: "GitHub", icon: "🐙" },
            { name: "GitLab", icon: "🦊" },
            { name: "Bitbucket", icon: "🪣" },
            { name: "Google Workspace", icon: "🔍" },
            { name: "Microsoft 365", icon: "📊" },
            { name: "Zoom", icon: "📹" },
            { name: "Calendly", icon: "📅" }
          ].map((integration, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{integration.icon}</div>
              <h3 className="font-semibold text-gray-900 text-sm">{integration.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join hundreds of teams already using our AI-powered project management platform to boost productivity and deliver projects on time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Inquiry"
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
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}
