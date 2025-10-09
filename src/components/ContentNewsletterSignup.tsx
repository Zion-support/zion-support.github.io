import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Send, Zap, Star, Award } from 'lucide-react';

interface ContentNewsletterSignupProps {
  className?: string;
}

interface NewsletterFormData {
  email: string;
  name: string;
  interests: string[];
  company: string;
}

export default function ContentNewsletterSignup({ className = '' }: ContentNewsletterSignupProps) {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
    name: '',
    interests: [],
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const interestOptions = [
    { id: 'ai-solutions', label: 'AI Solutions', icon: '🤖' },
    { id: 'quantum-computing', label: 'Quantum Computing', icon: '⚛️' },
    { id: 'automation', label: 'Process Automation', icon: '⚙️' },
    { id: 'analytics', label: 'Data Analytics', icon: '📊' },
    { id: 'security', label: 'Cybersecurity', icon: '🔒' },
    { id: 'cloud', label: 'Cloud Services', icon: '☁️' },
    { id: 'marketing', label: 'AI Marketing', icon: '📢' },
    { id: 'healthcare', label: 'AI Healthcare', icon: '🏥' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setIsSuccess(true);
      setFormData({
        email: '',
        name: '',
        interests: [],
        company: ''
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-8 text-center ${className}`}>
        <div className="max-w-md mx-auto">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Welcome to Zion Tech Group!
          </h3>
          <p className="text-white/90 mb-6">
            Thank you for subscribing! You'll receive our latest insights, updates, and exclusive offers.
          </p>
          <div className="bg-white/20 rounded-lg p-4 mb-6">
            <p className="text-white text-sm">
              <strong>What's next?</strong><br />
              • Check your email for confirmation<br />
              • Access to exclusive content<br />
              • Priority support and consultation
            </p>
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Subscribe Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-slate-900 rounded-lg p-8 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">
              Stay Ahead with AI Insights
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get exclusive access to the latest AI trends, case studies, and expert insights delivered to your inbox.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Exclusive Content</h3>
            <p className="text-gray-300 text-sm">Access to premium research and insights</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Early Access</h3>
            <p className="text-gray-300 text-sm">Be the first to know about new features</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Expert Tips</h3>
            <p className="text-gray-300 text-sm">Practical advice from our AI experts</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-white font-medium mb-2">
              Company (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
              placeholder="Enter your company name"
            />
          </div>

          {/* Interests */}
          <div>
            <label className="block text-white font-medium mb-4">
              Areas of Interest (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {interestOptions.map(option => (
                <label
                  key={option.id}
                  className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    formData.interests.includes(option.id)
                      ? 'bg-cyan-500 border-cyan-400 text-white'
                      : 'bg-slate-800 border-slate-600 text-gray-300 hover:border-slate-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(option.id)}
                    onChange={() => handleInterestToggle(option.id)}
                    className="sr-only"
                  />
                  <span className="text-lg">{option.icon}</span>
                  <span className="text-sm font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center space-x-2 text-red-400 bg-red-900/20 p-3 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || !formData.email || !formData.name}
              className="cyber-button px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Subscribe Now</span>
                </>
              )}
            </button>
          </div>

          {/* Privacy Notice */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              By subscribing, you agree to our{' '}
              <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-cyan-400 hover:text-cyan-300">
                Terms of Service
              </a>
              . You can unsubscribe at any time.
            </p>
          </div>
        </form>

        {/* Social Proof */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Join 10,000+ professionals who trust our insights
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-xs">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-xs">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Weekly</div>
                <div className="text-xs">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}