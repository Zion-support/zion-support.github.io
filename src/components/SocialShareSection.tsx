import { Button } from './ui/button',
import { Twitter, Facebook, Linkedin, Link } from 'lucide-react',
import { toast } from "@/hooks/use-toast",
import { useTranslation } from 'react-i18next',
export function SocialShareSection() {
  const { t } = useTranslation();

  const shareLinks = [
    {
      name: 'Twitter',
      icon: <Twitter className="h-4 w-4" />,
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => {
        const url = typeof window !== 'undefined' ? window.location.href : '',
        const text = 'Check out Zion - The future of AI & tech marketplace!';
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    },
    {
      name: 'Facebook',
      icon: <Facebook className="h-4 w-4" />,
      color: 'bg-blue-600 hover:bg-blue-700',
      onClick: () => {
        const url = typeof window !== 'undefined' ? window.location.href : '',
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
      color: 'bg-blue-700 hover:bg-blue-800',
      onClick: () => {
        const url = typeof window !== 'undefined' ? window.location.href : '',
        const text = 'Check out Zion - The future of AI & tech marketplace!';
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank');
    },
    {
      name: 'Copy Link',
      icon: <Link className="h-4 w-4" />,
      color: 'bg-gray-600 hover:bg-gray-700',
      onClick: () => {
        if (typeof window !== 'undefined' && navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            toast({
              title: "Link Copied",
              description: "The link has been copied to your clipboard."});
          }).catch(() => {
            toast({
              title: "Copy Failed",
              description: "Failed to copy the link. Please try again.",
              variant: "destructive"});
          });
        }
      }
    }
  ];

  return (
    <section className='py-12 bg-zion-blue'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-zion-blue-light border border-zion-purple/20 rounded-lg p-6'>
          <div>
            <h3 className='text-xl font-bold text-white mb-2'>
              Share Zion with Your Network
            </h3>
            <p className='text-zion-slate-light'>
              Help others discover the future of AI & tech marketplace
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            {shareLinks.map((link, index) => (
              <Button
                key={index}
                className={`${link.color} text-white`}
                size='sm'
                onClick={link.onClick}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
                <span className='sr-only'>{link.name}</span>
                <span aria-hidden='true' className='ml-2'>{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
