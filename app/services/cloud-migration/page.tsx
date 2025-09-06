export const metadata = { 
  title: 'Cloud Migration Services | Zion Tech Group',
  description: 'Professional cloud migration services with AWS, Azure, and GCP expertise. Secure and cost-effective cloud solutions starting at $15k.'
};

export default function CloudMigrationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Cloud Migration Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional cloud migration services with AWS, Azure, and GCP expertise. Secure, scalable, and cost-effective cloud solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item 
            title="Migration Planning" 
            details={[
              "Infrastructure assessment",
              "Migration strategy",
              "Cost optimization analysis",
              "Risk assessment",
              "Timeline planning",
              "Resource allocation",
              "Rollback planning"
            ]} 
          />
          <Item 
            title="Cloud Platforms" 
            details={[
              "AWS migration",
              "Azure migration",
              "Google Cloud migration",
              "Multi-cloud strategies",
              "Hybrid cloud solutions",
              "Cloud-native architecture",
              "Container migration"
            ]} 
          />
          <Item 
            title="Security & Compliance" 
            details={[
              "Security hardening",
              "Compliance frameworks",
              "Data encryption",
              "Access controls",
              "Audit logging",
              "Backup & recovery",
              "Disaster recovery"
            ]} 
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cloud Migration Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Zero-Downtime Migration</h3>
              <p className="text-gray-600">Minimize business disruption with advanced migration strategies and real-time data synchronization.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Cost Optimization</h3>
              <p className="text-gray-600">Reduce cloud costs by up to 40% with right-sizing, reserved instances, and automated scaling.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Security First</h3>
              <p className="text-gray-600">Implement enterprise-grade security with encryption, monitoring, and compliance frameworks.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock monitoring and support to ensure your cloud infrastructure runs smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cloud Migration Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan 
          name="Small Business" 
          price="$15k–$30k" 
          duration="4–8 weeks"
          features={[
            "Single cloud platform",
            "Basic migration",
            "Security hardening",
            "Cost optimization",
            "Basic monitoring",
            "Documentation",
            "30-day support"
          ]} 
        />
        <Plan 
          name="Enterprise" 
          price="$30k–$75k" 
          duration="8–16 weeks"
          features={[
            "Multi-cloud strategy",
            "Advanced migration",
            "High availability setup",
            "Advanced security",
            "Comprehensive monitoring",
            "Training & documentation",
            "90-day support"
          ]} 
        />
        <Plan 
          name="Large Enterprise" 
          price="$75k+" 
          duration="12–24 weeks"
          features={[
            "Custom cloud architecture",
            "Zero-downtime migration",
            "Disaster recovery",
            "Compliance frameworks",
            "Dedicated support team",
            "SLA guarantees",
            "Ongoing optimization"
          ]} 
        />
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Migrate to the Cloud?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's plan and execute your cloud migration with minimal risk and maximum efficiency.
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
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=Cloud Migration Services Inquiry"
        className="block w-full mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}