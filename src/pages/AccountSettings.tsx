import { useState  } from 'react';
import { useLocalStorage  } from '@/hooks';
import { Header  } from '@/components/Header';
import { SEO  } from '@/components/SEO';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { Input  } from '@/components/ui/input';
import { useState } from 'react'
import { useLocalStorage } from '@/hooks'
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-2">


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

              <CardDescription>;
                Manage your personal information and privacy;
              </CardDescription>;
            </CardHeader>;

                />;
              </div>;

              <div className='space-y-2'>;
                <Label htmlFor='didHandle'>Web3 Identity Handle</Label>;
                <div className='flex gap-2'>;


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


              <div className='flex items-center justify-between'>
                <div className='space-y-0.5'>
                  <Label htmlFor='backup' className='flex items-center gap-1'>
                    <Database className='h-4 w-4' />
                className='w-full'>;

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
;
              <Button;
                onClick={handleSave}
                disabled={isSubmitting}
                className="w-full"
              >

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


              


                    : 'Enable backup first to use this feature'}
    </>;
  );
}
;
