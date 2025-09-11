export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, security, and infrastructure management. Engineered for uptime, efficiency, and scalability.'
};

export default function ITServicesPage() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Cloud & Infrastructure" 
          details={[
            "AWS/GCP/Azure migration",
            "Kubernetes orchestration",
            "Serverless architecture",
            "Infrastructure as Code (Terraform)",
            "Multi-cloud strategies",
            "Cost optimization"
          ]} 
        />
        <Item 
          title="DevOps & SRE" 
          details={[
            "CI/CD pipeline setup",
            "Monitoring & observability",
            "Autoscaling & load balancing",
            "Chaos engineering testing",
            "Incident response",
            "Performance optimization"
          ]} 
        />
        <Item 
          title="Security & Compliance" 
          details={[
            "Security hardening",
            "Zero Trust architecture",
            "Vulnerability management",
            "Compliance frameworks",
            "Penetration testing",
            "Security training"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Cloud Migration"
            description="Seamless migration to AWS, Azure, or Google Cloud with zero downtime"
            price="Starting at $25k"
            features={["Assessment & planning", "Data migration", "Application modernization", "Post-migration support"]
          />
          <ServiceCard
            title="DevOps Automation"
            description="Complete CI/CD pipeline setup with automated testing and deployment"
            price="Starting at $15k"
            features={["Pipeline design", "Automated testing", "Deployment automation", "Monitoring setup"]
          />
          <ServiceCard
            title="Security Audit"
            description="Comprehensive security assessment and vulnerability management"
            price="Starting at $8k"
            features={["Security scanning", "Penetration testing", "Compliance review", "Remediation plan"]
          />
          <ServiceCard
            title="Infrastructure Monitoring"
            description="24/7 monitoring and alerting for your critical systems"
            price="Starting at $3k/mo"
            features={["Real-time monitoring", "Custom dashboards", "Alert management", "Incident response"]
          />
          <ServiceCard
            title="Database Management"
            description="Database optimization, backup, and performance tuning"
            price="Starting at $5k"
            features={["Performance tuning", "Backup strategies", "High availability", "Security hardening"]
          />
          <ServiceCard
            title="Network Security"
            description="Firewall configuration, VPN setup, and network security hardening"
            price="Starting at $12k"
            features={["Firewall setup", "VPN configuration", "Network segmentation", "Security policies"]
          />
        </div>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We help you build, secure, and scale your IT infrastructure for the modern digital world.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Strategy"
            description="Complete cloud transformation with AWS, Azure, and GCP expertise"
            features={["Multi-cloud strategy", "Lift & shift migration", "Cloud-native architecture", "Cost optimization", "Security compliance"]}
            price="$15,000-75,000"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD"
            description="Automated deployment pipelines and infrastructure as code"
            features={["CI/CD pipelines", "Infrastructure as Code", "Container orchestration", "Monitoring & alerting", "Automated testing"]}
            price="$10,000-40,000"
            icon="🔄"
          />
          <ITServiceCard
            title="Cybersecurity Solutions"
            description="Comprehensive security services to protect your digital assets"
            features={["Security assessment", "Penetration testing", "Zero Trust architecture", "Compliance management", "Incident response"]}
            price="$8,000-35,000"
            icon="🔒"
          />
          <ITServiceCard
            title="Infrastructure Management"
            description="24/7 monitoring and management of your IT infrastructure"
            features={["Server management", "Database administration", "Backup & recovery", "Performance tuning", "Capacity planning"]}
            price="$5,000-25,000"
            icon="🖥️"
          />
          <ITServiceCard
            title="Network & Connectivity"
            description="Secure and reliable network infrastructure design and implementation"
            features={["Network design", "VPN solutions", "Load balancing", "CDN setup", "Bandwidth optimization"]}
            price="$6,000-20,000"
            icon="🌐"
          />
          <ITServiceCard
            title="API Development & Management"
            description="RESTful and GraphQL API development with comprehensive management"
            features={["API design", "Documentation", "Rate limiting", "Authentication", "Monitoring", "Version control"]}
            price="$12k–$35k"
            icon="🔌"
          />
          <ITServiceCard
            title="Microservices Architecture"
            description="Modern microservices implementation with container orchestration"
            features={["Service design", "Container orchestration", "Service mesh", "API gateway", "Monitoring", "Scaling"]}
            price="$25k–$70k"
            icon="🏗️"
          />
          <ITServiceCard
            title="Data Center & Colocation"
            description="Physical infrastructure management and data center optimization"
            features={["Hardware management", "Power optimization", "Cooling systems", "Physical security", "Uptime monitoring", "Disaster recovery"]}
            price="$15k–$45k"
            icon="🏢"
          />
          <ITServiceCard
            title="IT Service Management (ITSM)"
            description="Complete IT service delivery and support management"
            features={["Service desk", "Incident management", "Change management", "Asset management", "Knowledge base", "SLA management"]}
            price="$18k–$50k"
            icon="🎯"
          />
          <ITServiceCard
            title="Cloud Cost Optimization"
            description="Intelligent cloud spending optimization and cost management"
            features={["Cost analysis", "Resource optimization", "Reserved instances", "Auto-scaling", "Budget alerts", "Cost forecasting"]}
            price="$8k–$25k"
            icon="💰"
          />
          <ITServiceCard
            title="Disaster Recovery & Business Continuity"
            description="Comprehensive disaster recovery planning and implementation"
            features={["Backup strategies", "Recovery testing", "RTO/RPO planning", "Failover systems", "Documentation", "Training"]}
            price="$20k–$60k"
            icon="🔄"
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

      <CTASection />    </div>
  );
}

      <PricingSection />
      
      <ContactSection />
    </div>
  );
}

function FeatureCard({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Optimize Your IT Infrastructure?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can improve your infrastructure's reliability, security, and performance. 
          Our IT experts have managed 200+ enterprise systems.
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
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}