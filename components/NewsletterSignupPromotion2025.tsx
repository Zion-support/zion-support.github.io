<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React, { useState, useEffect } from 'react';

MailArrowRightCheckCircleStarZapTrendingUpUsersAward

const NewsletterSignupPromotion2025 = () => {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log('Email subscribed:'email);
    }
  };

  const benefits = [
    "Exclusive AI insights and trends",
    "Early access to new features",
    "Industry reports and case studies",
    "Expert webinars and workshops",
    "Special offers and discounts"
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />value: "50,000+"label: "Subscribers" },
    { icon: <Star className="w-6 h-6" />value: "4.9/5"label: "Rating" },
    { icon: <TrendingUp className="w-6 h-6" />value: "95%"label: "Open Rate" },
    { icon: <Award className="w-6 h-6" />value: "Weekly"label: "Updates" }
  ];

  if (isSubscribed) {
    return (
      <div className="py-16 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0scale: 0.8 }}
            animate={{ opacity: 1scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              'You', 're now part of our exclusive community. Check your email for a special welcome gift.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Explore Our Solutions
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Follow Us on Social
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const NewsletterSignupPromotion2025: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">NewsletterSignupPromotion2025</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default NewsletterSignupPromotion2025;