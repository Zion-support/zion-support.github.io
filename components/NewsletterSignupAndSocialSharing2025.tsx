import React, { useState } from 'react';
import { Mail, Send, Check, Twitter, Linkedin, Facebook, Share2, Copy, ExternalLink } from 'lucide-react';

const NewsletterSignupAndSocialSharing2025: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  const handleSocialShare = (platform: string) => {
    const url = window.location.href;
    const title = "Zion Tech Group - Revolutionary AI Solutions";
    const text = "Discover cutting-edge AI solutions, quantum computing breakthroughs, and revolutionary technology services.";
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const socialStats = [
    { platform: 'Twitter', followers: '125K', icon: Twitter, color: 'from-blue-400 to-blue-600' },
    { platform: 'LinkedIn', followers: '89K', icon: Linkedin, color: 'from-blue-600 to-blue-800' },
    { platform: 'Facebook', followers: '156K', icon: Facebook, color: 'from-blue-500 to-blue-700' }
  ];

  const newsletterBenefits = [
    "Exclusive AI insights and predictions",
    "Early access to new content and features",
    "Weekly automation tips and tutorials",
    "Invitation to exclusive webinars and events",
    "Direct access to our AI experts"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Ahead with Our Newsletter
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Get exclusive access to the latest AI breakthroughs, quantum computing insights, 
                and automation strategies delivered directly to your inbox.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>

                <div className="text-sm text-gray-400 text-center">
                  Join 50,000+ professionals already subscribed
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Welcome to the Future!</h4>
                <p className="text-gray-300 mb-6">
                  You've successfully subscribed to our newsletter. Check your email for confirmation.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-blue-400 hover:text-blue-300 font-medium"
                >
                  Subscribe Another Email
                </button>
              </div>
            )}

            {/* Newsletter Benefits */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">What you'll get:</h4>
              <ul className="space-y-2">
                {newsletterBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Share the Revolution
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Help others discover the future of AI and technology. 
                Share our content and join our growing community.
              </p>
            </div>

            {/* Social Share Buttons */}
            <div className="space-y-4 mb-8">
              <button
                onClick={() => handleSocialShare('twitter')}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Twitter className="w-5 h-5 mr-3" />
                Share on Twitter
              </button>

              <button
                onClick={() => handleSocialShare('linkedin')}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 mr-3" />
                Share on LinkedIn
              </button>

              <button
                onClick={() => handleSocialShare('facebook')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Facebook className="w-5 h-5 mr-3" />
                Share on Facebook
              </button>

              <button
                onClick={handleCopyLink}
                className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/30 flex items-center justify-center"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-3" />
                    Link Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-3" />
                    Copy Link
                  </>
                )}
              </button>
            </div>

            {/* Social Stats */}
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Join Our Community</h4>
              <div className="grid grid-cols-1 gap-4">
                {socialStats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mr-3`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300">{stat.platform}</span>
                    </div>
                    <div className="text-white font-semibold">{stat.followers}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow Us CTA */}
            <div className="mt-6 text-center">
              <p className="text-gray-300 mb-4">Follow us for daily AI insights and updates</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://twitter.com/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://linkedin.com/company/zion-tech-group"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://facebook.com/ziontechgroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignupAndSocialSharing2025;