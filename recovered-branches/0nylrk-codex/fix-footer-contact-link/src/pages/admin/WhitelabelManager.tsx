<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx

<<<<<<< HEAD

import React, { useState } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

  // Check if user has admin role
  const isAdmin = user?.role === "admin",
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
  // Check if user has admin role;
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return (

<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function WhitelabelManager() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("tenants");
  // Check if user has admin role

  const isAdmin = user?.role === "admin";
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function WhitelabelManager() {
  const { user } = useAuth(),
  const [activeTab, setActiveTab] = useState("tenants"),
  
  // Check if user has admin role
  const isAdmin = user?.role === "admin",
  
  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (
    <>
      <SEO
        title="White-Label Management - Zion AI Marketplace"
        description="Create and manage white-label instances of the Zion AI Marketplace platform."
      />
      <Header />
      <main className="flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">White-Label Management</h1>
            <p className="text-muted-foreground mt-2">
              Create and manage branded versions of the platform for agencies, startups, and enterprise clients.
            </p>
          </div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
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
                  You can assign tenant administrators who will have access to manage their white-label instance

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
  }
  return (
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
    <>;
      <SEO
        title="White-Label Management - Zion AI Marketplace"
        description="Create and manage white-label instances of the Zion AI Marketplace platform."
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    <>;
      <SEO;
        title="White-Label Management - Zion AI Marketplace";
        description="Create and manage white-label instances of the Zion AI Marketplace platform.";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
import React, { useState } from 'react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { SEO } from '@/components / SEO';
import { WhitelabelRequestForm } from '@/components / admin / whitelabel / WhitelabelRequestForm';
import { TenantsList } from '@/components / admin / whitelabel / TenantsList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
export default /**
 * WhitelabelManager - Function description
 */
function WhitelabelManager() {
  const { user } = use_auth ();
  const [active_tab, setActiveTab] = useState ("tenants");
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
=======
;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;
              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx

========
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
=======
            <TabsContent value="tenants" className="space-y-6">;
              <TenantsList />;
            </TabsContent>;
            <TabsContent value="create" className="flex justify-center">;
              <WhitelabelRequestForm />;
            </TabsContent>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <TabsContent value="docs" className="space-y-6">;
              <div className="prose dark:prose-invert max-w-none">;
                <h2>White-Label Documentation</h2>;
                <h3>DNS Configuration</h3>;
                <p>;
<<<<<<< HEAD
                  To use a custom domain with your white-label instance, you need to configure the DNS records. ;
                  Add a CNAME record pointing to <code>ziontechmarketplace.com</code>.;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
=======
                  To use a custom domain with your white-label instance, you need to configure the DNS records.;
                  Add a CNAME record pointing to <code>ziontechmarketplace.com</code>.;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </p>;
                <table>;
                  <thead>;
                    <tr>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
                      <th > Record Type</th>;
                      <th > Name</th>;
                      <th > Value</th>;
                      <th > TTL</th>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <th>Record Type</th>;
                      <th>Name</th>;
                      <th>Value</th>;
                      <th>TTL</th>;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </tr>;
                  </thead>;
                  <tbody>;
                    <tr>;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx

========
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <td>CNAME</td>;
                      <td>marketplace</td>;
                      <td>ziontechmarketplace.com</td>;
                      <td>3600</td>;
                    </tr>;
                  </tbody>;
                </table>;
<<<<<<< HEAD
                ;
                <h3>Email Templates</h3>;
                <p>;
                  White-label instances can use customized email templates. You can upload HTML templates ;
=======
                <h3>Email Templates</h3>;
                <p>;
                  White-label instances can use customized email templates. You can upload HTML templates;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  for the following emails:;
                </p>;
                <ul>;
                  <li>Welcome Email</li>;
                  <li>Password Reset</li>;
                  <li>Quote Request</li>;
                  <li>Invoice</li>;
                  <li>Receipt</li>;
                </ul>;
<<<<<<< HEAD
                ;
                <h3>Admin Access</h3>;
                <p>;
                  You can assign tenant administrators who will have access to manage their white-label instance, ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
=======
                <h3>Admin Access</h3>;
                <p>;
                  You can assign tenant administrators who will have access to manage their white-label instance;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  including content, users, and analytics. Tenant admins cannot access data from other tenants.;
                </p>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    </>);
}
=======
    </>;
  ),;}
 
}White-Label Management - Zion AI Marketplace"description=" Create and manage white-label instances of the Zion AI Marketplace platform."/> <Header /> <main className=" flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8"> <div className=" flex flex-col space-y-6"> <div> <h1 className=" text-3xl font-bold tracking-tight">White-Label Management</h1> <p className=" text-muted-foreground mt-2"> Create and manage branded versions of the platform for agencies, startups, and enterprise clients. </p> </div> </TabsList> <TabsContent value=" tenants"className=" space-y-6"> <TenantsList /> </TabsContent> <TabsContent value=" create"className=" flex justify-center"> <WhitelabelRequestForm /> </TabsContent> <TabsContent value=" docs"className=" space-y-6"> <div className=" prose dark:prose-invert max-w-none" > <h2>White-Label Documentation</h2> <h3>DNS Configuration</h3> <p> To use a custom domain with your white-label instance, you need to configure the DNS records. Add a CNAME record pointing to <code>ziontechmarketplace.com</code>. </p> <table> <thead> <tr> <th>Record Type</th> <th>Name</th> <th>Value</th> <th>TTL</th> </tr> </thead> <tbody> <tr> <td>CNAME</td> <td>marketplace</td> <td>ziontechmarketplace.com</td> <td>3600</td> </tr> </tbody> </table> <h3>Email Templates</h3> <p> White-label instances can use customized email templates. You can upload HTML templates for the following emails: </p> <ul> <li>Welcome Email</li> <li>Password Reset</li> <li>Quote Request</li> <li>Invoice</li> <li>Receipt</li> </ul> <h3>Admin Access</h3> <p> You can assign tenant administrators who will have access to manage their white-label instance;
including content, users, and analytics. Tenant admins cannot access data from other tenants. </p> </div> </TabsContent> </Tabs> </div> </main> <Footer /> </>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/admin/WhitelabelManager.tsx
=======
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
