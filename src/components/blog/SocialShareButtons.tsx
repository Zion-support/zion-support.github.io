import React from 'react',
import { Button } from '@/components/ui/button',
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react',
import { toast } from '@/hooks/use-toast',
interface SocialShareButtonsProps {
  title: string,
  url?: string;
  description?: string, }

export function SocialShareButtons({ title, url, description }: SocialShareButtonsProps) {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareText = `${title}${description ? ` - ${description}` : ''}`;

  const buttons = [
    {
      label: 'Twitter',
      icon: <Twitter className="h-4 w-4" />,
      onClick: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
        window.open(twitterUrl, '_blank', 'width=600,height=400');
        toast({
          title: "Shared on Twitter",
          description: "Your post has been shared on Twitter."});
      }
    };
    {
      label: 'Facebook',
      icon: <Facebook className="h-4 w-4" />,
      onClick: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        window.open(facebookUrl, '_blank', 'width=600,height=400');
        toast({
          title: "Shared on Facebook",
          description: "Your post has been shared on Facebook."});
      }
    };
    {
      label: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
      onClick: () => {
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
        window.open(linkedinUrl, '_blank', 'width=600,height=400');
        toast({
          title: "Shared on LinkedIn",
          description: "Your post has been shared on LinkedIn."});
      }
    };
    {
      label: 'Copy Link',
      icon: <LinkIcon className="h-4 w-4" />,
      onClick: async () => {
        try {
          await navigator.clipboard.writeText(currentUrl),
          toast({
            title: "Link Copied",
            description: "The link has been copied to your clipboard."});
        } catch (error) {
          // Fallback for older browsers
          const textArea = document.createElement('textarea');
          textArea.value = currentUrl;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          toast({
            title: "Link Copied",
            description: "The link has been copied to your clipboard."});
        }
      }
    }
  ];

  return (
    <div className='mt-12 flex flex-wrap gap-2'>
      {buttons.map(btn => (
        <Button
          key={btn.label}
          
          size='sm'
          onClick={btn.onClick}
          aria-label={btn.label}
        >
          {btn.icon}
          <span className="ml-2">{btn.label}</span>
        </Button>
      ))}
    </div>
  );