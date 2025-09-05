
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "./ui/button",
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast",
import { useTranslation } from 'react-i18next',
=======
import { Button } from &quot;./ui/button&quot;;
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from &quot;./ui/use-toast&quot;;
import { useTranslation } from 'react-i18next';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function SocialShareSection() {
  const { t } = useTranslation(),
=======

export function SocialShareSection() {_const { t} = useTranslation();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Current window.URL is not available during SSR, guard with typeof check
  const _shareUrl = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.href)
<<<<<<< HEAD
<<<<<<< HEAD
    : '',
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
    : '';
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
=======
    : '';
  const _shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
  
  // Social sharing functions
  const _shareToTwitter = () => {_window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${_shareText}`, "_blank");
  };
  
  const _shareToFacebook = () => {_window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
  };
  
  const _shareToLinkedIn = () => {_window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank");
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  const _copyLinkToClipboard = () => {_navigator.clipboard.writeText(window.location.href)
      .then__(() => {
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
          title: "Link Copied!",
          description: "The link has been copied to your clipboard"})
=======
          title: &quot;Link Copied!&quot;,
          description: &quot;The link has been copied to your clipboard&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      })
      .catch(() => {
        toast({
          title: t('errors.failed_to_copy'),
<<<<<<< HEAD
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        })
      })
  },
=======
          description: &quot;Please try again or copy the URL manually&quot;,
          variant: &quot;destructive&quot;
        });
=======
          title: "Link Copied!", _description: "The link has been copied to your clipboard"});
      })
      .catch__(() => {_toast({
          title: t('errors.failed_to_copy'), _description: "Please try again or copy the window.URL manually", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      });
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  const shareLinks = [
    {
      name: &quot;Twitter&quot;,
      icon: <Twitter className=&quot;h-5 w-5&quot; aria-hidden=&quot;true&quot; />, 
      color: &quot;bg-[#1DA1F2] hover:bg-[#1DA1F2]/80&quot;,
      onClick: shareToTwitter
    },
    {
      name: &quot;Facebook&quot;,
      icon: <Facebook className=&quot;h-5 w-5&quot; aria-hidden=&quot;true&quot; />,
      color: &quot;bg-[#4267B2] hover:bg-[#4267B2]/80&quot;,
      onClick: shareToFacebook
    },
    {
      name: &quot;LinkedIn&quot;,
      icon: <Linkedin className=&quot;h-5 w-5&quot; aria-hidden=&quot;true&quot; />,
      color: &quot;bg-[#0077B5] hover:bg-[#0077B5]/80&quot;,
      onClick: shareToLinkedIn
    },
    {
      name: &quot;Copy Link&quot;,
      icon: <Link className=&quot;h-5 w-5&quot; aria-hidden=&quot;true&quot; />,
      color: &quot;bg-zion-blue-dark hover:bg-zion-blue-dark/80&quot;,
      onClick: copyLinkToClipboard
    }],

  return (
    <section className=&quot;py-12 bg-zion-blue&quot;>
      <div className=&quot;container mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6&quot;>
=======
  const _shareLinks = [
    {_name: "Twitter", _icon: <Twitter className="h-5 w-5" aria-hidden="true" />, _color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80", _onClick: shareToTwitter},
    {_name: "Facebook", _icon: <Facebook className="h-5 w-5" aria-hidden="true" />, _color: "bg-[#4267B2] hover:bg-[#4267B2]/80", _onClick: shareToFacebook},
    {_name: "LinkedIn", _icon: <Linkedin className="h-5 w-5" aria-hidden="true" />, _color: "bg-[#0077B5] hover:bg-[#0077B5]/80", _onClick: shareToLinkedIn},
    {_name: "Copy Link", _icon: <Link className="h-5 w-5" aria-hidden="true" />, _color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80", _onClick: copyLinkToClipboard}];

  return (_<section className="py-12 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <div>
            <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Share Zion with Your Network</h3>
            <p className=&quot;text-zion-slate-light&quot;>Help others discover the future of AI & tech marketplace</p>
          </div>
<<<<<<< HEAD
          <div className=&quot;flex flex-wrap gap-3&quot;>
            {shareLinks.map((link, index) => (
              <Button
                key={index}
                className={`${link.color} text-white`}
                size=&quot;sm&quot;
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
                <span className=&quot;sr-only&quot;>{link.name}</span>
                <span aria-hidden=&quot;true&quot;>{link.name}</span>
=======
          <div className="flex flex-wrap gap-3">
            {_shareLinks.map((link, _index) => (
              <Button
                key={index}
                className={_`${link.color} text-white`}
                size="sm"
                onClick={_link.onClick}
                aria-label={_link.name}
                title={_link.name}
              >
                {_link.icon}
                <span className="sr-only">{_link.name}</span>
                <span aria-hidden="true">{_link.name}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
