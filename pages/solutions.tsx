import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Solutions() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const solutionCategories = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade solutions for large organizations",
      features: ["Scalable Architecture", "Enterprise Security", "24/7 Support", "Custom Integration"],
      link: "/solutions/enterprise",
      icon: "🏢"
    },
    {
      title: "Micro SaaS Products",
      description: "Lightweight, focused software solutions for specific business needs",
      features: ["Quick Deployment", "Cost-Effective", "User-Friendly", "API Integration"],
      link: "/micro-saas",
      icon: "⚡"
    },
    {
      title: "AI-Powered Solutions",
      description: "Intelligent automation and AI-driven business solutions",
      features: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Automation"],
      link: "/ai-services",
      icon: "🤖"
    },
    {
      title: "Cloud & DevOps",
      description: "Modern cloud infrastructure and development operations",
      features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring"],
      link: "/cloud-devops",
      icon: "☁️"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Threat Detection", "Security Audits", "Compliance", "Incident Response"],
      link: "/cybersecurity",
      icon: "🔒"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions and research",
      features: ["Quantum Algorithms", "Quantum Simulation", "Research & Development", "Future Tech"],
      link: "/quantum-computing",
      icon: "⚛️"
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group | Enterprise & Technology Solutions</title>
        <meta name="description" content="Comprehensive technology solutions including enterprise systems, micro SaaS products, AI services, cloud DevOps, cybersecurity, and quantum computing solutions." />
        <meta name="keywords" content="enterprise solutions, micro SaaS, AI solutions, cloud DevOps, cybersecurity, quantum computing, technology solutions" />
        <link rel="canonical" href={`${contact.site}/solutions`} />
        <meta property="og:title" content="Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology solutions for modern businesses" />
        <meta property="og:url" content={`${contact.site}/solutions`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="/services-catalog" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Solution Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">{solution.title}</h3>
                  <p className="text-slate-300 mb-6">{solution.description}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={solution.link} className="inline-block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let our experts help you choose the right solution for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}