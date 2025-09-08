


      return <div>Something went wrong.</div>;




    const { name, value } = e.target,
    setFormData(prev => ({ ...prev, [name]: value }))

      



        .select('id, brand_name, subdomain')
      
    } catch (error: any) {




            <CardContent>;
              <form onSubmit={handleSubmit} className="space-y-6">;
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
                  <TabsList className="mb-4 grid grid-cols-3 w-full">;


                    <TabsTrigger value="company">Company Info</TabsTrigger>;
                    <TabsTrigger value="branding">Branding</TabsTrigger>;
                    <TabsTrigger value="domain">Domain Setup</TabsTrigger>;
                  </TabsList>;


                      />;
                    </div>;

                    <div className="space-y-2">;
                      <Label htmlFor="industry">Industry</Label>;
                      <Select
                        name="industry" 
                        value={formData && formData.industry} 
                        onValueChange={(value) => handleSelectChange("industry", value)}


                      <Label html_for="company_size">Company Size</Label>;
                      <Select;
                        name="company_size";
                        value={form_data.company_size}
                        onValueChange={(value) => handleSelectChange ("company_size", value)}


                    <div className=\"space-y-2\" />;
                      <Label htmlFor=\"theme_preset\" />Theme Preset</Label>;
                      <Select;
name=\"theme_preset\" 
                        value={formData && formData.theme_preset} 
                        onValueChange={(value) = /> handleSelectChange(\"theme_preset\", value)}                        placeholder=\"hire && hire.yourcompany.com\"
                        placeholder=\"hire && hire.yourcompany.com\"
import React, { useState } from \"react\";
import { Header } from \"@/components/Header\";
import { Footer } from \"@/components/Footer\",;
import { SEO } from \"@/components/SEO\",;
import { useAuth } from \"@/hooks/useAuth\",;
import { Navigate } from \"react-router-dom\",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from \"@/components/ui/card\",;
import { Input } from \"@/components/ui/input\",;
import { Label } from \"@/components/ui/label\",;
import { Button } from \"@/components/ui/button\",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from \"@/components/ui/tabs\",;
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from \"@/components/ui/select\",;
import { toast } from \"sonner\",;
import { supabase } from \"@/integrations/supabase/client\",;
import { Switch } from \"@/components/ui/switch\",;
export default function TenantOnboarding() {;}


  const isAdmin = user?.role === \"admin\",;
  if (!isAdmin) {;}
    return <Navigate to=\"/unauthorized\" />;}


  const handleSelectChange = (;) => {
  return $3;}
}
    setFormData(prev => ({ ...prev, [name]: value }));
  },;
  const handleSwitchChange = (;) => {
  return $3;}
}


      const landingPageCopy = {;"
        headline: "AI Hiring Assistant",;"`
        subtitle: `Find the best talent for your ${formData.industry || "company"}`,;"
        cta: "Get Started";
      const landingPageCopy = {;}
        headline: \"AI Hiring Assistant\",;}
        subtitle: `Find the best talent for your ${formData.industry || \"company\"}`,;
        cta: \"Get Started\";
      },;
      // Submit to Supabase;
      const { data, error } = await supabase;'
        .from('whitelabel_tenants');











