

export function Web3Login() {_const { loginWithWeb3} = useAuth();
  const {_isWalletSystemAvailable} = useAppWallet();
  const [isLoading, setIsLoading] = useState(false);

  const _handleWeb3Login = async () => {_if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", _{
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."});
      return;
    }

    try {_setIsLoading(true);
      
      // Check if Ethereum provider (e.g., _MetaMask) is available
      const _ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast("Web3 wallet not found", _{
          description: "Please install MetaMask or another compatible wallet."});
        return;
      }
      
      await loginWithWeb3(); // This is from useAuth, assumed to be a separate flow
      
    } catch (error: unknown) {_toast("Login failed", _{
        description: error.message || "Failed to connect wallet. Please try again."});
      logErrorToProduction('Web3 login error:', {_data: error});
    } finally {_setIsLoading(false);}
  };

  const _buttonDisabled = isLoading || !isWalletSystemAvailable;
  const _buttonTitle = !isWalletSystemAvailable
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured."
    : "";

  let buttonContent;
  if (!isWalletSystemAvailable) {_buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Web3 Login Unavailable
      </>
    );} else if (isLoading) {_buttonContent = (
      <span className="flex items-center">
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Connecting...
      </span>
    );} else {_buttonContent = (
      <>
        <Wallet className="h-5 w-5 mr-2" /> Sign in with Web3
        <span className="sr-only">Sign in with Web3</span>
      </>
    );}

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
      onClick={_handleWeb3Login}
      disabled={_buttonDisabled}
      title={_buttonTitle || undefined} // Ensure title is not an empty string if not needed
    >
      {_buttonContent}
    </Button>
  );
}
