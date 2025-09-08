=
import React, { useState } from 'react;
import { Card,CardContent,CardDescription,CardHeader,CardTitle} from @/components/ui/card';
import { Button  } from '@/components/ui/button;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight  } from lucide-react';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip;
import { useToast  } from @/hooks/use-toast';
import { useAuth  } from '@/hooks/useAuth;
import React, { useState } from "react,import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from @/components/ui/card';
import {Tooltip;
  TooltipContent;
  TooltipProvider;
  TooltipTrigger} from @/components/ui/tooltip",export function OnChainExport() {)}//Request accounts ;}';
setExportStatus (success)toast ({}catch (error: any) {';
  setExportStatus ('error)toast ({}finally {setIsExporting (false)}h-5 w-5"/>) ;
}On-chain Export <TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Info className= h-4 w-4 text-muted-foreground cursor-help"/> </TooltipTrigger> <TooltipContent> <p className=" max-w-xs>Export your ZION$ tokens to an external blockchain wallet</p> </TooltipContent> </Tooltip> </TooltipProvider> </CardTitle> <CardDescription>Export your ZION$ to an external wallet</CardDescription> </CardHeader> <CardContent> <span>Available to export:</span> <span className= font-medium">250 ZION$</span> </div> {";
  exportStatus === 'success' ? (<Button className= w-full bg-green-600 hover:bg-green-700disabled> <Check className=" mr-2 h-4 w-4"/> Tokens Exported </Button>) : (<Button className= w-fullonClick={handleExportTokens ;
}disabled= {isExporting ;
}> </Button>) ";
}</div>) : (<div className=" space-y-2> <p className= text-sm text-muted-foreground mb-3" > Connect your web3 wallet to export tokens to the blockchain. </p> Connect Wallet </Button> </div>)}</CardContent> </Card>)}";
  )}
>

import React, { useState } from react;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from @/components/ui/button;
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from lucide-react'

import {
  Tooltip;
  TooltipContent;
  TooltipProvider;


