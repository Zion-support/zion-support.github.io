import React from 'react';

export const metadata = {
  title: 'AI Project Management Suite | Zion Tech Group',
  description: 'Intelligent project management with AI task automation, resource optimization, and risk prediction. Boost productivity by 40% with smart project insights.',
  keywords: 'AI project management, project automation, task management, resource optimization, risk prediction, team collaboration'
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
      <div className="text-4xl mb-4">{icon}</div>
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

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
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
        {cta}
      </a>
    </div>
  );
}

export default function AIProjectManagementPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-indigo-50 to-purple-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Project Management Suite
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your project management with AI-powered automation, resource optimization, and risk prediction. Boost team productivity by 40% with intelligent insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Demo
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Project Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI project management suite uses machine learning to optimize every aspect of your project workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Task Automation"
            description="Automatically assign tasks, set priorities, and create dependencies based on team capacity and project requirements"
            benefits={[
              "Smart task assignment",
              "Priority optimization",
              "Dependency management",
              "Workload balancing",
              "Deadline prediction"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Resource Optimization"
            description="AI analyzes team skills, availability, and project needs to optimize resource allocation and utilization"
            benefits={[
              "Skill-based matching",
              "Capacity planning",
              "Resource forecasting",
              "Bottleneck detection",
              "Efficiency optimization"
            ]}
          />
          <FeatureCard
            icon="⚠️"
            title="Risk Prediction AI"
            description="Predict potential project risks and delays using historical data and current project metrics"
            benefits={[
              "Risk identification",
              "Delay prediction",
              "Mitigation suggestions",
              "Early warning system",
              "Impact assessment"
            ]}
          />
          <FeatureCard
            icon="📈"
            title="Performance Analytics"
            description="Comprehensive analytics with AI insights to track team performance and project progress"
            benefits={[
              "Real-time dashboards",
              "Performance metrics",
              "Trend analysis",
              "ROI tracking",
              "Predictive insights"
            ]}
          />
          <FeatureCard
            icon="💬"
            title="Smart Collaboration"
            description="AI-powered communication tools that facilitate better team collaboration and knowledge sharing"
            benefits={[
              "Intelligent notifications",
              "Context-aware suggestions",
              "Meeting optimization",
              "Knowledge management",
              "Team insights"
            ]}
          />
          <FeatureCard
            icon="🎯"
            title="Goal Tracking"
            description="AI-driven goal setting and tracking with automatic progress monitoring and adjustment recommendations"
            benefits={[
              "Smart goal setting",
              "Progress tracking",
              "Milestone management",
              "Achievement prediction",
              "Course correction"
            ]}
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI project management suite transforms your workflow in four intelligent steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Setup</h3>
            <p className="text-gray-600">
              Define your project goals, team structure, and requirements. AI analyzes your inputs to create an optimal project framework.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Planning</h3>
            <p className="text-gray-600">
              AI creates detailed project plans, assigns tasks optimally, and sets realistic timelines based on team capacity and historical data.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Execution</h3>
            <p className="text-gray-600">
              AI monitors progress, predicts risks, optimizes resource allocation, and provides real-time insights to keep projects on track.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
            <p className="text-gray-600">
              AI learns from project outcomes to improve future planning, resource allocation, and risk prediction accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored project management solutions for different industries and team structures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              industry: "Software Development",
              icon: "💻",
              description: "Agile project management with sprint planning and code integration",
              features: ["Sprint planning", "Code integration", "Bug tracking", "Release management"]
            },
            {
              industry: "Marketing Agencies",
              icon: "🎯",
              description: "Campaign management with client collaboration and creative workflows",
              features: ["Campaign tracking", "Client portals", "Creative approval", "Budget management"]
            },
            {
              industry: "Construction",
              icon: "🏗️",
              description: "Project management with safety compliance and resource tracking",
              features: ["Safety compliance", "Resource tracking", "Timeline management", "Quality control"]
            },
            {
              industry: "Healthcare",
              icon: "🏥",
              description: "Patient care projects with compliance and quality assurance",
              features: ["Compliance tracking", "Quality assurance", "Patient safety", "Regulatory reporting"]
            },
            {
              industry: "Education",
              icon: "🎓",
              description: "Academic project management with curriculum development and assessment",
              features: ["Curriculum planning", "Assessment tracking", "Faculty coordination", "Student progress"]
            },
            {
              industry: "Consulting",
              icon: "💼",
              description: "Client project management with deliverable tracking and billing",
              features: ["Client management", "Deliverable tracking", "Time tracking", "Billing integration"]
            }
          ].map((solution, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.industry}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-1">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team size and project complexity. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Team"
            price="$99"
            period="month"
            description="Perfect for small teams up to 10 members"
            features={[
              "Up to 10 team members",
              "Basic AI features",
              "Project templates",
              "Basic analytics",
              "Email support",
              "Mobile app"
            ]}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Professional"
            price="$299"
            period="month"
            description="Most popular for growing teams"
            features={[
              "Up to 50 team members",
              "Advanced AI features",
              "Custom workflows",
              "Advanced analytics",
              "Priority support",
              "API access"
            ]}
            popular={true}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Enterprise"
            price="$799"
            period="month"
            description="For large organizations"
            features={[
              "Unlimited team members",
              "Custom AI models",
              "White-label solution",
              "Advanced reporting",
              "Dedicated support",
              "Custom integrations"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how teams have transformed their project management with our AI suite.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "Software Development Team",
              industry: "Technology",
              result: "40% productivity boost",
              description: "Reduced project delivery time by 40% and improved team efficiency with AI-powered task assignment and resource optimization."
            },
            {
              company: "Marketing Agency",
              industry: "Services",
              result: "60% faster project completion",
              description: "Streamlined campaign management and reduced project completion time by 60% with intelligent workflow automation."
            },
            {
              company: "Construction Company",
              industry: "Construction",
              result: "25% cost reduction",
              description: "Optimized resource allocation and reduced project costs by 25% while improving safety compliance and quality control."
            }
          ].map((story, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="text-sm text-blue-600 font-semibold mb-2">{story.industry}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.company}</h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-2xl font-bold text-green-600">{story.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how AI can revolutionize your team's productivity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Management Free Trial"
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