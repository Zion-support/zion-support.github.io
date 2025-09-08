export const metadata = { 
  title: 'Data Analytics Solutions | Zion Tech Group',
  description: 'Advanced data analytics solutions including business intelligence, data visualization, predictive analytics, and data engineering. Turn data into actionable insights.'
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
  title: 'Data Analytics Services | Zion Tech Group',
  description: 'Comprehensive data analytics services including business intelligence, data visualization, predictive analytics, and data science solutions for data-driven decision making.',
  keywords: 'data analytics, business intelligence, data visualization, predictive analytics, data science, machine learning, data consulting'
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
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
      
      <div style={{marginTop: 24, padding: 20, backgroundColor: '#f0fdf4', borderRadius: 12, border: '1px solid #bbf7d0'}}>
        <h3 style={{fontSize: 18, fontWeight: 700, marginBottom: 12, color: '#14532d'}}>Proven Results for Our Clients</h3>
        <ul style={{color: '#166534', lineHeight: 1.6}}>
          <li>• <strong>25% Average Revenue Increase:</strong> Through data-driven decision making</li>
          <li>• <strong>60% Faster Reporting:</strong> Automated dashboards vs manual processes</li>
          <li>• <strong>40% Cost Reduction:</strong> Optimized operations through predictive analytics</li>
          <li>• <strong>99.9% Data Accuracy:</strong> Advanced validation and cleansing processes</li>
          <li>• <strong>Real-Time Insights:</strong> Make decisions based on current data, not yesterday's reports</li>
        </ul>
      </div>
      
      <Pricing />
    </section>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{border: '2px solid #e5e7eb', borderRadius: 12, padding: 20, backgroundColor: '#ffffff', position: 'relative'}}>
      <h4 style={{fontWeight: 700, fontSize: 18, color: '#1f2937', marginBottom: 8}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, fontSize: 24, marginBottom: 16}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginBottom: 20}}>
        {features.map(f => (<li key={f} style={{listStyle: 'disc', marginBottom: 6}}>{f}</li>))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div style={{marginTop: 32}}>
      <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 20, color: '#1f2937'}}>Analytics Solutions Pricing</h2>
      <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
        <Plan 
          name="Analytics Starter" 
          price="$3,000–$10,000" 
          features={[
            "2-4 weeks implementation", 
            "Basic dashboard setup", 
            "Up to 5 data sources", 
            "Standard visualizations",
            "Email support"
          ]} 
        />
        <Plan 
          name="Business Intelligence" 
          price="$10,000–$30,000" 
          features={[
            "4-8 weeks implementation", 
            "Advanced analytics platform", 
            "Unlimited data sources", 
            "Predictive modeling",
            "Custom report automation",
            "Priority support & training"
          ]} 
        />
        <Plan 
          name="Enterprise Analytics" 
          price="$30,000+" 
          features={[
            "Custom analytics platform", 
            "AI-powered insights", 
            "Real-time data processing", 
            "Advanced security & compliance",
            "Dedicated analytics specialist",
            "SLA guarantees & monitoring"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, textAlign: 'center', padding: 20, backgroundColor: '#fef2f2', borderRadius: 12, border: '1px solid #fecaca'}}>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#991b1b'}}>Free Data Health Check</h3>
        <p style={{color: '#b91c1c', marginBottom: 16}}>
          Get a comprehensive analysis of your current data infrastructure and discover 
          opportunities for improvement. Includes ROI projections and implementation roadmap.
        </p>
        <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a 
            href="tel:+13024640950" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#dc2626', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: 8,
              fontWeight: 600
            }}
          >
            Schedule Free Assessment
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: 'transparent', 
              color: '#dc2626', 
              textDecoration: 'none', 
              borderRadius: 8,
              border: '2px solid #dc2626',
              fontWeight: 600
            }}
          >
            Email Us
          </a>
        </div>
      </div>
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=Data Analytics Services Inquiry" 
        style={{
          display: 'inline-block', 
          width: '100%',
          textAlign: 'center',
          padding: '12px 16px', 
          backgroundColor: '#3b82f6', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: 8,
          fontWeight: 600
        }}
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
      </div>
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
}
