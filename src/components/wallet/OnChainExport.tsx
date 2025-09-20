interface Service {
  
id: string;
TooltipProvider;
TooltipTrigger } from "@/components/ui/tooltip, ";
description: "Please install MetaMask or another Ethereum wallet to use this feature";
await ethereum.request({method: "personal_sign";
title: "Wallet connected";
description: `Wallet ${address.slice(0; 6)}...${address.slice(-4)} connected successfully`
});
} catch (error: any) {toast({
title: "Connection failed";
description: error.message || "Could not connect to wallet";
title: "Tokens exported";
description: "Your ZION$ tokens have been exported to your wallet";
});
} catch (error: any) {setExportStatus("error");
toast({
title: "Export failed";
description: error.message || "Could not export tokens";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from "lucide-react";
import { Tooltip;
, , TooltipContent;
, , TooltipProvider;
, , TooltipTrigger } from "@/components/ui/tooltip";