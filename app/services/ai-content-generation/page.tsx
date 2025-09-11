export const metadata = { 
  title: 'AI Content Generation & Marketing | Zion Tech Group',
  description: 'Scale your content marketing with AI-powered content generation, SEO optimization, and automated marketing campaigns that drive engagement and conversions.'
};

export default function AIContentGenerationPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>AI Content Generation & Marketing Automation</h1>
      <p style={{marginTop: 8, color: '#374151'}}>
        Scale your content marketing 10x with AI-powered content generation, SEO optimization, 
        and automated campaigns that drive 300% more engagement and 150% higher conversion rates.
      </p>
      
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item 
          title="AI Content Creation" 
          details={[
            "Blog posts and articles (1000+ words)", 
            "Social media content and captions", 
            "Email marketing campaigns", 
            "Product descriptions and copy",
            "Video scripts and presentations"
          ]} 
        />
        <Item 
          title="SEO Content Optimization" 
          details={[
            "Keyword research and analysis", 
            "Content optimization for search engines", 
            "Meta descriptions and titles", 
            "Internal linking strategies",
            "Content gap analysis and recommendations"
          ]} 
        />
        <Item 
          title="Social Media Automation" 
          details={[
            "Multi-platform posting (LinkedIn, Twitter, Facebook)", 
            "Hashtag research and optimization", 
            "Engagement monitoring and responses", 
            "Influencer outreach automation",
            "Social media analytics and reporting"
          ]} 
        />
        <Item 
          title="Email Marketing AI" 
          details={[
            "Personalized email sequences", 
            "Subject line optimization", 
            "Send time optimization", 
            "A/B testing automation",
            "Email deliverability optimization"
          ]} 
        />
        <Item 
          title="Content Personalization" 
          details={[
            "Dynamic content based on user behavior", 
            "Personalized product recommendations", 
            "Custom landing pages", 
            "Behavioral trigger campaigns",
            "Customer journey optimization"
          ]} 
        />
        <Item 
          title="Content Analytics & Insights" 
          details={[
            "Performance tracking and analysis", 
            "ROI measurement and reporting", 
            "Content performance predictions", 
            "Audience engagement insights",
            "Competitive content analysis"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, padding: 20, backgroundColor: '#fdf2f8', borderRadius: 12, border: '1px solid #f9a8d4'}}>
        <h3 style={{fontSize: 18, fontWeight: 700, marginBottom: 12, color: '#831843'}}>Proven Results for Content Marketing</h3>
        <ul style={{color: '#be185d', lineHeight: 1.6}}>
          <li>• <strong>300% Increase in Content Output:</strong> AI generates 10x more content than manual processes</li>
          <li>• <strong>150% Higher Conversion Rates:</strong> Personalized content drives better engagement</li>
          <li>• <strong>80% Time Savings:</strong> Automated content creation and distribution</li>
          <li>• <strong>200% SEO Improvement:</strong> AI-optimized content ranks higher in search results</li>
          <li>• <strong>Consistent Brand Voice:</strong> AI maintains your brand tone across all content</li>
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
      <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 20, color: '#1f2937'}}>AI Content Generation Pricing</h2>
      <div style={{display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
        <Plan 
          name="Content Starter" 
          price="$1,500–$4,000" 
          features={[
            "2-4 weeks setup", 
            "Up to 20 pieces of content/month", 
            "Basic SEO optimization", 
            "2 social media platforms",
            "Email support"
          ]} 
        />
        <Plan 
          name="Content Pro" 
          price="$4,000–$12,000" 
          features={[
            "4-8 weeks setup", 
            "Unlimited content generation", 
            "Advanced SEO optimization", 
            "All social media platforms",
            "Email marketing automation",
            "Priority support & training"
          ]} 
        />
        <Plan 
          name="Content Enterprise" 
          price="$12,000+" 
          features={[
            "Custom content platform", 
            "Multi-brand content management", 
            "Advanced personalization", 
            "Dedicated content specialist",
            "Custom integrations",
            "SLA guarantees & monitoring"
          ]} 
        />
      </div>
      
      <div style={{marginTop: 24, textAlign: 'center', padding: 20, backgroundColor: '#f0f9ff', borderRadius: 12, border: '1px solid #7dd3fc'}}>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0c4a6e'}}>Free Content Audit & Strategy Session</h3>
        <p style={{color: '#0369a1', marginBottom: 16}}>
          Get a comprehensive analysis of your current content strategy and discover 
          how AI can transform your content marketing. Includes content calendar and ROI projections.
        </p>
        <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap'}}>
          <a 
            href="tel:+13024640950" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#0284c7', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: 8,
              fontWeight: 600
            }}
          >
            Schedule Free Audit
          </a>
          <a 
            href="mailto:kleber@ziontechgroup.com" 
            style={{
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: 'transparent', 
              color: '#0284c7', 
              textDecoration: 'none', 
              borderRadius: 8,
              border: '2px solid #0284c7',
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
        href="mailto:kleber@ziontechgroup.com?subject=AI Content Generation Services Inquiry" 
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