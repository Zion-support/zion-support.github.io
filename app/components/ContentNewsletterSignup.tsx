'use client';
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  features = [
    {
      icon: CheckCircle,
      text: "Weekly industry insights"
    },
    {
      icon: CheckCircle,
      text: "Exclusive content and resources"
    },
    {
      icon: CheckCircle,
      text: "Early access to new features"
    }
  ]
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate newsletter subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
        <h3 className="text-lg font-semibold mb-2">Thank you for subscribing!</h3>
        <p>You'll receive our latest insights and updates soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{subtitle}</p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-center">
            <feature.icon className="w-4 h-4 text-cyan-400 mr-2" />
            <span>{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;