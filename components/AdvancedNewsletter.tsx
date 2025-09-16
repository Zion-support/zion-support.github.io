<<<<<<< HEAD
import React from 'react';
=======
"use client";
'use client';

import React{ useState } from 'react';

MailSendCheckCircle

export default function AdvancedNewsletter() {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail(', ');
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const AdvancedNewsletter: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AdvancedNewsletter</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AdvancedNewsletter;