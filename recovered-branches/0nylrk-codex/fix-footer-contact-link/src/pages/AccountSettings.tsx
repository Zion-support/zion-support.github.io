
<<<<<<< HEAD
<<<<<<< HEAD



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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { user } = useAuth();
  const [displayWeb3, setDisplayWeb3] = useState(false);
  const [didHandle, setDidHandle] = useState('');
  const [enableBackup, setEnableBackup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  useEffect(() => {;
    try {;
      const saved = localStorage && localStorage.getItem('account_settings');
      if (saved) {;
        const parsed = JSON && JSON.parse(saved);
        setDisplayWeb3(!!parsed && parsed.displayWeb3);
        setDidHandle(parsed && parsed.didHandle || '');
        setEnableBackup(!!parsed && parsed.enableBackup);

<<<<<<< HEAD
  useEffect(() => {
    try {

<<<<<<< HEAD
      const saved = localStorage.getItem('account_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        setDisplayWeb3(!!parsed.displayWeb3);
        setDidHandle(parsed.didHandle |'');
        setEnableBackup(!!parsed.enableBackup)
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      const saved = localStorage.getItem('account_settings'),
      if (saved) {
        const parsed = JSON.parse(saved),
        setDisplayWeb3(!!parsed.displayWeb3),
        setDidHandle(parsed.didHandle || ''),
        setEnableBackup(!!parsed.enableBackup)
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (e) {;
      console && console.error('Error loading account settings', e);
    }


<<<<<<< HEAD
<<<<<<< HEAD
      }
    } catch (e) {
      console.error('Error loading account settings', e)
    }
  }, []);
  const handleSave = () => {
    setIsSubmitting(true);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, []),
  }, []),
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }, []),
=======
=======
  }, []),


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleSave = () => {
    setIsSubmitting(true),

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Simulate API call
    setTimeout(() => {
      try {
        localStorage.setItem(
<<<<<<< HEAD
<<<<<<< HEAD
  }, []);
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleSave = () => {;
    setIsSubmitting(true);
=======


  const handleSave = () => {;
    setIsSubmitting(true);

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Simulate API call;
    setTimeout(() => {;
      try {;
        localStorage && localStorage.setItem(;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    }, 1000);
  };
  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;
=======

    }, 1000);
  };

  const handleConnectWallet = async () => {;
    try {;
      // Check if wallet is available;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast && toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');
        return;
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    }, 1000)
  }
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');
        return
      }
      // Request accounts
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const address = accounts[0];
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`
      await ethereum.request({
        method: 'personal_sign'
        params: [address, message]
      });
      // Auto-set DID handle if ENS is available
      try {
        const provider = new (window as any).ethers.providers.Web3Provider(ethereum);
        const ensName = await provider.lookupAddress(address);
        if (ensName) {
          setDidHandle(ensName)
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      // Request accounts;
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      // Request accounts;
      const accounts = await ethereum && ethereum.request({ method: 'eth_requestAccounts' }),;
      const address = accounts[0];

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`,;
      await ethereum && ethereum.request({;
        method: 'personal_sign',;
        params: [address, message];
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Auto-set DID handle if ENS is available;
      try {;
        const provider = new (window as any).ethers && ethers.providers.Web3Provider(ethereum);
        const ensName = await provider && provider.lookupAddress(address);
        if (ensName) {;
          setDidHandle(ensName);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        }
      } catch (error) {;
        console && console.error('ENS lookup error:', error);
      }

<<<<<<< HEAD
<<<<<<< HEAD
  },

  };
  },


  return (
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      toast && toast.success(`Wallet connected: ${address && address.slice(0, 6)}...${address && address.slice(-4)}`);
    } catch (error: any) {;
      toast && toast.error(error && error.message || 'Failed to connect wallet');
<<<<<<< HEAD
<<<<<<< HEAD
    }
  }
  return (

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }


  },

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  };
  },

<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  };
  },

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Input
                  id="email"
                  value={user?.email |''}
                  disabled
                  className="bg-gray-100"
