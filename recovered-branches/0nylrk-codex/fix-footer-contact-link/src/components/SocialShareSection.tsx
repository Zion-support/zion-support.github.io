<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {Button} from "./ui/button";
import {Twitter, Facebook, Linkedin, Link} from "@/components/icons";
import {toast} from "./ui/use-toast";


<<<<<<< HEAD
=======
import { Button } from "./ui/button",

import { Twitter, Facebook, Linkedin, Link } from "@/components/icons";
import { toast } from "./ui/use-toast";





>>>>>>> origin/cursor/delete-old-data-records-6bba
  const copyLinkToClipboard = () => {

    navigator.clipboard.writeText(window.location.href)
      .then(() => {}
        toast({"
          title: "Link Copied!""
          description: "The link has been copied to your clipboard"})
      })
      .catch(() => {}
        toast({"
          title: "Failed to copy""
          description: "Please try again or copy the URL manually""
          variant: "destructive"
        })
      })

  },


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const shareLinks = [

    {
      name: "Twitter"
      icon: <Twitter className="h-5 w-5" />
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80"
<<<<<<< HEAD

      onClick: shareToTwitter

=======


    },
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {
      name: "Facebook"
      icon: <Facebook className="h-5 w-5" />
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80"
      onClick: shareToFacebook


<<<<<<< HEAD
=======
    },
>>>>>>> origin/cursor/delete-old-data-records-6bba

    {

      name: "LinkedIn"
      icon: <Linkedin className="h-5 w-5" />
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80"
      onClick: shareToLinkedIn


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      name: "Copy Link"
      icon: <Link className="h-5 w-5" />
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80"
      onClick: copyLinkToClipboard
<<<<<<< HEAD


import {Button} from "./ui/button";
import {Twitter, Facebook, Linkedin, Link} from "@/components/icons";
import {toast} from "./ui/use-toast";

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    }],

  return ("
    <section className="py-12 bg-zion-blue">"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
          <div>"
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>"
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>
          </div>"
          <div className="flex flex-wrap gap-3">
            {shareLinks.map((link, index) => (


<<<<<<< HEAD

=======
"
import { Button } from "./ui/button",;"
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",;"
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { toast } from "./ui/use-toast",;

export function SocialShareSection() { return null; }`
    window && window.open(`https://twitter && twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank");
  };

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
<<<<<<< HEAD

    navigator && navigator.clipboard.writeText(window && window.location.href);


=======

    navigator.clipboard.writeText(window.location.href);

>>>>>>> origin/cursor/delete-old-data-records-6bba
      .then(() => {;
        toast({;"
          title: "Link Copied!","
          description: "The link has been copied to your clipboard"});
      });
      .catch(() => {;
        toast({;"
          title: "Failed to copy","
          description: "Please try again or copy the URL manually",;"
          variant: "destructive";
        });
      });


  const shareLinks = [;
    {;"
      name: "Twitter",;"
      icon: <Twitter className="h-5 w-5" />,;"
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",;
      onClick: shareToTwitter;
<<<<<<< HEAD


=======


    {;"
      name: "Facebook",;"
      icon: <Facebook className="h-5 w-5" />,;"
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80",;
      onClick: shareToFacebook;

    {;"
      name: "LinkedIn",;"
      icon: <Linkedin className="h-5 w-5" />,;"
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",;
      onClick: shareToLinkedIn;


>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Button } from './ui / button';
import { Twitter, Facebook, Linkedin, Link } from '@/components / icons';

import { toast } from './ui / use - toast';
export /**;
 * SocialShareSection - Function description;
 */
function SocialShareSection() {}
  // Current URL and text to share;
  const share_url = encodeURIComponent (window.location.href);"
  const share_text = encodeURIComponent ("Check out Zion - The Future of AI & Tech Marketplace");
;
  // Social sharing functions;
  const shareToTwitter = () =>: any {"`
    window.open (`https://twitter.com / intent / tweet?url=${share_url}&text=${share_text}`, "_blank");
  }
;
  const shareToFacebook = () =>: any {"`
    window.open (`https://www.facebook.com / sharer / sharer.php?u=${share_url}`, "_blank");
  }
;
  const shareToLinkedIn = () =>: any {"`
    window.open (`https://www.linkedin.com / sharing / share - offsite/?url=${share_url}`, "_blank");
  }
;
  const copyLinkToClipboard = () =>: any {}
    navigator.clipboard.write_text (window.location.href);
      .then (() => {}
        toast ({"
          title: "Link Copied!","
          description: "The link has been copied to your clipboard"});
      });
      .catch (() => {}
        toast ({"
          title: "Failed to copy","
          description: "Please try again or copy the URL manually","
          variant: "destructive";
        });
      });
  }
;
  const share_links = [;
    {"
      name: "Twitter","
      icon: <Twitter className="h - 5 w - 5" />,"
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",
      on_click: shareToTwitter;
    }
    {"
      name: "Facebook","
      icon: <Facebook className="h - 5 w - 5" />,"
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80",
      on_click: shareToFacebook;
    }
    {"
      name: "LinkedIn","
      icon: <Linkedin className="h - 5 w - 5" />,"
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",
      on_click: shareToLinkedIn;
    }
    {"
      name: "Copy Link","
      icon: <Link className="h - 5 w - 5" />,"
      color: "bg - zion - blue - dark hover:bg - zion - blue - dark / 80",
      on_click: copyLinkToClipboard;

    }];
;
  return (

}


          </div>;
        </div>;
      </div>;
    </section>;
  );
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
          <div>;
            <h3 className="text - xl font - bold text - white mb-2">Share Zion with Your Network</h3>;
            <p className="text - zion - slate-light">Help others discover the future of AI & tech marketplace</p>;
          </div>;
          <div className="flex flex - wrap gap-3">;

            {share_links.map ((link, index) => (
              <Button;
                key={index}`
                className={`${link.color} text - white`}"
                size="sm";
                on_click={link.on_click}
              >;
                {link.icon}
                <span>{link.name}</span>;
              </Button>))}
          </div>;
        </div>;
      </div>;
    </section>);
}


>>>>>>> origin/cursor/delete-old-data-records-6bba
    <section className="py - 12 bg - zion - blue">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;
        <div className="max - w-4xl mx - auto flex flex - col md:flex - row items - center justify - between gap - 6 bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6">;
                size="sm"    {;
      name: "LinkedIn",;
      icon: <Linkedin className="h-5 w-5" />,;
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",;
      onClick: shareToLinkedIn;    <section className="py - 12 bg - zion-blue">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px-8">;
        <div className="max - w-4xl mx - auto flex flex - col md:flex - row items - center justify - between gap - 6 bg - zion - blue - light border border - zion - purple / 20 rounded - lg p-6">;
          <div>;
            <h3 className="text - xl font - bold text - white mb-2">Share Zion with Your Network</h3>;
            <p className="text - zion - slate-light">Help others discover the future of AI & tech marketplace</p>;
          </div>;
          <div className="flex flex - wrap gap-3">;
            {share_links.map ((link, index) => (
              <Button;
                key={index}
                className={`${link.color} text - white`}
                size="sm";
                on_click={link.on_click}
              >;
                {link.icon}
                <span>{link.name}</span>;
              </Button>))}
          </div>;
        </div>;
      </div>;
    </section>);
}
<<<<<<< HEAD

;
}
;


=======


import { Button } from "./ui/button",""
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons";""
import { toast } from "./ui/use-toast";"
export function SocialShareSection() {
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window.location.href);"
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");"
  // Social sharing functions;
  const shareToTwitter = () => {"
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank")"
  }
  const shareToFacebook = () => {"`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")"
  const shareToLinkedIn = () => {"`;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")"
  }"
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",""
import { toast } from "./ui/use-toast","
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window.location.href),"
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),"
  // Social sharing functions;
  const shareToTwitter = () => {"`;
  },
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({"
          title: "Link Copied!"",)"
  description: "The link has been copied to your clipboard"})"
      })
      .catch(() => {
          title: "Failed to copy"","
  description: "Please try again or copy the URL manually"""
          variant: "destructive"")

  const shareLinks = [
    {"
      name: "Twitter"","
  icon: <Twitter className="h-5 w-5" />"
"
      icon: <Facebook className="h-5 w-5" />"
      icon: <Linkedin className="h-5 w-5" />"
      icon: <Link className="h-5 w-5" />"
    <section className="py-12 bg-zion-blue">"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">"
</div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>""
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>"
          <div className="flex flex-wrap gap-3">"
              <Button;
                key={index}`;
                className={`${link.color} text-white`}"
                size="sm"""
import { Button } from "./ui/button",;""
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",;""
import { toast } from "./ui/use-toast",;"
export function SocialShareSection() {;
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window && window.location.href);"
  // Social sharing functions;
  const shareToTwitter = () => {;
      icon: <Twitter className="h-5 w-5" />,;"
      icon: <Facebook className="h-5 w-5" />,;"
      icon: <Linkedin className="h-5 w-5" />,;"
      icon: <Link className="h-5 w-5" />,;"
      icon: <Twitter className="h - 5 w - 5" />,"
      icon: <Facebook className="h - 5 w - 5" />,"
      icon: <Linkedin className="h - 5 w - 5" />,"
      icon: <Link className="h - 5 w - 5" />,"

          </div>;

    </section>;"
    <section className="py - 12 bg - zion - blue">;"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
        <div className="max - w-4xl mx - auto flex flex - col md:flex - row items - center justify - between gap - 6 bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6">;"
          <div>;
            <h3 className="text - xl font - bold text - white mb - 2">Share Zion with Your Network</h3>;""
            <p className="text - zion - slate - light">Help others discover the future of AI & tech marketplace</p>;"
          </div>;"
          <div className="flex flex - wrap gap - 3">;"
                className={`${link.color} text - white`}"
                size="sm";"
                on_click={link.on_click}
              >;

                <span>{link.name}</span>;
              ))}
</Button>
                <span>{link.name}</span>;

              </Button>))}
          </div>;
        </div>;
      </div>;

    </section>);"
      icon:<Twitter className="h-5 w-5" />,;"
      icon:<Facebook className="h-5 w-5" />,;"
      icon:<Linkedin className="h-5 w-5" />,;"
      icon:<Link className="h-5 w-5" />,;"
    <section className="py-12 bg-zion-blue">;"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;"
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>;""
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>;"
          <div className="flex flex-wrap gap-3">;"
;
]"`;
pr-12325
}
;
}

;
>>>>>>> origin/cursor/delete-old-data-records-6bba
