export const metadata = { 
  title: 'Advanced Data Analytics & BI | Zion Tech Group',
  description: 'Transform your data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.'
};

export default function DataAnalyticsPage() {
  return (
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
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, backgroundColor: '#ffffff'}}>
      <h3 style={{fontWeight: 700, color: '#1f2937', marginBottom: 8}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563', margin: 0}}>
        {details.map(d => (<li key={d} style={{listStyle: 'disc', marginBottom: 4}}>{d}</li>))}
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