import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {

};

export default function ServicePage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Code Reviewer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
Automated code review and quality analysis powered by advanced AI.
          Improve code quality, catch bugs early, and maintain consistent coding
          standards across your team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
<h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🔍"
              title="Intelligent Code Analysis"
              description="AI-powered analysis that understands context, patterns, and best practices to provide meaningful feedback."
            />
            <FeatureItem
              icon="🐛"
              title="Bug Detection"
              description="Automatically identify potential bugs, security vulnerabilities, and performance issues before they reach production."
            />
            <FeatureItem
              icon="📏"
              title="Code Quality Metrics"
              description="Comprehensive quality metrics including complexity, maintainability, test coverage, and technical debt analysis."
            />
            <FeatureItem
              icon="🎯"
              title="Custom Rules Engine"
              description="Define custom coding standards and rules specific to your team's requirements and project needs."
            />
            <FeatureItem
              icon="⚡"
              title="Real-time Feedback"
              description="Get instant feedback as you code with IDE integrations and continuous analysis during development."
            />
            <FeatureItem
              icon="📊"
              title="Team Analytics"
              description="Track code quality trends, team performance metrics, and improvement areas across your organization."
            />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ai Code Reviewer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our advanced ai code reviewer solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link href="/services" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors">
              View All Services
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

function FeatureItem({
icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
<div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  price,
period,
  description,
  features,
  popular,
}: {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
    >
      {popular && (
        <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600 ml-1">{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
<div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
