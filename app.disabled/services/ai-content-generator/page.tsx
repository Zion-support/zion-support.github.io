export const metadata = {
  title: 'AI Content Generator | Zion Tech Group',
  description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
  keywords: 'AI content generator, content creation, blog writing, social media content, marketing copy',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'AI Content Generator | Zion Tech Group',
    description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Generator | Zion Tech Group',
    description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials.',
  },
};

export default function AIContentGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AI Content Generator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced AI-powered content creation platform for blogs, social media, and marketing materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Blog Content</h3>
            <p className="text-gray-600 mb-4">
              Generate high-quality blog posts and articles with AI assistance.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• SEO-optimized articles</li>
              <li>• Research-backed content</li>
              <li>• Multiple writing styles</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h3>
            <p className="text-gray-600 mb-4">
              Create engaging social media posts and captions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Platform-specific content</li>
              <li>• Hashtag optimization</li>
              <li>• Trend integration</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Copy</h3>
            <p className="text-gray-600 mb-4">
              Generate compelling marketing materials and ad copy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  );
};