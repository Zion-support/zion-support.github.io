export const metadata = { 
  title: 'Business Automation Tools | Zion Tech Group',
  description: 'Streamline your business operations with intelligent automation tools and workflows that save time and reduce costs.'
};

export default function AutomationToolsPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>Business Automation Tools</h1>
      <p style={{marginTop: 8, color: '#374151'}}>
        Transform your business operations with intelligent automation tools that eliminate manual tasks, 
        reduce errors, and boost productivity by up to 300%.
      </p>
      
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item 
          title="Workflow Automation" 
          details={[
            "Zapier/Make.com integrations", 
            "Custom API connectors", 
            "Multi-step business processes", 
            "Error handling & retry logic",
            "Real-time monitoring dashboards"
          ]} 
        />
        <Item 
          title="Document Processing" 
          details={[
            "AI-powered data extraction", 
            "Invoice & receipt processing", 
            "Contract analysis & review", 
            "Automated compliance checking",
            "OCR with 99.5% accuracy"
          ]} 
        />
        <Item 
          title="Customer Service Bots" 
          details={[
            "24/7 intelligent chatbots", 
            "Multi-language support", 
            "CRM integration", 
            "Escalation to human agents",
            "Sentiment analysis & routing"
          ]} 
        />
        <Item 
          title="Marketing Automation" 
          details={[
            "Email campaign automation", 
            "Social media scheduling", 
            "Lead scoring & nurturing", 
            "A/B testing frameworks",
            "ROI tracking & analytics"
          ]} 
        />
        <Item 
          title="Data Integration" 
          details={[
            "Real-time data synchronization", 
            "ETL pipeline automation", 
            "Database migration tools", 
            "API management & monitoring",
            "Data quality validation"
          ]} 
        />
        <Item 
          title="Financial Automation" 
          details={[
            "Automated bookkeeping", 
            "Expense categorization", 
            "Invoice generation & sending", 
            "Payment processing workflows",
            "Financial reporting automation"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, padding: 20, backgroundColor: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0'}}>
        <h3 style={{fontSize: 18, fontWeight: 700, marginBottom: 12, color: '#1e293b'}}>Why Choose Our Automation Solutions?</h3>
        <ul style={{color: '#475569', lineHeight: 1.6}}>
          <li>• <strong>ROI Guarantee:</strong> Most clients see 200-400% ROI within 6 months</li>
          <li>• <strong>No-Code/Low-Code:</strong> Easy to modify and maintain by your team</li>
          <li>• <strong>Enterprise Security:</strong> SOC 2 compliant with end-to-end encryption</li>
          <li>• <strong>24/7 Support:</strong> Dedicated automation specialists available around the clock</li>
          <li>• <strong>Scalable Architecture:</strong> Grows with your business from startup to enterprise</li>
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
      <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 20, color: '#1f2937'}}>Automation Solutions Pricing</h2>
      <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
        <Plan 
          name="Starter Automation" 
          price="$2,500–$8,000" 
          features={[
            "2-4 weeks implementation", 
            "Up to 5 workflow automations", 
            "Basic integrations (Zapier, etc.)", 
            "Email support",
            "30-day money-back guarantee"
          ]} 
        />
        <Plan 
          name="Business Automation" 
          price="$8,000–$25,000" 
          features={[
            "4-8 weeks implementation", 
            "Unlimited workflow automations", 
            "Custom API integrations", 
            "Advanced analytics dashboard",
            "Priority support & training",
            "3-month optimization period"
          ]} 
        />
        <Plan 
          name="Enterprise Automation" 
          price="$25,000+" 
          features={[
            "Custom automation platform", 
            "AI-powered decision making", 
            "Multi-tenant architecture", 
            "Dedicated automation specialist",
            "SLA guarantees (99.9% uptime)",
            "Ongoing optimization & scaling"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, textAlign: 'center', padding: 20, backgroundColor: '#eff6ff', borderRadius: 12, border: '1px solid #bfdbfe'}}>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#1e40af'}}>Ready to Automate Your Business?</h3>
        <p style={{color: '#3730a3', marginBottom: 16}}>
          Get a free automation audit and discover how much time and money you can save.
        </p>
        <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a 
            href="tel:+13024640950" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#3b82f6', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: 8,
              fontWeight: 600
            }}
          >
            Call +1 302 464 0950
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: 'transparent', 
              color: '#3b82f6', 
              textDecoration: 'none', 
              borderRadius: 8,
              border: '2px solid #3b82f6',
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
        href="mailto:kleber@ziontechgroup.com?subject=Automation Services Inquiry" 
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