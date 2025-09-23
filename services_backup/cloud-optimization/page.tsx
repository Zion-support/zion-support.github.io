export const metadata = {
  title: "Cloud Optimization | Zion Tech Group",
  description:
    "Maximize cloud performance and minimize costs with our AI-powered cloud optimization services for AWS, Azure, and Google Cloud."};

export default function CloudOptimizationPage() {
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>
        Cloud Optimization Services
      </h1>
      <p style={{ marginTop: 8, color: "#374151" }}>
        Maximize cloud performance, minimize costs, and ensure scalability with
        our AI-powered cloud optimization solutions.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <Item
          title="Cost Optimization"
          details={[
            "AI-powered cost analysis and optimization recommendations",
            "Right-sizing instances and auto-scaling configuration",
            "Reserved instance planning and spot instance utilization",
            "Cost anomaly detection and budget alerts"]}
        />
        <Item
          title="Performance Optimization"
          details={[
            "Application performance monitoring and optimization",
            "Database tuning and query optimization",
            "CDN configuration and content delivery optimization",
            "Load balancing and traffic management"]}
        />
        <Item
          title="Security & Compliance"
          details={[
            "Cloud security posture assessment and hardening",
            "Identity and access management (IAM) optimization",
            "Data encryption and key management",
            "Compliance auditing (SOC2, HIPAA, PCI-DSS)"]}
        />
        <Item
          title="Migration & Modernization"
          details={[
            "Legacy application migration to cloud",
            "Containerization and microservices architecture",
            "Serverless architecture implementation",
            "Multi-cloud and hybrid cloud strategies"]}
        />
      </div>

      <Pricing />

      <div
        style={{
          marginTop: 24,
          padding: 16,
          backgroundColor: "#f0fdf4",
          borderRadius: 12,
          border: "1px solid #22c55e"}}
      >
        <h3 style={{ fontWeight: 700, color: "#14532d", marginBottom: 8 }}>
          Optimization Results
        </h3>
        <ul style={{ color: "#14532d", paddingLeft: 18 }}>
          <li>
            • <strong>40% average</strong> cost reduction
          </li>
          <li>
            • <strong>60% improvement</strong> in application performance
          </li>
          <li>
            • <strong>99.9% uptime</strong> SLA guarantee
          </li>
          <li>
            • <strong>24/7 monitoring</strong> and support
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
        name="Cloud Audit"
        price="$2,500/month"
        features={[
          "Monthly cost analysis",
          "Performance assessment",
          "Security review",
          "Optimization recommendations",
          "Email support"]}
      />
      <Plan
        name="Cloud Management"
        price="$5,500/month"
        features={[
          "Continuous optimization",
          "24/7 monitoring",
          "Automated scaling",
          "Security management",
          "Priority support",
          "Monthly reports"]}
      />
      <Plan
        name="Cloud Transformation"
        price="$15,000/month"
        features={[
          "Full cloud migration",
          "Architecture redesign",
          "Custom solutions",
          "Dedicated team",
          "White-label options",
          "SLA guarantee"]}
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
        href="mailto:kleber@ziontechgroup.com"
        style={{
          display: "inline-block",
          marginTop: 12,
          padding: "8px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
          textDecoration: "none",
          borderRadius: 6}}
      >
        Email Us
      </a>
    </div>
  );
}
