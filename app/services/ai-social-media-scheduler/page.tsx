import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';

export const metadata = {
  title: 'AI Social Media Scheduler | Zion Tech Group',
  description: 'Intelligent social media management platform with AI content generation, optimal timing, and hashtag optimization. Increase engagement by 3x. Starting at $29/month.',
  keywords: 'AI social media scheduler, social media automation, content generation, hashtag optimization, social media management'
};

export default function AISocialMediaSchedulerPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-pink-50 to-purple-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Social Media Scheduler
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your social media presence with AI-powered content generation, optimal posting times, and intelligent hashtag optimization. Increase engagement by 3x across all platforms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler Demo"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful AI Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced AI technology that creates, schedules, and optimizes your social media content automatically.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Content Generation"
            description="Generate engaging posts, captions, and hashtags tailored to your brand voice and audience"
            benefits={[
              "Brand voice training",
              "Multiple content formats",
              "Trending topic integration",
              "Visual content suggestions"
            ]}
          />
          <FeatureCard
            icon="⏰"
            title="Optimal Timing AI"
            description="AI analyzes your audience behavior to find the perfect posting times for maximum engagement"
            benefits={[
              "Audience activity analysis",
              "Platform-specific optimization",
              "Timezone intelligence",
              "Engagement prediction"
            ]}
          />
          <FeatureCard
            icon="#️⃣"
            title="Hashtag Optimization"
            description="Smart hashtag research and optimization to increase reach and discoverability"
            benefits={[
              "Trending hashtag detection",
              "Niche hashtag discovery",
              "Competitor analysis",
              "Performance tracking"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Analytics & Insights"
            description="Comprehensive analytics with AI-powered insights and recommendations"
            benefits={[
              "Engagement metrics",
              "Audience demographics",
              "Content performance analysis",
              "ROI tracking"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Multi-Platform Sync"
            description="Manage all your social media accounts from one unified dashboard"
            benefits={[
              "Instagram, Facebook, Twitter, LinkedIn",
              "Cross-platform scheduling",
              "Platform-specific optimization",
              "Unified analytics"
            ]}
          />
          <FeatureCard
            icon="🎨"
            title="Visual Content AI"
            description="AI-powered image and video suggestions based on your content and brand"
            benefits={[
              "Image generation",
              "Video recommendations",
              "Brand consistency",
              "Stock photo integration"
            ]}
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your social media needs. All plans include AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingCard
            name="Starter"
            price="$29"
            period="month"
            description="Perfect for individuals and small businesses"
            features={[
              "3 social media accounts",
              "50 AI-generated posts/month",
              "Basic analytics",
              "Hashtag optimization",
              "Optimal timing",
              "Email support"
            ]}
            cta="Start Free Trial"
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$99"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "10 social media accounts",
              "200 AI-generated posts/month",
              "Advanced analytics",
              "Visual content AI",
              "Team collaboration",
              "Priority support",
              "API access"
            ]}
            cta="Start Free Trial"
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$299"
            period="month"
            description="For agencies and large organizations"
            features={[
              "Unlimited accounts",
              "Unlimited AI posts",
              "White-label options",
              "Custom AI training",
              "Dedicated account manager",
              "24/7 phone support",
              "Custom integrations"
            ]}
            cta="Contact Sales"
            popular={false}
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI Social Media Scheduler delivers measurable results for businesses of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard
            number="3x"
            label="Higher Engagement"
            description="Average increase in likes, comments, and shares"
          />
          <MetricCard
            number="40%"
            label="Time Saved"
            description="Reduction in social media management time"
          />
          <MetricCard
            number="2.5x"
            label="More Followers"
            description="Average follower growth rate"
          />
          <MetricCard
            number="85%"
            label="Client Satisfaction"
            description="Users who see significant improvement"
          />
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Platforms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage all your social media accounts from one powerful dashboard.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <PlatformCard
            name="Instagram"
            icon="📷"
            features={["Posts", "Stories", "Reels", "IGTV"]
          />
          <PlatformCard
            name="Facebook"
            icon="📘"
            features={["Posts", "Stories", "Pages", "Groups"]
          />
          <PlatformCard
            name="Twitter"
            icon="🐦"
            features={["Tweets", "Threads", "Spaces", "Polls"]
          />
          <PlatformCard
            name="LinkedIn"
            icon="💼"
            features={["Posts", "Articles", "Company Pages", "Events"]
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with AI-powered social media management in just 3 steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            step="1"
            title="Connect Your Accounts"
            description="Link your social media accounts securely and set up your brand preferences."
          />
          <StepCard
            step="2"
            title="AI Learns Your Style"
            description="Our AI analyzes your existing content to understand your brand voice and audience."
          />
          <StepCard
            step="3"
            title="Automate & Optimize"
            description="AI generates, schedules, and optimizes your content for maximum engagement."
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-purple-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Media?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of businesses using AI to grow their social media presence. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler - Free Trial"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, benefits }: {
=======

export const metadata = {
  title: 'AI Social Media Scheduler | Zion Tech Group',
  description: 'Intelligent social media management with AI content generation, optimal timing, and hashtag optimization. Increase engagement by 3x with our AI-powered scheduler.',
  keywords: 'AI social media, social media scheduler, content generation, hashtag optimization, social media automation, engagement boost'
};

interface FeatureCardProps {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
  icon: string;
  title: string;
  description: string;
  benefits: string[];
<<<<<<< HEAD
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
=======
}

function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
<<<<<<< HEAD
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
=======
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
function PricingCard({ name, price, period, description, features, cta, popular }: {
=======
interface PricingTierProps {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
<<<<<<< HEAD
  cta: string;
  popular: boolean;
}) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
=======
  popular?: boolean;
  cta: string;
}

function PricingTier({ name, price, period, description, features, popular = false, cta }: PricingTierProps) {
  return (
    <div className={`relative p-8 rounded-lg border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} shadow-lg`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
<<<<<<< HEAD
        <div className="text-4xl font-bold text-purple-600 mb-2">
=======
        <div className="text-4xl font-bold text-blue-600 mb-2">
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
<<<<<<< HEAD
            ? 'bg-purple-600 text-white hover:bg-purple-700'
=======
            ? 'bg-blue-600 text-white hover:bg-blue-700'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

<<<<<<< HEAD
function MetricCard({ number, label, description }: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl font-bold text-purple-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}

function PlatformCard({ name, icon, features }: {
  name: string;
  icon: string;
  features: string[];
}) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{name}</h3>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600">{feature}</li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({ step, title, description }: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
=======
export default function AISocialMediaSchedulerPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-pink-50 to-purple-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Social Media Scheduler
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your social media presence with AI-powered content generation, optimal timing, and hashtag optimization. Increase engagement by 3x with intelligent automation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler Demo"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Demo
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI social media scheduler uses advanced algorithms to maximize your social media impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Content Generation"
            description="Generate engaging posts, captions, and stories using AI that understands your brand voice and audience"
            benefits={[
              "Brand voice consistency",
              "Multiple content formats",
              "Trending topic integration",
              "Emoji optimization",
              "Call-to-action suggestions"
            ]}
          />
          <FeatureCard
            icon="⏰"
            title="Optimal Timing AI"
            description="AI determines the best times to post for maximum engagement based on your audience activity"
            benefits={[
              "Audience activity analysis",
              "Platform-specific timing",
              "Time zone optimization",
              "Engagement prediction",
              "Continuous learning"
            ]}
          />
          <FeatureCard
            icon="#️⃣"
            title="Hashtag Optimization"
            description="AI-powered hashtag research and optimization to increase reach and discoverability"
            benefits={[
              "Trending hashtag detection",
              "Niche hashtag discovery",
              "Competitor analysis",
              "Engagement tracking",
              "ROI measurement"
            ]}
          />
          <FeatureCard
            icon="📊"
            title="Performance Analytics"
            description="Comprehensive analytics with AI insights to track and improve your social media performance"
            benefits={[
              "Engagement rate tracking",
              "Reach and impressions",
              "Audience growth analysis",
              "Content performance insights",
              "ROI measurement"
            ]}
          />
          <FeatureCard
            icon="🔄"
            title="Multi-Platform Management"
            description="Manage all your social media accounts from one dashboard with platform-specific optimization"
            benefits={[
              "Instagram, Facebook, Twitter",
              "LinkedIn, TikTok, Pinterest",
              "Platform-specific formatting",
              "Cross-platform scheduling",
              "Unified analytics"
            ]}
          />
          <FeatureCard
            icon="🎨"
            title="Visual Content AI"
            description="AI-powered image and video suggestions, editing, and optimization for maximum visual impact"
            benefits={[
              "Image enhancement",
              "Video optimization",
              "Brand consistency",
              "Aspect ratio optimization",
              "Visual trend analysis"
            ]}
          />
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Platforms</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manage all your social media accounts from one powerful AI-driven dashboard.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: "Instagram", icon: "📷", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
            { name: "Facebook", icon: "👥", color: "bg-blue-600" },
            { name: "Twitter", icon: "🐦", color: "bg-blue-400" },
            { name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
            { name: "TikTok", icon: "🎵", color: "bg-black" },
            { name: "Pinterest", icon: "📌", color: "bg-red-600" }
          ].map((platform, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-3`}>
                {platform.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{platform.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with our AI social media scheduler in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect Accounts</h3>
            <p className="text-gray-600">
              Connect your social media accounts and our AI analyzes your audience, posting history, and engagement patterns.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Content Creation</h3>
            <p className="text-gray-600">
              Our AI generates engaging content, suggests optimal posting times, and optimizes hashtags for maximum reach.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Schedule & Optimize</h3>
            <p className="text-gray-600">
              Schedule your posts and watch as our AI continuously optimizes your strategy based on performance data.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your social media management needs. All plans include our core AI features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$29"
            period="month"
            description="Perfect for individuals and small businesses"
            features={[
              "Up to 3 social accounts",
              "30 posts per month",
              "AI content generation",
              "Basic analytics",
              "Optimal timing AI",
              "Email support"
            ]}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Professional"
            price="$99"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Up to 10 social accounts",
              "Unlimited posts",
              "Advanced AI features",
              "Comprehensive analytics",
              "Hashtag optimization",
              "Priority support"
            ]}
            popular={true}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Enterprise"
            price="$299"
            period="month"
            description="For agencies and large organizations"
            features={[
              "Unlimited social accounts",
              "Unlimited posts",
              "Custom AI models",
              "White-label solution",
              "Team collaboration",
              "Dedicated account manager"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses have transformed their social media presence with our AI scheduler.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "Fashion Brand",
              industry: "Retail",
              result: "300% increase in engagement",
              description: "Increased Instagram followers by 50K and boosted sales by 40% with AI-optimized content and timing."
            },
            {
              company: "Tech Startup",
              industry: "Technology",
              result: "5x more qualified leads",
              description: "Generated 200+ qualified leads monthly through LinkedIn and Twitter with AI-generated thought leadership content."
            },
            {
              company: "Restaurant Chain",
              industry: "Food & Beverage",
              result: "250% increase in foot traffic",
              description: "Boosted local engagement and reservations by 250% with location-based content and optimal posting times."
            }
          ].map((story, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <div className="text-sm text-blue-600 font-semibold mb-2">{story.industry}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{story.company}</h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-2xl font-bold text-green-600">{story.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Social Media?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how AI can revolutionize your social media strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler Free Trial"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
    </div>
  );
}