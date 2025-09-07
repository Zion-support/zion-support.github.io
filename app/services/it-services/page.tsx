import React from 'react';

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, and security solutions. Engineered for uptime and efficiency.'
};

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map(d => (
          <li key={d} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <a
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
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
    </a>
  );
}

export default function ITServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Core IT Services */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Cloud & Infra" 
            details={[
              "AWS/GCP/Azure",
              "Kubernetes",
              "Serverless",
              "IaC (Terraform)"
            ]} 
          />
          <Item 
            title="DevOps & SRE" 
            details={[
              "CI/CD",
              "Observability",
              "Autoscaling",
              "Chaos testing"
            ]} 
          />
          <Item 
            title="Security" 
            details={[
              "Hardening",
              "Zero Trust",
              "Vuln mgmt",
              "Compliance"
            ]} 
          />
        </div>
      </section>

      {/* Specialized IT Solutions */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Specialized IT Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready-to-deploy IT solutions that solve real business problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/cybersecurity-consulting"
            title="Cybersecurity Consulting"
            description="Protect your business with comprehensive security assessment and implementation"
            bullets={["Security assessment", "Implementation", "Incident response"]}
            icon="🔒"
          />
          <ServiceCard
            href="/services/cloud-migration"
            title="Cloud Migration"
            description="Seamlessly migrate your infrastructure to the cloud with zero downtime"
            bullets={["Migration planning", "Cloud platforms", "Post-migration support"]}
            icon="☁️"
          />
          <ServiceCard
            href="/services/database-optimization"
            title="Database Optimization"
            description="Maximize database performance with expert tuning and monitoring"
            bullets={["Performance tuning", "Platform expertise", "Monitoring"]}
            icon="🗄️"
          />
          <ServiceCard
            href="/services/api-development"
            title="API Development"
            description="Build robust, scalable APIs with modern architecture and security"
            bullets={["API design", "Integration", "API management"]}
            icon="🔌"
          />
          <ServiceCard
            href="/services/mobile-app-development"
            title="Mobile App Development"
            description="Create stunning mobile apps for iOS and Android platforms"
            bullets={["Native development", "Cross-platform", "App services"]}
            icon="📱"
          />
          <ServiceCard
            href="/services/web-application-development"
            title="Web Application Development"
            description="Build powerful web applications with modern technologies"
            bullets={["Frontend development", "Backend development", "Full-stack solutions"]}
            icon="🌐"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all IT services. Choose the plan that fits your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Assessment</h4>
            <div className="text-3xl font-bold text-blue-600 mb-4">$4k–$10k</div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 2 weeks
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Cloud review
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Security audit
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Roadmap
              </li>
            </ul>
            <a 
              href="tel:+13024640950"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
            >
              Get Started
            </a>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Implementation</h4>
            <div className="text-3xl font-bold text-blue-600 mb-4">$15k–$50k</div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 4–8 weeks
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Infra as code
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> CI/CD
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Monitoring
              </li>
            </ul>
            <a 
              href="tel:+13024640950"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
            >
              Get Started
            </a>
          </div>
          <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Managed</h4>
            <div className="text-3xl font-bold text-blue-600 mb-4">$5k+/mo</div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> 24/7 on-call
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> SLO mgmt
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Cost optimization
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span> Reports
              </li>
            </ul>
            <a 
              href="tel:+13024640950"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your IT infrastructure and drive business growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Project Inquiry"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your IT Transformation
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
