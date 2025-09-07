
export const metadata = {
  title: "Cloud Solutions | Zion Tech Group",
  description: "Comprehensive cloud migration, optimization, and management services for AWS, Azure, and GCP to maximize scalability and efficiency.",
};

export default function CloudSolutionsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Cloud Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Harness the full potential of the cloud with our expert cloud solutions. From seamless migration to optimized management across AWS, Azure, and GCP, we ensure your infrastructure is scalable, secure, and cost-effective.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Cloud Offerings</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="☁️"
              title="Cloud Migration"
              description="Seamlessly migrate your existing applications and data to leading cloud platforms with minimal downtime and risk."
              benefits={["Zero downtime migration", "Data integrity", "Cost-effective transition", "Post-migration support"]}
            />
            <FeatureItem
              icon="⚙️"
              title="Cloud Optimization"
              description="Optimize your cloud resources for performance, cost efficiency, and scalability using advanced tools and strategies."
              benefits={["40% cost reduction", "Performance tuning", "Resource scaling", "Automated governance"]}
            />
            <FeatureItem
              icon="🛡️"
              title="Cloud Security & Compliance"
              description="Implement robust security measures and ensure compliance with industry standards across your cloud infrastructure."
              benefits={["Data encryption", "Access control", "Threat detection", "Regulatory compliance"]}
            />
            <FeatureItem
              icon="📊"
              title="Cloud Management & Monitoring"
              description="24/7 monitoring, proactive management, and expert support for your cloud environment to ensure high availability and performance."
              benefits={["99.9% cloud uptime", "Real-time alerts", "Performance analytics", "Dedicated support"]}
            />
            <FeatureItem
              icon="🤝"
              title="Multi-Cloud & Hybrid Cloud"
              description="Design and implement strategies for multi-cloud and hybrid cloud environments, maximizing flexibility and resilience."
              benefits={["Vendor lock-in avoidance", "Enhanced disaster recovery", "Optimized workload placement", "Unified management"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for Cloud?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="🚀"
              title="Accelerated Digital Transformation"
              description="Leverage cloud technology to drive innovation, improve agility, and accelerate your digital transformation journey."
            />
            <BenefitCard
              icon="💰"
              title="Significant Cost Savings"
              description="Reduce infrastructure costs, optimize resource utilization, and achieve a higher ROI on your cloud investments."
            />
            <BenefitCard
              icon="📈"
              title="Enhanced Scalability & Performance"
              description="Build highly scalable and performant applications that can adapt to fluctuating demands and deliver exceptional user experiences."
            />
            <BenefitCard
              icon="🔒"
              title="Robust Security & Reliability"
              description="Benefit from enterprise-grade security, high availability, and disaster recovery solutions for peace of mind."
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cloud Adoption Framework</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a structured framework to ensure a successful and optimized cloud journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Assess & Strategize"
            description="Evaluate current infrastructure, define cloud goals, and create a migration roadmap."
          />
          <ProcessStep
            step="2"
            title="Migrate & Implement"
            description="Execute migration, deploy cloud services, and integrate with existing systems."
          />
          <ProcessStep
            step="3"
            title="Manage & Optimize"
            description="Provide ongoing management, monitoring, and continuous optimization for cost and performance."
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Elevate Your Infrastructure to the Cloud?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free cloud consultation and discover how our solutions can drive efficiency and innovation.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}