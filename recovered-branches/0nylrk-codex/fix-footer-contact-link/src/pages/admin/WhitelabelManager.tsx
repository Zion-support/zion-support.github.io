
<<<<<<< HEAD
import React, { useState } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",;
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
;
export default function WhitelabelManager() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("tenants"),;
  ;
  // Check if user has admin role;
  const isAdmin = user?.role === "admin",;
  ;
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />,;
  }
;
  return (;
    <>;
      <SEO ;
        title="White-Label Management - Zion AI Marketplace";
        description="Create and manage white-label instances of the Zion AI Marketplace platform.";
      />;
      <Header />;
      <main className="flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">;
        <div className="flex flex-col space-y-6">;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">White-Label Management</h1>;
            <p className="text-muted-foreground mt-2">;
              Create and manage branded versions of the platform for agencies, startups, and enterprise clients.;
            </p>;
          </div>;
;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;
              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;
            ;
            <TabsContent value="tenants" className="space-y-6">;
              <TenantsList />;
            </TabsContent>;
            ;
            <TabsContent value="create" className="flex justify-center">;
              <WhitelabelRequestForm />;
            </TabsContent>;
            ;
            <TabsContent value="docs" className="space-y-6">;
              <div className="prose dark:prose-invert max-w-none">;
                <h2>White-Label Documentation</h2>;
                <h3>DNS Configuration</h3>;
                <p>;
                  To use a custom domain with your white-label instance, you need to configure the DNS records. ;
                  Add a CNAME record pointing to <code>ziontechmarketplace.com</code>.;
                </p>;
                <table>;
                  <thead>;
                    <tr>;
                      <th>Record Type</th>;
                      <th>Name</th>;
                      <th>Value</th>;
                      <th>TTL</th>;
                    </tr>;
                  </thead>;
                  <tbody>;
                    <tr>;
                      <td>CNAME</td>;
                      <td>marketplace</td>;
                      <td>ziontechmarketplace.com</td>;
                      <td>3600</td>;
                    </tr>;
                  </tbody>;
                </table>;
                ;
                <h3>Email Templates</h3>;
                <p>;
                  White-label instances can use customized email templates. You can upload HTML templates ;
                  for the following emails:;
                </p>;
                <ul>;
                  <li>Welcome Email</li>;
                  <li>Password Reset</li>;
                  <li>Quote Request</li>;
                  <li>Invoice</li>;
                  <li>Receipt</li>;
                </ul>;
                ;
                <h3>Admin Access</h3>;
                <p>;
                  You can assign tenant administrators who will have access to manage their white-label instance, ;
                  including content, users, and analytics. Tenant admins cannot access data from other tenants.;
                </p>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;
    </>;
  ),;
=======
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
    return <Navigate to="/unauthorized" />  }
import React, {_useState} from 'react';

export default function WhitelabelManager() {_const { user} = useAuth();
  const [activeTab, setActiveTab] = useState("tenants");
  
  // Check if user has admin role
  const _isAdmin = user?.role === "admin";
  
  if (!isAdmin) {_return <Navigate to="/unauthorized" />;}

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
              <TabsTrigger value=&quot;docs&quot;>Documentation</TabsTrigger>            </TabsList>
            
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
