export const metadata = { 
title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
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
      >
        Get Started
      </a>
    </div>
  );
}