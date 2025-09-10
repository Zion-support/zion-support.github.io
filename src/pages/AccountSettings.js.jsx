import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Wallet, Database, Save } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

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
        setEnableBackup(!!parsed.enableBackup);
      }
    } catch (e) {
      console.error('Error loading account settings', e);
    }
  }, []);

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      const settings = {
        displayWeb3,
        didHandle,
        enableBackup
      };
      
      localStorage.setItem('account_settings', JSON.stringify(settings));
      toast.success('Settings saved successfully!');
    } catch (error) {
      toast.error('Failed to save settings');
      console.error('Error saving settings:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Account Settings - Zion Tech Group"
        description="Manage your account settings and preferences"
        keywords="account settings, user preferences, profile management"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Account Settings
              </h1>
              <p className="text-muted-foreground">
                Manage your account preferences and settings
              </p>
            </div>

            <div className="space-y-6">
              {/* Profile Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user?.email || ''}
                        disabled
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="name">Display Name</Label>
                      <Input
                        id="name"
                        value={user?.name || ''}
                        disabled
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Web3 Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wallet className="h-5 w-5 mr-2" />
                    Web3 Settings
                  </CardTitle>
                  <CardDescription>
                    Configure your Web3 and blockchain preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Display Web3 Features</Label>
                      <p className="text-sm text-muted-foreground">
                        Show Web3 and blockchain-related features in the interface
                      </p>
                    </div>
                    <Switch
                      checked={displayWeb3}
                      onCheckedChange={setDisplayWeb3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="didHandle">DID Handle</Label>
                    <Input
                      id="didHandle"
                      placeholder="Enter your DID handle"
                      value={didHandle}
                      onChange={(e) => setDidHandle(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Data & Privacy */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Data & Privacy
                  </CardTitle>
                  <CardDescription>
                    Manage your data backup and privacy settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Enable Data Backup</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically backup your data to secure cloud storage
                      </p>
                    </div>
                    <Switch
                      checked={enableBackup}
                      onCheckedChange={setEnableBackup}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex justify-end">
                <Button
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className="flex items-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isSubmitting ? 'Saving...' : 'Save Settings'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}