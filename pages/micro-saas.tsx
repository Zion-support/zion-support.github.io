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
      features: ['Real-time cost monitoring', 'Automated rightsizing recommendations', 'Budget alerts', 'Multi-cloud support']
    },
    {
      name: 'Customer Churn Predictor',
      description: 'AI-powered customer churn prediction with actionable insights and retention strategies.',
      pricing: '$199–$999/month',
      features: ['Predictive analytics', 'Churn risk scoring', 'Retention campaigns', 'Customer segmentation']
    },
    {
      name: 'API Rate Limiter & Analytics',
      description: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
      pricing: '$199–$999/month',
      features: ['Smart rate limiting', 'Usage analytics', 'API monetization', 'Performance monitoring']
    },
    {
      name: 'Smart Document Processing',
      description: 'AI-powered OCR, data extraction, and document workflow automation for businesses.',
      pricing: '$399–$1,999/month',
      features: ['Advanced OCR', 'Data extraction', 'Workflow automation', 'Multi-format support']
    },
    {
      name: 'Social Media Scheduler Pro',
      description: 'Multi-platform scheduling, content optimization, and engagement analytics.',
      pricing: '$99–$499/month',
      features: ['Multi-platform posting', 'Content optimization', 'Engagement analytics', 'Team collaboration']
    },
    {
      name: 'Email Deliverability Monitor',
      description: 'Real-time email reputation tracking, bounce analysis, and deliverability optimization.',
      pricing: '$149–$699/month',
      features: ['Reputation monitoring', 'Bounce analysis', 'Deliverability optimization', 'ISP monitoring']
    },
    {
      name: 'Website Performance Optimizer',
      description: 'Automated Core Web Vitals monitoring, optimization suggestions, and performance alerts.',
      pricing: '$199–$899/month',
      features: ['Core Web Vitals monitoring', 'Performance optimization', 'Real-time alerts', 'SEO insights']
    },
    {
      name: 'LLM Evaluation & Safety Suite',
      description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
      pricing: '$799–$3,500/month',
      features: ['Prompt evaluation', 'Bias detection', 'Safety testing', 'Guardrail policies']
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Products - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS products including Cloud Cost Guard, Customer Churn Predictor, API Rate Limiter, and more. 40+ specialized tools for modern businesses." />
        <meta name="keywords" content="micro SaaS, SaaS products, cloud cost management, customer churn prediction, API rate limiting, document processing" />
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
              Innovative, Focused Software Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Our micro SaaS products are specialized, focused solutions designed to solve specific business challenges. 
              Each product is built with modern technology and designed for easy integration and scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Get Custom Quote
              </Link>
              <Link href="/services" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
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
                <div key={index} className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{product.name}</h3>
                  <p className="text-slate-300 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-lg font-bold text-green-400">{product.pricing}</span>
                  </div>
                  
                  <Link href="/contact" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose Our Micro SaaS Products?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Focused Solutions</h3>
                <p className="text-slate-300">
                  Each product is designed to solve a specific business challenge, 
                  ensuring maximum effectiveness and ease of use.
                </p>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Easy Integration</h3>
                <p className="text-slate-300">
                  Built with modern APIs and standards, our products integrate seamlessly 
                  with your existing systems and workflows.
                </p>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Scalable & Secure</h3>
                <p className="text-slate-300">
                  Enterprise-grade security and scalability ensure your solutions 
                  grow with your business needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our team to discuss which micro SaaS products are right for your business 
              and get a custom implementation plan.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}