<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { Navigate } from "react-router-dom";
export default function WhitelabelManager() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("tenants");
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
  // Check if user has admin role;
  const isAdmin = user?.role === "admin";

  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />;
  }
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",import { useAuth } from "@/hooks/useAuth";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import React, { useState } from "react";"
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer";"
import { SEO } from "@/components/SEO";"
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm";"
import { TenantsList } from "@/components/admin/whitelabel/TenantsList";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import { useAuth } from "@/hooks/useAuth";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Navigate } from "react-router-dom";
export default function WhitelabelManager() {};
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState("tenants");
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  // Check if user has admin role
const isAdmin = user?.role === "admin",

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (

<<<<<<< HEAD
                  including content, users, and analytics. Tenant admins cannot access data from other tenants.
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-8">
              <TabsTrigger value="tenants">Tenants</TabsTrigger>
              <TabsTrigger value="create">Create New</TabsTrigger>
              <TabsTrigger value="docs">Documentation</TabsTrigger>
            </TabsList>

            <TabsContent value="tenants" className="space-y-6">
              <TenantsList />
            </TabsContent>

            <TabsContent value="create" className="flex justify-center">
              <WhitelabelRequestForm />
            </TabsContent>

            <TabsContent value="docs" className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h2>White-Label Documentation</h2>
                <h3>DNS Configuration</h3>
                <p>
                  To use a custom domain with your white-label instance, you
                  need to configure the DNS records. Add a CNAME record pointing
                  to <code>ziontechmarketplace.com</code>.
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
                  White-label instances can use customized email templates. You
                  can upload HTML templates for the following emails:
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
                  You can assign tenant administrators who will have access to
                  manage their white-label instance, including content, users,
                  and analytics. Tenant admins cannot access data from other
                  tenants.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
    <>;
      <SEO
        title="White-Label Management - Zion AI Marketplace"
        description="Create and manage white-label instances of the Zion AI Marketplace platform."
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
<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
}
;
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;
              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  }
  return (
              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;
              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;
}"

    <>;
        title="White - Label Management - Zion AI Marketplace";""
        description="Create and manage white - label instances of the Zion AI Marketplace platform.";"
      />;

      <Header />;
      <main className="flex - 1 container max - w-7xl mx - auto py - 10 px - 4 sm:px - 6 lg:px - 8">;"
        <div className="flex flex - col space - y-6">;"
          <div>;
            <h1 className="text - 3xl font - bold tracking - tight">White - Label Management</h1>;""
            <p className="text - muted - foreground mt - 2">;"
            </p>;
          </div>;"
          <Tabs value={active_tab} onValueChange={setActiveTab} className="w - full">;"
            <TabsList className="mb - 8">;"
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
            <TabsList className="mb-8">;"
              <TabsTrigger value="tenants">Tenants;""
              <TabsTrigger value="create">Create New;""
              <TabsTrigger value="docs">Documentation;"
            ;"
            <TabsContent value="tenants" className="space - y-6">;"

              <TenantsList />;

            <TabsContent value="create" className="flex justify - center">;"

              <WhitelabelRequestForm />;

            <TabsContent value="docs" className="space - y-6">;"
              <div className="prose dark:prose - invert max - w-none">;"
                <h2 > White - Label Documentation</h2>;
                <h3 > DNS Configuration</h3>;
                <p>;
                  Add a CNAME record pointing to <code > ziontechmarketplace.com</code>.;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                </p>;
                <table>;
                  <thead>;
                    <tr>;
pr-12325
                <table>;
                  <thead>;
                    <tr>;
</tr>

<th > Record Type</th>;
                      <th > Name</th>;
                      <th > Value</th>;
<<<<<<< HEAD
                      <th > TTL</th>;                  including content, users, and analytics. Tenant admins cannot access data from other tenants.;
                      <th > TTL</th>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<th>Record Type</th>;
                      <th>Name</th>;
                      <th>Value</th>;
                      <th>TTL</th>;
                    </tr>;
                  </thead>;
                  <tbody>;
</tbody>
                    <tr>;
</tr>

including content, users, and analytics. Tenant admins cannot access data from other tenants.;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </p>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
    </>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}
</>);
}
</Footer>
    </>);
}

}
    </>);
}
                      <th > TTL</th>;
                    </tr>;
                  </thead>;
                  <tbody>;

                      <td > CNAME</td>;
                      <td > marketplace</td>;
                      <td > ziontechmarketplace.com</td>;
                      <td > 3600</td>;
                  </tbody>;
                </table>;
                <h3 > Email Templates</h3>;
                <ul>;
                  <li > Welcome Email</li>;
                  <li > Password Reset</li>;
                  <li > Quote Request</li>;
                  <li > Invoice</li>;
                  <li > Receipt</li>;
                </ul>;
                <h3 > Admin Access</h3>;
              </div>;
            ;
      </main>;
      <Footer />;

pr-12325
    </>);
}
    </>;
  ),;}
"
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}
;
</>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
;
    </>);
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
