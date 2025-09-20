import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card,;
CardContent;
, CardDescription;
CardFooter;
, CardHeader,;
CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, Download, Link, Plus } from "lucide-react";
                  <Input
value = {item.link}
                    readOnly className='font-mono text-xs'
}const newLink = {name: `$ {
  selectedCampaign}$ {customParam ? `-$ {
}readOnly className="font-mono text-sm"/> <Copy className="h-4 w-4"/> <span className="sr-only">Copy</span> </Button> </div> </CardContent> </Card> <div className="flex justify-between items-center"> <DialogTrigger asChild> <Button variant=" outline"size=" sm"className="flex items-center gap-2"> <Plus className="h-4 w-4"/> Create New Link </Button> </DialogTrigger> <DialogContent className="sm:max-w-md bg-zion-blue border-zion-blue-light"> <DialogHeader> <DialogTitle>Create Custom Campaign Link</DialogTitle> <DialogDescription> Generate a trackable link for specific marketing campaigns </DialogDescription> </DialogHeader> <div className="grid gap-4 py-4"> <div className="grid gap-2"> <Label htmlFor=" campaign">Campaign Type</Label> <Select value= {selectedCampaign}onValueChange= {