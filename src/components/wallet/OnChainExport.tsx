interface Service {
id: string;,
name: string;
}
}
}


import React, { useState } from "react";
import { Card; CardContent; CardDescription; CardHeader, CardTitle  } from "@/components/ui/card, ";
import { Button } from "@/components/ui/button, ";
import { Wallet; Info; Check; ChevronRight, ArrowUpRight  } from "lucide-react, ";
import { Tooltip;
TooltipContent;
<<<<<<< HEAD
TooltipProvider, TooltipTrigger  } from "@/components/ui/tooltip, ";
=======
TooltipProvider;
TooltipTrigger } from "@/components/ui/tooltip, ";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
import { useToast } from "@/hooks/use-toast, ";
import { useAuth } from "@/hooks/useAuth, ";

export function OnChainExport() {;
const [isConnected, setIsConnected] = useState(false);
const [isExporting, setIsExporting] = useState(false);
const [exportStatus, setExportStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
const { toast } = useToast();
const { user } = useAuth();

<<<<<<< HEAD
const handleConnectWallet = async () => {;
try {;
// Check if wallet is available;
const ethereum: any = (window as any).ethereum;
if (!ethereum) {
toast({,
title: "Wallet not detected";,
description: "Please install MetaMask or another Ethereum wallet to use this feature";,
=======
const handleConnectWallet = async () => {try {;
// Check if wallet is available;
const ethereum: any = (window as any).ethereum;
if (!ethereum) {
toast({
title: "Wallet not detected";
description: "Please install MetaMask or another Ethereum wallet to use this feature";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
variant: "destructive"});
return;
}

// Request accounts;
const accounts = await ethereum.request({ method: "eth_requestAccounts" });
const address = accounts[0];

// Sign message to verify ownership;
const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`;
<<<<<<< HEAD
await ethereum.request({
method: "personal_sign";,
=======
await ethereum.request({method: "personal_sign";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
params: [address; message]});

setIsConnected(true);
toast({
<<<<<<< HEAD
title: "Wallet connected";,
description: `Wallet ${address.slice(0; 6)}...${address.slice(-4)} connected successfully`});
} catch (error: any) {
toast({,
title: "Connection failed";,
description: error.message || "Could not connect to wallet";,
=======
title: "Wallet connected";
description: `Wallet ${address.slice(0; 6)}...${address.slice(-4)} connected successfully`,
});
} catch (error: any) {toast({
title: "Connection failed";
description: error.message || "Could not connect to wallet";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
variant: "destructive"});
}
};

const handleExportTokens = async () => {;
setIsExporting(true);
setExportStatus("processing");

try {
// Simulate token export;
await new Promise(resolve => setTimeout(resolve; 2000));

setExportStatus("success");
toast({
<<<<<<< HEAD
title: "Tokens exported";,
description: "Your ZION$ tokens have been exported to your wallet";});
} catch (error: any) {
setExportStatus("error");
toast({,
title: "Export failed";,
description: error.message || "Could not export tokens";,
=======
title: "Tokens exported";
description: "Your ZION$ tokens have been exported to your wallet";
});
} catch (error: any) {setExportStatus("error");
toast({
title: "Export failed";
description: error.message || "Could not export tokens";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
variant: "destructive"});
} finally {
setIsExporting(false);
}
};

return (
<Card>
<CardHeader>
<CardTitle className="flex items-center gap-2">
{isConnected ? (
<Wallet aria-hidden="true" className="h-5 w-5 text-primary" />
) : (
<Wallet aria-hidden="true" className="h-5 w-5" />
)}
On-chain Export;
<TooltipProvider>
<Tooltip>
<TooltipTrigger asChild>
<Info aria-label="More info" className="h-4 w-4 text-muted-foreground cursor-help" />
</TooltipTrigger>
<TooltipContent>
<p className="max-w-xs">Export your ZION$ tokens to an external blockchain wallet</p>
</TooltipContent>
</Tooltip>
</TooltipProvider>
</CardTitle>
<CardDescription>Export your ZION$ to an external wallet</CardDescription>
</CardHeader>
<CardContent>
{isConnected ? (
<<<<<<< HEAD
<div className="space-y-4">
<div className="flex justify-between text-sm">
<span>Available to export: </span>
<span className="font-medium">250 ZION$</span>
=======
<div className="space-y-4">;
<div className="flex justify-between text-sm">;
<span>Available to export: </span>;
<span className="font-medium">250 ZION$</span>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
</div>
{exportStatus === "success" ? (
<Button className="w-full bg-green-600 hover:bg-green-700" disabled>
<Check aria-hidden="true" className="mr-2 h-4 w-4" />
Tokens Exported;
</Button>
) : (
<Button;
className="w-full"
onClick={handleExportTokens}
disabled={isExporting}
>;
{isExporting ? "Processing..." : "Export Tokens"}
{!isExporting && <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />}
</Button>
)}
</div>
) : (
<div className="space-y-2">
<p className="text-sm text-muted-foreground mb-3">
Connect your web3 wallet to export tokens to the blockchain.;
</p>
<Button onClick={handleConnectWallet} className="w-full">
Connect Wallet;
<<<<<<< HEAD
</Button>
=======
</Button>;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
</div>
)}
</CardContent>
</Card>
);
}
<//Card><///Card>

<<<<<<< HEAD
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeaderCardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRightArrowUpRight } from 'lucide-react';
import { Tooltip;, TooltipContent;, TooltipProvider;
TooltipTrigger } from "@/components/ui/tooltip",
=======
import React, { useState } from "react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react";
import { Tooltip;
, , TooltipContent;
, , TooltipProvider;
, , TooltipTrigger } from "@/components/ui/tooltip";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
export function OnChainExport() {
)
}
