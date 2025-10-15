import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
            <p className="text-gray-300 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies to improve your browsing experience, analyze site traffic, and personalize content. 
              We also use cookies for security purposes and to remember your preferences.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
            <p className="text-gray-300 mb-6">
              You can control and manage cookies through your browser settings. However, disabling cookies may 
              affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our cookie policy, please contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;
