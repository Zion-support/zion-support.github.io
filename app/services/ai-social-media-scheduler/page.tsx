<<<<<<< HEAD
import React from 'react';

export const metadata = {
  title: 'AI Social Media Scheduler | Zion Tech Group',
  description: 'Intelligent social media scheduling tool with AI-powered content optimization, hashtag suggestions, and optimal posting times for maximum engagement.',
  keywords: 'AI social media scheduler, social media automation, content optimization, hashtag suggestions, social media management, AI posting',
=======
import React from "react";

export const metadata = {
  title: "AI Social Media Scheduler | Zion Tech Group",
  description:
    "Intelligent social media management with AI content generation, optimal timing, and hashtag optimization. Increase engagement by 3x with our AI-powered scheduler.",
  keywords:
    "AI social media, social media scheduler, content generation, hashtag optimization, social media automation, engagement boost",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta,
}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler Quote - {name}"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function AISocialMediaSchedulerPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-pink-50 to-purple-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI Social Media Scheduler
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
          Automate your social media presence with AI-powered scheduling, content optimization, and engagement analytics. Post at the perfect time with the perfect content.
=======
          Transform your social media presence with AI-powered content
          generation, optimal timing, and hashtag optimization. Increase
          engagement by 3x with intelligent automation.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI-Powered Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
<<<<<<< HEAD
            Leverage artificial intelligence to maximize your social media impact and engagement.
=======
            Our AI social media scheduler uses advanced algorithms to maximize
            your social media impact.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon="🤖"
            title="AI Content Generation"
<<<<<<< HEAD
            description="Generate engaging posts, captions, and hashtags tailored to your brand voice and audience"
=======
            description="Generate engaging posts, captions, and stories using AI that understands your brand voice and audience"
            benefits={[
              "Brand voice consistency",
              "Multiple content formats",
              "Trending topic integration",
              "Emoji optimization",
              "Call-to-action suggestions",
            ]}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          />
          <Feature
            icon="⏰"
            title="Optimal Timing AI"
<<<<<<< HEAD
            description="AI analyzes your audience behavior to determine the best posting times for maximum engagement"
          />
          <Feature
            icon="📊"
            title="Performance Analytics"
            description="Comprehensive analytics with AI insights to track performance and optimize your strategy"
=======
            description="AI determines the best times to post for maximum engagement based on your audience activity"
            benefits={[
              "Audience activity analysis",
              "Platform-specific timing",
              "Time zone optimization",
              "Engagement prediction",
              "Continuous learning",
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
              "ROI measurement",
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
              "ROI measurement",
            ]}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          />
          <Feature
            icon="🎯"
            title="Hashtag Optimization"
            description="AI suggests trending and relevant hashtags to increase reach and discoverability"
          />
          <Feature
            icon="📱"
            title="Multi-Platform Support"
            description="Schedule and manage content across Instagram, Facebook, Twitter, LinkedIn, and TikTok"
          />
          <Feature
            icon="🔄"
<<<<<<< HEAD
            title="Content Recycling"
            description="Intelligent content recycling to repurpose high-performing posts and maximize reach"
=======
            title="Multi-Platform Management"
            description="Manage all your social media accounts from one dashboard with platform-specific optimization"
            benefits={[
              "Instagram, Facebook, Twitter",
              "LinkedIn, TikTok, Pinterest",
              "Platform-specific formatting",
              "Cross-platform scheduling",
              "Unified analytics",
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
              "Visual trend analysis",
            ]}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          />
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Supported Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
<<<<<<< HEAD
            Manage all your social media accounts from one powerful dashboard.
=======
            Manage all your social media accounts from one powerful AI-driven
            dashboard.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
<<<<<<< HEAD
            { name: 'Instagram', icon: '📷', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
            { name: 'Facebook', icon: '👥', color: 'bg-blue-600' },
            { name: 'Twitter', icon: '🐦', color: 'bg-blue-400' },
            { name: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
            { name: 'TikTok', icon: '🎵', color: 'bg-black' },
            { name: 'YouTube', icon: '📺', color: 'bg-red-600' },
            { name: 'Pinterest', icon: '📌', color: 'bg-red-500' },
            { name: 'Snapchat', icon: '👻', color: 'bg-yellow-400' },
          ].map((platform, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className={`w-12 h-12 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className="text-white text-xl">{platform.icon}</span>
=======
            {
              name: "Instagram",
              icon: "📷",
              color: "bg-gradient-to-r from-purple-500 to-pink-500",
            },
            { name: "Facebook", icon: "👥", color: "bg-blue-600" },
            { name: "Twitter", icon: "🐦", color: "bg-blue-400" },
            { name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
            { name: "TikTok", icon: "🎵", color: "bg-black" },
            { name: "Pinterest", icon: "📌", color: "bg-red-600" },
          ].map((platform, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div
                className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-3`}
              >
                {platform.icon}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
              </div>
              <h3 className="font-semibold text-gray-900">{platform.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
<<<<<<< HEAD
            Simple 4-step process to transform your social media presence with AI.
=======
            Get started with our AI social media scheduler in three simple
            steps.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              1
            </div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect Accounts</h3>
            <p className="text-gray-600">Link your social media accounts securely with one-click integration</p>
=======
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Connect Accounts
            </h3>
            <p className="text-gray-600">
              Connect your social media accounts and our AI analyzes your
              audience, posting history, and engagement patterns.
            </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              2
            </div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Content Creation</h3>
            <p className="text-gray-600">Let AI generate engaging content or upload your own for optimization</p>
=======
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI Content Creation
            </h3>
            <p className="text-gray-600">
              Our AI generates engaging content, suggests optimal posting times,
              and optimizes hashtags for maximum reach.
            </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              3
            </div>
<<<<<<< HEAD
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Smart Scheduling</h3>
            <p className="text-gray-600">AI determines optimal posting times and schedules your content automatically</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Analyze & Optimize</h3>
            <p className="text-gray-600">Track performance and let AI continuously optimize your strategy</p>
=======
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Schedule & Optimize
            </h3>
            <p className="text-gray-600">
              Schedule your posts and watch as our AI continuously optimizes
              your strategy based on performance data.
            </p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
<<<<<<< HEAD
            Choose the plan that fits your social media management needs.
=======
            Choose the plan that fits your social media management needs. All
            plans include our core AI features.
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Starter"
            price="$29"
            period="month"
            description="Perfect for individuals and small businesses"
            features={[
<<<<<<< HEAD
              'Up to 5 social accounts',
              '30 posts per month',
              'Basic AI content generation',
              'Optimal timing suggestions',
              'Basic analytics',
              'Email support',
=======
              "Up to 3 social accounts",
              "30 posts per month",
              "AI content generation",
              "Basic analytics",
              "Optimal timing AI",
              "Email support",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            ]}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Professional"
            price="$79"
            period="month"
            description="Most popular for growing businesses"
            features={[
<<<<<<< HEAD
              'Up to 15 social accounts',
              'Unlimited posts',
              'Advanced AI content generation',
              'Hashtag optimization',
              'Content recycling',
              'Advanced analytics',
              'Priority support',
              'Team collaboration',
=======
              "Up to 10 social accounts",
              "Unlimited posts",
              "Advanced AI features",
              "Comprehensive analytics",
              "Hashtag optimization",
              "Priority support",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            ]}
            popular={true}
            cta="Start Free Trial"
          />
          <PricingTier
            name="Enterprise"
            price="$199"
            period="month"
            description="For agencies and large organizations"
            features={[
<<<<<<< HEAD
              'Unlimited social accounts',
              'Unlimited posts',
              'Full AI optimization suite',
              'White-label options',
              'Custom AI training',
              'Dedicated account manager',
              '24/7 phone support',
              'API access',
              'Custom reporting',
=======
              "Unlimited social accounts",
              "Unlimited posts",
              "Custom AI models",
              "White-label solution",
              "Team collaboration",
              "Dedicated account manager",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="text-center mb-12">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AI Scheduler?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proven results and cutting-edge AI technology to maximize your social media ROI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
=======
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how businesses have transformed their social media presence with
            our AI scheduler.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "Fashion Brand",
              industry: "Retail",
              result: "300% increase in engagement",
              description:
                "Increased Instagram followers by 50K and boosted sales by 40% with AI-optimized content and timing.",
            },
            {
              company: "Tech Startup",
              industry: "Technology",
              result: "5x more qualified leads",
              description:
                "Generated 200+ qualified leads monthly through LinkedIn and Twitter with AI-generated thought leadership content.",
            },
            {
              company: "Restaurant Chain",
              industry: "Food & Beverage",
              result: "250% increase in foot traffic",
              description:
                "Boosted local engagement and reservations by 250% with location-based content and optimal posting times.",
            },
          ].map((story, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <div className="text-sm text-blue-600 font-semibold mb-2">
                {story.industry}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {story.company}
              </h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-2xl font-bold text-green-600">
                {story.result}
              </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3x More Engagement</h3>
            <p className="text-gray-600">Average increase in social media engagement with AI optimization</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Save 10+ Hours/Week</h3>
            <p className="text-gray-600">Automate your social media management and focus on growing your business</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect Timing</h3>
            <p className="text-gray-600">AI ensures your content reaches your audience at the optimal time</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Bank-level security with 99.9% uptime guarantee</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Social Media?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start your free trial today and see how AI can revolutionize your
          social media strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=AI Social Media Scheduler Demo Request"
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
    </div>
  );
}
