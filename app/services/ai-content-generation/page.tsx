<<<<<<< HEAD
export const metadata = {
  title: "AI Content Generation & Marketing | Zion Tech Group",
  description:
    "Scale your content marketing with AI-powered content generation, SEO optimization, and automated marketing campaigns that drive engagement and conversions.",
};

export default function AIContentGenerationPage() {
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>
        AI Content Generation & Marketing Automation
      </h1>
      <p style={{ marginTop: 8, color: "#374151" }}>
        Scale your content marketing 10x with AI-powered content generation, SEO
        optimization, and automated campaigns that drive 300% more engagement
        and 150% higher conversion rates.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <Item
          title="AI Content Creation"
          details={[
            "Blog posts and articles (1000+ words)",
            "Social media content and captions",
            "Email marketing campaigns",
            "Product descriptions and copy",
            "Video scripts and presentations",
          ]}
        />
        <Item
          title="SEO Content Optimization"
          details={[
            "Keyword research and analysis",
            "Content optimization for search engines",
            "Meta descriptions and titles",
            "Internal linking strategies",
            "Content gap analysis and recommendations",
          ]}
        />
        <Item
          title="Social Media Automation"
          details={[
            "Multi-platform posting (LinkedIn, Twitter, Facebook)",
            "Hashtag research and optimization",
            "Engagement monitoring and responses",
            "Influencer outreach automation",
            "Social media analytics and reporting",
          ]}
        />
        <Item
          title="Email Marketing AI"
          details={[
            "Personalized email sequences",
            "Subject line optimization",
            "Send time optimization",
            "A/B testing automation",
            "Email deliverability optimization",
          ]}
        />
        <Item
          title="Content Personalization"
          details={[
            "Dynamic content based on user behavior",
            "Personalized product recommendations",
            "Custom landing pages",
            "Behavioral trigger campaigns",
            "Customer journey optimization",
          ]}
        />
        <Item
          title="Content Analytics & Insights"
          details={[
            "Performance tracking and analysis",
            "ROI measurement and reporting",
            "Content performance predictions",
            "Audience engagement insights",
            "Competitive content analysis",
          ]}
        />
      </div>

      <div
        style={{
          marginTop: 24,
          padding: 20,
          backgroundColor: "#fdf2f8",
          borderRadius: 12,
          border: "1px solid #f9a8d4",
        }}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 12,
            color: "#831843",
          }}
        >
          Proven Results for Content Marketing
        </h3>
        <ul style={{ color: "#be185d", lineHeight: 1.6 }}>
          <li>
            • <strong>300% Increase in Content Output:</strong> AI generates 10x
            more content than manual processes
          </li>
          <li>
            • <strong>150% Higher Conversion Rates:</strong> Personalized
            content drives better engagement
          </li>
          <li>
            • <strong>80% Time Savings:</strong> Automated content creation and
            distribution
          </li>
          <li>
            • <strong>200% SEO Improvement:</strong> AI-optimized content ranks
            higher in search results
          </li>
          <li>
            • <strong>Consistent Brand Voice:</strong> AI maintains your brand
            tone across all content
          </li>
        </ul>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,
        backgroundColor: "#ffffff",
      }}
    >
      <h3 style={{ fontWeight: 700, color: "#1f2937", marginBottom: 8 }}>
        {title}
      </h3>
      <ul style={{ paddingLeft: 18, color: "#4b5563", margin: 0 }}>
        {details.map((d) => (
          <li key={d} style={{ listStyle: "disc", marginBottom: 4 }}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div style={{ marginTop: 32 }}>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 20,
          color: "#1f2937",
        }}
      >
        AI Content Generation Pricing
      </h2>
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        <Plan
          name="Content Starter"
          price="$1,500–$4,000"
          features={[
            "2-4 weeks setup",
            "Up to 20 pieces of content/month",
            "Basic SEO optimization",
            "2 social media platforms",
            "Email support",
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
            "Priority support & training",
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
            "SLA guarantees & monitoring",
          ]}
        />
      </div>

      <div
        style={{
          marginTop: 24,
          textAlign: "center",
          padding: 20,
          backgroundColor: "#f0f9ff",
          borderRadius: 12,
          border: "1px solid #7dd3fc",
        }}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 8,
            color: "#0c4a6e",
          }}
        >
          Free Content Audit & Strategy Session
        </h3>
        <p style={{ color: "#0369a1", marginBottom: 16 }}>
          Get a comprehensive analysis of your current content strategy and
          discover how AI can transform your content marketing. Includes content
          calendar and ROI projections.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="tel:+13024640950"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "#0284c7",
              color: "white",
              textDecoration: "none",
              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Schedule Free Audit
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "transparent",
              color: "#0284c7",
              textDecoration: "none",
              borderRadius: 8,
              border: "2px solid #0284c7",
              fontWeight: 600,
            }}
          >
            Email Us
          </a>
// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: 'AI Content Generation Platform | Zion Tech Group',
  description: 'Revolutionary AI content generation platform that creates high-quality articles, marketing copy, social media posts, and more. 10x faster than traditional writing.',
  keywords: 'ai-content-generation, content-marketing, copywriting, social-media, blog-writing, marketing-automation'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Content Generation Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your content marketing with our revolutionary AI platform that generates 
            high-quality articles, marketing copy, social media posts, and more. 
            Create 10x more content in 1/10th the time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Try Free Demo
            </a>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">✍️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Multi-Format Content</h3>
            <p className="text-gray-300 mb-6">Generate various content types including blogs, social media, emails, ads, and technical documentation.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Blog articles & long-form content</li>
              <li>• Social media posts & captions</li>
              <li>• Email marketing campaigns</li>
              <li>• Ad copy & landing pages</li>
              <li>• Product descriptions</li>
              <li>• Technical documentation</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4">Brand Voice Consistency</h3>
            <p className="text-gray-300 mb-6">AI learns your brand voice and maintains consistency across all content while adapting to different tones.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Custom brand voice training</li>
              <li>• Tone adaptation (formal, casual, etc.)</li>
              <li>• Industry-specific terminology</li>
              <li>• Brand guideline compliance</li>
              <li>• Style consistency checking</li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">SEO Optimization</h3>
            <p className="text-gray-300 mb-6">Built-in SEO optimization ensures your content ranks well and drives organic traffic.</p>
            <ul className="space-y-2 text-gray-300">
              <li>• Keyword research & integration</li>
              <li>• Meta descriptions & titles</li>
              <li>• Internal linking suggestions</li>
              <li>• Readability optimization</li>
              <li>• Schema markup generation</li>
            </ul>
          </div>
=======
export const metadata = {}
  title: "AI Content Generation & Marketing | Zion Tech Group",
  description:"
    "Scale your content marketing with AI-powered content generation, SEO optimization, and automated marketing campaigns that drive engagement and conversions.",;
};

export default function AIContentGenerationPage() {}
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>;
        AI Content Generation & Marketing Automation;
      </h1>"
      <p style={{ marginTop: 8, color: "#374151" }}>
        Scale your content marketing 10x with AI-powered content generation, SEO;
        optimization, and automated campaigns that drive 300% more engagement;
        and 150% higher conversion rates.
      </p>
