import Link from "next/link";

export const metadata = {
  title: "AI Content Writer | Zion Tech Group",
  description:
    "Advanced AI-powered content creation platform with SEO optimization, brand voice training, and multi-format support.",
};

export default function AIContentWriterPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Content Writer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create high-quality, SEO-optimized content at scale with our advanced
          AI writing platform. Generate blog posts, articles, social media
          content, and more in minutes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Writing Capabilities
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="✍️"
              title="Multi-Format Support"
              description="Blog posts, articles, social media, emails, product descriptions, and technical documentation"
            />
            <FeatureItem
              icon="🔍"
              title="SEO Optimization"
              description="Built-in SEO analysis, keyword optimization, and readability scoring for maximum search visibility"
            />
            <FeatureItem
              icon="🎨"
              title="Brand Voice Training"
              description="Train AI to match your brand's tone, style, and personality across all content"
            />
            <FeatureItem
              icon="📊"
              title="Content Analytics"
              description="Track content performance, engagement metrics, and SEO rankings"
            />
            <FeatureItem
              icon="🔄"
              title="Content Repurposing"
              description="Transform one piece of content into multiple formats for different platforms"
            />
            <FeatureItem
              icon="🌍"
              title="Multi-Language"
              description="Generate content in 25+ languages with cultural context and localization"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h2>
          <div className="space-y-6">
            <PricingCard
              name="Writer"
              price="$29"
              period="month"
              description="Perfect for individual creators"
              features={[
                "10,000 words/month",
                "Basic templates",
                "SEO suggestions",
                "Email support",
                "Standard formats",
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$79"
              period="month"
              description="Most popular for content teams"
              features={[
                "50,000 words/month",
                "Brand voice training",
                "Advanced SEO",
                "Priority support",
                "Team collaboration",
                "Content calendar",
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$199"
              period="month"
              description="For large content operations"
              features={[
                "Unlimited words",
                "Custom AI models",
                "API access",
                "White-label solution",
                "Dedicated support",
                "Custom integrations",
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Content Types We Generate
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-semibold text-gray-900 mb-2">Blog Posts</h3>
            <p className="text-sm text-gray-600">
              SEO-optimized articles and long-form content
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
            <p className="text-sm text-gray-600">
              Captions, posts, and stories for all platforms
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Email Marketing
            </h3>
            <p className="text-sm text-gray-600">
              Newsletters, campaigns, and sequences
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">🛍️</div>
            <h3 className="font-semibold text-gray-900 mb-2">E-commerce</h3>
            <p className="text-sm text-gray-600">
              Product descriptions and marketing copy
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Start Creating Amazing Content Today
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 3,000+ content creators and marketers using our AI Content Writer
          to scale their content production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
          >
            Try Free Trial
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`border rounded-xl p-6 ${popular ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
