

export function SocialShareSection() {_const { t} = useTranslation();
  
  // Current window.URL is not available during SSR, guard with typeof check
  const _shareUrl = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.href)
    : '';
  const _shareText = encodeURIComponent("Check out Zion - The Future of AI & Tech Marketplace");
  
  // Social sharing functions
  const _shareToTwitter = () => {_window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${_shareText}`, "_blank");
  };
  
  const _shareToFacebook = () => {_window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank");
  };
  
  const _shareToLinkedIn = () => {_window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank");
  };
  
  const _copyLinkToClipboard = () => {_navigator.clipboard.writeText(window.location.href)
      .then__(() => {
        toast({
          title: "Link Copied!", _description: "The link has been copied to your clipboard"});
      })
      .catch__(() => {_toast({
          title: t('errors.failed_to_copy'), _description: "Please try again or copy the window.URL manually", _variant: "destructive"});
      });
  };

  const _shareLinks = [
    {_name: "Twitter", _icon: <Twitter className="h-5 w-5" aria-hidden="true" />, _color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/80", _onClick: shareToTwitter},
    {_name: "Facebook", _icon: <Facebook className="h-5 w-5" aria-hidden="true" />, _color: "bg-[#4267B2] hover:bg-[#4267B2]/80", _onClick: shareToFacebook},
    {_name: "LinkedIn", _icon: <Linkedin className="h-5 w-5" aria-hidden="true" />, _color: "bg-[#0077B5] hover:bg-[#0077B5]/80", _onClick: shareToLinkedIn},
    {_name: "Copy Link", _icon: <Link className="h-5 w-5" aria-hidden="true" />, _color: "bg-zion-blue-dark hover:bg-zion-blue-dark/80", _onClick: copyLinkToClipboard}];

  return (_<section className="py-12 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>
          </div>
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
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
