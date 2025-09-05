
<<<<<<< HEAD
import { Button } from "./ui/button",
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
import { Button } from &quot;./ui/button&quot;;
import { Twitter, Facebook, Linkedin, Link } from &quot;@/components/icons&quot;;
import { toast } from &quot;./ui/use-toast&quot;;

export function SocialShareSection() {
  // Current URL and text to share
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(&quot;Check out Zion - The Future of AI & Tech Marketplace&quot;);
  
  // Social sharing functions
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, &quot;_blank&quot;);
  };
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, &quot;_blank&quot;);
  };
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, &quot;_blank&quot;);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
<<<<<<< HEAD
          title: "Link Copied!",
          description: "The link has been copied to your clipboard"})
      })
      .catch(() => {
        toast({
          title: "Failed to copy",
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        })
      })
  },
=======
          title: &quot;Link Copied!&quot;,
          description: &quot;The link has been copied to your clipboard&quot;});
      })
      .catch(() => {
        toast({
          title: &quot;Failed to copy&quot;,
          description: &quot;Please try again or copy the URL manually&quot;,
          variant: &quot;destructive&quot;
        });
      });
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const shareLinks = [
    {
      name: &quot;Twitter&quot;,
      icon: <Twitter className=&quot;h-5 w-5&quot; />,
      color: &quot;bg-[#1DA1F2] hover:bg-[#1DA1F2]/80&quot;,
      onClick: shareToTwitter
    },
    {
      name: &quot;Facebook&quot;,
      icon: <Facebook className=&quot;h-5 w-5&quot; />,
      color: &quot;bg-[#4267B2] hover:bg-[#4267B2]/80&quot;,
      onClick: shareToFacebook
    },
    {
      name: &quot;LinkedIn&quot;,
      icon: <Linkedin className=&quot;h-5 w-5&quot; />,
      color: &quot;bg-[#0077B5] hover:bg-[#0077B5]/80&quot;,
      onClick: shareToLinkedIn
    },
    {
      name: &quot;Copy Link&quot;,
      icon: <Link className=&quot;h-5 w-5&quot; />,
      color: &quot;bg-zion-blue-dark hover:bg-zion-blue-dark/80&quot;,
      onClick: copyLinkToClipboard
    }],

  return (
    <section className=&quot;py-12 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6&quot;>
          <div>
            <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Share Zion with Your Network</h3>
            <p className=&quot;text-zion-slate-light&quot;>Help others discover the future of AI & tech marketplace</p>
          </div>
          <div className=&quot;flex flex-wrap gap-3&quot;>
            {shareLinks.map((link, index) => (
              <Button
                key={index}
                className={`${link.color} text-white`}
                size=&quot;sm&quot;
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
