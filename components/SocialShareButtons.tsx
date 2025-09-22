import React from 'react';
import { Button } from './ui/Button';

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
  className = ''
}: SocialShareButtonsProps) {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareDescription = encodeURIComponent(description);

  const socialLinks = [
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
      icon: '🐦'
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: '💼'
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: '📘'
    },
    {
      name: 'Email',
      href: `mailto:?subject=${shareTitle}&body=${shareDescription}%0A%0A${shareUrl}`,
      icon: '📧'
    }
  ];

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <span className="text-sm font-medium text-gray-700 mr-2">Share:</span>
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          href={social.href}
          variant="outline"
          size="sm"
          className="text-sm"
        >
          <span className="mr-1">{social.icon}</span>
          {social.name}
        </Button>
      ))}
    </div>
  );
}