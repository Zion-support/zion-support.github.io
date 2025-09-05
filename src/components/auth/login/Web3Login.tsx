
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react",
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
import { useWallet as useAppWallet } from "../../../context/WalletContext.tsx", // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from "sonner",
import {logErrorToProduction} from '@/utils/productionLogger',
=======
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useWallet as useAppWallet } from &quot;../../../context/WalletContext.tsx&quot;; // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from &quot;sonner&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function Web3Login() {

  const { loginWithWeb3 } = useAuth(),
  const { isWalletSystemAvailable } = useAppWallet(),
  const [isLoading, setIsLoading] = useState(false),

  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
<<<<<<< HEAD
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),
      return
=======
      toast(&quot;Web3 login unavailable&quot;, {
        description: &quot;The Web3 login system is currently not available. Please ensure your Reown Project ID is configured.&quot;});
=======

export function Web3Login() {_const { loginWithWeb3} = useAuth();
  const {_isWalletSystemAvailable} = useAppWallet();
  const [isLoading, setIsLoading] = useState(false);

  const _handleWeb3Login = async () => {_if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", _{
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

<<<<<<< HEAD
    try {
      setIsLoading(true),
      
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum,
      if (!ethereum) {
<<<<<<< HEAD
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."}),
        return
=======
        toast(&quot;Web3 wallet not found&quot;, {
          description: &quot;Please install MetaMask or another compatible wallet.&quot;});
=======
    try {_setIsLoading(true);
      
      // Check if Ethereum provider (e.g., _MetaMask) is available
      const _ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast("Web3 wallet not found", _{
          description: "Please install MetaMask or another compatible wallet."});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
      
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      
<<<<<<< HEAD
    } catch (error: any) {
<<<<<<< HEAD
      toast("Login failed", {
        description: error.message || "Failed to connect wallet. Please try again."}),
      logErrorToProduction('Web3 login error:', { data: error })
=======
      toast(&quot;Login failed&quot;, {
        description: error.message || &quot;Failed to connect wallet. Please try again.&quot;});
      logErrorToProduction('Web3 login error:', { data: error });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    } finally {
      setIsLoading(false)
    }
  },

  const buttonDisabled = isLoading || !isWalletSystemAvailable,
  const buttonTitle = !isWalletSystemAvailable
<<<<<<< HEAD
=======
    } catch (error: unknown) {_toast("Login failed", _{
        description: error.message || "Failed to connect wallet. Please try again."});
      logErrorToProduction('Web3 login error:', {_data: error});
    } finally {_setIsLoading(false);}
  };

  const _buttonDisabled = isLoading || !isWalletSystemAvailable;
  const _buttonTitle = !isWalletSystemAvailable
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured."
    : "",
=======
    ? &quot;Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.&quot;
    : "";
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  let buttonContent,
  if (!isWalletSystemAvailable) {
    buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable
      </>
    )
  } else if (isLoading) {
    buttonContent = (
=======
  let buttonContent;
  if (!isWalletSystemAvailable) {_buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable
      </>
    );} else if (isLoading) {_buttonContent = (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <span className="flex items-center">
<<<<<<< HEAD
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http: //www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
=======
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24">
          <circle className="opacity-25&quot; cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;4"></circle>
          <path className="opacity-75&quot; fill=&quot;currentColor&quot; d=&quot;M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </svg>
        Connecting...
      </span>
<<<<<<< HEAD
    )
  } else {
    buttonContent = (
=======
    );} else {_buttonContent = (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <>
        <Wallet className="h-5 w-5 mr-2" /> Sign in with Web3
        <span className="sr-only&quot;>Sign in with Web3</span>
      </>
<<<<<<< HEAD
    )
  }
=======
    );}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <Button
      type=&quot;button&quot;
      variant=&quot;outline"
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
      onClick={_handleWeb3Login}
      disabled={_buttonDisabled}
      title={_buttonTitle || undefined} // Ensure title is not an empty string if not needed
    >
      {_buttonContent}
    </Button>
  )
}
