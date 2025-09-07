



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
  const shareToFacebook = () => {"
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")"
  }
  const shareToLinkedIn = () => {"
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")"
  }"
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",""
import { toast } from "./ui/use-toast","
export function SocialShareSection() {
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window.location.href),"
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),"
  // Social sharing functions;
  const shareToTwitter = () => {"
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank")"
  },
  
  const shareToFacebook = () => {"
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")"
  },
  
  const shareToLinkedIn = () => {"
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")"
  },
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({"
          title: "Link Copied!"",)"
  description: "The link has been copied to your clipboard"})"
      })
      .catch(() => {
        toast({"
          title: "Failed to copy"","
  description: "Please try again or copy the URL manually"""
          variant: "destructive"")
        })
      })


  },



  const shareLinks = [
    {"
      name: "Twitter"","
  icon: <Twitter className="h-5 w-5" />"
</Twitter>"
      icon: <Facebook className="h-5 w-5" />"
</Facebook>"
      icon: <Linkedin className="h-5 w-5" />"
</Linkedin>"
      icon: <Link className="h-5 w-5" />"
</Link>"
    <section className="py-12 bg-zion-blue">"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"
</div>"
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">"
</div>
          <div>
</div>"
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>""
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>"
          </div>"
          <div className="flex flex-wrap gap-3">"
</div>
              <Button;
                key={index}
                className={`${link.color} text-white`}"
                size="sm"""
import { Button } from "./ui/button",;""
import { Twitter, Facebook, Linkedin, Link } from "@/components/icons",;""
import { toast } from "./ui/use-toast",;"
export function SocialShareSection() {;
  // Current URL and text to share;
  const shareUrl = encodeURIComponent(window && window.location.href);"
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");"
  // Social sharing functions;
  const shareToTwitter = () => {;
</Button>"
      icon: <Twitter className="h-5 w-5" />,;"
</Twitter>"
      icon: <Facebook className="h-5 w-5" />,;"
</Facebook>"
      icon: <Linkedin className="h-5 w-5" />,;"
</Linkedin>"
      icon: <Link className="h-5 w-5" />,;"
</Link>"
      icon: <Twitter className="h - 5 w - 5" />,"
</Twitter>"
      icon: <Facebook className="h - 5 w - 5" />,"
</Facebook>"
      icon: <Linkedin className="h - 5 w - 5" />,"
</Linkedin>"
      icon: <Link className="h - 5 w - 5" />,"
</Link>
              <Button;


}
          </div>;
</Button>
        </div>;
      </div>;
    </section>;"
    <section className="py - 12 bg - zion - blue">;"
</section>"
      <div className="container mx - auto px - 4 sm:px - 6 lg:px - 8">;"
</div>"
        <div className="max - w-4xl mx - auto flex flex - col md:flex - row items - center justify - between gap - 6 bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6">;"
</div>
          <div>;
</div>"
            <h3 className="text - xl font - bold text - white mb - 2">Share Zion with Your Network</h3>;""
            <p className="text - zion - slate - light">Help others discover the future of AI & tech marketplace</p>;"
          </div>;"
          <div className="flex flex - wrap gap - 3">;"
</div>
              <Button;
                key={index}
                className={`${link.color} text - white`}"
                size="sm";"
                on_click={link.on_click}
              >;
</Button>
                <span>{link.name}</span>;
              </Button>))}
          </div>;
        </div>;
      </div>;
    </section>);"
      icon:<Twitter className="h-5 w-5" />,;"
</Twitter>"
      icon:<Facebook className="h-5 w-5" />,;"
</Facebook>"
      icon:<Linkedin className="h-5 w-5" />,;"
</Linkedin>"
      icon:<Link className="h-5 w-5" />,;"
</Link>"
      icon: <Link className="h-5 w-5" />,;"
</Link>"
    <section className="py-12 bg-zion-blue">;"
</section>"
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;"
</div>"
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;"
</div>
          <div>;
</div>"
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>;""
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>;"
          </div>;"
          <div className="flex flex-wrap gap-3">;"
</div>
              <Button;
}
;
}
;
]"