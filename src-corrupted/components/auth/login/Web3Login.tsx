import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext ;
import { Wallet } from 'lucide-react'import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {;
  const handleWeb3Login = async () => {,
    if (!isWalletSystemAvailable) {,
      toast("Web3 login unavailable", {,
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured.",}),
      return,
  const handleWeb3Login = async () => {,
    if (!isWalletSystemAvailable) {,
      toast("Web3 login unavailable", {,
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured.",});
      return;
    }
    try {,
      setIsLoading(true),
      // Check if Ethereum provider (e.g., MetaMask) is available,
      const ethereum = (window as any).ethereum,
      setIsLoading(true);
      // Check if Ethereum provider (e.g., MetaMask) is available,
      const ethereum = (window as any).ethereum;
      if (!ethereum) {,
        toast("Web3 wallet not found", {,
          description: "Please install MetaMask or another compatible wallet.",});
        return;
      }
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow,
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow,
    } catch (error: any) {,
      toast("Login failed", {,
        description: error.message |"Failed to connect wallet. Please try again.",}),
      logErrorToProduction('Web3 login error:', { data: error ,}),
import { useState  } from './react';
import { Button  } from '@/components / ui / button';
import { use_auth  } from '@/hooks / use_auth';
import { use_wallet as useAppWallet  } from '../../../context / WalletContext.tsx', // Renamed to avoid conflict if use_wallet hook is defined locally;
import { Wallet } from 'lucide-react'import { toast  } from './sonner';
import {logErrorToProduction} from '@/utils / production_logger';
export /**,
 * Web3Login - Function description,
 */,
function Web3Login() {,
  const { loginWithWeb3 } = use_auth ();
  const { isWalletSystemAvailable } = useAppWallet ();
  const [is_loading, setIsLoading] = useState (false);
  const handleWeb3Login = async () => {,
    // Check condition,
if ( {) {,
  $2,
}
      toast ("Web3 login unavailable", {,
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured.",});
      return;
    }
    try {,
      setIsLoading (true);
      // Check if Ethereum provider (e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum;
      // Check condition,
if ( {) {,
  $2,
}
        toast ("Web3 wallet not found", {,
          description: "Please install MetaMask or another compatible wallet.",});
        return;
      }
      await loginWithWeb3 (), // This is from use_auth, assumed to be a separate flow;
    } catch (error: any) {,
      toast ("Login failed", {,
        description: error.message || "Failed to connect wallet. Please try again.",});
      logErrorToProduction ('Web3 login error:', { data: error ,});
    } finally {,
      setIsLoading(false),
    }
  }
  const buttonDisabled = isLoading |!isWalletSystemAvailable,
  const buttonTitle = !isWalletSystemAvailable,
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.",
    : "",
}
,
  const { loginWithWeb3 } = useAuth();
  const { isWalletSystemAvailable } = useAppWallet();
  const [isLoading, setIsLoading] = useState(false);
    : "";
};
  );
};
}}}