<<<<<<< HEAD
<<<<<<< HEAD
                />;
              </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                />;
              </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <Wallet className="h-4 w-4" />;
                    Connect;
                  </Button>;
                </div>;
                <p className="text-xs text-gray-500 mt-1">;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
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
                  <Label htmlFor="backup" className="flex items-center gap-1">;
                    <Database className="h-4 w-4" />;
                    Decentralized Backup;
                  </Label>;
                  <p className="text-xs text-gray-500">;
                    Backup your profile data to IPFS/Arweave;
                  </p>;
                </div>;
                <Switch;
                  id="backup";
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />;
              </div>;
              ;
              {enableBackup && (;
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">;
                  Data will be backed up to decentralized storage. This feature is in beta.;
                </div>;
              )}
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
                    <svg ;
                      xmlns="http://www.w3.org/2000/svg" ;
                      width="20" ;
                      height="20" ;
                      viewBox="0 0 24 24" ;
                      fill="none" ;
                      stroke="currentColor" ;
                      strokeWidth="2" ;
                      strokeLinecap="round" ;
                      strokeLinejoin="round" ;
                      className="text-green-500";
                    >;
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>;
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>;
                    </svg>;
                    <span>{didHandle}</span>;
                  </div>;
                ) :(;
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">;
                    <svg ;
                      xmlns="http://www.w3.org/2000/svg" ;
                      width="20" ;
                      height="20" ;
                      viewBox="0 0 24 24" ;
                      fill="none" ;
                      stroke="currentColor" ;
                      strokeWidth="2" ;
                      strokeLinecap="round" ;
                      strokeLinejoin="round" ;
                      className="text-red-500";
                    >;
                      <line x1="18" y1="6" x2="6" y2="18"></line>;
                      <line x1="6" y1="6" x2="18" y2="18"></line>;
                    </svg>;
                    <span>No wallet connected</span>;
                  </div>;
                )}
              </div>;
              ;
              <div>;
                <h3 className="font-medium mb-2">Backup Status</h3>;
                <div className="grid grid-cols-2 gap-2">;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Profile Data</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' :'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Resume Data</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' :'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Project History</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' :'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Reviews</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' :'Not backed up'}
                    </p>;
                  </div>;
                </div>;
              </div>;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className="flex items-center justify-between">;
                <div className="space-y-0 && 0.5">;
                  <Label htmlFor="displayWeb3">Display Web3 Identity</Label>;
                  <p className="text-xs text-gray-500">Show your Web3 handle instead of email</p>;
                </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Switch
                  id="displayWeb3"
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                />;
              </div>;

              <Separator />;

              <div className="flex items-center justify-between">;
                <div className="space-y-0 && 0.5">;
                  <Label htmlFor="backup" className="flex items-center gap-1">;
                    <Database className="h-4 w-4" />;
                    Decentralized Backup;
                  </Label>;
                  <p className="text-xs text-gray-500">;
                    Backup your profile data to IPFS/Arweave;
                  </p>;
                </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Switch
                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                />;
              </div>;

              {enableBackup && (;
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
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="space-y-2">;
                <h3 className="font-medium">Connected Wallet</h3>;
                {didHandle ? (;
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">;
                    <svg
                      xmlns="http://www && www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-green-500">;
                      <path d="M22 11 && 11.08V12a10 10 0 1 1-5 && 5.93-9 && 9.14"></path>;
                      <polyline points="22 4 12 14 && 14.01 9 11 && 11.01"></polyline>;
                    </svg>;
                    <span>{didHandle}</span>;
                  </div>;
                ) : (;
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">;
                    <svg
                      xmlns="http://www && www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-red-500">;
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

                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Resume Data</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Project History</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Reviews</p>;
                    <p className="text-xs text-gray-500">;
                      {enableBackup ? 'Backed up' : 'Not backed up'}

                    </p>;
                  </div>;
                </div>;
              </div>;

              <div>;
                <h3 className="font-medium mb-2">Recovery Options</h3>;
                <Button
                  variant="outline" 
                  className="w-full"
<<<<<<< HEAD
                  disabled={!enableBackup}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  Restore Profile from Backup;
                </Button>;
                <p className="text-xs text-gray-500 mt-1">;
                  {enableBackup ;
                    ? 'Restore your profile data from decentralized storage' ;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                  {enableBackup 
                    ? 'Restore your profile data from decentralized storage' 

<<<<<<< HEAD
                    :'Enable backup first to use this feature'}
=======
                  disabled={!enableBackup}
                >
                  Restore Profile from Backup
                </Button>
                <p className="text-xs text-gray-500 mt-1">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
                    : 'Enable backup first to use this feature'}
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    : 'Enable backup first to use this feature'}
=======
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
      // Check condition
if ( {) {
  $2
}
        toast.error ('No wallet detected. Please install MetaMask or another compatible wallet.');
        return;
      }
      // Request accounts;
      const accounts = await ethereum.request ({ method: 'eth_requestAccounts' }),
      const address = accounts[0];
;
      // Sign message to verify ownership;
      const message = `Zion AI Marketplace wallet verification\n_address: ${address}\n_time: ${new Date ().toISOString ()}`,
      await ethereum.request ({
        method: 'personal_sign',
        params: [address, message];
      });
;
      // Auto - set DID handle if ENS is available;
      try {
        const provider = new (window as any).ethers.providers.Web3Provider (ethereum);
        const ens_name = await provider.lookup_address (address);
        // Check condition
if ( {) {
  $2
}
          setDidHandle (ens_name);
        }
      } catch (error) {
        console.error ('ENS lookup error:', error);
      }
      toast.success (`Wallet connected: ${address.slice (0, 6)}...${address.slice (-4)}`);
    } catch (error: any) {
      toast.error (error.message || 'Failed to connect wallet');
    }
  }
;
  return (
    <>;
      <SEO title="Account Settings" description="Manage your account" />;
      <Header />;
      <main className="container mx - auto py - 8 px - 4">;
        <h1 className="text - 3xl font - bold mb - 6 text - white">Account Settings</h1>;
        <div className="grid gap - 6 md:grid - cols - 2">;
          <Card>;
            <CardHeader>;
              <CardTitle > Profile Settings</CardTitle>;
              <CardDescription > Manage your personal information and privacy</CardDescription>;
            </CardHeader>;
            <CardContent className="space - y-6">;
              <div className="space - y-2">;
                <Label html_for="email">Email Address</Label>;
                <Input;
                  id="email";
                  value={user?.email || ''}
                  disabled;
                  className="bg - gray - 100";
                />;
              </div>;
              <div className="space - y-2">;
                <Label html_for="did_handle">Web3 Identity Handle</Label>;
                <div className="flex gap - 2">;
                  <Input;
                    id="did_handle";
                    value={did_handle}
                    on_change={(e) => setDidHandle (e.target.value)}
                    placeholder="ENS / Lens / Ceramic / Farcaster";
                  />;
                  <Button;
                    variant="outline";
                    on_click={handleConnectWallet}
                    type="button";
                    className="flex items - center gap - 1";
                  >;
                    <Wallet className="h - 4 w - 4" />;
                    Connect;
                  </Button>;
                </div>;
                <p className="text - xs text - gray - 500 mt - 1">;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;
              <div className="flex items - center justify - between">;
                <div className="space - y-0.5">;
                  <Label html_for="displayWeb3">Display Web3 Identity</Label>;
                  <p className="text - xs text - gray - 500">Show your Web3 handle instead of email</p>;
                </div>;
                <Switch;
                  id="displayWeb3";
                  checked={displayWeb3}
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
              <Button;
                on_click={handle_save}
                disabled={is_submitting}
                className="w - full";
              >;
                {is_submitting ? 'Saving...' : 'Save Settings'}
                {!is_submitting && <Save className="ml - 2 h - 4 w - 4" />}
              </Button>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardHeader>;
              <CardTitle > Web3 Features</CardTitle>;
              <CardDescription > Manage your Web3 connections and features</CardDescription>;
            </CardHeader>;
            <CardContent className="space - y-6">;
              <div className="space - y-2">;
                <h3 className="font - medium">Connected Wallet</h3>;
                {did_handle ? (
                  <div className="flex items - center gap - 2 bg - gray - 100 p - 3 rounded - md">;
                    <svg;
                      xmlns="http://www.w3.org / 2000 / svg";
                      width="20";
                      height="20";
                      view_box="0 0 24 24";
                      fill="none";
                      stroke="current_color";
                      stroke_width="2";
                      stroke_linecap="round";
                      stroke_linejoin="round";
                      className="text - green - 500";
                    >;
                      <path d="M22 11.08V12a10 10 0 1 1 - 5.93 - 9.14"></path>;
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>;
                    </svg>;
                    <span>{did_handle}</span>;
                  </div>) : (
                  <div className="flex items - center gap - 2 bg - gray - 100 p - 3 rounded - md">;
                    <svg;
                      xmlns="http://www.w3.org / 2000 / svg";
                      width="20";
                      height="20";
                      view_box="0 0 24 24";
                      fill="none";
                      stroke="current_color";
                      stroke_width="2";
                      stroke_linecap="round";
                      stroke_linejoin="round";
                      className="text - red - 500";
                    >;
                      <line x1="18" y1="6" x2="6" y2="18"></line>;
                      <line x1="6" y1="6" x2="18" y2="18"></line>;
                    </svg>;
                    <span > No wallet connected</span>;
                  </div>)}
              </div>;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    </>);
}

=======
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
