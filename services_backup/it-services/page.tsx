





export const metadata = { 
  title: 'IT Services | Zion Tech Group',

  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE'



};


export default function ITServicesPage() {
  return (

    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT services including cloud migration, DevOps, cybersecurity, 
            infrastructure management, and digital transformation. Enterprise-grade solutions for modern businesses.
          </p>
        </div>

        {/* IT Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ITServiceCategory
            title="Cloud & Infrastructure"
            icon="☁️"
            description="Scalable cloud solutions and infrastructure management"
            services={[
              "Cloud migration & strategy",
              "Multi-cloud architecture",
              "Container orchestration",
              "Infrastructure as Code",
              "Disaster recovery",
              "Cost optimization"
            ]}
          />
          <ITServiceCategory
            title="DevOps & SRE"
            icon="⚙️"
            description="Automation and reliability engineering"
            services={[
              "CI/CD pipeline setup",
              "Monitoring & observability",
              "Incident response",
              "Performance optimization",
              "Chaos engineering",
              "SLA management"
            ]}
          />
          <ITServiceCategory
            title="Cybersecurity"
            icon="🔒"
            description="Comprehensive security solutions and compliance"
            services={[
              "Security assessment",
              "Penetration testing",
              "Zero Trust architecture",
              "Compliance management",
              "Incident response",
              "Security training"
            ]}
          />
        </div>

        {/* Real IT Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Solutions We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ITSolution
              title="Cloud Migration & Modernization"
              description="Complete cloud transformation and application modernization"
              features={[
                "Legacy system migration",
                "Application refactoring",
                "Database migration",
                "Performance optimization",
                "Cost reduction analysis",
                "Security compliance"
              ]}
              price="$25k - $100k"
              timeline="8-20 weeks"
              useCase="Enterprise, mid-market, startups"
              marketSize="$50B"
            />
            <ITSolution
              title="DevOps Transformation"
              description="End-to-end DevOps implementation and culture change"
              features={[
                "CI/CD pipeline automation",
                "Infrastructure automation",
                "Monitoring & alerting",
                "Team training & coaching",
                "Process optimization",
                "Tool integration"
              ]}
              price="$15k - $60k"
              timeline="6-16 weeks"
              useCase="Development teams, engineering organizations"
              marketSize="$8.2B"
            />
            <ITSolution
              title="Cybersecurity Assessment"
              description="Comprehensive security evaluation and hardening"
              features={[
                "Vulnerability assessment",
                "Penetration testing",
                "Security architecture review",
                "Compliance audit",
                "Incident response planning",
                "Security training"
              ]}
              price="$10k - $40k"
              timeline="4-12 weeks"
              useCase="All industries, compliance requirements"
              marketSize="$12.5B"
            />
            <ITSolution
              title="Infrastructure Monitoring"
              description="24/7 infrastructure monitoring and management"
              features={[
                "Real-time monitoring",
                "Automated alerting",
                "Performance optimization",
                "Capacity planning",
                "Incident response",
                "Monthly reporting"
              ]}
              price="$5k - $20k/month"
              timeline="Ongoing"
              useCase="SaaS companies, e-commerce, enterprises"
              marketSize="$4.8B"
            />
            <ITSolution
              title="Disaster Recovery & Backup"
              description="Comprehensive backup and disaster recovery solutions"
              features={[
                "Automated backup systems",
                "Disaster recovery planning",
                "RTO/RPO optimization",
                "Testing & validation",
                "Documentation & training",
                "Ongoing maintenance"
              ]}
              price="$8k - $35k"
              timeline="4-10 weeks"
              useCase="Critical systems, compliance requirements"
              marketSize="$3.2B"
            />
            <ITSolution
              title="Network Security & Firewall"
              description="Advanced network security and firewall management"
              features={[
                "Firewall configuration",
                "Network segmentation",
                "Intrusion detection",
                "VPN setup",
                "Security policies",
                "Ongoing management"
              ]}
              price="$12k - $45k"
              timeline="6-14 weeks"
              useCase="Remote work, multi-location businesses"
              marketSize="$6.1B"
            />
            <ITSolution
              title="IT Support & Helpdesk"
              description="Professional IT support and helpdesk services"
              features={[
                "24/7 technical support",
                "Remote assistance",
                "Hardware & software support",
                "User training",
                "Ticket management",
                "SLA guarantees"
              ]}
              price="$3k - $15k/month"
              timeline="Ongoing"
              useCase="Small businesses, remote teams"
              marketSize="$7.3B"
            />
            <ITSolution
              title="Data Center Services"
              description="Data center design, migration, and management"
              features={[
                "Data center design",
                "Hardware procurement",
                "Migration planning",
                "Power & cooling optimization",
                "Security implementation",
                "Ongoing management"
              ]}
              price="$50k - $200k"
              timeline="12-24 weeks"
              useCase="Large enterprises, government"
              marketSize="$9.7B"
            />
            <ITSolution
              title="IT Consulting & Strategy"
              description="Strategic IT planning and digital transformation"
              features={[
                "IT strategy development",
                "Technology roadmap",
                "Digital transformation",
                "Vendor evaluation",
                "Budget planning",
                "Implementation guidance"
              ]}
              price="$5k - $25k"
              timeline="2-8 weeks"
              useCase="C-level executives, IT leadership"
              marketSize="$5.4B"
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies & Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ITTechnology
              category="Cloud Platforms"
              technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"]}
            />
            <ITTechnology
              category="DevOps Tools"
              technologies={["Docker", "Kubernetes", "Jenkins", "GitLab", "Terraform"]}
            />
            <ITTechnology
              category="Monitoring"
              technologies={["Prometheus", "Grafana", "Datadog", "New Relic", "Splunk"]}
            />
            <ITTechnology
              category="Security"
              technologies={["CrowdStrike", "SentinelOne", "Okta", "Palo Alto", "Fortinet"]}
            />
          </div>
        </div>

        {/* IT Certifications & Compliance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComplianceCard
              title="SOC 2 Type II"
              description="Security and availability controls"
              icon="🛡️"
            />
            <ComplianceCard
              title="ISO 27001"
              description="Information security management"
              icon="📋"
            />
            <ComplianceCard
              title="HIPAA"
              description="Healthcare data protection"
              icon="🏥"
            />
            <ComplianceCard
              title="PCI DSS"
              description="Payment card industry compliance"
              icon="💳"
            />
            <ComplianceCard
              title="GDPR"
              description="European data protection"
              icon="🇪🇺"
            />
            <ComplianceCard
              title="AWS/Azure Certified"
              description="Cloud platform expertise"
              icon="☁️"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingPlan
              name="IT Assessment"
              price="$4k - $10k"
              duration="2-4 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Recommendations",
                "Implementation roadmap",
                "Cost optimization"
              ]}
              popular={false}
            />
            <ITPricingPlan
              name="IT Implementation"
              price="$15k - $50k"
              duration="4-12 weeks"
              features={[
                "Cloud migration",
                "DevOps setup",
                "Security implementation",
                "Monitoring setup",
                "Team training",
                "Documentation"
              ]}
              popular={true}
            />
            <ITPricingPlan
              name="Managed IT Services"
              price="$5k+/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring",
                "Proactive maintenance",
                "Incident response",
                "Security management",
                "Performance optimization",
                "Regular reporting"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can optimize your IT infrastructure, enhance security, and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>

    </div>
  );
}


function ITServiceCategory({ title, icon, description, services }: {
  title: string;
  icon: string;
  description: string;
  services: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-2">•</span>
            {service}
          </li>
        ))}
      </ul>
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="IT Assessment" 
          price="$4k–$10k" 
          duration="2 weeks"
          features={[
            "Comprehensive cloud review",
            "Security audit & assessment",
            "Performance analysis",
            "Cost optimization review",
            "Technology roadmap",
            "Implementation recommendations"
          ]} 
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          duration="4–8 weeks"
          features={[
            "Infrastructure as Code setup",
            "CI/CD pipeline implementation",
            "Monitoring & observability",
            "Security hardening",
            "Performance optimization",
            "Documentation & training"
          ]} 
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 monitoring & on-call",
            "SLO management & reporting",
            "Cost optimization",
            "Security updates & patches",
            "Performance tuning",
            "Monthly health reports"
          ]} 
        />
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 

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


function ITSolution({ title, description, features, price, timeline, useCase, marketSize }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
  marketSize: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {marketSize} market
        </span>
      </div>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-green-600">{price}</div>
          <div className="text-sm text-gray-500">{timeline}</div>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}

function ITTechnology({ category, technologies }: { category: string; technologies: string[] }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ComplianceCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
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
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-green-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
function ContactSection() {

  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ITTechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustrySolution({ title, description, solutions, icon }: { 
  title: string; 
  description: string; 
  solutions: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}

          </li>
        ))}
      </ul>
    </div>
  );
}


function ITBenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Assessment" 
          price="$4k–$10k" 
          features={["2 weeks", "Cloud review", "Security audit", "Roadmap", "Recommendations"]} 
          popular={false}
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          features={["4–8 weeks", "Infra as code", "CI/CD", "Monitoring", "Security hardening"]} 
          popular={true}
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
          features={["24/7 on-call", "SLO mgmt", "Cost optimization", "Reports", "Proactive maintenance"]} 
          popular={false}
        />
      </div>
    </section>
  );


>>>>>>> origin/final-merged-improvements

