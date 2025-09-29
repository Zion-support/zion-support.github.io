import React, { useState } from 'react';
import { blogPosts } from '../content/blog-posts';
import { latestInsights } from '../content/insights';

interface EnhancedNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  showContentPreview?: boolean;
  className?: string;
}

export const EnhancedNewsletterSignup: React.FC<EnhancedNewsletterSignupProps> = ({
  title = "Stay Ahead with Our Latest Insights",
  subtitle = "Get exclusive access to cutting-edge technology insights, industry analysis, and expert guidance delivered to your inbox.",
  showContentPreview = true,
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // Get latest content for preview
  const latestBlogPost = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  
  const latestInsight = latestInsights
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  const topics = [
    'AI & Automation',
    'Quantum Computing',
    'Edge Computing',
    'Cybersecurity',
    'Data Analytics',
    'Cloud Computing',
    'Digital Transformation',
    'IoT & Smart Devices',
    'Blockchain Technology',
    '5G & Connectivity'
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Exclusive Content',
      description: 'Access to premium insights and analysis not available elsewhere'
    },
    {
      icon: '📊',
      title: 'Industry Reports',
      description: 'Quarterly reports on technology trends and market analysis'
    },
    {
      icon: '🎯',
      title: 'Actionable Insights',
      description: 'Practical guidance you can implement in your business today'
    },
    {
      icon: '🔒',
      title: 'No Spam Policy',
      description: 'Respect your inbox with valuable content only, no fluff'
    }
  ];

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section className={`py-16 bg-gradient-to-br from-green-50 to-blue-50 ${className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the Zion Tech Group Community!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for subscribing! You'll receive our latest insights and exclusive content in your inbox soon.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✅ Confirmation email sent to {email}</li>
                <li>📧 Weekly insights starting next week</li>
                <li>🎁 Exclusive content and early access to reports</li>
                <li>💬 Invitation to our private community forum</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setEmail('');
                setSelectedTopics([]);
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 bg-gradient-to-br from-blue-50 to-purple-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content Preview */}
          {showContentPreview && (
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {title}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {subtitle}
                </p>
              </div>

              {/* Latest Content Preview */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Latest from Our Experts</h3>
                
                {/* Latest Blog Post Preview */}
                {latestBlogPost && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Featured Article
                      </span>
                      <span className="mx-2">•</span>
                      <span>{new Date(latestBlogPost.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{latestBlogPost.readTime}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {latestBlogPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {latestBlogPost.description}
                    </p>
                  </div>
                )}

                {/* Latest Insight Preview */}
                {latestInsight && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                        Quick Insight
                      </span>
                      <span className="mx-2">•</span>
                      <span>{new Date(latestInsight.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <span>{latestInsight.readMinutes} min read</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {latestInsight.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {latestInsight.summary}
                    </p>
                  </div>
                )}
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-2xl">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                      <p className="text-gray-600 text-xs">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column - Signup Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Join 10,000+ Technology Leaders
              </h3>
              <p className="text-gray-600">
                Get exclusive insights delivered to your inbox weekly
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Topic Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Topics of Interest (Optional)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {topics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => handleTopicToggle(topic)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                        selectedTopics.includes(topic)
                          ? 'bg-blue-100 border-blue-300 text-blue-700'
                          : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Subscribe to Our Newsletter'
                )}
              </button>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center">
                By subscribing, you agree to receive our newsletter and marketing emails. 
                You can unsubscribe at any time. We respect your privacy.
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="text-center">
                  <div className="font-bold text-gray-900">10,000+</div>
                  <div>Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900">4.9/5</div>
                  <div>Rating</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-gray-900">Weekly</div>
                  <div>Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedNewsletterSignup;