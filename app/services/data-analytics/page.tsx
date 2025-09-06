import Link from 'next/link';

export const metadata = { 
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Comprehensive data analytics services including business intelligence, data visualization, predictive analytics, and data science solutions for data-driven decision making.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data science, machine learning, data consulting'
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
};

export default function DataAnalyticsPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Data Analytics Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Transform your data into actionable insights with our comprehensive analytics services. 
          From business intelligence to predictive analytics, we help you make data-driven decisions that drive growth.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Data Analytics Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DataAnalyticsServiceCard
            title="Business Intelligence Dashboards"
            description="Interactive dashboards and reports for real-time business insights"
            features={["Real-time dashboards", "KPI tracking", "Custom reports", "Data visualization", "Mobile access"]}
            price="$8,000-30,000"
            icon="📊"
          />
          <DataAnalyticsServiceCard
            title="Predictive Analytics"
            description="Machine learning models for forecasting and predictive insights"
            features={["Demand forecasting", "Customer churn prediction", "Risk assessment", "Sales forecasting", "Anomaly detection"]}
            price="$12,000-45,000"
            icon="🔮"
          />
          <DataAnalyticsServiceCard
            title="Data Warehousing & ETL"
            description="Centralized data storage and processing pipelines for analytics"
            features={["Data warehouse design", "ETL/ELT pipelines", "Data quality management", "Data governance", "Scalable architecture"]}
            price="$15,000-60,000"
            icon="🏗️"
          />
          <DataAnalyticsServiceCard
            title="Customer Analytics"
            description="Deep insights into customer behavior and segmentation"
            features={["Customer segmentation", "Behavioral analysis", "Lifetime value prediction", "Churn analysis", "Personalization"]}
            price="$10,000-35,000"
            icon="👥"
          />
          <DataAnalyticsServiceCard
            title="Marketing Analytics"
            description="Comprehensive marketing performance measurement and optimization"
            features={["Campaign analysis", "Attribution modeling", "ROI measurement", "A/B testing", "Marketing automation"]}
            price="$8,000-25,000"
            icon="📈"
          />
          <DataAnalyticsServiceCard
            title="Real-time Analytics"
            description="Streaming data processing and real-time decision making"
            features={["Stream processing", "Real-time dashboards", "Event-driven analytics", "Alert systems", "Live monitoring"]}
            price="$12,000-40,000"
            icon="⚡"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Analytics Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DataAnalyticsProcessStep
            step="1"
            title="Data Discovery"
            description="Identify data sources, assess quality, and understand business requirements"
          />
          <DataAnalyticsProcessStep
            step="2"
            title="Data Preparation"
            description="Clean, transform, and structure data for analysis and modeling"
          />
          <DataAnalyticsProcessStep
            step="3"
            title="Analysis & Modeling"
            description="Apply statistical methods and machine learning to extract insights"
          />
          <DataAnalyticsProcessStep
            step="4"
            title="Visualization & Deployment"
            description="Create dashboards and deploy solutions for ongoing insights"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Analytics Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DataAnalyticsTechStack
            title="Data Processing"
            technologies={["Apache Spark", "Hadoop", "Apache Kafka", "Apache Airflow", "dbt"]}
          />
          <DataAnalyticsTechStack
            title="Visualization & BI"
            technologies={["Tableau", "Power BI", "Looker", "Grafana", "D3.js"]}
          />
          <DataAnalyticsTechStack
            title="Machine Learning"
            technologies={["Python", "R", "TensorFlow", "Scikit-learn", "MLflow"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Analytics Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryAnalytics
            title="E-commerce"
            description="Customer behavior analysis and sales optimization"
            solutions={["Product recommendation", "Inventory optimization", "Price optimization", "Customer lifetime value"]}
            icon="🛒"
          />
          <IndustryAnalytics
            title="Healthcare"
            description="Patient outcomes and operational efficiency analytics"
            solutions={["Patient risk scoring", "Treatment optimization", "Resource allocation", "Clinical outcomes"]}
            icon="🏥"
          />
          <IndustryAnalytics
            title="Finance"
            description="Risk management and fraud detection analytics"
            solutions={["Credit risk modeling", "Fraud detection", "Algorithmic trading", "Regulatory compliance"]}
            icon="💰"
          />
          <IndustryAnalytics
            title="Manufacturing"
            description="Supply chain and production optimization analytics"
            solutions={["Predictive maintenance", "Quality control", "Supply chain optimization", "Demand forecasting"]}
            icon="🏭"
          />
          <IndustryAnalytics
            title="Marketing"
            description="Campaign performance and customer acquisition analytics"
            solutions={["Attribution modeling", "Customer journey analysis", "Campaign optimization", "ROI measurement"]}
            icon="📢"
          />
          <IndustryAnalytics
            title="HR & People"
            description="Workforce analytics and talent management"
            solutions={["Employee retention", "Performance analytics", "Talent acquisition", "Workforce planning"]}
            icon="👨‍💼"
          />
        </div>
      </section>

      <Pricing />
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Data Analytics Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DataAnalyticsBenefitCard
            title="Expert Data Scientists"
            description="PhD-level data scientists with deep industry experience"
            icon="👨‍🔬"
          />
          <DataAnalyticsBenefitCard
            title="Actionable Insights"
            description="Transform complex data into clear, actionable business recommendations"
            icon="💡"
          />
          <DataAnalyticsBenefitCard
            title="Scalable Solutions"
            description="Analytics solutions that grow with your business and data volume"
            icon="📈"
          />
          <DataAnalyticsBenefitCard
            title="Real-time Processing"
            description="Process and analyze data in real-time for immediate insights"
            icon="⚡"
          />
          <DataAnalyticsBenefitCard
            title="Custom Dashboards"
            description="Tailored visualizations that match your business needs and KPIs"
            icon="📊"
          />
          <DataAnalyticsBenefitCard
            title="Ongoing Support"
            description="Continuous monitoring, optimization, and support for your analytics"
            icon="🛠️"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

      >
        Get Started
      </a>
    </div>
  );
}

function DataAnalyticsProcessStep({ step, title, description }: { 
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

function DataAnalyticsTechStack({ title, technologies }: { 
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

function IndustryAnalytics({ title, description, solutions, icon }: { 
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

function DataAnalyticsBenefitCard({ title, description, icon }: { 
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Data Analytics Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Analytics Assessment" 
          price="$5k–$15k" 
          features={["2–3 weeks", "Data audit", "Requirements analysis", "Strategy roadmap", "Tool recommendations"]} 
          popular={false}
        />
        <Plan 
          name="Dashboard Development" 
          price="$10k–$35k" 
          features={["4–8 weeks", "Custom dashboards", "Data integration", "User training", "Documentation"]} 
          popular={true}
        />
        <Plan 
          name="Advanced Analytics" 
          price="$20k–$75k" 
          features={["8–16 weeks", "ML models", "Predictive analytics", "Real-time processing", "Ongoing support"]} 
          popular={false}
        />
      </div>
    </section>
  );
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Unlock the Power of Your Data?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Transform your data into competitive advantage with our comprehensive analytics solutions. 
        Let's discuss your data challenges and create a strategy that drives real business value.
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
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
    </div>
  );
}