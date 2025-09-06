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


import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { Input } from "@/components/ui/input",;
import { Label } from "@/components/ui/label",;
import { Button } from "@/components/ui/button",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select",;
import { toast } from "sonner",;
import { supabase } from "@/integrations/supabase/client",;
import { Switch } from "@/components/ui/switch",;
;
export default function TenantOnboarding() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("company"),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [formData, setFormData] = useState({;
    brand_name:"",;
    subdomain:"",;
    logo_url:"",;
    primary_color:"#9b87f5",;
    theme_preset:"light",;
    company_size:"",;
    industry:"",;
    custom_domain:"",;
    is_co_branded:true;
  }),;
  ;
  // Check if user has admin role;
  const isAdmin = user?.role === "admin";
  ;
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />,;
  }
;
  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]:value })),;
  },;
  ;
  const handleSelectChange = (name:string, value:string) => {;
    setFormData(prev => ({ ...prev, [name]:value })),;
  },;
  ;
  const handleSwitchChange = (name:string, checked:boolean) => {;
    setFormData(prev => ({ ...prev, [name]:checked })),;
  },;
  ;
  const handleSubmit = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    ;
    try {;
      // Generate subdomain if not provided;
      const subdomain = formData.subdomain || formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, ''),;
      ;
      // Create landing page copy;
      const landingPageCopy = {;
        headline:"AI Hiring Assistant",;
        subtitle:`Find the best talent for your ${formData.industry || "company"}`,;
        cta:"Get Started";
      },;
      ;

      // Submit to Supabase;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .insert({;




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
export default function TenantOnboarding() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("company");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({



  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
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

      console.error("Error creating tenant:", error),
      toast.error("Failed to create tenant", { 
        description: error.message 
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


  return (

    }
  }
  return (

    <>;
      <SEO
        title="Tenant Onboarding - Zion AI Marketplace"
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform."

          brand_name:formData.brand_name,;
          subdomain:subdomain,;
          custom_domain:formData.custom_domain || null,;
          primary_color:formData.primary_color,;
          logo_url:formData.logo_url || null,;
          theme_preset:formData.theme_preset,;
          landing_page_copy:landingPageCopy,;
          is_active:true,;
          account_manager_id:user.id,;
          dns_verified:false,;
          email_template_override:null;
        });
        .select('id, brand_name, subdomain');
        .single(),;
      ;
      if (error) throw error,;
      ;
      toast.success("Tenant created successfully!", {;
        description:`${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`;
      }),;
      ;
      // Reset form;
      setFormData({;
        brand_name:"",;
        subdomain:"",;
        logo_url:"",;
        primary_color:"#9b87f5",;
        theme_preset:"light",;
        company_size:"",;
        industry:"",;
        custom_domain:"",;
        is_co_branded:true;
      }),;
      ;
    } catch (error:any) {;
      console.error("Error creating tenant:", error),;
      toast.error("Failed to create tenant", { ;
        description:error.message ;
      }),;
    } finally {;
      setIsSubmitting(false),;
    }
  },;
;
  return (;
    <>;
      <SEO ;
        title="Tenant Onboarding - Zion AI Marketplace";
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform.";

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

;

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
    brand_name: "",
    subdomain: "",
    logo_url: "",
    primary_color: "#9b87f5",
    theme_preset: "light",
    company_size: "",
    industry: "",
    custom_domain: "",
    is_co_branded: true;
  });
;
  // Check if user has admin role;
  const is_admin = user?.role === "admin";
;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/unauthorized" />;
  }
  const handleInputChange = (e: React.ChangeEvent < HTMLInputElement>) =>: any {
    const { name, value } = e.target;
    setFormData (prev => ({ ...prev, [name]: value }));
  }
;
  const handleSelectChange = (name: string, value: string) =>: any {
    setFormData (prev => ({ ...prev, [name]: value }));
  }
