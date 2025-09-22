import React from 'react';
import { Button } from './ui/Button';

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
}

export default function SocialShareButtons({ 
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Check this out!'
}: SocialShareButtonsProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  return (
    <div className="flex gap-2 mt-4">
      <Button 
        asChild 
        variant="outline" 
        size="sm"
      >
        <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </Button>
      <Button 
        asChild 
        variant="outline" 
        size="sm"
      >
        <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </Button>
      <Button 
        asChild 
        variant="outline" 
        size="sm"
      >
        <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </Button>
    </div>
  );
}