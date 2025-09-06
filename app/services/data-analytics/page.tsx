import Link from "next/link";

export const metadata = {
  title: "Data Analytics & BI | Zion Tech Group",
  description: "Advanced data analytics, business intelligence, and machine learning solutions to transform raw data into actionable insights.",
};

export default function DataAnalyticsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Data Analytics & Business Intelligence
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your raw data into actionable insights with our advanced Data Analytics and Business Intelligence solutions. We empower your business with predictive modeling, real-time dashboards, and data-driven decision-making.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="📊"
              title="Advanced Data Modeling"
              description="Design and implement robust data models that support complex analytics and reporting requirements."
              benefits={["Scalable data architecture", "High data accuracy", "Optimized query performance", "Custom data schemas"]}
            />
            <FeatureItem
              icon="📈"
              title="Business Intelligence Dashboards"
              description="Create interactive and intuitive BI dashboards that provide real-time insights into key performance indicators (KPIs)."
              benefits={["Real-time data visualization", "Customizable reports", "User-friendly interface", "Cross-device access"]}
            />
            <FeatureItem
              icon="🧠"
              title="Predictive Analytics & ML"
              description="Leverage machine learning models to forecast future trends, predict customer behavior, and identify new opportunities."
              benefits={["95% prediction accuracy", "Fraud detection", "Churn prediction", "Demand forecasting"]}
            />
            <FeatureItem
              icon="🔍"
              title="Data Warehousing & Lakes"
              description="Build and manage scalable data warehouses and data lakes for efficient storage and processing of large datasets."
              benefits={["Centralized data storage", "Big data processing", "Data governance", "Cloud-native solutions"]}
            />
            <FeatureItem
              icon="🧹"
              title="Data Integration & Quality"
              description="Integrate data from disparate sources and ensure high data quality through cleansing, validation, and transformation processes."
              benefits={["Unified data view", "Automated data pipelines", "Error reduction", "Improved data reliability"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Data-Driven Decisions</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="🚀"
              title="Accelerate Growth"
              description="Identify new market opportunities, optimize product offerings, and drive revenue growth with data-backed strategies."
            />
            <BenefitCard
              icon="💡"
              title="Enhance Decision-Making"
              description="Make informed, strategic decisions based on accurate, real-time data and predictive insights."
            />
            <BenefitCard
              icon="💰"
              title="Optimize Operations"
              description="Streamline business processes, reduce operational costs, and improve efficiency across all departments."
            />
            <BenefitCard
              icon="🎯"
              title="Improve Customer Experience"
              description="Understand customer needs and preferences better, leading to personalized experiences and increased satisfaction."
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Data Analytics Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a comprehensive process to deliver impactful data solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Data Strategy & Discovery"
            description="Define business objectives, data sources, and analytics requirements."
          />
          <ProcessStep
            step="2"
            title="Data Engineering & Modeling"
            description="Collect, clean, transform, and model data for analysis."
          />
          <ProcessStep
            step="3"
            title="Analysis & Visualization"
            description="Apply analytical techniques, build dashboards, and generate insights."
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
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
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
      <div className="text-4xl mb-4 text-green-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock the Power of Your Data?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free data analytics consultation and discover how insights can transform your business.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}