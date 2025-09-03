import Head from 'next/head';
import Link from 'next/link';

export default function MicroSaaS() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const microSaaSProducts = [
    {
      name: 'Cloud Cost Guard (FinOps Assistant)',
      description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
      pricing: '$299–$1,499/month',
      features: ['Real-time cost monitoring', 'Automated rightsizing recommendations', 'Budget alerts and forecasting', 'Multi-cloud support']
    },
    {
      name: 'Customer Churn Predictor',
      description: 'AI-powered customer retention with early warning signals and intervention recommendations.',
      pricing: '$199–$999/month',
      features: ['Churn risk scoring', 'Behavioral pattern analysis', 'Automated intervention triggers', 'Retention campaign optimization']
    },
    {
      name: 'API Rate Limiter & Analytics',
      description: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
      pricing: '$199–$999/month',
      features: ['Dynamic rate limiting', 'Usage analytics dashboard', 'API monetization tools', 'Real-time monitoring']
    },
    {
      name: 'Smart Document Processing',
      description: 'AI-powered OCR, data extraction, and document workflow automation for businesses.',
      pricing: '$399–$1,999/month',
      features: ['Advanced OCR technology', 'Intelligent data extraction', 'Workflow automation', 'Multi-format support']
    },
    {
      name: 'Social Media Scheduler Pro',
      description: 'Multi-platform scheduling, content optimization, and engagement analytics.',
      pricing: '$99–$499/month',
      features: ['Multi-platform posting', 'Content optimization', 'Engagement analytics', 'Automated scheduling']
    },
    {
      name: 'Email Deliverability Monitor',
      description: 'Real-time email reputation tracking, bounce analysis, and deliverability optimization.',
      pricing: '$149–$699/month',
      features: ['Reputation monitoring', 'Bounce analysis', 'Deliverability optimization', 'ISP feedback loops']
    },
    {
      name: 'Website Performance Optimizer',
      description: 'Automated Core Web Vitals monitoring, optimization suggestions, and performance alerts.',
      pricing: '$199–$899/month',
      features: ['Core Web Vitals tracking', 'Performance optimization', 'Automated alerts', 'SEO impact analysis']
    },
    {
      name: 'Inventory Management Pro',
      description: 'Smart inventory tracking with demand forecasting and automated reorder points.',
      pricing: '$249–$1,299/month',
      features: ['Real-time inventory tracking', 'Demand forecasting', 'Automated reorder points', 'Multi-location support']
    },
    {
      name: 'Lead Scoring Engine',
      description: 'AI-powered lead qualification with behavioral analysis and conversion prediction.',
      pricing: '$299–$1,499/month',
      features: ['Behavioral scoring', 'Conversion prediction', 'Lead prioritization', 'CRM integration']
    },
    {
      name: 'Content Moderation Suite',
      description: 'Automated content filtering with AI-powered moderation for user-generated content.',
      pricing: '$199–$999/month',
      features: ['AI content analysis', 'Automated moderation', 'Custom rule engine', 'Multi-language support']
    },
    {
      name: 'A/B Testing Platform',
      description: 'Advanced experimentation platform with statistical significance and conversion optimization.',
      pricing: '$149–$799/month',
      features: ['Statistical significance testing', 'Conversion optimization', 'Multi-variate testing', 'Real-time results']
    },
    {
      name: 'Data Backup & Recovery',
      description: 'Automated backup solutions with point-in-time recovery and disaster recovery planning.',
      pricing: '$199–$1,199/month',
      features: ['Automated backups', 'Point-in-time recovery', 'Disaster recovery', 'Cross-region replication']
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Products - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS products including Cloud Cost Guard, API Rate Limiter, Smart Document Processing, and 9+ more specialized business solutions." />
        <meta name="keywords" content="micro SaaS, business software, cloud optimization, API management, document processing, lead scoring, A/B testing" />
        <link rel="canonical" href={`${contact.site}/micro-saas`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Micro SaaS Products
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Focused, innovative software solutions for modern businesses
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Our micro SaaS products are specialized, purpose-built solutions that solve specific business challenges. 
              Each product is designed to integrate seamlessly with your existing workflow while delivering immediate value.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Get Custom Quote
              </Link>
              <Link href="/services" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">12+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">$99</h3>
                <p className="text-slate-300">Starting Price</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-green-400 mb-2">24/7</h3>
                <p className="text-slate-300">Support Included</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Micro SaaS Products
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSProducts.map((product, index) => (
                <div key={index} className="p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{product.name}</h3>
                  <p className="text-slate-300 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-400">{product.pricing}</span>
                    <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                      Get Quote →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our micro SaaS products are designed to solve specific business challenges with minimal setup time. 
              Get a custom quote tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}