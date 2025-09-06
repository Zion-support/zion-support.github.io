
import { useState } from "react"
import { Check, Clock, Key, MoreVertical, RefreshCw, X } from "lucide-react"
import { format } from "date-fns"
import { useApiKeys, type ApiKeyScope } from "@/hooks/
import { Button } from "@/components/ui/
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/
import { Input } from "@/components/ui/
import { Checkbox } from "@/components/ui/
import { Label } from "@/components/ui/
import { Badge } from "@/components/ui/
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/
import CodeBlock from "./
    return `curl -X GET "https: any
 <DialogTrigger asChild> <Button variant=" default">Create New API Key</Button> </DialogTrigger> <DialogContent className=" bg-zinc-900 border-zinc-800 text-white"> <DialogHeader> <DialogTitle>Create API Key</DialogTitle> <DialogDescription className=" text-zinc-400"> Generate a new API key for accessing the Zion APIs. </DialogDescription> </DialogHeader> <div className=" space-y-4 py-4"> <div className=" space-y-2"> <Label htmlFor=" key-name">Key Name</Label> <Input /> 
className="mr-2 text-green-500"/> New API Key Generated 
> </Button> 
  loading ? (<div className="text-center py-8 text-zinc-500">Loading API keys...
> <p>No API keys found.
</div> </div> </div> <DropdownMenu> <DropdownMenuTrigger asChild> </Button> 
</PopoverTrigger> <PopoverContent className="bg-zinc-900 border-zinc-800 text-white w-64 p-3"> <p className="text-sm mb-1">Last Used
</div> 
 <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Regenerate API Key?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will invalidate the existing key and generate a new one. Any applications using this key will need to be updated. </AlertDialogDescription> 
 <AlertDialogContent className="bg-zinc-900 border-zinc-800 text-white"> <AlertDialogHeader> <AlertDialogTitle>Revoke API Key?</AlertDialogTitle> <AlertDialogDescription className="text-zinc-400"> This action will revoke the API key and it can no longer be used to access the API. This action cannot be undone. </AlertDialogDescription> 