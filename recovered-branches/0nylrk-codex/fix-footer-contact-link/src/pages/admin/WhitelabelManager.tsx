

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

              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;

              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;



                    </tr>;
                  </thead>;
                  <tbody>;
</tbody>
                    <tr>;


                </p>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;







}
</>);
}
</Footer>
    </>);
}




