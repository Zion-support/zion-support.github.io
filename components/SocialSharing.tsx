import React, { useState } from 'react';
import { 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Link as LinkIcon, 
  Copy, 
  Check,
  MessageCircle,
  Mail
} from 'lucide-react';

interface SocialSharingProps {
  url?: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'compact' | 'floating';
  className?: string;
}

const SocialSharing: React.FC<SocialSharingProps> = ({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = '',
  description = '',
  variant = 'default',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareData = {
    url,
    title,
    description
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const variants = {
    default: {
      container: 'relative',
      button: 'inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors',
      dropdown: 'absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50',
      item: 'flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors'
    },
    compact: {
      container: 'relative',
      button: 'inline-flex items-center px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors text-sm',
      dropdown: 'absolute top-full right-0 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50',
      item: 'flex items-center px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors text-sm'
    },
    floating: {
      container: 'fixed bottom-6 right-6 z-40',
      button: 'w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center',
      dropdown: 'absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2',
      item: 'flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors'
    }
  };

  const currentVariant = variants[variant];

  return (
    <div className={`${currentVariant.container} ${className}`}>
      <button
        onClick={handleNativeShare}
        className={currentVariant.button}
        aria-label="Share content"
      >
        <Share2 className="w-4 h-4" />
        {variant !== 'floating' && <span className="ml-2">Share</span>}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className={currentVariant.dropdown}>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={currentVariant.item}
              onClick={() => setIsOpen(false)}
            >
              <Twitter className="w-4 h-4 mr-3 text-blue-400" />
              Twitter
            </a>
            
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={currentVariant.item}
              onClick={() => setIsOpen(false)}
            >
              <Linkedin className="w-4 h-4 mr-3 text-blue-600" />
              LinkedIn
            </a>
            
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={currentVariant.item}
              onClick={() => setIsOpen(false)}
            >
              <Facebook className="w-4 h-4 mr-3 text-blue-700" />
              Facebook
            </a>
            
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={currentVariant.item}
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="w-4 h-4 mr-3 text-green-500" />
              WhatsApp
            </a>
            
            <a
              href={shareLinks.email}
              className={currentVariant.item}
              onClick={() => setIsOpen(false)}
            >
              <Mail className="w-4 h-4 mr-3 text-gray-500" />
              Email
            </a>
            
            <div className="border-t border-gray-200 my-1" />
            
            <button
              onClick={handleCopyLink}
              className={currentVariant.item}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-3 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <LinkIcon className="w-4 h-4 mr-3 text-gray-500" />
                  Copy Link
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SocialSharing;