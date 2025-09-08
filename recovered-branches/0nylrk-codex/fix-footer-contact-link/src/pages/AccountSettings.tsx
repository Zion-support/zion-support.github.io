<<<<<<< HEAD

import {useState, useEffect} from 'react';


=======
import {Header} from '@/components / Header';'
import {Footer} from '@/components / Footer';'
import {SEO} from '@/components / SEO';'
import {use_auth} from '@/hooks / use_auth';'
import {Button} from '@/components / ui / button';'
import {Input} from '@/components / ui / input';'
import { Wallet, Database, Save } from './lucide-react';'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components / ui / card';'
import {Separator} from '@/components / ui / separator';'
import {Switch} from '@/components / ui / switch';'
import {Label} from '@/components / ui / label';'
import {toast} from 'sonner';'
import { useState, useEffect  } from 'react';'
import { Header  } from '@/components/Header';'
import { Footer  } from '@/components/Footer';'
import { SEO  } from '@/components/SEO';'
import { useAuth  } from '@/hooks/useAuth';'
import { Button  } from '@/components/ui/button';'
import { Input  } from '@/components/ui/input';'
import { Wallet, Database, Save } from 'lucide-react';'
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




>>>>>>> origin/cursor/delete-old-data-records-6bba
import { useState, useEffect  } from 'react';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
<<<<<<< HEAD


