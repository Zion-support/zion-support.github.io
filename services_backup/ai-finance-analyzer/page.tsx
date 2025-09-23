export const metadata = {
  title: "AI Finance Analyzer | Zion Tech Group",
  description:
    "Advanced AI-powered financial analysis platform that provides real-time insights, risk assessment, and automated investment recommendations."};

export default function AIFinanceAnalyzerPage() {
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>AI Finance Analyzer</h1>
      <p style={{ marginTop: 8, color: "#374151" }}>
        Revolutionize financial decision-making with AI that analyzes markets,
        predicts trends, and optimizes investment portfolios in real-time.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <Item
          title="Real-Time Market Analysis"
          details={[
            "AI-powered market sentiment analysis across 100+ data sources",
            "Real-time stock price prediction with 85% accuracy",
            "Cryptocurrency trend analysis and trading signals",
            "Economic indicator monitoring and impact assessment"]}
        />
        <Item
          title="Portfolio Optimization"
          details={[
            "AI-driven portfolio rebalancing recommendations",
            "Risk assessment and diversification analysis",
            "Tax-loss harvesting automation",
            "Performance tracking and benchmarking"]}
        />
        <Item
          title="Financial Planning & Forecasting"
          details={[
            "Personalized financial goal planning",
            "Retirement planning with Monte Carlo simulations",
            "Cash flow forecasting and budgeting",
            "Insurance needs analysis and recommendations"]}
        />
        <Item
          title="Advanced AI Features"
          details={[
            "Natural language financial queries and insights",
            "Automated financial report generation",
            "Fraud detection and security monitoring",
            "Regulatory compliance checking and alerts"]}
        />
      </div>

      <Pricing />

      <div
        style={{
          marginTop: 24,
          padding: 16,
          backgroundColor: "#fef3c7",
          borderRadius: 12,
          border: "1px solid #f59e0b"}}
      >
        <h3 style={{ fontWeight: 700, color: "#92400e", marginBottom: 8 }}>
          Investment Performance
        </h3>
        <ul style={{ color: "#92400e", paddingLeft: 18 }}>
          <li>
            • <strong>23% average</strong> annual return on AI-optimized
            portfolios
          </li>
          <li>
            • <strong>40% reduction</strong> in portfolio volatility
          </li>
          <li>
            • <strong>85% accuracy</strong> in market trend predictions
          </li>
          <li>
            • <strong>60% time savings</strong> on financial analysis
          </li>
        </ul>
      </div>
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <h3 style={{ fontWeight: 700 }}>{title}</h3>
      <ul style={{ paddingLeft: 18, color: "#4b5563" }}>
        {details.map((d) => (
          <li key={d} style={{ listStyle: "disc" }}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div
      style={{
        marginTop: 20,
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"}}
    >
      <Plan
        name="Personal Finance"
        price="$299/month"
        features={[
          "Up to $1M portfolio analysis",
          "Basic market analysis",
          "Portfolio optimization",
          "Financial goal tracking",
          "Email support"]}
      />
      <Plan
        name="Professional Trader"
        price="$799/month"
        features={[
          "Up to $10M portfolio analysis",
          "Advanced market predictions",
          "Real-time trading signals",
          "Risk management tools",
          "Priority support",
          "API access"]}
      />
      <Plan
        name="Institutional"
        price="$2,500/month"
        features={[
          "Unlimited portfolio size",
          "Custom AI model training",
          "White-label solution",
          "Dedicated support",
          "Custom integrations",
          "SLA guarantee",
          "Compliance reporting"]}
      />
    </div>
  );
}

function Plan({
  name,
  price,
  features}: {
  name: string;
  price: string;
  features: string[];
}) {
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 }}>
      <h4 style={{ fontWeight: 700 }}>{name}</h4>
      <div
        style={{
          color: "#111827",
          fontWeight: 800,
          marginTop: 4,
          fontSize: 18}}
      >
        {price}
      </div>
      <ul style={{ paddingLeft: 18, color: "#4b5563", marginTop: 8 }}>
        {features.map((f) => (
          <li key={f} style={{ listStyle: "disc" }}>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        style={{
          display: "inline-block",
          marginTop: 12,
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          textDecoration: "none",
          borderRadius: 6}}
      >
        Call +1 302 464 0950
      </a>
    </div>
  );
}