"
      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <Item"
          title="AI Content Creation"
          details={["
            "Blog posts and articles (1000+ words)","
            "Social media content and captions","
            "Email marketing campaigns","
            "Product descriptions and copy","
            "Video scripts and presentations",
          ]}
        />
        <Item"
          title="SEO Content Optimization"
          details={["
            "Keyword research and analysis","
            "Content optimization for search engines","
            "Meta descriptions and titles","
            "Internal linking strategies","
            "Content gap analysis and recommendations",
          ]}
        />
        <Item"
          title="Social Media Automation"
          details={["
            "Multi-platform posting (LinkedIn, Twitter, Facebook)","
            "Hashtag research and optimization","
            "Engagement monitoring and responses","
            "Influencer outreach automation","
            "Social media analytics and reporting",
          ]}
        />
        <Item"
          title="Email Marketing AI"
          details={["
            "Personalized email sequences","
            "Subject line optimization","
            "Send time optimization","
            "A/B testing automation","
            "Email deliverability optimization",
          ]}
        />
        <Item"
          title="Content Personalization"
          details={["
            "Dynamic content based on user behavior","
            "Personalized product recommendations","
            "Custom landing pages","
            "Behavioral trigger campaigns","
            "Customer journey optimization",
          ]}
        />
        <Item"
          title="Content Analytics & Insights"
          details={["
            "Performance tracking and analysis","
            "ROI measurement and reporting","
            "Content performance predictions","
            "Audience engagement insights","
            "Competitive content analysis",
          ]}
        />
      </div>

      <div;
        style={{}
          marginTop: 24,
          padding: 20,"
          backgroundColor: "#fdf2f8",
          borderRadius: 12,"
          border: "1px solid #f9a8d4",
        }}
      >
        <h3;
          style={{}
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 12,"
            color: "#831843",
          }}
        >
          Proven Results for Content Marketing;
        </h3>"
        <ul style={{ color: "#be185d", lineHeight: 1.6 }}>
          <li>
            • <strong>300% Increase in Content Output:</strong> AI generates 10x;
            more content than manual processes;
          </li>
          <li>
            • <strong>150% Higher Conversion Rates:</strong> Personalized;
            content drives better engagement;
          </li>
          <li>
            • <strong>80% Time Savings:</strong> Automated content creation and;
            distribution;
          </li>
          <li>
            • <strong>200% SEO Improvement:</strong> AI-optimized content ranks;
            higher in search results;
          </li>
          <li>
            • <strong>Consistent Brand Voice:</strong> AI maintains your brand;
            tone across all content;
          </li>
        </ul>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {}
  return (
    <div;
      style={{"
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        padding: 16,"
        backgroundColor: "#ffffff",
      }}
    >"
      <h3 style={{ fontWeight: 700, color: "#1f2937", marginBottom: 8 }}>
        {title}
      </h3>"
      <ul style={{ paddingLeft: 18, color: "#4b5563", margin: 0 }}>
        {details.map((d) => ("
          <li key={d} style={{ listStyle: "disc", marginBottom: 4 }}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {}
  return (
    <div style={{ marginTop: 32 }}>
      <h2;
        style={{}
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 20,"
          color: "#1f2937",
        }}
      >
        AI Content Generation Pricing;
      </h2>
      <div;
        style={{"
          display: "grid",
          gap: 16,"
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        <Plan"
          name="Content Starter""
          price="$1,500–$4,000"
          features={["
            "2-4 weeks setup","
            "Up to 20 pieces of content/month","
            "Basic SEO optimization","
            "2 social media platforms","
            "Email support",
          ]}
        />
        <Plan"
          name="Content Pro""
          price="$4,000–$12,000"
          features={["
            "4-8 weeks setup","
            "Unlimited content generation","
            "Advanced SEO optimization","
            "All social media platforms","
            "Email marketing automation","
            "Priority support & training",
          ]}
        />
        <Plan"
          name="Content Enterprise""
          price="$12,000+"
          features={["
            "Custom content platform","
            "Multi-brand content management","
            "Advanced personalization","
            "Dedicated content specialist","
            "Custom integrations","
            "SLA guarantees & monitoring",
          ]}
        />
      </div>

      <div;
        style={{}
          marginTop: 24,"
          textAlign: "center",
          padding: 20,"
          backgroundColor: "#f0f9ff",
          borderRadius: 12,"
          border: "1px solid #7dd3fc",
        }}
      >
        <h3;
          style={{}
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 8,"
            color: "#0c4a6e",
          }}
        >
          Free Content Audit & Strategy Session;
        </h3>"
        <p style={{ color: "#0369a1", marginBottom: 16 }}>
          Get a comprehensive analysis of your current content strategy and;
          discover how AI can transform your content marketing. Includes content;
          calendar and ROI projections.
        </p>
        <div;
          style={{"
            display: "flex",
            gap: 12,"
            justifyContent: "center","
            flexWrap: "wrap",
          }}
        >
          <a"
            href="tel:+13024640950"
            style={{"
              display: "inline-block","
              padding: "12px 24px","
              backgroundColor: "#0284c7","
              color: "white","
              textDecoration: "none",
              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Schedule Free Audit;
          </a>
          <a"
            href="mailto:kleber@ziontechgroup.com"
            style={{"
              display: "inline-block","
              padding: "12px 24px","
              backgroundColor: "transparent","
              color: "#0284c7","
              textDecoration: "none",
              borderRadius: 8,"
              border: "2px solid #0284c7",
              fontWeight: 600,
            }}
          >
            Email Us;
          </a>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        </div>

        {/* Content Types */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Content Types We Generate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-white mb-3">Blog Articles</h3>
              <p className="text-gray-300 text-sm">SEO-optimized blog posts from 500-3000 words</p>
              <div className="mt-4 text-blue-400 font-semibold">$0.10/word</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media</h3>
              <p className="text-gray-300 text-sm">Platform-specific posts for all major social networks</p>
              <div className="mt-4 text-blue-400 font-semibold">$0.50/post</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-white mb-3">Email Campaigns</h3>
              <p className="text-gray-300 text-sm">Newsletters, promotional emails, and sequences</p>
              <div className="mt-4 text-blue-400 font-semibold">$2.00/email</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Ad Copy</h3>
              <p className="text-gray-300 text-sm">Google Ads, Facebook Ads, and display advertising</p>
              <div className="mt-4 text-blue-400 font-semibold">$1.00/ad</div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Flexible Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$199<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• 10,000 words/month</li>
                <li>• 5 content types</li>
                <li>• Basic SEO optimization</li>
                <li>• Email support</li>
                <li>• Standard templates</li>
                <li>• 1 brand voice profile</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Content Generation Starter Plan"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 border-2 border-blue-400">
              <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">$499<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• 50,000 words/month</li>
                <li>• All content types</li>
                <li>• Advanced SEO optimization</li>
                <li>• Priority support</li>
                <li>• Custom templates</li>
                <li>• 5 brand voice profiles</li>
                <li>• API access</li>
                <li>• Team collaboration</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Content Generation Professional Plan"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">Custom<span className="text-lg text-gray-300"> pricing</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Unlimited words</li>
                <li>• White-label solution</li>
                <li>• Custom AI models</li>
                <li>• Dedicated support</li>
                <li>• On-premise deployment</li>
                <li>• Unlimited brand profiles</li>
                <li>• Advanced analytics</li>
                <li>• SLA guarantees</li>
              </ul>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Content Generation Enterprise Plan"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors block text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-gray-300">Faster content creation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-gray-300">Reduction in content costs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
              <div className="text-gray-300">Increase in content output</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Client satisfaction rate</div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Marketing Agencies</h3>
              <p className="text-gray-300">Scale content production for multiple clients while maintaining quality and brand consistency.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">E-commerce Brands</h3>
              <p className="text-gray-300">Generate product descriptions, blog content, and social media posts at scale.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">SaaS Companies</h3>
              <p className="text-gray-300">Create technical documentation, help articles, and marketing content efficiently.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Content Creators</h3>
              <p className="text-gray-300">Boost productivity and focus on strategy while AI handles the writing.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Startups</h3>
              <p className="text-gray-300">Launch content marketing without hiring a full content team.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Enterprise</h3>
              <p className="text-gray-300">Maintain consistent, high-quality content across all departments and channels.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Revolutionize Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join 1,000+ businesses already using our AI content generation platform. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
}

function Plan({}
  name,
  price,
  features,
}: {}
  name: string;
  price: string;
  features: string[];
}) {}
  return (
    <div;
      style={{"
        border: "2px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,"
        backgroundColor: "#ffffff","
        position: "relative",
      }}
    >
      <h4;
        style={{}
          fontWeight: 700,
          fontSize: 18,"
=======
}

function Plan({
  name,
  price,
  features,
}: {
  name: string;
  price: string;
  features: string[];
}) {
  return (
    <div
      style={{
        border: "2px solid #e5e7eb",
        borderRadius: 12,
        padding: 20,
        backgroundColor: "#ffffff",
        position: "relative",
      }}
    >
      <h4
        style={{
          fontWeight: 700,
          fontSize: 18,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          color: "#1f2937",
          marginBottom: 8,
        }}
      >
        {name}
      </h4>
<<<<<<< HEAD
      <div;
        style={{"
=======
      <div
        style={{
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          color: "#111827",
          fontWeight: 800,
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        {price}
<<<<<<< HEAD
      </div>"
      <ul style={{ paddingLeft: 18, color: "#4b5563", marginBottom: 20 }}>
        {features.map((f) => ("
=======
      </div>
      <ul style={{ paddingLeft: 18, color: "#4b5563", marginBottom: 20 }}>
        {features.map((f) => (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <li key={f} style={{ listStyle: "disc", marginBottom: 6 }}>
            {f}
          </li>
        ))}
      </ul>
<<<<<<< HEAD
      <a"
        href="mailto:kleber@ziontechgroup.com?subject=AI Content Generation Services Inquiry"
        style={{"
          display: "inline-block","
          width: "100%","
          textAlign: "center","
          padding: "12px 16px","
          backgroundColor: "#3b82f6","
          color: "white","
=======
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Content Generation Services Inquiry"
        style={{
          display: "inline-block",
          width: "100%",
          textAlign: "center",
          padding: "12px 16px",
          backgroundColor: "#3b82f6",
          color: "white",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          textDecoration: "none",
          borderRadius: 8,
          fontWeight: 600,
        }}
      >
<<<<<<< HEAD
        Get Started;
=======
        Get Started
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </a>
    </div>
  );
}
<<<<<<< HEAD
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
