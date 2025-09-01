import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wallet, Database, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
export { function };
export default function AccountSettings() {
    const { user } = useAuth();
    const [displayWeb3, setDisplayWeb3] = useState(false);
    const [didHandle, setDidHandle] = useState('');
    const [enableBackup, setEnableBackup] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        try {
            const saved = localStorage.getItem('account_settings');
            if (saved) {
                const parsed = JSON.parse(saved);
                setDisplayWeb3(!!parsed.displayWeb3);
                setDidHandle(parsed.didHandle || '');
                setEnableBackup(!!parsed.enableBackup)}
        }
        catch (e) {
            console.error('Error loading account settings', e)}
    }, []);
    const handleSave = () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            try {
                localStorage.setItem('account_settings', JSON.stringify({ displayWeb3, didHandle, enableBackup }));
                console.log('Saved settings', { displayWeb3, didHandle, enableBackup });
                toast.success('Account settings updated successfully')}
            catch (e) {
                console.error('Failed to save settings', e);
                toast.error('Failed to save settings')}
            finally {
                setIsSubmitting(false)}
        }, 1000)};
    const handleConnectWallet = async () => {
        try {
            // Check if wallet is available
            const ethereum = window.ethereum;
            if (!ethereum) {
                toast.error('No wallet detected. Please install MetaMask or another compatible wallet.');
                return}
            // Request accounts
            const address = accounts[0];
            // Sign message to verify ownership
            const message = `Zion AI Marketplace wallet verification\nAddress: ${address}\nTime: ${new Date().toISOString()}`;
            await ethereum.request({
                method: 'personal_sign',
                params[address, message];
            });
            // Auto-set DID handle if ENS is available
            try {
                const provider = new window.ethers.providers.Web3Provider(ethereum);
                const ensName = await provider.lookupAddress(address);
                if (ensName) {
                    setDidHandle(ensName)}
            }
            catch (error) {
                console.error('ENS lookup error:', error)}
            toast.success(`Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`)}
        catch (error) {
            toast.error(error.message || 'Failed to connect wallet')}
    };
    return (<>
      <SEO title="Account Settings" description="Manage your account"/>
      
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
                <Input id="email" value={user?.email || ''} disabled className="bg-gray-100"/>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="didHandle">Web3 Identity Handle</Label>
                <div className="flex gap-2">
                  <Input id="didHandle" value={didHandle} onChange={(e) => setDidHandle(e.target.value)} placeholder="ENS / Lens / Ceramic / Farcaster"/>
                  <Button variant="outline" onClick={handleConnectWallet} type="button" className="flex items-center gap-1">
                    <Wallet connected</span>
                  </div>)}
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
                <Button variant="outline" className="w-full" disabled={!enableBackup}>
                  Restore Profile from Backup
                </Button>
                <p className="text-xs text-gray-500 mt-1">
                  {enableBackup
            ? 'Restore your profile data from decentralized storage'
            : 'Enable backup first to use this feature'}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
    </>)}
