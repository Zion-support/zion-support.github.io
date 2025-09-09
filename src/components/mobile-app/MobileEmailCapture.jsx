import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle export const MobileEmailCapture = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulate API call
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000)} else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000)}
    }, 1000)};

  const getStatusIcon = () => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-400"       />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-400"       />;
      default:
        return <Mail className="h-5 w-5 text-blue-400"       />}
  };

  const getStatusText = () => {
    switch (status) {
      case 'success':
        return 'Thank you! We\'ll notify you when the app launches.';
      case 'error':
        return 'Please enter a valid email address.';
      default:
        return 'Get early access and exclusive updates'}
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be the First to Know
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our mobile app updates and be the first to try new features before they're released to the public.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" name="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-grow bg-zion-blue-dark/70 text-white border-zion-purple/30 placeholder:text-gray-400" required/>
            <Button type="submit" disabled={isSubmitting || isSuccess} className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark font-medium">
              {isSubmitting ? "Subscribing..." : isSuccess ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-sm text-gray-300 mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>);
};
