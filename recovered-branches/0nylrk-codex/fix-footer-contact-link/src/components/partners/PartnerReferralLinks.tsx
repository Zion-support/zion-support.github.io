>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Download, Link, Plus} from "lucide-react";
import {toast} from "@/hooks/use-toast";
import {useReferrals} from "@/hooks/useReferrals";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
export function PartnerReferralLinks() {;
=======

export function PartnerReferralLinks() {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");

=======

  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
  
  // Get the base referral link
  const baseLink = getReferralLink(),
  
      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("");
    }
=======
  }      },
      
      setGeneratedLinks(prev => [...prev, newLink]),
      setIsDialogOpen(false),
      setCustomParam("")
    }
  },
  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleDownloadLinks = () => {
    const allLinks = [
      { name: "Default", link: baseLink }
      ...generatedLinks
  };
  const handleDownloadLinks = () => {;
    const allLinks = [;
      { name: "Default", link: baseLink },;
      ...generatedLinks;
    ];
    const csvContent = [;

      "Name,Link";
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);
    ].join("\n");


    ],
    

    const csvContent = [
      "Name,Link",
      ...allLinks.map(l => `${l.name},${l.link}`)
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ].join("\n"),
    
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),
    const link = document.createElement("a"),
    link.setAttribute("href", url),
    link.setAttribute("download", "zion_referral_links.csv"),
    link.style.visibility = 'hidden',
    document.body.appendChild(link),
    link.click(),
    document.body.removeChild(link)
  },
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  return (
    <div className="space-y-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Referral Link</span>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      "Name,Link";
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);
    ].join("\n");
=======

    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL && URL.createObjectURL(blob);
    const link = document && document.createElement("a");
    link && link.setAttribute("href", url);
    link && link.setAttribute("download", "zion_referral_links && zion_referral_links.csv");
    link && link.style.visibility = 'hidden';
    document && document.body.appendChild(link);
    link && link.click();
    document && document.body.removeChild(link);
  };
  return (    <div className="space-y-6">;
      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="flex items-center justify-between">;
            <span>Your Referral Link</span>;
            <Button
              variant="outline" 
              size="sm" 

            <Button 
              variant="outline" 
              size="sm" 

              <div className="grid gap - 2">;
                <Label html_for="custom">Custom Parameter (Optional)</Label>;
                <Input;
                  id="custom";
                  placeholder="spring_campaign, video_123, etc.";
                  value={custom_param}
                  on_change={(e) => setCustomParam (e.target.value)}
                />;
              </div>;
            </div>;
            <DialogFooter>;
              <Button;
                type="button";
                variant="secondary";
                on_click={() => setIsDialogOpen (false)}
              >;
                Cancel;
              </Button>;
              <Button;
                type="button";
                on_click={handleGenerateLink}
                className="bg - zion - purple hover:bg - zion - purple - dark";
              >;
                Generate Link;
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
                  />;                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopyLink(item.link)}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="bg-zion-blue/20 border-dashed border-zion-blue-light">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <p className="text-zion-slate-light text-center mb-4">
                Create custom campaign links to track different marketing efforts
              </p>
              <Button 

                variant="outline"
              <Button ;
                variant="outline";
