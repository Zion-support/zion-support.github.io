

import React, { useState } from 'react',
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",

  // Check if user has admin role
  const isAdmin = user?.role === "admin",

  if (!isAdmin) {
    return <Navigate to="/unauthorized" />
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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

}
;
              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;
              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;

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

                </p>;
                <table>;
                  <thead>;
                    <tr>;

                      <th > Record Type</th>;
                      <th > Name</th>;
                      <th > Value</th>;
                      <th > TTL</th>;

                    </tr>;
                  </thead>;
                  <tbody>;
                    <tr>;

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

                  including content, users, and analytics. Tenant admins cannot access data from other tenants.;
                </p>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
