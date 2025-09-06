import Link from "next/link";

export const metadata = {
  title: "Social Media Scheduler | Zion Tech Group",
  description: "AI-powered social media management platform with intelligent scheduling, content optimization, and analytics.",
};

export default function SocialMediaSchedulerPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Social Media Scheduler
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Streamline your social media presence with AI-powered content scheduling, 
          optimal timing recommendations, and comprehensive analytics across all platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform Features</h2>
          <div className="space-y-6">
            <FeatureItem
              icon="📅"
              title="Smart Scheduling"
              description="AI determines optimal posting times based on your audience engagement patterns"
            />
            <FeatureItem
              icon="🎨"
              title="Content Creation"
              description="AI-generated captions, hashtags, and visual suggestions for maximum engagement"
            />
            <FeatureItem
              icon="📊"
              title="Performance Analytics"
              description="Comprehensive insights across Facebook, Instagram, Twitter, LinkedIn, and TikTok"
            />
            <FeatureItem
              icon="🔄"
              title="Cross-Platform Publishing"
              description="Schedule and publish content across multiple social platforms simultaneously"
            />
            <FeatureItem
              icon="💬"
              title="Engagement Management"
              description="Automated responses and comment moderation with AI-powered sentiment analysis"
            />
            <FeatureItem
              icon="📈"
              title="Growth Tracking"
              description="Monitor follower growth, engagement rates, and ROI across all platforms"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
          <div className="space-y-6">
            <PricingCard
              name="Solo"
              price="$19"
              period="month"
              description="Perfect for individual creators"
              features={[
                "3 social accounts",
                "30 posts per month",
                "Basic analytics",
                "Email support",
                "Content calendar"
              ]}
              popular={false}
            />
            <PricingCard
              name="Team"
              price="$49"
              period="month"
              description="Most popular for small teams"
              features={[
                "10 social accounts",
                "Unlimited posts",
                "Advanced analytics",
                "AI content suggestions",
                "Team collaboration",
                "Priority support"
              ]}
              popular={true}
            />
            <PricingCard
              name="Agency"
              price="$99"
              period="month"
              description="For marketing agencies"
              features={[
                "Unlimited accounts",
                "White-label options",
                "Client reporting",
                "API access",
                "Dedicated support",
                "Custom integrations"
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Brand</h3>
            <p className="text-gray-600">Increased social media engagement by 250% and sales by 180% in 3 months.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">B2B Company</h3>
            <p className="text-gray-600">Generated 40% more qualified leads through optimized LinkedIn and Twitter campaigns.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Content Creator</h3>
            <p className="text-gray-600">Grew Instagram following by 300% and TikTok views by 500% with AI-optimized content.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Growing Your Social Presence Today</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 1,000+ businesses and creators using our Social Media Scheduler to maximize their social media impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Start Free Trial
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

function FeatureItem({ icon, title, description }: {
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

function PricingCard({ name, price, period, description, features, popular }: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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