export default function AccountSettings() {;


=======


import { Input  } from '@/components/ui/input';
import { Wallet, Database, Save } from "lucide-react";'
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';'
import { Separator  } from '@/components/ui/separator';'
import { Switch  } from '@/components/ui/switch';'
import { Label  } from '@/components/ui/label';'
import { toast } from 'sonner';'
export default function AccountSettings() {
}
import {useState, useEffect} from 'react';'

import { Input  } from '@/components/ui/input';
import { Wallet, Database, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Separator  } from '@/components/ui/separator';
import { Switch  } from '@/components/ui/switch';
import { Label  } from '@/components/ui/label';
import { toast } from 'sonner';
export default function AccountSettings() {
import {useState, useEffect} from 'react';
import {Header} from '@/components/Header';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {useAuth} from '@/hooks/useAuth';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Wallet, Database, Save} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {Switch} from '@/components/ui/switch';
import {Label} from '@/components/ui/label';
import {toast} from 'sonner';
export default function AccountSettings() {;
import { toast } from 'sonner';

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
export default function AccountSettings() {;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const { user } = useAuth();

  const [displayWeb3, setDisplayWeb3] = useState(false);
  const [didHandle, setDidHandle] = useState('');'
  const [enableBackup, setEnableBackup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
export default function AccountSettings() {}
  const { user } = useAuth(),
  const [displayWeb3, setDisplayWeb3] = useState(false),'
  const [didHandle, setDidHandle] = useState(''),
  const [enableBackup, setEnableBackup] = useState(false),
  const [isSubmitting, setIsSubmitting] = useState(false),

  useEffect(() => {}
    try {};
';
      const saved = localStorage.getItem('account_settings');
      if (saved) {}
        const parsed = JSON.parse(saved);
        setDisplayWeb3(!!parsed.displayWeb3);'
        setDidHandle(parsed.didHandle |'');
        setEnableBackup(!!parsed.enableBackup)

<<<<<<< HEAD




      }
    } catch (e) {;'
      console && console.error('Error loading account settings', e);
    }




  const handleSave = () => {
    setIsSubmitting(true);

  }, []),
  }, []),


  const handleSave = () => {

    setIsSubmitting(true);
  }, []),
  }, []),  }, []),
  }, []),

  const handleSave = () => {}

    setIsSubmitting(true),





    // Simulate API call
    setTimeout(() => {
      try {
        localStorage.setItem(


=======
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
export default function AccountSettings() { return null; }
  const { user } = useAuth(),;
  const [displayWeb3, setDisplayWeb3] = useState(false),;'
export default function AccountSettings() {;
  }
  const { user } = useAuth(),;
  const [displayWeb3, setDisplayWeb3] = useState(false),;
  const [didHandle, setDidHandle] = useState(''),;'
  const [enableBackup, setEnableBackup] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  useEffect(() => {;
    }
  const [didHandle, setDidHandle] = useState(''),;
  const [enableBackup, setEnableBackup] = useState(false),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  useEffect(() => {;
    try {;'
      const saved = localStorage.getItem('account_settings'),;
      if (saved) {;
        const parsed = JSON.parse(saved),;
        setDisplayWeb3(!!parsed.displayWeb3),;'
        setDidHandle(parsed.didHandle || ''),;

    try {;
      }
      const saved = localStorage.getItem('account_settings'),;'
      if (saved) {;
        }
        const parsed = JSON.parse(saved),;
        setDisplayWeb3(!!parsed.displayWeb3),;
        setDidHandle(parsed.didHandle || ''),;'
        setEnableBackup(!!parsed.enableBackup);    } catch (e) {;


      }
      console && console.error('Error loading account settings', e);'
    }

    // Simulate API call
    setTimeout(() => {
      try {

        localStorage.setItem(

>>>>>>> origin/cursor/delete-old-data-records-6bba
  const handleSave = () => {;
    setIsSubmitting(true);
    // Simulate API call;
    setTimeout(() => {;
      try {;
        localStorage && localStorage.setItem(;

          'account_settings';
          JSON && JSON.stringify({ displayWeb3, didHandle, enableBackup });
        );
        console && console.log('Saved settings', { displayWeb3, didHandle, enableBackup });'
<<<<<<< HEAD
        toast && toast.success('Account settings updated successfully');
      } catch (e) {;'
        console && console.error('Failed to save settings', e);'
        toast && toast.error('Failed to save settings');
      } finally {;
        setIsSubmitting(false);
      }

    }, 1000);
  };
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;

=======
        toast && toast.success('Account settings updated successfully');'

>>>>>>> origin/cursor/delete-old-data-records-6bba
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;'
        toast && toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');
        return;
      }

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          'account_settings',
          JSON.stringify({ displayWeb3, didHandle, enableBackup })
        ),'
        // // // console.log('Saved settings', { displayWeb3, didHandle, enableBackup }),'
        toast.success('Account settings updated successfully')
      } catch (e) {'
        console.error('Failed to save settings', e),'
        toast.error('Failed to save settings')
      } finally {}
        setIsSubmitting(false)

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }, []),;
  const handleSave = () => {;
    setIsSubmitting(true),;
    // Simulate API call;
    setTimeout(() => {;
      try {;
        localStorage.setItem(;'
          'account_settings',;
          JSON.stringify({ displayWeb3, didHandle, enableBackup });
        ),;'
        // // // console.log('Saved settings', { displayWeb3, didHandle, enableBackup }),;'
        toast.success('Account settings updated successfully');
      } catch (e) {;'
        console.error('Failed to save settings', e),;'
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
      if (!ethereum) {;'
        toast.error('No wallet detected. Please install MetaMask or another compatible wallet.'),;
        return;
      }
;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      // Request accounts;'
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,;
      await ethereum && ethereum.request({;'
        method: 'personal_sign',;
        params: [address, message];
      });

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Auto-set DID handle if ENS is available;
      try {;
        const provider = new (window as any).ethers && ethers.providers.Web3Provider(ethereum);
        const ensName = await provider && provider.lookupAddress(address);
        if (ensName) {;
          setDidHandle(ensName);

<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        }
      } catch (error) {;'
        console && console.error('ENS lookup error:', error);
      }
  };
  },

<<<<<<< HEAD


=======
  }
  }, []),;
  const handleSave = () => {;
    setIsSubmitting(true),;
    // Simulate API call;
    setTimeout(() => {;
      try {;
        localStorage.setItem(;'
          'account_settings',;
          JSON.stringify({ displayWeb3, didHandle, enableBackup });
        ),;'
        // // // console.log('Saved settings', { displayWeb3, didHandle, enableBackup }),;'
        toast.success('Account settings updated successfully');
      } catch (e) {;'
        console.error('Failed to save settings', e),;'
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
      if (!ethereum) {;'
        toast.error('No wallet detected. Please install MetaMask or another compatible wallet.'),;
        return;
      }
;
      // Request accounts;
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,;
      await ethereum && ethereum.request({;'
        method: 'personal_sign',;
        params: [address, message];
      });
      // Auto-set DID handle if ENS is available;
      try {;
        const provider = new (window as any).ethers && ethers.providers.Web3Provider(ethereum);
        const ensName = await provider && provider.lookupAddress(address);
        if (ensName) {;
          setDidHandle(ensName);
        }
      } catch (error) {;'
        console && console.error('ENS lookup error:', error);
      }
  };
  },


  }
>>>>>>> origin/cursor/delete-old-data-records-6bba

  },

  };
  },

  return (

    }
  }
  },

  };
  },

  return (

  return (

)`;
      toast && toast.success(`Wallet connected: ${address && address.slice(0, 6)}...${address && address.slice(-4)}`);
    } catch (error: any) {;
      toast && toast.error(error && error.message || 'Failed to connect wallet');

<<<<<<< HEAD




=======
}
  }
  return (

      } catch (e) {;
        }
        console && console.error('Failed to save settings', e);'
        toast && toast.error('Failed to save settings');'
      } finally {;
        }
        setIsSubmitting(false);
      }
    <>;
      <SEO title="Account Settings" description="Manage your account" />;
      <Header />;
      <main className="container mx-auto py-8 px-4">;
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>;
        ;
        <div className="grid gap-6 md:grid-cols-2">;
          <Card>;
            <CardHeader>;
              <CardTitle>Profile Settings</CardTitle>;
              <CardDescription>Manage your personal information and privacy</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="space-y-2">;
                <Label htmlFor="email">Email Address</Label>;
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
      } catch (error) {
        console.error('ENS lookup error:', error)
      }
      toast.success(`Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`)
    } catch (error: any) {
      toast.error(error.message |'Failed to connect wallet')
    }
  }
  },

  };
  },

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

}
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba
  return (

    <>;
      <SEO title="Account Settings" description="Manage your account" />;
      <Header />;
      <main className="container mx-auto py-8 px-4">;
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>;
        ;
        <div className="grid gap-6 md:grid-cols-2">;
          <Card>;
            <CardHeader>;
              <CardTitle>Profile Settings</CardTitle>;
              <CardDescription>Manage your personal information and privacy</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="space-y-2">;
                <Label htmlFor="email">Email Address</Label>;
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
      } catch (error) {
        console.error('ENS lookup error:', error)
      }
      toast.success(`Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`)
    } catch (error: any) {
      toast.error(error.message |'Failed to connect wallet')
    }
  }
  },


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                <Input
                  id="email"
                  value={user?.email |''}
                  disabled
                  className="bg-gray-100"
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              <CardTitle>Profile Settings
              <CardDescription>Manage your personal information and privacy
            <CardContent className="space-y-6">"
              <div className="space-y-2">"
                <Label htmlFor="email">Email Address"
                <Input;"
                  id="email"""
                  value={user?.email |}
                  disabled;
                  className="bg-gray-100""
                />;


<<<<<<< HEAD
=======
/>;
              </div>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
=======
<Input;
                  id="email";
                  value={user?.email || ''}
                  disabled;
                  className="bg-gray-100";
                />;
              </div>;
              ;
              <div className="space-y-2">;
                <Label htmlFor="didHandle">Web3 Identity Handle</Label>;
                <div className="flex gap-2">;
                  <Input;
                    id="didHandle";
                    value={didHandle}
                    onChange={(e) => setDidHandle(e.target.value)}
                    placeholder="ENS / Lens / Ceramic / Farcaster";
                  />;
                  <Button ;
                    variant="outline" ;
                    onClick={handleConnectWallet}
                    type="button";
                    className="flex items-center gap-1";
                  >;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                    <Wallet className="h-4 w-4" />;

                    Connect;
                  </Button>;
                </div>;"
                <p className="text-xs text-gray-500 mt-1">;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;

<<<<<<< HEAD


=======
                <Switch
>>>>>>> origin/cursor/delete-old-data-records-6bba
                  id="displayWeb3"
              </div>;"
                <Label htmlFor="didHandle">Web3 Identity Handle;""
                <div className="flex gap-2">;"
                    id="didHandle""
                    value={didHandle})
                    onChange={(e) => setDidHandle(e && e.target.value)}

                  <Button;"
                    variant="outline""
                    onClick={handleConnectWallet}"
                    type="button"""
                    className="flex items-center gap-1">;"
                    <Wallet className="h-4 w-4" />;"

                <p className="text-xs text-gray-500 mt-1">;"
</p>
                </p>;
              <div className="flex items-center justify-between">;"
                <div className="space-y-0 && 0.5">;"
                  <Label htmlFor="displayWeb3">Display Web3 Identity;""
                  <p className="text-xs text-gray-500">Show your Web3 handle instead of email</p>;"
                </div>;
                <Switch;"
                  id="displayWeb3""
                  checked={displayWeb3}

<<<<<<< HEAD
                  onCheckedChange={setDisplayWeb3}

                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}

=======

                  <p className="text-xs text-gray-500">;
                    Backup your profile data to IPFS/Arweave;
                  </p>;
                </div>;


                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />
              </div>
              {enableBackup && (
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
                  Data will be backed up to decentralized storage. This feature is in beta.
                </div>
              )}
              <Button
                onClick={handleSave}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Web3 Features</CardTitle>
              <CardDescription>Manage your Web3 connections and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Connected Wallet</h3>
                {didHandle ? (
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>{didHandle}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>No wallet connected</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium mb-2">Backup Status</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Profile Data</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Resume Data</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Project History</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Reviews</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Recovery Options</h3>
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={!enableBackup}
                >
                  Restore Profile from Backup
                </Button>
                <p className="text-xs text-gray-500 mt-1">
                  disabled={!enableBackup}>;
              ;
              <div>;
                <h3 className="font-medium mb-2">Recovery Options</h3>;
                <Button ;
                  variant="outline" ;
                  className="w-full";
                  disabled={!enableBackup}
                >;
>>>>>>> origin/cursor/delete-old-data-records-6bba

                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">;
                  Data will be backed up to decentralized storage. This feature is in beta.;
                </div>;
              )}

              <Button
                onClick={handleSave}
                disabled={isSubmitting}
                className="w-full">;
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}

              </Button>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Web3 Features</CardTitle>;
              <CardDescription>Manage your Web3 connections and features</CardDescription>;

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

                      {enableBackup ? 'Backed up' : 'Not backed up'}
{enableBackup ? 'Backed up' :'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Resume Data</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' : 'Not backed up'}
{enableBackup ? 'Backed up' :'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Project History</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' : 'Not backed up'}
{enableBackup ? 'Backed up' :'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Reviews</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' : 'Not backed up'}

{enableBackup ? 'Backed up' :'Not backed up'}
                    </p>;
                  </div>;
                </div>;
              </div>;

              <div>;
                <h3 className="font-medium mb-2">Recovery Options</h3>;
                <Button
                  variant="outline" 
                  className="w-full"
                  disabled={!enableBackup}>;
<<<<<<< HEAD

=======


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
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="backup" className="flex items-center gap-1">
                    <Database className="h-4 w-4" />
                    Decentralized Backup
                  </Label>
                  <p className="text-xs text-gray-500">
                    Backup your profile data to IPFS/Arweave
                  </p>
                </div>
                <Switch
                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />
              </div>
              {enableBackup && (
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
                  Data will be backed up to decentralized storage. This feature is in beta.
                </div>
              )}
              <Button
                onClick={handleSave}
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Web3 Features</CardTitle>
              <CardDescription>Manage your Web3 connections and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Connected Wallet</h3>
                {didHandle ? (
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>{didHandle}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>No wallet connected</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium mb-2">Backup Status</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Profile Data</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Resume Data</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Project History</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Reviews</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Recovery Options</h3>
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={!enableBackup}
                >
                  Restore Profile from Backup
                </Button>
                <p className="text-xs text-gray-500 mt-1">


>>>>>>> origin/cursor/delete-old-data-records-6bba
                  Restore Profile from Backup;
                </Button>;
                <p className="text-xs text-gray-500 mt-1">;
                  {enableBackup ;
                    ? 'Restore your profile data from decentralized storage' ;

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

                  {enableBackup 
                    ? 'Restore your profile data from decentralized storage' 

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    : 'Enable backup first to use this feature'}
export default /**
 * AccountSettings - Function description
 */
function AccountSettings() {
  const { user } = use_auth ();
  const [displayWeb3, setDisplayWeb3] = useState (false);
  const [did_handle, setDidHandle] = useState ('');
  const [enable_backup, setEnableBackup] = useState (false);
  const [is_submitting, setIsSubmitting] = useState (false);
;
  useEffect (() => {
    try {
      const saved = local_storage.get_item ('account_settings');
      // Check condition
if ( {) {
  $2
}
        const parsed = JSON.parse (saved);
        setDisplayWeb3 (!!parsed.displayWeb3);
        setDidHandle (parsed.did_handle || '');
        setEnableBackup (!!parsed.enable_backup);
      }
    } catch (e) {
      console.error ('Error loading account settings', e);
    }
  }, []);
;
  const handle_save = () =>: any {
    setIsSubmitting (true);
;
    // Simulate API call;
    set_timeout (() => {
      try {
        local_storage.set_item (
          'account_settings';
          JSON.stringify ({ displayWeb3, did_handle, enable_backup }));
        console.log ('Saved settings', { displayWeb3, did_handle, enable_backup });
        toast.success ('Account settings updated successfully');
      } catch (e) {
        console.error ('Failed to save settings', e);
        toast.error ('Failed to save settings');
      } finally {
        setIsSubmitting (false);
      }
    }, 1000);
  }
;
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available;
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        }
        toast && toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');'
        return;
      }
      toast && toast.success(`Wallet 'connected': ${address && address.slice(0, 6)}...${address && address.slice(-4)}`);`
    } catch ('error': any) {;
      }
      toast && toast.error(error && error.message || 'Failed to connect wallet');'
    }
  }
  }
  };
  },
