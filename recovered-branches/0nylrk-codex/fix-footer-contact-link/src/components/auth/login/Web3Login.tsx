
=======
<<<<<<< HEAD
export function Web3Login() {
  const { loginWithWeb3 } = useAuth(),
  const [isLoading, setIsLoading] = useState(false),
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  const handleWeb3Login = async () => {
    try {

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      // Check if wallet is available
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast("Web3 wallet not found", {
          description: "Please install MetaMask or another compatible wallet"})
        return
      }
      await loginWithWeb3()
    } catch (error: any) {
      toast("Login failed", {
        description: error.message |"Failed to connect wallet"})
      console.error("Web3 login error:", error)
    } finally {
      setIsLoading(false)


      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast("Web3 wallet not found", {;
          description: "Please install MetaMask or another compatible wallet"}),;
        return;
      }

      await loginWithWeb3();

    } catch (error: any) {;
      toast("Login failed", {;
        description: error && error.message || "Failed to connect wallet"}),;
      console && console.error("Web3 login error:", error);
    } finally {;
      setIsLoading(false);

    }
=======
  }
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  return (
    <Button
      type="button"
      variant="outline"
      className="w-full border border-zion-blue-light bg-zion-blue-dark text-white hover:bg-zion-blue hover:text-zion-cyan"
      onClick={handleWeb3Login}

      disabled={isLoading}
    >
      {isLoading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Connecting...
        </span>
      ) : (
        <>
          <span className="sr-only">Sign in with Web3</span>
          <Wallet className="h-5 w-5" />
        </>
      )}
    </Button>
  )
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      )}

    </Button>;
  );
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
