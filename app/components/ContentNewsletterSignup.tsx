'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
  features?: Array<{
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }>;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated",
  subtitle = "Get the latest news and updates delivered to your inbox",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = []
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h3>
        <p className="text-green-100">Thank you for subscribing to our newsletter.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 text-lg">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              'Subscribing...'
            ) : (
              <>
                <Mail className="w-5 h-5 mr-2" />
                {buttonText}
              </>
            )}
          </button>
        </div>
      </form>

      {features.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <feature.icon className="w-6 h-6 text-cyan-400" />
              <span className="text-gray-300">{feature.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentNewsletterSignup;