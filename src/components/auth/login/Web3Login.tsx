import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useWallet as useAppWallet } from '../../../context/WalletContext.tsx'; // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react';
import { toast } from 'sonner';
import { logErrorToProduction } from '@/utils/productionLogger';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {
  );
}return;
}await loginWithWeb3 (), //This is from useAuth, assumed to be a separate flow ;
}finally {;
  setIsLoading (false) ;

};
const buttonDisabled = isLoading || !isWalletSystemAvailable;
const buttonTitle = !isWalletSystemAvailable ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured." : "";";
>Sign in with Web3</span> </> 
}//Ensure title is not an empty string if not needed > {;
  buttonContent ;
}</Button>) ;
}"
  )
}
