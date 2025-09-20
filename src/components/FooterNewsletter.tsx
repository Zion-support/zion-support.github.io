import React, { useState } from 'react';
import { Input } from '../../components/ui/Input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

export function FooterNewsletter(): React.ReactElement {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setEmailError('Email is required');
      return;
    }

    setIsLoading(true);
    setEmailError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setEmail('');
    } catch (error) {
      setEmailError('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Thank You!
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          You've been successfully subscribed to our newsletter.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Stay Updated
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Get the latest updates on our services and industry insights.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="newsletter-email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address for newsletter subscription
          </label>
          <Input
            type='email'
            id='newsletter-email'
            name='newsletterEmail'
            placeholder='Enter your email'
            className='flex-grow bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500 placeholder-opacity-50'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          {emailError && <p className='text-red-500 text-sm mt-1'>{emailError}</p>}
        </div>
        
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            'Subscribe to Newsletter'
          )}
        </Button>
      </form>
    </div>
  );
}