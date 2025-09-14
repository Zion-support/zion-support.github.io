import React from "react";

export const metadata = {
  title: "AI Social Media Scheduler | Zion Tech Group",
  description:
    "Intelligent social media scheduling with AI-powered content generation, optimal timing, and performance analytics. Grow your social presence 5x faster."};

export default function AISocialSchedulerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Social Media Scheduler
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your social media strategy with AI-powered content
          generation, optimal posting times, and intelligent analytics.
          Schedule, optimize, and grow your social presence automatically.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Free Trial - $49/month
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Schedule Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Revolutionary Social Media Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Content Generation"
            description="Generate engaging posts, captions, and hashtags tailored to your brand voice and audience."
            features={[
              "Brand voice customization",
              "Trending hashtag suggestions",
              "Multi-platform optimization",
              "Content calendar planning"]}
          />
          <FeatureCard
            icon="⏰"
            title="Optimal Timing"
            description="AI analyzes your audience behavior to find the perfect posting times for maximum engagement."
            features={[
              "Audience behavior analysis",
              "Optimal posting time detection",
              "Timezone optimization",
              "Engagement prediction"]}
          />
          <FeatureCard
            icon="📊"
            title="Performance Analytics"
            description="Comprehensive analytics and insights to track performance and optimize your strategy."
            features={[
              "Real-time performance tracking",
              "Engagement rate analysis",
              "ROI measurement",
              "Competitor benchmarking"]}
          />
          <FeatureCard
            icon="🎨"
            title="Visual Content Creation"
            description="AI-powered image and video generation for stunning social media visuals."
            features={[
              "AI image generation",
              "Video content creation",
              "Brand template library",
              "Auto-resizing for platforms"]}
          />
          <FeatureCard
            icon="🔄"
            title="Cross-Platform Management"
            description="Manage all your social media accounts from one unified dashboard."
            features={[
              "Facebook, Instagram, Twitter, LinkedIn",
              "TikTok and YouTube support",
              "Bulk posting capabilities",
              "Platform-specific optimization"]}
          />
          <FeatureCard
            icon="💬"
            title="Engagement Automation"
            description="Automatically respond to comments, mentions, and messages with AI-powered responses."
            features={[
              "Auto-reply to comments",
              "Sentiment analysis",
              "Crisis management alerts",
              "Customer service integration"]}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Flexible Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            name="Starter"
            price="$49"
            period="month"
            description="Perfect for small businesses and influencers"
            features={[
              "Up to 5 social accounts",
              "100 posts per month",
              "Basic AI content generation",
              "Standard analytics",
              "Email support"]}
            popular={false}
          />
          <PricingCard
            name="Professional"
            price="$149"
            period="month"
            description="Ideal for growing businesses and agencies"
            features={[
              "Up to 15 social accounts",
              "500 posts per month",
              "Advanced AI features",
              "Detailed analytics & reporting",
              "Priority support",
              "Team collaboration"]}
            popular={true}
          />
          <PricingCard
            name="Enterprise"
            price="$399"
            period="month"
            description="For large organizations and agencies"
            features={[
              "Unlimited social accounts",
              "Unlimited posts",
              "Custom AI training",
              "White-label solution",
              "24/7 dedicated support",
              "API access"]}
            popular={false}
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Johnson"
            role="Marketing Director"
            company="TechStart Inc."
            content="Our social media engagement increased by 400% in just 3 months. The AI content generation is incredible!"
            avatar="👩‍💼"
          />
          <TestimonialCard
            name="Mike Chen"
            role="Founder"
            company="E-commerce Plus"
            content="The optimal timing feature alone saved us 10 hours per week. ROI was immediate and measurable."
            avatar="👨‍💻"
          />
          <TestimonialCard
            name="Emily Rodriguez"
            role="Social Media Manager"
            company="Creative Agency"
            content="Managing 20+ client accounts became effortless. The AI suggestions are spot-on every time."
            avatar="👩‍🎨"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Our AI Scheduler?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Proven Results
            </h3>
            <div className="space-y-4">
              <StatItem number="500%" label="Average Engagement Increase" />
              <StatItem number="75%" label="Time Saved on Content Creation" />
              <StatItem number="300%" label="Follower Growth Rate" />
              <StatItem number="98%" label="Customer Satisfaction" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Enterprise Features
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Bank-grade security and data protection</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>99.9% uptime guarantee</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>GDPR and CCPA compliant</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Custom AI model training</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>White-label solutions available</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Social Media?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join 10,000+ businesses that have revolutionized their social media
          strategy with our AI scheduler.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm text-purple-100">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  features}: {
  icon: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingCard({
  name,
  price,
  period,
  description,
  features,
  popular}: {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`bg-white p-8 rounded-lg shadow-md border-2 ${popular ? "border-purple-500" : "border-gray-200"} relative`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        Start Free Trial
      </button>
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  company,
  content,
  avatar}: {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{avatar}</div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">
            {role} at {company}
          </p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{content}"</p>
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-purple-600">{number}</span>
      <span className="text-gray-600">{label}</span>
    </div>
  );
}
