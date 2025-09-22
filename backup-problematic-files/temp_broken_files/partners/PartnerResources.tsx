<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
=======
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";""
import { Button } from "@/components/ui/button";""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Download, FileImage, FileText, FileType, FileVideo, Link } from 'lucide-react';
import { toast } from "@/hooks/use-toast";"
;
interface ResourceItem {;
<<<<<<< HEAD
  id:string,;
<<<<<<< HEAD
  title:string,;
=======
  title:string,,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  description:string,;
  type:'image' | 'video' | 'document' | 'link',;
  icon:JSX.Element,;
=======
  id: string;,;
  title: string;,,
  description: string;,;
  title: string;,;
  description: string;,;"
pr-12325
  type: 'image' | 'video' | 'document' | 'link';,;
  icon: JSX.Element;,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  url:string;
}
export function PartnerResources() {;
  const resources:ResourceItem[] = [;
    {;
<<<<<<< HEAD
      id:'logo-pack',;
<<<<<<< HEAD
      title:'Zion AI Logo Pack',;
      description:'Official logos in various formats (PNG, SVG, JPG)',;
=======
      title:'Zion AI Logo Pack',,
  description:'Official logos in various formats (PNG, SVG, JPG)',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      type:'image',;
      icon:<FileImage className="h-10 w-10 text-zion-purple" />,;
      url:'#';
    },;
    {;
      id:'brand-guidelines',;
<<<<<<< HEAD
      title:'Brand Guidelines',;
      description:'How to properly use our brand assets in your content',;
=======
      title:'Brand Guidelines',,
  description:'How to properly use our brand assets in your content',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      type:'document',;
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;
      url:'#';
    },;
    {;
      id:'banner-templates',;
<<<<<<< HEAD
      title:'Social Media Banners',;
      description:'Pre-designed graphics for your social channels',;
=======
      title:'Social Media Banners',,
  description:'Pre-designed graphics for your social channels',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      type:'image',;
      icon:<FileImage className="h-10 w-10 text-zion-purple" />,;
      url:'#';
    },;
    {;
      id:'promotional-video',;
<<<<<<< HEAD
      title:'Promotional Video',;
      description:'Short explainer video about Zion AI Marketplace',;
=======
      title:'Promotional Video',,
  description:'Short explainer video about Zion AI Marketplace',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      type:'video',;
      icon:<FileVideo className="h-10 w-10 text-red-500" />,;
      url:'#';
    },;
    {;
      id:'email-templates',;
<<<<<<< HEAD
      title:'Email Templates',;
      description:'Ready-to-use email templates for your audience',;
=======
      title:'Email Templates',,
  description:'Ready-to-use email templates for your audience',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      type:'document',;
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;
      url:'#';
    },;
    {;
      id:'talking-points',;
<<<<<<< HEAD
      title:'Talking Points',;
      description:'Key messages and benefits to highlight',;
=======
      title:'Talking Points',,
  description:'Key messages and benefits to highlight',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      type:'document',;
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;
=======
      id: 'logo-pack';,;
      title: 'Zion AI Logo Pack';,,
  description: 'Official logos in various formats (PNG;, SVG, JPG)',;
      type: 'image';,;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />;,;
      url:'#';
    },;
    {;
      id: 'brand-guidelines';,;
      title: 'Brand Guidelines';,,
  description: 'How to properly use our brand assets in your content';,;
      type: 'document';,;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />;,;
      url:'#';
    },;
    {;
      id: 'banner-templates';,;
      title: 'Social Media Banners';,,
  description: 'Pre-designed graphics for your social channels';,;
      type: 'image';,;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />;,;
      url:'#';
    },;
    {;
      id: 'promotional-video';,;
      title: 'Promotional Video';,,
  description: 'Short explainer video about Zion AI Marketplace';,;
      type: 'video';,;
      icon: <FileVideo className="h-10 w-10 text-red-500" />;,;
      url:'#';
    },;
    {;
      id: 'email-templates';,;
      title: 'Email Templates';,,
  description: 'Ready-to-use email templates for your audience';,;
      type: 'document';,;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />;,;
      url:'#';
    },;
    {;
      id: 'talking-points';,;
      title: 'Talking Points';,,
  description: 'Key messages and benefits to highlight';,;
      type: 'document';,;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />;,;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      url:'#';
    }
  ],;
;
  const handleDownload = (resource:ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
<<<<<<< HEAD
<<<<<<< HEAD
      title:"Download started",;
      description:`Downloading ${resource.title}`,;
=======
      title:"Download started",,
  description:`Downloading ${resource.title}`,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      variant:"default"}),;
=======
      title: "Download started";,,
  description: `Downloading ${resource.title;}`,;
      variant: "default";}),;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  },;
;
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />;,;"
"
      icon: <FileText className="h-10 w-10 text-zion-cyan" />;,;"
      icon: <FileVideo className="h-10 w-10 text-red-500" />;,;"
    <div className="space-y-6">;"
</div>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"

pr-12325
        <CardHeader>;
