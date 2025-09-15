
import { Button } from "./ui/button";
<<<<<<< HEAD
import { TwitterFacebookLinkedinLink } from "@/components/icons";
=======
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons";
>>>>>>> origin/auto/autonomy-17186719616
import { toast } from "./ui/use-toast";

export function SocialShareSection() {
  // Current URL and text to share
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
  
  // Social sharing functions
  const shareToTwitter = () => {
<<<<<<< HEAD
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`"_blank");
  };
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`"_blank");
  };
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`"_blank");
=======
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank");
  };
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
  };
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank");
>>>>>>> origin/auto/autonomy-17186719616
  };
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link Copied!",
<<<<<<< HEAD
          description: "The link has been copied to your clipboard"});
=======
          description: "The link has been copied to your clipboard",
        });
>>>>>>> origin/auto/autonomy-17186719616
      })
      .catch(() => {
        toast({
          title: "Failed to copy",
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        });
      });
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",
      onClick: shareToTwitter
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80",
      onClick: shareToFacebook
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",
      onClick: shareToLinkedIn
    },
    {
      name: "Copy Link",
      icon: <Link className="h-5 w-5" />,
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80",
      onClick: copyLinkToClipboard
<<<<<<< HEAD
    }];
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
<<<<<<< HEAD
            {shareLinks.map((linkindex) => (
=======
            {shareLinks.map((link, index) => (
>>>>>>> origin/auto/autonomy-17186719616
              <Button
                key={index}
                className={`${link.color} text-white`}
                size="sm"
                onClick={link.onClick}
              >
                {link.icon}
                <span>{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
