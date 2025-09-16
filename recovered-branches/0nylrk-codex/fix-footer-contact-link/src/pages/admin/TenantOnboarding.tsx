


  const [formData, setFormData] = useState({

    brand_name: ""
    subdomain: ""
    logo_url: ""
    primary_color: "#9b87f5"
    theme_preset: "light"
    company_size: ""
    industry: ""
    custom_domain: ""
    is_co_branded: true

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}







import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {toast} from "sonner";
import {supabase} from "@/integrations/supabase/client";
import {Switch} from "@/components/ui/switch";
export default function TenantOnboarding() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("company");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
import { supabase } from "@/integrations/supabase/client";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Switch } from "@/components/ui/switch";

export default function TenantOnboarding() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("company");
  const [isSubmitting, setIsSubmitting] = useState(false);

  });

  // Check if user has admin role;
  const isAdmin = user?.role === "admin";
  }),
  
  // Check if user has admin role
  const isAdmin = user?.role === "admin",
  

  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))

  }
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true)
    try {
      // Generate subdomain if not provided
      const subdomain = formData.subdomain |formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '');
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
        headline: "AI Hiring Assistant"
        subtitle: `Find the best talent for your ${formData.industry |"company"}`
        cta: "Get Started"

      }
      },
      

      // Submit to Supabase
      const { data, error } = await supabase
        .from('whitelabel_tenants')
        .insert({
          brand_name: formData.brand_name
          subdomain: subdomain
          custom_domain: formData.custom_domain |null
          primary_color: formData.primary_color
          logo_url: formData.logo_url |null
          theme_preset: formData.theme_preset
          landing_page_copy: landingPageCopy
          is_active: true
          account_manager_id: user.id
          dns_verified: false
          email_template_override: null
        })
        .select('id, brand_name, subdomain')

        .single();
      if (error) throw error;
      toast.success("Tenant created successfully!", {
        description: `${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`
      });
        .single(),
      
      if (error) throw error,
      
      toast.success("Tenant created successfully!", {
        description: `${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`
      }),
      

      // Reset form
      setFormData({
        brand_name: ""
        subdomain: ""
        logo_url: ""
        primary_color: "#9b87f5"
        theme_preset: "light"
        company_size: ""
        industry: ""
        custom_domain: ""
        is_co_branded: true
      })
    } catch (error: any) {

      console.error("Error creating tenant:", error);
      toast.error("Failed to create tenant", {
        description: error.message
      console.error("Error creating tenant:", error),
      toast.error("Failed to create tenant", { 
        description: error.message 

      })
    } finally {
      setIsSubmitting(false)
    }

  }
  },


  return (

    <>;
      <SEO
        title="Tenant Onboarding - Zion AI Marketplace"
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform."


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
import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { SEO } from '@/components / SEO';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { Input } from '@/components / ui / input';
import { Label } from '@/components / ui / label';
import { Button } from '@/components / ui / button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components / ui / select';
import { toast } from './sonner';
import { supabase } from '@/integrations / supabase / client';
import { Switch } from '@/components / ui / switch';
export default /**
 * TenantOnboarding - Function description
 */
function TenantOnboarding() {
  const { user } = use_auth ();
  const [active_tab, setActiveTab] = useState ("company");
  const [is_submitting, setIsSubmitting] = useState (false);
  const [form_data, setFormData] = useState ({
  const [formData, setFormData] = useState({
    brand_name: "",
    subdomain: "",
    logo_url: "",
    primary_color: "#9b87f5",
    theme_preset: "light",
    company_size: "",
    industry: "",
    custom_domain: "",
          landing_page_copy: landingPageCopy,
          is_active: true,
          account_manager_id: user.id,
          dns_verified: false,
        brand_name: "",
        subdomain: "",
        logo_url: "",
        primary_color: "#9b87f5",
        theme_preset: "light",
        company_size: "",
        industry: "",
        custom_domain: "",
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="services">Professional Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                        onValueChange={(value) => handleSelectChange("company_size", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  <TabsContent value="branding" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="logo_url">Logo URL</Label>
                      <Input
                        id="logo_url"
                        name="logo_url"
                        value={formData.logo_url}
                        onChange={handleInputChange}
                        placeholder="https://example.com/logo.png"
                      />
                      <p className="text-xs text-muted-foreground">
                        Enter a direct URL to your logo image (SVG or PNG with transparent background recommended)
                      </p>
                    </div>
                        <Input
                          id="primary_color"
                          name="primary_color"
                          type="color"
                          value={formData.primary_color}
                          onChange={handleInputChange}
                          className="w-12 p-1 h-10"
                        />
                        <Input
                          name="primary_color"
                          value={formData.primary_color}
                          onChange={handleInputChange}
                          placeholder="#9b87f5"
                        />
                      </div>
                    </div>
                        <Input
                          id="subdomain"
                          name="subdomain"
                          value={formData.subdomain}
                          onChange={handleInputChange}
                          placeholder={formData.brand_name ? formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '') : "company"}
                          className="rounded-r-none"
                        />
                        <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground">
                          .ziontechmarketplace.com
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Leave blank to auto-generate from company name
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom_domain">Custom Domain (Optional)</Label>
                      <Input
                        id="custom_domain"
                        name="custom_domain"
                        value={formData.custom_domain}
                        onChange={handleInputChange}
                        placeholder="hire.yourcompany.com"
                      />
                      <p className="text-xs text-muted-foreground">
                        If you want to use your own domain, enter it here. You'll need to configure DNS records.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => window.history.back()}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Tenant"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
