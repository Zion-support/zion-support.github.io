import { Button } from './ui/button';
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export function SocialShareSection() {
  const { toast } = useToast();

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = 'Check out Zion Tech Group - AI-powered business solutions!';

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);
    
    let shareLink = '';
    
    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        toast('Link copied to clipboard!', 'success');
        return;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className='py-12 bg-zion-blue'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6'>
          <div>
            <h3 className='text-xl font-bold text-white mb-2'>
              Share Zion with Your Network
            </h3>
            <p className='text-zion-slate-light'>
              Help others discover our innovative AI solutions
            </p>
          </div>
          
          <div className='flex flex-wrap gap-3'>
            <Button
              onClick={() => handleShare('twitter')}
              className='bg-blue-500 hover:bg-blue-600 text-white'
            >
              <Twitter className='h-4 w-4 mr-2' />
              Twitter
            </Button>
            
            <Button
              onClick={() => handleShare('facebook')}
              className='bg-blue-600 hover:bg-blue-700 text-white'
            >
              <Facebook className='h-4 w-4 mr-2' />
              Facebook
            </Button>
            
            <Button
              onClick={() => handleShare('linkedin')}
              className='bg-blue-700 hover:bg-blue-800 text-white'
            >
              <Linkedin className='h-4 w-4 mr-2' />
              LinkedIn
            </Button>
            
            <Button
              onClick={() => handleShare('copy')}
              variant='outline'
              className='border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white'
            >
              <Link className='h-4 w-4 mr-2' />
              Copy Link
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}