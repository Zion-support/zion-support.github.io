<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Wallet, Database, Save } from 'lucide-react'

import {
  Card
  CardContent
  CardDescription
  CardHeader
  CardTitle
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { logInfo, logErrorToProduction } from '@/utils/productionLogger'
export default function AccountSettings() {
  const { user } = useAuth()
  const [displayWeb3, setDisplayWeb3] = useLocalStorage('display_web3', false)
  const [didHandle, setDidHandle] = useLocalStorage('did_handle', '')
  const [enableBackup, setEnableBackup] = useLocalStorage(
    'enable_backup'
    false
  )
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSave = () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      try {
        setDisplayWeb3(displayWeb3)
        setDidHandle(didHandle)
        setEnableBackup(enableBackup)
        logInfo('Saved settings', { displayWeb3, didHandle, enableBackup })
        toast.success('Account settings updated successfully')
      } catch (e) {
        logErrorToProduction('Failed to save settings', { data: e })
        toast.error('Failed to save settings')
      } finally {
        setIsSubmitting(false)
      }
    }, 1000)
  }
  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum
      if (!ethereum) {
        toast.error(
          'No wallet detected. Please install MetaMask or another compatible wallet.'
        )
        return;
      }
      // Request accounts
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
      })
      const address = accounts[0]
      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`
      await ethereum.request({
        method: 'personal_sign'
        params: [address, message]
      })
      // Auto-set DID handle if ENS is available
      try {
        const provider = new (window as any).ethers.providers.Web3Provider(
          ethereum
        )
        const ensName = await provider.lookupAddress(address)
        if (ensName) {
          setDidHandle(ensName)
        }
      } catch (error) {
        logErrorToProduction('ENS lookup error:', { data: error })
      }
      toast.success(
        `Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`
      )
    } catch (error: any) {
      toast.error (error.message || 'Failed to connect wallet');
    }
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

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

=======
toast.success (
        `Wallet connected: ${address.slice (0, 6)}...${address.slice (-4)}`);
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
import { useState } from "react";
import { useLocalStorage } from "@/hooks";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet, Database, Save } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { logInfo, logErrorToProduction } from "@/utils/productionLogger";
export default function AccountSettings() {
  const { user } = useAuth();
  const [displayWeb3, setDisplayWeb3] = useLocalStorage("display_web3", false);
  const [didHandle, setDidHandle] = useLocalStorage("did_handle", "");
  const [enableBackup, setEnableBackup] = useLocalStorage(
    "enable_backup",
    false,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      try {
        setDisplayWeb3(displayWeb3);
        setDidHandle(didHandle);
        setEnableBackup(enableBackup);
        logInfo("Saved settings", { displayWeb3, didHandle, enableBackup });
        toast.success("Account settings updated successfully");
      } catch (e) {
        logErrorToProduction("Failed to save settings", { data: e });
        toast.error("Failed to save settings");
      } finally {
        setIsSubmitting(false);
      }
    }, 1000);
  };

  const handleConnectWallet = async () => {
    try {
      // Check if wallet is available
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        toast.error(
          "No wallet detected. Please install MetaMask or another compatible wallet.",
        );
        return;
      }

      // Request accounts
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];

      // Sign message to verify ownership
      const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`;
      await ethereum.request({
        method: "personal_sign",
        params: [address, message],
      });

      // Auto-set DID handle if ENS is available
      try {
        const provider = new (window as any).ethers.providers.Web3Provider(
          ethereum,
        );
        const ensName = await provider.lookupAddress(address);
        if (ensName) {
          setDidHandle(ensName);
        }
      } catch (error) {
        logErrorToProduction("ENS lookup error:", { data: error });
      }

      toast.success(
        `Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`,
      );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    } catch (error: any) {
      toast.error(error.message || "Failed to connect wallet");
    }
  },
=======
import React from "react";
import MainLayout from "../components/layout/MainLayout";
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115

