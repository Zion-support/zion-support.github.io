<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
  const shareUrl =
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Button } from './ui/button'
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast";
import { useTranslation } from 'react-i18next';
export function SocialShareSection() {
  const { t } = useTranslation();
  // Current URL is not available during SSR, guard with typeof check

  const shareUrl =
  const shareUrl = null;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    typeof window !== 'undefined'
      ? encodeURIComponent(window.location.href)
      : ''
  const shareText = encodeURIComponent(
    'Check out Zion - The Future of AI & Tech Marketplace'
  )
  // Social sharing functions
  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
      '_blank'
    )
  }
  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
      '_blank'
    )
  }
  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
      '_blank'
    )
  }
  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {        toast({
          title: 'Link Copied!'
          description: 'The link has been copied to your clipboard'
        })
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      })
      .catch(() => {
        toast({
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      })
      .catch(() => {
        toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          title: t('errors.failed_to_copy')
          description: 'Please try again or copy the URL manually'
          variant: 'destructive'
        })
      })
  }
  const shareLinks = [
    {
      name: 'Twitter'
      icon: <Twitter className='h-5 w-5' aria-hidden='true' />
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/80'
      onClick: shareToTwitter
    }
    {
      name: 'Facebook'
      icon: <Facebook className='h-5 w-5' aria-hidden='true' />
      color: 'bg-[#4267B2] hover:bg-[#4267B2]/80'
      onClick: shareToFacebook
    }
    {
      name: 'LinkedIn'
      icon: <Linkedin className='h-5 w-5' aria-hidden='true' />
      color: 'bg-[#0077B5] hover:bg-[#0077B5]/80'
      onClick: shareToLinkedIn
    }
    {
      name: 'Copy Link'
      icon: <Link className='h-5 w-5' aria-hidden='true' />
      color: 'bg-zion-blue-dark hover:bg-zion-blue-dark/80'
      onClick: copyLinkToClipboard
    }
  ]
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
          title: t('errors.failed_to_copy'),
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          title: t('errors.failed_to_copy'),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      })
      .catch(() => {
        toast({
          title: t('errors.failed_to_copy'),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          description: 'Please try again or copy the URL manually',
          variant: 'destructive',
        })
      })
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        })
      })
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const shareLinks = [
=======
>>>>>>>   const shareLinks = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const shareLinks = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      name: 'Copy Link',
      icon: <Link className='h-5 w-5' aria-hidden='true' />,
      color: 'bg-zion-blue-dark hover:bg-zion-blue-dark/80',
      onClick: copyLinkToClipboard,
    },
  ]
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      name: "Copy Link",
      icon: <Link className="h-5 w-5" aria-hidden="true" />,
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80",
      onClick: copyLinkToClipboard
    }],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
>>>>>>> 
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    <section className="py-12 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='flex flex-wrap gap-3'>
            {shareLinks.map((link, index) => (              <Button
                key = {index,}
                className={`${link.color} text-white`}
                size='sm'
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}              >
                {link.icon}
                <span className='sr-only'>{link.name}</span>
                <span aria-hidden='true'>{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
  navigator.clipboard.writeText (window.location.href) .then ( () => {
  toast ({
}) .catch ( () => {
  toast ({
  title: t ('errors.failed to copy')
})
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}</div> </div> </div> </section>)
}'"
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
};
}</div> </div> </div> </section>) ;
}'";
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
          title: "Link Copied!",;
          description: "The link has been copied to your clipboard"});
      });
      .catch(() => {;
        toast({;
          title: t('errors.failed_to_copy'),;
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </div>;
        </div>;
      </div>;
    </section>;
  );
<<<<<<< HEAD

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
<<<<<<< HEAD
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======



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
          <div>;
            <h3 className='text - xl font - bold text - white mb - 2'>;
              Share Zion with Your Network;
            </h3>;
            <p className='text - zion - slate - light'>;
              Help others discover the future of AI & tech marketplace;
            </p>;
          </div>;
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
}</div> </div> </div> </section>);
}'";
}
;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
