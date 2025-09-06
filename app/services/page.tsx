import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description: "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
  keywords: "AI services, micro SaaS, IT services, FinTech, HealthTech, EdTech, cloud migration, DevOps, SRE, enterprise software, blockchain, cybersecurity"
};

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  pricing: string;
  category: string;
}

function ServiceCard({ href, title, description, bullets, icon, pricing, category }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">{category}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  description: string;
}

function StatCard({ number, label, description }: StatCardProps) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

export default function ServicesOverviewPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Comprehensive Technology Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          From AI-powered micro SaaS platforms to enterprise IT infrastructure, we deliver cutting-edge solutions 
          that drive growth, efficiency, and innovation across all industries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our expertise is backed by measurable results and satisfied clients across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            number="500+"
            label="Projects Delivered"
            description="Successful implementations across various industries"
          />
          <StatCard
            number="$2B+"
            label="Market Value Created"
            description="Combined value generated for our clients"
          />
          <StatCard
            number="99.9%"
            label="Uptime Guarantee"
            description="Reliable infrastructure and support"
          />
          <StatCard
            number="24/7"
            label="Support Available"
            description="Round-the-clock technical assistance"
          />
        </div>
      </section>

      {/* Core Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions covering every aspect of modern technology needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            href="/services/micro-saas"
            title="Micro SaaS Solutions"
            description="End-to-end development of scalable, revenue-generating micro SaaS platforms with AI integration, automated billing, and growth optimization."
            bullets={[
              "Custom SaaS development",
              "Payment integration (Stripe)",
              "User authentication & management",
              "Analytics & reporting dashboards",
              "API development & documentation",
              "Multi-tenant architecture"
            ]}
            icon="🚀"
            pricing="From $4,999/month"
            category="Micro SaaS"
          />
          <ServiceCard
            href="/services/ai-services"
            title="AI Services & Solutions"
            description="Cutting-edge artificial intelligence solutions including LLM applications, RAG systems, AI agents, and machine learning models."
            bullets={[
              "LLM application development",
              "RAG (Retrieval Augmented Generation)",
              "AI agent creation & deployment",
              "Computer vision solutions",
              "Natural language processing",
              "Predictive analytics & ML models"
            ]}
            icon="🧠"
            pricing="From $2,999/month"
            category="AI Services"
          />
          <ServiceCard
            href="/services/it-services"
            title="IT Services & Infrastructure"
            description="Complete IT infrastructure management including cloud migration, DevOps, SRE, security hardening, and cost optimization."
            bullets={[
              "Cloud migration & optimization",
              "DevOps & CI/CD pipelines",
              "Site Reliability Engineering (SRE)",
              "Security hardening & compliance",
              "Infrastructure monitoring",
              "Cost optimization strategies"
            ]}
            icon="⚙️"
            pricing="From $1,999/month"
            category="IT Services"
          />
          <ServiceCard
            href="/services/fintech"
            title="FinTech Solutions"
            description="Secure, compliant financial technology platforms including payment processing, blockchain integration, and regulatory compliance."
            bullets={[
              "Payment processing systems",
              "Blockchain & cryptocurrency integration",
              "Regulatory compliance (PCI DSS, GDPR)",
              "Risk management systems",
              "Financial analytics & reporting",
              "Mobile banking applications"
            ]}
            icon="💳"
            pricing="From $5,999/month"
            category="FinTech"
          />
          <ServiceCard
            href="/services/healthtech"
            title="HealthTech Platforms"
            description="HIPAA-compliant healthcare technology solutions including telemedicine, patient management, and medical data analytics."
            bullets={[
              "Telemedicine platforms",
              "Patient management systems",
              "Medical data analytics",
              "HIPAA compliance implementation",
              "Electronic health records (EHR)",
              "Healthcare API development"
            ]}
            icon="🏥"
            pricing="From $6,999/month"
            category="HealthTech"
          />
          <ServiceCard
            href="/services/edtech"
            title="EdTech Solutions"
            description="Innovative educational technology platforms including learning management systems, virtual classrooms, and student analytics."
            bullets={[
              "Learning Management Systems (LMS)",
              "Virtual classroom platforms",
              "Student progress analytics",
              "Interactive content creation",
              "Assessment & testing tools",
              "Parent-teacher communication"
            ]}
            icon="🎓"
            pricing="From $3,999/month"
            category="EdTech"
          />
          <ServiceCard
            href="/services/blockchain"
            title="Blockchain & Web3"
            description="Decentralized applications, smart contracts, NFT platforms, and Web3 integration services for the next generation of internet."
            bullets={[
              "Smart contract development",
              "DeFi platform creation",
              "NFT marketplace development",
              "Web3 integration",
              "Cryptocurrency wallet development",
              "Blockchain consulting"
            ]}
            icon="⛓️"
            pricing="From $7,999/month"
            category="Blockchain"
          />
          <ServiceCard
            href="/services/automation"
            title="Process Automation"
            description="Intelligent automation solutions that streamline workflows, reduce manual tasks, and improve operational efficiency."
            bullets={[
              "Workflow automation",
              "RPA (Robotic Process Automation)",
              "Business process optimization",
              "Integration automation",
              "Data processing automation",
              "Custom automation tools"
            ]}
            icon="🤖"
            pricing="From $2,499/month"
            category="Automation"
          />
          <ServiceCard
            href="/services/data-analytics"
            title="Data Analytics & BI"
            description="Advanced data analytics, business intelligence solutions, and data visualization platforms for informed decision-making."
            bullets={[
              "Business intelligence dashboards",
              "Data visualization & reporting",
              "Predictive analytics",
              "Data warehousing",
              "ETL/ELT processes",
              "Real-time data processing"
            ]}
            icon="📊"
            pricing="From $3,499/month"
            category="Data Analytics"
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge technologies and frameworks to build robust, scalable solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "React/Next.js", icon: "⚛️", description: "Frontend frameworks" },
            { name: "Node.js", icon: "🟢", description: "Backend runtime" },
            { name: "Python", icon: "🐍", description: "AI/ML development" },
            { name: "TypeScript", icon: "📘", description: "Type-safe development" },
            { name: "AWS", icon: "☁️", description: "Cloud infrastructure" },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "PostgreSQL", icon: "🐘", description: "Primary database" },
            { name: "MongoDB", icon: "🍃", description: "Document database" },
            { name: "Redis", icon: "🔴", description: "Caching layer" },
            { name: "OpenAI", icon: "🧠", description: "AI language models" },
            { name: "Stripe", icon: "💳", description: "Payment processing" }
          ].map((tech, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery and client satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
            <p className="text-gray-600">We analyze your requirements, define project scope, and create a detailed roadmap.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Design & Architecture</h3>
            <p className="text-gray-600">We create user-centered designs and robust technical architecture for your solution.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Development & Testing</h3>
            <p className="text-gray-600">Agile development with continuous testing and quality assurance throughout the process.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment & Support</h3>
            <p className="text-gray-600">Smooth deployment with ongoing support, monitoring, and maintenance services.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss your requirements and create a custom solution that drives your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Services Consultation Request"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}
