





  return (
    <>
      <SEO title='Account Settings' description='Manage your account' />
      <Header />
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your personal information and privacy</CardDescription>
            </CardHeader>
              <CardDescription>;
                Manage your personal information and privacy;
              </CardDescription>;
            </CardHeader>;
                  <Input
                    id='didHandle'
                    value={didHandle}
                    onChange={e => setDidHandle(e && e.target.value)}
                    placeholder='ENS / Lens / Ceramic / Farcaster';
                  />;
                  <Button
                    variant='outline'
                    onClick={handleConnectWallet}
                    type='button'
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
                    Connect
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Link your decentralized identity to display on your profile
                </p>
              </div>
                </div>
                <Switch
                  id='displayWeb3'
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}                />
              </div>
              <Separator />
                    Decentralized Backup
                  </Label>
                  <p className="text-xs text-gray-500">
                    Backup your profile data to IPFS/Arweave
                  </p>
                </div>
                <Switch
              )}
              <Button
                onClick={handleSave}
                disabled={isSubmitting}
                className='w-full'>;
          <Card>
              <CardTitle>Web3 Features</CardTitle>
              <CardDescription>Manage your Web3 connections and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium">Connected Wallet</h3>
                {didHandle ? (
                  <div className='flex items-center gap-2 bg-gray-100 p-3 rounded-md'>
              <CardDescription>;
                Manage your Web3 connections and features;
              </CardDescription>;
            </CardHeader>;
              <div>
                <h3 className="font-medium mb-2">Backup Status</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-3 rounded-md">
                    <p className="text-sm font-medium">Profile Data</p>
                    <p className="text-xs text-gray-500">
                      {enableBackup ? 'Backed up' : 'Not backed up'}
                    </p>;
                  </div>;
                    : 'Enable backup first to use this feature'}
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
