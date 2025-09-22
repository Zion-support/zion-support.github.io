import React from 'react';

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function SocialShareButtons({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = '',
  description = '',
  className = ""
}: SocialShareButtonsProps) {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = encodeURIComponent(description);

  const socialLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      icon: '🐦'
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: '💼'
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: '📘'
    },
    {
      name: 'Email',
      url: `mailto:?subject=${shareTitle}&body=${shareDescription}%0A%0A${shareUrl}`,
      icon: '📧'
    }
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      <span className="text-sm text-gray-600 mr-2">Share:</span>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          title={`Share on ${social.name}`}
        >
          <span>{social.icon}</span>
          <span className="text-sm font-medium">{social.name}</span>
        </a>
      ))}
    </div>
  );
}