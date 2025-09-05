
import { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Wallet } from &quot;@/components/icons&quot;;
import { toast } from &quot;sonner&quot;;

export function Web3Login() {
  const { loginWithWeb3 } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleWeb3Login = async () => {
    try {
      setIsLoading(true);
      
      // Check if wallet is available
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast(&quot;Web3 wallet not found&quot;, {
          description: &quot;Please install MetaMask or another compatible wallet&quot;});
        return;
      }
      
      await loginWithWeb3();
      
    } catch (error: any) {
      toast(&quot;Login failed&quot;, {
        description: error.message || &quot;Failed to connect wallet&quot;});
      console.error(&quot;Web3 login error:&quot;, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type=&quot;button&quot;
      variant=&quot;outline&quot;
      className=&quot;w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan&quot;
      onClick={handleWeb3Login}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className=&quot;flex items-center&quot;>
          <svg className=&quot;animate-spin -ml-1 mr-2 h-4 w-4 text-white&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot;>
            <circle className=&quot;opacity-25&quot; cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;4&quot;></circle>
            <path className=&quot;opacity-75&quot; fill=&quot;currentColor&quot; d=&quot;M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z&quot;></path>
          </svg>
          Connecting...
        </span>
      ) : (
        <>
          <span className=&quot;sr-only&quot;>Sign in with Web3</span>
          <Wallet className=&quot;h-5 w-5&quot; />
        </>
      )}
    </Button>
  );
}
