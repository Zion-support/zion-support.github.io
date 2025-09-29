export const metadata = { 
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, predictive modeling, data visualization, and real-time analytics. Transform data into actionable insights.'
}; 

export default function DataAnalyticsPage() { 
  return ( 
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Analytics Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced data analytics solutions including business intelligence, predictive modeling, 
            data visualization, and real-time analytics. Transform data into actionable insights.
          </p>
        </div>

        {/* Analytics Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnalyticsServiceCategory
            title="Business Intelligence"
            icon="📊"
            description="Comprehensive BI solutions for data-driven decisions"
            services={[
              "Interactive dashboards",
              "KPI monitoring",
              "Data warehousing",
              "ETL pipelines",
              "Report automation",
              "Self-service analytics"
            ]}
          />
          <AnalyticsServiceCategory
            title="Predictive Analytics"
            icon="🔮"
            description="Machine learning models for forecasting and prediction"
            services={[
              "Predictive modeling",
              "Time series forecasting",
              "Customer segmentation",
              "Risk assessment",
              "Demand forecasting",
              "Churn prediction"
            ]}
          />
          <AnalyticsServiceCategory
            title="Real-time Analytics"
            icon="⚡"
            description="Live data processing and instant insights"
            services={[
              "Stream processing",
              "Real-time dashboards",
              "Event-driven analytics",
              "Alert systems",
              "Live monitoring",
              "Instant reporting"
            ]}
          />
        </div>

        {/* Real Analytics Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Analytics Solutions We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnalyticsSolution
              title="Executive Dashboard"
              description="C-level business intelligence dashboard with advanced insights"
              features={[
                "Real-time KPIs",
                "Interactive charts",
                "Mobile responsive",
                "Automated reports",
                "Drill-down capabilities",
                "Predictive insights"
              ]}
              price="$15k - $35k"
              timeline="6-10 weeks"
              useCase="C-suite, executives, management"
            />
            <AnalyticsSolution
              title="Customer Analytics Platform"
              description="Comprehensive customer behavior analysis and insights"
              features={[
                "Customer journey mapping",
                "Segmentation analysis",
                "Lifetime value prediction",
                "Churn analysis",
                "Personalization insights",
                "Sentiment analysis"
              ]}
              price="$20k - $50k"
              timeline="8-12 weeks"
              useCase="Marketing, sales, customer success"
            />
            <AnalyticsSolution
              title="Supply Chain Analytics"
              description="End-to-end supply chain optimization and monitoring"
              features={[
                "Demand forecasting",
                "Inventory optimization",
                "Supplier performance",
                "Risk assessment",
                "Cost analysis",
                "Sustainability tracking"
              ]}
              price="$25k - $60k"
              timeline="10-16 weeks"
              useCase="Manufacturing, retail, logistics"
            />
            <AnalyticsSolution
              title="Financial Analytics Suite"
              description="Advanced financial reporting and analysis platform"
              features={[
                "P&L analysis",
                "Cash flow forecasting",
                "Budget variance analysis",
                "Risk modeling",
                "Compliance reporting",
                "Fraud detection"
              ]}
              price="$18k - $45k"
              timeline="6-12 weeks"
              useCase="Finance, accounting, CFO"
            />
            <AnalyticsSolution
              title="Marketing Attribution Platform"
              description="Multi-channel marketing performance analysis and optimization"
              features={[
                "Attribution modeling",
                "ROI calculation",
                "Campaign optimization",
                "Cross-channel analysis",
                "Predictive insights",
                "A/B testing framework"
              ]}
              price="$22k - $55k"
              timeline="8-14 weeks"
              useCase="Marketing, agencies, CMO"
            />
            <AnalyticsSolution
              title="Operational Analytics"
              description="Real-time operational performance monitoring and optimization"
              features={[
                "Process optimization",
                "Performance metrics",
                "Anomaly detection",
                "Resource utilization",
                "Efficiency analysis",
                "Predictive maintenance"
              ]}
              price="$16k - $40k"
              timeline="6-10 weeks"
              useCase="Operations, manufacturing, services"
            />
            <AnalyticsSolution
              title="HR Analytics Platform"
              description="Human resources analytics and workforce optimization"
              features={[
                "Employee performance analysis",
                "Turnover prediction",
                "Recruitment analytics",
                "Skills gap analysis",
                "Engagement metrics",
                "Diversity & inclusion tracking"
              ]}
              price="$18k - $45k"
              timeline="6-12 weeks"
              useCase="HR, talent management, CHRO"
            />
            <AnalyticsSolution
              title="E-commerce Analytics Suite"
              description="Comprehensive e-commerce performance and customer insights"
              features={[
                "Sales performance analysis",
                "Product recommendation engine",
                "Cart abandonment analysis",
                "Customer lifetime value",
                "Inventory optimization",
                "Price elasticity analysis"
              ]}
              price="$20k - $50k"
              timeline="8-14 weeks"
              useCase="E-commerce, retail, product management"
            />
            <AnalyticsSolution
              title="Healthcare Analytics Platform"
              description="Healthcare data analytics with compliance and patient insights"
              features={[
                "Patient outcome analysis",
                "Clinical performance metrics",
                "Resource utilization",
                "Quality indicators",
                "Cost analysis",
                "HIPAA compliance"
              ]}
              price="$25k - $60k"
              timeline="10-16 weeks"
              useCase="Healthcare, hospitals, medical practices"
            />
            <AnalyticsSolution
              title="Real Estate Analytics"
              description="Property and market analysis for real estate professionals"
              features={[
                "Market trend analysis",
                "Property valuation models",
                "Investment ROI analysis",
                "Demographic insights",
                "Price prediction",
                "Portfolio optimization"
              ]}
              price="$15k - $40k"
              timeline="6-12 weeks"
              useCase="Real estate, property management, investors"
            />
            <AnalyticsSolution
              title="Energy & Utilities Analytics"
              description="Energy consumption and utility optimization analytics"
              features={[
                "Energy consumption analysis",
                "Demand forecasting",
                "Cost optimization",
                "Sustainability metrics",
                "Grid performance",
                "Renewable energy insights"
              ]}
              price="$22k - $55k"
              timeline="8-14 weeks"
              useCase="Energy, utilities, sustainability"
            />
            <AnalyticsSolution
              title="Social Media Analytics"
              description="Social media performance and sentiment analysis platform"
              features={[
                "Social media monitoring",
                "Sentiment analysis",
                "Influencer tracking",
                "Engagement metrics",
                "Brand reputation analysis",
                "Trend identification"
              ]}
              price="$12k - $30k"
              timeline="4-8 weeks"
              useCase="Marketing, social media, brand management"
            />
          </div>
        </div>

        {/* Analytics Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Analytics Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnalyticsTechnology
              category="Data Processing"
              technologies={["Apache Spark", "Kafka", "Flink", "Airflow", "dbt"]}
            />
            <AnalyticsTechnology
              category="Visualization"
              technologies={["Tableau", "Power BI", "Grafana", "D3.js", "Plotly"]}
            />
            <AnalyticsTechnology
              category="Machine Learning"
              technologies={["Python", "R", "TensorFlow", "Scikit-learn", "XGBoost"]}
            />
            <AnalyticsTechnology
              category="Databases"
              technologies={["PostgreSQL", "MongoDB", "ClickHouse", "BigQuery", "Snowflake"]}
            />
          </div>
        </div>

        {/* Data Sources & Integration */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Sources & Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DataSource
              title="CRM & Sales Data"
              description="Customer relationship management systems"
              sources={["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Custom APIs"]}
            />
            <DataSource
              title="Marketing Data"
              description="Digital marketing and advertising platforms"
              sources={["Google Analytics", "Facebook Ads", "LinkedIn", "Twitter", "Email platforms"]}
            />
            <DataSource
              title="Financial Data"
              description="Accounting and financial management systems"
              sources={["QuickBooks", "Xero", "Sage", "NetSuite", "Bank APIs"]}
            />
            <DataSource
              title="E-commerce Data"
              description="Online store and marketplace data"
              sources={["Shopify", "WooCommerce", "Amazon", "eBay", "Custom stores"]}
            />
            <DataSource
              title="IoT & Sensors"
              description="Internet of Things and sensor data"
              sources={["Temperature sensors", "GPS trackers", "Cameras", "Smart devices", "Industrial sensors"]}
            />
            <DataSource
              title="Social Media"
              description="Social media platforms and sentiment data"
              sources={["Twitter API", "Facebook API", "Instagram", "LinkedIn", "Reddit"]}
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Analytics Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnalyticsPricingPlan
              name="Data Discovery"
              price="$8k - $20k"
              duration="3-6 weeks"
              features={[
                "Data audit & assessment",
                "Data quality analysis",
                "Source identification",
                "Integration planning",
                "Pilot dashboard",
                "Recommendations"
              ]}
              popular={false}
            />
            <AnalyticsPricingPlan
              name="Analytics Platform"
              price="$25k - $75k"
              duration="8-16 weeks"
              features={[
                "Full analytics platform",
                "Data pipeline setup",
                "Interactive dashboards",
                "Automated reports",
                "User training",
                "Ongoing support"
              ]}
              popular={true}
            />
            <AnalyticsPricingPlan
              name="Advanced Analytics"
              price="$50k+"
              duration="12+ weeks"
              features={[
                "Machine learning models",
                "Predictive analytics",
                "Real-time processing",
                "Advanced visualizations",
                "Custom algorithms",
                "Continuous optimization"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              metric="40%"
              description="Average efficiency improvement"
              icon="📈"
            />
            <MetricCard
              metric="25%"
              description="Cost reduction achieved"
              icon="💰"
            />
            <MetricCard
              metric="60%"
              description="Faster decision making"
              icon="⚡"
            />
            <MetricCard
              metric="90%"
              description="Data accuracy improvement"
              icon="🎯"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your data into powerful insights that drive business growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsServiceCategory({ title, icon, description, services }: {
  title: string;
  icon: string;
  description: string;
  services: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-indigo-500 mr-2">•</span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AnalyticsSolution({ title, description, features, price, timeline, useCase }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
      </div>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-indigo-600">{price}</div>
          <div className="text-sm text-gray-500">{timeline}</div>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}

function AnalyticsTechnology({ category, technologies }: { category: string; technologies: string[] }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function DataSource({ title, description, sources }: {
  title: string;
  description: string;
  sources: string[];
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {sources.map((source, index) => (
          <span key={index} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
            {source}
          </span>
        ))}
      </div>
    </div>
  );
}

function AnalyticsPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-indigo-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-indigo-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
          popular 
            ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function MetricCard({ metric, description, icon }: { metric: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-indigo-600 mb-2">{metric}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}