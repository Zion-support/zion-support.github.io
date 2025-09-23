export const metadata = {
  title: "AI Content Optimizer | Zion Tech Group",
  description:
    "Revolutionary AI-powered content optimization platform that increases engagement by 400% and boosts SEO rankings automatically."};

export default function AIContentOptimizerPage() {
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>AI Content Optimizer</h1>
      <p style={{ marginTop: 8, color: "#374151" }}>
        Transform your content marketing with AI that writes, optimizes, and
        distributes content that converts at scale.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <Item
          title="AI Content Generation"
          details={[
            "Generate high-quality blog posts, articles, and social media content",
            "Multi-language content creation in 50+ languages",
            "Brand voice consistency across all content",
            "SEO-optimized content with keyword integration"]}
        />
        <Item
          title="Content Performance Analytics"
          details={[
            "Real-time engagement tracking and analysis",
            "AI-powered content performance predictions",
            "A/B testing automation for headlines and CTAs",
            "ROI tracking for content marketing campaigns"]}
        />
        <Item
          title="SEO & Distribution Automation"
          details={[
            "Automatic SEO optimization and meta tag generation",
            "Social media scheduling and posting automation",
            "Email newsletter content generation",
            "Content repurposing across multiple platforms"]}
        />
        <Item
          title="Advanced AI Features"
          details={[
            "Sentiment analysis and tone optimization",
            "Competitor content analysis and gap identification",
            "Trending topic detection and content suggestions",
            "Plagiarism detection and originality scoring"]}
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
          Proven Results
        </h3>
        <ul style={{ color: "#14532d", paddingLeft: 18 }}>
          <li>
            • <strong>400% increase</strong> in content engagement rates
          </li>
          <li>
            • <strong>250% boost</strong> in organic search traffic
          </li>
          <li>
            • <strong>80% reduction</strong> in content creation time
          </li>
          <li>
            • <strong>95% accuracy</strong> in SEO optimization
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
        name="Content Creator"
        price="$1,200/month"
        features={[
          "Up to 50 articles/month",
          "Basic SEO optimization",
          "Social media content",
          "Email templates",
          "Standard analytics"]}
      />
      <Plan
        name="Content Pro"
        price="$2,800/month"
        features={[
          "Up to 200 articles/month",
          "Advanced SEO & keyword research",
          "Multi-language support",
          "A/B testing automation",
          "Advanced analytics",
          "Priority support"]}
      />
      <Plan
        name="Content Enterprise"
        price="$6,500/month"
        features={[
          "Unlimited content generation",
          "Custom AI model training",
          "White-label solution",
          "API access",
          "Dedicated account manager",
          "Custom integrations",
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
