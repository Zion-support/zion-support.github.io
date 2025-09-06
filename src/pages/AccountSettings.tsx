
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    } catch (error: any) {
      toast.error(error.message |'Failed to connect wallet')
    }
  }
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
=======
    } catch (error: any) {
      toast.error (error.message || 'Failed to connect wallet');
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
    }
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5




>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return (
    <>
      <SEO title="Account Settings" description="Manage your account" />
      <Header />

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your personal information and privacy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                    Connect
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Link your decentralized identity to display on your profile
                </p>
              </div>
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>
            </CardContent>
          </Card>
=======
          


          <Card>
            <CardHeader>
              <CardTitle>Web3 Features</CardTitle>
              <CardDescription>Manage your Web3 connections and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Connected Wallet</h3>
                {didHandle ? (
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


              

>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168

              <div>
                <h3 className='font-medium mb-2'>Backup Status</h3>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='bg-gray-100 p-3 rounded-md'>
                    <p className='text-sm font-medium'>Profile Data</p>
                    <p className='text-xs text-gray-500'>
              </div>;

              <div>;
                <h3 className='font-medium mb-2'>Backup Status</h3>;
                <div className='grid grid-cols-2 gap-2'>;
                  <div className='bg-gray-100 p-3 rounded-md'>;
                    <p className='text-sm font-medium'>Profile Data</p>;
                    <p className='text-xs text-gray-500'>;
                      {enableBackup ? 'Backed up' : 'Not backed up'}
<<<<<<< HEAD
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
                    : 'Enable backup first to use this feature'}
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
<<<<<<< HEAD
<<<<<<< HEAD



    </>);
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
