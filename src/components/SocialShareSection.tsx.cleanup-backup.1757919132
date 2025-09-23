
<<<<<<< HEAD
import { Button } from "./ui/button",
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast",
import { useTranslation } from 'react-i18next',

export function SocialShareSection() {
  const { t } = useTranslation(),
=======
import { Button } from "./ui/button";
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast";
import { useTranslation } from 'react-i18next';

export function SocialShareSection() {
  const { t } = useTranslation();
>>>>>>> origin/auto/autonomy-17186719616
  
  // Current URL is not available during SSR, guard with typeof check
  const shareUrl = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.href)
<<<<<<< HEAD
    : '',
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),
  
  // Social sharing functions
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank"),
  },
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank"),
  },
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank"),
  },
=======
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
>>>>>>> origin/auto/autonomy-17186719616
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link Copied!",
<<<<<<< HEAD
          description: "The link has been copied to your clipboard"}),
=======
          description: "The link has been copied to your clipboard",
        });
>>>>>>> origin/auto/autonomy-17186719616
      })
      .catch(() => {
        toast({
          title: t('errors.failed_to_copy'),
          description: "Please try again or copy the URL manually",
          variant: "destructive"
<<<<<<< HEAD
        }),
      }),
  },
=======
        });
      });
  };
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
    }],
=======
    },
  ];
>>>>>>> origin/auto/autonomy-17186719616

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
<<<<<<< HEAD
  ),
=======
  );
>>>>>>> origin/auto/autonomy-17186719616
}
