
import React from "react"
import { BillingHeader } from "./
import { CurrentSubscription } from "./
import { PaymentMethods } from "./
import { InvoiceHistory } from "./
import { UsageOverview } from "./
  TabsTrigger} from "@/components/ui/
subscription"className=" mt-8"> <TabsList className=" grid w-full grid-cols-4 mb-8"> <TabsTrigger value=" subscription">Subscription</TabsTrigger> <TabsTrigger value=" payment">Payment Methods</TabsTrigger> <TabsTrigger value=" invoices">Invoice History</TabsTrigger> <TabsTrigger value=" usage">Usage Overview</TabsTrigger> </TabsList> <TabsContent value=" subscription"className=" space-y-8"> <CurrentSubscription /> </TabsContent> <TabsContent value=" payment"className=" space-y-8"> <PaymentMethods /> </TabsContent> <TabsContent value=" invoices"className=" space-y-8"> <InvoiceHistory /> 