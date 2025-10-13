<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Welcome to Our Community!
          </h2>
=======
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
interface ContentNewsletterSignupProps {
  className?: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  className = "",
}) => {
  const [email, setEmail] = useState("");
=======
'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

=======
'use client'
import React, { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
=======
    text: string;)
}>;
  onSubscribe?: (email: string) => void;);
    text: string]
    }>;
  onSubscribe?: (email: string) => void]
    };
const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps></ContentNewsletterSignupProps> = ({
  title = "Stay Updated with Our Latest Insights",
  subtitle = "Get exclusive content, industry insights, and early access to new features delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe Now",
  features = [
    {
      icon: CheckCircle,
      text: "Weekly industry insights"]
    },
    {
      icon: Star,
      text: "Exclusive content and tips"]
    },
    {
      icon: Users,
      text: "Join 10,000+ subscribers"]
    },
    {
      icon: Globe,
      text: "Global community access";);
  ],
}) => {
  const [email, setEmail] = useState('');
<<<<<<< HEAD
  const [isSubmitting, setIsSubmitting] = useState(false);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  const [isSubscribed, setIsSubscribed] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      setEmail("");
    } finally {
      setIsLoading(false);
=======
<<<<<<< HEAD
    if (!email) return
    setIsSubmitting(true)
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false)
      setIsLoading(false)
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    }
  };

  if (isSubscribed) {
    return (
      <div
        className={`bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center ${className}`}
      >
        <CheckCircle className="w-8 h-8 mx-auto mb-2" />
        <h3 className="text-lg font-semibold mb-2">
          Thank you for subscribing!
        </h3>
        <p>You'll receive our latest updates and exclusive content.</p>
      </div>
    )
  }

  return (
    <div
      className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 ${className}`}
    >
      <div className="text-center mb-6">
        <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-300">
          Get the latest AI and tech insights delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Subscribing..." : "Subscribe Now"}
        </button>
      </form>

      <p className="text-xs text-gray-400 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
<<<<<<< HEAD
  );
};

export default ContentNewsletterSignup;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e
=======
  )
}

export default ContentNewsletterSignup
=======
    if (!email) return;
    setIsLoading(true);
    try {
      if (onSubscribe) {
        await onSubscribe(email)]
    } else {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000)););
      setIsSubscribed(true);
      setEmail('');)
} catch (error) {
      // console.error removed for production
)
} finally {
      setIsLoading(false););
  }
  if (isSubscribed) {
    return (<div className="bg-gradient-to-r from-green-500 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white
            Welcome to Our Community!
          <
          <p className="text-xl text-blue-100 mb-8">
            Thank you for subscribing. You'll receive our latest insights and updates soon.
          <
          <button)
            onClick = { () => setIsSubscribed(false) }
            className="text-white underline hover:text-blue-200 transition-colors"
          >
            Subscribe another email
          <
        <
      <
    );
  };
  return (<div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">
          {/* Content *
          <div>
            <h2 className="text-4xl m,
    d:text-5xl font-bold text-white mb-6">
              {title}
            <
            <p className="text-xl text-blue-100 mb-8">
              {subtitle}
            <
            <div className="space-y-4">)
              {features.map((feature, index) => (<div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-white
                    <feature.icon className="w-4 h-4 text-white" 
                  <
                  <span className="text-blue-100">{feature.text}<
                <)
              ))};
            <
          <
          {/* Newsletter Form *
          <div className="bg-white/10 backdrop-blur-sm border border-white
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                <
                <input
                  type="email"
                  id="email"
                  value = { email }
                  onChange = { (e) => setEmail(e.target.value) }
                  placeholder = { placeholder }
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus: outline-none focus:ring-2 focu,
    s:ring-white
              <
              <button type="submit"
                disabled = { isLoading || !email }
                className="w-full bg-white text-purple-600 font-bold py-3 px-6 rounded-lg hover: bg-blue-50 disabled:opacity-50 disable,
    d:cursor-not-allowed transition-all duration-300 flex items-center justify-center">
                {isLoading ? (<>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"><
                    Subscribing...
                  <)
                ) : (<>
                    {buttonText}
                We respect your privacy. Unsubscribe at any time.
              <
            <
          <
        <
      <
    <
  );
};
export default ContentNewsletterSignup;
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
