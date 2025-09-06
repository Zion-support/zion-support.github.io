import Link from "next/link";

export const metadata = {
  title: "AI Video Generator | Zion Tech Group",
  description:
    "Create professional videos with AI-powered editing, voice synthesis, and automated content generation.",
};

export default function AIVideoGeneratorPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          AI Video Generator
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Create professional videos in minutes with AI-powered editing, voice
          synthesis, and automated content generation. Perfect for marketing,
          education, and social media.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Video Creation Features
          </h2>
          <div className="space-y-6">
            <FeatureItem
              icon="🎬"
              title="AI Video Editing"
              description="Automated video editing with smart cuts, transitions, and scene optimization"
            />
            <FeatureItem
              icon="🎤"
              title="Voice Synthesis"
              description="Natural-sounding AI voices in 50+ languages with emotion and tone control"
            />
            <FeatureItem
              icon="📝"
              title="Script Generation"
              description="AI-generated scripts for any topic with SEO optimization and engagement focus"
            />
            <FeatureItem
              icon="🎨"
              title="Visual Effects"
              description="Professional visual effects, animations, and graphics automatically applied"
            />
            <FeatureItem
              icon="📱"
              title="Multi-Format Export"
              description="Export videos optimized for YouTube, Instagram, TikTok, and other platforms"
            />
            <FeatureItem
              icon="🔄"
              title="Template Library"
              description="Hundreds of professional templates for different industries and use cases"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Pricing Plans
          </h2>
          <div className="space-y-6">
            <PricingCard
              name="Creator"
              price="$39"
              period="month"
              description="Perfect for individual creators"
              features={[
                "10 videos/month",
                "Basic templates",
                "Standard quality",
                "Email support",
                "HD export",
              ]}
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="$99"
              period="month"
              description="Most popular for businesses"
              features={[
                "50 videos/month",
                "Premium templates",
                "4K export",
                "Priority support",
                "Custom branding",
                "API access",
              ]}
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="$299"
              period="month"
              description="For large organizations"
              features={[
                "Unlimited videos",
                "Custom AI models",
                "White-label solution",
                "Dedicated support",
                "Team collaboration",
                "Custom integrations",
              ]}
              popular={false}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Video Types We Create
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="text-3xl mb-3">📺</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Marketing Videos
            </h3>
            <p className="text-sm text-gray-600">
              Product demos, ads, and promotional content
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-semibold text-gray-900 mb-2">Educational</h3>
            <p className="text-sm text-gray-600">
              Tutorials, courses, and training materials
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
            <p className="text-sm text-gray-600">
              Stories, reels, and platform-specific content
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="font-semibold text-gray-900 mb-2">Corporate</h3>
            <p className="text-sm text-gray-600">
              Presentations, announcements, and internal communications
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Start Creating Videos Today
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 1,800+ creators and businesses using our AI Video Generator to
          produce professional content at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors"
          >
            Create Free Video
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
      className={`border rounded-xl p-6 ${popular ? "border-pink-500 bg-pink-50" : "border-gray-200 bg-white"}`}
    >
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
