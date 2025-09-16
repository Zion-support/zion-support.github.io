
  const { user } = useAuth();
  const [displayWeb3, setDisplayWeb3] = useState(false);
  const [didHandle, setDidHandle] = useState('');
  const [enableBackup, setEnableBackup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('account_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        setDisplayWeb3(!!parsed.displayWeb3);



  }, []),




  const handleSave = () => {
    setIsSubmitting(true),
        setDidHandle(parsed.didHandle || '');
        setEnableBackup(!!parsed.enableBackup);
      }
    } catch (e) {
      console.error('Error loading account settings', e);
    }
  }, []);

  const handleSave = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      try {
        localStorage.setItem(
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum;
      // Auto-set DID handle if ENS is available
      try {
        const provider = new (window as any).ethers.providers.Web3Provider(ethereum);
        const ensName = await provider.lookupAddress(address);
        if (ensName) {



        }
      } catch (error) {;
        console && console.error('ENS lookup error:', error);
      }


      toast && toast.success(`Wallet connected: ${address && address.slice(0, 6)}...${address && address.slice(-4)}`);
    } catch (error: any) {;
      toast && toast.error(error && error.message || 'Failed to connect wallet');

    }



  },





  },



  };
  },









  return (

    <>;
      <SEO title="Account Settings" description="Manage your account" />;
      <Header />;
      <main className="container mx-auto py-8 px-4">;
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>;

        <div className="grid gap-6 md:grid-cols-2">;
          <Card>;
            <CardHeader>;
              <CardTitle>Profile Settings</CardTitle>;
              <CardDescription>Manage your personal information and privacy</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="space-y-2">;
                <Label htmlFor="email">Email Address</Label>;

                <Input
                  id="email"
                  value={user?.email |''}
                  disabled
                  className="bg-gray-100"

                />;
              </div>;

              <div className="space-y-2">;
                <Label htmlFor="didHandle">Web3 Identity Handle</Label>;
                <div className="flex gap-2">;
                  <Input
                    id="didHandle"
                    value={didHandle}
                    onChange={(e) => setDidHandle(e && e.target.value)}
                    placeholder="ENS / Lens / Ceramic / Farcaster";
                  />;
                  <Button
                    variant="outline" 
                    onClick={handleConnectWallet}
                    type="button"
                    className="flex items-center gap-1">;
                    <Wallet className="h-4 w-4" />;
                    Connect;
                  </Button>;
                </div>;
                <p className="text-xs text-gray-500 mt-1">;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;

              <div className="flex items-center justify-between">;
                <div className="space-y-0 && 0.5">;
                  <Label htmlFor="displayWeb3">Display Web3 Identity</Label>;
                  <p className="text-xs text-gray-500">Show your Web3 handle instead of email</p>;
                </div>;

          setDidHandle(ensName);
        }
      } catch (error) {
        console.error('ENS lookup error:', error);
      }
      
      toast.success(`Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`);
    } catch (error: any) {
      toast.error(error.message || 'Failed to connect wallet');
    }
  };

  return (
    <>
      <SEO title="Account Settings" description="Manage your account" />
      <Header />
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your personal information and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  value={user?.email || ''}
                  disabled
                  className="bg-gray-100"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="didHandle">Web3 Identity Handle</Label>
                <div className="flex gap-2">
                  <Input
                    id="didHandle"
                    value={didHandle}
                    onChange={(e) => setDidHandle(e.target.value)}
                    placeholder="ENS / Lens / Ceramic / Farcaster"
                  />
                  <Button 
                    variant="outline" 
                    onClick={handleConnectWallet}
                    type="button"
                    className="flex items-center gap-1"
                  >
                    <Wallet className="h-4 w-4" />
                    Connect
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Link your decentralized identity to display on your profile
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="displayWeb3">Display Web3 Identity</Label>
                  <p className="text-xs text-gray-500">Show your Web3 handle instead of email</p>
                </div>
                <Switch
                  id="displayWeb3"
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
                <Switch
                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                  variant="outline" 
                  className="w-full"
                  disabled={!enableBackup}
                >
                  Restore Profile from Backup
                </Button>
                <p className="text-xs text-gray-500 mt-1">
                    : 'Enable backup first to use this feature'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
