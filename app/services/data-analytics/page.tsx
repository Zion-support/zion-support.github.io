export const metadata = { 
  title: 'Data Analytics Solutions | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. Turn data into actionable insights.'
};

export default function DataAnalyticsPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Data Analytics Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. 
          Turn your data into actionable insights that drive business growth.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Data Analytics Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DataServiceCard
            title="Business Intelligence Dashboards"
            description="Interactive dashboards and reports for real-time business insights"
            features={["Custom dashboard design", "Real-time data visualization", "Interactive reports", "Mobile-responsive design", "Automated reporting"]}
            price="$12k–$40k"
            icon="📊"
          />
          <DataServiceCard
            title="Predictive Analytics & ML"
            description="Machine learning models for forecasting and predictive insights"
            features={["Predictive modeling", "Time series forecasting", "Anomaly detection", "Recommendation engines", "Risk assessment"]}
            price="$18k–$60k"
            icon="🔮"
          />
          <DataServiceCard
            title="Data Engineering & ETL"
            description="Data pipeline development and data warehouse solutions"
            features={["ETL pipeline development", "Data warehouse design", "Data quality management", "Real-time streaming", "Data governance"]}
            price="$15k–$50k"
            icon="⚙️"
          />
          <DataServiceCard
            title="Customer Analytics"
            description="Customer behavior analysis and segmentation for targeted marketing"
            features={["Customer segmentation", "Behavioral analysis", "Churn prediction", "Lifetime value modeling", "Personalization engines"]}
            price="$20k–$70k"
            icon="👥"
          />
          <DataServiceCard
            title="Financial Analytics"
            description="Financial data analysis and reporting for better decision making"
            features={["Financial reporting", "Budget analysis", "Cost optimization", "Revenue forecasting", "Risk modeling"]}
            price="$16k–$55k"
            icon="💰"
          />
          <DataServiceCard
            title="Real-time Analytics"
            description="Real-time data processing and streaming analytics"
            features={["Stream processing", "Real-time dashboards", "Event-driven analytics", "Alert systems", "Performance monitoring"]}
            price="$22k–$80k"
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

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Analytics Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Data Processing & Storage" 
            details={[
              "Apache Spark, Hadoop, and Kafka",
              "Cloud data warehouses (Snowflake, BigQuery)",
              "NoSQL databases (MongoDB, Cassandra)",
              "Data lakes and object storage",
              "Stream processing platforms",
              "Data versioning and lineage"
            ]} 
          />
          <Item 
            title="Analytics & Visualization" 
            details={[
              "Tableau, Power BI, and Looker",
              "Python (Pandas, NumPy, Scikit-learn)",
              "R and statistical analysis",
              "Jupyter notebooks and RStudio",
              "Custom web applications",
              "Interactive dashboards"
            ]} 
          />
          <Item 
            title="Machine Learning & AI" 
            details={[
              "TensorFlow, PyTorch, and scikit-learn",
              "MLOps and model deployment",
              "Feature engineering and selection",
              "Model monitoring and drift detection",
              "AutoML and hyperparameter tuning",
              "Deep learning and neural networks"
            ]} 
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

function DataServiceCard({ title, description, features, price, icon }: { 
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
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Analytics Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Data Assessment" 
          price="$8k–$20k" 
          duration="3–6 weeks"
          features={[
            "Data quality assessment",
            "Analytics opportunity identification",
            "Technology stack recommendations",
            "ROI analysis and business case",
            "Implementation roadmap",
            "Pilot project design"
          ]} 
        />
        <Plan 
          name="Analytics Implementation" 
          price="$25k–$100k" 
          duration="10–20 weeks"
          features={[
            "End-to-end analytics solution",
            "Data pipeline development",
            "Dashboard and visualization creation",
            "Machine learning model development",
            "Testing and validation",
            "User training and documentation"
          ]} 
        />
        <Plan 
          name="Managed Analytics" 
          price="$5k+/mo" 
          duration="Ongoing"
          features={[
            "Continuous data monitoring",
            "Model maintenance and updates",
            "Performance optimization",
            "Regular reporting and insights",
            "Data quality management",
            "Scalability and growth support"
          ]} 
        />
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
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Unlock Your Data's Potential?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's transform your data into actionable insights that drive business growth. 
          Our data analytics experts have delivered 100+ successful analytics projects.
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