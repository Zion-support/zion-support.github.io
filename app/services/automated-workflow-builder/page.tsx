<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


export const metadata = {
  title: 'Automated Workflow Builder | Zion Tech Group',
  description: 'Visual workflow automation platform. Create, manage, and optimize business processes with drag-and-drop automation.',
};

export default function AutomatedWorkflowBuilderPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Automated Workflow Builder</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Visual workflow automation platform that helps you create, manage, and optimize
          business processes with drag-and-drop automation and intelligent triggers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Visual Builder"
          details={[
            'Drag-and-drop interface',
            'Pre-built workflow templates',
            'Conditional logic',
            'Multi-step processes',
            'Real-time testing',
          ]}
        />
        <FeatureCard
          title="Integration Hub"
          details={[
            '500+ app integrations',
            'API connectors',
            'Custom webhooks',
            'Database connections',
            'Third-party services',
          ]}
        />
        <FeatureCard
          title="Intelligence & Analytics"
          details={[
            'Performance monitoring',
            'Bottleneck identification',
            'Optimization suggestions',
            'Success rate tracking',
            'Cost analysis',
          ]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-lime-50 to-green-50 border border-lime-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Automate Your Business?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Streamline your business processes with powerful workflow automation.
          Perfect for operations teams, HR, finance, and any process-heavy department.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-lime-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-lime-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-lime-600 text-lime-600 px-8 py-3 rounded-lg font-semibold hover:bg-lime-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export const metadata = {
  title: 'Automated Workflow Builder | Zion Tech Group',
  description:
    'Professional automated workflow builder services for your business needs.',
  keywords: 'automated-workflow-builder, services, business, technology',
=======
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Automated Workflow Builder - Zion Tech Group',
  description: 'Build and automate complex business workflows with our intuitive drag-and-drop workflow builder.',
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
};

export default function AutomatedWorkflowBuilderPage() {
  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Automated Workflow Builder
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional automated workflow builder services for your business
            needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored automated workflow builder solutions designed for your
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
              Round-the-clock support to ensure your automated workflow builder
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
            Automated Workflow Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create powerful, automated business workflows with our intuitive drag-and-drop builder. 
            Streamline processes, reduce manual work, and increase efficiency.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drag & Drop Builder</h3>
              <p className="text-gray-600">
                Intuitive visual interface for building complex workflows without coding.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🔗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration Hub</h3>
              <p className="text-gray-600">
                Connect with hundreds of apps and services to create seamless workflows.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Execution</h3>
              <p className="text-gray-600">
                Workflows run instantly with real-time monitoring and error handling.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
              <p className="text-gray-600">
                Track workflow performance and identify optimization opportunities.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-level security with role-based access control and audit trails.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered</h3>
              <p className="text-gray-600">
                Smart suggestions and automated optimization for better workflow performance.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Your First Workflow?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start automating your business processes today with our powerful workflow builder.
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
          price="$39/mo"
          features={[
            '5 active workflows',
            '1,000 executions/month',
            'Basic integrations',
            'Email support',
            'Standard templates',
          ]}
        />
        <PricingPlan
          name="Professional"
          price="$129/mo"
          features={[
            '25 active workflows',
            '10,000 executions/month',
            'All integrations',
            'Priority support',
            'Advanced analytics',
          ]}
          featured={true}
        />
        <PricingPlan
          name="Enterprise"
          price="$399/mo"
          features={[
            'Unlimited workflows',
            'Unlimited executions',
            'Custom integrations',
            'White-label solution',
            'Dedicated support',
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
        ? 'border-lime-500 bg-lime-50 shadow-lg'
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-lime-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-lime-600 text-white hover:bg-lime-700'
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
