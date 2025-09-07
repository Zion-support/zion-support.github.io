export const metadata = {
  title: 'AI Content Writer | Zion Tech Group',
  description: 'AI-powered content creation platform. Generate blog posts, social media content, and marketing copy with advanced AI.',
};

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-orange-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AIContentWriterPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Content Writer</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          AI-powered content creation platform that generates high-quality blog posts, social media content,
          and marketing copy. Save time while maintaining brand voice and SEO optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          title="Content Generation"
          details={[
            'Blog posts & articles',
            'Social media content',
            'Email marketing copy',
            'Product descriptions',
            'SEO-optimized content',
          ]}
        />
        <FeatureCard
          title="AI Features"
          details={[
            'Natural language processing',
            'Brand voice adaptation',
            'Tone customization',
            'Plagiarism detection',
            'Content optimization',
          ]}
        />
        <FeatureCard
          title="Workflow Tools"
          details={[
            'Content calendar',
            'Team collaboration',
            'Version control',
            'Approval workflows',
            'Analytics dashboard',
          ]}
        />
      </div>

      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Content?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Start creating high-quality content at scale with our AI-powered platform.
          Boost your productivity and maintain consistent brand voice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/services"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View All Services
          </a>
        </div>
      </div>
    </div>
  );
}