;
  const handleSwitchChange = (name: string, checked: boolean) =>: any {
    setFormData (prev => ({ ...prev, [name]: checked }));
  }
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
    setIsSubmitting (true),
    try {
      // Generate subdomain if not provided;
      const subdomain = form_data.subdomain || form_data.brand_name.toLowerCase ().replace (/[^a - z0 - 9]/g, '');
;
      // Create landing page copy;
      const landingPageCopy = {
        headline: "AI Hiring Assistant",
        subtitle: `Find the best talent for your ${form_data.industry || "company"}`,
        cta: "Get Started";
      }
;
      // Submit to Supabase;
      const { data, error } = await supabase;
        .from ('whitelabel_tenants');
        .insert ({
          brand_name: form_data.brand_name,
          subdomain: subdomain,
          custom_domain: form_data.custom_domain || null,
          primary_color: form_data.primary_color,
          logo_url: form_data.logo_url || null,
          theme_preset: form_data.theme_preset,
          landing_page_copy: landingPageCopy,
          is_active: true,
          account_manager_id: user.id,
          dns_verified: false,
          email_template_override: null;
        });
        .select ('id, brand_name, subdomain');
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      toast.success ("Tenant created successfully!", {
        description: `${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`;
      });
;
      // Reset form;
      setFormData ({
        brand_name: "",
        subdomain: "",
        logo_url: "",
        primary_color: "#9b87f5",
        theme_preset: "light",
        company_size: "",
        industry: "",
        custom_domain: "",
        is_co_branded: true;
      });
    } catch (error: any) {
      console.error ("Error creating tenant:", error);
      toast.error ("Failed to create tenant", {
        description: error.message;
      });
    } finally {
      setIsSubmitting (false);
    }
  }
;
  return (
    <>;
      <SEO;
        title="Tenant Onboarding - Zion AI Marketplace";
        description="Onboard a new white - label tenant to the Zion AI Marketplace platform.";
      />;
      <Header />;
      <main className="flex - 1 container max - w-4xl mx - auto py - 10 px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex flex - col space - y-6">;
          <div>;
            <h1 className="text - 3xl font - bold tracking - tight">Tenant Onboarding</h1>;
            <p className="text - muted - foreground mt - 2">;
              Create a new white - label instance of Zion Hire AI for a company.;
            </p>;
          </div>;
          <Card>;
            <CardHeader>;
              <CardTitle > New Tenant Setup</CardTitle>;
              <CardDescription>;
                Configure the branding and details for the new white - label tenant.;
              </CardDescription>;
            </CardHeader>;
            <CardContent>;
              <form on_submit={handle_submit} className="space - y-6">;
                <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
                  <TabsList className="mb - 4 grid grid - cols - 3 w - full">;


                    <TabsTrigger value="company">Company Info</TabsTrigger>;
                    <TabsTrigger value="branding">Branding</TabsTrigger>;
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>;
                  </TabsList>;

                  <TabsContent value="company" className="space - y-4">;
                    <div className="space - y-2">;
                      <Label html_for="brand_name">Company Name</Label>;
                      <Input;
                        id="brand_name";
                        name="brand_name";
                        value={form_data.brand_name}
                        on_change={handleInputChange}

export default function TenantOnboarding() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("company"),;
  const [isSubmitting, setIsSubmitting] = useState(false),;
  const [formData, setFormData] = useState({;
    brand_name: "",;
    subdomain: "",;
    logo_url: "",;
    primary_color: "#9b87f5",;
    theme_preset: "light",;
    company_size: "",;
    industry: "",;
    custom_domain: "",;
    is_co_branded: true;
  }),;
  // Check if user has admin role;
  const isAdmin = user?.role === "admin",;
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />;
  }
