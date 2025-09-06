<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { Button } from "./ui/button",
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast",
import { useTranslation } from 'react-i18next',
export function SocialShareSection() {
  const { t } = useTranslation(),
  
  // Current URL is not available during SSR, guard with typeof check
  const shareUrl = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.href)
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
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link Copied!",
          description: "The link has been copied to your clipboard"})
      })
      .catch(() => {
        toast({
          title: t('errors.failed_to_copy'),
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        })
      })
  },

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
    }],

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import { Button } from './ui/button';
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react';
import { toast } from './ui/use-toast';
import { useTranslation } from 'react-i18next';
export function SocialShareSection() {
  const { t } = useTranslation();
  // Current URL is not available during SSR, guard with typeof check
  const shareUrl = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
=======
return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    <section className="py-12 bg-zion-blue">
=======
  return (    <section className="py-12 bg-zion-blue">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>
          </div>

};
}</div> </div> </div> </section>) ;
}'"
};

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div className="flex flex-wrap gap-3">
            {shareLinks.map((link, index) => (
              <Button
                key={index}
                className={`${link.color} text-white`}
                size="sm"
import { Button } from "./ui/button",;
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react';
import { toast } from "./ui/use-toast",;
import { useTranslation } from 'react-i18next',;
export function SocialShareSection() {;
  const { t } = useTranslation(),;
  // Current URL is not available during SSR, guard with typeof check;
  const shareUrl = typeof window !== 'undefined';
    ? encodeURIComponent(window.location.href);
    : '',;
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
      .then(() => {;
        toast({;
          title: "Link Copied!",,
  description: "The link has been copied to your clipboard"});
      });
      .catch(() => {;
        toast({;
          title: t('errors.failed_to_copy'),,
  description: "Please try again or copy the URL manually",;
          variant: "destructive";
        });
      });
  },;
  const shareLinks = [;
    {;
      name: "Twitter",;
      icon: <Twitter className="h-5 w-5" aria-hidden="true" />,;
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",;
      onClick: shareToTwitter;
    },;
    {;
      name: "Facebook",;
      icon: <Facebook className="h-5 w-5" aria-hidden="true" />,;
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80",;
      onClick: shareToFacebook;
    },;
    {;
      name: "LinkedIn",;
      icon: <Linkedin className="h-5 w-5" aria-hidden="true" />,;
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",;
      onClick: shareToLinkedIn;
    },;
    {;
      name: "Copy Link",;
      icon: <Link className="h-5 w-5" aria-hidden="true" />,;
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80";
      onClick: copyLinkToClipboard;
    }];
  return (;
    <section className="py-12 bg-zion-blue">;
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">;
<<<<<<< HEAD
=======
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>;
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>;
          </div>;
          <div className="flex flex-wrap gap-3">;
            {shareLinks.map((link, index) => (;
              <Button;
                key={index}
                className={`${link.color} text-white`}
                size="sm";
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}
              >;
                {link.icon}
                <span className="sr-only">{link.name}</span>
                <span aria-hidden="true">{link.name}</span>
              </Button>
            ))}
          </div>;
        </div>;
      </div>;
    </section>;
  );

  navigator && navigator.clipboard.writeText (window && window.location.href) .then ( () => {;
  toast ({;

}) .catch ( () => {;
  toast ({;
  title: t ('errors && errors.failed to copy');
});
};
}</div> </div> </div> </section>) ;
}'";
}

}</div> </div> </div> </section>)
}'"
}



      name: 'Twitter',
      icon: <Twitter className='h - 5 w - 5' aria - hidden='true' />,
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/80',
      on_click: shareToTwitter,
    },
    {
      name: 'Facebook',
      icon: <Facebook className='h - 5 w - 5' aria - hidden='true' />,
      color: 'bg-[#4267B2] hover:bg-[#4267B2]/80',
      on_click: shareToFacebook,
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className='h - 5 w - 5' aria - hidden='true' />,
      color: 'bg-[#0077B5] hover:bg-[#0077B5]/80',
      on_click: shareToLinkedIn,
    },
    {
      name: 'Copy Link',
      icon: <Link className='h - 5 w - 5' aria - hidden='true' />,
      color: 'bg - zion - blue - dark hover:bg - zion - blue - dark / 80',
      on_click: copyLinkToClipboard,
    },
  ];
  return (
    <section className='py - 12 bg - zion - blue'>;
      <div className='container mx - auto px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-4xl mx - auto flex flex - col md:flex - row items - center justify - between gap - 6 bg - zion - blue - light border border - zion - purple / 20 rounded - lg p - 6'>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <div>;
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>;
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>;
          </div>;
          <div className="flex flex-wrap gap-3">;
            {shareLinks.map((link, index) => (;
              <Button;
                key={index}
                className={`${link.color} text-white`}
                size="sm";
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}
              >;
                {link.icon}
                <span className="sr-only">{link.name}</span>
                <span aria-hidden="true">{link.name}</span>
              </Button>
            ))}
          </div>;
        </div>;
      </div>;
    </section>;
  );
}
<<<<<<< HEAD
=======
}</div> </div> </div> </section>);
}'";
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
=======
            <h3 className='text-xl font-bold text-white mb-2'>;              Share Zion with Your Network;
=======

              Share Zion with Your Network;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
            </h3>;
            <p className='text - zion - slate - light'>;
              Help others discover the future of AI & tech marketplace;
            </p>;
          </div>;
<<<<<<< HEAD
          <div className='flex flex-wrap gap-3'>;
            {shareLinks && shareLinks.map((link, index) => (              <Button
                key = {index,}
                className={`${link && link.color} text-white`}
                size='sm'
                onClick={link && link.onClick}
                aria-label={link && link.name}
                title={link && link.name}>;
                {link && link.icon}
                <span className='sr-only'>{link && link.name}</span>;
                <span aria-hidden='true'>{link && link.name}</span>;
              </Button>;
            ))}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
          <div className='flex flex - wrap gap - 3'>;
            {share_links.map ((link, index) => (              <Button;
                key = {index, }
                className={`${link.color} text - white`}
                size='sm';
                on_click={link.on_click}
                aria - label={link.name}
                title={link.name}              >;
                {link.icon}
                <span className='sr - only'>{link.name}</span>;
                <span aria - hidden='true'>{link.name}</span>;
              </Button>))}
          </div>;
        </div>;
      </div>;
    </section>);
  navigator.clipboard.write_text (window.location.href) .then ( () => {
  toast ({
}) .catch ( () => {
  toast ({
  title: t ('errors.failed to copy');
});
}
<<<<<<< HEAD
}</div> </div> </div> </section>);
}'";
}
;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}</div> </div> </div> </section>)
}'"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
