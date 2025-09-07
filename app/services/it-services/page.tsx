<<<<<<< HEAD
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, cybersecurity, and infrastructure management. Enterprise-grade solutions for modern businesses.'
=======
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE'
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready for Reliable IT Solutions?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss your IT needs and how we can build a resilient and efficient infrastructure for your business.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
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
);

export default function ITServicesPage() {
  return (
<<<<<<< HEAD
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Cloud, DevOps, SRE, and security services engineered for uptime, efficiency, and scalability. 
          We help modern businesses build and maintain robust, secure, and cost-effective IT infrastructure.
        </p>
      </section>

      {/* IT Solutions Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITSolution
            title="Cloud Migration & Strategy"
            description="Complete cloud migration services with cost optimization and performance tuning"
            features={["AWS/GCP/Azure migration", "Cost optimization", "Performance tuning", "Disaster recovery", "Multi-cloud strategy"]}
            pricing="$15k-100k"
            icon="☁️"
          />
          <ITSolution
            title="DevOps & CI/CD"
            description="Modern DevOps practices with automated pipelines and infrastructure as code"
            features={["CI/CD pipeline setup", "Infrastructure as Code", "Container orchestration", "Automated testing", "Deployment automation"]}
            pricing="$10k-75k"
            icon="🔄"
          />
          <ITSolution
            title="Site Reliability Engineering"
            description="SRE services to ensure high availability, performance, and reliability of your systems"
            features={["Monitoring & alerting", "Incident response", "Capacity planning", "Chaos engineering", "SLO/SLI management"]}
            pricing="$20k-120k"
            icon="📊"
          />
          <ITSolution
            title="Cybersecurity & Compliance"
            description="Comprehensive security services including penetration testing and compliance management"
            features={["Security assessment", "Penetration testing", "Compliance audit", "Zero Trust implementation", "Security monitoring"]}
            pricing="$25k-150k"
            icon="🔒"
          />
          <ITSolution
            title="Infrastructure Management"
            description="24/7 infrastructure monitoring, maintenance, and optimization services"
            features={["24/7 monitoring", "Proactive maintenance", "Performance optimization", "Capacity management", "Incident response"]}
            pricing="$5k-50k/mo"
            icon="⚙️"
          />
          <ITSolution
            title="Data & Analytics Platform"
            description="Modern data platforms with real-time processing and advanced analytics capabilities"
            features={["Data pipeline design", "Real-time processing", "Data warehousing", "Analytics dashboards", "ML/AI integration"]}
            pricing="$30k-200k"
            icon="📈"
          />
        </div>
      </section>

      {/* Core IT Services */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core IT Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITServiceItem 
            title="Cloud & Infrastructure" 
            details={[
              "AWS, GCP, Azure cloud services",
              "Kubernetes & container orchestration",
              "Serverless architecture design",
              "Infrastructure as Code (Terraform)",
              "Multi-cloud & hybrid cloud solutions",
              "Disaster recovery & backup strategies"
            ]} 
          />
          <ITServiceItem 
            title="DevOps & SRE" 
            details={[
              "CI/CD pipeline implementation",
              "Observability & monitoring setup",
              "Autoscaling & load balancing",
              "Chaos engineering & testing",
              "Incident management processes",
              "Performance optimization"
            ]} 
          />
          <ITServiceItem 
            title="Security & Compliance" 
            details={[
              "Security hardening & assessment",
              "Zero Trust architecture implementation",
              "Vulnerability management",
              "Compliance (SOC2, GDPR, HIPAA)",
              "Security monitoring & SIEM",
              "Penetration testing & audits"
            ]} 
=======
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive IT solutions for modern businesses.
          From cloud migration to cybersecurity, we keep your technology infrastructure running smoothly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a structured approach to deliver reliable and efficient IT solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step={1}
            title="Assessment & Strategy"
            description="Understanding your current IT landscape and defining a strategic roadmap."
          />
          <ProcessStep
            step={2}
            title="Implementation & Migration"
            description="Executing solutions, including cloud migration and system integration."
          />
          <ProcessStep
            step={3}
            title="Optimization & Support"
            description="Continuous monitoring, performance optimization, and ongoing technical support."
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
          />
        </div>
      </section>

<<<<<<< HEAD
      {/* Industry Solutions */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Industry Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IndustryCard
            title="Healthcare"
            description="HIPAA-compliant infrastructure and secure data management"
            icon="🏥"
          />
          <IndustryCard
            title="Financial Services"
            description="PCI DSS compliance and high-availability trading systems"
            icon="🏦"
          />
          <IndustryCard
            title="E-commerce"
            description="Scalable platforms for high-traffic online stores"
            icon="🛒"
          />
          <IndustryCard
            title="SaaS Platforms"
            description="Multi-tenant architecture and API management"
            icon="💻"
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITPricingPlan 
            name="IT Assessment" 
            price="$4k–$10k" 
            duration="2 weeks"
            features={[
              "Infrastructure audit",
              "Security assessment",
              "Performance analysis",
              "Cost optimization review",
              "Strategic roadmap"
            ]}
            popular={false}
          />
          <ITPricingPlan 
            name="Implementation" 
            price="$15k–$50k" 
            duration="4–8 weeks"
            features={[
              "Infrastructure setup",
              "CI/CD pipeline implementation",
              "Monitoring & alerting",
              "Security hardening",
              "3 months support"
            ]}
            popular={true}
          />
          <ITPricingPlan 
            name="Managed Services" 
            price="$5k+/mo" 
            duration="Ongoing"
            features={[
              "24/7 monitoring & support",
              "SLO management",
              "Cost optimization",
              "Security updates",
              "Monthly reporting"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}

function ITSolution({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-bold text-blue-600">{pricing}</div>
    </div>
  );
}

function ITServiceItem({ title, details }: { 
  title: string; 
  details: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IndustryCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function ITPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border-2 rounded-xl p-6 ${popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center mt-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your IT needs and create a robust, secure, and scalable solution. 
        Our team has managed infrastructure for 200+ companies across various industries.
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
    </div>
  );
}

=======
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key IT Service Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized services to cover all aspects of your business technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Cloud Services"
            description="Migration, optimization, and management of cloud infrastructure (AWS, Azure, GCP)."
            icon="☁️"
          />
          <FeatureCard
            title="Cybersecurity"
            description="Robust security solutions, threat detection, and compliance management."
            icon="🔒"
          />
          <FeatureCard
            title="DevOps & SRE"
            description="Automating development workflows and ensuring system reliability and scalability."
            icon="🚀"
          />
          <FeatureCard
            title="Infrastructure Management"
            description="Proactive monitoring, maintenance, and support for your IT systems."
            icon="🖥️"
          />
          <FeatureCard
            title="Enterprise Solutions"
            description="Custom software development and integration for complex business needs."
            icon="🏢"
          />
          <FeatureCard
            title="IT Consulting"
            description="Expert guidance on technology strategy, digital transformation, and IT governance."
            icon="🤝"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
