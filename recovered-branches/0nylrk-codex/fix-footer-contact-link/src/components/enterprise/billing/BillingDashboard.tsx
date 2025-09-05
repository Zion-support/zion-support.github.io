
import React from "react",
import { BillingHeader } from "./BillingHeader",
import { CurrentSubscription } from "./CurrentSubscription",
import { PaymentMethods } from "./PaymentMethods",
import { InvoiceHistory } from "./InvoiceHistory",
import { UsageOverview } from "./UsageOverview",import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger} from "@/components/ui/tabs",

export function BillingDashboard() {
  return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md: px-6">import React from "react";
import {_Tabs, _TabsContent, _TabsList, _TabsTrigger} from "@/components/ui/tabs";

export function BillingDashboard() {_return (
    <div className="container mx-auto max-w-7xl py-8 px-4 md:px-6">
      <BillingHeader />
      
      <Tabs defaultValue=&quot;subscription&quot; className=&quot;mt-8&quot;>
        <TabsList className=&quot;grid w-full grid-cols-4 mb-8&quot;>
          <TabsTrigger value=&quot;subscription&quot;>Subscription</TabsTrigger>
          <TabsTrigger value=&quot;payment&quot;>Payment Methods</TabsTrigger>
          <TabsTrigger value=&quot;invoices&quot;>Invoice History</TabsTrigger>
          <TabsTrigger value=&quot;usage&quot;>Usage Overview</TabsTrigger>
        </TabsList>
        
        <TabsContent value=&quot;subscription&quot; className=&quot;space-y-8&quot;>
          <CurrentSubscription />
        </TabsContent>
        
        <TabsContent value=&quot;payment&quot; className=&quot;space-y-8&quot;>
          <PaymentMethods />
        </TabsContent>
        
        <TabsContent value=&quot;invoices&quot; className=&quot;space-y-8&quot;>
          <InvoiceHistory />
        </TabsContent>
        
        <TabsContent value=&quot;usage&quot; className=&quot;space-y-8&quot;>
          <UsageOverview />
        </TabsContent>
      </Tabs>
    </div>
  )
}