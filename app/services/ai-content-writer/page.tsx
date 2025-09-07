export const metadata = {
  title: 'AI Content Writer | Zion Tech Group',
  description: 'AI-powered content creation platform. Generate blog posts, social media content, and marketing copy with advanced AI.',
  keywords: 'ai-content-writer, content creation, AI writing, blog posts, social media, marketing copy'
};

export default function AIContentWriterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Content Writer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered content creation platform. Generate blog posts, social media content, and marketing copy with advanced AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Blog Posts</h3>
            <p className="text-gray-300">Generate engaging blog posts on any topic with SEO optimization and proper structure.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Social Media Content</h3>
            <p className="text-gray-300">Create compelling social media posts for all platforms with appropriate tone and style.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Marketing Copy</h3>
            <p className="text-gray-300">Generate persuasive marketing copy for ads, emails, and promotional materials.</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  );
}