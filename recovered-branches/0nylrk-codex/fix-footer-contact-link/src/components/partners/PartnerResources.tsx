
<<<<<<< HEAD

=======
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Download, FileImage, FileText, FileType, FileVideo, Link} from "lucide-react";
import {toast} from "@/hooks/use-toast";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",

import { toast } from "@/hooks/use-toast",
>>>>>>> origin/cursor/delete-old-data-records-6bba
interface ResourceItem {

  id: string
  title: string
  description: string
  type: 'image' | 'video' | 'document' | 'link'
  icon: JSX.Element

  url: string
}
export function PartnerResources() {
  const resources: ResourceItem[] = [
    {

<<<<<<< HEAD



=======
      type: 'image',
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,
      url: '#'
    },
import { toast } from "@/hooks/use-toast",
>>>>>>> origin/cursor/delete-old-data-records-6bba

      id: 'logo-pack',

    {

      id: 'brand-guidelines'
      title: 'Brand Guidelines'
      description: 'How to properly use our brand assets in your content'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />

      url: '#'


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: 'banner-templates'
      title: 'Social Media Banners'
      description: 'Pre-designed graphics for your social channels'
      type: 'image'
      icon: <FileImage className="h-10 w-10 text-zion-purple" />
      url: '#'


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {

      id: 'promotional-video'
      title: 'Promotional Video'
      description: 'Short explainer video about Zion AI Marketplace'
      type: 'video'
      icon: <FileVideo className="h-10 w-10 text-red-500" />
      url: '#'


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: 'email-templates'
      title: 'Email Templates'
      description: 'Ready-to-use email templates for your audience'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />
      url: '#'


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    {
      id: 'talking-points'
      title: 'Talking Points'
      description: 'Key messages and benefits to highlight'
      type: 'document'
      icon: <FileText className="h-10 w-10 text-zion-cyan" />

      url: '#'

  ],


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleDownload = (resource: ResourceItem) => {

    // In a real app, this would download the actual resource
    toast({
      title: "Download started"
      description: `Downloading ${resource.title}`
<<<<<<< HEAD

      variant: "default"})

=======


  },

  return (
    <div className="space - y-6">;

      <Card className="bg - zion - blue - dark border - zion - blue - light">;

        <CardHeader>;
          <CardTitle > Marketing Resources</CardTitle>;


>>>>>>> origin/cursor/delete-old-data-records-6bba
                  <Button

                    onClick={() => handleDownload(resource)}
                    size="sm"
                    variant="outline"

                    className="w-full flex items-center gap-2"

                    <Download className="h-4 w-4" />

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;
import { Button } from "@/components/ui/button",;
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;

import { toast } from "@/hooks/use-toast",;

<<<<<<< HEAD


      <Card className="bg-zion-blue-dark border-zion-blue-light">;

=======
interface ResourceItem {;
  id: string,;
  title: string,;
  description: string,;
  type: 'image' | 'video' | 'document' | 'link',;
  icon: JSX.Element,;
  url: string;
}
;
export function PartnerResources() {;
  const resources: ResourceItem[] = [;
    {;
      id: 'logo-pack',;
      title: 'Zion AI Logo Pack',;
      description: 'Official logos in various formats (PNG, SVG, JPG)',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    },;
    {;
      id: 'brand-guidelines',;
      title: 'Brand Guidelines',;
      description: 'How to properly use our brand assets in your content',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    },;
    {;
      id: 'banner-templates',;
      title: 'Social Media Banners',;
      description: 'Pre-designed graphics for your social channels',;
      type: 'image',;
      icon: <FileImage className="h-10 w-10 text-zion-purple" />,;
      url: '#';
    },;
    {;
      id: 'promotional-video',;
      title: 'Promotional Video',;
      description: 'Short explainer video about Zion AI Marketplace',;
      type: 'video',;
      icon: <FileVideo className="h-10 w-10 text-red-500" />,;
      url: '#';
    },;
    {;
      id: 'email-templates',;
      title: 'Email Templates',;
      description: 'Ready-to-use email templates for your audience',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    },;
    {;
      id: 'talking-points',;
      title: 'Talking Points',;
      description: 'Key messages and benefits to highlight',;
      type: 'document',;
      icon: <FileText className="h-10 w-10 text-zion-cyan" />,;
      url: '#';
    }
  ],;
  const handleDownload = (resource: ResourceItem) => {;
    // In a real app, this would download the actual resource;
    toast({;
      title: "Download started",;
      description: `Downloading ${resource.title}`;
      variant: "default"});
  };
  return (;
    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <CardHeader>;
          <CardTitle>Marketing Resources</CardTitle>;
          <CardDescription>;
            Download brand assets and marketing materials to promote Zion AI;
          </CardDescription>;
        </CardHeader>;
<<<<<<< HEAD

        <CardContent>;"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;

=======
        <CardContent>;

                  </Button>
                </CardContent>
              </Card>                  </Button>;
                </CardContent>;

        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>
}
          </div>;
        </CardContent>;
      </Card>;

                  <Button
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    onClick={() => handleDownload(resource)}
                    size="sm";
                    variant="outline";

                    className="w-full flex items-center gap-2";
                  >;"
                    <Download className="h-4 w-4" />;
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}
                  </Button>
                </CardContent>
              </Card>


            ))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

          </div>
        </CardContent>
      </Card>
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Promotion Guidelines</CardTitle>
          <CardDescription>
            Best practices for promoting the Zion AI Marketplace
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Do's</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
              <li>Use our official brand assets from the resources provided</li>
              <li>Share your unique referral link in your content</li>
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>
              <li>Be transparent that you're a partner and may earn from referrals</li>
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">
              <li>Make unrealistic promises about earnings or results</li>
              <li>Use manipulative or misleading marketing tactics</li>
              <li>Spam your referral link across unrelated content</li>
              <li>Modify or alter our brand assets in unauthorized ways</li>
              <li>Create fake accounts or use bots to generate referrals</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle>Partner Support</CardTitle>
          <CardDescription>
            Need help with your affiliate marketing? Contact our partner support team.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center py-6">
          <p className="text-zion-slate-light mb-4">
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.
            Feel free to reach out if you have questions about promotions, resources, or payment.
          </p>
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">
            Contact Partner Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )

};


<<<<<<< HEAD


=======
          </div>;
        </CardContent>;
      </Card>;
"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;

                  <p className="text - xs text - zion - slate - light mb - 4">{resource.description}</p>;
                  <Button;
                    on_click={() => handle_download (resource)}"
                    size="sm";"
                    variant="outline";"
                    className="w - full flex items - center gap - 2";
                  >;"
                    <Download className="h - 4 w - 4" />;'
                    {resource.type === 'link' ? 'Visit Link' : 'Download'}


>>>>>>> origin/cursor/delete-old-data-records-6bba
                  </Button>;

                </CardContent>;
              </Card>;
            ))}
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg - zion - blue - dark border - zion - blue - light">;
        <CardHeader>;
