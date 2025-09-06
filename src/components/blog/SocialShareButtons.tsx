import React from 'react';
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
interface SocialShareButtonsProps {
  title: string;

export function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const shareUrl =
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.href)
      : '';
  const shareText = encodeURIComponent(title);

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
      '_blank'
    );
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      '_blank'
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      '_blank'
    );
  };

  const copyLink = () => {
    if (typeof window === 'undefined') return;
    navigator.clipboard
      .writeText(window.location.href)
<<<<<<< HEAD
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => toast.error('Failed to copy link'));
  };
=======
      .then((,) => toast.success('Link copied to clipboard'))
      .catch((,) => toast.error('Failed to copy link'))
  },
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

  const buttons = [
    {
      icon: <Twitter className='h-4 w-4' />,
      label: 'Twitter',
      onClick: shareToTwitter,
    },
    {
      icon: <Facebook className='h-4 w-4' />,
      label: 'Facebook',
      onClick: shareToFacebook,
    },
    {
      icon: <Linkedin className='h-4 w-4' />,
      label: 'LinkedIn',
      onClick: shareToLinkedIn,
    },
    {
      icon: <LinkIcon className='h-4 w-4' />,
      label: 'Copy Link',
      onClick: copyLink,
    },
  ];

  return (
<<<<<<< HEAD
    <div className='mt-12 flex flex-wrap gap-2'>
      {buttons.map(btn => (
        <Button
          key={btn.label}
          variant='outline'
          size='sm'
          onClick={btn.onClick}
          aria-label={btn.label}
        >
=======
    <div className="mt-12 flex flex-wrap gap-2">
      {buttons.map((btn,) => (
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          {btn.icon}
          <span>{btn.label}</span>
        </Button>
      ))}
    </div>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
