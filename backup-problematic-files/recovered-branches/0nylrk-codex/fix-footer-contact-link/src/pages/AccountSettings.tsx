
import { useState, useEffect } from 'react',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { SEO } from '@/components/SEO',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Wallet, Database, Save } from "lucide-react",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Separator } from '@/components/ui/separator',;
import { Switch } from '@/components/ui/switch',;
import { Label } from '@/components/ui/label',;
import { toast } from 'sonner',;
;
export default function AccountSettings() {;
  const { user } = useAuth(),;
  const [displayWeb3, setDisplayWeb3] = useState(false),;
  const [didHandle, setDidHandle] = useState(''),;
  const [enableBackup, setEnableBackup] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
;
  useEffect(() => {;
    try {;
      const saved = localStorage.getItem('account_settings'),;
      if (saved) {;
        const parsed = JSON.parse(saved),;
        setDisplayWeb3(!!parsed.displayWeb3),;
        setDidHandle(parsed.didHandle || ''),;
        setEnableBackup(!!parsed.enableBackup),;
      }
    } catch (e) {;
      console.error('Error loading account settings', e),;
    }
  }, []),;
;
  const handleSave = () => {;
    setIsSubmitting(true),;
;
    // Simulate API call;
    setTimeout(() => {;
      try {;
        localStorage.setItem(;
          'account_settings',;
          JSON.stringify({ displayWeb3, didHandle, enableBackup });
        ),;
        // // // console.log('Saved settings', { displayWeb3, didHandle, enableBackup }),;
        toast.success('Account settings updated successfully'),;
      } catch (e) {;
        console.error('Failed to save settings', e),;
        toast.error('Failed to save settings'),;
      } finally {;
        setIsSubmitting(false),;
      }
    }, 1000),;
  },;
  ;
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast.error('No wallet detected. Please install MetaMask or another compatible wallet.'),;
        return,;
      }
      ;
      // Request accounts;
      const accounts = await ethereum.request({ method:'eth_requestAccounts' }),;
      const address = accounts[0],;
      ;
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress:${address}\nTime:${new Date().toISOString()}`,;
      await ethereum.request({;
        method:'personal_sign',;
        params:[address, message];
      }),;
      ;
      // Auto-set DID handle if ENS is available;
      try {;
        const provider = new (window as any).ethers.providers.Web3Provider(ethereum),;
        const ensName = await provider.lookupAddress(address),;
        if (ensName) {;
          setDidHandle(ensName),;
        }
      } catch (error) {;
        console.error('ENS lookup error:', error),;
      }
      ;
      toast.success(`Wallet connected:${address.slice(0, 6)}...${address.slice(-4)}`),;
    } catch (error:any) {;
      toast.error(error.message || 'Failed to connect wallet');
    }
  },;
;
  return (;
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

                    <Wallet className="h-4 w-4" />;
                    Connect;
                  </Button>;
                </div>;
                <p className="text-xs text-gray-500 mt-1">;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;

                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
                />;
              </div>;

                  <Label htmlFor="backup" className="flex items-center gap-1">;
                    <Database className="h-4 w-4" />;
                    Decentralized Backup;
                  </Label>;
                  <p className="text-xs text-gray-500">;
                    Backup your profile data to IPFS/Arweave;
                  </p>;
                </div>;

                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />;
              </div>;

              {enableBackup && (;
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">;
                  Data will be backed up to decentralized storage. This feature is in beta.;
                </div>;
              )}
              ;
              <Button ;
                onClick={handleSave}
                disabled={isSubmitting}

                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Web3 Features</CardTitle>;
              <CardDescription>Manage your Web3 connections and features</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="space-y-2">;
                <h3 className="font-medium">Connected Wallet</h3>;
                {didHandle ? (;
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">;

                      <line x1="18" y1="6" x2="6" y2="18"></line>;
                      <line x1="6" y1="6" x2="18" y2="18"></line>;
                    </svg>;
                    <span>No wallet connected</span>;
                  </div>;
                )}
              </div>;

              <div>;
                <h3 className="font-medium mb-2">Backup Status</h3>;
                <div className="grid grid-cols-2 gap-2">;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Profile Data</p>;
                    <p className="text-xs text-gray-500">;

                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Resume Data</p>;
                    <p className="text-xs text-gray-500">;

                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Project History</p>;
                    <p className="text-xs text-gray-500">;

                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Reviews</p>;
                    <p className="text-xs text-gray-500">;

                    </p>;
                  </div>;
                </div>;
              </div>;

                  Restore Profile from Backup;
                </Button>;
                <p className="text-xs text-gray-500 mt-1">;
                  {enableBackup ;
                    ? 'Restore your profile data from decentralized storage' ;

                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;

}