
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { useWallet as useAppWallet } from &quot;../../../context/WalletContext.tsx&quot;; // Renamed to avoid conflict if useWallet hook is defined locally
import { Wallet } from 'lucide-react'
import { toast } from &quot;sonner&quot;;
import {logErrorToProduction} from '@/utils/productionLogger';

export function Web3Login() {

  const { loginWithWeb3 } = useAuth();
  const { isWalletSystemAvailable } = useAppWallet();
  const [isLoading, setIsLoading] = useState(false);

  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast(&quot;Web3 login unavailable&quot;, {
        description: &quot;The Web3 login system is currently not available. Please ensure your Reown Project ID is configured.&quot;});
      return;
    }

    try {
      setIsLoading(true);
      
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast(&quot;Web3 wallet not found&quot;, {
          description: &quot;Please install MetaMask or another compatible wallet.&quot;});
        return;
      }
      
      await loginWithWeb3(); // This is from useAuth, assumed to be a separate flow
      
    } catch (error: any) {
      toast(&quot;Login failed&quot;, {
        description: error.message || &quot;Failed to connect wallet. Please try again.&quot;});
      logErrorToProduction('Web3 login error:', { data: error });
    } finally {
      setIsLoading(false);
    }
  };

  const buttonDisabled = isLoading || !isWalletSystemAvailable;
  const buttonTitle = !isWalletSystemAvailable
    ? &quot;Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.&quot;
    : "";

  let buttonContent;
  if (!isWalletSystemAvailable) {
    buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable
      </>
    );
  } else if (isLoading) {
    buttonContent = (
      <span className="flex items-center">
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24">
          <circle className="opacity-25&quot; cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;4"></circle>
          <path className="opacity-75&quot; fill=&quot;currentColor&quot; d=&quot;M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Connecting...
      </span>
    );
  } else {
    buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Sign in with Web3
        <span className="sr-only&quot;>Sign in with Web3</span>
      </>
    );
  }

  return (
    <Button
      type=&quot;button&quot;
      variant=&quot;outline"
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
      onClick={handleWeb3Login}
      disabled={buttonDisabled}
      title={buttonTitle || undefined} // Ensure title is not an empty string if not needed
    >
      {buttonContent}
    </Button>
  );
}
