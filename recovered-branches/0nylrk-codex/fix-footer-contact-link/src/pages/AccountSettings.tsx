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

import { useState, useEffect  } from 'react';
import { Header  } from '@/components/Header';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
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
  const [displayWeb3, setDisplayWeb3] = useState(false);
  const [didHandle, setDidHandle] = useState('');'
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
        setEnableBackup(!!parsed.enableBackup);    } catch (e) {;
      console && console.error('Error loading account settings', e);
    }
  const handleSave = () => {
    setIsSubmitting(true);
  const handleSave = () => {
    setIsSubmitting(true),
          'account_settings';
          JSON && JSON.stringify({ displayWeb3, didHandle, enableBackup });
        );
        console && console.log('Saved settings', { displayWeb3, didHandle, enableBackup });'
      const ethereum = (window as any).ethereum;
      if (!ethereum) {;'
        toast && toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');
        return;
      }
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
                <Label htmlFor="email">Email Address</Label>;                    <Wallet className="h-4 w-4" />;
                    Connect;
                  </Button>;
                </div>;"
                <p className="text-xs text-gray-500 mt-1">;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;

              <div className="flex items-center justify-between">;
                <div className="space-y-0 && 0.5">;
                  <Label htmlFor="displayWeb3">Display Web3 Identity</Label>;
                  <p className="text-xs text-gray-500">Show your Web3 handle instead of email</p>;
                </div>;
                <Switch
                  id="displayWeb3"
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;

    </>);
}
