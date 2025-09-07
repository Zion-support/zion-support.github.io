export function SocialShareButtons({ title }: SocialShareButtonsProps) {

  const shareUrl =
  const shareToTwitter = () => {
const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
      '_blank'
    )

import React from 'react';

interface SocialShareButtonsProps {
  title: string;
export /**
 * SocialShareButtons - Function description
const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
      '_blank)
    )


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
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

          <span>{btn.label}</span>;
        ))}
    </div>);
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },

    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },

    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn },
]
    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink }],

    <div className="mt-12 flex flex-wrap gap-2">"
</div>"
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>"
"
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },;

    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },;

    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn };

    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink }];

    <div className="mt-12 flex flex-wrap gap-2">;"
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>;"

    </div>;"`;
pr-12325
