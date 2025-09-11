
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
=======
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
<<<<<<< HEAD

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
  const isAdmin = user?.role === "admin",;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  });

  // Check if user has admin role;
  const isAdmin = user?.role === "admin";
<<<<<<< HEAD

  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />;
  }

  const handleInputChange = (e: React && React.ChangeEvent<HTMLInputElement>) => {;
    const { name, value } = e && e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setIsSubmitting(true),;

    try {;
      // Generate subdomain if not provided;
      const subdomain = formData && formData.subdomain || formData && formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '');

      // Create landing page copy;
      const landingPageCopy = {;
        headline: "AI Hiring Assistant",;
        subtitle: `Find the best talent for your ${formData && formData.industry || "company"}`,;
        cta: "Get Started";
      };

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      // Submit to Supabase;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .insert({;
<<<<<<< HEAD

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
import { supabase } from "@/integrations/supabase/client",
import { Switch } from "@/components/ui/switch",
export default function TenantOnboarding() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("company"),
  const [isSubmitting, setIsSubmitting] = useState(false),
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
  });
  // Check if user has admin role
  const isAdmin = user?.role === "admin";
=======
          brand_name: formData && formData.brand_name,;
          subdomain: subdomain,;
          custom_domain: formData && formData.custom_domain || null,;
          primary_color: formData && formData.primary_color,;
          logo_url: formData && formData.logo_url || null,;
          theme_preset: formData && formData.theme_preset,;
          landing_page_copy: landingPageCopy,;
          is_active: true,;
          account_manager_id: user && user.id,;
          dns_verified: false,;
          email_template_override: null;
        });
        .select('id, brand_name, subdomain');
        .single();

      if (error) throw error;

      toast && toast.success("Tenant created successfully!", {;
        description: `${data && data.brand_name} is now available at ${data && data.subdomain}.ziontechmarketplace && ziontechmarketplace.com`;
      });

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
      console && console.error("Error creating tenant:", error);
      toast && toast.error("Failed to create tenant", { ;
        description: error && error.message ;
      });
    } finally {;
      setIsSubmitting(false);

    }
  }
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }),
  
  // Check if user has admin role
  const isAdmin = user?.role === "admin",
  
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Create landing page copy
      const landingPageCopy = {
        headline: "AI Hiring Assistant"
        subtitle: `Find the best talent for your ${formData.industry |"company"}`
        cta: "Get Started"
<<<<<<< HEAD
<<<<<<< HEAD
      },
      

      }
      },
      
