<<<<<<< HEAD
import { Button } from './ui/button'
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react'
import { toast } from "./ui/use-toast";
import { useTranslation } from 'react-i18next';
=======
import { Button } from './ui/button';
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react';
import { toast } from './ui/use-toast';
import { useTranslation } from 'react-i18next';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function SocialShareSection() {
  const { t } = useTranslation();
  // Current URL is not available during SSR, guard with typeof check
<<<<<<< HEAD

  const shareUrl =
=======
  const shareUrl = null;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======

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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      })
      .catch(() => {
        toast({
<<<<<<< HEAD
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
=======
          title: t('errors.failed_to_copy'),
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
      })
      .catch(() => {
        toast({
          title: t('errors.failed_to_copy'),
<<<<<<< HEAD
          description: 'Please try again or copy the URL manually',
          variant: 'destructive',
        })
      })
  }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          description: "Please try again or copy the URL manually",
          variant: "destructive"
        })
      })
  },

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      name: 'Copy Link',
      icon: <Link className='h-5 w-5' aria-hidden='true' />,
      color: 'bg-zion-blue-dark hover:bg-zion-blue-dark/80',
      onClick: copyLinkToClipboard,
    },
  ]
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      name: "Copy Link",
      icon: <Link className="h-5 w-5" aria-hidden="true" />,
      color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80",
      onClick: copyLinkToClipboard
    }],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
    <section className="py-12 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>
          </div>
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
}
}</div> </div> </div> </section>)
}'"
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
}
=======
};
}</div> </div> </div> </section>) ;
}'";
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
