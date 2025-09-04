import Link from 'next/link';
import Head from 'next/head';

export default function ServicesComparison() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      name: 'Micro SaaS Products',
      count: '150+',
      description: 'Focused software solutions for specific business needs',
      features: ['Quick deployment', 'Scalable architecture', 'API integrations', 'Custom branding'],
      pricing: 'Starting at $29/month',
      href: '/micro-saas',
      color: 'blue'
    },
    {
      name: 'AI Services',
      count: '90+',
      description: 'Advanced artificial intelligence and automation solutions',
      features: ['Machine learning models', 'Natural language processing', 'Computer vision', 'Predictive analytics'],
      pricing: 'Starting at $99/month',
      href: '/ai-services',
      color: 'purple'
    },
    {
      name: 'IT Solutions',
      count: '100+',
      description: 'Comprehensive IT services and infrastructure solutions',
      features: ['Cloud management', 'Security solutions', 'DevOps automation', 'Data analytics'],
      pricing: 'Starting at $199/month',
      href: '/it-services',
      color: 'green'
    }
  ];

  return (
    <>
      <Head>
        <title>Services Comparison - Zion Tech Group</title>
        <meta name="description" content="Compare Zion Tech Group's service categories: Micro SaaS Products, AI Services, and IT Solutions. Find the right technology solutions for your business needs." />
        <meta name="keywords" content="services comparison, micro SaaS vs AI services, IT solutions comparison, technology services, business solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services-comparison`} />
        <meta property="og:title" content="Services Comparison - Zion Tech Group" />
        <meta property="og:description" content="Compare Zion Tech Group's service categories: Micro SaaS Products, AI Services, and IT Solutions. Find the right technology solutions for your business needs." />
        <meta property="og:url" content={`${contact.site}/services-comparison`} />
        <meta property="og:type" content="website" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" role="main">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Services Comparison
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Choose the Right Technology Solutions for Your Business
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Compare our three main service categories to find the perfect fit for your business needs and budget.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-900/60 rounded-xl border border-white/10 overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-6 text-left font-semibold text-slate-300">Features</th>
                    {serviceCategories.map((service) => (
                      <th key={service.name} className="p-6 text-center">
                        <div className={`text-${service.color}-400 font-bold text-xl mb-2`}>
                          {service.name}
                        </div>
                        <div className="text-slate-400 text-sm">{service.count} Services</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-semibold text-slate-300">Description</td>
                    {serviceCategories.map((service) => (
                      <td key={service.name} className="p-6 text-center text-slate-400">
                        {service.description}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-semibold text-slate-300">Key Features</td>
                    {serviceCategories.map((service) => (
                      <td key={service.name} className="p-6">
                        <ul className="text-slate-400 space-y-2">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="text-green-400 mr-2">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-6 font-semibold text-slate-300">Starting Price</td>
                    {serviceCategories.map((service) => (
                      <td key={service.name} className="p-6 text-center">
                        <span className={`text-${service.color}-400 font-bold text-lg`}>
                          {service.pricing}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-slate-300">Action</td>
                    {serviceCategories.map((service) => (
                      <td key={service.name} className="p-6 text-center">
                        <Link
                          href={service.href}
                          className={`inline-block px-6 py-2 bg-${service.color}-600 hover:bg-${service.color}-700 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-${service.color}-500 focus:ring-offset-2 focus:ring-offset-slate-900`}
                          aria-label={`Learn more about ${service.name}`}
                        >
                          Learn More
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">When to Choose Each Service</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  Perfect for businesses looking for:
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Quick solutions to specific problems</li>
                  <li>• Cost-effective software tools</li>
                  <li>• Easy-to-use applications</li>
                  <li>• Rapid deployment and setup</li>
                  <li>• Minimal maintenance requirements</li>
                </ul>
                <div className="text-sm text-slate-500">
                  <strong>Best for:</strong> Small to medium businesses, startups, individual professionals
                </div>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Ideal for organizations needing:
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Intelligent automation</li>
                  <li>• Data-driven insights</li>
                  <li>• Advanced analytics</li>
                  <li>• Machine learning capabilities</li>
                  <li>• Competitive advantage through AI</li>
                </ul>
                <div className="text-sm text-slate-500">
                  <strong>Best for:</strong> Data-driven companies, enterprises, tech-forward organizations
                </div>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT Solutions</h3>
                <p className="text-slate-300 mb-6">
                  Essential for businesses requiring:
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Robust infrastructure</li>
                  <li>• Enterprise-grade security</li>
                  <li>• Scalable systems</li>
                  <li>• 24/7 support and monitoring</li>
                  <li>• Compliance and governance</li>
                </ul>
                <div className="text-sm text-slate-500">
                  <strong>Best for:</strong> Large enterprises, regulated industries, mission-critical operations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Not Sure Which Service is Right for You?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Our experts can help you choose the perfect combination of services for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Get a free consultation"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services-overview"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="View services overview"
              >
                View Services Overview
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}