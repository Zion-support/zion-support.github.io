<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import {useState, useEffect} from 'react';
import {Header} from '@/components / Header';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {use_auth} from '@/hooks / use_auth';
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import { Wallet, Database, Save } from './lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components / ui / card';
import {Separator} from '@/components / ui / separator';
import {Switch} from '@/components / ui / switch';
import {Label} from '@/components / ui / label';
import {toast} from 'sonner';






<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { useState, useEffect  } from 'react';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Wallet, Database, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Separator  } from '@/components/ui/separator';
import { Switch  } from '@/components/ui/switch';
import { Label  } from '@/components/ui/label';
import { toast } from 'sonner';
export default function AccountSettings() {
import {useState, useEffect} from 'react';
import {Header} from '@/components / Header';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {use_auth} from '@/hooks / use_auth';
import {Button} from '@/components / ui / button';
import {Input} from '@/components / ui / input';
import { Wallet, Database, Save } from './lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components / ui / card';
import {Separator} from '@/components / ui / separator';
import {Switch} from '@/components / ui / switch';
import {Label} from '@/components / ui / label';
import {toast} from 'sonner';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export default function AccountSettings() {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const { user } = useAuth();
  const [displayWeb3, setDisplayWeb3] = useState(false);
  const [didHandle, setDidHandle] = useState('');
  const [enableBackup, setEnableBackup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  useEffect(() => {;
    try {;
      const saved = localStorage && localStorage.getItem('account_settings');
      if (saved) {;
        const parsed = JSON && JSON.parse(saved);
        setDisplayWeb3(!!parsed && parsed.displayWeb3);
        setDidHandle(parsed && parsed.didHandle || '');
        setEnableBackup(!!parsed && parsed.enableBackup);

<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
=======
  useEffect(() => {
    try {

      const saved = localStorage.getItem('account_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        setDisplayWeb3(!!parsed.displayWeb3);
        setDidHandle(parsed.didHandle |'');
        setEnableBackup(!!parsed.enableBackup)
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import { useState, useEffect } from 'react',
import { Header } from '@/components/Header',
import { Footer } from '@/components/Footer',
import { SEO } from '@/components/SEO',
import { useAuth } from '@/hooks/useAuth',
import { Button } from '@/components/ui/button',
import { Input } from '@/components/ui/input',
import { Wallet, Database, Save } from "lucide-react",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card',
import { Separator } from '@/components/ui/separator',
import { Switch } from '@/components/ui/switch',
import { Label } from '@/components/ui/label',
import { toast } from 'sonner',
export default function AccountSettings() {
  const { user } = useAuth(),
  const [displayWeb3, setDisplayWeb3] = useState(false),
  const [didHandle, setDidHandle] = useState(''),
  const [enableBackup, setEnableBackup] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

  useEffect(() => {
    try {

      const saved = localStorage.getItem('account_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        setDisplayWeb3(!!parsed.displayWeb3);
        setDidHandle(parsed.didHandle |'');
        setEnableBackup(!!parsed.enableBackup)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
export default function AccountSettings() {;
  const { user } = useAuth(),;
  const [displayWeb3, setDisplayWeb3] = useState(false),;
  const [didHandle, setDidHandle] = useState(''),;
  const [enableBackup, setEnableBackup] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  useEffect(() => {;
    try {;
      const saved = localStorage.getItem('account_settings'),;
      if (saved) {;
        const parsed = JSON.parse(saved),;
        setDisplayWeb3(!!parsed.displayWeb3),;
        setDidHandle(parsed.didHandle || ''),;
        setEnableBackup(!!parsed.enableBackup);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      }
    } catch (e) {;
      console && console.error('Error loading account settings', e);
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const handleSave = () => {
    setIsSubmitting(true);
  }, []),
  }, []),
=======
<<<<<<< HEAD


<<<<<<< HEAD
=======
      }
    } catch (e) {
      console.error('Error loading account settings', e)
    }
  }, []);
  const handleSave = () => {
    setIsSubmitting(true);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }, []),
  }, []),
  const handleSave = () => {
    setIsSubmitting(true);
  }, []),
  }, []),
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  const handleSave = () => {
    setIsSubmitting(true),

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    // Simulate API call
    setTimeout(() => {
      try {
        localStorage.setItem(
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
  }, []);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  const handleSave = () => {;
    setIsSubmitting(true);

    // Simulate API call;
    setTimeout(() => {;
      try {;
        localStorage && localStorage.setItem(;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          'account_settings';
          JSON && JSON.stringify({ displayWeb3, didHandle, enableBackup });
        );
        console && console.log('Saved settings', { displayWeb3, didHandle, enableBackup });
        toast && toast.success('Account settings updated successfully');
      } catch (e) {;
        console && console.error('Failed to save settings', e);
        toast && toast.error('Failed to save settings');
      } finally {;
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast && toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');
        return;
      }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          'account_settings',
          JSON.stringify({ displayWeb3, didHandle, enableBackup })
        ),
        // // // console.log('Saved settings', { displayWeb3, didHandle, enableBackup }),
        toast.success('Account settings updated successfully')
      } catch (e) {
        console.error('Failed to save settings', e),
        toast.error('Failed to save settings')
      } finally {
        setIsSubmitting(false)
  }, []),;
  const handleSave = () => {;
    setIsSubmitting(true),;
    // Simulate API call;
    setTimeout(() => {;
      try {;
        localStorage.setItem(;
          'account_settings',;
          JSON.stringify({ displayWeb3, didHandle, enableBackup });
        ),;
        // // // console.log('Saved settings', { displayWeb3, didHandle, enableBackup }),;
        toast.success('Account settings updated successfully');
      } catch (e) {;
        console.error('Failed to save settings', e),;
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
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];

      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,;
      await ethereum && ethereum.request({;
        method: 'personal_sign',;
        params: [address, message];
      });

<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      // Auto-set DID handle if ENS is available;
      try {;
        const provider = new (window as any).ethers && ethers.providers.Web3Provider(ethereum);
        const ensName = await provider && provider.lookupAddress(address);
        if (ensName) {;
          setDidHandle(ensName);
        }
      } catch (error) {;
        console && console.error('ENS lookup error:', error);
      }
  };
  },

  }

  },

  };
  },


  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      toast && toast.success(`Wallet connected: ${address && address.slice(0, 6)}...${address && address.slice(-4)}`);
    } catch (error: any) {;
      toast && toast.error(error && error.message || 'Failed to connect wallet');
    }
  }
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
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <Input
                  id="email"
                  value={user?.email |''}
                  disabled
                  className="bg-gray-100"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

                />;
              </div>;

=======
                />;
              </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
=======
<<<<<<< HEAD

              <div className="flex items-center justify-between">;
                <div className="space-y-0 && 0.5">;
                  <Label htmlFor="displayWeb3">Display Web3 Identity</Label>;
                  <p className="text-xs text-gray-500">Show your Web3 handle instead of email</p>;
                </div>;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <Switch
                  id="displayWeb3"
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

                />;
              </div>;

              <Separator />;

              <div className="flex items-center justify-between">;
                <div className="space-y-0 && 0.5">;
=======
                <Switch
                  id="displayWeb3"
              ;
              <div className="flex items-center justify-between">;
                <div className="space-y-0.5">;
                  <Label htmlFor="displayWeb3">Display Web3 Identity</Label>;
                  <p className="text-xs text-gray-500">Show your Web3 handle instead of email</p>;
                </div>;
                <Switch;
                  id="displayWeb3";
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
                />;
              </div>;
              ;
              <Separator />;
              ;
              <div className="flex items-center justify-between">;
                <div className="space-y-0.5">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                  <Label htmlFor="backup" className="flex items-center gap-1">;
                    <Database className="h-4 w-4" />;
                    Decentralized Backup;
                  </Label>;
                  <p className="text-xs text-gray-500">;
                    Backup your profile data to IPFS/Arweave;
                  </p>;
                </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                <Switch
                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

                />;
              </div>;

=======
                <Switch;
                  id="backup";
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />;
              </div>;
              ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              {enableBackup && (;
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">;
                  Data will be backed up to decentralized storage. This feature is in beta.;
                </div>;
              )}
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
              <Button
                onClick={handleSave}
                disabled={isSubmitting}
                className="w-full">;
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

              </Button>;
            </CardContent>;
          </Card>;

=======
              ;
              <Button ;
                onClick={handleSave}
                disabled={isSubmitting}
                className="w-full";
              >;
                {isSubmitting ? 'Saving...' :'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>;
            </CardContent>;
          </Card>;
          ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

                  {enableBackup 
                    ? 'Restore your profile data from decentralized storage' 

                    :'Enable backup first to use this feature'}
                  {enableBackup
                    ? 'Restore your profile data from decentralized storage'
                    : 'Enable backup first to use this feature'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
                  {enableBackup 
                    ? 'Restore your profile data from decentralized storage' 
                    : 'Enable backup first to use this feature'}
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    </>);
}

=======
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    </>;
  ),; export default function AccountSettings () {
  const {
  user 
}= useAuth ();
const [displayWeb3, setDisplayWeb3] = useState (false);
const [didHandle, setDidHandle] = useState ('');
const [enableBackup, setEnableBackup] = useState (false);
const [isSubmitting, setIsSubmitting] = useState (false);
useEffect ( () => {
  try {
  const saved = localStorage.getItem ('account settings');
if (saved) {
  const parsed = JSON.parse (saved);
setDisplayWeb3 (!!parsed.displayWeb3);
setDidHandle (parsed.didHandle || '');
setEnableBackup (!!parsed.enableBackup) 
}
;

}catch (e) {
  console.error ('Error loading account settings', e) 
}
}, []);
const handleSave = () => {
  setIsSubmitting (true);
try {
  localStorage.setItem (
}catch (e) {
  console.error ('Failed to save settings', e);
toast.error ('Failed to save settings') 
}finally {
  setIsSubmitting (false) 
}
}, 1000) 
};
try {
  //Check if wallet is available <Header /> <main className="container mx-auto py-8 px-4" > <h1 className="text-3xl font-bold mb-6 text-white" >Account Settings</h1> <div className="grid gap-6 md:grid-cols-2" > <Card> <CardHeader> <CardTitle>Profile Settings</CardTitle> <CardDescription>Manage your personal information and privacy</CardDescription> </CardHeader> <CardContent className="space-y-6" > <div className="space-y-2" > <Label htmlFor="email" >Email Address</Label> <Input disabled className="bg-gray-100" /> </div> <div className="space-y-2" > <Label htmlFor="didHandle" >Web3 Identity Handle</Label> <div className="flex gap-2" > <Input > <Wallet className="h-4 w-4" /> Connect </Button> </div> <p className="text-xs text-gray-500 mt-1" > Link your decentralized identity to display on your profile </p> </div> <div className="flex items-center justify-between" > <div className="space-y-0.5" > <Label htmlFor="displayWeb3" >Display Web3 Identity</Label> <p className="text-xs text-gray-500" >Show your Web3 handle instead of email</p> </div> <Switch /> </div> <Separator /> <div className="flex items-center justify-between" > <div className="space-y-0.5" > <Label htmlFor="backup" className="flex items-center gap-1" > <Database className="h-4 w-4" /> Decentralized Backup </Label> <p className="text-xs text-gray-500" > Backup your profile data to IPFS/Arweave </p> </div> <Switch Data will be backed up to decentralized storage. This feature is in beta. </div>) 
}<Button </Button> </CardContent> </Card> <Card> <CardHeader> <CardTitle>Web3 Features</CardTitle> <CardDescription>Manage your Web3 connections and features</CardDescription> </CardHeader> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500" > <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" ></path> <polyline points="22 4 12 14.01 9 11.01" ></polyline> </svg> <span> {
  didHandle 
}</span> </div>) : (<div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md" > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500" > <line x1="18" y1="6" x2="6" y2="18" ></line> <line x1="6" y1="6" x2="18" y2="18" ></line> </svg> <span>No wallet connected</span> </div>) 
}</div> <div> </p> </div> </div> </div> <div> <h3 className="font-medium mb-2" >Recovery Options</h3> <Button ? 'Restore your profile data from decentralized storage': 'Enable backup first to use this feature' 
}</p> </div> </CardContent> </Card> </div> </main> <Footer /> </>) 
}
    </>;
  );
}
;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
