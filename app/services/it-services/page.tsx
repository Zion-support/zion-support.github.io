export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, security, and infrastructure management.',
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Cloud migration, DevOps, SRE, and security services engineered for uptime, 
          efficiency, and scalability. From assessment to managed operations.
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
            Start Assessment
          </a>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our IT Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard 
            title="Cloud Migration & Strategy"
            description="Complete cloud migration with AWS, Azure, and GCP expertise including cost optimization"
            features={["Multi-cloud strategy", "Cost optimization", "Security compliance", "Performance tuning"]}
            pricing="$5,000-25,000/project"
            icon="☁️"
          />
          <ITServiceCard 
            title="DevOps & CI/CD Pipeline"
            description="Automated deployment pipelines with infrastructure as code and monitoring"
            features={["CI/CD automation", "Infrastructure as Code", "Container orchestration", "Monitoring setup"]}
            pricing="$3,000-15,000/month"
            icon="🔄"
          />
          <ITServiceCard 
            title="Site Reliability Engineering"
            description="24/7 monitoring, incident response, and performance optimization for critical systems"
            features={["SLO/SLI management", "Incident response", "Performance optimization", "Capacity planning"]}
            pricing="$4,000-20,000/month"
            icon="📊"
          />
          <ITServiceCard 
            title="Cybersecurity & Compliance"
            description="Comprehensive security assessment, hardening, and compliance management"
            features={["Security audits", "Penetration testing", "Compliance management", "Incident response"]}
            pricing="$2,500-12,000/month"
            icon="🛡️"
          />
          <ITServiceCard 
            title="Infrastructure Management"
            description="Complete infrastructure lifecycle management with automation and optimization"
            features={["Infrastructure monitoring", "Automated scaling", "Backup & recovery", "Cost management"]}
            pricing="$2,000-10,000/month"
            icon="🏗️"
          />
          <ITServiceCard 
            title="Database Administration"
            description="Database design, optimization, and management for high-performance applications"
            features={["Database design", "Performance tuning", "Backup strategies", "Security hardening"]}
            pricing="$1,800-8,500/month"
            icon="🗄️"
          />
        </div>
      </section>

      {/* Cloud & Infrastructure */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cloud & Infrastructure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <CloudFeature 
              title="AWS Migration & Optimization"
              description="Complete AWS migration with EC2, RDS, Lambda, and cost optimization strategies"
            />
            <CloudFeature 
              title="Azure Cloud Services"
              description="Microsoft Azure implementation with Azure DevOps, App Service, and SQL Database"
            />
            <CloudFeature 
              title="Google Cloud Platform"
              description="GCP services including Compute Engine, Cloud SQL, and Kubernetes Engine"
            />
            <CloudFeature 
              title="Multi-Cloud Strategy"
              description="Hybrid and multi-cloud architectures for redundancy and vendor independence"
            />
          </div>
          <div className="space-y-6">
            <CloudFeature 
              title="Kubernetes Orchestration"
              description="Container orchestration with Kubernetes for scalable microservices"
            />
            <CloudFeature 
              title="Serverless Architecture"
              description="Serverless solutions with AWS Lambda, Azure Functions, and Google Cloud Functions"
            />
            <CloudFeature 
              title="Infrastructure as Code"
              description="Terraform and CloudFormation for automated infrastructure management"
            />
            <CloudFeature 
              title="Cost Optimization"
              description="Cloud cost analysis and optimization strategies to reduce spending by 20-40%"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Services Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITPricingCard 
            name="IT Assessment"
            price="$4,000–$10,000"
            duration="2 weeks"
            features={[
              "Infrastructure audit",
              "Security assessment",
              "Performance analysis",
              "Cost optimization review",
              "Technology roadmap",
              "Risk assessment"
            ]}
            popular={false}
          />
          <ITPricingCard 
            name="Implementation"
            price="$15,000–$50,000"
            duration="4–8 weeks"
            features={[
              "Cloud migration",
              "Infrastructure as code",
              "CI/CD pipeline setup",
              "Security hardening",
              "Monitoring implementation",
              "Documentation & training"
            ]}
            popular={true}
          />
          <ITPricingCard 
            name="Managed Services"
            price="$5,000+/month"
            duration="Ongoing"
            features={[
              "24/7 monitoring & support",
              "SLO management",
              "Incident response",
              "Cost optimization",
              "Security updates",
              "Performance reports"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your IT?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's assess your current IT infrastructure and create a modernization plan. 
            We'll help you choose the right technologies and strategies for your business.
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

function ITServiceCard({ title, description, features, pricing, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}

function CloudFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
        <span className="text-blue-600 text-sm">✓</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function ITPricingCard({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="https://ziontechgroup.com" 
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

