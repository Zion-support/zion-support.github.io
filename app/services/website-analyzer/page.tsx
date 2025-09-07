<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


export const metadata = {
  title: 'Website Analyzer | Zion Tech Group',
  description: 'Comprehensive website analysis tool. SEO audit, performance monitoring, security scanning, and competitive analysis.',
};

export default function WebsiteAnalyzerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Website Analyzer</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive website analysis tool that provides SEO audits, performance monitoring,
          security scanning, and competitive analysis. Optimize your website for maximum impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="SEO Analysis"
          details={[
            'Technical SEO audit',
            'Keyword ranking tracking',
            'Backlink analysis',
            'Content optimization suggestions',
            'Core Web Vitals monitoring',
          ]}
        />
        <FeatureCard
          title="Performance Monitoring"
          details={[
            'Page speed analysis',
            'Mobile performance testing',
            'Uptime monitoring',
            'Load time optimization',
            'Performance alerts',
          ]}
        />
        <FeatureCard
          title="Security & Compliance"
          details={[
            'Security vulnerability scanning',
            'SSL certificate monitoring',
            'GDPR compliance check',
            'Malware detection',
            'Security recommendations',
          ]}
        />
      </div>

      <PricingSection />

      <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Website?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get comprehensive insights into your website's performance, SEO, and security.
          Perfect for web developers, marketers, and business owners.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
export const metadata = {
  title: 'Website Analyzer | Zion Tech Group',
  description:
    'Professional website analyzer services for your business needs.',
  keywords: 'website-analyzer, services, business, technology',
=======
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Website Analyzer - Zion Tech Group',
  description: 'Professional website analyzer solutions for your business needs.',
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
};

export default function WebsiteAnalyzerPage() {
  return (
<<<<<<< HEAD
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Website Analyzer
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional website analyzer services for your business needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored website analyzer solutions designed for your specific
              business requirements.
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
              Round-the-clock support to ensure your website analyzer solutions
              run smoothly.
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
            Website Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional website analyzer solutions designed to meet your business requirements 
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
              Contact us today to discuss your website analyzer requirements 
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
          name="Basic"
          price="$19/mo"
          features={[
            '5 websites',
            'Monthly SEO reports',
            'Basic performance monitoring',
            'Email support',
            'Standard security scan',
          ]}
        />
        <PricingPlan
          name="Professional"
          price="$79/mo"
          features={[
            '25 websites',
            'Weekly SEO reports',
            'Advanced performance monitoring',
            'Priority support',
            'Comprehensive security analysis',
          ]}
          featured={true}
        />
        <PricingPlan
          name="Agency"
          price="$199/mo"
          features={[
            'Unlimited websites',
            'Real-time monitoring',
            'White-label reports',
            'API access',
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
        ? 'border-amber-500 bg-amber-50 shadow-lg'
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-amber-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-amber-600 text-white hover:bg-amber-700'
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
