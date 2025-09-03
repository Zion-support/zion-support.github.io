import Head from 'next/head';
import Link from 'next/link';

export default function ITServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const itServices = [
    {
      name: 'Cloud Migration & Modernization',
      description: 'Seamless migration to cloud platforms with modern architecture and best practices.',
      pricing: '$2,999–$15,999/month',
      features: ['AWS/Azure/GCP migration', 'Legacy system modernization', 'Cloud architecture design', 'Performance optimization']
    },
    {
      name: 'Kubernetes & Container Orchestration',
      description: 'Container orchestration, microservices architecture, and DevOps automation.',
      pricing: '$1,999–$9,999/month',
      features: ['Kubernetes deployment', 'Container management', 'Microservices architecture', 'CI/CD automation']
    },
    {
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including threat detection and incident response.',
      pricing: '$2,499–$12,999/month',
      features: ['Security assessment', 'Threat monitoring', 'Incident response', 'Compliance management']
    },
    {
      name: 'Data Engineering & Analytics',
      description: 'Data pipeline development, analytics platforms, and business intelligence solutions.',
      pricing: '$1,799–$8,999/month',
      features: ['Data pipeline development', 'Analytics platforms', 'Business intelligence', 'Data visualization']
    },
    {
      name: 'DevOps & Infrastructure Automation',
      description: 'Infrastructure as code, automated deployments, and monitoring solutions.',
      pricing: '$1,499–$7,999/month',
      features: ['Infrastructure automation', 'CI/CD pipelines', 'Monitoring & alerting', 'Performance optimization']
    },
    {
      name: 'Network Infrastructure & Security',
      description: 'Network design, security implementation, and infrastructure management.',
      pricing: '$1,299–$6,999/month',
      features: ['Network design', 'Security implementation', 'Infrastructure management', 'Performance monitoring']
    },
    {
      name: 'Database Administration & Optimization',
      description: 'Database design, optimization, backup strategies, and performance tuning.',
      pricing: '$999–$4,999/month',
      features: ['Database design', 'Performance optimization', 'Backup strategies', 'High availability setup']
    },
    {
      name: 'IT Consulting & Strategy',
      description: 'Technology strategy, digital transformation, and IT roadmap development.',
      pricing: '$1,999–$9,999/month',
      features: ['Technology strategy', 'Digital transformation', 'IT roadmap', 'Vendor management']
    }
  ];

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, Kubernetes orchestration, cybersecurity, data engineering, and DevOps solutions for modern businesses." />
        <meta name="keywords" content="IT services, cloud migration, Kubernetes, cybersecurity, data engineering, DevOps, infrastructure automation" />
        <link rel="canonical" href={`${contact.site}/it-services`} />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              IT Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive Technology Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Our IT services cover the full spectrum of technology needs, from cloud migration 
              and cybersecurity to data engineering and DevOps. We help businesses build, secure, 
              and optimize their technology infrastructure for maximum efficiency and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
                Get IT Consultation
              </Link>
              <Link href="/services" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our IT Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                  <h3 className="text-xl font-bold mb-4 text-green-400">{service.name}</h3>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                  </div>
                  
                  <Link href="/contact" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Technology Stack
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Cloud Platforms</h3>
                <p className="text-slate-300 text-sm">
                  AWS, Azure, Google Cloud Platform, and hybrid cloud solutions.
                </p>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 text-purple-400">Containerization</h3>
                <p className="text-slate-300 text-sm">
                  Docker, Kubernetes, OpenShift, and container orchestration platforms.
                </p>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 text-green-400">Security</h3>
                <p className="text-slate-300 text-sm">
                  SIEM, SOC, threat detection, and comprehensive security frameworks.
                </p>
              </div>

              <div className="p-6 bg-slate-900/60 rounded-xl border border-white/10 text-center">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Data & Analytics</h3>
                <p className="text-slate-300 text-sm">
                  Big data platforms, analytics tools, and business intelligence solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Service Delivery Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Assessment</h3>
                <p className="text-slate-300 text-sm">
                  Comprehensive analysis of your current IT infrastructure and requirements.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">Planning</h3>
                <p className="text-slate-300 text-sm">
                  Detailed project planning and architecture design for optimal results.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Implementation</h3>
                <p className="text-slate-300 text-sm">
                  Professional implementation with minimal disruption to your operations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">Support</h3>
                <p className="text-slate-300 text-sm">
                  Ongoing support, monitoring, and optimization for continued success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our IT experts to discuss how we can help optimize your technology 
              infrastructure and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}