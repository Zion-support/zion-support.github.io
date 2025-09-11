
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { InvoiceHistory } from "./InvoiceHistory";
import { UsageOverview } from "./UsageOverview";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Tabs defaultValue="subscription" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoice History</TabsTrigger>
          <TabsTrigger value="usage">Usage Overview</TabsTrigger>
        </TabsList>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======        
        <TabsContent value="subscription" className="space-y-8">
          <CurrentSubscription />
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-8">
          <PaymentMethods />
        </TabsContent>
        
        <TabsContent value="invoices" className="space-y-8">
          <InvoiceHistory />
        </TabsContent>
        
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <TabsContent value="usage" className="space-y-8">
          <UsageOverview />
        </TabsContent>
      </Tabs>
import React from "react",;
import { BillingHeader } from "./BillingHeader",;
import { CurrentSubscription } from "./CurrentSubscription",;
import { PaymentMethods } from "./PaymentMethods",;
import { InvoiceHistory } from "./InvoiceHistory",;
import { UsageOverview } from "./UsageOverview",;
import {;
  Tabs,;
  TabsContent,;
  TabsList,;
  TabsTrigger} from "@/components/ui/tabs",;
;
export function BillingDashboard() {;
  return (;
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">;
      <BillingHeader />;
      ;
      <Tabs defaultValue="subscription" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
=======
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <BillingHeader />;
      <Tabs defaultValue="subscription" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <BillingHeader />;

      <Tabs defaultValue="subscription" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;=======
import React from './react';
import { BillingHeader  } from './BillingHeader';
import { CurrentSubscription  } from './CurrentSubscription';
import { PaymentMethods  } from './PaymentMethods';
import { InvoiceHistory  } from './InvoiceHistory';
import { UsageOverview  } from './UsageOverview';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components / ui / tabs';
;
export /**
 * BillingDashboard - Function description
 */
function BillingDashboard() {
  return (
    <div className="container mx - auto max - w-7xl py - 8 px - 4 md: px - 6">;
      <BillingHeader />;
      <Tabs default_value="subscription" className="mt - 8">;
        <TabsList className="grid w - full grid - cols - 4 mb - 8">;

}
        ;
        <TabsContent value="subscription" className="space-y-8">;
          <CurrentSubscription />;
        </TabsContent>;
        ;
        <TabsContent value="payment" className="space-y-8">;
          <PaymentMethods />;
        </TabsContent>;
        ;
        <TabsContent value="invoices" className="space-y-8">;
          <InvoiceHistory />;
        </TabsContent>;
        ;
        <TabsContent value="subscription" className="space-y-8">;
          <CurrentSubscription />;
        </TabsContent>;
        <TabsContent value="payment" className="space-y-8">;
          <PaymentMethods />;
        </TabsContent>;
        <TabsContent value="invoices" className="space-y-8">;
          <InvoiceHistory />;
        </TabsContent>;
        <TabsContent value="usage" className="space-y-8">;
          <UsageOverview />;
        </TabsContent>;
      </Tabs>;
    </div>;
  );
}
;
=======
=======        <TabsContent value="subscription" className="space - y-8">;
          <CurrentSubscription />;
        </TabsContent>;
        <TabsContent value="payment" className="space - y-8">;
          <PaymentMethods />;
        </TabsContent>;
        <TabsContent value="invoices" className="space - y-8">;
          <InvoiceHistory />;
        </TabsContent>;
        <TabsContent value="usage" className="space - y-8">;
          <UsageOverview />;
        </TabsContent>;
      </Tabs>;
    </div>);

}
=======

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
