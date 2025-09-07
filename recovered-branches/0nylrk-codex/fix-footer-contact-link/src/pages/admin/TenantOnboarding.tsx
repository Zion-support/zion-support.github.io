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
  
  componentDidCatch(error, errorInfo) {"
    console.error('Error caught by boundary:', error, errorInfo);
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    return <Navigate to="/unauthorized" />;"

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
"
    return <Navigate to="/unauthorized" />"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    <>;
      <SEO;"
        title="Tenant Onboarding - Zion AI Marketplace"""
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform.""
      />;

      <Header />;
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

            <CardHeader>;

              <CardTitle>New Tenant Setup;
              <CardDescription>;

              ;
            <CardContent>;
              <form onSubmit={handleSubmit} className="space-y-6">;"
</form>"
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
                  <TabsList className="mb-4 grid grid-cols-3 w-full">;"
                    <TabsTrigger value="company">Company Info;""
                    <TabsTrigger value="branding">Branding;""
                    <TabsTrigger value="domain">Domain Setup;"
                    </div>;"
                    <div className="space-y-2">;"
                      <Label htmlFor="industry">Industry;"
                      <Select;"
                        name="industry""
                        value={formData && formData.industry} "
                        onValueChange={(value) => handleSelectChange("industry", value)}"

                    <div className="space - y-2">;"
                      <Label html_for="industry">Industry;"
                        name="industry";"
                        value={form_data.industry}"
                        onValueChange={(value) => handleSelectChange ("industry", value)}"

                        <SelectTrigger>;
                          <SelectValue placeholder="Select industry" />;"

                        <SelectContent>;
                          <SelectItem value="technology">Technology;""
                          <SelectItem value="healthcare">Healthcare;""
                          <SelectItem value="finance">Finance;""
                          <SelectItem value="education">Education;""
                          <SelectItem value="retail">Retail;""
                          <SelectItem value="manufacturing">Manufacturing;""
                          <SelectItem value="services">Professional Services;""
                          <SelectItem value="other">Other;"
                      <Label html_for="company_size">Company Size;"
                        name="company_size";"
                        value={form_data.company_size}"
                        onValueChange={(value) => handleSelectChange ("company_size", value)}"

                          <SelectValue placeholder="Select company size" />;"


                          <SelectItem value="1 - 10">1 - 10 employees;""
                          <SelectItem value="11 - 50">11 - 50 employees;""
                          <SelectItem value="51 - 200">51 - 200 employees;""
                          <SelectItem value="201 - 500">201 - 500 employees;""
                          <SelectItem value="501 - 1000">501 - 1000 employees;""
                          <SelectItem value="1000+">1000+ employees;"
                  ;"
                      <p className="text-xs text-muted-foreground">;"
                      <Label htmlFor="primary_color">Primary Brand Color;""
                      <div className="flex items-center gap-2">;"
                        <Input;"
                          id="primary_color"""
                          name="primary_color"""
                          type="color""
                          value={formData && formData.primary_color}
                          onChange={handleInputChange}"
                          className="w-12 p-1 h-10""

                          name="primary_color""
                          placeholder="#9b87f5""

                      <Label htmlFor="theme_preset">Theme Preset;"
                        name="theme_preset""
                        value={formData && formData.theme_preset} "
                        onValueChange={(value) => handleSelectChange("theme_preset", value)}"

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;

        title="Tenant Onboarding - Zion AI Marketplace";""
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform.";"




                  <TabsContent value="company" className="space-y-4">;"
                      <Label htmlFor="brand_name">Company Name;"
                        id="brand_name"""
                        name="brand_name""
                        value={formData && formData.brand_name}
                        placeholder="Acme Corporation""
                        required;
                      />

                    <div className="space-y-2">"
                      <Label htmlFor="industry">Industry"
                        value={formData.industry}"

                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />"

                        
                        <SelectContent>
                          <SelectItem value="technology">Technology""
                          <SelectItem value="healthcare">Healthcare""
                          <SelectItem value="finance">Finance""
                          <SelectItem value="education">Education""
                          <SelectItem value="retail">Retail""
                          <SelectItem value="manufacturing">Manufacturing""
                          <SelectItem value="services">Professional Services""
                          <SelectItem value="other">Other"
                        
                      
                      <Label htmlFor="company_size">Company Size"
                        name="company_size""
                        value={formData.company_size}"
                        onValueChange={(value) => handleSelectChange("company_size", value)}"

                          <SelectValue placeholder="Select company size" />"

                        
                          <SelectItem value="1-10">1-10 employees""
                          <SelectItem value="11-50">11-50 employees""
                          <SelectItem value="51-200">51-200 employees""
                          <SelectItem value="201-500">201-500 employees""
                          <SelectItem value="501-1000">501-1000 employees""
                          <SelectItem value="1000+">1000+ employees"
                        
                      
                  <TabsContent value="branding" className="space-y-4">"
                      <Label htmlFor="logo_url">Logo URL"

                      <Label htmlFor="company_size">Company Size;"
                        value={formData && formData.company_size} "


                          <SelectItem value="1-10">1-10 employees;""
                          <SelectItem value="11-50">11-50 employees;""
                          <SelectItem value="51-200">51-200 employees;""
                          <SelectItem value="201-500">201-500 employees;""
                          <SelectItem value="501-1000">501-1000 employees;""
                  <TabsContent value="branding" className="space-y-4">;"
                      <Label htmlFor="logo_url">Logo URL;"
                        id="logo_url"""
                        name="logo_url""
                        value={formData && formData.logo_url}
                        placeholder="https://example.com/logo.png";"
                      <Switch;"
                        id="is_co_branded";"
                        checked={form_data.is_co_branded}"
                        onCheckedChange={(checked) => handleSwitchChange ("is_co_branded", checked)}"

                  <TabsContent value="domain" className="space - y-4">;"
                      <Label html_for="subdomain">Subdomain;""
                      <div className="flex items - center">;"
                          id="subdomain";""
                          name="subdomain";"
                          value={form_data.subdomain}
                          on_change={handleInputChange}"
                          placeholder={form_data.brand_name ? form_data.brand_name.toLowerCase ().replace (/[^a - z0 - 9]/g, ) : "company"}""
                          className="rounded - r-none";"
                        <div className="bg - muted px - 3 py - 2 border border - l-0 border - input rounded - r-md text - muted - foreground">;"
                      <p className="text - xs text - muted - foreground">;"
                      <Label html_for="custom_domain">Custom Domain (Optional);"
                        id="custom_domain";""
                        name="custom_domain";"
                        value={form_data.custom_domain}
                        placeholder="hire.yourcompany.com";"
                  <TabsContent value="domain" className="space-y-4">;"
                      <Label htmlFor="subdomain">Subdomain;""
                      <div className="flex items-center">;"
                          value={formData.subdomain}
                          placeholder={formData.brand_name ? formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, ) : "company"}""
                          className="rounded-r-none";"
                        <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground">;"
                      <Label htmlFor="custom_domain">Custom Domain (Optional);"
                        value={formData.custom_domain}
                <div className="flex justify - end space - x-2">;"
                  <Button type="button" variant="outline" on_click={() => window.history.back ()}>;"

                  <Button type="submit" disabled={is_submitting}>;"

              </form>;
      </main>;
      <Footer />;

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
Tenant Onboarding - Zion AI Marketplace" description="Onboard a new white-label tenant to the Zion AI Marketplace platform." /> <Header /> <main className="flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8" > <div className="flex flex-col space-y-6" > <div> <h1 className="text-3xl font-bold tracking-tight" >Tenant Onboarding</h1> <p className="text-muted-foreground mt-2" > Create a new white-label instance of Zion Hire AI for a company. </p> </div> <Card> <CardHeader> <CardTitle>New Tenant Setup <CardDescription> Configure the branding and details for the new white-label tenant.   <CardContent>  <TabsContent value="company" className="space-y-4" > <div className="space-y-2" > <Label htmlFor="brand name" >Company Name <Input required /> </div> <div className="space-y-2" > <Label htmlFor="industry" >Industry <Select > <SelectTrigger> <SelectValue placeholder="Select industry" />  <SelectContent> <SelectItem value="technology" >Technology <SelectItem value="healthcare" >Healthcare <SelectItem value="finance" >Finance <SelectItem value="education" >Education <SelectItem value="retail" >Retail <SelectItem value="manufacturing" >Manufacturing <SelectItem value="services" >Professional Services <SelectItem value="other" >Other   </div> <div className="space-y-2" > <Label htmlFor="company size" >Company Size <Select > <SelectTrigger> <SelectValue placeholder="Select company size" />  <SelectContent> <SelectItem value="1-10" >1-10 employees <SelectItem value="11-50" >11-50 employees <SelectItem value="51-200" >51-200 employees <SelectItem value="201-500" >201-500 employees <SelectItem value="501-1000" >501-1000 employees <SelectItem value="1000+" >1000+ employees   </div>  </p> </div> <div className="space-y-2" > <Label htmlFor="primary color" >Primary Brand Color <div className="flex items-center gap-2" > <Input /> </div> </div> <div className="space-y-2" > <Label htmlFor="theme preset" >Theme Preset <Select > <SelectTrigger> <SelectValue placeholder="Select theme" />  <SelectContent> <SelectItem value="light" >Light <SelectItem value="dark" >Dark <SelectItem value="corporate" >Corporate <SelectItem value="startup" >Startup <SelectItem value="neon" >Neon   </div> <div className="flex items-center justify-between" > <div className="space-y-0.5" > <Label htmlFor="is co branded" >Co-branding <p className="text-xs text-muted-foreground" > Show "Powered by Zion AI" in the footer and elsewhere </p> </div> <Switch /> </div>  <TabsContent value="domain" className="space-y-4" > <div className="space-y-2" > <Label htmlFor="subdomain" >Subdomain <div className="flex items-center" > <Input /> <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground" > .ziontechmarketplace.com </div> </div> <p className="text-xs text-muted-foreground" > Leave blank to auto-generate from company name </p> </div> <div className="space-y-2" > <Label htmlFor="custom domain" >Custom Domain (Optional)  <Input /> <p className="text-xs text-muted-foreground" > If you want to use your own domain, enter it here. You'll need to configure DNS records. </p> </div>    </div> </form>   </div> </main> <Footer /> </>)

  );
