<<<<<<< HEAD
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react'
import { toast } from "@/hooks/use-toast",
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from &quot;@/components/ui/card&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react'
import { toast } from &quot;@/hooks/use-toast&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface ResourceItem {
  id: string,
  title: string,
  description: string,
  type: 'image' | 'video' | 'document' | 'link',
  icon: JSX.Element,
  url: string
}
=======

interface ResourceItem {_id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'document' | 'link';
  icon: JSX.Element;
  url: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function PartnerResources() {_const resources: ResourceItem[] = [
    {
<<<<<<< HEAD
      id: 'logo-pack',
      title: 'Zion AI Logo Pack',
      description: 'Official logos in various formats (PNG, SVG, JPG)',
      type: 'image',
      icon: <FileImage className=&quot;h-10 w-10 text-zion-purple&quot; />,
      url: '#'
    },
    {
      id: 'brand-guidelines',
      title: 'Brand Guidelines',
      description: 'How to properly use our brand assets in your content',
      type: 'document',
      icon: <FileText className=&quot;h-10 w-10 text-zion-cyan&quot; />,
      url: '#'
    },
    {
      id: 'banner-templates',
      title: 'Social Media Banners',
      description: 'Pre-designed graphics for your social channels',
      type: 'image',
      icon: <FileImage className=&quot;h-10 w-10 text-zion-purple&quot; />,
      url: '#'
    },
    {
      id: 'promotional-video',
      title: 'Promotional Video',
      description: 'Short explainer video about Zion AI Marketplace',
      type: 'video',
      icon: <FileVideo className=&quot;h-10 w-10 text-red-500&quot; />,
      url: '#'
    },
    {
      id: 'email-templates',
      title: 'Email Templates',
      description: 'Ready-to-use email templates for your audience',
      type: 'document',
      icon: <FileText className=&quot;h-10 w-10 text-zion-cyan&quot; />,
      url: '#'
    },
    {
      id: 'talking-points',
      title: 'Talking Points',
      description: 'Key messages and benefits to highlight',
      type: 'document',
      icon: <FileText className=&quot;h-10 w-10 text-zion-cyan&quot; />,
      url: '#'
    }
  ],
=======
      id: 'logo-pack', _title: 'Zion AI Logo Pack', _description: 'Official logos in various formats (PNG, _SVG, _JPG)', _type: 'image', _icon: <FileImage className="h-10 w-10 text-zion-purple" />, _url: '#'},
    {_id: 'brand-guidelines', _title: 'Brand Guidelines', _description: 'How to properly use our brand assets in your content', _type: 'document', _icon: <FileText className="h-10 w-10 text-zion-cyan" />, _url: '#'},
    {_id: 'banner-templates', _title: 'Social Media Banners', _description: 'Pre-designed graphics for your social channels', _type: 'image', _icon: <FileImage className="h-10 w-10 text-zion-purple" />, _url: '#'},
    {_id: 'promotional-video', _title: 'Promotional Video', _description: 'Short explainer video about Zion AI Marketplace', _type: 'video', _icon: <FileVideo className="h-10 w-10 text-red-500" />, _url: '#'},
    {_id: 'email-templates', _title: 'Email Templates', _description: 'Ready-to-use email templates for your audience', _type: 'document', _icon: <FileText className="h-10 w-10 text-zion-cyan" />, _url: '#'},
    {_id: 'talking-points', _title: 'Talking Points', _description: 'Key messages and benefits to highlight', _type: 'document', _icon: <FileText className="h-10 w-10 text-zion-cyan" />, _url: '#'}
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const _handleDownload = (_resource: ResourceItem) => {_// In a real app, _this would download the actual resource
    toast({
<<<<<<< HEAD
      title: &quot;Download started&quot;,
      description: `Downloading ${resource.title}`,
<<<<<<< HEAD
      variant: "default"})
  },
=======
      variant: &quot;default&quot;});
=======
      title: "Download started", _description: `Downloading ${resource.title}`,
      variant: "default"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  return (
    <div className=&quot;space-y-6&quot;>
      <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
=======
  return (_<div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        <CardHeader>
          <CardTitle>Marketing Resources</CardTitle>
          <CardDescription>
            Download brand assets and marketing materials to promote Zion AI
          </CardDescription>
        </CardHeader>
        <CardContent>
<<<<<<< HEAD
          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {resources.map((resource) => (
              <Card key={resource.id} className=&quot;bg-zion-blue border-zion-blue-light overflow-hidden&quot;>
                <CardContent className=&quot;p-6 flex flex-col items-center text-center&quot;>
                  <div className=&quot;mb-4&quot;>
                    {resource.icon}
                  </div>
                  <h3 className=&quot;font-semibold text-white mb-1&quot;>{resource.title}</h3>
                  <p className=&quot;text-xs text-zion-slate-light mb-4&quot;>{resource.description}</p>
                  <Button 
                    onClick={() => handleDownload(resource)}
                    size=&quot;sm&quot;
                    variant=&quot;outline&quot;
                    className=&quot;w-full flex items-center gap-2&quot;
                  >
                    <Download className=&quot;h-4 w-4&quot; />
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {_resources.map((resource) => (_<Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {_resource.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-1">{_resource.title}</h3>
                  <p className="text-xs text-zion-slate-light mb-4">{_resource.description}</p>
                  <Button 
                    onClick={_() => handleDownload(resource)}
                    size="sm"
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    {_resource.type === 'link' ? 'Visit Link' : 'Download'}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
        <CardHeader>
          <CardTitle>Promotion Guidelines</CardTitle>
          <CardDescription>
            Best practices for promoting the Zion AI Marketplace
          </CardDescription>
        </CardHeader>
        <CardContent className=&quot;space-y-4&quot;>
          <div className=&quot;space-y-2&quot;>
            <h3 className=&quot;text-lg font-semibold text-white&quot;>Do's</h3>
            <ul className=&quot;list-disc pl-5 space-y-1 text-zion-slate-light&quot;>
              <li>Use our official brand assets from the resources provided</li>
              <li>Share your unique referral link in your content</li>
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>
              <li>Be transparent that you're a partner and may earn from referrals</li>
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>
            </ul>
          </div>

          <div className=&quot;space-y-2&quot;>
            <h3 className=&quot;text-lg font-semibold text-white&quot;>Don'ts</h3>
            <ul className=&quot;list-disc pl-5 space-y-1 text-zion-slate-light&quot;>
              <li>Make unrealistic promises about earnings or results</li>
              <li>Use manipulative or misleading marketing tactics</li>
              <li>Spam your referral link across unrelated content</li>
              <li>Modify or alter our brand assets in unauthorized ways</li>
              <li>Create fake accounts or use bots to generate referrals</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className=&quot;bg-zion-blue-dark border-zion-blue-light&quot;>
        <CardHeader>
          <CardTitle>Partner Support</CardTitle>
          <CardDescription>
            Need help with your affiliate marketing? Contact our partner support team.
          </CardDescription>
        </CardHeader>
        <CardContent className=&quot;flex flex-col items-center text-center py-6&quot;>
          <p className=&quot;text-zion-slate-light mb-4&quot;>
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.
            Feel free to reach out if you have questions about promotions, resources, or payment.
          </p>
<<<<<<< HEAD
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">
=======
          <Button className=&quot;bg-zion-purple hover:bg-zion-purple-dark&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            Contact Partner Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}