const AccountSettings: React.FC = () => {
  return (
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx




=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
import { useState } from 'react';
import { useLocalStorage } from '@/hooks';
import { Header } from '@/components/Header';
import { SEO } from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wallet, Database, Save } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,;
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
import { useState  } from 'react';
import { useLocalStorage  } from '@/hooks';
import { Header  } from '@/components/Header';
import { SEO  } from '@/components/SEO';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { Wallet, Database, Save } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Separator  } from '@/components/ui/separator';
import { Switch  } from '@/components/ui/switch';
import { Label  } from '@/components/ui/label';
import { toast  } from 'sonner';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';
export default function AccountSettings() {

  const { user } = useAuth();
  const [displayWeb3, setDisplayWeb3] = useLocalStorage('display_web3', false);
  const [didHandle, setDidHandle] = useLocalStorage('did_handle', '');
  const [enableBackup, setEnableBackup] = useLocalStorage('enable_backup', false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSave = null;
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
  return (
    <>
      <SEO title="Account Settings" description="Manage your account" />"
      <Header />
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
<main className="container mx-auto py-8 px-4">"
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>"
        <div className="grid gap-6 md:grid-cols-2">"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>

        <div className="grid gap-6 md:grid-cols-2">
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Manage your personal information and privacy
              </CardDescription>
            </CardHeader>
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

    <>;
      <SEO title='Account Settings' description='Manage your account' />;
      <Header />;
      <main className='container mx-auto py-8 px-4'>;
        <h1 className='text-3xl font-bold mb-6 text-white'>Account Settings</h1>;

        <div className='grid gap-6 md:grid-cols-2'>;
          <Card>;
            <CardHeader>;
              <CardTitle>Profile Settings</CardTitle>;
    <>;
      <SEO title='Account Settings' description='Manage your account' />;
      <Header />;
      <main className='container mx - auto py - 8 px - 4'>;
        <h1 className='text - 3xl font - bold mb - 6 text - white'>Account Settings</h1>;
        <div className='grid gap - 6 md:grid - cols - 2'>;
          <Card>;
            <CardHeader>;
              <CardTitle > Profile Settings</CardTitle>;

=======
<CardContent className="space-y-6">"
              <div className="space-y-2">"
                <Label htmlFor="email">Email Address</Label>"
                <Input
                  id="email""
                  value={user?.email || ""}"
                  disabled
                  className="bg-gray-100""
                />
              </div>
<div className="space-y-2">"
                <Label htmlFor="didHandle">Web3 Identity Handle</Label>"
                <div className="flex gap-2">"
                  <Input id="didHandle""
                    value={didHandle}
                    onChange={(e) = /> setDidHandle(e.target.value)}
                    placeholder="ENS / Lens / Ceramic / Farcaster""
                  />
                  <Button
variant="outline""
                    onClick={handleConnectWallet}
                    type="button""
                    className="flex items-center gap-1""
                  >
<Wallet className="h-4 w-4" />"
                    Connect
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">"
                  Link your decentralized identity to display on your profile
                </p>
              </div>
<div className="flex items-center justify-between">"
                <div className="space-y-0.5">"
                  <Label htmlFor="displayWeb3">Display Web3 Identity</Label>"
                  <p className="text-xs text-gray-500">"
                    Show your Web3 handle instead of email
                  </p>
                </div>
                <Switch
                  id="displayWeb3""

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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
              <CardDescription>;
                Manage your personal information and privacy;
              </CardDescription>;
            </CardHeader>;

                />;
              </div>;

              <div className='space-y-2'>;
                <Label htmlFor='didHandle'>Web3 Identity Handle</Label>;
                <div className='flex gap-2'>;

                  <Input
                    id='didHandle'
                    value={didHandle}
                    onChange={e => setDidHandle(e.target.value)}
                    placeholder='ENS / Lens / Ceramic / Farcaster'
                  />
                  <Button
                    variant='outline'
                    onClick={handleConnectWallet}
                    type='button'
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
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
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======


            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                    Connect
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Link your decentralized identity to display on your profile
                </p>
              </div>
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
                </div>
                <Switch
                  id='displayWeb3'
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}                />
              </div>
              <Separator />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx

<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="backup" className="flex items-center gap-1">
                    <Database className="h-4 w-4" />
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="backup" className="flex items-center gap-1">
                    <Database className="h-4 w-4" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
                    Decentralized Backup
                  </Label>
                  <p className="text-xs text-gray-500">
                    Backup your profile data to IPFS/Arweave
                  </p>
                </div>
                <Switch
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  id="backup"
=======

                    className='flex items-center gap-1'>;
                    <Wallet className='h-4 w-4' />;
                    Connect;
                  </Button>;
                </div>;
                <p className='text-xs text-gray-500 mt-1'>;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;

              <div className='flex items-center justify-between'>;
                <div className='space-y-0 && 0.5'>;
                  <Label htmlFor='displayWeb3'>Display Web3 Identity</Label>;
                  <p className='text-xs text-gray-500'>;
                    Show your Web3 handle instead of email;
                  </p>;
                </div>;
                <Switch
                  id='displayWeb3'
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}                />;
              </div>;

              <Separator />;

              <div className='flex items-center justify-between'>;
                <div className='space-y-0 && 0.5'>;
                  <Label htmlFor='backup' className='flex items-center gap-1'>;
                    <Database className='h-4 w-4' />;
                    Decentralized Backup;
                  </Label>;
                  <p className='text-xs text-gray-500'>;
                    Backup your profile data to IPFS/Arweave;
                  </p>;
                </div>;
                <Switch
                  id='backup'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />
              </div>
              
              {enableBackup && (
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
                  Data will be backed up to decentralized storage. This feature is in beta.
                </div>
              )}
;
              <Button;
                onClick={handleSave}
                disabled={isSubmitting}
<<<<<<< HEAD
                className="w-full"
              >
=======
                className='w-full'>;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
id="backup""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />
              </div>

              {enableBackup && (
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">"
                  Data will be backed up to decentralized storage. This feature
                  is in beta.
                </div>
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
              )}
              <Button
                onClick={handleSave}
                disabled={isSubmitting}
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
                className="w-full"
              >
<<<<<<< HEAD
=======
                className="w-full""
                className='w-full'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                {isSubmitting ? 'Saving...' : 'Save Settings'}
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
                {!isSubmitting && <Save className='ml-2 h-4 w-4' />}


          
=======
                {isSubmitting ? "Saving..." : "Save Settings"}
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
                className="w-full"
              >
                {isSubmitting ? "Saving..." : "Save Settings"}

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>
            </CardContent>
          </Card>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
          <Card>
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
            <CardHeader>
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
            <CardHeader>

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
                className="w-full"
              >
{isSubmitting ? "Saving..." : "Save Settings"}"
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}"
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
              <CardTitle>Web3 Features</CardTitle>
              <CardDescription>
                Manage your Web3 connections and features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">"
              <div className="space-y-2">"
                <h3 className="font-medium">Connected Wallet</h3>"
                {didHandle ? (
<div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">"
                    <svg
                      xmlns="http://www.w3.org/2000/svg"",
                      width="20""
                      height="20""
                      viewBox="0 0 24 24""
                      fill="none""
                      stroke="currentColor""
                      strokeWidth="2""
                      strokeLinecap="round""
                      strokeLinejoin="round""
                      className="text-green-500""
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>"
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>"
              {enableBackup && (
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
                  Data will be backed up to decentralized storage. This feature is in beta.
                </div>
              )}
;
              <Button;
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                      className="text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>{didHandle}</span>
                  </div>
                ) : (
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">"
                    <svg
                      xmlns="http://www.w3.org/2000/svg"",
                      width="20""
                      height="20""
                      viewBox="0 0 24 24""
                      fill="none""
                      stroke="currentColor""
                      strokeWidth="2""
                      strokeLinecap="round""
                      strokeLinejoin="round""
                      className="text-red-500""
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>"
                      <line x1="6" y1="6" x2="18" y2="18"></line>"
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                      className="text-red-500"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span>No wallet connected</span>
                  </div>
                )}
              </div>
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD
=======
                  <div className='flex items-center gap-2 bg-gray-100 p-3 rounded-md'>
              </Button>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Web3 Features</CardTitle>;
            <CardContent className='space - y-6'>;
              <div className='space - y-2'>;
                <Label html_for='email'>Email Address</Label>;
                <Input;
                  id='email';
                  value={user?.email || ''}                  disabled;
                  className='bg - gray - 100';
                />;
              </div>;
              <div className='space - y-2'>;
                <Label html_for='did_handle'>Web3 Identity Handle</Label>;
                <div className='flex gap - 2'>;
                  <Input;
                    id='did_handle';
                    value={did_handle}
                    on_change={e => setDidHandle (e.target.value)}
                    placeholder='ENS / Lens / Ceramic / Farcaster';
                  />;
                  <Button;
                    variant='outline';
                    on_click={handleConnectWallet}
                    type='button';
                    className='flex items - center gap - 1'                  >;
                    <Wallet className='h - 4 w - 4' />;
                    Connect;
                  </Button>;
                </div>;
                <p className='text - xs text - gray - 500 mt - 1'>;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;
              <div className='flex items - center justify - between'>;
                <div className='space - y-0.5'>;
                  <Label html_for='displayWeb3'>Display Web3 Identity</Label>;
                  <p className='text - xs text - gray - 500'>;
                    Show your Web3 handle instead of email;
                  </p>;
                </div>;
                <Switch;
                  id='displayWeb3';
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}                />;
              </div>;
              <Separator />;
              <div className='flex items - center justify - between'>;
                <div className='space - y-0.5'>;
                  <Label html_for='backup' className='flex items - center gap - 1'>;
                    <Database className='h - 4 w - 4' />;
                    Decentralized Backup;
                  </Label>;
                  <p className='text - xs text - gray - 500'>;
                    Backup your profile data to IPFS / Arweave;
                  </p>;
                </div>;
                <Switch;
                  id='backup';
                  checked={enable_backup}
                  onCheckedChange={setEnableBackup}                />;
              </div>;
              {enable_backup && (
                <div className='rounded - md bg - amber - 50 p - 3 text - sm text - amber - 800'>;
                  Data will be backed up to decentralized storage. This feature;
                  is in beta.;
                </div>)}
              <Button;
                on_click={handle_save}
                disabled={is_submitting}
                className='w - full'              >;
                {is_submitting ? 'Saving...' : 'Save Settings'}
                {!is_submitting && <Save className='ml - 2 h - 4 w - 4' />}
              </Button>;
            </CardContent>;
          </Card>;
          <Card>;
            <CardHeader>;
              <CardTitle > Web3 Features</CardTitle>;
              <CardDescription>;
                Manage your Web3 connections and features;
              </CardDescription>;
            </CardHeader>;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
              <div>
                <h3 className="font-medium mb-2">Backup Status</h3>"
                <div className="grid grid-cols-2 gap-2">"
                  <div className="bg-gray-100 p-3 rounded-md">"
                    <p className="text-sm font-medium">Profile Data</p>"
                    <p className="text-xs text-gray-500">"
                      {enableBackup ? "Backed up" : "Not backed up"}"
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">"
                    <p className="text-sm font-medium">Resume Data</p>"
                    <p className="text-xs text-gray-500">"
                      {enableBackup ? "Backed up" : "Not backed up"}"
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">"
                    <p className="text-sm font-medium">Project History</p>"
                    <p className="text-xs text-gray-500">"
                      {enableBackup ? "Backed up" : "Not backed up"}"
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">"
                    <p className="text-sm font-medium">Reviews</p>"
                    <p className="text-xs text-gray-500">"
                      {enableBackup ? "Backed up" : "Not backed up"}"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
              <div>
                <h3 className="font-medium mb-2">Backup Status</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Profile Data</p>
                    <p className="text-xs text-gray-500">
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD
                      {enableBackup ? 'Backed up' : 'Not backed up'}
