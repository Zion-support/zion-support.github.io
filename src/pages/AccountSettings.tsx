toast.success (
        `Wallet connected: ${address.slice (0, 6)}...${address.slice (-4)}`);


    } catch (error: any) {
      toast.error (error.message || 'Failed to connect wallet');
    }
  },

import { useState } from 'react',;
import { useLocalStorage } from '@/hooks',;
import { Header } from '@/components/Header',;
import { SEO } from '@/components/SEO',;
import { useAuth } from '@/hooks/useAuth',;
import { Button } from '@/components/ui/button',;
import { Input } from '@/components/ui/input',;
import { Wallet, Database, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',;
import { Separator } from '@/components/ui/separator',;
import { Switch } from '@/components/ui/switch',;
import { Label } from '@/components/ui/label',;
import { toast } from 'sonner',;
import { logInfo, logErrorToProduction } from '@/utils/productionLogger',;
export default function AccountSettings() {;
  const { user } = useAuth(),;
  const [displayWeb3, setDisplayWeb3] = useLocalStorage('display_web3', false),;
  const [didHandle, setDidHandle] = useLocalStorage('did_handle', ''),;
  const [enableBackup, setEnableBackup] = useLocalStorage('enable_backup', false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const handleSave = () => {;
    setIsSubmitting(true),;
    // Simulate API call;
    setTimeout(() => {;
      try {;
        setDisplayWeb3(displayWeb3),;
        setDidHandle(didHandle),;
        setEnableBackup(enableBackup),;
        logInfo('Saved settings', { displayWeb3, didHandle, enableBackup }),;
        toast.success('Account settings updated successfully');
      } catch (e) {;
        logErrorToProduction('Failed to save settings', { data:  e }),;
        toast.error('Failed to save settings');
      } finally {;
        setIsSubmitting(false);
      }
    }, 1000);
  },;
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum,;
      if (!ethereum) {;
        toast.error('No wallet detected. Please install MetaMask or another compatible wallet.'),;
        return;
      }
;
      // Request accounts;
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0],;
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,;
      await ethereum.request({;
        method: 'personal_sign',;
        params: [address, message];
      }),;
      // Auto-set DID handle if ENS is available;
      try {;
        const provider = new (window as any).ethers.providers.Web3Provider(ethereum),;
        const ensName = await provider.lookupAddress(address);
        if (ensName) {;
          setDidHandle(ensName);
        }
      } catch (error) {;
        logErrorToProduction('ENS lookup error:', { data: error });
      }
;
      toast.success(`Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`);
    } catch (error: any) {;
      toast.error(error.message || 'Failed to connect wallet');

    }
  },





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

  return (
    <>
      <SEO title="Account Settings" description="Manage your account" />
      <Header />
      <main className='container mx-auto py-8 px-4'>
        <h1 className='text-3xl font-bold mb-6 text-white'>Account Settings</h1>
        <div className='grid gap-6 md:grid-cols-2'>
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-2">


                    : 'Enable backup first to use this feature'}
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
<<<<<<< HEAD



    </>);
}
;