return (;
    <>;
      <SEO title='Account Settings' description='Manage your account' />;'
      <Header />;
      <main className='container mx-auto py-8 px-4'>;'
        <h1 className='text-3xl font-bold mb-6 text-white'>Account Settings</h1>;'
        <div className='grid gap-6 'md':grid-cols-2'>;'
          <Card>;
            <CardHeader>;
              <CardTitle>Profile Settings</CardTitle>;
              <CardDescription>Manage your personal information and privacy</CardDescription>;
            </CardHeader>;
            <CardContent className='space-y-6'>;'
              <div className='space-y-2'>;'
                <Label htmlFor='email'>Email Address</Label>;                    <Wallet className='h-4 w-4' />;'
                    Connect;
                  </Button>;
                </div>;
                <p className='text-xs text-gray-500 mt-1'>;'
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;
              <div className='flex items-center justify-between'>;'
                <div className='space-y-0 && 0.5'>;'
                  <Label htmlFor='displayWeb3'>Display Web3 Identity</Label>;'
                  <p className='text-xs text-gray-500'>Show your Web3 handle instead of email</p>;'
                </div>;
                <Switch,
id='displayWeb3''
                  checked={displayWeb3}
<<<<<<< HEAD
                  onCheckedChange={setDisplayWeb3}
                />;
              </div>;
              <Separator />;
              <div className="flex items - center justify - between">;
                <div className="space - y-0.5">;
                  <Label html_for="backup" className="flex items - center gap - 1">;
                    <Database className="h - 4 w - 4" />;
                    Decentralized Backup;
                  </Label>;
                  <p className="text - xs text - gray - 500">;
                    Backup your profile data to IPFS / Arweave;
                  </p>;
                </div>;
                <Switch;
                  id="backup";
                  checked={enable_backup}
                  onCheckedChange={setEnableBackup}
                />;
              </div>;
              {enable_backup && (
                <div className="rounded - md bg - amber - 50 p - 3 text - sm text - amber - 800">;
                  Data will be backed up to decentralized storage. This feature is in beta.;
                </div>)}
                  <Label htmlFor="backup" className="flex items-center gap-1">;"
                    <Database className="h-4 w-4" />;"

                  <p className="text-xs text-gray-500">;"
                  id="backup""
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}

                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">;"
              <Button;
                onClick={handleSave}
                disabled={isSubmitting}"
                className="w-full">;"
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}"

              <CardTitle>Web3 Features;
              <CardDescription>Manage your Web3 connections and features;
                <h3 className="font-medium">Connected Wallet</h3>;""
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">;"
                    <svg;"
                      xmlns="http://www && www.w3.org/2000/svg"""
                      width="20"""
                      height="20"""
                      viewBox="0 0 24 24"""
                      fill="none"""
                      stroke="currentColor"""
                      strokeWidth="2"""
                      strokeLinecap="round"""
                      strokeLinejoin="round"""
                      className="text-green-500">;"