=======
                      {enableBackup ? "Backed up" : "Not backed up"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
                      {enableBackup ? 'Backed up' : 'Not backed up'}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Resume Data</p>
                    <p className="text-xs text-gray-500">
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD
                      {enableBackup ? 'Backed up' : 'Not backed up'}
=======
                      {enableBackup ? "Backed up" : "Not backed up"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
                      {enableBackup ? 'Backed up' : 'Not backed up'}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Project History</p>
                    <p className="text-xs text-gray-500">
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD
                      {enableBackup ? 'Backed up' : 'Not backed up'}
=======
                      {enableBackup ? "Backed up" : "Not backed up"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
                      {enableBackup ? 'Backed up' : 'Not backed up'}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Reviews</p>
                    <p className="text-xs text-gray-500">
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD
                      {enableBackup ? 'Backed up' : 'Not backed up'}
<<<<<<< HEAD
=======
                      {enableBackup ? "Backed up" : "Not backed up"}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
                      {enableBackup ? 'Backed up' : 'Not backed up'}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                    </p>
                  </div>
                </div>
              </div>
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD
              
              <div>
                <h3 className="font-medium mb-2">Recovery Options</h3>
                <Button 
                  variant="outline" 
=======

              <div>
                <h3 className="font-medium mb-2">Recovery Options</h3>
                <Button
                  variant="outline"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
              <div>
                <h3 className="font-medium mb-2">Recovery Options</h3>"
                <Button
                  variant="outline""
                  className="w-full""
              <div>
                <h3 className="font-medium mb-2">Recovery Options</h3>
                <Button 
                  variant="outline" 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                  className="w-full"
                  disabled={!enableBackup}
                >
                  Restore Profile from Backup
                </Button>
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
                <p className="text-xs text-gray-500 mt-1">
<<<<<<< HEAD
                  {enableBackup 
                    ? 'Restore your profile data from decentralized storage' 
=======
                    </p>;
                  </div>;
                  <div className='bg-gray-100 p-3 rounded-md'>;
                    <p className='text-sm font-medium'>Resume Data</p>;
                    <p className='text-xs text-gray-500'>;
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className='bg-gray-100 p-3 rounded-md'>;
                    <p className='text-sm font-medium'>Project History</p>;
                    <p className='text-xs text-gray-500'>;
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className='bg-gray-100 p-3 rounded-md'>;
                    <p className='text-sm font-medium'>Reviews</p>;
                    <p className='text-xs text-gray-500'>;
                      {enableBackup ? 'Backed up' : 'Not backed up'}

            <CardContent className='space - y-6'>;
              <div className='space - y-2'>;
                <h3 className='font - medium'>Connected Wallet</h3>;
                {did_handle ? (
                  <div className='flex items - center gap - 2 bg - gray - 100 p - 3 rounded - md'>;
                    <svg;
                      xmlns='http://www.w3.org / 2000 / svg';
                      width='20';
                      height='20';
                      view_box='0 0 24 24';
                      fill='none';
                      stroke='current_color';
                      stroke_width='2';
                      stroke_linecap='round';
                      stroke_linejoin='round';
                      className='text - green - 500';
                    >;
                      <path d='M22 11.08V12a10 10 0 1 1 - 5.93 - 9.14'></path>;
                      <polyline points='22 4 12 14.01 9 11.01'></polyline>;
                    </svg>;
                    <span>{did_handle}</span>;
                  </div>) : (
                  <div className='flex items - center gap - 2 bg - gray - 100 p - 3 rounded - md'>;
                    <svg;
                      xmlns='http://www.w3.org / 2000 / svg';
                      width='20';
                      height='20';
                      view_box='0 0 24 24';
                      fill='none';
                      stroke='current_color';
                      stroke_width='2';
                      stroke_linecap='round';
                      stroke_linejoin='round';
                      className='text - red - 500';
                    >;
                      <line x1='18' y1='6' x2='6' y2='18'></line>;
                      <line x1='6' y1='6' x2='18' y2='18'></line>;
                    </svg>;
                    <span > No wallet connected</span>;
                  </div>)}
              </div>;
              <div>;
                <h3 className='font - medium mb - 2'>Backup Status</h3>;
                <div className='grid grid - cols - 2 gap - 2'>;
                  <div className='bg - gray - 100 p - 3 rounded - md'>;
                    <p className='text - sm font - medium'>Profile Data</p>;
                    <p className='text - xs text - gray - 500'>;
                      {enable_backup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className='bg - gray - 100 p - 3 rounded - md'>;
                    <p className='text - sm font - medium'>Resume Data</p>;
                    <p className='text - xs text - gray - 500'>;
                      {enable_backup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className='bg - gray - 100 p - 3 rounded - md'>;
                    <p className='text - sm font - medium'>Project History</p>;
                    <p className='text - xs text - gray - 500'>;
                      {enable_backup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                  <div className='bg - gray - 100 p - 3 rounded - md'>;
                    <p className='text - sm font - medium'>Reviews</p>;
                    <p className='text - xs text - gray - 500'>;
                      {enable_backup ? 'Backed up' : 'Not backed up'}

                    </p>;
                  </div>;
                </div>;
              </div>;


    </>;
=======
=======
                <p className="text-xs text-gray-500 mt-1">"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                  {enableBackup
                    ? "Restore your profile data from decentralized storage""
                    : "Enable backup first to use this feature"}"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
};

=======
};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
              <div>;
                <h3 className='font - medium mb - 2'>Recovery Options</h3>;
                <Button;
                  variant='outline';
                  className='w - full';
                  disabled={!enable_backup}                >;
                  Restore Profile from Backup;
                </Button>;
                <p className='text - xs text - gray - 500 mt - 1'>;
                  {enable_backup;
                    ? 'Restore your profile data from decentralized storage';
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
                    : 'Enable backup first to use this feature'}'
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
                  {enableBackup 
                    ? 'Restore your profile data from decentralized storage' 
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
                    : 'Enable backup first to use this feature'}
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  );
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
    </>);
}
;
    </>;
  );
}
;
}
;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx



    </>);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
<<<<<<< HEAD:src_backup/pages/AccountSettings.tsx
<<<<<<< HEAD:src/pages/AccountSettings.tsx
<<<<<<< HEAD
=======
    <MainLayout title="Account Settings - Zion Tech Group" description="Manage your account settings and preferences.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Account Settings</h1>
        <p className="text-lg">This is the Account Settings page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default AccountSettings;
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/pages/AccountSettings.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:src/pages.disabled/AccountSettings.tsx