<<<<<<< HEAD
          <CardTitle>Marketing Resources</CardTitle>;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

          <CardTitle>Marketing Resources;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          <CardDescription>;

        <CardContent>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;
            {resources.map((resource) => (;
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;
                <CardContent className="p-6 flex flex-col items-center text-center">;
                  <div className="mb-4">;
                    {resource.icon}
                  </div>;
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>;
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>;
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;"
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;"
                <CardContent className="p-6 flex flex-col items-center text-center">;"
                  <div className="mb-4">;"
</div>
                  </div>;"
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>;""
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <Button ;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    onClick={() => handleDownload(resource)}
<<<<<<< HEAD
                    size="sm";
                    variant="outline";
                    className="w-full flex items-center gap-2";
                  >;
                    <Download className="h-4 w-4" />;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

=======
                    {resource.type === 'link' ? 'Visit Link' :'Download'}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/partners/PartnerResources.tsx
=======
                    {resource.type === 'link' ? 'Visit Link' :'Download'}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                  </Button>;
                </CardContent>;
              </Card>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <CardContent className="space-y-4">;
          <div className="space-y-2">;
=======
                    <Download className="h-4 w-4" />;"

          </div>;
      ;"


          <CardTitle>Promotion Guidelines;

        <CardContent className="space-y-4">;"
          <div className="space-y-2">;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <h3 className="text-lg font-semibold text-white">Do's</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;"
</ul>
              <li>Use our official brand assets from the resources provided</li>;
              <li>Share your unique referral link in your content</li>;
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;"
              <li>Be transparent that you're a partner and may earn from referrals</li>;
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>;
              <li>Make unrealistic promises about earnings or results</li>;
              <li>Use manipulative or misleading marketing tactics</li>;
              <li>Spam your referral link across unrelated content</li>;
              <li>Modify or alter our brand assets in unauthorized ways</li>;
              <li>Create fake accounts or use bots to generate referrals</li>;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            </ul>;
          </div>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Partner Support</CardTitle>;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        <CardContent className="flex flex-col items-center text-center py-6">;
          <p className="text-zion-slate-light mb-4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg-zion-purple hover:bg-zion-purple-dark">;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/partners/PartnerResources.tsx

}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    </div>;
  );}
 interface ResourceItem {;
  id: string;
<<<<<<< HEAD
<<<<<<< HEAD
title: string;
description: string;
=======
title: string,
=======
title: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  description: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
type: 'image' | 'video' | 'document' | 'link';
icon: JSX.Element;
url: string ;
}const resources: ResourceItem[] = [ {;
  const handleDownload = (resource: ResourceItem) => {;
<<<<<<< HEAD
  //In a real app, this would download the actual resource toast ({;
  ;
=======
  //In a real app, this would download the actual resource toast ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};
:temp_broken_files/partners/PartnerResources.tsx
pr-12325

<<<<<<< HEAD
}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>) ;"}'"
}</div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines</CardTitle> <CardDescription> Best practices for promoting the Zion AI Marketplace </CardDescription> </CardHeader> <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div> </CardContent> </Card> <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support</CardTitle> <CardDescription> Need help with your affiliate marketing? Contact our partner support team. </CardDescription> </CardHeader> <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support </Button> </CardContent> </Card> </div>) ;
}'"
ursor/fix-lint-push-and-merge-to-main-e10e:src/components/partners/PartnerResources.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330:backup-problematic-files/temp_broken_files/partners/PartnerResources.tsx
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

          <CardTitle>Partner Support;

        <CardContent className="flex flex-col items-center text-center py-6">;"
          <p className="text-zion-slate-light mb-4">;"
</p>
          </p>;"
          <Button className="bg-zion-purple hover:bg-zion-purple-dark">;"

}</div>   <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines <CardDescription> Best practices for promoting the Zion AI Marketplace   <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div>   <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support <CardDescription> Need help with your affiliate marketing? Contact our partner support team.   <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support    </div>) ;"}'"""
}</div>   <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Promotion Guidelines <CardDescription> Best practices for promoting the Zion AI Marketplace   <CardContent className="space-y-4" > <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Do's</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Use our official brand assets from the resources provided</li> <li>Share your unique referral link in your content</li> <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li> <li>Be transparent that you're a partner and may earn from referrals</li> <li>Focus on how the platform can help your audience solve their AI talent needs</li> </ul> </div> <div className="space-y-2" > <h3 className="text-lg font-semibold text-white" >Don'ts</h3> <ul className="list-disc pl-5 space-y-1 text-zion-slate-light" > <li>Make unrealistic promises about earnings or results</li> <li>Use manipulative or misleading marketing tactics</li> <li>Spam your referral link across unrelated content</li> <li>Modify or alter our brand assets in unauthorized ways</li> <li>Create fake accounts or use bots to generate referrals</li> </ul> </div>   <Card className="bg-zion-blue-dark border-zion-blue-light" > <CardHeader> <CardTitle>Partner Support <CardDescription> Need help with your affiliate marketing? Contact our partner support team.   <CardContent className="flex flex-col items-center text-center py-6" > <p className="text-zion-slate-light mb-4" > Our partner success team is available to help you maximize your partnership with Zion AI Marketplace. Feel free to reach out if you have questions about promotions, resources, or payment. </p> Contact Partner Support    </div>) ;"]"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
