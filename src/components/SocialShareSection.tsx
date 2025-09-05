
import { Button } from "./ui/button",
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast",
import { useTranslation } from 'react-i18next',export function SocialShareSection() {
  const { t } = useTranslation(),

export function SocialShareSection() {const { t} = useTranslation();
  
  // Current window.URL is not available during SSR, guard with typeof check,
const shareUrl = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.href)
    : '',
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),
  
  // Social sharing functions,
const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "blank")
  },
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "blank")
  },
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "blank")
  }  };
  
  const copyLinkToClipboard = () => {navigator.clipboard.writeText(window.location.href)
      .then_(() => {
        toast({
          title: "Link Copied!",
          description: "The link has been copied to your clipboard"})      })
      .catch(() => {
        toast({
          title: t('errors.failedto_copy'),
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        })
      })
  }      })
  };

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
        <div className=&quot;max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6&quot;>          <div>
            <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Share Zion with Your Network</h3>
            <p className=&quot;text-zion-slate-light&quot;>Help others discover the future of AI & tech marketplace</p>
          </div>
          <div className=&quot;flex flex-wrap gap-3&quot;>
            {shareLinks.map((link, index) => (
              <Button,
key={index}
                className={`${link.color} text-white`}
                size=&quot;sm&quot;
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
                <span className=&quot;sr-only&quot;>{link.name}</span>
                <span aria-hidden=&quot;true&quot;>{link.name}</span>              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
