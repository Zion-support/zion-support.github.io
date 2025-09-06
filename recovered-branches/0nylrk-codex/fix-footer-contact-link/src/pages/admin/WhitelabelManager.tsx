<<<<<<< HEAD

<<<<<<< HEAD

=======
<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from 'react';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {SEO} from "@/components/SEO";
import {WhitelabelRequestForm} from "@/components/admin/whitelabel/WhitelabelRequestForm";
import {TenantsList} from "@/components/admin/whitelabel/TenantsList";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function WhitelabelManager() {;
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("tenants");
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD
  // Check if user has admin role;
  const isAdmin = user?.role === "admin";

  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />;

=======


  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (

=======


=======
=======

  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

  // Check if user has admin role
  const isAdmin = user?.role === "admin",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  // Check if user has admin role;
  const isAdmin = user?.role === "admin";
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function WhitelabelManager() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("tenants"),
  
  // Check if user has admin role
  const isAdmin = user?.role === "admin",
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (

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

<<<<<<< HEAD
=======

}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",;
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
export default function WhitelabelManager() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("tenants"),;
  // Check if user has admin role;
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD

=======
  }
  return (
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <>;
      <SEO
        title="White-Label Management - Zion AI Marketplace"
        description="Create and manage white-label instances of the Zion AI Marketplace platform."
<<<<<<< HEAD
<<<<<<< HEAD
=======

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
    <>;
      <SEO;
        title="White-Label Management - Zion AI Marketplace";
        description="Create and manage white-label instances of the Zion AI Marketplace platform.";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
}
<<<<<<< HEAD
;
=======
    return <Navigate to="/unauthorized" />;
  }
  return (
    <>;
      <SEO;
        title="White - Label Management - Zion AI Marketplace";
        description="Create and manage white - label instances of the Zion AI Marketplace platform.";
      />;
      <Header />;
      <main className="flex - 1 container max - w-7xl mx - auto py - 10 px - 4 sm:px - 6 lg:px - 8">;
        <div className="flex flex - col space - y-6">;
          <div>;
            <h1 className="text - 3xl font - bold tracking - tight">White - Label Management</h1>;
            <p className="text - muted - foreground mt - 2">;
              Create and manage branded versions of the platform for agencies, startups, and enterprise clients.;
            </p>;
          </div>;
          <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;
            <TabsList className="mb - 8">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;
              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
<<<<<<< HEAD

            <TabsContent value="tenants" className="space - y-6">;
              <TenantsList />;
            </TabsContent>;
            <TabsContent value="create" className="flex justify - center">;
              <WhitelabelRequestForm />;
            </TabsContent>;
            <TabsContent value="docs" className="space - y-6">;
              <div className="prose dark:prose - invert max - w-none">;
                <h2 > White - Label Documentation</h2>;
                <h3 > DNS Configuration</h3>;
                <p>;
                  To use a custom domain with your white - label instance, you need to configure the DNS records.;
                  Add a CNAME record pointing to <code > ziontechmarketplace.com</code>.;

=======
            ;
            <TabsContent value="tenants" className="space-y-6">;
              <TenantsList />;
            </TabsContent>;
            ;
            <TabsContent value="create" className="flex justify-center">;
              <WhitelabelRequestForm />;
            </TabsContent>;
            ;
            <TabsContent value="tenants" className="space-y-6">;
              <TenantsList />;
            </TabsContent>;
            <TabsContent value="create" className="flex justify-center">;
              <WhitelabelRequestForm />;
            </TabsContent>;
            <TabsContent value="docs" className="space-y-6">;
              <div className="prose dark:prose-invert max-w-none">;
                <h2>White-Label Documentation</h2>;
                <h3>DNS Configuration</h3>;
                <p>;
                  To use a custom domain with your white-label instance, you need to configure the DNS records.;
                  Add a CNAME record pointing to <code>ziontechmarketplace.com</code>.;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                </p>;
                <table>;
                  <thead>;
                    <tr>;
<<<<<<< HEAD
<<<<<<< HEAD

                      <th > Record Type</th>;
                      <th > Name</th>;
                      <th > Value</th>;
                      <th > TTL</th>;

=======
                      <th>Record Type</th>;
                      <th>Name</th>;
                      <th>Value</th>;
                      <th>TTL</th>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                    </tr>;
                  </thead>;
                  <tbody>;
                    <tr>;
<<<<<<< HEAD
<<<<<<< HEAD

                      <td > CNAME</td>;
                      <td > marketplace</td>;
                      <td > ziontechmarketplace.com</td>;
                      <td > 3600</td>;
                    </tr>;
                  </tbody>;
                </table>;
                <h3 > Email Templates</h3>;
                <p>;
                  White - label instances can use customized email templates. You can upload HTML templates;
                  for the following emails:;
                </p>;
                <ul>;
                  <li > Welcome Email</li>;
                  <li > Password Reset</li>;
                  <li > Quote Request</li>;
                  <li > Invoice</li>;
                  <li > Receipt</li>;
                </ul>;
                <h3 > Admin Access</h3>;
                <p>;
                  You can assign tenant administrators who will have access to manage their white - label instance,

=======
                      <td>CNAME</td>;
                      <td>marketplace</td>;
                      <td>ziontechmarketplace.com</td>;
                      <td>3600</td>;
                    </tr>;
                  </tbody>;
                </table>;
                <h3>Email Templates</h3>;
                <p>;
                  White-label instances can use customized email templates. You can upload HTML templates;
                  for the following emails:;
                </p>;
                <ul>;
                  <li>Welcome Email</li>;
                  <li>Password Reset</li>;
                  <li>Quote Request</li>;
                  <li>Invoice</li>;
                  <li>Receipt</li>;
                </ul>;
                <h3>Admin Access</h3>;
                <p>;
                  You can assign tenant administrators who will have access to manage their white-label instance;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                  including content, users, and analytics. Tenant admins cannot access data from other tenants.;
                </p>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
    </>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======




<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
    </>);
}
    </>);
}
    </>;
  ),;}
 
}White-Label Management - Zion AI Marketplace"description=" Create and manage white-label instances of the Zion AI Marketplace platform."/> <Header /> <main className=" flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8"> <div className=" flex flex-col space-y-6"> <div> <h1 className=" text-3xl font-bold tracking-tight">White-Label Management</h1> <p className=" text-muted-foreground mt-2"> Create and manage branded versions of the platform for agencies, startups, and enterprise clients. </p> </div> </TabsList> <TabsContent value=" tenants"className=" space-y-6"> <TenantsList /> </TabsContent> <TabsContent value=" create"className=" flex justify-center"> <WhitelabelRequestForm /> </TabsContent> <TabsContent value=" docs"className=" space-y-6"> <div className=" prose dark:prose-invert max-w-none" > <h2>White-Label Documentation</h2> <h3>DNS Configuration</h3> <p> To use a custom domain with your white-label instance, you need to configure the DNS records. Add a CNAME record pointing to <code>ziontechmarketplace.com</code>. </p> <table> <thead> <tr> <th>Record Type</th> <th>Name</th> <th>Value</th> <th>TTL</th> </tr> </thead> <tbody> <tr> <td>CNAME</td> <td>marketplace</td> <td>ziontechmarketplace.com</td> <td>3600</td> </tr> </tbody> </table> <h3>Email Templates</h3> <p> White-label instances can use customized email templates. You can upload HTML templates for the following emails: </p> <ul> <li>Welcome Email</li> <li>Password Reset</li> <li>Quote Request</li> <li>Invoice</li> <li>Receipt</li> </ul> <h3>Admin Access</h3> <p> You can assign tenant administrators who will have access to manage their white-label instance;
including content, users, and analytics. Tenant admins cannot access data from other tenants. </p> </div> </TabsContent> </Tabs> </div> </main> <Footer /> </>) 
}
    </>;
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
;
    </>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
