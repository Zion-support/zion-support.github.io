<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { Button  } from '@/components/ui/button';
import React from 'react'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react'
import { toast } from '@/hooks/use-toast';
interface SocialShareButtonsProps {
  title: string
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { Button  } from '@/components/ui/button';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const shareUrl = null;
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.href)
      : ''
  const shareText = encodeURIComponent(title)
import React from 'react';
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast',;
interface SocialShareButtonsProps {;
  title: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function SocialShareButtons({ title }: SocialShareButtonsProps) {

  const shareUrl =

  const shareToTwitter = () => {
=======
xport function SocialShareButtons({ title }: SocialShareButtonsProps) {

  const shareUrl =
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export function SocialShareButtons({ title }: SocialShareButtonsProps) {

  const shareUrl =
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export function SocialShareButtons({ title }: SocialShareButtonsProps) {

  const shareUrl =
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.href)
      : ''
  const shareText = encodeURIComponent(title)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>   const shareToTwitter = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '',
  const shareText = encodeURIComponent(title),

  const shareToTwitter = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
      '_blank'
    )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  },
=======
  const copyLink = () => {
    if (typeof window === 'undefined') return

>>>>>>>   },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  const copyLink = () => {
    if (typeof window === 'undefined') return
  },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank')
  },

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank')
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const copyLink = () => {
    if (typeof window === 'undefined') return,

=======
>>>>>>>   const copyLink = () => {
    if (typeof window === 'undefined') return,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  const copyLink = () => {
    if (typeof window === 'undefined') return,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const copyLink = () => {
    if (typeof window === 'undefined') return,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => toast.error('Failed to copy link'))
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>
  )
}
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    </div>;
  );
};
};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