=======
              <Button
              <Button 
                variant="outline"                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2";
              >;
                <Plus className="h-4 w-4" />;
                Create First Link;
              </Button>;
            </CardContent>;
          </Card>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  ),; export function PartnerReferralLinks () {
  const {
  referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia 
}= useReferrals ();
const [isDialogOpen, setIsDialogOpen] = useState (false);
};
}//Add custom parameter if provided if (customParam) {
  
}const newLink = {
  name: `$ {
  selectedCampaign 
}$ {
  customParam ? `-$ {
  customParam 
}`: "" 
}`;
};
}
};
...generatedLinks ];
link.style.visibility = 'hidden';
document.body.appendChild (link);
link.click ();
document.body.removeChild (link);
};
  baseLink 
}readOnly className="font-mono text-sm"/> <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card> <div className="flex justify-between items-center"> <DialogTrigger asChild> <Button variant=" outline"size=" sm"className="flex items-center gap-2"> <Plus className="h-4 w-4"/> Create New Link </Button> </DialogTrigger> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Create Custom Campaign Link</DialogTitle> <DialogDescription> Generate a trackable link for specific marketing campaigns </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4"> <div className="grid gap-2"> <Label htmlFor=" campaign">Campaign Type</Label> <Select value= {
  selectedCampaign 
}onValueChange= {
  setSelectedCampaign 
}> <SelectTrigger id=" campaign"> <SelectValue placeholder=" Select campaign type"/> </SelectTrigger> <SelectContent> <SelectItem value=" default">General (Default) </SelectItem> <SelectItem value=" youtube">YouTube</SelectItem> <SelectItem value=" newsletter">Newsletter</SelectItem> <SelectItem value=" blog">Blog</SelectItem> <SelectItem value=" podcast">Podcast</SelectItem> <SelectItem value=" social">Social Media</SelectItem> </SelectContent> </Select> </div> <div className="grid gap-2"> <Label htmlFor=" custom">Custom Parameter (Optional) </Label> <Input /> </div> </div> <DialogFooter> <Button > Cancel </Button> <Button className="bg-zion-purple hover:bg-zion-purple-dark"> Generate Link </Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className="grid gap-4"> {
  generatedLinks.length > 0 ? (generatedLinks.map ( (item, index) => (<Card key= {
  index 
}className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-base flex items-center justify-between"> <div className="flex items-center gap-2"> </div> </CardTitle> </CardHeader> <CardContent className="pb-4"> <div className="flex space-x-2"> <Input value= {
  item.link 
}readOnly className="font-mono text-xs"/> <Button > <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card>) ) ) : (<Card className="bg-zion-blue/20 border-dashed border-zion-blue-light"> <CardContent className="flex flex-col items-center justify-center p-6"> <p className="text-zion-slate-light text-center mb-4"> Create custom campaign links to track different marketing efforts </p> <Button className="flex items-center gap-2"> <Plus className="h-4 w-4" /> Create First Link </Button> </CardContent> </Card>) 
}</div> </div>) 
              <Button
              <Button 
                variant="outline"
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Create First Link
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
=======
=======  );
=======
      <div className="grid gap - 4">;
        {generated_links.length > 0 ? (
          generated_links.map ((item, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - blue - light">;
              <CardHeader className="pb - 2">;
                <CardTitle className="text - base flex items - center justify - between">;
                  <div className="flex items - center gap - 2">;
                    <Link className="h - 4 w - 4 text - zion - purple" />;
                    <span>{item.name || "Campaign Link"}</span>;
                  </div>;
                </CardTitle>;
              </CardHeader>;
              <CardContent className="pb - 4">;
                <div className="flex space - x-2">;
                  <Input;
                    value={item.link}
                    read_only;
                    className="font - mono text - xs";
                  />;
                  <Button;
                    variant="outline";
                    size="sm";
                    on_click={() => handleCopyLink (item.link)}
                  >;
                    <Copy className="h - 4 w - 4" />;
                    <span className="sr - only">Copy</span>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>))) : (
          <Card className="bg - zion - blue / 20 border - dashed border - zion - blue - light">;
            <CardContent className="flex flex - col items - center justify - center p - 6">;
              <p className="text - zion - slate - light text - center mb - 4">;
                Create custom campaign links to track different marketing efforts;
              </p>;
              <Button;
                variant="outline";
                on_click={() => setIsDialogOpen (true)}
                className="flex items - center gap - 2";
              >;
                <Plus className="h - 4 w - 4" />;
                Create First Link;
              </Button>;
            </CardContent>;
          </Card>)}
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}