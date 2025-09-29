import Link from 'next/link';

export const metadata = {
  title: 'Pricing Plans | Zion Tech Group',
  description: 'Transparent pricing for our AI and IT solutions. Choose the plan that fits your business needs.',
};

export default function PricingPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16 py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Transparent Pricing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include 24/7 support and money-back guarantee.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* AI Services Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            AI Services Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="Starter"
              price="$99"
              period="month"
              description="Perfect for small businesses getting started with AI"
              features={[
                'Basic AI automation',
                'Email support',
                'Standard integrations',
                'Monthly reports',
                'Up to 5 users'
              ]}
              popular={false}
              cta="Get Started"
              href="tel:+13024640950"
            />
            <PricingCard
              name="Professional"
              price="$299"
              period="month"
              description="Most popular for growing businesses"
              features={[
                'Advanced AI features',
                'Priority support',
                'Custom integrations',
                'Real-time analytics',
                'Up to 25 users',
                'API access',
                'Custom workflows'
              ]}
              popular={true}
              cta="Start Free Trial"
              href="mailto:kleber@ziontechgroup.com"
            />
            <PricingCard
              name="Enterprise"
              price="$799"
              period="month"
              description="For large organizations with complex needs"
              features={[
                'Full AI suite access',
                'Dedicated support',
                'White-label solution',
                'Advanced analytics',
                'Unlimited users',
                'Full API access',
                'Custom development',
                'SLA guarantee'
              ]}
              popular={false}
              cta="Contact Sales"
              href="tel:+13024640950"
            />
          </div>
        </div>

        {/* IT Services Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            IT Services Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="Basic IT Support"
              price="$199"
              period="month"
              description="Essential IT support for small businesses"
              features={[
                'Remote support',
                'System monitoring',
                'Security updates',
                'Email support',
                'Monthly maintenance'
              ]}
              popular={false}
              cta="Get Started"
              href="tel:+13024640950"
            />
            <PricingCard
              name="Managed IT Services"
              price="$499"
              period="month"
              description="Comprehensive IT management"
              features={[
                '24/7 monitoring',
                'Proactive maintenance',
                'Security management',
                'Priority support',
                'Cloud backup',
                'Network optimization',
                'Performance tuning'
              ]}
              popular={true}
              cta="Start Free Trial"
              href="mailto:kleber@ziontechgroup.com"
            />
            <PricingCard
              name="Enterprise IT"
              price="$1,299"
              period="month"
              description="Complete enterprise IT solutions"
              features={[
                'Dedicated IT team',
                'Custom infrastructure',
                'Advanced security',
                'Disaster recovery',
                'Compliance support',
                'Training & consulting',
                'SLA guarantee'
              ]}
              popular={false}
              cta="Contact Sales"
              href="tel:+13024640950"
            />
          </div>
        </div>

        {/* Cloud Services Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Cloud Services Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="Cloud Starter"
              price="$149"
              period="month"
              description="Basic cloud infrastructure for small teams"
              features={[
                'Basic cloud setup',
                'Standard security',
                'Email support',
                'Monthly backups',
                'Up to 10 users'
              ]}
              popular={false}
              cta="Get Started"
              href="tel:+13024640950"
            />
            <PricingCard
              name="Cloud Professional"
              price="$399"
              period="month"
              description="Advanced cloud solutions for growing businesses"
              features={[
                'Advanced cloud architecture',
                'Enhanced security',
                'Priority support',
                'Daily backups',
                'Up to 50 users',
                'Auto-scaling',
                'Load balancing'
              ]}
              popular={true}
              cta="Start Free Trial"
              href="mailto:kleber@ziontechgroup.com"
            />
            <PricingCard
              name="Cloud Enterprise"
              price="$999"
              period="month"
              description="Enterprise-grade cloud infrastructure"
              features={[
                'Custom cloud architecture',
                'Enterprise security',
                'Dedicated support',
                'Real-time backups',
                'Unlimited users',
                'Multi-region deployment',
                '99.99% SLA guarantee'
              ]}
              popular={false}
              cta="Contact Sales"
              href="tel:+13024640950"
            />
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AddonCard
              name="Training & Consulting"
              price="$299"
              period="hour"
              description="Expert training for your team"
            />
            <AddonCard
              name="Custom Development"
              price="$199"
              period="hour"
              description="Tailored solutions for your needs"
            />
            <AddonCard
              name="Migration Services"
              price="$2,999"
              period="project"
              description="Seamless data and system migration"
            />
            <AddonCard
              name="24/7 Premium Support"
              price="$199"
              period="month"
              description="Round-the-clock expert support"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FAQ
              question="Can I change my plan anytime?"
              answer="Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
            />
            <FAQ
              question="Do you offer custom pricing for large organizations?"
              answer="Absolutely! We provide custom pricing and solutions for enterprise clients with specific requirements. Contact our sales team for a personalized quote."
            />
            <FAQ
              question="What's included in the free trial?"
              answer="Our free trial includes full access to all features of the Professional plan for 14 days, with no credit card required."
            />
            <FAQ
              question="Is there a setup fee?"
              answer="Setup fees vary by service. Most AI services have no setup fee, while complex IT implementations may include a one-time setup charge."
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and custom pricing quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
          <div className="mt-6 text-sm opacity-75">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
  cta,
  href,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
  href: string;
}) {
  return (
    <div className={`border rounded-xl p-6 ${popular ? 'border-indigo-500 bg-indigo-50 transform scale-105' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function AddonCard({
  name,
  price,
  period,
  description,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-2">{name}</h4>
      <div className="text-lg font-bold text-gray-900 mb-2">
        {price}/{period}
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-3">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}