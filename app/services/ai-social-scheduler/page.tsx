import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Social Media Scheduler | Zion Tech Group',
  description: 'Intelligent social media management with optimal posting times and content suggestions. Maximize engagement across all platforms.',
  keywords: 'social media scheduler, AI social media, content scheduling, social media automation, engagement optimization',
};

export default function AISocialSchedulerPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */
}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Social Media Scheduler
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Maximize your social media impact with AI-powered scheduling and content optimization. 
            Post at optimal times, engage your audience, and grow your following across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject = AI Social Media Scheduler Inquiry"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors text-lg"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Powerful Features</h2>
            <div className="space-y-6">
              <FeatureItem
                icon="⏰"
                title="Optimal Timing AI"
                description="AI analyzes your audience behavior to determine the best posting times for maximum engagement."
                benefits={["Audience analysis", "Engagement prediction", "Time zone optimization", "Platform-specific timing"]}
              />
              <FeatureItem
                icon="💡"
                title="Content Suggestions"
                description="Get AI-generated content ideas tailored to your brand voice and audience preferences."
                benefits={["Trend analysis", "Brand voice matching", "Hashtag suggestions", "Content variety"]}
              />
              <FeatureItem
                icon="📱"
                title="Multi-Platform Posting"
                description="Schedule and post across Facebook, Instagram, Twitter, LinkedIn, and TikTok from one dashboard."
                benefits={["5+ platforms", "Cross-platform posting", "Platform optimization", "Unified management"]}
              />
              <FeatureItem
                icon="📊"
                title="Analytics Dashboard"
                description="Comprehensive analytics to track performance, engagement, and ROI across all your social media accounts."
                benefits={["Engagement metrics", "Growth tracking", "ROI analysis", "Competitor insights"]}
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Platform?</h2>
            <div className="space-y-6">
              <BenefitCard
                icon="📈"
                title="300% Higher Engagement"
                description="AI-optimized posting times and content achieve 300% higher engagement rates."
              />
              <BenefitCard
                icon="⏱️"
                title="Save 10+ Hours Weekly"
                description="Automate your social media management and save 10+ hours every week."
              />
              <BenefitCard
                icon="🎯"
                title="Smart Audience Targeting"
                description="AI identifies and targets your most engaged audience segments automatically."
              />
              <BenefitCard
                icon="🔄"
                title="Content Recycling"
                description="Intelligently recycle and repurpose your best-performing content for maximum reach."
              />
            </div>
          </div>
        </div>

        {/* Platform Support */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <PlatformCard
              icon="📘"
              title="Facebook"
              description="Posts, Stories, Reels, and Live videos"
            />
            <PlatformCard
              icon="📷"
              title="Instagram"
              description="Feed posts, Stories, IGTV, and Reels"
            />
            <PlatformCard
              icon="🐦"
              title="Twitter"
              description="Tweets, Threads, and Media posts"
            />
            <PlatformCard
              icon="💼"
              title="LinkedIn"
              description="Posts, Articles, and Company updates"
            />
            <PlatformCard
              icon="🎵"
              title="TikTok"
              description="Videos, Stories, and Live content"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$99"
              period="month"
              description="Perfect for individuals and small businesses"
              features={[
                "3 social accounts",
                "30 posts/month",
                "Basic AI timing",
                "Email support",
                "Standard analytics",
                "Content calendar"
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$199"
              period="month"
              description="Ideal for growing businesses and agencies"
              features={[
                "10 social accounts",
                "200 posts/month",
                "Advanced AI features",
                "Priority support",
                "Advanced analytics",
                "Content suggestions",
                "Team collaboration",
                "Custom branding"
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="$399"
              period="month"
              description="For large organizations and agencies"
              features={[
                "Unlimited accounts",
                "Unlimited posts",
                "Full AI suite",
                "24/7 support",
                "White-label options",
                "API access",
                "Custom integrations",
                "Dedicated manager"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join 15,000+ businesses already using AI Social Media Scheduler to grow their 
            social media presence and engagement. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject = AI Social Media Scheduler - Free Trial"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { 
  icon: string; 
  title: string; 
  description: string; 
  benefits: string[] 
}) {

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon
}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string 
}) {

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-purple-600">{icon
}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PlatformCard({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string 
}) {

  return (
    <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
      <div className="text-4xl mb-4">{icon
}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  popular 
}: { 
  title: string; 
  price: string; 
  period: string; 
  description: string; 
  features: string[]; 
  popular: boolean 
}) {

  return (
    <div className={`p-8 rounded-xl border-2 ${popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'
} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-600">/{period}</span>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-5 h-5 bg-purple-500 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject = AI Social Media Scheduler - {title} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}