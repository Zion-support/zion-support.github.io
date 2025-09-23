export const metadata = {
  title: "AI Healthcare Assistant | Zion Tech Group",
  description:
    "Revolutionary AI-powered healthcare platform that provides medical insights, patient monitoring, and automated diagnosis support for healthcare providers."};

export default function AIHealthcareAssistantPage() {
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>AI Healthcare Assistant</h1>
      <p style={{ marginTop: 8, color: "#374151" }}>
        Transform healthcare delivery with AI that assists in diagnosis,
        monitors patients, and optimizes treatment plans for better outcomes.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <Item
          title="AI-Powered Diagnosis Support"
          details={[
            "Medical image analysis with 98% accuracy (X-rays, MRIs, CT scans)",
            "Symptom analysis and differential diagnosis suggestions",
            "Drug interaction checking and allergy alerts",
            "Evidence-based treatment recommendations"]}
        />
        <Item
          title="Patient Monitoring & Care"
          details={[
            "Real-time vital signs monitoring and alerting",
            "Chronic disease management and tracking",
            "Medication adherence monitoring and reminders",
            "Telehealth integration and remote consultations"]}
        />
        <Item
          title="Clinical Decision Support"
          details={[
            "Clinical guideline recommendations based on patient data",
            "Risk stratification and outcome predictions",
            "Treatment protocol optimization",
            "Quality metrics tracking and reporting"]}
        />
        <Item
          title="Healthcare Analytics"
          details={[
            "Population health analytics and insights",
            "Resource utilization optimization",
            "Cost reduction recommendations",
            "Regulatory compliance monitoring"]}
        />
      </div>

      <Pricing />

      <div
        style={{
          marginTop: 24,
          padding: 16,
          backgroundColor: "#f0f9ff",
          borderRadius: 12,
          border: "1px solid #0ea5e9"}}
      >
        <h3 style={{ fontWeight: 700, color: "#0c4a6e", marginBottom: 8 }}>
          Healthcare Impact
        </h3>
        <ul style={{ color: "#0c4a6e", paddingLeft: 18 }}>
          <li>
            • <strong>35% reduction</strong> in diagnostic errors
          </li>
          <li>
            • <strong>50% faster</strong> diagnosis times
          </li>
          <li>
            • <strong>25% improvement</strong> in patient outcomes
          </li>
          <li>
            • <strong>40% cost savings</strong> in healthcare delivery
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
        name="Clinic Edition"
        price="$3,500/month"
        features={[
          "Up to 50 patients/month",
          "Basic AI diagnosis support",
          "Patient monitoring",
          "Standard reporting",
          "Email support"]}
      />
      <Plan
        name="Hospital Edition"
        price="$8,500/month"
        features={[
          "Up to 500 patients/month",
          "Advanced AI diagnostics",
          "Real-time monitoring",
          "Clinical decision support",
          "Priority support",
          "API integrations"]}
      />
      <Plan
        name="Health System"
        price="$25,000/month"
        features={[
          "Unlimited patients",
          "Custom AI model training",
          "White-label solution",
          "Dedicated support",
          "Custom integrations",
          "SLA guarantee",
          "HIPAA compliance"]}
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
