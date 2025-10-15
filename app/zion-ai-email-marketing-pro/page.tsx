import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AIEmailMarketingProPage: React.FC = () => {
  const [campaign, setCampaign] = useState({
    name: '',
    subject: '',
    audience: '',
    content: ''
  });
  const [campaigns, setCampaigns] = useState([]);

  const handleCreateCampaign = () => {
    if (campaign.name && campaign.subject && campaign.audience && campaign.content) {
      setCampaigns([...campaigns, { ...campaign, id: Date.now(), status: 'Draft' }]);
      setCampaign({ name: '', subject: '', audience: '', content: '' });
    }
  };

  const audiences = [
    'New Subscribers',
    'Existing Customers',
    'VIP Members',
    'Inactive Users',
    'High-Value Customers',
    'Cart Abandoners'
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Email Marketing Pro - Advanced Email Automation Platform</title>
        <meta name="description" content="AI-powered email marketing platform with personalization, automation, and advanced analytics. Maximize your email marketing ROI with intelligent campaigns." />
        <meta name="keywords" content="email marketing, AI email automation, email personalization, email campaigns, marketing automation, email analytics" />
      </Helmet>
      
      <div className="min-h-screen futuristic-bg animated-bg">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold neon-text mb-8 floating">
              Zion AI Email Marketing Pro
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="neon-text-purple">AI-powered</span> email marketing with personalization, automation, and advanced analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="neon-button glow-border pulse-neon">
                Start Free Trial
              </button>
              <button className="neon-button glow-border pulse-neon-slow" style={{background: 'linear-gradient(135deg, #bf00ff 0%, #ff0080 100%)', borderColor: '#bf00ff'}}>
                View Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="futuristic-card p-8 floating">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold neon-text-green mb-4">AI Content Generation</h3>
              <p className="text-gray-300 mb-6">
                Generate compelling email content with AI that understands your brand voice and audience preferences.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Personalized subject lines</li>
                <li>• Dynamic content blocks</li>
                <li>• A/B testing automation</li>
                <li>• Brand voice consistency</li>
                <li>• Content optimization</li>
              </ul>
            </div>

            <div className="futuristic-card p-8 floating-delayed">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold neon-text-purple mb-4">Smart Segmentation</h3>
              <p className="text-gray-300 mb-6">
                AI-powered audience segmentation ensures your emails reach the right people at the right time.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Behavioral segmentation</li>
                <li>• Demographic targeting</li>
                <li>• Engagement scoring</li>
                <li>• Predictive analytics</li>
                <li>• Dynamic lists</li>
              </ul>
            </div>

            <div className="futuristic-card p-8 floating-slow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold neon-text-pink mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive analytics and reporting to track performance and optimize your email campaigns.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Real-time performance tracking</li>
                <li>• ROI analysis</li>
                <li>• Engagement metrics</li>
                <li>• Conversion tracking</li>
                <li>• Predictive insights</li>
              </ul>
            </div>
          </div>

          {/* Campaign Builder Tool */}
          <div className="futuristic-card p-12 mb-20">
            <h2 className="text-4xl font-bold neon-text mb-8 text-center">Create Your Email Campaign</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Campaign Name</label>
                  <input 
                    type="text" 
                    value={campaign.name}
                    onChange={(e) => setCampaign({...campaign, name: e.target.value})}
                    placeholder="Enter campaign name..."
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject Line</label>
                  <input 
                    type="text" 
                    value={campaign.subject}
                    onChange={(e) => setCampaign({...campaign, subject: e.target.value})}
                    placeholder="Enter subject line..."
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Target Audience</label>
                  <select 
                    value={campaign.audience} 
                    onChange={(e) => setCampaign({...campaign, audience: e.target.value})}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none"
                  >
                    <option value="">Select audience...</option>
                    {audiences.map(audience => (
                      <option key={audience} value={audience}>{audience}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email Content</label>
                  <textarea 
                    value={campaign.content}
                    onChange={(e) => setCampaign({...campaign, content: e.target.value})}
                    placeholder="Enter your email content..."
                    className="w-full h-32 p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-neon-blue focus:outline-none resize-none"
                  />
                </div>
                
                <button 
                  onClick={handleCreateCampaign}
                  className="w-full neon-button glow-border pulse-neon"
                >
                  Create Campaign
                </button>
              </div>
              
              <div>
                <h3 className="text-xl font-bold neon-text-purple mb-4">Your Campaigns</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {campaigns.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">No campaigns created yet</p>
                  ) : (
                    campaigns.map((camp, index) => (
                      <div key={camp.id || index} className="futuristic-card p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-white font-medium">{camp.name}</p>
                            <p className="text-gray-400 text-sm">{camp.subject}</p>
                            <p className="text-gray-500 text-xs">{camp.audience}</p>
                          </div>
                          <div className="text-right">
                            <span className="px-2 py-1 bg-neon-green text-black text-xs rounded-full">
                              {camp.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold neon-text-purple mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="futuristic-card p-8">
                <h3 className="text-2xl font-bold neon-text-green mb-4">Starter</h3>
                <div className="text-4xl font-bold neon-text-green mb-4">$39<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• 5,000 emails/month</li>
                  <li>• Basic templates</li>
                  <li>• Email analytics</li>
                  <li>• 1 user account</li>
                  <li>• Email support</li>
                </ul>
                <button className="w-full neon-button">Get Started</button>
              </div>
              
              <div className="futuristic-card p-8 glow-border">
                <div className="text-center mb-4">
                  <span className="neon-text-pink font-bold">POPULAR</span>
                </div>
                <h3 className="text-2xl font-bold neon-text-purple mb-4">Professional</h3>
                <div className="text-4xl font-bold neon-text-purple mb-4">$99<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• 25,000 emails/month</li>
                  <li>• AI content generation</li>
                  <li>• Advanced segmentation</li>
                  <li>• A/B testing</li>
                  <li>• Priority support</li>
                </ul>
                <button className="w-full neon-button" style={{background: 'linear-gradient(135deg, #bf00ff 0%, #ff0080 100%)', borderColor: '#bf00ff'}}>
                  Get Started
                </button>
              </div>
              
              <div className="futuristic-card p-8">
                <h3 className="text-2xl font-bold neon-text-pink mb-4">Enterprise</h3>
                <div className="text-4xl font-bold neon-text-pink mb-4">$299<span className="text-lg text-gray-300">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Unlimited emails</li>
                  <li>• Custom AI models</li>
                  <li>• API integration</li>
                  <li>• White-label solution</li>
                  <li>• Dedicated support</li>
                </ul>
                <button className="w-full neon-button" style={{background: 'linear-gradient(135deg, #ff0080 0%, #ff6b00 100%)', borderColor: '#ff0080'}}>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="futuristic-card p-12 text-center holographic">
            <h2 className="text-4xl font-bold neon-text mb-6">
              Ready to Revolutionize Your Email Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses using our AI-powered email marketing platform to increase engagement and drive conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="neon-button glow-border pulse-neon">
                Start Free Trial
              </button>
              <div className="text-gray-300">
                <p className="font-semibold">Call: <span className="neon-text-green">+1 302 464 0950</span></p>
                <p className="font-semibold">Email: <span className="neon-text-purple">kleber@ziontechgroup.com</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIEmailMarketingProPage;