
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

                    <Wallet className="h-4 w-4" />;
                    Connect;
                  </Button>;
                </div>;
                <p className="text-xs text-gray-500 mt-1">;
                  Link your decentralized identity to display on your profile;
                </p>;
              </div>;

                  checked={displayWeb3}
                  onCheckedChange={setDisplayWeb3}
                />;
              </div>;

                  <Label htmlFor="backup" className="flex items-center gap-1">;
                    <Database className="h-4 w-4" />;
                    Decentralized Backup;
                  </Label>;
                  <p className="text-xs text-gray-500">;
                    Backup your profile data to IPFS/Arweave;
                  </p>;
                </div>;

                  checked={enableBackup}
                  onCheckedChange={setEnableBackup}
                />;
              </div>;

              {enableBackup && (;
                <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">;
                  Data will be backed up to decentralized storage. This feature is in beta.;
                </div>;
              )}
              ;
              <Button ;
                onClick={handleSave}
                disabled={isSubmitting}

                {!isSubmitting && <Save className="ml-2 h-4 w-4" />}
              </Button>;
            </CardContent>;
          </Card>;

          <Card>;
            <CardHeader>;
              <CardTitle>Web3 Features</CardTitle>;
              <CardDescription>Manage your Web3 connections and features</CardDescription>;
            </CardHeader>;
            <CardContent className="space-y-6">;
              <div className="space-y-2">;
                <h3 className="font-medium">Connected Wallet</h3>;
                {didHandle ? (;
                  <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-md">;

                      <line x1="18" y1="6" x2="6" y2="18"></line>;
                      <line x1="6" y1="6" x2="18" y2="18"></line>;
                    </svg>;
                    <span>No wallet connected</span>;
                  </div>;
                )}
              </div>;

              <div>;
                <h3 className="font-medium mb-2">Backup Status</h3>;
                <div className="grid grid-cols-2 gap-2">;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Profile Data</p>;
                    <p className="text-xs text-gray-500">;

                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Resume Data</p>;
                    <p className="text-xs text-gray-500">;

                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Project History</p>;
                    <p className="text-xs text-gray-500">;

                    </p>;
                  </div>;
                  <div className="bg-gray-100 p-3 rounded-md">;
                    <p className="text-sm font-medium">Reviews</p>;
                    <p className="text-xs text-gray-500">;

                    </p>;
                  </div>;
                </div>;
              </div>;

                  Restore Profile from Backup;
                </Button>;
                <p className="text-xs text-gray-500 mt-1">;
                  {enableBackup ;
                    ? 'Restore your profile data from decentralized storage' ;

                </p>;
              </div>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;

}