=======

      },
      

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      }
      },
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single();
      if (error) throw error;
      toast.success("Tenant created successfully!", {
        description: `${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`
      });
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .single(),
      
      if (error) throw error,
      
      toast.success("Tenant created successfully!", {
        description: `${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`
      }),
      
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
      console.error("Error creating tenant:", error),
      toast.error("Failed to create tenant", { 
        description: error.message 
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      console.error("Error creating tenant:", error);
      toast.error("Failed to create tenant", {
        description: error.message
      console.error("Error creating tenant:", error),
      toast.error("Failed to create tenant", { 
        description: error.message 
<<<<<<< HEAD
=======

      console.error("Error creating tenant:", error),
      toast.error("Failed to create tenant", { 
        description: error.message 

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      })
    } finally {
      setIsSubmitting(false)
    }
<<<<<<< HEAD

  },

<<<<<<< HEAD

  return (

    }
  }
  return (
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

  return (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  }
  },

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <SEO
        title="Tenant Onboarding - Zion AI Marketplace"
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform."
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
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

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <TabsTrigger value="company">Company Info</TabsTrigger>;
                    <TabsTrigger value="branding">Branding</TabsTrigger>;
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>;
                  </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD
                  ;
                  <TabsContent value="company" className="space-y-4">;
                    <div className="space-y-2">;
                      <Label htmlFor="brand_name">Company Name</Label>;
                      <Input;
                        id="brand_name";
                        name="brand_name";
                        value={formData.brand_name}
                        onChange={handleInputChange}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      />;
                    </div>;

                    <div className="space-y-2">;
                      <Label htmlFor="industry">Industry</Label>;
                      <Select
                        name="industry" 
                        value={formData && formData.industry} 
                        onValueChange={(value) => handleSelectChange("industry", value)}
=======
                  <TabsContent value="company" className="space - y-4">;
                    <div className="space - y-2">;
                      <Label html_for="brand_name">Company Name</Label>;
                      <Input;
                        id="brand_name";
                        name="brand_name";
                        value={form_data.brand_name}
                        on_change={handleInputChange}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        placeholder="Acme Corporation";
                        required;
                      />;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
                    ;
                    <div className="space-y-2">;
                      <Label htmlFor="industry">Industry</Label>;
                      <Select ;
                        name="industry" ;
                        value={formData.industry} ;
                        onValueChange={(value) => handleSelectChange("industry", value)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="space - y-2">;
                      <Label html_for="industry">Industry</Label>;
                      <Select;
                        name="industry";
                        value={form_data.industry}
                        onValueChange={(value) => handleSelectChange ("industry", value)}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                    ;
                    <div className="space-y-2">;
                      <Label htmlFor="company_size">Company Size</Label>;
                      <Select ;
                        name="company_size" ;
                        value={formData.company_size} ;
                        onValueChange={(value) => handleSelectChange("company_size", value)}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <div className="space - y-2">;
                      <Label html_for="company_size">Company Size</Label>;
                      <Select;
                        name="company_size";
                        value={form_data.company_size}
                        onValueChange={(value) => handleSelectChange ("company_size", value)}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      >;
                        <SelectTrigger>;
                          <SelectValue placeholder="Select company size" />;
                        </SelectTrigger>;
                        <SelectContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                          <SelectItem value="1-10">1-10 employees</SelectItem>;
                          <SelectItem value="11-50">11-50 employees</SelectItem>;
                          <SelectItem value="51-200">51-200 employees</SelectItem>;
                          <SelectItem value="201-500">201-500 employees</SelectItem>;
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                          <SelectItem value="1 - 10">1 - 10 employees</SelectItem>;
                          <SelectItem value="11 - 50">11 - 50 employees</SelectItem>;
                          <SelectItem value="51 - 200">51 - 200 employees</SelectItem>;
                          <SelectItem value="201 - 500">201 - 500 employees</SelectItem>;
                          <SelectItem value="501 - 1000">501 - 1000 employees</SelectItem>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          <SelectItem value="1000+">1000+ employees</SelectItem>;
                        </SelectContent>;
                      </Select>;
                    </div>;
                  </TabsContent>;
<<<<<<< HEAD
<<<<<<< HEAD
                  ;
                  <TabsContent value="branding" className="space-y-4">;
                    <div className="space-y-2">;
                      <Label htmlFor="logo_url">Logo URL</Label>;
                      <Input;
                        id="logo_url";
                        name="logo_url";
                        value={formData.logo_url}
                        onChange={handleInputChange}
                        placeholder="https://example.com/logo.png";
=======

                        placeholder="https://example && example.com/logo && logo.png"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                        placeholder="https://example && example.com/logo && logo.png"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      />;
                      <p className="text-xs text-muted-foreground">;
                        Enter a direct URL to your logo image (SVG or PNG with transparent background recommended);
                      </p>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  }
  },

  return (
    <>
      <SEO
        title="Tenant Onboarding - Zion AI Marketplace"
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform."
      />
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tenant Onboarding</h1>
            <p className="text-muted-foreground mt-2">
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="mb-4 grid grid-cols-3 w-full">
                    <TabsTrigger value="company">Company Info</TabsTrigger>
                    <TabsTrigger value="branding">Branding</TabsTrigger>
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>
                  </TabsList>
                  <TabsContent value="company" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand_name">Company Name</Label>
                      <Input
                        id="brand_name"
                        name="brand_name"
                        value={formData.brand_name}
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
                    <div className="space-y-2">
                      <Label htmlFor="primary_color">Primary Brand Color</Label>
                      <div className="flex items-center gap-2">
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <div className="space-y-2">;
                      <Label htmlFor="primary_color">Primary Brand Color</Label>;
                      <div className="flex items-center gap-2">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        <Input
                          id="primary_color"
                          name="primary_color"
                          type="color"
<<<<<<< HEAD
<<<<<<< HEAD
                        />;
                      </div>;
                    </div>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          value={formData && formData.primary_color}
                          onChange={handleInputChange}
                          className="w-12 p-1 h-10"
                        />;
                        <Input
                          name="primary_color"
                          value={formData && formData.primary_color}
                          onChange={handleInputChange}
                          placeholder="#9b87f5"

                        />;
                      </div>;
                    </div>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <div className="space-y-2">;
                      <Label htmlFor="theme_preset">Theme Preset</Label>;
                      <Select
                        name="theme_preset" 
                        value={formData && formData.theme_preset} 
                        onValueChange={(value) => handleSelectChange("theme_preset", value)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <TabsContent value="branding" className="space - y-4">;
                    <div className="space - y-2">;
                      <Label html_for="logo_url">Logo URL</Label>;
                      <Input;
                        id="logo_url";
                        name="logo_url";
                        value={form_data.logo_url}
                        on_change={handleInputChange}
                        placeholder="https://example.com / logo.png";
                      />;
                      <p className="text - xs text - muted - foreground">;
                        Enter a direct URL to your logo image (SVG or PNG with transparent background recommended);
                      </p>;
                    </div>;
                    <div className="space - y-2">;
                      <Label html_for="primary_color">Primary Brand Color</Label>;
                      <div className="flex items - center gap - 2">;
                        <Input;
                          id="primary_color";
                          name="primary_color";
                          type="color";
                          value={form_data.primary_color}
                          on_change={handleInputChange}
                          className="w - 12 p - 1 h - 10";
                        />;
                        <Input;
                          name="primary_color";
                          value={form_data.primary_color}
                          on_change={handleInputChange}
                          placeholder="#9b87f5";
                        />;
                      </div>;
                    </div>;
                    <div className="space - y-2">;
                      <Label html_for="theme_preset">Theme Preset</Label>;
                      <Select;
                        name="theme_preset";
                        value={form_data.theme_preset}
                        onValueChange={(value) => handleSelectChange ("theme_preset", value)}
<<<<<<< HEAD
<<<<<<< HEAD
                    ;
                    <div className="space-y-2">;
                      <Label htmlFor="primary_color">Primary Brand Color</Label>;
                      <div className="flex items-center gap-2">;
                        <Input;
                          id="primary_color";
                          name="primary_color";
                          type="color";
                          value={formData.primary_color}
                          onChange={handleInputChange}
                          className="w-12 p-1 h-10";
                        />;
                        <Input;
                          name="primary_color";
                          value={formData.primary_color}
                          onChange={handleInputChange}
                          placeholder="#9b87f5";
                        />;
                      </div>;
                    </div>;
                    ;
                    <div className="space-y-2">;
                      <Label htmlFor="theme_preset">Theme Preset</Label>;
                      <Select ;
                        name="theme_preset" ;
                        value={formData.theme_preset} ;
                        onValueChange={(value) => handleSelectChange("theme_preset", value)}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                    ;
                    <div className="flex items-center justify-between">;
                      <div className="space-y-0.5">;
                        <Label htmlFor="is_co_branded">Co-branding</Label>;
                        <p className="text-xs text-muted-foreground">;
                          Show "Powered by Zion AI" in the footer and elsewhere;
                        </p>;
                      </div>;
                      <Switch;
                        id="is_co_branded";
                        checked={formData.is_co_branded}
                        onCheckedChange={(checked) => handleSwitchChange("is_co_branded", checked)}
                      />;
                    </div>;
                  </TabsContent>;
                  ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      />;
                    </div>;
                  </TabsContent>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <TabsContent value="domain" className="space-y-4">;
                    <div className="space-y-2">;
                      <Label htmlFor="subdomain">Subdomain</Label>;
                      <div className="flex items-center">;
<<<<<<< HEAD
<<<<<<< HEAD
                        />;
                        <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground">;
                          .ziontechmarketplace && ziontechmarketplace.com;
                        <Input;
                          id="subdomain";
                          name="subdomain";
                          value={formData.subdomain}
                          onChange={handleInputChange}
                          placeholder={formData.brand_name ? formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '') :"company"}
                          className="rounded-r-none";
                        />;
                        <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground">;
                          .ziontechmarketplace.com;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                        <Input
                          id="subdomain"
                          name="subdomain"
                          value={formData && formData.subdomain}
                          onChange={handleInputChange}
                          placeholder={formData && formData.brand_name ? formData && formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '') : "company"}
                          className="rounded-r-none"

                        />;
                        <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground">;
                          .ziontechmarketplace && ziontechmarketplace.com;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        </div>;
                      </div>;
                      <p className="text-xs text-muted-foreground">;
                        Leave blank to auto-generate from company name;
                      </p>;
                    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                    <div className="space-y-2">;
                      <Label htmlFor="custom_domain">Custom Domain (Optional)</Label>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Input
                        id="custom_domain"
                        name="custom_domain"
                        value={formData && formData.custom_domain}
                        onChange={handleInputChange}
<<<<<<< HEAD
<<<<<<< HEAD
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
                    <div className="space-y-2">
                      <Label htmlFor="theme_preset">Theme Preset</Label>
                      <Select
                        name="theme_preset"
                        value={formData.theme_preset}
                        onValueChange={(value) => handleSelectChange("theme_preset", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="startup">Startup</SelectItem>
                          <SelectItem value="neon">Neon</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="is_co_branded">Co-branding</Label>
                        <p className="text-xs text-muted-foreground">
                          Show "Powered by Zion AI" in the footer and elsewhere
                        </p>
                      </div>
                      <Switch
                        id="is_co_branded"
                        checked={formData.is_co_branded}
                        onCheckedChange={(checked) => handleSwitchChange("is_co_branded", checked)}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="domain" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="subdomain">Subdomain</Label>
                      <div className="flex items-center">
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
  )
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                        placeholder="hire && hire.yourcompany.com"


<<<<<<< HEAD
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                        placeholder="hire && hire.yourcompany.com"
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
                      <Input;
                        id="brand_name";
                        name="brand_name";
                        value={formData.brand_name}
                        onChange={handleInputChange}
                        placeholder="Acme Corporation";
                        required;
                      />;
                    </div>;
                    <div className="space-y-2">;
                      <Label htmlFor="industry">Industry</Label>;
                      <Select;
                        name="industry";
                        value={formData.industry} ;
                        onValueChange={(value) => handleSelectChange("industry", value)}
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
                      <Select;
                        name="company_size";
                        value={formData.company_size} ;
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
                      <Input;
                        id="logo_url";
                        name="logo_url";
                        value={formData.logo_url}
                        onChange={handleInputChange}
                        placeholder="https://example.com/logo.png";
<<<<<<< HEAD
<<<<<<< HEAD
                      />;
                      <p className="text-xs text-muted-foreground">;
                        Enter a direct URL to your logo image (SVG or PNG with transparent background recommended);
                      </p>;
                    </div>;
                    <div className="space-y-2">;
                      <Label htmlFor="primary_color">Primary Brand Color</Label>;
                      <div className="flex items-center gap-2">;
                        <Input;
                          id="primary_color";
                          name="primary_color";
                          type="color";
                          value={formData.primary_color}
                          onChange={handleInputChange}
                          className="w-12 p-1 h-10"
                        />
                        <Input
                          name="primary_color"
                          value={formData.primary_color}
                          onChange={handleInputChange}
                          placeholder="#9b87f5";
                        />;
                      </div>;
                    </div>;
                    <div className="space-y-2">;
                      <Label htmlFor="theme_preset">Theme Preset</Label>;
                      <Select;
                        name="theme_preset";
                        value={formData.theme_preset} ;
                        onValueChange={(value) => handleSelectChange("theme_preset", value)}
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
                    <div className="flex items-center justify-between">;
                      <div className="space-y-0.5">;
                        <Label htmlFor="is_co_branded">Co-branding</Label>;
                        <p className="text-xs text-muted-foreground">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                      />;
                      <p className="text-xs text-muted-foreground">;
=======
                    <div className="flex items - center justify - between">;
                      <div className="space - y-0.5">;
                        <Label html_for="is_co_branded">Co - branding</Label>;
                        <p className="text - xs text - muted - foreground">;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                          Show "Powered by Zion AI" in the footer and elsewhere;
                        </p>;
                      </div>;
                      <Switch;
                        id="is_co_branded";
<<<<<<< HEAD
<<<<<<< HEAD
                    ;
                        checked={formData.is_co_branded}
                        onCheckedChange={(checked) => handleSwitchChange("is_co_branded", checked)}
                      />;
                    </div>;
                  </TabsContent>;
                  <TabsContent value="domain" className="space-y-4">;
                    <div className="space-y-2">;
                      <Label htmlFor="subdomain">Subdomain</Label>;
                      <div className="flex items-center">;
                        <Input;
                          id="subdomain";
                          name="subdomain";
                          value={formData.subdomain}
                          onChange={handleInputChange}
                          placeholder={formData.brand_name ? formData.brand_name.toLowerCase().replace(/[^a-z0-9]/g, '') : "company"}
                          className="rounded-r-none";
                        />;
                        <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground">;
                          .ziontechmarketplace.com;
                        </div>;
                      </div>;
                      <p className="text-xs text-muted-foreground">;
                        Leave blank to auto-generate from company name;
                      </p>;
                    </div>;
                    <div className="space-y-2">;
                      <Label htmlFor="custom_domain">Custom Domain (Optional)</Label>;
                      <Input;
                        id="custom_domain";
                        name="custom_domain";
                        value={formData.custom_domain}
                        onChange={handleInputChange}
                        placeholder="hire.yourcompany.com";
                      />;
                      <p className="text-xs text-muted-foreground">;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        checked={form_data.is_co_branded}
                        onCheckedChange={(checked) => handleSwitchChange ("is_co_branded", checked)}
                      />;
                    </div>;
                  </TabsContent>;
                  <TabsContent value="domain" className="space - y-4">;
                    <div className="space - y-2">;
                      <Label html_for="subdomain">Subdomain</Label>;
                      <div className="flex items - center">;
                        <Input;
                          id="subdomain";
                          name="subdomain";
                          value={form_data.subdomain}
                          on_change={handleInputChange}
                          placeholder={form_data.brand_name ? form_data.brand_name.toLowerCase ().replace (/[^a - z0 - 9]/g, '') : "company"}
                          className="rounded - r-none";
                        />;
                        <div className="bg - muted px - 3 py - 2 border border - l-0 border - input rounded - r-md text - muted - foreground">;
                          .ziontechmarketplace.com;
                        </div>;
                      </div>;
                      <p className="text - xs text - muted - foreground">;
                        Leave blank to auto - generate from company name;
                      </p>;
                    </div>;
                    <div className="space - y-2">;
                      <Label html_for="custom_domain">Custom Domain (Optional)</Label>;
                      <Input;
                        id="custom_domain";
                        name="custom_domain";
                        value={form_data.custom_domain}
                        on_change={handleInputChange}
                        placeholder="hire.yourcompany.com";
                      />;
                      <p className="text - xs text - muted - foreground">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        If you want to use your own domain, enter it here. You'll need to configure DNS records.;
                      </p>;
                    </div>;
                  </TabsContent>;
                </Tabs>;
<<<<<<< HEAD
<<<<<<< HEAD
                ;
                <div className="flex justify-end space-x-2">;
                  <Button type="button" variant="outline" onClick={() => window.history.back()}>;
                    Cancel;
                  </Button>;
                  <Button type="submit" disabled={isSubmitting}>;
                    {isSubmitting ? "Creating..." : "Create Tenant"}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                <div className="flex justify - end space - x-2">;
                  <Button type="button" variant="outline" on_click={() => window.history.back ()}>;
                    Cancel;
                  </Button>;
                  <Button type="submit" disabled={is_submitting}>;
                    {is_submitting ? "Creating..." : "Create Tenant"}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </Button>;
                </div>;
              </form>;
            </CardContent>;
          </Card>;
        </div>;
      </main>;
      <Footer />;




<<<<<<< HEAD
<<<<<<< HEAD
}
    </>);
    </>;
  ),; const [formData, setFormData] = useState ({
  brand name: "";
subdomain: "";
logo url: "";
primary color: " #9b87f5";
theme preset: " light";
company size: "";
industry: "";
custom domain: "";
is co branded: true 
});
//Check if user has admin role 
}const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {
  name, value 
}= e.target;
setFormData (prev => ({
  ...prev, [name]: value 
}) ) 
};
const handleSelectChange = (name: string, value: string) => {
  setFormData (prev => ({
  ...prev, [name]: value 
}) ) 
};
const handleSwitchChange = (name: string, checked: boolean) => {
  setFormData (prev => ({
  ...prev, [name]: checked 
}) ) 
};
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault ();
setIsSubmitting (true);
try {
  //Generate subdomain if not provided const subdomain = formData.subdomain || formData.brand name.toLowerCase () .replace (/[^a-z0-9]/g, '');
//Create landing page copy const landingPageCopy = {
  cta: "Get Started" 
};
data, error 
}= await supabase .from ('whitelabel tenants') .insert ({
  brand name: formData.brand name, subdomain: subdomain, custom domain: formData.custom domain || null, primary color: formData.primary color, logo url: formData.logo url || null, theme preset: formData.theme preset, landing page copy: landingPageCopy, is active: true, account manager id: user.id, dns verified: false, email template override: null 
}) .select ('id, brand name, subdomain') .single ();
if (error) throw error;
description: error.message 
}) 
}finally {
  setIsSubmitting (false) 
}
};
Tenant Onboarding - Zion AI Marketplace" description="Onboard a new white-label tenant to the Zion AI Marketplace platform." /> <Header /> <main className="flex-1 container max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8" > <div className="flex flex-col space-y-6" > <div> <h1 className="text-3xl font-bold tracking-tight" >Tenant Onboarding</h1> <p className="text-muted-foreground mt-2" > Create a new white-label instance of Zion Hire AI for a company. </p> </div> <Card> <CardHeader> <CardTitle>New Tenant Setup</CardTitle> <CardDescription> Configure the branding and details for the new white-label tenant. </CardDescription> </CardHeader> <CardContent> </TabsList> <TabsContent value="company" className="space-y-4" > <div className="space-y-2" > <Label htmlFor="brand name" >Company Name</Label> <Input required /> </div> <div className="space-y-2" > <Label htmlFor="industry" >Industry</Label> <Select > <SelectTrigger> <SelectValue placeholder="Select industry" /> </SelectTrigger> <SelectContent> <SelectItem value="technology" >Technology</SelectItem> <SelectItem value="healthcare" >Healthcare</SelectItem> <SelectItem value="finance" >Finance</SelectItem> <SelectItem value="education" >Education</SelectItem> <SelectItem value="retail" >Retail</SelectItem> <SelectItem value="manufacturing" >Manufacturing</SelectItem> <SelectItem value="services" >Professional Services</SelectItem> <SelectItem value="other" >Other</SelectItem> </SelectContent> </Select> </div> <div className="space-y-2" > <Label htmlFor="company size" >Company Size</Label> <Select > <SelectTrigger> <SelectValue placeholder="Select company size" /> </SelectTrigger> <SelectContent> <SelectItem value="1-10" >1-10 employees</SelectItem> <SelectItem value="11-50" >11-50 employees</SelectItem> <SelectItem value="51-200" >51-200 employees</SelectItem> <SelectItem value="201-500" >201-500 employees</SelectItem> <SelectItem value="501-1000" >501-1000 employees</SelectItem> <SelectItem value="1000+" >1000+ employees</SelectItem> </SelectContent> </Select> </div> </TabsContent> </p> </div> <div className="space-y-2" > <Label htmlFor="primary color" >Primary Brand Color</Label> <div className="flex items-center gap-2" > <Input /> </div> </div> <div className="space-y-2" > <Label htmlFor="theme preset" >Theme Preset</Label> <Select > <SelectTrigger> <SelectValue placeholder="Select theme" /> </SelectTrigger> <SelectContent> <SelectItem value="light" >Light</SelectItem> <SelectItem value="dark" >Dark</SelectItem> <SelectItem value="corporate" >Corporate</SelectItem> <SelectItem value="startup" >Startup</SelectItem> <SelectItem value="neon" >Neon</SelectItem> </SelectContent> </Select> </div> <div className="flex items-center justify-between" > <div className="space-y-0.5" > <Label htmlFor="is co branded" >Co-branding</Label> <p className="text-xs text-muted-foreground" > Show "Powered by Zion AI" in the footer and elsewhere </p> </div> <Switch /> </div> </TabsContent> <TabsContent value="domain" className="space-y-4" > <div className="space-y-2" > <Label htmlFor="subdomain" >Subdomain</Label> <div className="flex items-center" > <Input /> <div className="bg-muted px-3 py-2 border border-l-0 border-input rounded-r-md text-muted-foreground" > .ziontechmarketplace.com </div> </div> <p className="text-xs text-muted-foreground" > Leave blank to auto-generate from company name </p> </div> <div className="space-y-2" > <Label htmlFor="custom domain" >Custom Domain (Optional) </Label> <Input /> <p className="text-xs text-muted-foreground" > If you want to use your own domain, enter it here. You'll need to configure DNS records. </p> </div> </TabsContent> </Tabs> </Button> </div> </form> </CardContent> </Card> </div> </main> <Footer /> </>) 
}
    </>;
  );
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
