import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions',
  description: 'Comprehensive technology services including AI development, micro SaaS solutions, financial technology, healthcare technology, and educational technology. Transform your business with cutting-edge solutions.',
  keywords: 'AI services, micro SaaS, FinTech, HealthTech, EdTech, technology solutions, software development, digital transformation'
};

export default function ServicesOverviewPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive technology solutions to accelerate your digital transformation. 
          From AI development to micro SaaS products, we deliver enterprise-grade solutions that drive real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Featured AI Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured AI Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Revolutionary AI-powered solutions that transform how businesses operate and compete.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI-Powered CRM Platform"
            href="/services/ai-powered-crm"
            description="Revolutionary CRM with predictive analytics, automated lead scoring, and intelligent customer insights"
            bullets={[
              "Predictive lead scoring (95% accuracy)",
              "Intelligent automation",
              "Advanced analytics dashboard",
              "AI chat assistant",
              "Personalized engagement"
            ]}
            icon="🎯"
            price="From $99/month"
          />
          <ServiceCard
            title="Smart Invoice Generator"
            href="/services/smart-invoice-generator"
            description="AI-powered invoice automation with data extraction, smart categorization, and payment tracking"
            bullets={[
              "AI data extraction (99.2% accuracy)",
              "Smart categorization",
              "Payment tracking & reminders",
              "Financial analytics dashboard",
              "Advanced security & compliance"
            ]}
            icon="💰"
            price="From $29/month"
          />
          <ServiceCard
            title="AI Project Manager"
            href="/services/ai-project-manager"
            description="Intelligent project management with predictive analytics, resource optimization, and risk assessment"
            bullets={[
              "Predictive risk assessment",
              "Smart resource optimization",
              "Intelligent analytics dashboard",
              "Automated task management",
              "AI project assistant"
            ]}
            icon="📊"
            price="From $49/user/month"
          />
        </div>
      </section>

      {/* Advanced AI Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge AI technologies for specialized industries and complex business challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Financial Analytics"
            href="/services/ai-financial-analytics"
            description="Intelligent financial intelligence platform with predictive modeling and investment optimization"
            bullets={[
              "Predictive market analysis (87% accuracy)",
              "Portfolio optimization",
              "Risk assessment engine",
              "Alternative data integration",
              "Automated trading signals"
            ]}
            icon="📈"
            price="From $2,500/month"
          />
          <ServiceCard
            title="AI Healthcare Assistant"
            href="/services/ai-healthcare-assistant"
            description="Medical AI platform with diagnosis support, patient monitoring, and clinical decision support"
            bullets={[
              "Clinical decision support",
              "Medical image analysis (95%+ accuracy)",
              "Drug interaction checking",
              "Patient monitoring",
              "Electronic health records"
            ]}
            icon="🩺"
            price="From $1,500/month"
          />
          <ServiceCard
            title="AI Services Suite"
            href="/services/ai-services"
            description="Comprehensive AI development including custom LLMs, RAG systems, and computer vision"
            bullets={[
              "Custom LLM development",
              "RAG systems",
              "Computer vision",
              "Natural language processing",
              "MLOps & deployment"
            ]}
            icon="🤖"
            price="From $6,000/project"
          />
        </div>
      </section>

      {/* IT & Cloud Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT & Cloud Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete IT infrastructure solutions with AI-powered optimization and enterprise-grade security.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Cloud Optimization"
            href="/services/cloud-optimization"
            description="AI-powered cloud cost reduction and performance enhancement across AWS, Azure, and GCP"
            bullets={[
              "AI cost optimization (up to 60% savings)",
              "Performance enhancement",
              "Security hardening",
              "Intelligent monitoring",
              "Automated scaling"
            ]}
            icon="☁️"
            price="From $2,500/audit"
          />
          <ServiceCard
            title="IT Services"
            href="/services/it-services"
            description="Complete IT infrastructure, cloud migration, and digital transformation solutions"
            bullets={[
              "Cloud migration",
              "DevOps & CI/CD",
              "Infrastructure management",
              "Security solutions",
              "24/7 support"
            ]}
            icon="💻"
            price="From $5,000/month"
          />
          <ServiceCard
            title="Cybersecurity Suite"
            href="/services/cybersecurity"
            description="Comprehensive security solutions with AI-powered threat detection and response"
            bullets={[
              "Penetration testing",
              "Security audits",
              "Threat detection",
              "Incident response",
              "Compliance management"
            ]}
            icon="🔒"
            price="From $3,000/month"
          />
        </div>
      </section>

      {/* Micro SaaS Solutions */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready-to-launch micro SaaS products with built-in billing, authentication, and growth features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Micro SaaS Development"
            href="/services/micro-saas"
            description="End-to-end micro SaaS product development with billing, auth, analytics and growth optimization"
            bullets={[
              "Custom SaaS development",
              "Payment integration",
              "User authentication",
              "Analytics dashboard",
              "API development"
            ]}
            icon="🚀"
            price="From $15,000"
          />
          <ServiceCard
            title="Blockchain Solutions"
            href="/services/blockchain"
            description="Smart contracts, DeFi protocols, NFT platforms and Web3 solutions"
            bullets={[
              "Smart contract development",
              "DeFi protocols",
              "NFT marketplaces",
              "Web3 applications",
              "Token economics"
            ]}
            icon="⛓️"
            price="From $25,000"
          />
          <ServiceCard
            title="Cloud Services"
            href="/services/cloud-services"
            description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP"
            bullets={[
              "Cloud migration",
              "Architecture design",
              "Cost optimization",
              "Security implementation",
              "Performance tuning"
            ]}
            icon="☁️"
            price="From $10,000"
          />
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized technology solutions tailored for specific industries and use cases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <IndustryCard
            title="FinTech Solutions"
            icon="💳"
            description="Payment processing, digital banking, and financial analytics"
            features={["Payment gateways", "Digital wallets", "Risk assessment", "Compliance automation"]
          />
          <IndustryCard
            title="HealthTech Solutions"
            icon="🏥"
            description="Medical AI, patient management, and healthcare analytics"
            features={["Medical AI", "Patient portals", "Telemedicine", "Health analytics"]
          />
          <IndustryCard
            title="EdTech Solutions"
            icon="🎓"
            description="Learning management systems and educational AI"
            features={["LMS platforms", "AI tutoring", "Assessment tools", "Learning analytics"]
          />
          <IndustryCard
            title="E-commerce Solutions"
            icon="🛒"
            description="Online stores, inventory management, and customer analytics"
            features={["E-commerce platforms", "Inventory AI", "Customer insights", "Marketing automation"]
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Rapid development and deployment with agile methodologies</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
            <p className="text-gray-600">Tailored solutions that fit your specific business needs</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that drives real business value. 
            Our team has delivered 1000+ successful projects across various industries.
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
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, href, description, bullets = [], icon, price }: {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  price?: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {price && (
        <div className="text-lg font-semibold text-blue-600 mb-2">{price}</div>
      )}
      <div className="text-sm text-blue-600 font-medium">
        Learn More →
      </div>
    </Link>
  );
}

function IndustryCard({ title, icon, description, features }: {
  title: string;
  icon: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}