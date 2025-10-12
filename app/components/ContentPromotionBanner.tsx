

'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
'use client';

interface ContentPromotionBannerProps {
  title?: string;
  subtitle?: string;
  features?: string[];
  buttonText?: string;
 void;
  variant?: 'default' | 'premium' | 'limited';

const ContentPromotionBanner: React.FC<ContentPromotionBannerProps /> = ({
  const title = "Unlock Premium Features",
  subtitle = "Get access to advanced tools and exclusive content",
  features = [
    "Advanced Analytics",
    "Priority Support",
    "Custom Integrations",
    "24/7 Monitoring"
  ],
  buttonText = "Upgrade Now",
  onButtonClick,
  variant = 'default'
    switch (variant) {
      case 'premium':
        return 'bg-gradient-to-r from-purple-600 to-pink-600';
      case 'limited':
        return 'bg-gradient-to-r from-red-600 to-orange-600';
      default: return 'bg-gradient-to-r from-blue-600 to-purple-600';
  };
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918

export default function ContentPromotionBanner() {
  return (
<<<<<<< HEAD
      {/* Background Pattern */}

        </div></div>

            <h3 className="text-2 xl lg: text-3 xlfont-boldmb-2">{title}</h3>
            <p className="text-lgtext-white/90mb-4">{subtitle}</p>

 (
    
                  <span>{feature}</span>

              ))}

              {buttonText}

  );
};

export default ContentPromotionBanner;

=======
    <>
      <Helmet>
        <title>Content Promotion Banner - Zion Tech Group</title>
        <meta name="description" content="Professional content promotion banner by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Content Promotion Banner</h1>
          <p className="text-lg text-gray-300 mb-8">Professional content promotion banner coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
