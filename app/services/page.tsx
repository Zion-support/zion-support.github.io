<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Our Services - Zion Tech Group',
  description: 'Comprehensive AI solutions, micro SaaS development, and enterprise IT services.',
=======


import Link from "next/link";

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
};

export default function ServicesPage() {
  const services = [
    {
      title: 'AI & Machine Learning',
      href: '/services/ai-services',
      description: 'Intelligent automation, predictive analytics, and custom AI models.',
      icon: '🤖',
      category: 'AI Solutions'
    },
    {
      title: 'Micro SaaS Development',
      href: '/services/micro-saas',
      description: 'Scalable, secure micro SaaS products for specific business challenges.',
      icon: '🚀',
      category: 'Development'
    },
    {
      title: 'Cloud Infrastructure',
      href: '/services/cloud-services',
      description: 'Scalable cloud solutions, DevOps, and infrastructure management.',
      icon: '☁️',
      category: 'Infrastructure'
    },
    {
      title: 'Blockchain Solutions',
      href: '/services/blockchain',
      description: 'Smart contracts, DeFi platforms, and blockchain integration.',
      icon: '⛓️',
      category: 'Blockchain'
    },
    {
      title: 'Data Analytics',
      href: '/services/data-analytics',
      description: 'Transform raw data into actionable insights with advanced analytics.',
      icon: '📊',
      category: 'Analytics'
    },
    {
      title: 'Cybersecurity',
      href: '/services/cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: '🔒',
      category: 'Security'
    },
    {
      title: 'Project Management',
      href: '/services/project-management',
      description: 'AI-powered project management and team collaboration tools.',
      icon: '📋',
      category: 'Management'
    },
    {
      title: 'E-commerce Solutions',
      href: '/services/ecommerce-platform',
      description: 'Complete e-commerce platforms with AI-powered features.',
      icon: '🛒',
      category: 'E-commerce'
    },
    {
      title: 'Mobile Development',
      href: '/services/mobile-development',
      description: 'Native and cross-platform mobile applications.',
      icon: '📱',
      category: 'Mobile'
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business. 
            From AI-powered automation to complete digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            All Services
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white text-gray-700 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors border border-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                </div>
              </div>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                Learn more
                <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a custom solution 
            that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
=======


    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard 
            number="500+" 
            label="Successful Projects" 
            description="Delivered worldwide" 
          />
          <StatCard 
            number="$2B+" 
            label="Combined Market Value" 
            description="Generated for clients" 
          />
          <StatCard 
            number="99.9%" 
            label="Uptime Guarantee" 
            description="Enterprise reliability" 
          />
          <StatCard 
            number="300%" 
            label="Average ROI" 
            description="Client return on investment" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS Solutions"
          description="Complete micro SaaS development from MVP to scale with billing, analytics, and growth optimization"
          bullets={[
            "Foundational architecture",
            "Billing + subscriptions", 
            "Growth analytics"
          ]}
          icon="🚀"
          pricing="From $2,999/month"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
          icon="🤖"
          pricing="From $5,000/project"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security"]}
          icon="⚙️"
          pricing="From $3,000/month"
        />
        <ServiceCard
          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="Comprehensive blockchain development, DeFi solutions, NFT platforms, and Web3 integration"
          bullets={[
            "Smart contract development",
            "DeFi protocol creation",
            "NFT marketplace platforms",
            "Cross-chain solutions"
          ]}
          icon="⛓️"
          pricing="From $5,000/project"
        />
        <ServiceCard
          href="/services/ai-automation-suite"
          title="AI Automation Suite"
          description="Intelligent automation solutions including RPA, workflow automation, and process optimization"
          bullets={[
            "80% manual task reduction",
            "300% productivity increase",
            "RPA implementation",
            "Workflow orchestration"
          ]}
          icon="🤖"
          pricing="From $2,500/month"
        />
        <ServiceCard
          href="/services/cybersecurity-solutions"
          title="Cybersecurity Solutions"
          description="Comprehensive security services including threat detection, compliance, and 24/7 monitoring"
          bullets={[
            "99.9% security uptime",
            "Threat detection & response",
            "Compliance management",
            "24/7 monitoring"
          ]}
          icon="🛡️"
          pricing="From $2,500/month"
        />
        <ServiceCard
          href="/services/cloud-solutions"
          title="Cloud Solutions"
          description="Cloud migration, optimization, and management services for AWS, Azure, and GCP"
          bullets={[
            "99.9% cloud uptime",
            "40% cost reduction",
            "Multi-cloud support",
            "24/7 monitoring"
          ]}
          icon="☁️"
          pricing="From $3,000/month"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics & BI"
          description="Advanced analytics, business intelligence, and machine learning solutions"
          bullets={[
            "95% data accuracy",
            "300% faster insights",
            "Machine learning models",
            "Real-time dashboards"
          ]}
          icon="📊"
          pricing="From $3,500/month"
        />
      </div>
      
      <CTA />
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
  pricing
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  pricing: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

function StatCard({ 
  number, 
  label, 
  description 
}: { 
  number: string; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Talk to our experts about your project. We'll help you choose the right
        service and create a custom solution for your business needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>

>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
    </div>
  );
}

=======
import ComprehensiveServicesShowcase2025 from '../../components/ComprehensiveServicesShowcase2025';

export const metadata = {
  title: 'Comprehensive Services 2025 | Zion Tech Group - AI, Micro SaaS & IT Solutions',
  description: 'Explore our extensive portfolio of 20+ innovative micro SAAS solutions, AI services, and IT solutions. From AI customer insights to blockchain solutions, we deliver enterprise-grade services that drive business transformation.',
  keywords: 'micro saas, ai services, it solutions, business automation, cloud infrastructure, cybersecurity, data analytics, project management, e-commerce, healthcare, edtech, blockchain, fintech, enterprise solutions',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Comprehensive Services 2025 | Zion Tech Group',
    description: 'Explore our extensive portfolio of innovative micro SAAS solutions, AI services, and IT solutions designed to transform your business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprehensive Services 2025 | Zion Tech Group',
    description: 'Explore our extensive portfolio of innovative micro SAAS solutions, AI services, and IT solutions designed to transform your business.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicePage() {
  return <ComprehensiveServicesShowcase2025 />;
}
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
