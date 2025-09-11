
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======


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
=======  const [formData, setFormData] = useState({;
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
      // Submit to Supabase;
      const { data, error } = await supabase;
        .from('whitelabel_tenants');
        .insert({;
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
=======  }),
  
  // Check if user has admin role
  const isAdmin = user?.role === "admin",
  
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  },
  
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
      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      // Create landing page copy
      const landingPageCopy = {
        headline: "AI Hiring Assistant"
        subtitle: `Find the best talent for your ${formData.industry |"company"}`
        cta: "Get Started"
      }
      },
      
=======

      },
      
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======        .single(),
      
      if (error) throw error,
      
      toast.success("Tenant created successfully!", {
        description: `${data.brand_name} is now available at ${data.subdomain}.ziontechmarketplace.com`
      }),
      
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======      // Reset form
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      })
    } finally {
      setIsSubmitting(false)
    }
    }
  }
  return (
=======
  return (
=======
  }
  },

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <>;
      <SEO
        title="Tenant Onboarding - Zion AI Marketplace"
        description="Onboard a new white-label tenant to the Zion AI Marketplace platform."
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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
