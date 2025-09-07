<<<<<<< HEAD

import { Button } from "./ui/button";
=======
<<<<<<< HEAD
  const shareUrl =
import { Button } from './ui/button'
>>>>>>> merged-prs-20250907-203621
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast";
import { useTranslation } from 'react-i18next';
export function SocialShareSection() {
  const { t } = useTranslation();
<<<<<<< HEAD
=======
  // Current URL is not available during SSR, guard with typeof check

  const shareUrl =
  const shareUrl = null;
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

import { Button } from "./ui/button",
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast",
import { useTranslation } from 'react-i18next',
export function SocialShareSection() {
  const { t } = useTranslation(),
>>>>>>> merged-prs-20250907-203621
  
  // Current URL is not available during SSR, guard with typeof check
  const shareUrl = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.href)
<<<<<<< HEAD
    : '';
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
=======
    : '',
  const shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace"),
>>>>>>> merged-prs-20250907-203621
  
  // Social sharing functions
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank")
<<<<<<< HEAD
  };
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")
  };
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")
  };
=======
  },
  
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")
  },
  
  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")
  },
>>>>>>> merged-prs-20250907-203621
  
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        toast({
          title: "Link Copied!",
          description: "The link has been copied to your clipboard"})
      })
      .catch(() => {
        toast({
<<<<<<< HEAD
          title: t('errors.failed_to_copy'),
=======
      })
      .catch(() => {
        toast({
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
          title: t('errors.failed_to_copy'),
          title: t('errors.failed_to_copy'),
      })
      .catch(() => {
        toast({
          title: t('errors.failed_to_copy'),
          description: 'Please try again or copy the URL manually',
          variant: 'destructive',
        })
      })
  }
>>>>>>> merged-prs-20250907-203621
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        })
      })
<<<<<<< HEAD
  };
=======
  },
>>>>>>> merged-prs-20250907-203621

  const shareLinks = [
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" aria-hidden="true" />, 
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80",
      onClick: shareToTwitter
<<<<<<< HEAD
    };
=======
    },
>>>>>>> merged-prs-20250907-203621
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" aria-hidden="true" />,
      color: "bg-[#4267B2] hover:bg-[#4267B2]/80",
      onClick: shareToFacebook
<<<<<<< HEAD
    };
=======
    },
>>>>>>> merged-prs-20250907-203621
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" aria-hidden="true" />,
      color: "bg-[#0077B5] hover:bg-[#0077B5]/80",
      onClick: shareToLinkedIn
<<<<<<< HEAD
    };
    {
=======
    },
    {
      name: 'Copy Link',
      icon: <Link className='h-5 w-5' aria-hidden='true' />,
      color: 'bg-zion-blue-dark hover:bg-zion-blue-dark/80',
      onClick: copyLinkToClipboard,
    },
  ]
>>>>>>> merged-prs-20250907-203621
      name: "Copy Link",
      icon: <Link className="h-5 w-5" aria-hidden="true" />,
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80",
      onClick: copyLinkToClipboard
<<<<<<< HEAD
    }];

  return (
=======
    }],

  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
return (
>>>>>>> merged-prs-20250907-203621
    <section className="py-12 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>
          </div>
<<<<<<< HEAD
          <div className="flex flex-wrap gap-3">
            {shareLinks.map((link, index) => (
              <Button
                key={index}
                className={`${link.color} text-white`}
                size="sm"
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
                <span aria-hidden="true">{link.name}</span>
=======
<<<<<<< HEAD
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
>>>>>>> merged-prs-20250907-203621
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
<<<<<<< HEAD
}
=======
  navigator.clipboard.writeText (window.location.href) .then ( () => {
  toast ({
}) .catch ( () => {
  toast ({
  title: t ('errors.failed to copy')
})
}
}</div> </div> </div> </section>)
}'"
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
}</div> </div> </div> </section>) ;
}'";
};

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
          </div>;
        </div>;
      </div>;
    </section>;
  );
<<<<<<< HEAD
;


}
;
=======

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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



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
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
