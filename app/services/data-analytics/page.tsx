export const metadata = { 
export default function DataAnalyticsPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>Advanced Data Analytics & Business Intelligence</h1>
      <p style={{marginTop: 8, color: '#374151'}}>
        Unlock the power of your data with cutting-edge analytics, real-time dashboards, and AI-driven insights 
        that drive strategic decision-making and boost revenue by up to 25%.
      </p>
      
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item 
          title="Real-Time Dashboards" 
          details={[
            "Custom KPI dashboards", 
            "Real-time data visualization", 
            "Interactive charts and graphs", 
            "Mobile-responsive design",
            "Automated alerts and notifications"
          ]} 
        />
        <Item 
          title="Predictive Analytics" 
          details={[
            "Machine learning forecasting", 
            "Customer behavior prediction", 
            "Sales trend analysis", 
            "Risk assessment models",
            "Demand planning optimization"
          ]} 
        />
        <Item 
          title="Data Integration & ETL" 
          details={[
            "Multi-source data consolidation", 
            "Real-time data pipelines", 
            "Data quality validation", 
            "Automated data cleansing",
            "Cloud and on-premise solutions"
          ]} 
        />
        <Item 
          title="Advanced Reporting" 
          details={[
            "Automated report generation", 
            "Custom report templates", 
            "Scheduled email delivery", 
            "PDF and Excel exports",
            "White-label reporting solutions"
          ]} 
        />
        <Item 
          title="AI-Powered Insights" 
          details={[
            "Natural language queries", 
            "Automated anomaly detection", 
            "Pattern recognition", 
            "Intelligent recommendations",
            "Conversational analytics"
          ]} 
        />
        <Item 
          title="Data Governance" 
          details={[
            "Data security and compliance", 
            "Access control and permissions", 
            "Audit trails and logging", 
            "GDPR and CCPA compliance",
            "Data lineage tracking"
          ]} 
        />
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
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
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
      <ContactSection />    </div>
  );
}

<<<<<<< HEAD
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
=======
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
            "SLA guarantees & monitoring"          ]} 
        />
      </div>
      
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
function ContactSection() {
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
      </ul>
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
  );}