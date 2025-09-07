<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


export const metadata = {
  title: 'Email Automation Suite | Zion Tech Group',
  description: 'Advanced email marketing automation platform. Create, send, and track personalized email campaigns with AI-powered optimization.',
};

export default function EmailAutomationSuitePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Email Automation Suite</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced email marketing automation platform that creates, sends, and tracks personalized
          email campaigns with AI-powered optimization and behavioral targeting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Campaign Management"
          details={[
            'Drag-and-drop email builder',
            'Template library',
            'A/B testing tools',
            'Send time optimization',
            'Multi-channel campaigns',
          ]}
        />
        <FeatureCard
          title="AI Automation"
          details={[
            'Behavioral trigger automation',
            'Personalization engine',
            'Content optimization',
            'Send frequency optimization',
            'Predictive analytics',
          ]}
        />
        <FeatureCard
          title="Analytics & Insights"
          details={[
            'Real-time campaign tracking',
            'Advanced segmentation',
            'ROI analysis',
            'Customer journey mapping',
            'Performance recommendations',
          ]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Automate Your Email Marketing?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Transform your email marketing with AI-powered automation and personalization.
          Perfect for e-commerce, SaaS, and marketing teams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export const metadata = {
  title: 'Email Automation Suite | Zion Tech Group',
  description:
    'Professional email automation suite services for your business needs.',
  keywords: 'email-automation-suite, services, business, technology',
=======
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Email Automation Suite - Zion Tech Group',
  description: 'Professional email automation suite solutions for your business needs.',
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
};

export default function EmailAutomationSuitePage() {
  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Email Automation Suite
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional email automation suite services for your business
            needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored email automation suite solutions designed for your
              specific business requirements.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Advanced Technology
            </h3>
            <p className='text-gray-300'>
              Cutting-edge technology and best practices to deliver exceptional
              results.
            </p>
          </div>

          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>24/7 Support</h3>
            <p className='text-gray-300'>
              Round-the-clock support to ensure your email automation suite
              solutions run smoothly.
            </p>
          </div>
<<<<<<< HEAD
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Email Automation Suite
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional email automation suite solutions designed to meet your business requirements 
            and drive growth. Our expert team delivers high-quality, scalable solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Implementation</h3>
              <p className="text-gray-600">
                Quick deployment and setup to get your solution running in no time.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and reliability for your peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions</h3>
              <p className="text-gray-600">
                Built to grow with your business and adapt to changing needs.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your email automation suite requirements 
              and get a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7

}

<<<<<<< HEAD
function PricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingPlan
          name="Starter"
          price="$29/mo"
          features={[
            'Up to 5,000 subscribers',
            '10,000 emails/month',
            'Basic automation',
            'Email support',
            'Standard templates',
          ]}
        />
        <PricingPlan
          name="Professional"
          price="$99/mo"
          features={[
            'Up to 25,000 subscribers',
            '100,000 emails/month',
            'Advanced automation',
            'Priority support',
            'AI-powered optimization',
          ]}
          featured={true}
        />
        <PricingPlan
          name="Enterprise"
          price="$299/mo"
          features={[
            'Unlimited subscribers',
            'Unlimited emails',
            'Custom automation workflows',
            'White-label solution',
            'Dedicated account manager',
          ]}
        />
      </div>
    </div>
  );
}

function PricingPlan({
  name,
  price,
  features,
  featured = false,
}: {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${
      featured
        ? 'border-sky-500 bg-sky-50 shadow-lg'
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-sky-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-sky-600 text-white hover:bg-sky-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-6c29
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
}
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
