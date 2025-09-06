
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


      }
    } catch (e) {;
      console && console.error('Error loading account settings', e);
    }
  const handleSave = () => {
    setIsSubmitting(true);
  }, []),
  }, []),

  const handleSave = () => {
    setIsSubmitting(true),

    // Simulate API call
    setTimeout(() => {
      try {
        localStorage.setItem(
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
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;
        toast && toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');
        return;
      }
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
  }
  },
  };
  },


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
                <Input
                  id="email"
                  value={user?.email |''}
                  disabled
                  className="bg-gray-100"
                <Switch
                  id="displayWeb3"
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
                <Switch
                  id="backup"
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
              <Button
                onClick={handleSave}
                disabled={isSubmitting}
                className="w-full">;
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;
