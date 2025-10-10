<<<<<<< HEAD
'use client'
import React, { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
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
  const [isSubscribed, setIsSubscribed] = useState(false);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    }
  }

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-white/90 mb-4">
          You've successfully subscribed to our newsletter. Check your email for confirmation.
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-white/80 hover:text-white underline"
        >
          Subscribe another email
        </button>
      </div>
    )
  }

  return (
    <div className="bg-slate-800/50 rounded-lg p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-300">
          Get the latest insights on AI, IT, and technology trends delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="text-sm">
          <div className="text-2xl font-bold text-blue-400">10K+</div>
          <div className="text-gray-400">Subscribers</div>
        </div>
        <div className="text-sm">
          <div className="text-2xl font-bold text-purple-400">Weekly</div>
          <div className="text-gray-400">Updates</div>
        </div>
        <div className="text-sm">
          <div className="text-2xl font-bold text-green-400">Free</div>
          <div className="text-gray-400">Forever</div>
        </div>
      </div>
    </div>
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
