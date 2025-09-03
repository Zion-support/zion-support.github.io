<<<<<<< HEAD
import Head from 'next/head';
=======
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
import Link from 'next/link';

type Service = {
  name: string;
  summary: string;
  pricing: string;
  link: string;
  icon: string;
  features: string[];
};

const microSaaS: Service[] = [
  {
    name: 'Cloud Cost Guard (FinOps Assistant)',
    summary: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    pricing: 'Typical: $299–$1,499/month',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/micro-saas',
    icon: '💰',
    features: ['Real-time cost monitoring', 'Automated optimization', 'Budget alerts', 'Multi-cloud support']
=======
    link: '/micro-saas'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  },
  {
    name: 'LLM Evaluation & Safety Suite',
    summary: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    pricing: 'Typical: $799–$3,500/month',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/ai-services',
    icon: '🛡️',
    features: ['Bias detection', 'Safety testing', 'Performance metrics', 'Compliance reporting']
=======
    link: '/ai-services'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  },
  {
    name: 'Customer Feedback & NPS Micro-App',
    summary: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    pricing: 'Typical: $149–$799/month',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/micro-saas',
    icon: '📊',
    features: ['Automated surveys', 'Sentiment analysis', 'Issue routing', 'Analytics dashboard']
=======
    link: '/micro-saas'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  }
];

const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation',
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.',
    pricing: 'Typical: $2k–$8k setup, $0.02–$0.2/session',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/ai-services',
    icon: '🤖',
    features: ['24/7 chatbot support', 'Intelligent routing', 'Knowledge base integration', 'Human escalation']
=======
    link: '/ai-services'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  },
  {
    name: 'Predictive Analytics & Forecasting',
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.',
    pricing: 'Typical: $4k–$20k project',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/ai-services',
    icon: '📈',
    features: ['Demand forecasting', 'Revenue prediction', 'Churn analysis', 'Risk assessment']
=======
    link: '/ai-services'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  },
  {
    name: 'GenAI Content & SEO Automation',
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.',
    pricing: 'Typical: $1k–$6k/month',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/ai-services',
    icon: '✍️',
    features: ['Content generation', 'SEO optimization', 'Keyword research', 'Performance tracking']
=======
    link: '/ai-services'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  }
];

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/it-services',
    icon: '☁️',
    features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & alerting', 'Auto-scaling']
=======
    link: '/it-services'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  },
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/it-services',
    icon: '🔒',
    features: ['Zero Trust architecture', 'Endpoint protection', 'Security monitoring', 'Compliance audits']
=======
    link: '/it-services'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  },
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
<<<<<<< HEAD
    link: 'https://ziontechgroup.com/it-services',
    icon: '🚀',
    features: ['Cloud migration', 'Containerization', 'Serverless architecture', 'Data platform upgrades']
=======
    link: '/it-services'
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  }
];

export default function Services() {
<<<<<<< HEAD
  const ServiceSection = ({ title, items, color }: { title: string; items: Service[]; color: string }) => (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">Comprehensive solutions tailored to your business needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((service) => (
            <div key={service.name} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{service.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.summary}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${color}`}>
                  {service.pricing}
                </span>
              </div>
              
              <a 
                href={service.link} 
                className={`inline-block w-full text-center py-2 px-4 rounded-lg font-semibold transition-colors ${color.includes('blue') ? 'bg-blue-600 hover:bg-blue-700 text-white' : color.includes('green') ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
=======
  const Section = ({ title, items, description }: { title: string; items: Service[]; description: string }) => (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 800, 
          marginBottom: '1rem',
          color: '#0b1220'
        }}>
          {title}
        </h2>
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#64748b',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          {description}
        </p>
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem' 
      }}>
        {items.map((s) => (
          <div key={s.name} style={{
            background: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
          }}
          >
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              marginBottom: '1rem',
              color: '#0b1220'
            }}>
              {s.name}
            </h3>
            <p style={{ 
              color: '#64748b', 
              fontSize: '1rem', 
              marginBottom: '1.5rem',
              lineHeight: '1.6'
            }}>
              {s.summary}
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginTop: 'auto'
            }}>
              <span style={{ 
                fontSize: '0.875rem', 
                color: '#22d3ee',
                fontWeight: 600
              }}>
                {s.pricing}
              </span>
              <a 
                href={s.link} 
                style={{
                  color: '#22d3ee',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.875rem'
                }}
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
      </div>
    </section>
  );

  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and Micro SaaS platforms. From cloud migration to AI automation, we deliver cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, IT consulting, Micro SaaS, cloud solutions, DevOps, cybersecurity, machine learning, automation" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI services, IT solutions, and Micro SaaS platforms for your business." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Head>
      
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI services, IT solutions, and Micro SaaS platforms. 
              We deliver cutting-edge technology solutions tailored to your specific needs.
            </p>
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </Link>
          </div>
        </section>

        {/* Service Sections */}
        <ServiceSection title="Micro SaaS Solutions" items={microSaaS} color="bg-blue-100 text-blue-800" />
        <ServiceSection title="AI Services" items={aiServices} color="bg-green-100 text-green-800" />
        <ServiceSection title="IT Services" items={itServices} color="bg-purple-100 text-purple-800" />

        {/* CTA Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">Let&apos;s discuss how our services can transform your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Request a Quote
              </Link>
              <Link href="/pricing" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
=======
<<<<<<< HEAD
    <main style={{ background: '#f8fafc', minHeight: 'calc(100vh - 120px)' }}>
      <Section title="Micro SaaS" items={microSaaS} />
      <Section title="AI Services" items={aiServices} />
      <Section title="IT Services" items={itServices} />
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
        <Link href="/contact" style={{
          display: 'inline-block', background: '#22d3ee', color: '#0b1220',
          padding: '10px 14px', borderRadius: 10, fontWeight: 700
        }}>Request a Quote</Link>
=======
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 800, 
            marginBottom: '1rem' 
          }}>
            Our Services
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            opacity: 0.9 
          }}>
            Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <Section 
        title="Micro SaaS Solutions" 
        description="Scalable software-as-a-service platforms that solve specific business challenges with modern technology."
        items={microSaaS} 
      />
      <Section 
        title="AI Services" 
        description="Cutting-edge artificial intelligence solutions that automate processes and unlock new business insights."
        items={aiServices} 
      />
      <Section 
        title="IT Services" 
        description="Comprehensive IT infrastructure, security, and cloud services to support your business operations."
        items={itServices} 
      />

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e293b 0%, #0b1220 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            Let&apos;s discuss your project requirements and create a custom solution for your business.
          </p>
          <Link href="/contact" style={{
            background: '#22d3ee',
            color: '#0b1220',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '1.125rem'
          }}>
            Request a Quote
          </Link>
        </div>
>>>>>>> c3407f17831351e4f4cfd0efb90f6fd048cb9536
      </section>
    </main>
>>>>>>> ff1c4aa73e82ebe1054c042ee0885413d93984f2
  );
}
