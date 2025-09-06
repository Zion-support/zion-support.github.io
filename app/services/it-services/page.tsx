export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation solutions.'
};

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services & Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
            Transform your IT infrastructure with our comprehensive technology solutions.
          </p>
        </div>

        {/* Core IT Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITServiceCard 
              title="Cloud & Infrastructure" 
              description="Scalable cloud solutions and infrastructure management"
              features={["AWS/GCP/Azure migration", "Kubernetes orchestration", "Serverless architecture", "Infrastructure as Code"]}
              icon="☁️"
              price="Starting at $4k"
            />
            <ITServiceCard 
              title="DevOps & SRE" 
              description="Automated deployment and site reliability engineering"
              features={["CI/CD pipelines", "Observability & monitoring", "Autoscaling", "Chaos engineering"]}
              icon="⚙️"
              price="Starting at $8k"
            />
            <ITServiceCard 
              title="Cybersecurity" 
              description="Comprehensive security solutions and compliance"
              features={["Security hardening", "Zero Trust architecture", "Vulnerability management", "Compliance audits"]}
              icon="🔒"
              price="Starting at $6k"
            />
          </div>
        </div>

        {/* Specialized IT Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized IT Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ITSolutionCard 
              name="Cloud Migration Services"
              description="Seamless migration to AWS, Azure, or Google Cloud Platform"
              features={["Assessment & planning", "Data migration", "Application modernization", "Cost optimization"]}
              category="Cloud"
              price="$15k–$50k"
            />
            <ITSolutionCard 
              name="Kubernetes Management"
              description="Container orchestration and microservices deployment"
              features={["Cluster setup", "Service mesh", "Monitoring", "Auto-scaling"]}
              category="Containers"
              price="$12k–$35k"
            />
            <ITSolutionCard 
              name="CI/CD Pipeline Setup"
              description="Automated testing, building, and deployment pipelines"
              features={["GitOps workflows", "Automated testing", "Blue-green deployments", "Rollback strategies"]}
              category="DevOps"
              price="$8k–$25k"
            />
            <ITSolutionCard 
              name="Security Assessment"
              description="Comprehensive security audit and vulnerability assessment"
              features={["Penetration testing", "Code security review", "Infrastructure audit", "Compliance check"]}
              category="Security"
              price="$10k–$30k"
            />
            <ITSolutionCard 
              name="Database Optimization"
              description="Database performance tuning and migration services"
              features={["Query optimization", "Index tuning", "Migration planning", "Backup strategies"]}
              category="Database"
              price="$6k–$20k"
            />
            <ITSolutionCard 
              name="Network Infrastructure"
              description="Design and implement secure network infrastructure"
              features={["Network design", "Firewall configuration", "VPN setup", "Load balancing"]}
              category="Networking"
              price="$8k–$28k"
            />
            <ITSolutionCard 
              name="Monitoring & Alerting"
              description="Comprehensive monitoring and alerting systems"
              features={["APM setup", "Log aggregation", "Alert management", "Dashboard creation"]}
              category="Monitoring"
              price="$5k–$18k"
            />
            <ITSolutionCard 
              name="Backup & Disaster Recovery"
              description="Robust backup and disaster recovery solutions"
              features={["Backup automation", "DR planning", "Testing procedures", "Recovery strategies"]}
              category="Backup"
              price="$7k–$22k"
            />
            <ITSolutionCard 
              name="API Gateway & Management"
              description="API gateway setup and management platform"
              features={["API design", "Rate limiting", "Authentication", "Analytics"]}
              category="APIs"
              price="$9k–$26k"
            />
            <ITSolutionCard 
              name="Microservices Architecture"
              description="Design and implement microservices architecture"
              features={["Service design", "API development", "Service mesh", "Monitoring"]}
              category="Architecture"
              price="$20k–$60k"
            />
            <ITSolutionCard 
              name="Identity & Access Management"
              description="Enterprise identity and access management solutions"
              features={["SSO setup", "MFA implementation", "Role-based access", "Audit logging"]}
              category="IAM"
              price="$12k–$35k"
            />
            <ITSolutionCard 
              name="Data Analytics Platform"
              description="Big data analytics and business intelligence platform"
              features={["Data pipeline setup", "ETL processes", "Visualization", "Real-time analytics"]}
              category="Analytics"
              price="$18k–$45k"
            />
          </div>
        </div>

        {/* IT Service Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our IT Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ITProcessStep 
              step="1"
              title="Assessment & Planning"
              description="Analyze current infrastructure and plan improvements"
              features={["Infrastructure audit", "Gap analysis", "Technology roadmap", "Cost estimation"]}
            />
            <ITProcessStep 
              step="2"
              title="Design & Architecture"
              description="Design optimal solutions and architecture"
              features={["Solution design", "Security planning", "Scalability planning", "Integration design"]}
            />
            <ITProcessStep 
              step="3"
              title="Implementation"
              description="Deploy and configure solutions"
              features={["Infrastructure setup", "Application deployment", "Security configuration", "Testing"]}
            />
            <ITProcessStep 
              step="4"
              title="Support & Maintenance"
              description="Ongoing support and optimization"
              features={["24/7 monitoring", "Performance tuning", "Security updates", "Capacity planning"]}
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechCard name="AWS" description="Cloud platform" />
            <TechCard name="Azure" description="Microsoft cloud" />
            <TechCard name="Google Cloud" description="GCP services" />
            <TechCard name="Kubernetes" description="Container orchestration" />
            <TechCard name="Docker" description="Containerization" />
            <TechCard name="Terraform" description="Infrastructure as Code" />
            <TechCard name="Jenkins" description="CI/CD automation" />
            <TechCard name="GitLab CI" description="DevOps platform" />
            <TechCard name="Prometheus" description="Monitoring" />
            <TechCard name="Grafana" description="Visualization" />
            <TechCard name="ELK Stack" description="Log management" />
            <TechCard name="Ansible" description="Configuration management" />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </div>
    </div>
  );
}

function ITServiceCard({ title, description, features, icon, price }: { 
  title: string; 
  description: string; 
  features: string[]; 
  icon: string; 
  price: string; 
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-xl font-bold text-green-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITSolutionCard({ name, description, features, category, price }: { 
  name: string; 
  description: string; 
  features: string[]; 
  category: string; 
  price: string; 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">{category}</span>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="text-2xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-1 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 text-sm">
            <span className="text-green-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
        Learn More
      </button>
    </div>
  );
}

function ITProcessStep({ step, title, description, features }: { 
  step: string; 
  title: string; 
  description: string; 
  features: string[]; 
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
          {step}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 text-sm">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-gray-900 mb-2">{name}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h3 style={{fontWeight: 700}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563'}}>{details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Assessment" 
          price="$4k–$10k" 
          features={["2 weeks", "Cloud review", "Security audit", "Roadmap", "Gap analysis"]} 
          popular={false}
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          features={["4–8 weeks", "Infra as code", "CI/CD", "Monitoring", "Security setup"]} 
          popular={true}
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
          features={["24/7 on-call", "SLO management", "Cost optimization", "Reports", "Proactive maintenance"]} 
          popular={false}
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
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
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-4xl font-bold text-gray-900 mb-6">{price}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your IT Infrastructure?</h3>
      <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
        Let's discuss how we can help you build a robust, scalable, and secure IT infrastructure. 
        Our experts are ready to transform your technology stack.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">📞 Call Us</h4>
          <a href="tel:+13024640950" className="text-green-600 hover:text-green-700 font-medium">
            +1 302 464 0950
          </a>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">✉️ Email Us</h4>
          <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-700 font-medium">
            kleber@ziontechgroup.com
          </a>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-2">📍 Visit Us</h4>
          <p className="text-gray-600 text-sm">
            364 E Main St STE 1008<br />
            Middletown DE 19709
          </p>
        </div>
      </div>
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
          Email Us
        </a>
      </div>
    </div>
  );
}