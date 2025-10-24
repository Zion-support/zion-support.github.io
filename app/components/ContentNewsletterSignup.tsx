'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubscribe?: (_email: string) => void;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = 'Stay Updated',
  description = 'Get the latest news and updates from Zion Tech Group',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  onSubscribe,
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubscribe) {
        onSubscribe(email);
      }
      
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="newsletter-signup newsletter-success">
        <div className="success-icon">
          <CheckCircle size={48} className="text-green-500" />
        </div>
        <h3 className="success-title">Thank you for subscribing!</h3>
        <p className="success-message">
          You'll receive our latest updates and news in your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="newsletter-signup">
      <div className="newsletter-content">
        <div className="newsletter-icon">
          <Mail size={32} className="text-blue-500" />
        </div>
        <h3 className="newsletter-title">{title}</h3>
        <p className="newsletter-description">{description}</p>
        
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="newsletter-input"
              required
            />
            <button
              type="submit"
              disabled={isLoading || !email}
              className="newsletter-button"
            >
              {isLoading ? 'Subscribing...' : buttonText}
            </button>
          </div>
        </form>
        
        <p className="newsletter-privacy">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;