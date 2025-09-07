<<<<<<< HEAD
export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: 'E-commerce Platform Development | Zion Tech Group',
  description: 'Build powerful e-commerce platforms with payment processing, inventory management, and customer features. Professional e-commerce solutions starting at $25k.',
=======
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Ecommerce Platform - Zion Tech Group',
  description: 'Professional ecommerce platform solutions for your business needs.',
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
};

export default function EcommercePlatformPage() {
  return (
<<<<<<< HEAD
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">E-commerce Platform Development</h1>
        <p className="text-xl text-gray-600 mb-8">
          Build powerful e-commerce platforms with payment processing, inventory management, customer accounts, and advanced selling features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Product Management"
            details={[
              'Product catalog',
              'Inventory tracking',
              'Variants & options',
              'Bulk import/export',
              'SEO optimization',
              'Image management',
              'Product reviews',
            ]}
          />
          <Item
            title="Payment & Checkout"
            details={[
              'Multiple payment gateways',
              'Secure checkout process',
              'Tax calculation',
              'Shipping integration',
              'Coupon system',
              'Subscription billing',
              'Mobile payments',
            ]}
          />
          <Item
            title="Customer Features"
            details={[
              'User accounts',
              'Order history',
              'Wishlist functionality',
              'Customer support',
              'Loyalty programs',
              'Personalization',
              'Mobile app',
            ]}
          />
        </div>

        <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">E-commerce Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
              <p className="text-gray-600">Built to handle high traffic and large product catalogs with cloud-native, microservices architecture.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
              <p className="text-gray-600">Responsive design and mobile apps ensure optimal shopping experience across all devices.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Track sales, customer behavior, and inventory with comprehensive analytics and reporting tools.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Channel Selling</h3>
              <p className="text-gray-600">Sell across web, mobile, social media, and marketplaces with unified inventory management.</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Ecommerce Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional ecommerce platform solutions designed to meet your business requirements 
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
              Contact us today to discuss your ecommerce platform requirements 
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
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">E-commerce Platform Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan
          name="Starter Store"
          price="$25k–$50k"
          duration="8–12 weeks"
          features={[
            'Basic product catalog',
            'Payment processing',
            'Order management',
            'Customer accounts',
            'Mobile responsive',
            'Basic analytics',
            'Standard support',
          ]}
        />
        <Plan
          name="Professional Store"
          price="$50k–$100k"
          duration="12–20 weeks"
          features={[
            'Everything in Starter',
            'Advanced inventory',
            'Multi-channel selling',
            'Advanced analytics',
            'API integrations',
            'White-label options',
            'Priority support',
          ]}
        />
        <Plan
          name="Enterprise Store"
          price="$100k+"
          duration="16–28 weeks"
          features={[
            'Everything in Professional',
            'Custom development',
            'Advanced security',
            'Multi-tenant architecture',
            'Dedicated support',
            'SLA guarantees',
            'On-premise deployment',
          ]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your E-commerce Platform?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let&apos;s create a powerful e-commerce platform that drives sales and provides an exceptional shopping experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-red-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=E-commerce Platform Development Inquiry"
        className="block w-full mt-6 bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
      >
        Get Started
      </a>
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  title: 'Ecommerce Platform | Zion Tech Group',
  description:
    'Professional ecommerce platform services for your business needs.',
  keywords: 'ecommerce-platform, services, business, technology',
};

export default function ServicePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Ecommerce Platform
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional ecommerce platform services for your business needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored ecommerce platform solutions designed for your specific
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
              Round-the-clock support to ensure your ecommerce platform
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