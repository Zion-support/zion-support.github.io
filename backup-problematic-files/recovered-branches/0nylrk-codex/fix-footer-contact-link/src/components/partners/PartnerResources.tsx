import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",;""
import { Button } from "@/components/ui/button",;""
import { Download, FileImage, FileText, FileType, FileVideo, Link } from "lucide-react",;""
import { toast } from "@/hooks/use-toast",;"
;
interface ResourceItem {;
  id:string,;
  title:string,;
  description:string,;"
  type:'image' | 'video' | 'document' | 'link',;'
  icon:JSX.Element,;
  url:string;
}
;
export function PartnerResources() {;
  const resources:ResourceItem[] = [;
    {;'
      id:'logo-pack',;''
      title:'Zion AI Logo Pack',;''
      description:'Official logos in various formats (PNG, SVG, JPG)',;''
      type:'image',;''
      icon:<FileImage className="h-10 w-10 text-zion-purple" />,;"
</FileImage>"
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;"
</FileText>"
      icon:<FileImage className="h-10 w-10 text-zion-purple" />,;"
</FileImage>"
      icon:<FileVideo className="h-10 w-10 text-red-500" />,;"
</FileVideo>"
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;"
</FileText>"
      icon:<FileText className="h-10 w-10 text-zion-cyan" />,;"
</FileText>"
    <div className="space-y-6">;"
</div>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"
</Card>
        <CardHeader>;
</CardHeader>
          <CardTitle>Marketing Resources</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
        </CardHeader>;
        <CardContent>;
</CardContent>"
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">;"
</div>"
              <Card key={resource.id} className="bg-zion-blue border-zion-blue-light overflow-hidden">;"
</Card>"
                <CardContent className="p-6 flex flex-col items-center text-center">;"
</CardContent>"
                  <div className="mb-4">;"
</div>
                  </div>;"
                  <h3 className="font-semibold text-white mb-1">{resource.title}</h3>;""
                  <p className="text-xs text-zion-slate-light mb-4">{resource.description}</p>;"
                  <Button ;
                    onClick={() => handleDownload(resource)}
</Button>"
                    <Download className="h-4 w-4" />;"
</Download>
                  </Button>;
                </CardContent>;
              </Card>;
          </div>;
        </CardContent>;
      </Card>;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"
</Card>
        <CardHeader>;
</CardHeader>
          <CardTitle>Promotion Guidelines</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
        </CardHeader>;"
        <CardContent className="space-y-4">;"
</CardContent>"
          <div className="space-y-2">;"
</div>"
            <h3 className="text-lg font-semibold text-white">Do's</h3>;''
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;"
</ul>
              <li>Use our official brand assets from the resources provided</li>;
              <li>Share your unique referral link in your content</li>;
              <li>Highlight the benefits of the Zion AI Marketplace for both talent and clients</li>;"
              <li>Be transparent that you're a partner and may earn from referrals</li>;'
              <li>Focus on how the platform can help your audience solve their AI talent needs</li>;
            </ul>;
          </div>;'
          <div className="space-y-2">;"
</div>"
            <h3 className="text-lg font-semibold text-white">Don'ts</h3>;''
            <ul className="list-disc pl-5 space-y-1 text-zion-slate-light">;"
</ul>
              <li>Make unrealistic promises about earnings or results</li>;
              <li>Use manipulative or misleading marketing tactics</li>;
              <li>Spam your referral link across unrelated content</li>;
              <li>Modify or alter our brand assets in unauthorized ways</li>;
              <li>Create fake accounts or use bots to generate referrals</li>;
            </ul>;
          </div>;
        </CardContent>;
      </Card>;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"
</Card>
        <CardHeader>;
</CardHeader>
          <CardTitle>Partner Support</CardTitle>;
          <CardDescription>;
</CardDescription>
          </CardDescription>;
        </CardHeader>;"
        <CardContent className="flex flex-col items-center text-center py-6">;"
</CardContent>"
          <p className="text-zion-slate-light mb-4">;"
</p>
          </p>;"
          <Button className="bg-zion-purple hover:bg-zion-purple-dark">;"
</Button>
          </Button>;
        </CardContent>;
      </Card>;
    </div>;]"