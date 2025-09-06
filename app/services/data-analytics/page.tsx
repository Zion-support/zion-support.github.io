import Link from 'next/link';

export const metadata = { 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Comprehensive data analytics services including business intelligence, data visualization, predictive analytics, and data science solutions for data-driven decision making.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data science, machine learning, data consulting'
=======
>>>>>>> d9a4214406946307ebf253d8e717bd531b4be976
=======
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
=======
  title: 'Data Analytics Solutions | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. Turn data into actionable insights.'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
};

export default function DataAnalyticsPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    <div className="animate-fade-in">
<<<<<<< HEAD
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
=======
>>>>>>> d9a4214406946307ebf253d8e717bd531b4be976
            icon="⚡"
          />
          <DataServiceCard
            title="Marketing Analytics"
            description="Comprehensive marketing data analysis and campaign optimization"
            features={["Campaign performance", "Attribution modeling", "Customer journey analysis", "ROI measurement", "A/B testing", "Conversion optimization"]}
            price="$18k–$60k"
            icon="📢"
          />
          <DataServiceCard
            title="Supply Chain Analytics"
            description="Supply chain optimization and logistics data analysis"
            features={["Demand forecasting", "Inventory optimization", "Supplier performance", "Cost analysis", "Risk assessment", "Route optimization"]}
            price="$20k–$70k"
            icon="🚚"
          />
          <DataServiceCard
            title="HR Analytics & People Intelligence"
            description="Human resources data analysis and workforce insights"
            features={["Employee performance", "Retention analysis", "Recruitment metrics", "Skills gap analysis", "Engagement tracking", "Predictive HR"]}
            price="$16k–$55k"
            icon="👥"
          />
          <DataServiceCard
            title="Web & Digital Analytics"
            description="Website and digital platform performance analysis"
            features={["User behavior tracking", "Conversion funnel analysis", "SEO performance", "Content analytics", "Mobile analytics", "E-commerce tracking"]}
            price="$12k–$40k"
            icon="🌐"
          />
          <DataServiceCard
            title="IoT & Sensor Analytics"
            description="Internet of Things data analysis and sensor monitoring"
            features={["Sensor data processing", "Predictive maintenance", "Anomaly detection", "Performance monitoring", "Alert systems", "Trend analysis"]}
            price="$25k–$85k"
            icon="📡"
          />
          <DataServiceCard
            title="Social Media Analytics"
            description="Social media data analysis and sentiment tracking"
            features={["Sentiment analysis", "Engagement metrics", "Influencer tracking", "Brand monitoring", "Trend analysis", "Competitor analysis"]}
            price="$15k–$50k"
            icon="📱"
          />
          <DataServiceCard
            title="Risk Analytics & Fraud Detection"
            description="Advanced risk assessment and fraud detection systems"
            features={["Risk scoring", "Fraud detection", "Anomaly detection", "Pattern recognition", "Alert systems", "Compliance monitoring"]}
            price="$22k–$75k"
            icon="🛡️"
          />
          <DataServiceCard
            title="Sales Analytics & Forecasting"
            description="Sales performance analysis and revenue forecasting"
            features={["Sales forecasting", "Pipeline analysis", "Performance tracking", "Territory analysis", "Commission tracking", "Revenue optimization"]}
            price="$18k–$65k"
            icon="💼"
          />
          <DataServiceCard
            title="Healthcare Analytics"
            description="Medical data analysis and healthcare insights"
            features={["Patient analytics", "Clinical outcomes", "Resource optimization", "Quality metrics", "Cost analysis", "Population health"]}
            price="$30k–$100k"
            icon="🏥"
          />
          <DataServiceCard
            title="Manufacturing Analytics"
            description="Production data analysis and manufacturing optimization"
            features={["Production monitoring", "Quality control", "Equipment efficiency", "Predictive maintenance", "Cost optimization", "Yield analysis"]}
            price="$25k–$80k"
            icon="🏭"
          />
          <DataServiceCard
            title="Energy & Utilities Analytics"
            description="Energy consumption analysis and utility optimization"
            features={["Energy consumption", "Cost optimization", "Demand forecasting", "Efficiency analysis", "Sustainability metrics", "Grid optimization"]}
            price="$20k–$70k"
            icon="⚡"
          />
          <DataServiceCard
            title="Real Estate Analytics"
            description="Property market analysis and investment insights"
            features={["Market analysis", "Property valuation", "Investment analysis", "Rental analytics", "Market trends", "ROI calculation"]}
            price="$18k–$60k"
            icon="🏠"
          />
          <DataServiceCard
            title="Retail Analytics"
            description="Retail data analysis and customer insights"
            features={["Sales analysis", "Inventory optimization", "Customer segmentation", "Store performance", "Product analytics", "Seasonal analysis"]}
            price="$20k–$65k"
            icon="🛒"
          />
          <DataServiceCard
            title="Insurance Analytics"
            description="Insurance data analysis and risk assessment"
            features={["Risk assessment", "Claims analysis", "Pricing optimization", "Fraud detection", "Customer segmentation", "Underwriting analytics"]}
            price="$22k–$75k"
            icon="🛡️"
          />
          <DataServiceCard
            title="Education Analytics"
            description="Educational data analysis and learning insights"
            features={["Student performance", "Learning analytics", "Course effectiveness", "Engagement tracking", "Outcome prediction", "Resource optimization"]}
            price="$18k–$60k"
            icon="🎓"
          />
          <DataServiceCard
            title="Environmental Analytics"
            description="Environmental data analysis and sustainability insights"
            features={["Environmental monitoring", "Carbon footprint", "Sustainability metrics", "Compliance tracking", "Impact assessment", "Trend analysis"]}
            price="$20k–$70k"
            icon="🌱"
          />
          <DataServiceCard
            title="Sports Analytics"
            description="Sports performance analysis and team insights"
            features={["Performance metrics", "Player analysis", "Team statistics", "Game analysis", "Injury prediction", "Strategy optimization"]}
            price="$25k–$80k"
            icon="⚽"
          />
          <DataServiceCard
            title="Government & Public Sector Analytics"
            description="Public sector data analysis and policy insights"
            features={["Policy analysis", "Citizen services", "Resource allocation", "Performance metrics", "Compliance tracking", "Impact assessment"]}
            price="$30k–$90k"
            icon="🏛️"
          />
        </div>
      </section>

<<<<<<< HEAD
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
=======
>>>>>>> d9a4214406946307ebf253d8e717bd531b4be976
          />
        </div>
      </section>

<<<<<<< HEAD
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
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
    </div>
  );
}

      >
        Get Started
      </a>
    </div>
  );
<<<<<<< HEAD
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
<<<<<<< HEAD
      <ul className="text-gray-600 space-y-2">
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}
=======
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
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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

<<<<<<< HEAD
function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
=======
function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  features: string[]; 
  popular: boolean; 
}) {
  return (
<<<<<<< HEAD
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
=======
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
<<<<<<< HEAD
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
=======
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
=======
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
          >
            Email Us
          </a>
        </div>
<<<<<<< HEAD
>>>>>>> d9a4214406946307ebf253d8e717bd531b4be976
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
=======
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
