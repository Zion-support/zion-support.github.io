
<<<<<<< HEAD
import React, { useState } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function WhitelabelManager() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("tenants"),
  
  // Check if user has admin role
  const isAdmin = user?.role === "admin",
  
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
=======
import React, { useState } from 'react';
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { WhitelabelRequestForm } from &quot;@/components/admin/whitelabel/WhitelabelRequestForm&quot;;
import { TenantsList } from &quot;@/components/admin/whitelabel/TenantsList&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate } from &quot;react-router-dom&quot;;

export default function WhitelabelManager() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(&quot;tenants&quot;);
  
  // Check if user has admin role
  const isAdmin = user?.role === &quot;admin&quot;;
  
  if (!isAdmin) {
    return <Navigate to=&quot;/unauthorized&quot; />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  return (
    <>
      <SEO 
        title=&quot;White-Label Management - Zion AI Marketplace&quot;
        description=&quot;Create and manage white-label instances of the Zion AI Marketplace platform.&quot;
      />
      <Header />
      <main className=&quot;flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex flex-col space-y-6&quot;>
          <div>
            <h1 className=&quot;text-3xl font-bold tracking-tight&quot;>White-Label Management</h1>
            <p className=&quot;text-muted-foreground mt-2&quot;>
              Create and manage branded versions of the platform for agencies, startups, and enterprise clients.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;w-full&quot;>
            <TabsList className=&quot;mb-8&quot;>
              <TabsTrigger value=&quot;tenants&quot;>Tenants</TabsTrigger>
              <TabsTrigger value=&quot;create&quot;>Create New</TabsTrigger>
              <TabsTrigger value=&quot;docs&quot;>Documentation</TabsTrigger>
            </TabsList>
            
            <TabsContent value=&quot;tenants&quot; className=&quot;space-y-6&quot;>
              <TenantsList />
            </TabsContent>
            
            <TabsContent value=&quot;create&quot; className=&quot;flex justify-center&quot;>
              <WhitelabelRequestForm />
            </TabsContent>
            
            <TabsContent value=&quot;docs&quot; className=&quot;space-y-6&quot;>
              <div className=&quot;prose dark:prose-invert max-w-none&quot;>
                <h2>White-Label Documentation</h2>
                <h3>DNS Configuration</h3>
                <p>
                  To use a custom domain with your white-label instance, you need to configure the DNS records. 
                  Add a CNAME record pointing to <code>ziontechmarketplace.com</code>.
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Record Type</th>
                      <th>Name</th>
                      <th>Value</th>
                      <th>TTL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CNAME</td>
                      <td>marketplace</td>
                      <td>ziontechmarketplace.com</td>
                      <td>3600</td>
                    </tr>
                  </tbody>
                </table>
                
                <h3>Email Templates</h3>
                <p>
                  White-label instances can use customized email templates. You can upload HTML templates 
                  for the following emails:
                </p>
                <ul>
                  <li>Welcome Email</li>
                  <li>Password Reset</li>
                  <li>Quote Request</li>
                  <li>Invoice</li>
                  <li>Receipt</li>
                </ul>
                
                <h3>Admin Access</h3>
                <p>
                  You can assign tenant administrators who will have access to manage their white-label instance, 
                  including content, users, and analytics. Tenant admins cannot access data from other tenants.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  )
}
