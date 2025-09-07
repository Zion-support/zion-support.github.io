  const [formData, setFormData] = useState({

    brand_name: ""","
  subdomain: """"
    logo_url: ""","
  primary_color: "#9b87f5"""
    theme_preset: "light"","
  company_size: """"
    industry: ""","
  custom_domain: """
    is_co_branded: true;
class ErrorBoundary extends React.Component {
  // TODO: Implement
})
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {"
    console.error('Error caught by boundary:', error, errorInfo);'
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;'
    return <Navigate to="/unauthorized" />;"
</Navigate>
  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
</HTMLInputElement>"
    return <Navigate to="/unauthorized" />"
</Navigate>
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
</HTMLInputElement>
    <>;
      <SEO;"
        title="Tenant Onboarding - Zion AI Marketplace"""
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform.""
      />;
</SEO>
      <Header />;
</Header>"
      <main className="flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">;"
</main>"
        <div className="flex flex-col space-y-6">;"
</div>
          <div>;
</div>"
            <h1 className="text-3xl font-bold tracking-tight">Tenant Onboarding</h1>;""
            <p className="text-muted-foreground mt-2">;"
</p>
            </p>;
          </div>;
          <Card>;
</Card>
            <CardHeader>;
</CardHeader>
              <CardTitle>New Tenant Setup</CardTitle>;
              <CardDescription>;
</CardDescription>
              </CardDescription>;
            </CardHeader>;
            <CardContent>;
</CardContent>"
              <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
</Tabs>"
                  <TabsList className="mb-4 grid grid-cols-3 w-full">;"
</TabsList>"
                    <TabsTrigger value="company">Company Info</TabsTrigger>;""
                    <TabsTrigger value="branding">Branding</TabsTrigger>;""
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>;"
                  </TabsList>;
                    </div>;"
                    <div className="space-y-2">;"
</div>"
                      <Label htmlFor="industry">Industry</Label>;"
                      <Select;"
                        name="industry""
                        value={formData && formData.industry} "
                        onValueChange={(value) => handleSelectChange("industry", value)}"
</Select>
                    </div>;"
                    <div className="space - y-2">;"
</div>"
                      <Label html_for="industry">Industry</Label>;"
                      <Select;"
                        name="industry";"
                        value={form_data.industry}"
                        onValueChange={(value) => handleSelectChange ("industry", value)}"
</Select>
                        <SelectTrigger>;
</SelectTrigger>"
                          <SelectValue placeholder="Select industry" />;"
</SelectValue>
                        </SelectTrigger>;
                        <SelectContent>;
</SelectContent>"
                          <SelectItem value="technology">Technology</SelectItem>;""
                          <SelectItem value="healthcare">Healthcare</SelectItem>;""
                          <SelectItem value="finance">Finance</SelectItem>;""
                          <SelectItem value="education">Education</SelectItem>;""
                          <SelectItem value="retail">Retail</SelectItem>;""
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>;""
                          <SelectItem value="services">Professional Services</SelectItem>;""
                          <SelectItem value="other">Other</SelectItem>;"
                        </SelectContent>;
                      </Select>;
                    </div>;"
                    <div className="space - y-2">;"
</div>"
                      <Label html_for="company_size">Company Size</Label>;"
                      <Select;"
                        name="company_size";"
                        value={form_data.company_size}"
                        onValueChange={(value) => handleSelectChange ("company_size", value)}"
</Select>
                        <SelectTrigger>;
</SelectTrigger>"
                          <SelectValue placeholder="Select company size" />;"
</SelectValue>
                        </SelectTrigger>;
                        <SelectContent>;
</SelectContent>
"
                          <SelectItem value="1 - 10">1 - 10 employees</SelectItem>;""
                          <SelectItem value="11 - 50">11 - 50 employees</SelectItem>;""
                          <SelectItem value="51 - 200">51 - 200 employees</SelectItem>;""
                          <SelectItem value="201 - 500">201 - 500 employees</SelectItem>;""
                          <SelectItem value="501 - 1000">501 - 1000 employees</SelectItem>;""
                          <SelectItem value="1000+">1000+ employees</SelectItem>;"
                        </SelectContent>;
                      </Select>;
                    </div>;
                  </TabsContent>;"
                      <p className="text-xs text-muted-foreground">;"
</p>
                      </p>;
                    </div>;"
                    <div className="space-y-2">;"
</div>"
                      <Label htmlFor="primary_color">Primary Brand Color</Label>;""
                      <div className="flex items-center gap-2">;"
</div>
                        <Input;"
                          id="primary_color"""
                          name="primary_color"""
                          type="color""
                          value={formData && formData.primary_color}
                          onChange={handleInputChange}"
                          className="w-12 p-1 h-10""
                        />;
</Input>
                        <Input;"
                          name="primary_color""
                          value={formData && formData.primary_color}
                          onChange={handleInputChange}"
                          placeholder="#9b87f5""
                        />;
</Input>
                      </div>;
                    </div>;"
                    <div className="space-y-2">;"
</div>"
                      <Label htmlFor="theme_preset">Theme Preset</Label>;"
                      <Select;"
                        name="theme_preset""
                        value={formData && formData.theme_preset} "
                        onValueChange={(value) => handleSelectChange("theme_preset", value)}"
</Select>"
    return <Navigate to="/unauthorized" />;"
</Navigate>
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
</HTMLInputElement>
    <>;
      <SEO;"
        title="Tenant Onboarding - Zion AI Marketplace";""
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform.";"
      />;
</SEO>
      <Header />;
</Header>"
      <main className="flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">;"
</main>"
        <div className="flex flex-col space-y-6">;"
</div>
          <div>;
</div>"
            <h1 className="text-3xl font-bold tracking-tight">Tenant Onboarding</h1>;""
            <p className="text-muted-foreground mt-2">;"
</p>
            </p>;
          </div>;
          <Card>;
</Card>
            <CardHeader>;
</CardHeader>
              <CardTitle>New Tenant Setup</CardTitle>;
              <CardDescription>;
</CardDescription>
              </CardDescription>;
            </CardHeader>;
            <CardContent>;
</CardContent>"
              <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
</Tabs>"
                  <TabsList className="mb-4 grid grid-cols-3 w-full">;"
</TabsList>"
                    <TabsTrigger value="company">Company Info</TabsTrigger>;""
                    <TabsTrigger value="branding">Branding</TabsTrigger>;""
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>;"
                  </TabsList>;"
                  <TabsContent value="company" className="space-y-4">;"
</TabsContent>"
                    <div className="space-y-2">;"
</div>"
                      <Label htmlFor="brand_name">Company Name</Label>;"
                      <Input;"
                        id="brand_name"""
                        name="brand_name""
                        value={formData && formData.brand_name}
                        onChange={handleInputChange}"
                        placeholder="Acme Corporation""
                        required;
                      />
</Input>
                    </div>"
                    <div className="space-y-2">"
</div>"
                      <Label htmlFor="industry">Industry</Label>"
                      <Select;"
                        name="industry""
                        value={formData.industry}"
                        onValueChange={(value) => handleSelectChange("industry", value)}"
</Select>
                        <SelectTrigger>
</SelectTrigger>"
                          <SelectValue placeholder="Select industry" />"
</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
</SelectContent>"
                          <SelectItem value="technology">Technology</SelectItem>""
                          <SelectItem value="healthcare">Healthcare</SelectItem>""
                          <SelectItem value="finance">Finance</SelectItem>""
                          <SelectItem value="education">Education</SelectItem>""
                          <SelectItem value="retail">Retail</SelectItem>""
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>""
                          <SelectItem value="services">Professional Services</SelectItem>""
                          <SelectItem value="other">Other</SelectItem>"
                        </SelectContent>
                      </Select>
                    </div>"
                    <div className="space-y-2">"
</div>"
                      <Label htmlFor="company_size">Company Size</Label>"
                      <Select;"
                        name="company_size""
                        value={formData.company_size}"
                        onValueChange={(value) => handleSelectChange("company_size", value)}"
</Select>
                        <SelectTrigger>
</SelectTrigger>"
                          <SelectValue placeholder="Select company size" />"
</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
</SelectContent>"
                          <SelectItem value="1-10">1-10 employees</SelectItem>""
                          <SelectItem value="11-50">11-50 employees</SelectItem>""
                          <SelectItem value="51-200">51-200 employees</SelectItem>""
                          <SelectItem value="201-500">201-500 employees</SelectItem>""
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>""
                          <SelectItem value="1000+">1000+ employees</SelectItem>"
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>"
                  <TabsContent value="branding" className="space-y-4">"
</TabsContent>"
                    <div className="space-y-2">"
</div>"
                      <Label htmlFor="logo_url">Logo URL</Label>"
                        <SelectTrigger>;
</SelectTrigger>"
                          <SelectValue placeholder="Select industry" />;"
</SelectValue>
                        </SelectTrigger>;
                        <SelectContent>;
</SelectContent>"
                          <SelectItem value="technology">Technology</SelectItem>;""
                          <SelectItem value="healthcare">Healthcare</SelectItem>;""
                          <SelectItem value="finance">Finance</SelectItem>;""
                          <SelectItem value="education">Education</SelectItem>;""
                          <SelectItem value="retail">Retail</SelectItem>;""
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>;""
                          <SelectItem value="services">Professional Services</SelectItem>;""
                          <SelectItem value="other">Other</SelectItem>;"
                        </SelectContent>;
                      </Select>;
                    </div>;"
                    <div className="space-y-2">;"
</div>"
                      <Label htmlFor="company_size">Company Size</Label>;"
                      <Select;"
                        name="company_size""
                        value={formData && formData.company_size} "
                        onValueChange={(value) => handleSelectChange("company_size", value)}"
</Select>
                        <SelectTrigger>;
</SelectTrigger>"
                          <SelectValue placeholder="Select company size" />;"
</SelectValue>
                        </SelectTrigger>;
                        <SelectContent>;
</SelectContent>"
                          <SelectItem value="1-10">1-10 employees</SelectItem>;""
                          <SelectItem value="11-50">11-50 employees</SelectItem>;""
                          <SelectItem value="51-200">51-200 employees</SelectItem>;""
                          <SelectItem value="201-500">201-500 employees</SelectItem>;""
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>;""
                          <SelectItem value="1000+">1000+ employees</SelectItem>;"
                        </SelectContent>;
                      </Select>;
                    </div>;
                  </TabsContent>;"
                  <TabsContent value="branding" className="space-y-4">;"
</TabsContent>"
                    <div className="space-y-2">;"
</div>"
                      <Label htmlFor="logo_url">Logo URL</Label>;"
                      <Input;"
                        id="logo_url"""
                        name="logo_url""
                        value={formData && formData.logo_url}
                        onChange={handleInputChange}"
                        placeholder="https://example.com/logo.png";"
                      />;
</Input>"
                      <p className="text-xs text-muted-foreground">;"
</p>
                        </p>;
                      </div>;
                      <Switch;"
                        id="is_co_branded";"
                        checked={form_data.is_co_branded}"
                        onCheckedChange={(checked) => handleSwitchChange ("is_co_branded", checked)}"
</Switch>
                    </div>;
                  </TabsContent>;"
                  <TabsContent value="domain" className="space - y-4">;"
</TabsContent>"
                    <div className="space - y-2">;"
</div>"
                      <Label html_for="subdomain">Subdomain</Label>;""
                      <div className="flex items - center">;"
</div>
                        <Input;"
                          id="subdomain";""
                          name="subdomain";"
                          value={form_data.subdomain}
                          on_change={handleInputChange}"
                          placeholder={form_data.brand_name ? form_data.brand_name.toLowerCase ().replace (/[^a - z0 - 9]/g, '') : "company"}""
                          className="rounded - r-none";"
                        />;
</Input>"
                        <div className="bg - muted px - 3 py - 2 border border - l-0 border - input rounded - r-md text - muted - foreground">;"
</div>
                        </div>;
                      </div>;"
                      <p className="text - xs text - muted - foreground">;"
</p>
                      </p>;
                    </div>;"
                    <div className="space - y-2">;"
</div>"
                      <Label html_for="custom_domain">Custom Domain (Optional)</Label>;"
                      <Input;"
                        id="custom_domain";""
                        name="custom_domain";"
                        value={form_data.custom_domain}
                        on_change={handleInputChange}"
                        placeholder="hire.yourcompany.com";"
                      />;
</Input>"
                      <p className="text - xs text - muted - foreground">;"
</p>
                    </div>;
                  </TabsContent>;"
                  <TabsContent value="domain" className="space-y-4">;"
</TabsContent>"
                    <div className="space-y-2">;"
</div>"
                      <Label htmlFor="subdomain">Subdomain</Label>;""
                      <div className="flex items-center">;"
</div>
                        <Input;"
                          id="subdomain";""
                          name="subdomain";"
                          value={formData.subdomain}
                          onChange={handleInputChange}"
                          placeholder={formData.brand_name ? formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '') : "company"}""
                          className="rounded-r-none";"
                        />;
</Input>"
                        <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground">;"
</div>
                        </div>;
                      </div>;"
                      <p className="text-xs text-muted-foreground">;"
</p>
                      </p>;
                    </div>;"
                    <div className="space-y-2">;"
</div>"
                      <Label htmlFor="custom_domain">Custom Domain (Optional)</Label>;"
                      <Input;"
                        id="custom_domain";""
                        name="custom_domain";"
                        value={formData.custom_domain}
                        onChange={handleInputChange}"
                        placeholder="hire.yourcompany.com";"
                      />;
</Input>"
                      <p className="text-xs text-muted-foreground">;"
</p>
                      </p>;
                    </div>;
                  </TabsContent>;
                </Tabs>;"
                <div className="flex justify - end space - x-2">;"
</div>"
                  <Button type="button" variant="outline" on_click={() => window.history.back ()}>;"
</Button>
                  </Button>;"
                  <Button type="submit" disabled={is_submitting}>;"
</Button>
                  </Button>;
                </div>;
              </form>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;
</Footer>
    </>);
}
}
    </>);
    </>;
  ),; const [formData, setFormData] = useState ({"
  brand name: "";","
  subdomain: "";""
logo url: "";""
primary color: " #9b87f5";""
theme preset: " light";""
company size: "";","
  industry: "";""
custom domain: "";"
is co branded: true;)
});
//Check if user has admin role;
}const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
</HTMLInputElement>"
Tenant Onboarding - Zion AI Marketplace" description="Onboard a new white-label tenant to the Zion AI Marketplace platform." /> <Header /> <main className="flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8" > <div className="flex flex-col space-y-6" > <div> <h1 className="text-3xl font-bold tracking-tight" >Tenant Onboarding</h1> <p className="text-muted-foreground mt-2" > Create a new white-label instance of Zion Hire AI for a company. </p> </div> <Card> <CardHeader> <CardTitle>New Tenant Setup</CardTitle> <CardDescription> Configure the branding and details for the new white-label tenant. </CardDescription> </CardHeader> <CardContent> </TabsList> <TabsContent value="company" className="space-y-4" > <div className="space-y-2" > <Label htmlFor="brand name" >Company Name</Label> <Input required /> </div> <div className="space-y-2" > <Label htmlFor="industry" >Industry</Label> <Select > <SelectTrigger> <SelectValue placeholder="Select industry" /> </SelectTrigger> <SelectContent> <SelectItem value="technology" >Technology</SelectItem> <SelectItem value="healthcare" >Healthcare</SelectItem> <SelectItem value="finance" >Finance</SelectItem> <SelectItem value="education" >Education</SelectItem> <SelectItem value="retail" >Retail</SelectItem> <SelectItem value="manufacturing" >Manufacturing</SelectItem> <SelectItem value="services" >Professional Services</SelectItem> <SelectItem value="other" >Other</SelectItem> </SelectContent> </Select> </div> <div className="space-y-2" > <Label htmlFor="company size" >Company Size</Label> <Select > <SelectTrigger> <SelectValue placeholder="Select company size" /> </SelectTrigger> <SelectContent> <SelectItem value="1-10" >1-10 employees</SelectItem> <SelectItem value="11-50" >11-50 employees</SelectItem> <SelectItem value="51-200" >51-200 employees</SelectItem> <SelectItem value="201-500" >201-500 employees</SelectItem> <SelectItem value="501-1000" >501-1000 employees</SelectItem> <SelectItem value="1000+" >1000+ employees</SelectItem> </SelectContent> </Select> </div> </TabsContent> </p> </div> <div className="space-y-2" > <Label htmlFor="primary color" >Primary Brand Color</Label> <div className="flex items-center gap-2" > <Input /> </div> </div> <div className="space-y-2" > <Label htmlFor="theme preset" >Theme Preset</Label> <Select > <SelectTrigger> <SelectValue placeholder="Select theme" /> </SelectTrigger> <SelectContent> <SelectItem value="light" >Light</SelectItem> <SelectItem value="dark" >Dark</SelectItem> <SelectItem value="corporate" >Corporate</SelectItem> <SelectItem value="startup" >Startup</SelectItem> <SelectItem value="neon" >Neon</SelectItem> </SelectContent> </Select> </div> <div className="flex items-center justify-between" > <div className="space-y-0.5" > <Label htmlFor="is co branded" >Co-branding</Label> <p className="text-xs text-muted-foreground" > Show "Powered by Zion AI" in the footer and elsewhere </p> </div> <Switch /> </div> </TabsContent> <TabsContent value="domain" className="space-y-4" > <div className="space-y-2" > <Label htmlFor="subdomain" >Subdomain</Label> <div className="flex items-center" > <Input /> <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground" > .ziontechmarketplace.com </div> </div> <p className="text-xs text-muted-foreground" > Leave blank to auto-generate from company name </p> </div> <div className="space-y-2" > <Label htmlFor="custom domain" >Custom Domain (Optional) </Label> <Input /> <p className="text-xs text-muted-foreground" > If you want to use your own domain, enter it here. You'll need to configure DNS records. </p> </div> </TabsContent> </Tabs> </Button> </div> </form> </CardContent> </Card> </div> </main> <Footer /> </>)'
</Header>
    </>;
  );
}
;
}
;
    </>);
}
'