</svg>"
                      <path d="M22 11 && 11.08V12a10 10 0 1 1-5 && 5.93-9 && 9.14"></path>;""
                      <polyline points="22 4 12 14 && 14.01 9 11 && 11.01"></polyline>;"
                    </svg>;
                    <span>{didHandle}</span>;
                      className="text-red-500">;"
                      <line x1="18" y1="6" x2="6" y2="18"></line>;""
                      <line x1="6" y1="6" x2="18" y2="18"></line>;"
                    <span>No wallet connected</span>;
              <div>;
                <h3 className="font - medium mb - 2">Backup Status</h3>;
                <div className="grid grid - cols - 2 gap - 2">;
                  <div className="bg - gray - 100 p - 3 rounded - md">;
                    <p className="text - sm font - medium">Profile Data</p>;
                    <p className="text - xs text - gray - 500">;
                      {enable_backup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg - gray - 100 p - 3 rounded - md">;
                    <p className="text - sm font - medium">Resume Data</p>;
                    <p className="text - xs text - gray - 500">;
                      {enable_backup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg - gray - 100 p - 3 rounded - md">;
                    <p className="text - sm font - medium">Project History</p>;
                    <p className="text - xs text - gray - 500">;
                      {enable_backup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg - gray - 100 p - 3 rounded - md">;
                    <p className="text - sm font - medium">Reviews</p>;
                    <p className="text - xs text - gray - 500">;
                      {enable_backup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                </div>;
              </div>;
              <div>;
                <h3 className="font - medium mb - 2">Recovery Options</h3>;
                <Button;
                  variant="outline";
                  className="w - full";
                  disabled={!enable_backup}
                >;
                  Restore Profile from Backup;
                </Button>;
                <p className="text - xs text - gray - 500 mt - 1">;
                  {enable_backup;
                    ? 'Restore your profile data from decentralized storage';
                    : 'Enable backup first to use this feature'}
=======
                  onCheckedChange={setDisplayWeb3}                </p>;
                    :'Enable backup first to use this feature'}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
      </main>
      <Footer />

    </>

                  Restore Profile from Backup;
                </Button>;"
                <p className="text-xs text-gray-500 mt-1">;
                  {enableBackup ;'
                    ? 'Restore your profile data from decentralized storage' ;

                    :'Enable backup first to use this feature'}
                  {enableBackup'
                    ? 'Restore your profile data from decentralized storage''
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
                  {enableBackup '
                    ? 'Restore your profile data from decentralized storage' '
                    : 'Enable backup first to use this feature'}


>>>>>>> origin/cursor/delete-old-data-records-6bba
                </p>;

                    : 'Enable backup first to use this feature'}
      </main>;
      <Footer />;

    </>);
                    ? 'Restore your profile data from decentralized storage'''
                    : 'Enable backup first to use this feature'}'
                </p>;

              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD


    </>);

    </>;
  ),; export default function AccountSettings () {}
  const {};
  user;
}= useAuth ();
const [displayWeb3, setDisplayWeb3] = useState (false);'
const [didHandle, setDidHandle] = useState ('');
const [enableBackup, setEnableBackup] = useState (false);
const [isSubmitting, setIsSubmitting] = useState (false);
useEffect ( () => {}
  try {'
  const saved = localStorage.getItem ('account settings');
if (saved) {}
  const parsed = JSON.parse (saved);
setDisplayWeb3 (!!parsed.displayWeb3);'

  setIsSubmitting (false) 
}, 1000) 

}</div> <div> </p> </div> </div> </div> <div> <h3 className="font-medium mb-2" >Recovery Options</h3> <Button ? 'Restore your profile data from decentralized storage': 'Enable backup first to use this feature' 

}</p> </div> </CardContent> </Card> </div> </main> <Footer /> </>) 
</Footer>
    </>;
  );

}




=======

    </>);
}
}
;
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
