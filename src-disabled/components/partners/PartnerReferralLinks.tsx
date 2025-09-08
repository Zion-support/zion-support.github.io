

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card
  CardContent
  CardDescription
  CardFooter
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRef, useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Copy, Download, Link, Plus } from 'lucide-react'
            <Button
              variant='outline'
              size='sm'
              onClick={handleDownloadLinks}
              className='flex items-center gap-2'            >
              <Download className='h-4 w-4' />
              Export Links
            </Button>
          </CardTitle>
          <CardDescription>
            Share this link with your audience to earn rewards
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex space-x-2'>
            <Input value={baseLink} readOnly className='font-mono text-sm' />
            <Button variant='outline' onClick={() => handleCopyLink(baseLink)}>
              <Copy className='h-4 w-4' />
              <span className='sr-only'>Copy</span>            </Button>
          </div>
        </CardContent>
      </Card>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-white'>
          Custom Campaign Links
        </h3>
            <div className='grid gap-4 py-4'>
              <div className='grid gap-2'>
                <Label htmlFor='campaign'>Campaign Type</Label>
                <Select
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}                >
                  <SelectTrigger id='campaign'>
                    <SelectValue placeholder='Select campaign type' />
                  </SelectTrigger>
            <div className='grid gap-4 py-4'>
              <div className='grid gap-2'>
                <Label htmlFor='campaign'>Campaign Type</Label>
                <Select
                  value={selectedCampaign}
                  onValueChange={setSelectedCampaign}                >
                  <SelectTrigger id='campaign'>
                    <SelectValue placeholder='Select campaign type' />
              <div className='grid gap-2'>
                <Label htmlFor='custom'>Custom Parameter (Optional)</Label>
                <Input
                  id='custom'
                  placeholder='spring_campaign, video_123, etc.'
                  value={customParam}
                  onChange={e => setCustomParam(e.target.value)}                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type='button'
                variant='secondary'
                onClick={() => setIsDialogOpen(false)}
                className='bg-zion-purple hover:bg-zion-purple-dark'              >
                Generate Link
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

              <Button
                variant='outline'

link.style.visibility = 'hidden';
document.body.appendChild (link);
link.click ();
document.body.removeChild (link);
};";
  baseLink ";
}readOnly className="font-mono text-sm"/> <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card> <div className="flex justify-between items-center"> <DialogTrigger asChild> <Button variant=" outline"size=" sm"className="flex items-center gap-2"> <Plus className="h-4 w-4"/> Create New Link </Button> </DialogTrigger> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Create Custom Campaign Link</DialogTitle> <DialogDescription> Generate a trackable link for specific marketing campaigns </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4"> <div className="grid gap-2"> <Label htmlFor=" campaign">Campaign Type</Label> <Select value= {;
  selectedCampaign ;
}onValueChange= {;
  setSelectedCampaign ";
}> <SelectTrigger id=" campaign"> <SelectValue placeholder=" Select campaign type"/> </SelectTrigger> <SelectContent> <SelectItem value=" default">General (Default) </SelectItem> <SelectItem value=" youtube">YouTube</SelectItem> <SelectItem value=" newsletter">Newsletter</SelectItem> <SelectItem value=" blog">Blog</SelectItem> <SelectItem value=" podcast">Podcast</SelectItem> <SelectItem value=" social">Social Media</SelectItem> </SelectContent> </Select> </div> <div className="grid gap-2"> <Label htmlFor=" custom">Custom Parameter (Optional) </Label> <Input /> </div> </div> <DialogFooter> <Button > Cancel </Button> <Button className="bg-zion-purple hover:bg-zion-purple-dark"> Generate Link </Button> </DialogFooter> </DialogContent> </Dialog> </div> <div className="grid gap-4"> {;
  generatedLinks.length > 0 ? (generatedLinks.map ( (item, index) => (<Card key= {;
  index ";
}className="bg-zion-blue-dark border-zion-blue-light"> <CardHeader className="pb-2"> <CardTitle className="text-base flex items-center justify-between"> <div className="flex items-center gap-2"> </div> </CardTitle> </CardHeader> <CardContent className="pb-4"> <div className="flex space-x-2"> <Input value= {;
  item.link ";
}readOnly className="font-mono text-xs"/> <Button > <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card>) ) ) : (<Card className="bg-zion-blue/20 border-dashed border-zion-blue-light"> <CardContent className="flex flex-col items-center justify-center p-6"> <p className="text-zion-slate-light text-center mb-4"> Create custom campaign links to track different marketing efforts </p> <Button className="flex items-center gap-2"> <Plus className="h-4 w-4" /> Create First Link </Button> </CardContent> </Card>) ;
}</div> </div>) ;
}'"
