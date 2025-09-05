
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { Input } from "@/components/ui/input",
import { Label } from "@/components/ui/label",
import { Button } from "@/components/ui/button",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",
import { toast } from "sonner",
import { supabase } from "@/integrations/supabase/client",
import { Switch } from "@/components/ui/switch",
export default function TenantOnboarding() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("company"),
  const [isSubmitting, setIsSubmitting] = useState(false),  const [formData, setFormData] = useState({
    brand_name: "&quot;,
    subdomain: "&quot;,
    logo_url: "&quot;,
    primary_color: &quot;#9b87f5&quot;,
    theme_preset: &quot;light&quot;,
    company_size: "&quot;,
    industry: "&quot;,
    custom_domain: "&quot;,
    is_co_branded: true
  }),
  
  // Check if user has admin role
  const isAdmin = user?.role === "admin",
  
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
  },
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  },
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  },
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    try {
      // Generate subdomain if not provided
      const subdomain = formData.subdomain || formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, ''),
      
      // Create landing page copy
      const landingPageCopy = {
        headline: "AI Hiring Assistant",
        subtitle: `Find the best talent for your ${formData.industry || "company"}`,        cta: "Get Started"
      },
        headline: &quot;AI Hiring Assistant&quot;,
        subtitle: `Find the best talent for your ${formData.industry || &quot;company&quot;}`,
        cta: &quot;Get Started&quot;
      };
      
      // Submit to Supabase
      const {_data, _error} = await supabase
        .from('whitelabel_tenants')
        .insert({_brand_name: formData.brand_name, _subdomain: subdomain, _custom_domain: formData.custom_domain || null, _primary_color: formData.primary_color, _logo_url: formData.logo_url || null, _theme_preset: formData.theme_preset, _landing_page_copy: landingPageCopy, _is_active: true, _account_manager_id: user.id, _dns_verified: false, _email_template_override: null})
        .select('id, brand_name, subdomain')
        .single(),
      
      if (error) throw error,
      
      toast.success(&quot;Tenant created successfully!&quot;, {
        description: `${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`
      }),
      
      // Reset form
      setFormData({
        brand_name: "&quot;,
        subdomain: "&quot;,
        logo_url: "&quot;,
        primary_color: &quot;#9b87f5&quot;,
        theme_preset: &quot;light&quot;,
        company_size: "&quot;,
        industry: "&quot;,
        custom_domain: "&quot;,
        is_co_branded: true
      })
      
    } catch (error: any) {
      console.error("Error creating tenant:", error),
      toast.error("Failed to create tenant", {         description: error.message 
      })
    } finally {
      setIsSubmitting(false)
    }
  },
      toast.success("Tenant created successfully!", {_description: `${data.brand_name} is now available at ${_data.subdomain}.ziontechmarketplace.com`
      });
      
      // Reset form
      setFormData({_brand_name: "", _subdomain: "", _logo_url: "", _primary_color: "#9b87f5", _theme_preset: "light", _company_size: "", _industry: "", _custom_domain: "", _is_co_branded: true});
      
    } catch (error: unknown) {_toast.error("Failed to create tenant", _{ 
        description: error.message});
    } finally {_setIsSubmitting(false);}
  };

  return (_<>
      <SEO 
        title=&quot;Tenant Onboarding - Zion AI Marketplace&quot;
        description=&quot;Onboard a new white-label tenant to the Zion AI Marketplace platform.&quot;
      />
      <Header />
      <main className=&quot;flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex flex-col space-y-6&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>Tenant Onboarding</h1>
            <p className=&quot;text-muted-foreground mt-2&quot;>
              Create a new white-label instance of Zion Hire AI for a company.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>New Tenant Setup</CardTitle>
              <CardDescription>
                Configure the branding and details for the new white-label tenant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;w-full&quot;>
                  <TabsList className=&quot;mb-4 grid grid-cols-3 w-full&quot;>
                    <TabsTrigger value=&quot;company&quot;>Company Info</TabsTrigger>
                    <TabsTrigger value=&quot;branding&quot;>Branding</TabsTrigger>
                    <TabsTrigger value=&quot;domain&quot;>Domain Setup</TabsTrigger>                  </TabsList>
                  
                  <TabsContent value=&quot;company&quot; className=&quot;space-y-4&quot;>
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;brand_name&quot;>Company Name</Label>
                      <Input
                        id=&quot;brand_name&quot;
                        name=&quot;brand_name&quot;
                        value={formData.brand_name}
                        onChange={handleInputChange}
                        placeholder=&quot;Acme Corporation&quot;                        required
                      />
                    </div>
                    
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;industry&quot;>Industry</Label>
                      <Select 
                        name=&quot;industry&quot; 
                        value={formData.industry} 
                        onValueChange={(value) => handleSelectChange(&quot;industry&quot;, value)}                      >
                        <SelectTrigger>
                          <SelectValue placeholder=&quot;Select industry&quot; />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value=&quot;technology&quot;>Technology</SelectItem>
                          <SelectItem value=&quot;healthcare&quot;>Healthcare</SelectItem>
                          <SelectItem value=&quot;finance&quot;>Finance</SelectItem>
                          <SelectItem value=&quot;education&quot;>Education</SelectItem>
                          <SelectItem value=&quot;retail&quot;>Retail</SelectItem>
                          <SelectItem value=&quot;manufacturing&quot;>Manufacturing</SelectItem>
                          <SelectItem value=&quot;services&quot;>Professional Services</SelectItem>
                          <SelectItem value=&quot;other&quot;>Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;company_size&quot;>Company Size</Label>
                      <Select 
                        name=&quot;company_size&quot; 
                        value={formData.company_size} 
                        onValueChange={(value) => handleSelectChange(&quot;company_size&quot;, value)}                      >
                        <SelectTrigger>
                          <SelectValue placeholder=&quot;Select company size&quot; />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value=&quot;1-10&quot;>1-10 employees</SelectItem>
                          <SelectItem value=&quot;11-50&quot;>11-50 employees</SelectItem>
                          <SelectItem value=&quot;51-200&quot;>51-200 employees</SelectItem>
                          <SelectItem value=&quot;201-500&quot;>201-500 employees</SelectItem>
                          <SelectItem value=&quot;501-1000&quot;>501-1000 employees</SelectItem>
                          <SelectItem value=&quot;1000+&quot;>1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value=&quot;branding&quot; className=&quot;space-y-4&quot;>
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;logo_url&quot;>Logo URL</Label>
                      <Input
                        id=&quot;logo_url&quot;
                        name=&quot;logo_url&quot;
                        value={formData.logo_url}
                        onChange={handleInputChange}
                        placeholder=&quot;https://example.com/logo.png&quot;
                      />
                      <p className=&quot;text-xs text-muted-foreground&quot;>
                        Enter a direct URL to your logo image (SVG or PNG with transparent background recommended)                      </p>
                    </div>
                    
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;primary_color&quot;>Primary Brand Color</Label>
                      <div className=&quot;flex items-center gap-2&quot;>
                        <Input
                          id=&quot;primary_color&quot;
                          name=&quot;primary_color&quot;
                          type=&quot;color&quot;
                          value={formData.primary_color}
                          onChange={handleInputChange}
                          className=&quot;w-12 p-1 h-10&quot;
                        />
                        <Input
                          name=&quot;primary_color&quot;
                          value={formData.primary_color}
                          onChange={handleInputChange}
                          placeholder=&quot;#9b87f5&quot;                        />
                      </div>
                    </div>
                    
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;theme_preset&quot;>Theme Preset</Label>
                      <Select 
                        name=&quot;theme_preset&quot; 
                        value={formData.theme_preset} 
                        onValueChange={(value) => handleSelectChange(&quot;theme_preset&quot;, value)}                      >
                        <SelectTrigger>
                          <SelectValue placeholder=&quot;Select theme&quot; />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value=&quot;light&quot;>Light</SelectItem>
                          <SelectItem value=&quot;dark&quot;>Dark</SelectItem>
                          <SelectItem value=&quot;corporate&quot;>Corporate</SelectItem>
                          <SelectItem value=&quot;startup&quot;>Startup</SelectItem>
                          <SelectItem value=&quot;neon&quot;>Neon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className=&quot;flex items-center justify-between&quot;>
                      <div className=&quot;space-y-0.5&quot;>
                        <Label htmlFor=&quot;is_co_branded&quot;>Co-branding</Label>
                        <p className=&quot;text-xs text-muted-foreground&quot;>
                          Show &quot;Powered by Zion AI&quot; in the footer and elsewhere
                        </p>
                      </div>
                      <Switch
                        id=&quot;is_co_branded&quot;
                        checked={formData.is_co_branded}
                        onCheckedChange={(checked) => handleSwitchChange(&quot;is_co_branded&quot;, checked)}                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value=&quot;domain&quot; className=&quot;space-y-4&quot;>
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;subdomain&quot;>Subdomain</Label>
                      <div className=&quot;flex items-center&quot;>
                        <Input
                          id=&quot;subdomain&quot;
                          name=&quot;subdomain&quot;
                          value={formData.subdomain}
                          onChange={handleInputChange}
                          placeholder={formData.brand_name ? formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '') : &quot;company&quot;}
                          className=&quot;rounded-r-none&quot;                        />
                        <div className=&quot;bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground&quot;>
                          .ziontechmarketplace.com
                        </div>
                      </div>
                      <p className=&quot;text-xs text-muted-foreground&quot;>
                        Leave blank to auto-generate from company name
                      </p>
                    </div>
                    
                    <div className=&quot;space-y-2&quot;>
                      <Label htmlFor=&quot;custom_domain&quot;>Custom Domain (Optional)</Label>
                      <Input
                        id=&quot;custom_domain&quot;
                        name=&quot;custom_domain&quot;
                        value={formData.custom_domain}
                        onChange={handleInputChange}
                        placeholder=&quot;hire.yourcompany.com&quot;                      />
                      <p className=&quot;text-xs text-muted-foreground&quot;>
                        If you want to use your own domain, enter it here. You'll need to configure DNS records.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className=&quot;flex justify-end space-x-2&quot;>
                  <Button type=&quot;button&quot; variant=&quot;outline&quot; onClick={() => window.history.back()}>
                    Cancel
                  </Button>
                  <Button type=&quot;submit&quot; disabled={isSubmitting}>
                    {isSubmitting ? &quot;Creating...&quot; : &quot;Create Tenant&quot;}                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
