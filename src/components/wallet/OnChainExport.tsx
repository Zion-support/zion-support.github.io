}


  )
}

import React, { useState } from './react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components / ui / card';
import { Button  } from '@/components / ui / button';
import { Wallet, Info, Check, ChevronRight, ArrowUpRight } from 'lucide-react';
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {
  Tooltip;
  TooltipContent;
  TooltipProvider;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Wallet not detected",
          description: "Please install MetaMask or another Ethereum wallet to use this feature",
          variant: "destructive";
        });
        return;
      }
      // Request accounts;
      const accounts = await ethereum.request ({ method: 'eth_requestAccounts' }),
      const address = accounts[0];
}
  );
}

;