<<<<<<< HEAD

<<<<<<< HEAD
=======

=======

<<<<<<< HEAD
=======
import React from "react",
import { BillingHeader } from "./BillingHeader",
import { CurrentSubscription } from "./CurrentSubscription",
import { PaymentMethods } from "./PaymentMethods",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import { BillingHeader } from "./BillingHeader";
import { CurrentSubscription } from "./CurrentSubscription";
import { PaymentMethods } from "./PaymentMethods";
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { InvoiceHistory } from "./InvoiceHistory";
import { UsageOverview } from "./UsageOverview";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function BillingDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">
      <BillingHeader />
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",
import { BillingHeader } from "./BillingHeader",
import { CurrentSubscription } from "./CurrentSubscription",
import { PaymentMethods } from "./PaymentMethods",
import { InvoiceHistory } from "./InvoiceHistory",
import { UsageOverview } from "./UsageOverview",
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      <Tabs defaultValue="subscription" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoice History</TabsTrigger>
          <TabsTrigger value="usage">Usage Overview</TabsTrigger>
        </TabsList>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        <TabsContent value="subscription" className="space-y-8">
          <CurrentSubscription />
        </TabsContent>
        <TabsContent value="payment" className="space-y-8">
          <PaymentMethods />
        </TabsContent>
        <TabsContent value="invoices" className="space-y-8">
          <InvoiceHistory />
        </TabsContent>
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        
        <TabsContent value="subscription" className="space-y-8">
          <CurrentSubscription />
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-8">
          <PaymentMethods />
        </TabsContent>
        
        <TabsContent value="invoices" className="space-y-8">
          <InvoiceHistory />
        </TabsContent>
        
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        <TabsContent value="usage" className="space-y-8">
          <UsageOverview />
        </TabsContent>
      </Tabs>
<<<<<<< HEAD
    </div>
  );
}
=======
<<<<<<< HEAD
<<<<<<< HEAD

    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
      <BillingHeader />;

      <Tabs defaultValue="subscription" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
=======
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

=======
    </div>
  );
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </div>;
  );
}
    </div>
  )
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
  TabsTrigger} from "@/components/ui/tabs";
export function BillingDashboard() {;
  return (;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;
<<<<<<< HEAD
      <BillingHeader />;
      <Tabs defaultValue="subscription" className="mt-8">;
        <TabsList className="grid w-full grid-cols-4 mb-8">;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          <TabsTrigger value="subscription">Subscription</TabsTrigger>;
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>;
          <TabsTrigger value="invoices">Invoice History</TabsTrigger>;
          <TabsTrigger value="usage">Usage Overview</TabsTrigger>;
        </TabsList>;
<<<<<<< HEAD

<<<<<<< HEAD
        <TabsContent value="subscription" className="space - y-8">;
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
