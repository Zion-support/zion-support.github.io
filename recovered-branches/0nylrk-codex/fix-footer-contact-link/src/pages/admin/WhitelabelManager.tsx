<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState("tenants");"
import React, { useState } from 'react','
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { SEO } from "@/components/SEO","
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm","
import { TenantsList } from "@/components/admin/whitelabel/TenantsList","
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",import { useAuth } from "@/hooks/useAuth";"
import { Navigate } from "react-router-dom";"
export default function WhitelabelManager() {
  }
  // Check if user has admin role,
const isAdmin = user?.role === "admin";"
  if (!isAdmin) {
}
return <Navigate to="/unauthorized" />;"
  }
return (;
import { Header } from "@/components/Header";"
import { Footer } from "@/components/Footer",;"
import { SEO } from "@/components/SEO",;"
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",;"
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",;"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
import { useAuth } from "@/hooks/useAuth",;"
import { Navigate } from "react-router-dom",;"
export default function WhitelabelManager() {;
  }
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("tenants"),;"
  // Check if user has admin role;
  if (!isAdmin) {;;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
            <TabsList className="mb-8">;"
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;"
            <TabsList className="mb-8">;"
                </p>;
                <table>;
                  <thead>;
                    <tr>;
=======
  const [activeTab, setActiveTab] = useState("tenants");

<<<<<<< HEAD
=======
<<<<<<< HEAD

  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (

import React, { useState } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
import { useAuth } from "@/hooks/useAuth";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Navigate } from "react-router-dom";
export default function WhitelabelManager() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("tenants");
<<<<<<< HEAD
=======
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
=======
  // Check if user has admin role;
  const isAdmin = user?.role === "admin";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  }
  return (

import React, { useState } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",

import { Navigate } from "react-router-dom";
export default function WhitelabelManager() {};
  const { user } = useAuth();"
  const [activeTab, setActiveTab] = useState("tenants");

  // Check if user has admin role

  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
  }
  return (

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

                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

      </main>
      <Footer />

    </>

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />;
  }
;
  return (;
<<<<<<< HEAD
  }
  return (
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <>;
      <SEO
        title="White-Label Management - Zion AI Marketplace"
        description="Create and manage white-label instances of the Zion AI Marketplace platform."
<<<<<<< HEAD

=======
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
    <>;
      <SEO;
        title="White-Label Management - Zion AI Marketplace";
        description="Create and manage white-label instances of the Zion AI Marketplace platform.";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
=======

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
<<<<<<< HEAD

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">;
            <TabsList className="mb-8">;

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;

              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
<th>Record Type</th>;
                      <th>Name</th>;
                      <th>Value</th>;
                      <th>TTL</th>;
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                </p>;
                <table>;
                  <thead>;
                    <tr>;
<<<<<<< HEAD
                      <th>Record Type</th>;
                      <th>Name</th>;
                      <th>Value</th>;
                      <th>TTL</th>;
=======

                      <th > Record Type</th>;
                      <th > Name</th>;
                      <th > Value</th>;
                      <th > TTL</th>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                    </tr>;
                  </thead>;
                  <tbody>;
</tbody>
                    <tr>;
<<<<<<< HEAD
</tr>
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
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
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  including content, users, and analytics. Tenant admins cannot access data from other tenants.;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                </p>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;

<<<<<<< HEAD
=======



<<<<<<< HEAD
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
}
;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
</>);
}
</Footer>
    </>);
}
<<<<<<< HEAD

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

}White-Label Management - Zion AI Marketplace"description=" Create and manage white-label instances of the Zion AI Marketplace platform."/> <Header /> <main className=" flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8"> <div className=" flex flex-col space-y-6"> <div> <h1 className=" text-3xl font-bold tracking-tight">White-Label Management</h1> <p className=" text-muted-foreground mt-2"> Create and manage branded versions of the platform for agencies, startups, and enterprise clients. </p> </div> </TabsList> <TabsContent value=" tenants"className=" space-y-6"> <TenantsList /> </TabsContent> <TabsContent value=" create"className=" flex justify-center"> <WhitelabelRequestForm /> </TabsContent> <TabsContent value=" docs"className=" space-y-6"> <div className=" prose dark:prose-invert max-w-none" > <h2>White-Label Documentation</h2> <h3>DNS Configuration</h3> <p> To use a custom domain with your white-label instance, you need to configure the DNS records. Add a CNAME record pointing to <code>ziontechmarketplace.com</code>. </p> <table> <thead> <tr> <th>Record Type</th> <th>Name</th> <th>Value</th> <th>TTL</th> </tr> </thead> <tbody> <tr> <td>CNAME</td> <td>marketplace</td> <td>ziontechmarketplace.com</td> <td>3600</td> </tr> </tbody> </table> <h3>Email Templates</h3> <p> White-label instances can use customized email templates. You can upload HTML templates for the following emails: </p> <ul> <li>Welcome Email</li> <li>Password Reset</li> <li>Quote Request</li> <li>Invoice</li> <li>Receipt</li> </ul> <h3>Admin Access</h3> <p> You can assign tenant administrators who will have access to manage their white-label instance;
including content, users, and analytics. Tenant admins cannot access data from other tenants. </p> </div> </TabsContent> </Tabs> </div> </main> <Footer /> </>) 
}
    </>;
  );

}

}
;

}
;
    </>);
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
