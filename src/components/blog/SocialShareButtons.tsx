<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Button  } from '@/components/ui/button';
=======
<<<<<<< HEAD
import React from 'react'
import { Button } from '@/components/ui/button'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react'
import { toast } from '@/hooks/use-toast';
interface SocialShareButtonsProps {
<<<<<<< HEAD
  title: string
<<<<<<< HEAD
=======
  title: string;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SocialShareButtons({ title }: SocialShareButtonsProps) {
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
=======
=======
export function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const shareUrl = null;
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.href)
      : ''
  const shareText = encodeURIComponent(title)
=======
import React from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast',;
interface SocialShareButtonsProps {;
  title: string;
}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function SocialShareButtons({ title }: SocialShareButtonsProps) {

  const shareUrl =
<<<<<<< HEAD
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.href)
      : ''
  const shareText = encodeURIComponent(title)
=======
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '',
  const shareText = encodeURIComponent(title),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
      '_blank'
    )
<<<<<<< HEAD
  }
  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
      '_blank'
    )
  }
  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
      '_blank'
    )
  }
<<<<<<< HEAD
  const copyLink = () => {
    if (typeof window === 'undefined') return
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  },

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')
  },

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')
  },

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const copyLink = () => {
    if (typeof window === 'undefined') return,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => toast.error('Failed to copy link'))
<<<<<<< HEAD
  }
  const buttons = [
    {
      icon: <Twitter className='h-4 w-4' />
      label: 'Twitter'
      onClick: shareToTwitter
    }
    {
      icon: <Facebook className='h-4 w-4' />
      label: 'Facebook'
      onClick: shareToFacebook
    }
    {
      icon: <Linkedin className='h-4 w-4' />
      label: 'LinkedIn'
      onClick: shareToLinkedIn
    }
    {
      icon: <LinkIcon className='h-4 w-4' />
      label: 'Copy Link'
      onClick: copyLink
    }
  ]

  return (
    <div className='mt-12 flex flex-wrap gap-2'>
      {buttons.map(btn => (
        <Button
          key={btn.label}
          variant='outline'
          size='sm'
          onClick={btn.onClick}
          aria-label={btn.label}
        >          {btn.icon}
          <span>{btn.label}</span>
        </Button>
      ))}
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
  )
}
}
=======
<<<<<<< HEAD
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
    </div>;
  );
};
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  },

  const buttons = [
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },
    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },
    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn },
    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink }],

  return (
    <div className="mt-12 flex flex-wrap gap-2">
      {buttons.map((btn) => (
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>
;
export function SocialShareButtons({ title }: SocialShareButtonsProps) {;
  const shareUrl =;
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '',;
  const shareText = encodeURIComponent(title),;
  const shareToTwitter = () => {;
    window.open(;
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,;
      '_blank';
    );
  },;
  const shareToFacebook = () => {;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
  },;
  const shareToLinkedIn = () => {;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
  },;
  const copyLink = () => {;
    if (typeof window === 'undefined') return,;
    navigator.clipboard;
      .writeText(window.location.href);
      .then(() => toast.success('Link copied to clipboard'));
      .catch(() => toast.error('Failed to copy link'));
  },;
  const buttons = [;
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },;
    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },;
    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn };
    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink }];
  return (;
    <div className="mt-12 flex flex-wrap gap-2">;
      {buttons.map((btn) => (;
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>;
          {btn.icon}
          <span>{btn.label}</span>;
        </Button>;
      ))}
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
