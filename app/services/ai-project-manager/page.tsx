import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'AI Project Manager | Zion Tech Group - Intelligent Project Management Platform',
  description: 'Revolutionary AI-powered project management platform with predictive analytics, automated resource allocation, risk assessment, and intelligent task optimization.',
  keywords: 'AI project management, project management software, AI PM, project automation, resource optimization, project analytics, team collaboration'
};

export default function AIProjectManagerPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Project Manager
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your project management with AI-powered intelligence. 
          Predict risks, optimize resources, and deliver projects on time with our revolutionary platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Manager Inquiry"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Project Management</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform goes beyond traditional project management to deliver predictive insights and automated optimization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🔮"
            title="Predictive Risk Assessment"
            description="AI analyzes project patterns to predict potential risks and suggest mitigation strategies before they impact your timeline."
            features={[
              "Risk pattern recognition",
              "Early warning alerts",
              "Mitigation recommendations",
              "Historical data analysis",
              "Custom risk models"
            ]}
          />
          <FeatureCard
            icon="⚡"
            title="Smart Resource Optimization"
            description="Automatically allocate team members, budget, and resources based on skills, availability, and project requirements."
            features={[
              "Skill-based matching",
              "Workload balancing",
              "Budget optimization",
              "Timeline adjustment",
              "Resource forecasting"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Intelligent Analytics Dashboard"
            description="Comprehensive project insights with AI-powered recommendations for improving performance and delivery success."
            features={[
              "Performance predictions",
              "Bottleneck identification",
              "Success probability scoring",
              "Custom KPI tracking",
              "Trend analysis"
            ]}
          />
          <FeatureCard
            icon="🤖"
            title="Automated Task Management"
            description="AI automatically creates, prioritizes, and assigns tasks based on project goals, dependencies, and team capabilities."
            features={[
              "Smart task creation",
              "Priority optimization",
              "Dependency mapping",
              "Auto-assignment",
              "Progress tracking"
            ]}
          />
          <FeatureCard
            icon="💬"
            title="AI Project Assistant"
            description="Intelligent chatbot that answers questions, provides insights, and helps team members stay aligned with project goals."
            features={[
              "Natural language queries",
              "Project status updates",
              "Team communication",
              "Documentation assistance",
              "Meeting summaries"
            ]}
          />
          <FeatureCard
            icon="🎯"
            title="Success Prediction Engine"
            description="Machine learning models predict project success probability and suggest adjustments to improve outcomes."
            features={[
              "Success probability scoring",
              "Intervention recommendations",
              "Timeline adjustments",
              "Resource reallocation",
              "Quality assurance"
            ]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Pricing for Every Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team size and project complexity. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            price="$49"
            period="per user/month"
            description="Perfect for small teams and simple projects"
            features={[
              "Up to 5 projects",
              "Basic AI features",
              "Team collaboration",
              "Mobile app access",
              "Email support",
              "Standard templates"
            ]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$99"
            period="per user/month"
            description="Ideal for growing teams with complex projects"
            features={[
              "Unlimited projects",
              "Advanced AI analytics",
              "Resource optimization",
              "Risk assessment",
              "Custom integrations",
              "Priority support",
              "Advanced reporting"
            ]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$199"
            period="per user/month"
            description="Complete solution for large organizations"
            features={[
              "Unlimited everything",
              "Custom AI models",
              "White-label options",
              "Dedicated support",
              "Advanced security",
              "API access",
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
            Our clients have achieved remarkable improvements in project delivery and team productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessCard
            company="TechCorp Solutions"
            industry="Software Development"
            result="40% faster project delivery"
            description="Reduced average project completion time from 6 months to 3.6 months using AI-powered resource optimization."
          />
          <SuccessCard
            company="Global Marketing Agency"
            industry="Marketing"
            result="95% on-time delivery rate"
            description="Improved project success rate from 60% to 95% with predictive risk assessment and automated task management."
          />
          <SuccessCard
            company="Manufacturing Inc"
            industry="Manufacturing"
            result="$2.3M cost savings"
            description="Saved $2.3M annually through optimized resource allocation and reduced project delays."
          />
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Project ROI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much time and money you can save with AI-powered project management.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Without AI Project Manager</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Project delays (days/month):</span>
                  <span className="font-semibold">15 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Resource inefficiency:</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Project failure rate:</span>
                  <span className="font-semibold">30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Manual reporting hours:</span>
                  <span className="font-semibold">40 hours</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Monthly Cost Impact:</span>
                    <span className="text-red-600">$15,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">With AI Project Manager</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Reduced delays:</span>
                  <span className="font-semibold text-green-600">-12 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Resource optimization:</span>
                  <span className="font-semibold text-green-600">+20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success rate improvement:</span>
                  <span className="font-semibold text-green-600">+25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Automated reporting:</span>
                  <span className="font-semibold text-green-600">-35 hours</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Monthly Savings:</span>
                    <span className="text-green-600">$12,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Project Management?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule a personalized demo and discover how AI can revolutionize your project delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Project Manager - Demo Request"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Free Demo
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

function FeatureCard({ icon, title, description, features }: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
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
    <div className={`p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-2">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={`mailto:kleber@ziontechgroup.com?subject=AI Project Manager - ${name} Plan Inquiry`}
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
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

function SuccessCard({ company, industry, result, description }: {
  company: string;
  industry: string;
  result: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{company}</h3>
      <p className="text-sm text-gray-600 mb-3">{industry}</p>
      <div className="text-2xl font-bold text-blue-600 mb-3">{result}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}