export const metadata = {
  title: 'AI Social Media Scheduler | Zion Tech Group',
  description: 'AI-powered social media scheduling and management.',
  keywords: 'ai-social-media-scheduler, services, business, technology'

export const metadata = {
  title: "AI Social Media Scheduler | Zion Tech Group",
  description:
    "Intelligent social media scheduling tool with AI-powered content optimization, hashtag suggestions, and optimal posting times for maximum engagement.",
  keywords:
    "AI social media scheduler, social media automation, content optimization, hashtag suggestions, social media management, AI posting",
};

interface FeatureProps {
  title: string;
  description: string;
  icon: string;

}
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Social Media Scheduler
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered social media scheduling and management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ai-social-media-scheduler solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ai-social-media-scheduler solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

        </div>
        <div className="mt-8 text-sm">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>Email: kleber@ziontechgroup.com</p>
        </div>
      </section>
    </div>
  );
}

