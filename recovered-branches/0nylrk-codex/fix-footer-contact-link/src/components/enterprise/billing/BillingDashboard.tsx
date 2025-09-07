

import React from "react";""
import { BillingHeader } from "./BillingHeader";""
import { CurrentSubscription } from "./CurrentSubscription";""
import { PaymentMethods } from "./PaymentMethods";""
import { InvoiceHistory } from "./InvoiceHistory";""
import { UsageOverview } from "./UsageOverview";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import React from "react",""
import { BillingHeader } from "./BillingHeader",""
import { CurrentSubscription } from "./CurrentSubscription",""
import { PaymentMethods } from "./PaymentMethods",""
import { InvoiceHistory } from "./InvoiceHistory",""
import { UsageOverview } from "./UsageOverview","
import {
  // TODO: Implement
}
  Tabs,
  TabsContent,
  TabsList,"
  TabsTrigger} from "@/components/ui/tabs",""
      <Tabs defaultValue="subscription" className="mt-8">"
"
        <TabsList className="grid w-full grid-cols-4 mb-8">"
          <TabsTrigger value="subscription">Subscription""
          <TabsTrigger value="payment">Payment Methods""
          <TabsTrigger value="invoices">Invoice History""
          <TabsTrigger value="usage">Usage Overview"
        

        <TabsContent value="subscription" className="space-y-8">"

          <CurrentSubscription />

        <TabsContent value="payment" className="space-y-8">"

          <PaymentMethods />

        <TabsContent value="invoices" className="space-y-8">"

          <InvoiceHistory />

        


        


        


        
        

        <TabsContent value="usage" className="space-y-8">"

          <UsageOverview />

        
      
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">;"
</div>
      <BillingHeader />;

      <Tabs defaultValue="subscription" className="mt-8">;"
        <TabsList className="grid w-full grid-cols-4 mb-8">;"

    </div>;
    </div>"
          <TabsTrigger value="subscription">Subscription;""
          <TabsTrigger value="payment">Payment Methods;""
          <TabsTrigger value="invoices">Invoice History;""
          <TabsTrigger value="usage">Usage Overview;"
        ;"
        <TabsContent value="subscription" className="space - y-8">;"

          <CurrentSubscription />;

        <TabsContent value="payment" className="space - y-8">;"

          <PaymentMethods />;

        <TabsContent value="invoices" className="space - y-8">;"

          <InvoiceHistory />;

        <TabsContent value="usage" className="space - y-8">;"

          <UsageOverview />;

        ;
    </div>);"
        <TabsContent value="subscription" className="space-y-8">;"


        <TabsContent value="payment" className="space-y-8">;"


        <TabsContent value="invoices" className="space-y-8">;"








        <TabsContent value="usage" className="space-y-8">;"


    </div>;"