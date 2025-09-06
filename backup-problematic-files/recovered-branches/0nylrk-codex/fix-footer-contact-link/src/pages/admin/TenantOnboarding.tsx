
      // Submit to Supabase;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .insert({;

      />;
      <Header />;
      <main className="flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">;
        <div className="flex flex-col space-y-6">;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">Tenant Onboarding</h1>;
            <p className="text-muted-foreground mt-2">;
              Create a new white-label instance of Zion Hire AI for a company.;
            </p>;
          </div>;

          <Card>;
            <CardHeader>;
              <CardTitle>New Tenant Setup</CardTitle>;
              <CardDescription>;
                Configure the branding and details for the new white-label tenant.;
              </CardDescription>;
            </CardHeader>;
            <CardContent>;
              <form onSubmit={handleSubmit} className="space-y-6">;
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
                  <TabsList className="mb-4 grid grid-cols-3 w-full">;

                    <TabsTrigger value="company">Company Info</TabsTrigger>;
                    <TabsTrigger value="branding">Branding</TabsTrigger>;
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>;
                  </TabsList>;

                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select industry" />;
                        </SelectTrigger>;
                        <SelectContent>;
                          <SelectItem value="technology">Technology</SelectItem>;
                          <SelectItem value="healthcare">Healthcare</SelectItem>;
                          <SelectItem value="finance">Finance</SelectItem>;
                          <SelectItem value="education">Education</SelectItem>;
                          <SelectItem value="retail">Retail</SelectItem>;
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>;
                          <SelectItem value="services">Professional Services</SelectItem>;
                          <SelectItem value="other">Other</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;

                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select company size" />;
                        </SelectTrigger>;
                        <SelectContent>;

                          <SelectItem value="1000+">1000+ employees</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;
                  </TabsContent>;

                      />;
                      <p className="text-xs text-muted-foreground">;
                        Enter a direct URL to your logo image (SVG or PNG with transparent background recommended);
                      </p>;
                    </div>;

                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select theme" />;
                        </SelectTrigger>;
                        <SelectContent>;
                          <SelectItem value="light">Light</SelectItem>;
                          <SelectItem value="dark">Dark</SelectItem>;
                          <SelectItem value="corporate">Corporate</SelectItem>;
                          <SelectItem value="startup">Startup</SelectItem>;
                          <SelectItem value="neon">Neon</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;

                  <TabsContent value="domain" className="space-y-4">;
                    <div className="space-y-2">;
                      <Label htmlFor="subdomain">Subdomain</Label>;
                      <div className="flex items-center">;

                        </div>;
                      </div>;
                      <p className="text-xs text-muted-foreground">;
                        Leave blank to auto-generate from company name;
                      </p>;
                    </div>;

                        If you want to use your own domain, enter it here. You'll need to configure DNS records.;
                      </p>;
                    </div>;
                  </TabsContent>;
                </Tabs>;

                  </Button>;
                </div>;
              </form>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;

}