
};

export default function ITServicesPage() {}
  return (

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-gray-50 to-blue-100 rounded-lg mb-16">"
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">;
          IT Services;
        </h1>"
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">

        </p>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a"
            href="tel:+13024640950""
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Assessment - Free;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com""
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule Consultation;
          </a>
        </div>
      </section>

      {/* IT Service Categories */}"
      <section className="py-16">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our IT Service Categories</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard"
            title="Cloud Migration & Management""
            description="Seamless cloud migration and ongoing management across AWS, Azure, and Google Cloud.""
            icon="☁️""
            pricing="From $3,000/month""
            features={["Cloud strategy", "Migration planning", "Cost optimization", "24/7 monitoring"]
          />
          <ITServiceCard"
            title="DevOps & CI/CD""
            description="Complete DevOps implementation with automated CI/CD pipelines and infrastructure as code.""
            icon="🔄""
            pricing="From $2,500/month""
            features={["CI/CD pipelines", "Infrastructure as code", "Container orchestration", "Automated testing"]
          />
          <ITServiceCard"
            title="Cybersecurity Solutions""
            description="Comprehensive security services including threat detection, compliance, and incident response.""
            icon="🔒""
            pricing="From $4,000/month""
            features={["Threat detection", "Security audits", "Compliance management", "Incident response"]
          />
          <ITServiceCard"
            title="Infrastructure Management""
            description="Complete infrastructure management including servers, networks, and data centers.""
            icon="🖥️""
            pricing="From $2,000/month""
            features={["Server management", "Network optimization", "Backup solutions", "Disaster recovery"]
          />
          <ITServiceCard"
            title="Database Administration""
            description="Expert database management, optimization, and migration services for all major platforms.""
            icon="🗄️""
            pricing="From $1,500/month""
            features={["Database optimization", "Migration services", "Performance tuning", "Backup & recovery"]
          />
          <ITServiceCard"
            title="24/7 IT Support""
            description="Round-the-clock technical support and monitoring for your critical systems.""
            icon="🛠️""
            pricing="From $1,200/month""
            features={["24/7 monitoring", "Help desk support", "Remote assistance", "On-site support"]
          />
        </div>
      </section>

      {/* Cloud Services */}"
      <section className="py-16 bg-gray-50 rounded-lg">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cloud Services</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CloudServiceCard"
            provider="AWS""
            description="Amazon Web Services migration, optimization, and management""
            features={["EC2 management", "S3 optimization", "RDS administration", "Lambda functions"]"
            pricing="From $2,500/month"
          />
          <CloudServiceCard"
            provider="Microsoft Azure""
            description="Azure cloud services, migration, and hybrid cloud solutions""
            features={["VM management", "Azure SQL", "App Services", "Azure DevOps"]"
            pricing="From $2,800/month"
          />
          <CloudServiceCard"
            provider="Google Cloud""
            description="Google Cloud Platform services and multi-cloud management""
            features={["GKE management", "BigQuery", "Cloud Functions", "AI/ML services"]"
            pricing="From $2,200/month"
          />
        </div>
      </section>

      {/* Security Services */}"
      <section className="py-16">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cybersecurity Services</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SecurityServiceCard"
            title="Security Assessment""
            description="Comprehensive security evaluation and vulnerability assessment""
            icon="🔍""
            pricing="$5,000/assessment"
          />
          <SecurityServiceCard"
            title="Penetration Testing""
            description="Ethical hacking and security testing to identify vulnerabilities""
            icon="🎯""
            pricing="$8,000/test"
          />
          <SecurityServiceCard"
            title="Compliance Management""
            description="SOC2, GDPR, HIPAA, and other compliance requirements""
            icon="📋""
            pricing="$3,000/month"
          />
          <SecurityServiceCard"
            title="Incident Response""
            description="24/7 security monitoring and incident response services""
            icon="🚨""
            pricing="$2,000/month"
          />
        </div>
      </section>

      {/* IT Solutions by Industry */}"
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Solutions by Industry</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard"
            icon="🏦""
            title="Financial Services""
            description="Bank-grade security and compliance for financial institutions""
            solutions={["PCI DSS compliance", "Fraud detection", "High availability", "Disaster recovery"]
          />
          <IndustryCard"
            icon="🏥""
            title="Healthcare""
            description="HIPAA-compliant IT solutions for healthcare providers""
            solutions={["HIPAA compliance", "EHR systems", "Telemedicine", "Data encryption"]
          />
          <IndustryCard"
            icon="🛒""
            title="E-commerce""
            description="Scalable infrastructure for online retail and marketplaces""
            solutions={["Auto-scaling", "CDN optimization", "Payment security", "Inventory systems"]
          />
          <IndustryCard"
            icon="🏭""
            title="Manufacturing""
            description="IoT and industrial automation IT solutions""
            solutions={["IoT integration", "SCADA systems", "Predictive maintenance", "Supply chain"]
          />
          <IndustryCard"
            icon="🎓""
            title="Education""
            description="IT infrastructure for educational institutions and e-learning""
            solutions={["LMS systems", "Student portals", "Virtual classrooms", "Campus networks"]
          />
          <IndustryCard"
            icon="🏠""
            title="Real Estate""
            description="Property management and CRM IT solutions""
            solutions={["CRM systems", "Property databases", "Virtual tours", "Document management"]
          />
        </div>
      </section>

      {/* IT Support Tiers */}"
      <section className="py-16">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Support Tiers</h2>"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SupportTierCard"
            name="Basic Support""
            price="$1,200""
            period="month""
            description="Essential IT support for small businesses"
            features={["
              "Email support (8x5)","
              "Remote assistance","
              "Basic monitoring","
              "Software updates","
              "Backup management"
            ]}
            popular={false}
          />
          <SupportTierCard"
            name="Professional Support""
            price="$2,500""
            period="month""
            description="Comprehensive support for growing businesses"
            features={["
              "Phone & email support (24x7)","
              "Priority response","
              "Advanced monitoring","
              "Proactive maintenance","
              "Security management","
              "Cloud optimization"
            ]}
            popular={true}
          />
          <SupportTierCard"
            name="Enterprise Support""
            price="$5,000""
            period="month""
            description="Full-service IT management for large organizations"
            features={["
              "Dedicated account manager","
              "24x7x365 support","
              "On-site technicians","
              "Custom solutions","
              "Strategic planning","
              "Compliance management"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}"
      <section className="py-16 bg-gray-50 rounded-lg">"
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Proven IT Results</h2>"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard"
            number="99.9%""
            label="Uptime Guarantee""
            description="System availability and reliability"
          />
          <MetricCard"
            number="500+""
            label="IT Projects Completed""
            description="Successfully delivered implementations"
          />
          <MetricCard"
            number="50%""
            label="Cost Reduction""
            description="Average IT cost savings for clients"
          />
          <MetricCard"
            number="24/7""
            label="Support Available""
            description="Round-the-clock technical assistance"
          />
        </div>
      </section>

      {/* CTA Section */}"
      <section className="py-16 bg-blue-600 rounded-lg text-white text-center">"
        <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>"
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 2,000+ businesses that trust Zion Tech Group for their IT needs.
        </p>"
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a"
            href="tel:+13024640950""
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com""
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Email Us;
          </a>
        </div>"
        <div className="mt-6 text-sm text-blue-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </section>
    </div>
  );
}

"