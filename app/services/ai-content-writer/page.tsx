import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';


function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-indigo-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI Content Writer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered content creation platform that generates high-quality blog
            posts, social media content, and marketing copy. Save time while
            maintaining brand voice and SEO optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            title="Content Generation"
            details={[
              "Blog posts & articles",
              "Social media content",
              "Email marketing copy",
              "Product descriptions",
              "SEO-optimized content",
            ]}
          />
          <FeatureCard
            title="AI Features"
            details={[
              "GPT-4 powered writing",
              "Brand voice training",
              "Tone adjustment",
              "Plagiarism detection",
              "Content optimization",
            ]}
          />
          <FeatureCard
            title="Workflow & Collaboration"
            details={[
              "Content calendar",
              "Team collaboration",
              "Approval workflows",
              "Version control",
              "Performance analytics",
            ]}
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Scale Your Content?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start creating high-quality content at scale with our AI-powered
            platform. Perfect for marketing teams, agencies, and content creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}