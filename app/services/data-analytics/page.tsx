export const metadata = { 
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, machine learning, and data engineering.'
};

export default function DataAnalyticsPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Data Analytics Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your data into actionable insights with our comprehensive analytics solutions. 
          From data engineering to advanced visualization, we help you make data-driven decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Data Engineering" 
          details={[
            "ETL/ELT pipelines",
            "Data warehousing",
            "Real-time processing",
            "Data quality management",
            "Cloud data platforms",
            "API development"
          ]} 
        />
        <Item 
          title="Business Intelligence" 
          details={[
            "Dashboard development",
            "KPI tracking",
            "Report automation",
            "Data visualization",
            "Self-service analytics",
            "Mobile reporting"
          ]} 
        />
        <Item 
          title="Advanced Analytics" 
          details={[
            "Predictive modeling",
            "Statistical analysis",
            "Machine learning",
            "A/B testing",
            "Customer segmentation",
            "Forecasting"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Data Analytics Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Business Intelligence Dashboard"
            description="Interactive dashboards with real-time KPIs and business metrics"
            price="Starting at $15k"
            features={["Custom dashboards", "Real-time data", "Mobile responsive", "Export capabilities"]
          />
          <ServiceCard
            title="Data Pipeline Development"
            description="Automated data processing and ETL pipelines for your business"
            price="Starting at $20k"
            features={["ETL/ELT pipelines", "Data validation", "Error handling", "Monitoring"]
          />
          <ServiceCard
            title="Predictive Analytics"
            description="Machine learning models for forecasting and prediction"
            price="Starting at $25k"
            features={["Model development", "Data preprocessing", "Model training", "Deployment"]
          />
          <ServiceCard
            title="Customer Analytics"
            description="Comprehensive customer behavior analysis and segmentation"
            price="Starting at $18k"
            features={["Customer segmentation", "Behavior analysis", "Churn prediction", "Lifetime value"]
          />
          <ServiceCard
            title="Data Visualization"
            description="Advanced data visualization and interactive reports"
            price="Starting at $12k"
            features={["Interactive charts", "Custom visualizations", "Storytelling", "Export options"]
          />
          <ServiceCard
            title="Data Warehouse Setup"
            description="Complete data warehouse design and implementation"
            price="Starting at $30k"
            features={["Architecture design", "Data modeling", "ETL processes", "Security setup"]
          />
        </div>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
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

function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Data Analytics Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Analytics Discovery" 
          price="$8k–$15k" 
          duration="2–4 weeks"
          features={[
            "Data assessment",
            "Requirements analysis",
            "Technology selection",
            "Architecture design",
            "Proof of concept",
            "Implementation roadmap"
          ]} 
        />
        <Plan 
          name="Analytics Implementation" 
          price="$20k–$50k" 
          duration="6–12 weeks"
          features={[
            "Dashboard development",
            "Data pipeline setup",
            "Model development",
            "Testing & validation",
            "User training",
            "Documentation"
          ]} 
        />
        <Plan 
          name="Analytics Platform" 
          price="$50k+" 
          duration="12+ weeks"
          features={[
            "Full platform development",
            "Advanced analytics",
            "Machine learning models",
            "Real-time processing",
            "Scalable architecture",
            "Ongoing support"
          ]} 
        />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Ready to unlock insights from your data? Let's discuss your analytics needs.
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
    </div>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-sm text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}