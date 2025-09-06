import Link from 'next/link';

export const metadata = { 
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering services.'
};

export default function DataAnalyticsPage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Analytics Services</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Transform your data into actionable insights. From business intelligence dashboards to 
          predictive analytics, we help you make data-driven decisions that drive growth.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <DataServiceCard
            title="Business Intelligence Dashboards"
            description="Interactive dashboards that provide real-time insights into your business performance"
            features={["Real-time data visualization", "Custom KPI tracking", "Interactive reports", "Mobile-responsive design"]}
            price="$18k-$45k"
            timeline="4-10 weeks"
            icon="📊"
          />
          <DataServiceCard
            title="Predictive Analytics & ML Models"
            description="Machine learning models that predict future trends and customer behavior"
            features={["Predictive modeling", "Customer segmentation", "Churn prediction", "Demand forecasting"]}
            price="$25k-$70k"
            timeline="6-14 weeks"
            icon="🔮"
          />
          <DataServiceCard
            title="Data Engineering & ETL Pipelines"
            description="Robust data pipelines that collect, process, and transform data from multiple sources"
            features={["ETL/ELT pipelines", "Data warehousing", "Real-time processing", "Data quality management"]}
            price="$20k-$60k"
            timeline="5-12 weeks"
            icon="⚙️"
          />
          <DataServiceCard
            title="Customer Analytics & Segmentation"
            description="Deep insights into customer behavior, preferences, and lifetime value"
            features={["Customer journey mapping", "RFM analysis", "Cohort analysis", "Personalization engines"]}
            price="$15k-$40k"
            timeline="3-8 weeks"
            icon="👥"
          />
          <DataServiceCard
            title="Marketing Analytics & Attribution"
            description="Comprehensive marketing performance analysis and multi-touch attribution"
            features={["Campaign performance", "Attribution modeling", "ROI analysis", "A/B testing"]}
            price="$12k-$35k"
            timeline="3-7 weeks"
            icon="📈"
          />
          <DataServiceCard
            title="Real-time Data Streaming"
            description="Live data processing and analytics for immediate insights and decision making"
            features={["Stream processing", "Real-time dashboards", "Event-driven analytics", "Alert systems"]}
            price="$22k-$55k"
            timeline="4-10 weeks"
            icon="⚡"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Analytics Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnalyticsTechCard
            title="Data Visualization"
            technologies={["Tableau", "Power BI", "Grafana", "D3.js", "Chart.js"]}
            description="Interactive and engaging data visualization"
          />
          <AnalyticsTechCard
            title="Big Data Processing"
            technologies={["Apache Spark", "Hadoop", "Kafka", "Flink", "Storm"]}
            description="Large-scale data processing and analytics"
          />
          <AnalyticsTechCard
            title="Machine Learning"
            technologies={["Python", "R", "TensorFlow", "Scikit-learn", "Pandas"]}
            description="Advanced analytics and machine learning"
          />
          <AnalyticsTechCard
            title="Cloud Analytics"
            technologies={["AWS Analytics", "Google Analytics", "Azure Synapse", "Snowflake", "BigQuery"]}
            description="Cloud-native analytics solutions"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Analytics Solutions by Industry</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IndustryAnalyticsCard
            industry="E-commerce"
            solutions={["Sales forecasting", "Inventory optimization", "Customer lifetime value", "Product recommendation"]}
            icon="🛒"
          />
          <IndustryAnalyticsCard
            industry="Healthcare"
            solutions={["Patient outcomes", "Resource optimization", "Clinical trials", "Population health"]}
            icon="🏥"
          />
          <IndustryAnalyticsCard
            industry="Financial Services"
            solutions={["Risk assessment", "Fraud detection", "Credit scoring", "Portfolio optimization"]}
            icon="💳"
          />
          <IndustryAnalyticsCard
            industry="Manufacturing"
            solutions={["Quality control", "Predictive maintenance", "Supply chain optimization", "Production efficiency"]}
            icon="🏭"
          />
          <IndustryAnalyticsCard
            industry="Marketing"
            solutions={["Campaign optimization", "Customer acquisition", "Content performance", "Social media analytics"]}
            icon="📢"
          />
          <IndustryAnalyticsCard
            industry="Real Estate"
            solutions={["Property valuation", "Market analysis", "Investment returns", "Tenant analytics"]}
            icon="🏠"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Analytics Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnalyticsPackageCard
            name="Data Discovery"
            price="$8k–$20k"
            duration="2–4 weeks"
            features={[
              "Data audit & assessment",
              "KPI identification",
              "Data quality analysis",
              "Analytics roadmap",
              "Tool recommendations"
            ]}
            recommended={false}
          />
          <AnalyticsPackageCard
            name="Analytics Implementation"
            price="$20k–$50k"
            duration="4–10 weeks"
            features={[
              "Dashboard development",
              "Data pipeline setup",
              "Report automation",
              "User training",
              "Ongoing support"
            ]}
            recommended={true}
          />
          <AnalyticsPackageCard
            name="Advanced Analytics"
            price="$40k+"
            duration="8+ weeks"
            features={[
              "Machine learning models",
              "Predictive analytics",
              "Real-time processing",
              "Custom algorithms",
              "Dedicated support"
            ]}
            recommended={false}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Analytics Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            step="1"
            title="Data Assessment"
            description="Evaluate your data sources, quality, and readiness for analytics"
            duration="1-2 weeks"
          />
          <ProcessStep
            step="2"
            title="Strategy & Design"
            description="Define analytics goals, KPIs, and design the solution architecture"
            duration="1-3 weeks"
          />
          <ProcessStep
            step="3"
            title="Development & Testing"
            description="Build analytics solutions, test models, and validate results"
            duration="3-8 weeks"
          />
          <ProcessStep
            step="4"
            title="Deployment & Training"
            description="Deploy solutions, train users, and establish monitoring"
            duration="1-2 weeks"
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Unlock Your Data's Potential?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Let's discuss your data challenges and create a comprehensive analytics solution 
          that transforms your data into actionable business insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors text-center"
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function DataServiceCard({ title, description, features, price, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-indigo-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-indigo-600">{price}</span>
        <span className="text-sm text-gray-500">{timeline}</span>
      </div>
    </div>
  );
}

function AnalyticsTechCard({ title, technologies, description }: {
  title: string;
  technologies: string[];
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustryAnalyticsCard({ industry, solutions, icon }: {
  industry: string;
  solutions: string[];
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{industry}</h3>
      <ul className="space-y-2">
        {solutions.map((solution, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-indigo-500 mr-2">•</span> {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AnalyticsPackageCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${recommended ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-indigo-600 mb-2">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-indigo-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
        recommended 
          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}

function ProcessStep({ step, title, description, duration }: {
  step: string;
  title: string;
  description: string;
  duration: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2 text-sm">{description}</p>
      <span className="text-indigo-600 text-sm font-semibold">{duration}</span>
    </div>
  );
}