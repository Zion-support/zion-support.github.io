
import React, { useState } from "react"
import { useWallet } from "@/hooks/
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/
import { Button } from "@/components/ui/
  DialogTrigger} from "@/components/ui/
onOpenChange= {;"  setOpen ";"}> <DialogTrigger asChild> <Button className=" w-full">View Available Rewards</Button> </DialogTrigger> <DialogContent> <DialogHeader> <DialogTitle>Available Rewards</DialogTitle> <DialogDescription> Exchange your tokens for these rewards. You currently have {;"  wallet?.balance || 0 ";"}ZION$. </DialogDescription> 
</div> </Button> </div> </DialogContent> </Dialog> </CardContent> 