<<<<<<< HEAD

          <CardTitle > Promotion Guidelines</CardTitle>;


=======
          <CardTitle > Promotion Guidelines</CardTitle>;
;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;
};
          </div>;
        </CardContent>;
      </Card>;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle>Promotion Guidelines</CardTitle>;

>>>>>>> origin/cursor/delete-old-data-records-6bba

          <CardDescription>;
            Best practices for promoting the Zion AI Marketplace;
          </CardDescription>;
        </CardHeader>;

<<<<<<< HEAD
                    <Download className="h - 4 w - 4" />;"

=======

                    <Download className="h - 4 w - 4" />;"

              <li > Use our official brand assets from the resources provided</li>;
              <li > Share your unique referral link in your content</li>;
              <li > Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;"
              <li > Be transparent that you're a partner and may earn from referrals</li>;
              <li > Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
            <h3 className="text - lg font - semibold text - white">Don'ts</h3>;
pr-12325
          </div>;'
          <div className="space - y-2">;"
</div>"
            <h3 className="text - lg font - semibold text - white">Don'ts</h3>;''
            <ul className="list - disc pl - 5 space - y-1 text - zion - slate - light">;"
</ul>
>>>>>>> origin/cursor/delete-old-data-records-6bba
              <li > Make unrealistic promises about earnings or results</li>;
              <li > Use manipulative or misleading marketing tactics</li>;
              <li > Spam your referral link across unrelated content</li>;
              <li > Modify or alter our brand assets in unauthorized ways</li>;


<<<<<<< HEAD

=======
<CardContent className="space-y-4">;
          <div className="space-y-2">;
            <h3 className="text-lg font-semibold text-white">Do's</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;
              <li>Use our official brand assets from the resources provided</li>;
              <li>Share your unique referral link in your content</li>;
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;
              <li>Be transparent that you're a partner and may earn from referrals</li>;
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
          </div>;
          <div className="space-y-2">;
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>;
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;
              <li>Make unrealistic promises about earnings or results</li>;
              <li>Use manipulative or misleading marketing tactics</li>;
              <li>Spam your referral link across unrelated content</li>;
              <li>Modify or alter our brand assets in unauthorized ways</li>;
              <li>Create fake accounts or use bots to generate referrals</li>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

            </ul>;
          </div>;
        </CardContent>;
      </Card>;

<<<<<<< HEAD


=======
          <CardDescription>;
            Need help with your affiliate marketing? Contact our partner support team.;
          </CardDescription>;
        </CardHeader>;
        <CardContent className="flex flex-col items-center text-center py-6">;
          <p className="text-zion-slate-light mb-4">;
            Our partner success team is available to help you maximize your partnership with Zion AI Marketplace.;
            Feel free to reach out if you have questions about promotions, resources, or payment.;
          </p>;
          <Button className="bg-zion-purple hover: bg-zion-purple-dark">;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            Contact Partner Support;
          </Button>;
        </CardContent>;
      </Card>;

    </div>);
    </div>;]"
pr-12325

}
<<<<<<< HEAD


}





=======

    </div>);
}

    </div>;
  );
}

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
