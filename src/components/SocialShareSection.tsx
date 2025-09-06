
=======
  const shareUrl =
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
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

  return (
    <section className="py-12 bg-zion-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Share Zion with Your Network</h3>
            <p className="text-zion-slate-light">Help others discover the future of AI & tech marketplace</p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
};
}</div> </div> </div> </section>) ;
}'";
};
<<<<<<< HEAD
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
