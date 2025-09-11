

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
  // Social sharing functions
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank")
  }
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")
  }
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")
  }
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",
import { toast } from "./ui/use-toast",
export function SocialShareSection() {
  // Current URL and text to share
  const shareUrl = encodeURIComponent(window.location.href),
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),
  
  // Social sharing functions
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank")
  },
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")
  },
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")
  },

  
=======


=======
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link Copied!"
          description: "The link has been copied to your clipboard"})
      })
      .catch(() => {
        toast({
          title: "Failed to copy"
          description: "Please try again or copy the URL manually"
          variant: "destructive"
        })
      })
  },



==============
  }
  },
  const shareLinks = [
    {
      name: "Twitter"
      icon: <Twitter className="h-5 w-5" />
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80"
      onClick: shareToTwitter

    }
    },
=======

    },

=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Facebook"
      icon: <Facebook className="h-5 w-5" />
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80"
      onClick: shareToFacebook

    }
    },
=======

    },

=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "LinkedIn"
      icon: <Linkedin className="h-5 w-5" />
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80"
      onClick: shareToLinkedIn

    }
    },
=======

    },

=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      name: "Copy Link"
      icon: <Link className="h-5 w-5" />
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80"
      onClick: copyLinkToClipboard
import {Button} from "./ui/button";
import {Twitter, Facebook, Linkedin, Link} from "@/components/icons";
import {toast} from "./ui/use-toast";
=======
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

