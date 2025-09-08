


export function PartnerReferralLinks() {;


  const handleGenerateLink = () => {
    if (baseLink) {



      // Add custom campaign parameter if selected;
      if (selectedCampaign !== "default") {;
        url && url.searchParams.append("campaign", selectedCampaign);

      const newLink = {;
        name: `${selectedCampaign}${customParam ? `-${customParam}` : ""}`,;
        link: url && url.toString();
      };




  

  const handleDownloadLinks = () => {

    const allLinks = [
      { name: "Default", link: baseLink }
      ...generatedLinks

    ].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv,charset=utf-8,' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "zion_referral_links.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)
  }

;
      <div className="flex justify-between items-center">;
        <h3 className="text-lg font-semibold text-white">Custom Campaign Links</h3>;
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>;
          <DialogTrigger asChild>;
            <Button variant="outline" size="sm" className="flex items-center gap-2">;
              <Plus className="h-4 w-4" />;
              Create New Link;
            </Button>;
          </DialogTrigger>;
            </DialogHeader>;
            <div className="grid gap-4 py-4">;
              <div className="grid gap-2">;
                <Label htmlFor="campaign">Campaign Type</Label>;
                <Select ;
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}>;

              <div className="grid gap-2">;


