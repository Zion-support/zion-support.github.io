


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
==============

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



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


  useEffect(() => {;
    try {;
      const saved = localStorage && localStorage.getItem('account_settings');
      if (saved) {;
        const parsed = JSON && JSON.parse(saved);
        setDisplayWeb3(!!parsed && parsed.displayWeb3);
        setDidHandle(parsed && parsed.didHandle || '');
        setEnableBackup(!!parsed && parsed.enableBackup);

=======import { useState, useEffect } from 'react',
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
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    } catch (e) {;
      console && console.error('Error loading account settings', e);
    }


=======
  }, []),
=======
=======
  }, []),


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  const handleSave = () => {
    setIsSubmitting(true),

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

==============


=======          'account_settings',
          JSON.stringify({ displayWeb3, didHandle, enableBackup })
        ),
        // // // console.log('Saved settings', { displayWeb3, didHandle, enableBackup }),
        toast.success('Account settings updated successfully')
      } catch (e) {
        console.error('Failed to save settings', e),
        toast.error('Failed to save settings')
      } finally {
        setIsSubmitting(false)
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  }, []),;
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

                />;
              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
