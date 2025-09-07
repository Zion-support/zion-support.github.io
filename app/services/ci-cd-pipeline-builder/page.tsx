<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


export const metadata = {
  title: 'CI/CD Pipeline Builder | Zion Tech Group',
  description:
    'Automated CI/CD pipeline creation with intelligent deployment strategies, monitoring, and rollback capabilities for faster, safer releases.',
};

export default function CICDPipelineBuilderPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          CI/CD Pipeline Builder
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Automated CI/CD pipeline creation with intelligent deployment
          strategies, monitoring, and rollback capabilities for faster, safer
          releases.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features & Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              title="Visual Pipeline Designer"
              description="Drag-and-drop interface to create complex CI/CD pipelines without coding, with pre-built templates for common workflows."
            />
            <FeatureItem
              title="Intelligent Deployment Strategies"
              description="AI-powered deployment strategies including blue-green, canary, and rolling deployments with automatic rollback triggers."
            />
            <FeatureItem
              title="Multi-Cloud Support"
              description="Deploy to AWS, Azure, GCP, or on-premise with unified pipeline management and cross-cloud monitoring."
            />
            <FeatureItem
              title="Automated Testing Integration"
              description="Seamlessly integrate unit tests, integration tests, security scans, and performance tests into your pipeline."
            />
            <FeatureItem
              title="Real-time Monitoring"
              description="Comprehensive monitoring and alerting for pipeline health, deployment success rates, and performance metrics."
            />
            <FeatureItem
              title="Security & Compliance"
              description="Built-in security scanning, compliance checks, and audit trails for enterprise-grade deployments."
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing & Plans
          </h2>
          <div className="space-y-4">
            <PricingCard
              plan="Starter"
              price="$79/month"
              description="Perfect for small teams and simple deployments"
              features={[
                'Up to 5 pipelines',
                'Basic deployment strategies',
                'Single cloud support',
                'Email support',
                'Basic monitoring',
              ]}
            />
            <PricingCard
              plan="Professional"
              price="$199/month"
              description="Ideal for growing development teams"
              features={[
                'Up to 25 pipelines',
                'Advanced deployment strategies',
                'Multi-cloud support',
                'Priority support',
                'Advanced monitoring',
                'Custom integrations',
              ]}
            />
            <PricingCard
              plan="Enterprise"
              price="$499/month"
              description="For large organizations with complex deployment needs"
              features={[
                'Unlimited pipelines',
                'Custom deployment strategies',
                '24/7 dedicated support',
                'On-premise deployment',
                'Advanced security features',
                'SLA guarantees',
                'Custom training',
              ]}
            />
=======
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Ci Cd Pipeline Builder - Zion Tech Group',
  description: 'Professional ci cd pipeline builder solutions for your business needs.',
};

export default function CiCdPipelineBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ci Cd Pipeline Builder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ci cd pipeline builder solutions designed to meet your business requirements 
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
              Contact us today to discuss your ci cd pipeline builder requirements 
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
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Why Choose Our CI/CD Pipeline Builder?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BenefitCard
            title="10x Faster Deployments"
            description="Automated pipeline creation and intelligent deployment strategies reduce deployment time from hours to minutes."
          />
          <BenefitCard
            title="99.9% Uptime Guarantee"
            description="Intelligent rollback mechanisms and comprehensive monitoring ensure maximum uptime and reliability."
          />
          <BenefitCard
            title="Zero-Downtime Deployments"
            description="Advanced deployment strategies ensure your applications remain available during updates and releases."
          />
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Streamline Your Deployments?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your deployment process with intelligent CI/CD pipelines
          that adapt to your needs and scale with your growth.
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
        <div className="mt-4 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
        <svg
          className="w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
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
  description,
  features,
}: {
  plan: string;
  price: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="text-3xl font-bold text-purple-600 mb-2">{price}</div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-purple-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export const metadata = {
  title: 'Ci Cd Pipeline Builder | Zion Tech Group',
  description:
    'Professional ci cd pipeline builder services for your business needs.',
  keywords: 'ci-cd-pipeline-builder, services, business, technology',
};

export default function ServicePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Ci Cd Pipeline Builder
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional ci cd pipeline builder services for your business
            needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored ci cd pipeline builder solutions designed for your
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
              Round-the-clock support to ensure your ci cd pipeline builder
              solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
<<<<<<< HEAD
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
    </div>
  );
}