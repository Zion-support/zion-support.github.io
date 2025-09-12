      </div>                    <span>{item.name || 'Campaign Link'}</span>                  </div>

      <div className="grid gap-4">
        {generatedLinks.length > 0 ? (
          generatedLinks.map((item, index) => (
      <div className='grid gap-4'>
        {generatedLinks.length > 0 ? (
          generatedLinks.map((item, index) => (
            <Card
              key={index}
              className='bg-zion-blue-dark border-zion-blue-light'
            >
              <CardHeader className='pb-2'>
                <CardTitle className='text-base flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <Link className='h-4 w-4 text-zion-purple' />
                    <span>{item.name |'Campaign Link'}</span>                  </div>
                    <span>{item.name || 'Campaign Link'}</span>                  </div>

                </CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex space-x-2">
                  <Input
                    value={item.link}
                    readOnly
                    className="font-mono text-xs"
                  />                  </Button>
                </div>
              </CardContent>
            </Card>
          ))

              <p className="text-zion-slate-light text-center mb-4">
                Create custom campaign links to track different marketing efforts
              </p>                Create First Link;
              </Button>;
            </CardContent>;
          </Card>;

        )}
      </div>;
    </div>;
  );


}//Add custom parameter if provided if (customParam) {;

}const newLink = {;
  name: `$ {;
  selectedCampaign ;
}$ {;
  customParam ? `-$ {;
  customParam ;
}`: "" ;
}`
};

};
...generatedLinks ];
link && link.style.visibility = 'hidden';
document && document.body.appendChild (link);
link && link.click ();
document && document.body.removeChild (link)
};";
  baseLink ";
}readOnly className="font-mono text-sm"/> <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card> <div className="flex justify-between items-center"> <DialogTrigger asChild> <Button variant=" outline"size=" sm"className="flex items-center gap-2"> <Plus className="h-4 w-4"/> Create New Link </Button> </DialogTrigger> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Create Custom Campaign Link</DialogTitle> <DialogDescription> Generate a trackable link for specific marketing campaigns </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4"> <div className="grid gap-2"> <Label htmlFor=" campaign">Campaign Type</Label> <Selectvalue= {
  selectedCampaign 
}onValueChange= {
  setSelectedCampaign "
}> <SelectTrigger id=" campaign"> <SelectValue placeholder=" Select campaign type"/> </SelectTrigger> <SelectContent> <SelectItem value=" default">General (Default) </SelectItem> <SelectItem value=" youtube">YouTube</SelectItem> <SelectItem value=" newsletter">Newsletter</SelectItem> <SelectItem value=" blog">Blog</SelectItem> <SelectItem value=" podcast">Podcast</SelectItem> <SelectItem value=" social">Social Media</SelectItem> </SelectContent> </Select> </div> <div className="grid gap-2"> <Label htmlFor=" custom">Custom Parameter (Optional) </Label> <Input /> </div> </div> <DialogFooter> <Button > Cancel </Button> <Button className="bg-zion-purple hover:bg-zion-purple-dark"> Generate Link </Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className="grid gap-4"> {;
  generatedLinks && generatedLinks.length > 0 ? (generatedLinks && generatedLinks.map ( (item, index) => (<Cardkey= {
  index "
}className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-base flex items-center justify-between"> <div className="flex items-center gap-2"> </div> </CardTitle> </CardHeader> <CardContent className="pb-4"> <div className="flex space-x-2"> <Inputvalue= {
  item && item.link "
}readOnly className="font-mono text-xs"/> <Button > <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card>) ) ) : (<Card className="bg-zion-blue/20 border-dashed border-zion-blue-light"> <CardContent className="flex flex-col items-center justify-center p-6"> <p className="text-zion-slate-light text-center mb-4"> Create custom campaign links to track different marketing efforts </p> <Button className="flex items-center gap-2"> <Plus className="h-4 w-4" /> Create First Link </Button> </CardContent> </Card>) ;
}</div> </div>) ;
}'"}

              <div className='grid gap - 2'>;
                <Label html_for='custom'>Custom Parameter (Optional)</Label>;
                <Input;
                  id='custom';
                  placeholder='spring_campaign, video_123, etc.';
                  value={custom_param}
                  on_change={e => setCustomParam (e.target.value)}                />;
              </div>;
            </div>;
            <DialogFooter>;
              <Button;
                type='button';
                variant='secondary';
                on_click={() => setIsDialogOpen (false)}
              <Button 
                variant="outline"
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2";
