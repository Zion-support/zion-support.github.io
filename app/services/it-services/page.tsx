import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management for enterprise-grade solutions.',
};

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cloud, DevOps, SRE, and security services engineered for uptime, efficiency, and scalability. 
              We help modernize your infrastructure and optimize your IT operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our IT Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade IT solutions that ensure reliability, security, and scalability for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ITServiceCard
              title="Cloud Migration & Management"
              description="Complete cloud migration with modern architecture, cost optimization, and performance tuning for AWS, Azure, and GCP."
              features={[
                "Multi-cloud strategy development",
                "Container orchestration (Kubernetes)",
                "Serverless architecture design",
                "Cost optimization & monitoring",
                "Disaster recovery planning",
                "24/7 cloud management"
              ]}
              pricing="$15,000-75,000"
              marketSize="$480B cloud computing market"
              icon="☁️"
            />
            <ITServiceCard
              title="DevOps & CI/CD"
              description="Automated deployment pipelines with monitoring, testing, and quality gates for faster, more reliable releases."
              features={[
                "GitOps workflow implementation",
                "Automated testing integration",
                "Blue-green deployments",
                "Infrastructure as Code (IaC)",
                "Monitoring & alerting setup",
                "Performance optimization"
              ]}
              pricing="$8,000-35,000"
              marketSize="$7.2B DevOps market"
              icon="🔄"
            />
            <ITServiceCard
              title="Cybersecurity & Compliance"
              description="Comprehensive security assessment, hardening, and compliance management for enterprise-grade protection."
              features={[
                "Security audits & assessments",
                "Penetration testing",
                "Compliance framework implementation",
                "Zero Trust architecture",
                "Incident response planning",
                "Security training & awareness"
              ]}
              pricing="$12,000-50,000"
              marketSize="$155B cybersecurity market"
              icon="🔒"
            />
            <ITServiceCard
              title="Site Reliability Engineering (SRE)"
              description="SRE practices with monitoring, alerting, and incident management for maximum system reliability."
              features={[
                "SLO/SLI definition & monitoring",
                "Error budget management",
                "Incident response automation",
                "Performance optimization",
                "Capacity planning",
                "Post-mortem analysis"
              ]}
              pricing="$10,000-45,000"
              marketSize="$2.8B SRE market"
              icon="⚡"
            />
            <ITServiceCard
              title="Infrastructure Automation"
              description="Infrastructure as Code, automated provisioning, and configuration management for consistent, scalable systems."
              features={[
                "Terraform/CloudFormation setup",
                "Ansible configuration management",
                "Automated provisioning",
                "Configuration drift detection",
                "Environment standardization",
                "Backup & recovery automation"
              ]}
              pricing="$6,000-25,000"
              marketSize="$4.1B infrastructure automation market"
              icon="🏗️"
            />
            <ITServiceCard
              title="Database Management"
              description="Database design, optimization, migration, and management for high-performance, scalable data systems."
              features={[
                "Database design & optimization",
                "Migration & consolidation",
                "Performance tuning",
                "Backup & recovery strategies",
                "High availability setup",
                "Database monitoring & alerting"
              ]}
              pricing="$5,000-30,000"
              marketSize="$65B database market"
              icon="🗄️"
            />
            <ITServiceCard
              title="Network & Security"
              description="Network design, security implementation, and monitoring for secure, high-performance connectivity."
              features={[
                "Network architecture design",
                "Firewall configuration",
                "VPN & remote access setup",
                "Network monitoring & analysis",
                "Security policy implementation",
                "Traffic optimization"
              ]}
              pricing="$7,000-40,000"
              marketSize="$12.8B network security market"
              icon="🌐"
            />
            <ITServiceCard
              title="Monitoring & Observability"
              description="Comprehensive monitoring, logging, and observability solutions for proactive system management."
              features={[
                "Application performance monitoring",
                "Infrastructure monitoring",
                "Log aggregation & analysis",
                "Distributed tracing",
                "Alerting & notification setup",
                "Custom dashboard creation"
              ]}
              pricing="$4,000-20,000"
              marketSize="$3.2B monitoring market"
              icon="📊"
            />
            <ITServiceCard
              title="IT Consulting & Strategy"
              description="Strategic IT planning, technology assessment, and digital transformation consulting for business growth."
              features={[
                "IT strategy development",
                "Technology assessment",
                "Digital transformation planning",
                "Vendor evaluation & selection",
                "IT governance setup",
                "Change management support"
              ]}
              pricing="$3,000-15,000"
              marketSize="$8.9B IT consulting market"
              icon="💡"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver IT solutions that drive real value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Enterprise-Grade"
              description="Solutions designed for enterprise scale with 99.9% uptime guarantees and robust security."
            />
            <FeatureCard
              title="Cost Optimization"
              description="Reduce IT costs by up to 40% through efficient resource utilization and automation."
            />
            <FeatureCard
              title="24/7 Support"
              description="Round-the-clock monitoring, support, and incident response to ensure business continuity."
            />
            <FeatureCard
              title="Future-Proof"
              description="Modern, scalable solutions that grow with your business and adapt to new technologies."
            />
          </div>
        </div>
      </section>

      {/* IT Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect IT package for your business needs and infrastructure requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingCard
              name="IT Assessment"
              price="$5,000 - $15,000"
              duration="2-4 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Cost optimization review",
                "Technology roadmap",
                "Implementation recommendations"
              ]}
              bestFor="Businesses evaluating IT needs"
            />
            <ITPricingCard
              name="Implementation"
              price="$15,000 - $75,000"
              duration="4-12 weeks"
              features={[
                "Solution design & architecture",
                "Implementation & configuration",
                "Testing & validation",
                "User training & documentation",
                "Go-live support",
                "3 months post-implementation support"
              ]}
              bestFor="IT modernization projects"
              popular={true}
            />
            <ITPricingCard
              name="Managed Services"
              price="$2,000 - $10,000/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring & support",
                "Proactive maintenance",
                "Security updates & patches",
                "Performance optimization",
                "Incident response",
                "Regular reporting & reviews"
              ]}
              bestFor="Ongoing IT management"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can improve your infrastructure, reduce costs, and enhance security. 
            Our team has successfully delivered 200+ IT projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function ITServiceCard({ 
  title, 
  description, 
  features, 
  pricing, 
  marketSize, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  marketSize: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-green-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ITPricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  bestFor, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  bestFor: string; 
  popular?: boolean; 
}) {
  return (
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-green-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}