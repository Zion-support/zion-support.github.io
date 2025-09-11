export const metadata = { 
  title: 'AI Copilots & Assistants | Zion Tech Group',
  description: 'Deploy intelligent AI copilots that enhance productivity, automate complex tasks, and provide 24/7 intelligent assistance to your team and customers.'
};

export default function AICopilotsPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>AI Copilots & Intelligent Assistants</h1>
      <p style={{marginTop: 8, color: '#374151'}}>
        Deploy cutting-edge AI copilots that understand your business context, automate complex workflows, 
        and provide intelligent assistance to boost productivity by 400% while reducing operational costs.
      </p>
      
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item 
          title="Code Development Copilots" 
          details={[
            "GitHub Copilot alternative with custom training", 
            "Code review and optimization suggestions", 
            "Automated testing and debugging", 
            "Documentation generation",
            "Multi-language support (Python, JS, Go, Rust)"
          ]} 
        />
        <Item 
          title="Customer Support AI" 
          details={[
            "Natural language understanding", 
            "Multi-channel support (chat, email, phone)", 
            "Escalation to human agents", 
            "Sentiment analysis and routing",
            "Knowledge base integration"
          ]} 
        />
        <Item 
          title="Sales & Marketing AI" 
          details={[
            "Lead qualification and scoring", 
            "Personalized content generation", 
            "Email campaign optimization", 
            "Social media management",
            "ROI prediction and analysis"
          ]} 
        />
        <Item 
          title="Data Analysis Copilots" 
          details={[
            "Automated report generation", 
            "Predictive analytics and forecasting", 
            "Data visualization creation", 
            "Anomaly detection and alerts",
            "Natural language data queries"
          ]} 
        />
        <Item 
          title="HR & Operations AI" 
          details={[
            "Resume screening and candidate matching", 
            "Employee onboarding automation", 
            "Performance review assistance", 
            "Compliance monitoring",
            "Workflow optimization suggestions"
          ]} 
        />
        <Item 
          title="Financial AI Assistants" 
          details={[
            "Automated financial reporting", 
            "Expense categorization and analysis", 
            "Budget forecasting and planning", 
            "Fraud detection and prevention",
            "Tax optimization recommendations"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, padding: 20, backgroundColor: '#f0f9ff', borderRadius: 12, border: '1px solid #bae6fd'}}>
        <h3 style={{fontSize: 18, fontWeight: 700, marginBottom: 12, color: '#0c4a6e'}}>Why Our AI Copilots Stand Out</h3>
        <ul style={{color: '#075985', lineHeight: 1.6}}>
          <li>• <strong>Custom Training:</strong> Trained on your specific business data and processes</li>
          <li>• <strong>Enterprise Security:</strong> On-premise deployment options with full data control</li>
          <li>• <strong>Continuous Learning:</strong> AI improves performance over time with usage</li>
          <li>• <strong>Multi-Modal:</strong> Text, voice, image, and video processing capabilities</li>
          <li>• <strong>Integration Ready:</strong> Seamlessly connects with 500+ business tools</li>
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
      <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 20, color: '#1f2937'}}>AI Copilot Solutions Pricing</h2>
      <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
        <Plan 
          name="AI Assistant MVP" 
          price="$5,000–$15,000" 
          features={[
            "3-6 weeks development", 
            "Single domain AI assistant", 
            "Basic natural language processing", 
            "API integration with 5 tools",
            "Email support & documentation"
          ]} 
        />
        <Plan 
          name="Intelligent Copilot" 
          price="$15,000–$45,000" 
          features={[
            "6-12 weeks development", 
            "Multi-domain AI capabilities", 
            "Advanced NLP and reasoning", 
            "Integration with 20+ business tools",
            "Custom training on your data",
            "Priority support & training"
          ]} 
        />
        <Plan 
          name="Enterprise AI Suite" 
          price="$45,000+" 
          features={[
            "Custom AI platform development", 
            "Multi-modal AI capabilities", 
            "Advanced machine learning models", 
            "Unlimited integrations",
            "Dedicated AI specialist",
            "SLA guarantees & monitoring"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, textAlign: 'center', padding: 20, backgroundColor: '#fef3c7', borderRadius: 12, border: '1px solid #fbbf24'}}>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#92400e'}}>Limited Time: Free AI Readiness Assessment</h3>
        <p style={{color: '#a16207', marginBottom: 16}}>
          Get a comprehensive analysis of how AI can transform your business operations. 
          Includes ROI projections and implementation roadmap.
        </p>
        <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a 
            href="tel:+13024640950" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#f59e0b', 
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
              color: '#f59e0b', 
              textDecoration: 'none', 
              borderRadius: 8,
              border: '2px solid #f59e0b',
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Copilot Services Inquiry" 
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