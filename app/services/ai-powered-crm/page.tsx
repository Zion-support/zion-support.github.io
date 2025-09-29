export const metadata = {
  title: 'AI-Powered CRM | Zion Tech Group',
  description: 'Revolutionary AI-powered CRM system that automates sales, predicts customer behavior, and maximizes revenue growth.',
};

export default function AIPoweredCRMPage() {
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>AI-Powered CRM System</h1>
      <p style={{ marginTop: 8, color: '#374151' }}>Transform your customer relationships with intelligent automation, predictive analytics, and AI-driven insights that boost sales by 300%.</p>

      <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        <Item
          title="Intelligent Lead Scoring"
          details={[
            'AI-powered lead qualification with 95% accuracy',
            'Predictive customer lifetime value analysis',
            'Automated lead nurturing sequences',
            'Real-time conversion probability scoring',
          ]}
        />
        <Item
          title="Smart Sales Automation"
          details={[
            'Automated follow-up sequences based on behavior',
            'AI-generated personalized email campaigns',
            'Intelligent meeting scheduling and reminders',
            'Dynamic pricing optimization',
          ]}
        />
        <Item
          title="Advanced Analytics & Insights"
          details={[
            'Predictive sales forecasting with 90% accuracy',
            'Customer churn prediction and prevention',
            'Revenue optimization recommendations',
            'Real-time performance dashboards',
          ]}
        />
        <Item
          title="AI Customer Service"
          details={[
            'Intelligent chatbot with natural language processing',
            'Automated ticket routing and prioritization',
            'Sentiment analysis and customer satisfaction tracking',
            'Proactive issue detection and resolution',
          ]}
        />
      </div>

      <Pricing />

      <div style={{ marginTop: 24, padding: 16, backgroundColor: '#f0f9ff', borderRadius: 12, border: '1px solid #0ea5e9' }}>
        <h3 style={{ fontWeight: 700, color: '#0c4a6e', marginBottom: 8 }}>Why Choose Our AI CRM?</h3>
        <ul style={{ color: '#0c4a6e', paddingLeft: 18 }}>
          <li>• <strong>300% increase</strong> in sales conversion rates</li>
          <li>• <strong>50% reduction</strong> in customer acquisition costs</li>
          <li>• <strong>90% accuracy</strong> in sales forecasting</li>
          <li>• <strong>24/7 AI assistance</strong> for your sales team</li>
        </ul>
      </div>
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
      <h3 style={{ fontWeight: 700 }}>{title}</h3>
      <ul style={{ paddingLeft: 18, color: '#4b5563' }}>{details.map(d => (<li key={d} style={{ listStyle: 'disc' }}>{d}</li>))}</ul>
    </div>
  );
}

function Pricing() {
  return (
    <div style={{ marginTop: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      <Plan
        name="Starter CRM"
        price="$2,500/month"
        features={[
          'Up to 1,000 contacts',
          'Basic AI lead scoring',
          'Email automation',
          'Standard analytics',
          'Email support',
        ]}
      />
      <Plan
        name="Professional CRM"
        price="$5,000/month"
        features={[
          'Up to 10,000 contacts',
          'Advanced AI predictions',
          'Custom automation workflows',
          'Advanced analytics & reporting',
          'Priority support',
          'API integrations',
        ]}
      />
      <Plan
        name="Enterprise CRM"
        price="$12,000/month"
        features={[
          'Unlimited contacts',
          'Full AI suite',
          'Custom AI model training',
          'White-label solution',
          'Dedicated support',
          'Custom integrations',
          'SLA guarantee',
        ]}
      />
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
      <h4 style={{ fontWeight: 700 }}>{name}</h4>
      <div style={{ color: '#111827', fontWeight: 800, marginTop: 4, fontSize: 18 }}>{price}</div>
      <ul style={{ paddingLeft: 18, color: '#4b5563', marginTop: 8 }}>{features.map(f => (<li key={f} style={{ listStyle: 'disc' }}>{f}</li>))}</ul>
      <a href="tel:+13024640950" style={{ display: 'inline-block', marginTop: 12, padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: 6 }}>Call +1 302 464 0950</a>
    </div>
  );
}
