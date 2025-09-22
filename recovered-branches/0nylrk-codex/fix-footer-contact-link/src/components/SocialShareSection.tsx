<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import {Button} from "./ui/button";
import {Twitter, Facebook, Linkedin, Link} from "@/components/icons";
import {toast} from "./ui/use-toast";
import { Button } from "./ui/button",

import { Twitter, Facebook, Linkedin, Link } from "@/components/icons";
import { toast } from "./ui/use-toast";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function SocialShareSection() {
// Current URL and text to share;
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Button } from "./ui/button",
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons";
=======

import { Button } from "./ui/button",";
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { toast } from "./ui/use-toast";
export function SocialShareSection() {};
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window.location.href);"
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
  // Social sharing functions;
  const shareToTwitter = () => {"
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank")
  }
  const shareToFacebook = () => {"`
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")
  }
  const shareToLinkedIn = () => {"`
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")
  }"
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons","
import { toast } from "./ui/use-toast",
export function SocialShareSection() {};
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window.location.href),"
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const copyLinkToClipboard = () => {
=======

  const copyLinkToClipboard = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const shareLinks = [
=======
    const shareLinks = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    const shareLinks = [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const shareLinks = [
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      name: "Twitter"
      icon: <Twitter className="h-5 w-5" />
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80"
<<<<<<< HEAD
      onClick: shareToTwitter
<<<<<<< HEAD

    },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      name: "Facebook"
      icon: <Facebook className="h-5 w-5" />
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80"
      onClick: shareToFacebook
},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
=======
      onClick: shareToTwitter    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      onClick: shareToTwitter    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      name: "LinkedIn"
      icon: <Linkedin className="h-5 w-5" />
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80"
      onClick: shareToLinkedIn
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      name: "Copy Link"
      icon: <Link className="h-5 w-5" />
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80"
      onClick: copyLinkToClipboard
<<<<<<< HEAD

import {Button} from "./ui/button";
import {Twitter, Facebook, Linkedin, Link} from "@/components/icons";
import {toast} from "./ui/use-toast";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  const shareLinks = []
    {"
      name: "Twitter""
      icon: <Twitter className="h-5 w-5" />"
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80"
      onClick: shareToTwitter;
    {"
      name: "Facebook""
      icon: <Facebook className="h-5 w-5" />"
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80"
      onClick: shareToFacebook;
    {"
      name: "LinkedIn""
      icon: <Linkedin className="h-5 w-5" />"
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80"
      onClick: shareToLinkedIn;
    {"
      name: "Copy Link""
      icon: <Link className="h-5 w-5" />"
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80"
      onClick: copyLinkToClipboard;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    }],
=======
  // Current URL and text to share

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<Button
                key={index}
                className={`${link.color} text-white`}
<<<<<<< HEAD
<<<<<<< HEAD
                size="sm"
<<<<<<< HEAD

"
import { Button } from "./ui/button",;"
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",;"
import { toast } from "./ui/use-toast",;

export function SocialShareSection() { return null; }`
    window && window.open(`https://twitter && twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank");
  };

const copyLinkToClipboard = () => {;
    navigator && navigator.clipboard.writeText(window && window.location.href);
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      .then(() => {;
        toast({;"
          title: "Link Copied!",;"
          description: "The link has been copied to your clipboard"});
      });
      .catch(() => {;
        toast({;"
          title: "Failed to copy",;"
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
<<<<<<< HEAD
    };
    {;
      name: "Copy Link",;
      icon: <Link className="h-5 w-5" />,;
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80",;
      onClick: copyLinkToClipboard;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }];
;
  return (

{shareLinks.map((link, index) => (;
              <Button;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          </div>;
        </div>;
      </div>;
    </section>;
  );
}

"
    <section className="py - 12 bg - zion - blue">;"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
        <div className="max - w-4xl mx - auto flex flex - col md:flex - row items - center justify - between gap - 6 bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6">;

=======
                size="sm"    {;
      name: "LinkedIn",;
      icon: <Linkedin className="h-5 w-5" />,;
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",;
      onClick: shareToLinkedIn;    <section className="py - 12 bg - zion-blue">;
      <div className="container mx - auto px - 4 sm:px - 6 lg:px-8">;
        <div className="max - w-4xl mx - auto flex flex - col md:flex - row items - center justify - between gap - 6 bg - zion - blue - light border border - zion - purple / 20 rounded - lg p-6">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div>;
            <h3 className="text - xl font - bold text - white mb-2">Share Zion with Your Network</h3>;
            <p className="text - zion - slate-light">Help others discover the future of AI & tech marketplace</p>;
          </div>;
          <div className="flex flex - wrap gap-3">;
=======
          <div>;"
            <h3 className="text - xl font - bold text - white mb - 2">Share Zion with Your Network</h3>;"
            <p className="text - zion - slate - light">Help others discover the future of AI & tech marketplace</p>;
          </div>;"
          <div className="flex flex - wrap gap - 3">;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