export function SocialShareSection() {;
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window && window.location.href);
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
  // Social sharing functions;
  const shareToTwitter = () => {;
    window && window.open(`https://twitter && twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank");
  };
  const shareToFacebook = () => {;
    window && window.open(`https://www && www.facebook.com/sharer/sharer && sharer.php?u=${shareUrl}`, "_blank");
  };
  const shareToLinkedIn = () => {;
    window && window.open(`https://www && www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank");
  };
  const copyLinkToClipboard = () => {;
    navigator && navigator.clipboard.writeText(window && window.location.href);
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
  )
}
import { Button } from "./ui/button",;
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",;
import { toast } from "./ui/use-toast",;
export function SocialShareSection() {;
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window.location.href),;
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),;
  // Social sharing functions;
  const shareToTwitter = () => {;
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank");
  },;
  const shareToFacebook = () => {;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
  },;
  const shareToLinkedIn = () => {;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank");
  },;
  const copyLinkToClipboard = () => {;
    navigator.clipboard.writeText(window.location.href);
=======
=======
=======
import { Button } from "./ui/button",;
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",;
import { toast } from "./ui/use-toast",;

export function SocialShareSection() {;
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window && window.location.href);
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");

  // Social sharing functions;
  const shareToTwitter = () => {;
    window && window.open(`https://twitter && twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank");
  };

  const shareToFacebook = () => {;
    window && window.open(`https://www && www.facebook.com/sharer/sharer && sharer.php?u=${shareUrl}`, "_blank");
  };

  const shareToLinkedIn = () => {;
    window && window.open(`https://www && www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank");
  };

  const copyLinkToClipboard = () => {;
    navigator && navigator.clipboard.writeText(window && window.location.href);=======
  };
  const shareLinks = [;
    {;
      name: "Twitter",;
      icon: <Twitter className="h-5 w-5" />,;
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",;
      onClick: shareToTwitter;

}
=======
=======    };
    {;
      name: "Copy Link",;
      icon: <Link className="h-5 w-5" />,;
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80",;
      onClick: copyLinkToClipboard;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { Button } from './ui / button';
import { Twitter, Facebook, Linkedin, Link } from '@/components / icons';
import { toast } from './ui / use - toast';
export /**
 * SocialShareSection - Function description
 */
function SocialShareSection() {
  // Current URL and text to share;
  const share_url = encodeURIComponent (window.location.href);
  const share_text = encodeURIComponent ("Check out Zion - The Future of AI & Tech Marketplace");
;
  // Social sharing functions;
  const shareToTwitter = () =>: any {
    window.open (`https://twitter.com / intent / tweet?url=${share_url}&text=${share_text}`, "_blank");
  }
;
  const shareToFacebook = () =>: any {
    window.open (`https://www.facebook.com / sharer / sharer.php?u=${share_url}`, "_blank");
  }
;
  const shareToLinkedIn = () =>: any {
    window.open (`https://www.linkedin.com / sharing / share - offsite/?url=${share_url}`, "_blank");
  }
;
  const copyLinkToClipboard = () =>: any {
    navigator.clipboard.write_text (window.location.href);
      .then (() => {
        toast ({
          title: "Link Copied!",
          description: "The link has been copied to your clipboard"});
      });
      .catch (() => {
        toast ({
          title: "Failed to copy",
          description: "Please try again or copy the URL manually",
          variant: "destructive";
        });
      });
  }
;
  const share_links = [;
    {
      name: "Twitter",
      icon: <Twitter className="h - 5 w - 5" />,
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",
      on_click: shareToTwitter;
    }
    {
      name: "Facebook",
      icon: <Facebook className="h - 5 w - 5" />,
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80",
      on_click: shareToFacebook;
    }
    {
      name: "LinkedIn",
      icon: <Linkedin className="h - 5 w - 5" />,
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",
      on_click: shareToLinkedIn;
    }
    {
      name: "Copy Link",
      icon: <Link className="h - 5 w - 5" />,
      color: "bg - zion - blue - dark hover:bg - zion - blue - dark / 80",
      on_click: copyLinkToClipboard;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }];
;
  return (

            {shareLinks.map((link, index) => (;
              <Button;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
import { Button } from "./ui/button",;
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",;
import { toast } from "./ui/use-toast",;
;
export function SocialShareSection() {;
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window.location.href),;
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),;
  ;
  // Social sharing functions;
  const shareToTwitter = () => {;
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank"),;
  },;
  ;
  const shareToFacebook = () => {;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank"),;
  },;
  ;
  const shareToLinkedIn = () => {;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank"),;
  },;
  ;
  const copyLinkToClipboard = () => {;
    navigator.clipboard.writeText(window.location.href);
      .then(() => {;
        toast({;
          title:"Link Copied!",;
          description:"The link has been copied to your clipboard"}),;
      });
      .catch(() => {;
        toast({;
          title:"Failed to copy",;
          description:"Please try again or copy the URL manually",;
          variant:"destructive";
        }),;
      }),;
  },;
;
  const shareLinks = [;
    {;
      name:"Twitter",;
      icon:<Twitter className="h-5 w-5" />,;
      color:"bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",;
      onClick:shareToTwitter;
    },;
    {;
      name:"Facebook",;
      icon:<Facebook className="h-5 w-5" />,;
      color:"bg-[#4267B2] hover:bg-[#4267B2]/80",;
      onClick:shareToFacebook;
    },;
    {;
      name:"LinkedIn",;
      icon:<Linkedin className="h-5 w-5" />,;
      color:"bg-[#0077B5] hover:bg-[#0077B5]/80",;
      onClick:shareToLinkedIn;
    },;
    {;
      name:"Copy Link",;
      icon:<Link className="h-5 w-5" />,;
      color:"bg-zion-blue-dark hover:bg-zion-blue-dark/80",;
      onClick:copyLinkToClipboard;
    }],;
;
    },;
    {;
      name: "Copy Link",;
      icon: <Link className="h-5 w-5" />,;
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80";
      onClick: copyLinkToClipboard;
    }];
  return (;
    <section className="py-12 bg-zion-blue">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;
          <div>;
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>;
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>;
          </div>;
          <div className="flex flex-wrap gap-3">;
            {shareLinks.map((link, index) => (;
              <Button;
}
;
}
;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
