import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, cybersecurity, and infrastructure management. Enterprise-grade solutions for modern businesses.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          Comprehensive IT services including cloud migration, DevOps, SRE, cybersecurity, 
          and infrastructure management. Enterprise-grade solutions for modern businesses.
        </p>
      </section>

      {/* IT Solutions Showcase */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITSolution
            title="Cloud Migration"
            description="Seamless migration to AWS, Azure, or GCP with zero downtime and optimized performance"
            features={["Infrastructure assessment", "Migration planning", "Data migration", "Security compliance", "Cost optimization"]}
            pricing="$10k-100k"
            icon="☁️"
          />
          <ITSolution
            title="DevOps & SRE"
            description="Complete DevOps implementation with CI/CD pipelines, monitoring, and site reliability engineering"
            features={["CI/CD pipelines", "Infrastructure as Code", "Monitoring & alerting", "Incident response", "Performance optimization"]}
            pricing="$15k-150k"
            icon="⚙️"
          />
          <ITSolution
            title="Cybersecurity"
            description="Comprehensive security solutions including threat detection, vulnerability assessment, and compliance"
            features={["Security audits", "Penetration testing", "Compliance management", "Incident response", "Security training"]}
            pricing="$20k-200k"
            icon="🔒"
          />
          <ITSolution
            title="Infrastructure Management"
            description="24/7 infrastructure monitoring, maintenance, and optimization for maximum uptime"
            features={["Server management", "Database administration", "Backup & recovery", "Performance tuning", "Capacity planning"]}
            pricing="$5k-50k/month"
            icon="🖥️"
          />
          <ITSolution
            title="Network Solutions"
            description="Enterprise networking including SD-WAN, VPN, and network security implementation"
            features={["Network design", "SD-WAN deployment", "VPN setup", "Firewall configuration", "Network monitoring"]}
            pricing="$8k-80k"
            icon="🌐"
          />
          <ITSolution
            title="IT Consulting"
            description="Strategic IT consulting to align technology with business objectives and digital transformation"
            features={["Technology assessment", "Digital strategy", "Vendor selection", "Project management", "Change management"]}
            pricing="$150-300/hour"
            icon="💡"
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
              "AWS, Azure, and GCP migration",
              "Container orchestration (Kubernetes)",
              "Infrastructure as Code (Terraform)",
              "Disaster recovery planning",
              "Cost optimization strategies",
              "Multi-cloud architecture"
            ]} 
          />
          <ITServiceItem 
            title="DevOps & Automation" 
            details={[
              "CI/CD pipeline implementation",
              "GitOps workflows",
              "Infrastructure automation",
              "Configuration management",
              "Release management",
              "Site reliability engineering"
            ]} 
          />
          <ITServiceItem 
            title="Security & Compliance" 
            details={[
              "Security architecture design",
              "Vulnerability management",
              "Compliance frameworks (SOC2, ISO27001)",
              "Identity and access management",
              "Security monitoring and SIEM",
              "Incident response planning"
            ]} 
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCard
            title="Cloud Platforms"
            description="AWS, Azure, Google Cloud Platform"
            icon="☁️"
          />
          <TechCard
            title="DevOps Tools"
            description="Docker, Kubernetes, Jenkins, GitLab"
            icon="🔧"
          />
          <TechCard
            title="Monitoring"
            description="Prometheus, Grafana, ELK Stack"
            icon="📊"
          />
          <TechCard
            title="Security"
            description="WAF, SIEM, Vulnerability Scanners"
            icon="🛡️"
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITPricingPlan 
            name="IT Assessment" 
            price="$5k–$15k" 
            duration="1–2 weeks"
            features={[
              "Infrastructure audit",
              "Security assessment",
              "Performance analysis",
              "Recommendations report",
              "Implementation roadmap"
            ]}
            popular={false}
          />
          <ITPricingPlan 
            name="Managed IT Services" 
            price="$2k–$10k/month" 
            duration="Ongoing"
            features={[
              "24/7 monitoring",
              "Proactive maintenance",
              "Security updates",
              "Backup management",
              "Help desk support"
            ]}
            popular={true}
          />
          <ITPricingPlan 
            name="Enterprise IT" 
            price="Custom" 
            duration="Project-based"
            features={[
              "Custom solutions",
              "Dedicated team",
              "SLA guarantees",
              "Advanced security",
              "Compliance support"
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

function TechCard({ title, description, icon }: {
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
        Ready to Transform Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your IT needs and create a robust, scalable solution. 
        Our team has delivered 200+ successful IT projects across various industries.
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