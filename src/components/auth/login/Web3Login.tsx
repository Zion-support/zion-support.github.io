
<<<<<<< HEAD
=======

  const { loginWithWeb3 } = useAuth()
  const { isWalletSystemAvailable } = useAppWallet()
  const [isLoading, setIsLoading] = useState(false)
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."})
      return
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const handleWeb3Login = async () => {
    if (!isWalletSystemAvailable) {
      toast("Web3 login unavailable", {
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),
      return;
<<<<<<< HEAD

    }
    try {

=======
>>>>>>>     }
    try {
      setIsLoading(true)
      // Check if Ethereum provider (e.g., MetaMask) is available
      const ethereum = (window as any).ethereum
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."})
        return
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet."}),
        return;
<<<<<<< HEAD

      }

    } catch (error: any) {
=======
>>>>>>>       }
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      }

      
      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow
      

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     } catch (error: any) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      toast("Login failed", {
        description: error.message |"Failed to connect wallet. Please try again."})
      logErrorToProduction('Web3 login error:', { data: error })
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD

=======
    : ""
}

  )
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  },


  const handleWeb3Login = async () => {;
    if (!isWalletSystemAvailable) {;
      toast("Web3 login unavailable", {;
        description: "The Web3 login system is currently not available. Please ensure your Reown Project ID is configured."}),;
      return;
    }

    try {;
      setIsLoading(true);

      // Check if Ethereum provider (e && e.g., MetaMask) is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet."}),;
        return;
      }

      await loginWithWeb3(), // This is from useAuth, assumed to be a separate flow;

    } catch (error: any) {;
      toast("Login failed", {;
        description: error && error.message || "Failed to connect wallet. Please try again."}),;
      logErrorToProduction('Web3 login error:', { data: error });
    } finally {;
      setIsLoading(false);
    }
  };

  const buttonDisabled = isLoading || !isWalletSystemAvailable;
  const buttonTitle = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const button_disabled = is_loading || !isWalletSystemAvailable;
  const button_title = !isWalletSystemAvailable;
    ? "Web3 login is currently unavailable. Please ensure your Reown Project ID is configured.";
    : "";
}
  );
}
;
<<<<<<< HEAD

=======
>>>>>>> 
;


>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
