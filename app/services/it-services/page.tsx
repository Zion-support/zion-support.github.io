<<<<<<< HEAD
<<<<<<< HEAD
export const metadata = { title: 'IT Services | Zion Tech Group' };
=======
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, security, and infrastructure management. Engineered for uptime, efficiency, and scalability.'
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export default function ITServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We ensure your infrastructure is robust, scalable, and secure.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          title="Cloud & Infrastructure" 
          features={[
            "AWS, GCP, Azure cloud migration",
            "Kubernetes orchestration & management",
            "Serverless architecture design",
            "Infrastructure as Code (Terraform)",
            "Multi-cloud & hybrid solutions",
            "Cost optimization & monitoring"
          ]}
          icon="☁️"
        />
        <FeatureCard 
          title="DevOps & SRE" 
          features={[
            "CI/CD pipeline automation",
            "Observability & monitoring setup",
            "Auto-scaling & load balancing",
            "Chaos engineering & testing",
            "Incident response & management",
            "Performance optimization"
          ]}
          icon="⚙️"
        />
        <FeatureCard 
          title="Security & Compliance" 
          features={[
            "Security hardening & assessment",
            "Zero Trust architecture implementation",
            "Vulnerability management",
            "Compliance (SOC 2, GDPR, HIPAA)",
            "Penetration testing",
            "Security monitoring & alerting"
          ]}
          icon="🛡️"
        />
      </div>

<<<<<<< HEAD
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our IT Service Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
            <p className="text-gray-600">Guaranteed high availability with robust monitoring</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Optimization</h3>
            <p className="text-gray-600">Reduce infrastructure costs by up to 40%</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
            <p className="text-gray-600">Bank-level security with compliance certifications</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock monitoring and incident response</p>
          </div>
=======
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Architecture"
            description="Complete cloud migration with modern architecture patterns"
            features={["Multi-cloud strategy", "Container orchestration", "Serverless architecture", "Cost optimization", "Disaster recovery"]}
            price="$15k–$50k"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD Automation"
            description="End-to-end DevOps implementation with automated pipelines"
            features={["CI/CD pipelines", "Infrastructure as Code", "Automated testing", "Deployment automation", "Environment management"]}
            price="$10k–$35k"
            icon="🔄"
          />
          <ITServiceCard
            title="Site Reliability Engineering (SRE)"
            description="Proactive monitoring and reliability engineering"
            features={["SLO/SLI definition", "Error budget management", "Incident response", "Capacity planning", "Performance optimization"]}
            price="$20k–$60k"
            icon="📊"
          />
          <ITServiceCard
            title="Cybersecurity & Compliance"
            description="Comprehensive security hardening and compliance management"
            features={["Security assessment", "Zero Trust architecture", "Vulnerability management", "Compliance auditing", "Security monitoring"]}
            price="$12k–$40k"
            icon="🔒"
          />
          <ITServiceCard
            title="Database & Data Management"
            description="Database optimization and data pipeline management"
            features={["Database migration", "Performance tuning", "Data backup & recovery", "Data pipeline automation", "Data governance"]}
            price="$8k–$25k"
            icon="🗄️"
          />
          <ITServiceCard
            title="Network & Infrastructure"
            description="Network design, optimization, and infrastructure management"
            features={["Network architecture", "Load balancing", "CDN implementation", "VPN & connectivity", "Infrastructure monitoring"]}
            price="$10k–$30k"
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        </div>
      </div>

<<<<<<< HEAD
      <PricingSection />
      
=======
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Cloud & Infrastructure" 
            details={[
              "AWS, GCP, Azure multi-cloud strategies",
              "Kubernetes orchestration and management",
              "Serverless architecture implementation",
              "Infrastructure as Code (Terraform, CloudFormation)",
              "Auto-scaling and load balancing",
              "Disaster recovery and backup solutions"
            ]} 
          />
          <Item 
            title="DevOps & SRE" 
            details={[
              "CI/CD pipeline design and implementation",
              "Comprehensive observability and monitoring",
              "Automated testing and quality gates",
              "Chaos engineering and resilience testing",
              "Incident response and post-mortem processes",
              "Performance optimization and capacity planning"
            ]} 
          />
          <Item 
            title="Security & Compliance" 
            details={[
              "Security hardening and vulnerability management",
              "Zero Trust network architecture",
              "Compliance auditing (SOC2, ISO27001, GDPR)",
              "Security monitoring and threat detection",
              "Identity and access management (IAM)",
              "Data protection and encryption"
            ]} 
          />
        </div>
      </section>

      <Pricing />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <ContactSection />
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
function FeatureCard({ title, features, icon }: { title: string; features: string[]; icon: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
=======
function ITServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
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

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard 
          name="Assessment & Planning" 
          price="$4k–$10k" 
          duration="2 weeks"
          features={[
            "Comprehensive cloud infrastructure review",
            "Security audit & vulnerability assessment",
            "Performance analysis & optimization recommendations",
            "Migration roadmap & timeline",
            "Cost analysis & budget planning",
            "Technology stack evaluation"
          ]}
          popular={false}
        />
        <PricingCard 
          name="Implementation & Migration" 
          price="$15k–$50k" 
          duration="4–8 weeks"
          features={[
            "Everything in Assessment & Planning",
            "Infrastructure as Code implementation",
            "CI/CD pipeline setup & automation",
            "Monitoring & observability configuration",
            "Security hardening & compliance setup",
            "Team training & documentation",
            "Go-live support & testing"
          ]}
          popular={true}
        />
        <PricingCard 
          name="Managed Services" 
          price="$5k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 monitoring & on-call support",
            "SLO management & incident response",
            "Cost optimization & resource management",
            "Security updates & patch management",
            "Performance monitoring & optimization",
            "Monthly reports & recommendations",
            "Dedicated account manager"
          ]}
          popular={false}
        />
      </div>
    </div>
  );
}

function PricingCard({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`relative bg-white border-2 rounded-xl p-8 ${popular ? 'border-green-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
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
    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your IT Infrastructure?</h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your IT needs and create a robust, scalable infrastructure that supports your business growth.
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
          Email Us
        </a>
      </div>
<<<<<<< HEAD
      <div className="mt-6 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}
=======
    </section>
  );
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
