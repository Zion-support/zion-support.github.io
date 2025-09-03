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
      description: 'Seamless migration to cloud platforms with modernization strategies for legacy systems.',
      pricing: '$2,999–$15,999/month',
      features: ['AWS/Azure/GCP migration', 'Legacy system modernization', 'Cloud architecture design', 'Performance optimization']
    },
    {
      name: 'Kubernetes & Container Orchestration',
      description: 'Container deployment, orchestration, and management with Kubernetes for scalable applications.',
      pricing: '$1,999–$9,999/month',
      features: ['Kubernetes cluster setup', 'Container orchestration', 'Auto-scaling configuration', 'Service mesh implementation']
    },
    {
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security assessment, hardening, and 24/7 security operations center services.',
      pricing: '$1,499–$7,999/month',
      features: ['Security assessment', 'Vulnerability management', '24/7 SOC monitoring', 'Incident response']
    },
    {
      name: 'Data Engineering & Analytics',
      description: 'Data pipeline development, analytics platforms, and business intelligence solutions.',
      pricing: '$1,999–$9,999/month',
      features: ['Data pipeline development', 'ETL/ELT processes', 'Analytics platform setup', 'Business intelligence dashboards']
    },
    {
      name: 'DevOps & CI/CD Implementation',
      description: 'Automated deployment pipelines, infrastructure as code, and DevOps culture implementation.',
      pricing: '$1,499–$7,999/month',
      features: ['CI/CD pipeline setup', 'Infrastructure as code', 'Automated testing', 'Deployment automation']
    },
    {
      name: 'Database Administration & Optimization',
      description: 'Database design, optimization, backup strategies, and performance tuning services.',
      pricing: '$999–$4,999/month',
      features: ['Database design', 'Performance optimization', 'Backup and recovery', 'High availability setup']
    },
    {
      name: 'Network Infrastructure & Security',
      description: 'Network design, implementation, security, and monitoring for enterprise environments.',
      pricing: '$1,299–$6,999/month',
      features: ['Network architecture design', 'Security implementation', 'Network monitoring', 'VPN and firewall setup']
    },
    {
      name: 'API Development & Integration',
      description: 'RESTful API development, microservices architecture, and third-party integrations.',
      pricing: '$1,199–$5,999/month',
      features: ['API design and development', 'Microservices architecture', 'Third-party integrations', 'API documentation']
    },
    {
      name: 'Infrastructure Monitoring & Alerting',
      description: 'Comprehensive monitoring solutions with proactive alerting and performance optimization.',
      pricing: '$799–$3,999/month',
      features: ['Infrastructure monitoring', 'Performance metrics', 'Automated alerting', 'Capacity planning']
    },
    {
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup strategies and disaster recovery planning for business continuity.',
      pricing: '$999–$4,999/month',
      features: ['Backup strategy design', 'Disaster recovery planning', 'Data replication', 'Recovery testing']
    },
    {
      name: 'IT Consulting & Strategy',
      description: 'Technology strategy consulting, architecture review, and digital transformation planning.',
      pricing: '$299–$1,999/hour',
      features: ['Technology strategy', 'Architecture review', 'Digital transformation', 'Technology roadmap']
    },
    {
      name: 'System Administration & Support',
      description: '24/7 system administration, maintenance, and technical support for IT infrastructure.',
      pricing: '$1,299–$6,999/month',
      features: ['24/7 system administration', 'Proactive maintenance', 'Technical support', 'Performance optimization']
    },
    {
      name: 'Cloud Cost Optimization',
      description: 'Cloud resource optimization, cost analysis, and FinOps implementation for cost efficiency.',
      pricing: '$999–$4,999/month',
      features: ['Cost analysis and optimization', 'Resource right-sizing', 'FinOps implementation', 'Cost monitoring']
    },
    {
      name: 'Compliance & Governance',
      description: 'IT compliance management, governance frameworks, and audit preparation services.',
      pricing: '$1,499–$7,999/month',
      features: ['Compliance assessment', 'Governance framework', 'Audit preparation', 'Policy development']
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with backend integration.',
      pricing: '$2,999–$14,999/month',
      features: ['Native app development', 'Cross-platform solutions', 'Backend integration', 'App store deployment']
    },
    {
      name: 'Web Application Development',
      description: 'Custom web application development with modern frameworks and scalable architectures.',
      pricing: '$2,499–$12,999/month',
      features: ['Custom web development', 'Modern frameworks', 'Scalable architecture', 'Performance optimization']
    }
  ];

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, Kubernetes orchestration, cybersecurity, DevOps, data engineering, and 12+ more enterprise technology solutions." />
        <meta name="keywords" content="IT services, cloud migration, Kubernetes, cybersecurity, DevOps, data engineering, system administration, infrastructure" />
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
              Comprehensive technology solutions for enterprise success
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Our IT services cover the full spectrum of enterprise technology needs, from cloud migration 
              and cybersecurity to DevOps and data engineering. We help businesses build, secure, and scale 
              their technology infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Get IT Consultation
              </Link>
              <Link href="/services" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">16+</h3>
                <p className="text-slate-300">IT Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">$799</h3>
                <p className="text-slate-300">Starting Price</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-green-400 mb-2">24/7</h3>
                <p className="text-slate-300">Support Available</p>
              </div>
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
                <div key={index} className="p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-green-400">{service.name}</h3>
                  <p className="text-slate-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                    <Link href="/contact" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                      Get Quote →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Technology Expertise
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="p-6 bg-slate-800/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">Cloud Platforms</h3>
                  <p className="text-slate-300">AWS, Azure, GCP expertise with migration and optimization</p>
                </div>
              </div>
              <div className="text-center">
                <div className="p-6 bg-slate-800/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Containerization</h3>
                  <p className="text-slate-300">Docker, Kubernetes, and container orchestration</p>
                </div>
              </div>
              <div className="text-center">
                <div className="p-6 bg-slate-800/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-green-400">Security</h3>
                  <p className="text-slate-300">Cybersecurity, compliance, and SOC services</p>
                </div>
              </div>
              <div className="text-center">
                <div className="p-6 bg-slate-800/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-2 text-yellow-400">DevOps</h3>
                  <p className="text-slate-300">CI/CD, automation, and infrastructure as code</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Our IT experts are ready to help you build, secure, and scale your technology infrastructure 
              with modern solutions that drive business growth and efficiency.
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