;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e.target,;
    setFormData(prev => ({ ...prev, [name]: value }));
  },;
  const handleSelectChange = (name: string, value: string) => {;
    setFormData(prev => ({ ...prev, [name]: value }));
  },;
  const handleSwitchChange = (name: string, checked: boolean) => {;
    setFormData(prev => ({ ...prev, [name]: checked }));
  },;
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    setIsSubmitting(true),;
    try {;
      // Generate subdomain if not provided;
      const subdomain = formData.subdomain || formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, ''),;
      // Create landing page copy;
      const landingPageCopy = {;
        headline: "AI Hiring Assistant",;
        subtitle: `Find the best talent for your ${formData.industry || "company"}`,;
        cta: "Get Started";
      },;
      // Submit to Supabase;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .insert({;
          brand_name: formData.brand_name,;
          subdomain: subdomain,;
          custom_domain: formData.custom_domain || null,;
          primary_color: formData.primary_color,;
          logo_url: formData.logo_url || null,;
          theme_preset: formData.theme_preset,;
          landing_page_copy: landingPageCopy,;
          is_active: true,;
          account_manager_id: user.id,;
          dns_verified: false,;
          email_template_override: null;
        });
        .select('id, brand_name, subdomain');
        .single(),;
      if (error) throw error,;
      toast.success("Tenant created successfully!", {;
        description: `${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`;
      }),;
      // Reset form;
      setFormData({;
        brand_name: "",;
        subdomain: "",;
        logo_url: "",;
        primary_color: "#9b87f5",;
        theme_preset: "light",;
        company_size: "",;
        industry: "",;
        custom_domain: "",;
        is_co_branded: true;
      });
    } catch (error: any) {;
      console.error("Error creating tenant:", error);
      toast.error("Failed to create tenant", {;
        description: error.message;
      });
    } finally {;
      setIsSubmitting(false);
    }
  };
  return (;
    <>;
      <SEO;
        title="Tenant Onboarding - Zion AI Marketplace";
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform.";
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
                  <TabsContent value="company" className="space-y-4">;
                    <div className="space-y-2">;
                      <Label htmlFor="brand_name">Company Name</Label>;
                      <Input
                        id="brand_name"
                        name="brand_name"
                        value={formData && formData.brand_name}
                        onChange={handleInputChange}
                        placeholder="Acme Corporation"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select
                        name="industry"
                        value={formData.industry}
                        onValueChange={(value) => handleSelectChange("industry", value)}
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
                    <div className="space-y-2">
                      <Label htmlFor="company_size">Company Size</Label>
                      <Select
                        name="company_size"
                        value={formData.company_size}
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

                    <div className="space-y-2">;
                      <Label htmlFor="company_size">Company Size</Label>;
                      <Select
                        name="company_size" 
                        value={formData && formData.company_size} 
                        onValueChange={(value) => handleSelectChange("company_size", value)}
                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select company size" />;
                        </SelectTrigger>;
                        <SelectContent>;
                          <SelectItem value="1-10">1-10 employees</SelectItem>;
                          <SelectItem value="11-50">11-50 employees</SelectItem>;
                          <SelectItem value="51-200">51-200 employees</SelectItem>;
                          <SelectItem value="201-500">201-500 employees</SelectItem>;
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>;
                          <SelectItem value="1000+">1000+ employees</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;
                  </TabsContent>;

                  <TabsContent value="branding" className="space-y-4">;
                    <div className="space-y-2">;
                      <Label htmlFor="logo_url">Logo URL</Label>;
                      <Input
                        id="logo_url"
                        name="logo_url"
                        value={formData && formData.logo_url}
                        onChange={handleInputChange}

                    <div className="flex items - center justify - between">;
                      <div className="space - y-0.5">;
                        <Label html_for="is_co_branded">Co - branding</Label>;
                        <p className="text - xs text - muted - foreground">;

                        If you want to use your own domain, enter it here. You'll need to configure DNS records.;
                      </p>;
                    </div>;
                  </TabsContent>;
                </Tabs>;

                ;
                <div className="flex justify-end space-x-2">;
                  <Button type="button" variant="outline" onClick={() => window.history.back()}>;
                    Cancel;
                  </Button>;
                  <Button type="submit" disabled={isSubmitting}>;
                    {isSubmitting ? "Creating..." : "Create Tenant"}


                  </Button>;
                </div>;
              </form>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;





    </>);
}



