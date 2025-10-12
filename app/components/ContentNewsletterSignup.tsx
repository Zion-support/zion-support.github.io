import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContentNewsletterSignupProps {
  className?: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '' }) => {
  return (
    <div className={`bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl p-8 border border-cyan-400/20 ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          Stay Updated with Our Latest News
        </h3>
        <p className="text-gray-300 mb-6">
          Subscribe to our newsletter for the latest updates on AI and technology solutions.
        </p>
        <Link
          to="/contact"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;