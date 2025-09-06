
import React from "react",
import { BillingHeader } from "./BillingHeader",
import { CurrentSubscription } from "./CurrentSubscription",
import { PaymentMethods } from "./PaymentMethods",
import { InvoiceHistory } from "./InvoiceHistory";
import { UsageOverview } from "./UsageOverview";

<<<<<<< HEAD
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BillingDashboard() {;
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">
      <BillingHeader />
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
      <Tabs defaultValue="subscription" className="mt-8">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoice History</TabsTrigger>
          <TabsTrigger value="usage">Usage Overview</TabsTrigger>
        </TabsList>
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
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
        <TabsContent value="usage" className="space-y-8">
          <UsageOverview />
        </TabsContent>
      </Tabs>
<<<<<<< HEAD
    </div>
=======
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
  );
}
=======
=======
<<<<<<< HEAD
    </div>;
  );
}
=======
    </div>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          <TabsTrigger value="subscription">Subscription</TabsTrigger>;
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>;
          <TabsTrigger value="invoices">Invoice History</TabsTrigger>;
          <TabsTrigger value="usage">Usage Overview</TabsTrigger>;
        </TabsList>;

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
<<<<<<< HEAD
}
=======

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
