import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useWallet as useAppWallet } from "../../../context/WalletContext ;
import { Wallet } from 'lucide-react'import { toast } from "sonner";
import {logErrorToProduction} from '@/utils/productionLogger';
export function Web3Login() {;

  const handleWeb3Login = async () => {
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),
      return;

      setIsLoading(true),
      
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum,

      if (!ethereum) {
 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."}),
        return;
      }

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    } catch (error: any) {
      toast("Login failed", {
        description: error.message |"Failed to connect wallet. Please try again."})
      logErrorToProduction('Web3 login error:', { data: error })

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const { loginWithWeb3 } = useAuth();
  const { isWalletSystemAvailable } = useAppWallet();
  const [isLoading, setIsLoading] = useState(false);

    : ""
};
  )
};

  },

  const handleWeb3Login = async () => {;
    if (!isWalletSystemAvailable) {;
      toast("Web3 login unavailable", {,
  description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),;
      return;
    }

      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet."}),;
        return;
      }

      logErrorToProduction('Web3 login error:', { data: error });
    } finally {;
      setIsLoading(false);
    }

 origin/cursor/fix-lint-push-and-merge-to-main-1dc5
