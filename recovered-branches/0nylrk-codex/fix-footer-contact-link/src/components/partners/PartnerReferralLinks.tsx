import {useRef, useState} from "react";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Copy, Download, Link, Plus} from "lucide-react";
import {toast} from "@/hooks/use-toast";
import {useReferrals} from "@/hooks/useReferrals";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    toast({
      title: "Link copied!"
      description: "The referral link has been copied to your clipboard"
      variant: "default"
    })


import {useRef, useState} from "react";""
import {Button} from "@/components/ui/button";""
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";""
import {Input} from "@/components/ui/input";""
import {Copy, Download, Link, Plus} from "lucide-react";""
import {toast} from "@/hooks/use-toast";""
import {useReferrals} from "@/hooks/useReferrals";""
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";""
import {Label} from "@/components/ui/label";""
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";"
export function PartnerReferralLinks() {;

  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
"
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");"
</string>"
  const [customParam, setCustomParam] = useState<string>("");"
</string>
  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
  
  // Get the base referral link;
  const baseLink = getReferralLink(),
  

  
  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link)
    toast({"
      title: "Link copied!"","
  description: "The referral link has been copied to your clipboard"""
      variant: "default"")
    })


pr-12325
  },
  
  const handleGenerateLink = () => {
    if (baseLink) {
      const url = new URL(baseLink),
      

      // Add custom campaign parameter if selected
      if (selectedCampaign !== "default") {
        url.searchParams.append("campaign", selectedCampaign)
      }
      // Add custom parameter if provided
      if (customParam) {
        url.searchParams.append("source", customParam)
      }
      const newLink = {
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`
        link: url.toString()      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("");
    }  const handleDownloadLinks = () => {
    const allLinks = [
      { name: "Default", link: baseLink }
      ...generatedLinks      <Card className="bg-zion-blue-dark border-zion-blue-light">;
        <CardHeader>;
          <CardTitle className="flex items-center justify-between">;
            <span>Your Referral Link</span>;
            <Button
              variant="outline" 
              size="sm" 

            <Button 
              variant="outline" 
              size="sm" 

              onClick={handleDownloadLinks}
              className="flex items-center gap-2">;      "Name,Link";
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);
    ].join("\n");
              onClick={handleDownloadLinks}
              className="flex items-center gap-2">;
              <Download className="h-4 w-4" />;
              Export Links;
            </Button>;
          </CardTitle>;
          <CardDescription>Share this link with your audience to earn rewards</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex space-x-2">;
            <Input
              value={baseLink}
              readOnly
              className="font-mono text-sm"                  <SelectTrigger id="campaign">;
                    <SelectValue placeholder="Select campaign type" />;
                  </SelectTrigger>;
                  <SelectContent>;
                    <SelectItem value="default">General (Default)</SelectItem>;
                    <SelectItem value="youtube">YouTube</SelectItem>;
                    <SelectItem value="newsletter">Newsletter</SelectItem>;
                    <SelectItem value="blog">Blog</SelectItem>;
                    <SelectItem value="podcast">Podcast</SelectItem>;
                    <SelectItem value="social">Social Media</SelectItem>;
                  </SelectContent>;
                </Select>;
              </div>;

              <div className="grid gap-2">;
                <Label html_for="custom">Custom Parameter (Optional)</Label>;
                <Input;
                  id="custom";
                  placeholder="spring_campaign, video_123, etc.";
                  value={custom_param}
                  on_change={(e) => setCustomParam (e.target.value)}                variant="outline"                className="flex items-center gap-2";
              >;
                <Plus className="h-4 w-4" />;
                Create First Link;
              </Button>;
            </CardContent>;
          </Card>;
        )}
      </div>;
    </div>;
  );                    <span>{item.name || "Campaign Link"}</span>;
                  </div>;
                </CardTitle>;
              </CardHeader>;
                  >;
                    <Copy className="h - 4 w-4" />;
                    <span className="sr-only">Copy</span>;
                  </Button>;
                </div>;
              </CardContent>;}

      // Add custom campaign parameter if selected;"
      if (selectedCampaign !== "default") {""
        url.searchParams.append("campaign", selectedCampaign)"
      }
      // Add custom parameter if provided;
      if (customParam) {"
        url.searchParams.append("source", customParam)"
      const newLink = {"
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`"
        link: url.toString()

  const [generatedLinks, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),;

  // Get the base referral link;
  const baseLink = getReferralLink();

  const handleCopyLink = (link: string) => {;
    navigator && navigator.clipboard.writeText(link),;
    toast({;"
      title: "Link copied!",;""
      description: "The referral link has been copied to your clipboard",;""
      variant: "default";")
    });
  };

  const handleGenerateLink = () => {;
    if (baseLink) {;
      const url = new URL(baseLink);

      // Add custom campaign parameter if selected;"
      if (selectedCampaign !== "default") {;""
        url && url.searchParams.append("campaign", selectedCampaign);"

      // Add custom parameter if provided;
      if (customParam) {;"
        url && url.searchParams.append("source", customParam);"

      const newLink = {;"`;
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`,;"
        link: url && url.toString();


      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);"
      setCustomParam("");"


      
      setGeneratedLinks(prev => [...prev, newLink]),
      setIsDialogOpen(false),"
      setCustomParam("")"
  


  const handleDownloadLinks = () => {
    const allLinks = ["
      { name: "Default", link: baseLink }"
      ...generatedLinks;

  const handleDownloadLinks = () => {;
    const allLinks = [;"
      { name: "Default", link: baseLink },;"
      ...generatedLinks;]
    ];

    const csvContent = [;
      "Name,Link";"`;
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);]"
    ].join("\n");"
    ],
    

    const csvContent = ["
      "Name,Link","`;
      ...allLinks.map(l => `${l.name},${l.link}`)
]"
    ].join("\n"),""
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' }),
    const url = URL.createObjectURL(blob),
    const link = document.createElement("a"),""
    link.setAttribute("href", url),""
    link.setAttribute("download", "zion_referral_links.csv"),""
    link.style.visibility = 'hidden',
    document.body.appendChild(link),
    link.click(),
    document.body.removeChild(link)



  return (
    <div className="space-y-6">"
</div>"
      <Card className="bg-zion-blue-dark border-zion-blue-light">"

        <CardHeader>
          <CardTitle className="flex items-center justify-between">"

            <span>Your Referral Link</span>)"
  const [selectedCampaign, setSelectedCampaign] = useState<string>("default"),;"
  const [customParam, setCustomParam] = useState<string>(""),;"
  const [generatedLinks, setGeneratedLinks] = useState<{name:string, link:string}[]>([]),;
  ;
  // Get the base referral link;
  const baseLink = getReferralLink(),;
  const handleCopyLink = (link:string) => {;
    navigator.clipboard.writeText(link),;
      title:"Link copied!",;""
      description:"The referral link has been copied to your clipboard",;""
      variant:"default";")
    }),;
  },;
      const url = new URL(baseLink),;
      // Add custom campaign parameter if selected;"
        url.searchParams.append("campaign", selectedCampaign),;"
      // Add custom parameter if provided;
        url.searchParams.append("source", customParam),;"
        name:`${selectedCampaign}${customParam ? `-${customParam}` :""}`,;"
        link:url.toString();
      setGeneratedLinks(prev => [...prev, newLink]),;
      setIsDialogOpen(false),;"
      setCustomParam(""),;"
      { name:"Default", link:baseLink },;"
    ],;
    const csvContent = [;"
      "Name,Link",;"`;
      ...allLinks.map(l => `${l.name},${l.link}`);]"
    ].join("\n"),;"
    ;"
    const blob = new Blob([csvContent], { type:'text/csv,charset=utf-8,' }),;
    const url = URL.createObjectURL(blob),;
    const link = document.createElement("a"),;""
    link.setAttribute("href", url),;""
    link.setAttribute("download", "zion_referral_links.csv"),;""
    link.style.visibility = 'hidden',;
    document.body.appendChild(link),;
  return (;

    <div className="space-y-6">;"
      <Card className="bg-zion-blue-dark border-zion-blue-light">;"

        <CardHeader>;
          <CardTitle className="flex items-center justify-between">;"

            <span>Your Referral Link</span>;
            <Button;"
              variant="outline"""
              size="sm""
              onClick={handleDownloadLinks}"
              className="flex items-center gap-2">;"


            <Button ;"
              variant="outline" ;""
              size="sm" ;"
              className="flex items-center gap-2";"
            >;
              <Download className="h-4 w-4" />;"

          <CardDescription>Share this link with your audience to earn rewards;
        <CardContent>;
          <div className="flex space-x-2">;"
</div>
            <Input;
              value={baseLink}
              readOnly;"
              className="font-mono text-sm""
            />;
)"
            <Button variant="outline" onClick={() => handleCopyLink(baseLink)}>;"
              <Copy className="h-4 w-4" />;"
              <span className="sr-only">Copy</span>;"
          </div>;
      <div className="flex justify-between items-center">;"
        <h3 className="text-lg font-semibold text-white">Custom Campaign Links</h3>;"
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;

          <DialogTrigger asChild>;
            <Button variant="outline" size="sm" className="flex items-center gap-2">;"
              <Plus className="h-4 w-4" />;"

          <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light">;"

            <DialogHeader>;

              <DialogTitle>Create Custom Campaign Link;
              <DialogDescription>;

            <div className="grid gap-4 py-4">;"
              <div className="grid gap-2">;"
                <Label htmlFor="campaign">Campaign Type;"
                <Select;
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}>;
  const [selected_campaign, setSelectedCampaign] = useState < string>("default");""
  const [custom_param, setCustomParam] = useState < string>("");"
  const [generated_links, setGeneratedLinks] = useState<{name: string, link: string}[]>([]),
  // Get the base referral link;
  const base_link = getReferralLink ();
  const handleCopyLink = (link: string) =>: any {
  // TODO: Implement
    navigator.clipboard.write_text (link),
    toast ({"
      title: "Link copied!",""
      description: "The referral link has been copied to your clipboard",""
  const handleGenerateLink = () =>: any {
  // TODO: Implement
    // Check condition;
if ( {) {
  $2;
      const url = new URL (base_link);
      // Add custom campaign parameter if selected;
      // Check condition;
}"
        url.search_params.append ("campaign", selected_campaign);"
      // Add custom parameter if provided;
      // Check condition;
        url.search_params.append ("source", custom_param);"
      const new_link = {"`;
        name: `${selected_campaign}${custom_param ? `-${custom_param}` : ""}`,"
        link: url.to_string ();
      setGeneratedLinks (prev => [...prev, new_link]);
      setIsDialogOpen (false);"
      setCustomParam ("");"
  const handleDownloadLinks = () =>: any {
  // TODO: Implement
    const all_links = [;"
      { name: "Default", link: base_link },"
      ...generated_links;]
    const csv_content = [;"
      "Name, Link";"`;
      ...all_links.map (l => `${l.name}, ${l.link}`);]"
    ].join ("\n");"
    const blob = new Blob ([csv_content], { type: 'text / csv, charset = utf - 8, ' });
    const url = URL.createObjectURL (blob);
    const link = document.create_element ("a");""
    link.set_attribute ("href", url);""
    link.set_attribute ("download", "zion_referral_links.csv");""
    link.style.visibility = 'hidden';
    document.body.append_child (link);
    link.click ();
    document.body.remove_child (link);
    <div className="space - y-6">;"
      <Card className="bg - zion - blue - dark border - zion - blue - light">;"

          <CardTitle className="flex items - center justify - between">;"

            <span > Your Referral Link</span>;
              variant="outline";""
              size="sm";"
              on_click={handleDownloadLinks}"
              className="flex items - center gap - 2";"
              <Download className="h - 4 w - 4" />;"

          <CardDescription > Share this link with your audience to earn rewards;
          <div className="flex space - x-2">;"
              value={base_link}
              read_only;"
              className="font - mono text - sm";"
            <Button variant="outline" on_click={() => handleCopyLink (base_link)}>;"
              <Copy className="h - 4 w - 4" />;"
              <span className="sr - only">Copy</span>;"
      <div className="flex justify - between items - center">;"
        <h3 className="text - lg font - semibold text - white">Custom Campaign Links</h3>;"

          <DialogTrigger as_child>;
            <Button variant="outline" size="sm" className="flex items - center gap - 2">;"
              <Plus className="h - 4 w - 4" />;"

          <DialogContent className="sm:max - w-md bg - zion - blue border - zion - blue - light">;"


              <DialogTitle > Create Custom Campaign Link;

            <div className="grid gap - 4 py - 4">;"
              <div className="grid gap - 2">;"
                <Label html_for="campaign">Campaign Type;"
                  value={selected_campaign}
                  onValueChange={setSelectedCampaign}

                  <SelectTrigger id="campaign">;"
                    <SelectValue placeholder="Select campaign type" />;"

                  <SelectContent>;
                    <SelectItem value="default">General (Default);""
                    <SelectItem value="youtube">YouTube;""
                    <SelectItem value="newsletter">Newsletter;""
                    <SelectItem value="blog">Blog;""
                    <SelectItem value="podcast">Podcast;""
                    <SelectItem value="social">Social Media;"
              </div>;"
                <Label html_for="custom">Custom Parameter (Optional);"
                <Input;"
                  id="custom";""
                  placeholder="spring_campaign, video_123, etc.";"
                  value={custom_param}
                  on_change={(e) => setCustomParam (e.target.value)}

            <DialogFooter>;


                type="button";""
                variant="secondary";"
                on_click={() => setIsDialogOpen (false)}

                type="button";"
                on_click={handleGenerateLink}"
                className="bg - zion - purple hover:bg - zion - purple - dark";"

                    onClick={() => handleCopyLink(item && item.link)}
          <Card className="bg-zion-blue/20 border-dashed border-zion-blue-light">;"
            <CardContent className="flex flex-col items-center justify-center p-6">;"
              <p className="text-zion-slate-light text-center mb-4">;"
</p>
              </p>;
              <Button;
                variant="outline""
                onClick={() => setIsDialogOpen(true)}

                    <span>{item.name || "Campaign Link"}</span>;"
            ))) : ("
          <Card className="bg - zion - blue / 20 border - dashed border - zion - blue - light">;"
            <CardContent className="flex flex - col items - center justify - center p - 6">;"
              <p className="text - zion - slate - light text - center mb - 4">;"
                variant="outline";")
                on_click={() => setIsDialogOpen (true)}

          )}
    </div>);"
}readOnly className="font-mono text-sm"/> <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span>  </div>   <div className="flex justify-between items-center"> <DialogTrigger asChild> <Button variant=" outline"size=" sm"className="flex items-center gap-2"> <Plus className="h-4 w-4"/> Create New Link   <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Create Custom Campaign Link <DialogDescription> Generate a trackable link for specific marketing campaigns   <div className="grid gap-4 py-4"> <div className="grid gap-2"> <Label htmlFor=" campaign">Campaign Type <Select value= {"
}> <SelectTrigger id=" campaign"> <SelectValue placeholder=" Select campaign type"/>  <SelectContent> <SelectItem value=" default">General (Default)  <SelectItem value=" youtube">YouTube <SelectItem value=" newsletter">Newsletter <SelectItem value=" blog">Blog <SelectItem value=" podcast">Podcast <SelectItem value=" social">Social Media   </div> <div className="grid gap-2"> <Label htmlFor=" custom">Custom Parameter (Optional)  <Input /> </div> </div> <DialogFooter> <Button > Cancel  <Button className="bg-zion-purple hover:bg-zion-purple-dark"> Generate Link     </div> <div className="grid gap-4"> {"
  generatedLinks.length > 0 ? (generatedLinks.map ( (item, index) => (<Card key= {
  index;"
}className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-base flex items-center justify-between"> <div className="flex items-center gap-2"> </div>   <CardContent className="pb-4"> <div className="flex space-x-2"> <Input value= {"
}readOnly className="font-mono text-xs"/> <Button > <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span>  </div>  ) ) ) : (<Card className="bg-zion-blue/20 border-dashed border-zion-blue-light"> <CardContent className="flex flex-col items-center justify-center p-6"> <p className="text-zion-slate-light text-center mb-4"> Create custom campaign links to track different marketing efforts </p> <Button className="flex items-center gap-2"> <Plus className="h-4 w-4" /> Create First Link   )"
}</div> </div>) 
                <Plus className="h-4 w-4" />"

              
            
          
    </div>"`;
pr-12325
