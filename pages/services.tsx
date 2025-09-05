import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  const serviceCategories = [
    {
      id: 'micro-saas',
      name: 'Micro SaaS Products',
      description: 'Innovative, focused software solutions for specific business needs',
      services: [
        'AI-Powered Video Clip Maker',
        'Smart Contract Analyzer',
        'Cybersecurity Threat Intelligence',
        'Multi-Language Website Translator',
        'Predictive Inventory Optimizer',
        'AI-Powered Content Generator',
        'Real-time Analytics Dashboard',
        'Automated Testing Suite'
      ],
      color: 'blue'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      services: [
        'Autonomous AI Agents',
        'AI-Powered Financial Trading',
        'AI Legal Document Analysis',
        'AI-Powered Voice Analytics',
        'AI-Powered Search & Discovery',
        'Machine Learning Model Training',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ],
      color: 'purple'
    },
    {
      id: 'it-services',
      name: 'IT & Cloud Services',
      description: 'Comprehensive IT solutions for enterprise-grade operations',
      services: [
        'Quantum Computing Consulting',
        'Blockchain & Web3 Solutions',
        'DevSecOps & Security Automation',
        'Enterprise Data Platform',
        'High-Performance Computing',
        'Cloud Migration Services',
        'Infrastructure as Code',
        'Disaster Recovery Solutions'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/20',
          text: 'text-blue-400',
          hover: 'hover:border-blue-500/40'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/20',
          text: 'text-purple-400',
          hover: 'hover:border-purple-500/40'
        };
      case 'green':
        return {
          bg: 'bg-green-500/10',
          border: 'border-green-500/20',
          text: 'text-green-400',
          hover: 'hover:border-green-500/40'
        };
      default:
        return {
          bg: 'bg-slate-500/10',
          border: 'border-slate-500/20',
          text: 'text-slate-400',
          hover: 'hover:border-slate-500/40'
        };
    }
  };

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of micro SaaS products, AI services, and IT solutions designed to transform your business." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, blockchain, quantum computing" />
      </Head>
      
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {serviceCategories.map((category) => {
                const colors = getColorClasses(category.color);
                return (
                  <div
                    key={category.id}
                    className={`p-8 rounded-xl border ${colors.bg} ${colors.border} ${colors.hover} transition-all duration-300 hover:scale-105`}
                  >
                    <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>
                      {category.name}
                    </h3>
                    <p className="text-slate-300 mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {category.services.map((service, index) => (
                        <li key={index} className="text-slate-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/${category.id}`}
                      className={`inline-flex items-center ${colors.text} hover:opacity-80 font-semibold transition-opacity`}
                    >
                      Learn More →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Contact our experts to discuss your project requirements and discover 
              how our solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}