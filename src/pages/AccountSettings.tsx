    }
  },

  return (

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-white">Account Settings</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your personal information and privacy</CardDescription>
            </CardHeader>

          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your personal information and privacy</CardDescription>
            </CardHeader>

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
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Link your decentralized identity to display on your profile
                </p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='space-y-0.5'>
                  <Label htmlFor='displayWeb3'>Display Web3 Identity</Label>
                  <p className='text-xs text-gray-500'>
                    Show your Web3 handle instead of email
                  </p>
                </div>
                <Switch
                  id='displayWeb3'
                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}                />
              </div>
              <Separator />
              <div className='flex items-center justify-between'>
                <div className='space-y-0.5'>
                  <Label htmlFor='backup' className='flex items-center gap-1'>
                    <Database className='h-4 w-4' />

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
                <Switch

                  id='backup'
                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}                />;
              </div>;

              {enableBackup && (;
                <div className='rounded-md bg-amber-50 p-3 text-sm text-amber-800'>;
                  Data will be backed up to decentralized storage. This feature;
                  is in beta.;
                </div>;

              )}
              <Button
                onClick={handleSave}
                disabled={isSubmitting}
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
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>
            </CardContent>
          </Card>
ursor/expand-services-advertise-and-build-project-4b36
                {isSubmitting ? 'Saving...' : 'Save Settings'}
                {!isSubmitting && <Save className='ml-2 h-4 w-4' />}

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
  );
};

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

                    : 'Enable backup first to use this feature'}
                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;

    </>);
}

