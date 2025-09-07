<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Ai Code Reviewer - Zion Tech Group',
  description: 'Professional ai code reviewer solutions for your business needs.',
};

export default function AiCodeReviewerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
=======
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
export const metadata = {
  title: 'Ai Code Reviewer | Zion Tech Group',
  description: 'Professional ai code reviewer services for your business needs.',
  keywords: 'ai-code-reviewer, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ai Code Reviewer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ai code reviewer services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai code reviewer solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai code reviewer solutions run smoothly.
            </p>
          </div>
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}

function FeatureItem({
  icon: _icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  plan,
  price,
  period: _period,
  description,
  features,
  popular,
}: {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
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
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
=======
}
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
