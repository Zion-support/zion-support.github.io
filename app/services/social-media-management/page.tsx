<<<<<<< HEAD
export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
  title: 'Social Media Management Platform | Zion Tech Group',
  description: 'Build comprehensive social media management tools with scheduling, analytics, and content creation. Professional social media solutions starting at $15k.',
=======
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Social Media Management - Zion Tech Group',
  description: 'Professional social media management solutions for your business needs.',
>>>>>>> 2bbbac51cb394a4b194a2ff75bed1e7dbe99ed55
};

export default function SocialMediaManagementPage() {
  return (
<<<<<<< HEAD
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Social Media Management Platform</h1>
        <p className="text-xl text-gray-600 mb-8">
          Build comprehensive social media management tools with scheduling, analytics, content creation, and team collaboration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item
            title="Content Management"
            details={[
              'Multi-platform posting',
              'Content calendar',
              'Bulk upload & scheduling',
              'Hashtag research tools',
              'Content templates',
              'Media library',
              'Content approval workflows',
            ]}
          />
          <Item
            title="Analytics & Insights"
            details={[
              'Cross-platform analytics',
              'Engagement tracking',
              'ROI measurement',
              'Audience insights',
              'Competitor analysis',
              'Custom reporting',
              'Real-time monitoring',
            ]}
          />
          <Item
            title="Team Collaboration"
            details={[
              'User roles & permissions',
              'Content approval system',
              'Team messaging',
              'Client management',
              'White-label options',
              'API access',
              'Custom integrations',
            ]}
          />
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Platform Support</h3>
              <p className="text-gray-600">Connect Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube in one unified dashboard.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Content</h3>
              <p className="text-gray-600">Generate captions, suggest hashtags, and optimize posting times using AI technology.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Advanced Scheduling</h3>
              <p className="text-gray-600">Smart scheduling with optimal time detection and timezone management for global teams.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Client Management</h3>
              <p className="text-gray-600">Perfect for agencies with client dashboards, reporting, and white-label customization.</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Social Media Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional social media management solutions designed to meet your business requirements 
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
              Contact us today to discuss your social media management requirements 
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
            <span className="text-pink-500 mr-2 mt-1">•</span>
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Social Media Platform Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan
          name="Basic Platform"
          price="$15k–$30k"
          duration="6–8 weeks"
          features={[
            '3 platform connections',
            'Basic scheduling',
            'Content calendar',
            'Simple analytics',
            'Team management',
            'Mobile app',
            'Basic support',
          ]}
        />
        <Plan
          name="Professional Platform"
          price="$30k–$60k"
          duration="8–12 weeks"
          features={[
            'All major platforms',
            'Advanced scheduling',
            'AI content tools',
            'Comprehensive analytics',
            'Client management',
            'White-label options',
            'Priority support',
          ]}
        />
        <Plan
          name="Enterprise Platform"
          price="$60k+"
          duration="10–16 weeks"
          features={[
            'Everything in Professional',
            'Custom integrations',
            'Advanced AI features',
            'Custom reporting',
            'Dedicated support',
            'SLA guarantees',
            'Custom development',
          ]}
        />
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Social Platform?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let&apos;s create a powerful social media management platform that streamlines your content strategy and drives engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors"
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
      <div className="text-3xl font-bold text-pink-600 mb-1">{price}</div>
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
        href="mailto:kleber@ziontechgroup.com?subject=Social Media Management Platform Inquiry"
        className="block w-full mt-6 bg-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
      >
        Get Started
      </a>
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
  title: 'Social Media Management | Zion Tech Group',
  description:
    'Professional social media management services for your business needs.',
  keywords: 'social-media-management, services, business, technology',
};

export default function ServicePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Social Media Management
          </h1>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Professional social media management services for your business
            needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>
              Expert Solutions
            </h3>
            <p className='text-gray-300'>
              Tailored social media management solutions designed for your
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
              Round-the-clock support to ensure your social media management
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