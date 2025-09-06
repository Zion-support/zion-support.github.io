export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE'
};

export default function ITServicesPage() {
  return (
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ITProcessStep
            step="1"
            title="Assessment & Planning"
            description="Comprehensive analysis of your current IT infrastructure and requirements"
          />
          <ITProcessStep
            step="2"
            title="Design & Architecture"
            description="Create scalable, secure, and cost-effective IT solutions"
          />
          <ITProcessStep
            step="3"
            title="Implementation"
            description="Deploy solutions with minimal downtime and maximum efficiency"
          />
          <ITProcessStep
            step="4"
            title="Support & Optimization"
            description="Ongoing maintenance, monitoring, and continuous improvement"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITTechStack
            title="Cloud Platforms"
            technologies={["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean", "Vultr"]}
          />
          <ITTechStack
            title="DevOps Tools"
            technologies={["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform"]}
          />
          <ITTechStack
            title="Security & Monitoring"
            technologies={["Splunk", "ELK Stack", "Prometheus", "Grafana", "Wazuh"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustrySolution
            title="Healthcare IT"
            description="HIPAA-compliant infrastructure and secure patient data management"
            solutions={["HIPAA compliance", "Patient data security", "Telemedicine platforms", "Medical imaging systems"]}
            icon="🏥"
          />
          <IndustrySolution
            title="Financial Services"
            description="Secure, compliant infrastructure for financial institutions"
            solutions={["PCI DSS compliance", "Fraud detection systems", "High-frequency trading", "Risk management"]}
            icon="💰"
          />
          <IndustrySolution
            title="E-commerce"
            description="Scalable infrastructure for high-traffic online stores"
            solutions={["Auto-scaling", "CDN optimization", "Payment processing", "Inventory management"]}
            icon="🛒"
          />
          <IndustrySolution
            title="Manufacturing"
            description="IoT and industrial automation infrastructure"
            solutions={["IoT platforms", "Predictive maintenance", "Supply chain optimization", "Quality control"]}
            icon="🏭"
          />
          <IndustrySolution
            title="Education"
            description="Learning management systems and educational technology"
            solutions={["LMS platforms", "Virtual classrooms", "Student data management", "Online assessments"]}
            icon="🎓"
          />
          <IndustrySolution
            title="Government"
            description="Secure, compliant infrastructure for government agencies"
            solutions={["FedRAMP compliance", "Secure communications", "Data sovereignty", "Disaster recovery"]}
            icon="🏛️"
          />
        </div>
      </section>

      <Pricing />
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our IT Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITBenefitCard
            title="24/7 Support"
            description="Round-the-clock monitoring and support for your critical systems"
            icon="🛡️"
          />
          <ITBenefitCard
            title="Cost Optimization"
            description="Reduce IT costs by up to 40% through efficient resource management"
            icon="💰"
          />
          <ITBenefitCard
            title="Security First"
            description="Enterprise-grade security measures to protect your data and systems"
            icon="🔐"
          />
          <ITBenefitCard
            title="Scalable Solutions"
            description="Infrastructure that grows with your business needs"
            icon="📈"
          />
          <ITBenefitCard
            title="Expert Team"
            description="Certified professionals with deep industry experience"
            icon="👨‍💻"
          />
          <ITBenefitCard
            title="Proactive Monitoring"
            description="Prevent issues before they impact your business"
            icon="📊"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function ITServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function ITProcessStep({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
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
}
