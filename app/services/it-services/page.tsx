import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT solutions including cloud migration, DevOps, cybersecurity, and infrastructure management. 24/7 support with 99.9% uptime guarantee. Starting at $3,000/month.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure management, IT consulting, system administration'
};

export default function ITServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Comprehensive IT solutions to modernize your infrastructure, enhance security, and optimize performance. From cloud migration to 24/7 support, we keep your systems running smoothly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
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

      {/* Service Categories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Categories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end IT solutions designed to keep your business running efficiently and securely.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCategoryCard
            icon="☁️"
            title="Cloud Services"
            description="Complete cloud migration, optimization, and management solutions"
            services={[
              "AWS/Azure/GCP Migration",
              "Cloud Architecture Design",
              "Cost Optimization",
              "Multi-Cloud Strategy",
              "Cloud Security",
              "Disaster Recovery"
            ]}
            pricing="From $2,500/month"
          />
          <ServiceCategoryCard
            icon="🔧"
            title="DevOps & CI/CD"
            description="Automated deployment pipelines and infrastructure as code"
            services={[
              "CI/CD Pipeline Setup",
              "Infrastructure as Code",
              "Container Orchestration",
              "Monitoring & Logging",
              "Automated Testing",
              "Release Management"
            ]}
            pricing="From $3,000/month"
          />
          <ServiceCategoryCard
            icon="🔒"
            title="Cybersecurity"
            description="Comprehensive security solutions to protect your business"
            services={[
              "Security Assessment",
              "Penetration Testing",
              "Vulnerability Management",
              "Incident Response",
              "Compliance Auditing",
              "Security Training"
            ]}
            pricing="From $2,000/month"
          />
          <ServiceCategoryCard
            icon="🖥️"
            title="Infrastructure Management"
            description="Complete infrastructure setup, monitoring, and maintenance"
            services={[
              "Server Management",
              "Network Design",
              "Database Administration",
              "Backup Solutions",
              "Performance Optimization",
              "Hardware Procurement"
            ]}
            pricing="From $1,500/month"
          />
          <ServiceCategoryCard
            icon="📱"
            title="Help Desk & Support"
            description="24/7 technical support and help desk services"
            services={[
              "24/7 Support Desk",
              "Remote Support",
              "User Training",
              "Issue Resolution",
              "Knowledge Base",
              "SLA Management"
            ]}
            pricing="From $1,000/month"
          />
          <ServiceCategoryCard
            icon="📊"
            title="IT Consulting"
            description="Strategic IT planning and technology roadmaps"
            services={[
              "IT Strategy Planning",
              "Technology Assessment",
              "Digital Transformation",
              "Vendor Management",
              "Budget Planning",
              "ROI Analysis"
            ]}
            pricing="From $200/hour"
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Service Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible IT service plans designed to meet your specific needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ITPricingCard
            name="Essential"
            price="$3,000"
            period="month"
            description="Perfect for small businesses and startups"
            features={[
              "Basic infrastructure monitoring",
              "Email support (8x5)",
              "Monthly security updates",
              "Backup management",
              "Basic cloud services",
              "Quarterly reviews"
            ]}
            cta="Get Started"
            popular={false}
          />
          <ITPricingCard
            name="Professional"
            price="$7,500"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Advanced monitoring & alerting",
              "Priority support (24x7)",
              "Weekly security updates",
              "Automated backups",
              "Cloud optimization",
              "Monthly reviews",
              "DevOps support"
            ]}
            cta="Get Started"
            popular={true}
          />
          <ITPricingCard
            name="Enterprise"
            price="$15,000"
            period="month"
            description="For large organizations with complex needs"
            features={[
              "Comprehensive monitoring",
              "Dedicated support team",
              "Real-time security updates",
              "Disaster recovery",
              "Multi-cloud management",
              "Weekly reviews",
              "Custom solutions"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the latest technologies and tools to deliver cutting-edge IT solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[
            { name: "AWS", icon: "☁️", category: "Cloud" },
            { name: "Azure", icon: "🔵", category: "Cloud" },
            { name: "Google Cloud", icon: "🌐", category: "Cloud" },
            { name: "Docker", icon: "🐳", category: "Containers" },
            { name: "Kubernetes", icon: "⚙️", category: "Orchestration" },
            { name: "Terraform", icon: "🏗️", category: "IaC" },
            { name: "Jenkins", icon: "🔧", category: "CI/CD" },
            { name: "GitLab", icon: "🦊", category: "DevOps" },
            { name: "Ansible", icon: "🤖", category: "Automation" },
            { name: "Prometheus", icon: "📊", category: "Monitoring" },
            { name: "Grafana", icon: "📈", category: "Visualization" },
            { name: "ELK Stack", icon: "🔍", category: "Logging" }
          ].map((tech, index) => (
            <TechCard key={index} name={tech.name} icon={tech.icon} category={tech.category} />
          ))}
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven IT Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our IT services deliver measurable improvements in system reliability, security, and performance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard
            number="99.9%"
            label="Uptime Guarantee"
            description="System availability and reliability"
          />
          <MetricCard
            number="50%"
            label="Cost Reduction"
            description="Average IT cost savings for clients"
          />
          <MetricCard
            number="24/7"
            label="Support Coverage"
            description="Round-the-clock technical support"
          />
          <MetricCard
            number="100%"
            label="Security Compliance"
            description="Clients meeting security standards"
          />
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses transform their IT infrastructure and operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CaseStudyCard
            company="E-commerce Platform"
            challenge="Legacy infrastructure causing frequent outages"
            solution="Complete cloud migration to AWS with auto-scaling"
            result="99.9% uptime, 60% cost reduction"
            industry="E-commerce"
          />
          <CaseStudyCard
            company="Financial Services"
            challenge="Security compliance and data protection"
            solution="Comprehensive security audit and implementation"
            result="100% compliance, zero security incidents"
            industry="Finance"
          />
          <CaseStudyCard
            company="Healthcare Provider"
            challenge="HIPAA compliance and system integration"
            solution="Secure cloud infrastructure with compliance monitoring"
            result="HIPAA compliant, 40% efficiency gain"
            industry="Healthcare"
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven methodology to ensure successful IT implementations and ongoing support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProcessStep
            step="1"
            title="Assessment"
            description="Comprehensive analysis of your current IT infrastructure and requirements"
          />
          <ProcessStep
            step="2"
            title="Planning"
            description="Detailed project plan with timelines, milestones, and resource allocation"
          />
          <ProcessStep
            step="3"
            title="Implementation"
            description="Careful execution of the plan with minimal disruption to your business"
          />
          <ProcessStep
            step="4"
            title="Support"
            description="Ongoing monitoring, maintenance, and support to ensure optimal performance"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let our expert team help you build a robust, secure, and scalable IT environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services - Free Consultation"
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
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function ServiceCategoryCard({ icon, title, description, services, pricing }: {
  icon: string;
  title: string;
  description: string;
  services: string[];
  pricing: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {services.map((service, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {service}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}

function ITPricingCard({ name, price, period, description, features, cta, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function TechCard({ name, icon, category }: {
  name: string;
  icon: string;
  category: string;
}) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-xs text-gray-600">{category}</p>
    </div>
  );
}

function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function CaseStudyCard({ company, challenge, solution, result, industry }: {
  company: string;
  challenge: string;
  solution: string;
  result: string;
  industry: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-blue-600 font-bold text-lg">{company.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{company}</h4>
          <p className="text-sm text-gray-600">{industry}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <h5 className="font-semibold text-gray-900 mb-1">Challenge:</h5>
          <p className="text-sm text-gray-600">{challenge}</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 mb-1">Solution:</h5>
          <p className="text-sm text-gray-600">{solution}</p>
        </div>
        <div>
          <h5 className="font-semibold text-gray-900 mb-1">Result:</h5>
          <p className="text-sm text-green-600 font-semibold">{result}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ step, title, description }: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}