import type { NextPage } from 'next';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
<<<<<<< HEAD
=======
const ServicesPage: NextPage = () => {;
  return (;
    <div>;
      <Head>;
        <title>Services - Zion Tech Group</title>;
        <meta name="description" content="Explore our comprehensive AI micro SaaS, IT, and AI services with transparent pricing." />;
      </Head>;
      <main style={{ fontFamily: 'system-ui, sans-serif', lineHeight: 1.5, padding: '32px', maxWidth: 1120, margin: '0 auto' }}>;
        <h1 style={{ marginTop: 0 }}>AI-Powered Micro SAAS Solutions</h1>;
        <p>Discover our comprehensive suite of AI-powered micro SaaS services, IT solutions, and AI platforms with transparent pricing and rapid deployment.</p>;
>>>>>>> origin/automation-fixes

const Services: NextPage = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge AI solutions to transform your business",
      services: [
        { name: "AI Model Development", href: "/services/ai-model-development", price: "Starting at $2,500/month" },
        { name: "Chatbot Development", href: "/services/ai-chatbot-development", price: "Starting at $1,200/month" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics", price: "Starting at $3,000/month" },
        { name: "Computer Vision", href: "/services/computer-vision", price: "Starting at $4,000/month" },
        { name: "Natural Language Processing", href: "/services/nlp-services", price: "Starting at $2,800/month" }
      ]
    },
    {
      title: "Cloud & Infrastructure Services",
      description: "Scalable cloud solutions for modern businesses",
      services: [
        { name: "Cloud Migration", href: "/services/cloud-migration", price: "Starting at $5,000/project" },
        { name: "DevOps Automation", href: "/services/devops-automation", price: "Starting at $3,500/month" },
        { name: "Container Orchestration", href: "/services/container-orchestration", price: "Starting at $2,200/month" },
        { name: "Serverless Architecture", href: "/services/serverless-architecture", price: "Starting at $1,800/month" },
        { name: "Cloud Security", href: "/services/cloud-security", price: "Starting at $2,500/month" }
      ]
    },
    {
      title: "Software Development Services",
      description: "Custom software solutions tailored to your needs",
      services: [
        { name: "Web Application Development", href: "/services/web-development", price: "Starting at $4,000/project" },
        { name: "Mobile App Development", href: "/services/mobile-development", price: "Starting at $6,000/project" },
        { name: "API Development", href: "/services/api-development", price: "Starting at $2,000/project" },
        { name: "Microservices Architecture", href: "/services/microservices", price: "Starting at $8,000/project" },
        { name: "Legacy System Modernization", href: "/services/legacy-modernization", price: "Starting at $10,000/project" }
      ]
    },
    {
      title: "Data & Analytics Services",
      description: "Transform data into actionable business insights",
      services: [
        { name: "Data Pipeline Engineering", href: "/services/data-pipeline-engineering", price: "Starting at $3,500/month" },
        { name: "Business Intelligence", href: "/services/business-intelligence", price: "Starting at $2,800/month" },
        { name: "Real-time Analytics", href: "/services/real-time-analytics", price: "Starting at $4,200/month" },
        { name: "Data Visualization", href: "/services/data-visualization", price: "Starting at $2,000/project" },
        { name: "Database Design", href: "/services/database-design", price: "Starting at $1,500/project" }
      ]
    },
    {
      title: "Security & Compliance Services",
      description: "Protect your business with enterprise-grade security",
      services: [
        { name: "Security Auditing", href: "/services/security-auditing", price: "Starting at $3,000/audit" },
        { name: "Network Security", href: "/services/network-security", price: "Starting at $2,500/month" },
        { name: "Compliance Management", href: "/services/compliance-management", price: "Starting at $4,000/month" },
        { name: "Penetration Testing", href: "/services/penetration-testing", price: "Starting at $5,000/test" },
        { name: "Security Training", href: "/services/security-training", price: "Starting at $1,500/session" }
      ]
    },
    {
      title: "Automation & Integration Services",
      description: "Streamline operations with intelligent automation",
      services: [
        { name: "Workflow Automation", href: "/services/workflow-automation", price: "Starting at $2,000/month" },
        { name: "System Integration", href: "/services/system-integration", price: "Starting at $3,500/project" },
        { name: "RPA Solutions", href: "/services/rpa-solutions", price: "Starting at $4,500/month" },
        { name: "API Integration", href: "/services/api-integration", price: "Starting at $1,800/project" },
        { name: "Process Optimization", href: "/services/process-optimization", price: "Starting at $2,200/month" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
=======
import UltraAdvancedFuturisticBackground from '../../components/ui/UltraAdvancedFuturisticBackground';
import Card from '../../components/ui/Card';
import Link from 'next/link';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025'
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realServicesQ42025 } from '../../data/real-services-q4-2025';

// Define a common service interface
interface Service {
  id?: string;
  name: string;
  description?: string;
  price?: string;
  category?: string;
  popular?: boolean;
  launchDate?: string;
  [key: string]: unknown; // Allow additional properties
}

// Define a unified service interface
interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  category: string;
  features: string[];
  popular?: boolean;
  icon?: string;
  link?: string;
}

// Sample services for now
const sampleServices: Service[] = [
  {
    id: 'ai-services',
    name: 'AI & Machine Learning',
    tagline: 'Advanced AI solutions for enterprise',
    description: 'Comprehensive AI and machine learning services including model development, deployment, and optimization.',
    price: '$2,999/month',
    category: 'AI',
    features: ['Custom AI Models', 'MLOps Pipeline', 'Real-time Analytics', '24/7 Support'],
    popular: true,
    link: '/ai-services'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    tagline: 'Next-generation quantum solutions',
    description: 'Revolutionary quantum computing services for complex optimization and cryptography challenges.',
    price: '$9,999/month',
    category: 'Quantum',
    features: ['Quantum Algorithms', 'Cryptography', 'Optimization', 'Research Support'],
    link: '/quantum-computing'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    tagline: 'Enterprise security solutions',
    description: 'Comprehensive cybersecurity services to protect your digital assets and infrastructure.',
    price: '$1,999/month',
    category: 'Security',
    features: ['Threat Detection', 'Incident Response', 'Compliance', 'Security Audits'],
    link: '/cybersecurity'
  },
  {
    id: 'cloud-platform',
    name: 'Cloud Platform',
    tagline: 'Scalable cloud infrastructure',
    description: 'Multi-cloud platform services with automated scaling and global deployment capabilities.',
    price: '$1,499/month',
    category: 'Cloud',
    features: ['Multi-Cloud', 'Auto-scaling', 'Global CDN', 'DevOps Tools'],
    link: '/cloud-platform'
  },
  {
    id: 'space-technology',
    name: 'Space Technology',
    tagline: 'Innovative space solutions',
    description: 'Cutting-edge space technology services for satellite operations and space missions.',
    price: '$24,999/month',
    category: 'Space',
    features: ['Satellite Operations', 'Mission Control', 'Data Analytics', 'Ground Systems'],
    link: '/space-tech'
  }
];

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      augmentedServicesBatch3 as unknown[],
      realServicesQ22025 as unknown[],
      realServicesQ32025 as unknown[],
      realServicesQ42025 as unknown[]
    );
    return acc;
  }, {} as Record<string, Service[]>);





  return (
    <UltraAdvancedFuturisticBackground>
>>>>>>> origin/automation/changelog
      <Head>
        <title>Our Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI development, cloud solutions, software development, data analytics, security, and automation services. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, cloud solutions, software development, data analytics, cybersecurity, automation, micro SAAS, technology consulting" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Technology Services
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth. 
            From AI-powered micro SAAS applications to enterprise-grade infrastructure, 
            we deliver innovative solutions that drive real results.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
            <p className="mb-4">Contact our experts today for a free consultation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </section>

            {/* Featured Services */}
            {featuredServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Featured Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredServices.map((service: Service, index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${index}`}
                      service={service}
                      variant="quantum"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Latest Services */}
            {latestServices.length > 0 && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Latest Services (2026)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {latestServices.map((service: Service, index: number) => (
                    <UltraFuturisticServiceCard2026
                      key={`${service.id || service.name}-${index}`}
                      service={service}
                      variant="ai"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Services by Category */}
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Services by Category
              </h2>
              <div className="space-y-12">
                {categories.map((category) => {
                  const categoryServices = servicesByCategory[category];
                  if (!categoryServices || categoryServices.length === 0) return null;

                  return (
                    <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <span className="text-3xl">
                          {category === 'AI & Data' && '🧠'}
                          {category === 'Developer Tools' && '⚙️'}
                          {category === 'Cloud & FinOps' && '☁️'}
                          {category === 'Observability' && '📊'}
                          {category === 'Quality & Monitoring' && '🔍'}
                          {category === 'Quantum Computing' && '⚛️'}
                          {category === 'Space Technology' && '🚀'}
                          {category === 'Metaverse' && '🌐'}
                          {category === 'Cybersecurity' && '🛡️'}
                          {category === 'Supply Chain' && '📦'}
                          {category === 'Financial Services' && '💰'}
                          {category === 'Healthcare' && '🏥'}
                          {category === 'Manufacturing' && '🏭'}
                          {category === 'Retail' && '🛍️'}
                          {category === 'Education' && '📚'}
                          {category === 'Government' && '🏛️'}
                          {category === 'Energy' && '⚡'}
                          {category === 'Transportation' && '🚗'}
                        </span>
                        {category}
                        <span className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm text-gray-300">
                          {categoryServices.length} services
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                          <UltraFuturisticServiceCard2026
                            key={`${service.id || service.name}-${index}`}
                            service={service}
                            variant="default"
                          />
                        ))}
                      </div>
                      {categoryServices.length > 6 && (
                        <div className="mt-6 text-center">
                          <Link
                            href={`/services/category/${toSlug(category)}`}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            View All {category} Services
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Our team of experts can help you build custom solutions tailored to your specific needs. 
                  Let's discuss how we can transform your business with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
<<<<<<< HEAD
=======
      </UltraFuturisticBackground>

        {categories.map((cat) => (
          <section key={cat} id={anchorMap[cat] || toSlug(cat)}>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {byCategory[cat].slice(0, (shownCounts[cat] ?? 12)).map((s) => {
                const service = s as { id?: string; name?: string; link?: string; category?: string; tagline?: string; description?: string; price?: string; period?: string };
                const slug = service.link ? (() => { try { const u = new URL(service.link); const p = u.pathname.replace(/^\/+|\/+$/g, ''); return p.startsWith('services/') ? p.substring('services/'.length) : toSlug(service.id || service.name || ''); } catch { return toSlug(service.id || service.name || ''); } })() : toSlug(service.id || service.name || '');
                return (
                  <Card key={service.id || service.name} className="p-6 bg-black/50 border border-gray-700/60 hover:border-cyan-500/50 transition-colors shadow-lg/10">
                    <div className="text-sm text-gray-400 mb-1">{service.category || 'Service'}</div>
                    <h3 className="text-white text-xl font-semibold mb-2">{service.name}</h3>
                    <p className="text-gray-300/90 line-clamp-3 mb-3">{service.tagline || service.description}</p>
                    <div className="text-gray-100 font-bold mb-4">{service.price}<span className="text-sm text-gray-400 font-medium">{service.period}</span></div>
                    <div className="flex gap-3">
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-glow hover:shadow-glow-lg">View</Link>
                      <Link href={service.link || `/${slug}`} className="px-4 py-2 rounded-lg border border-gray-600 text-gray-200 hover:border-cyan-500/70">Learn</Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Featured Services */}
          {featuredServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Featured Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredServices.map((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${index}`}
                    service={service}
                    variant="quantum"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Latest Services */}
          {latestServices.length > 0 && (
            <section className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Latest Services (2026)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestServices.map((service: Service, index: number) => (
                  <UltraFuturisticServiceCard2026
                    key={`${service.id || service.name}-${index}`}
                    service={service}
                    variant="ai"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Services by Category */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Services by Category
            </h2>
            <div className="space-y-12">
              {categories.map((category) => {
                const categoryServices = servicesByCategory[category];
                if (!categoryServices || categoryServices.length === 0) return null;

                return (
                  <div key={category} className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <span className="text-3xl">
                        {category === 'AI & Data' && '🧠'}
                        {category === 'Developer Tools' && '⚙️'}
                        {category === 'Cloud & FinOps' && '☁️'}
                        {category === 'Observability' && '📊'}
                        {category === 'Quality & Monitoring' && '🔍'}
                        {category === 'Quantum Computing' && '⚛️'}
                        {category === 'Space Technology' && '🚀'}
                        {category === 'Metaverse' && '🌐'}
                        {category === 'Cybersecurity' && '🛡️'}
                        {category === 'Supply Chain' && '📦'}
                        {category === 'Financial Services' && '💰'}
                        {category === 'Healthcare' && '🏥'}
                        {category === 'Manufacturing' && '🏭'}
                        {category === 'Retail' && '🛍️'}
                        {category === 'Education' && '🎓'}
                        {category === 'Government' && '🏛️'}
                        {category === 'Energy' && '⚡'}
                        {category === 'Transportation' && '🚗'}
                      </span>
                      {category}
                      <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {categoryServices.length} services
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.slice(0, 6).map((service: Service, index: number) => (
                        <UltraFuturisticServiceCard2026
                          key={`${service.id || service.name}-${index}`}
                          service={service}
                          variant="default"
                        />
                      ))}
                    </div>
                    {categoryServices.length > 6 && (
                      <div className="text-center mt-6">
                        <Link
                          href={`/services/category/${toSlug(category)}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all"
                        >
                          View All {category} Services ({categoryServices.length})
                        </Link>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-6">
                      <div className="text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold">{service.name.charAt(0)}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    <p className="text-cyan-400 text-sm mb-4">
                      {service.tagline}
                    </p>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-white">
                        {service.price}
                      </div>
                      {service.link && (
                        <a
                          href={service.link}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                        >
                          Learn More
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss how our services can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Sales
                </a>
                <a
                  href="/get-started"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}
>>>>>>> origin/automation/changelog

        <div className="space-y-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">{category.title}</h2>
              <p className="text-gray-300 mb-8 text-lg">{category.description}</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-green-400 font-semibold mb-4">{service.price}</p>
                    <Link 
                      href={service.href} 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p>Certified professionals with 10+ years of experience in cutting-edge technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p>Round-the-clock support to ensure your systems run smoothly</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Scalable Solutions</h3>
              <p>Solutions that grow with your business, from startup to enterprise</p>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">Let's discuss how we can help transform your business with technology</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Call Now: +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Send Email
            </a>
          </div>
          <p className="mt-4 text-sm">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </main>
    </div>
  );
<<<<<<< HEAD
};

export default Services;
=======
        <h2 id="contact">Contact Information</h2>;
        <div style={{ backgroundColor: '#f8f9fa', padding: '24px', borderRadius: '8px', marginTop: '24px' }}>;
          <h3 style={{ marginTop: 0 }}>Get in Touch</h3>;
          <p><strong>Mobile:</strong> <a href="tel:+13024640950">+1 302 464 0950</a></p>;
          <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>;
          <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>;
          <p><strong>Website:</strong> <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer">https://ziontechgroup.com</a></p>;
          <div style={{ marginTop: '16px' }}>;
            <Link href="/contact" style={{ ;
              backgroundColor: '#007bff',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              display: 'inline-block';
}}>;
              Request a Quote;
            </Link>;
          </div>;
        </div>;
      </main>;
    </div>;
  );
};
export default ServicesPage;
>>>>>>> origin/automation-fixes
=======
}
>>>>>>> origin/automation/changelog
