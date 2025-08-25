<<<<<<< HEAD
import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialShareSection: React.FC = () => {
  const shareUrl = window.location.href;
  const shareTitle = 'Zion Tech Group - AI-Powered Business Solutions';

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
      console.log('Link copied to clipboard');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="mb-8">
          <Share2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Share Zion Tech Group
          </h3>
          <p className="text-gray-600">
            Help others discover our innovative AI-powered business solutions
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Button
            onClick={shareToTwitter}
            className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
          >
            <Twitter className="w-5 h-5" />
            <span>Share on Twitter</span>
          </Button>
          
          <Button
            onClick={shareToFacebook}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
          >
            <Facebook className="w-5 h-5" />
            <span>Share on Facebook</span>
          </Button>
          
          <Button
            onClick={shareToLinkedIn}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
          >
            <Linkedin className="w-5 h-5" />
            <span>Share on LinkedIn</span>
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-2">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="px-4 py-2 border border-gray-300 rounded-l-lg bg-white text-gray-700 flex-1 max-w-md"
          />
          <Button
            onClick={copyToClipboard}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-r-lg flex items-center space-x-2"
          >
            <LinkIcon className="w-4 h-4" />
            <span>Copy</span>
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Share this page with your network and help spread the word about Zion Tech Group
        </p>
      </div>
    </section>
  );
};
=======

import { Button } from "./ui/button";
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast";
import { useTranslation } from 'react-i18next';

export function SocialShareSection() {
  const { t } = useTranslation();
  
  // Current URL is not available during SSR, guard with typeof check
  const shareUrl = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.href)
    : '';
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
  
  // Social sharing functions
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank");
  };
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
  };
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank");
  };
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link Copied!",
          description: "The link has been copied to your clipboard",
        });
      })
      .catch(() => {
        toast({
          title: t('errors.failed_to_copy'),
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        });
      });
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" aria-hidden="true" />, 
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",
      onClick: shareToTwitter
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" aria-hidden="true" />,
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80",
      onClick: shareToFacebook
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" aria-hidden="true" />,
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",
      onClick: shareToLinkedIn
    },
    {
      name: "Copy Link",
      icon: <Link className="h-5 w-5" aria-hidden="true" />,
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80",
      onClick: copyLinkToClipboard
    },
  ];

  return (
    <section className="py-12 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {shareLinks.map((link, index) => (
              <Button
                key={index}
                className={`${link.color} text-white`}
                size="sm"
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
                <span aria-hidden="true">{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
