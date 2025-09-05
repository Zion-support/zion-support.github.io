
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { TransactionHistory } from "@/components/transactions/TransactionHistory",
import { GradientHeading } from "@/components/GradientHeading",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",
=======
import React from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { TransactionHistory } from &quot;@/components/transactions/TransactionHistory&quot;;
import { GradientHeading } from &quot;@/components/GradientHeading&quot;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from &quot;@/components/ui/tabs&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import React from "react";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function Payments() {_return (_<>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;mb-12 text-center&quot;>
            <GradientHeading level=&quot;h1&quot; className=&quot;text-4xl lg:text-5xl font-bold mb-4&quot;>
              Payments & Transactions
            </GradientHeading>
<<<<<<< HEAD
            <p className=&quot;text-zion-slate-light max-w-2xl mx-auto&quot;>
              Track your payment history, manage transactions in escrow, and view your financial activities.
=======
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Track your payment history, _manage transactions in escrow, _and view your financial activities.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
          
          <Tabs defaultValue=&quot;history&quot; className=&quot;w-full&quot;>
            <TabsList className=&quot;grid w-full max-w-md mx-auto grid-cols-2 mb-8&quot;>
              <TabsTrigger value=&quot;history&quot;>Transaction History</TabsTrigger>
              <TabsTrigger value=&quot;settings&quot;>Payment Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value=&quot;history&quot;>
              <TransactionHistory />
            </TabsContent>
            
            <TabsContent value=&quot;settings&quot;>
              <div className=&quot;bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6&quot;>
                <h2 className=&quot;text-2xl font-bold text-white mb-6&quot;>Payment Settings</h2>
                
                <div className=&quot;space-y-8&quot;>
                  <div className=&quot;border-b border-zion-blue-light pb-6&quot;>
                    <h3 className=&quot;text-lg font-medium text-white mb-3&quot;>Default Payment Method</h3>
                    <p className=&quot;text-zion-slate-light mb-4&quot;>
                      Manage your payment methods and set your default preference.
                    </p>
                    <Button 
<<<<<<< HEAD
<<<<<<< HEAD
                      onClick={() => window.open('https://stripe.com_blank')}
=======
                      onClick={() => window.open('https://stripe.com', _'_blank')}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white"
=======
                      onClick={() => window.open('https://stripe.com', '_blank')}
                      className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                    >
                      Manage Payment Methods
                    </Button>
                  </div>
                  
                  <div className=&quot;border-b border-zion-blue-light pb-6&quot;>
                    <h3 className=&quot;text-lg font-medium text-white mb-3&quot;>Escrow Settings</h3>
                    <p className=&quot;text-zion-slate-light mb-4&quot;>
                      Set your preferences for escrow services. Escrow holds funds until both parties confirm the service has been completed satisfactorily.
                    </p>
                    <div className=&quot;flex items-center space-x-2&quot;>
                      <Switch id=&quot;escrow-default&quot; />
                      <Label htmlFor=&quot;escrow-default&quot; className=&quot;text-white&quot;>
                        Use escrow by default
                      </Label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className=&quot;text-lg font-medium text-white mb-3&quot;>Payment Notifications</h3>
                    <p className=&quot;text-zion-slate-light mb-4&quot;>
                      Choose how you want to be notified about payments and transactions.
                    </p>
                    <div className=&quot;space-y-2&quot;>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <Checkbox id=&quot;notify-email&quot; defaultChecked />
                        <label
<<<<<<< HEAD
                          htmlFor="notify-email"
                          className="text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70 text-white"
=======
                          htmlFor=&quot;notify-email&quot;
                          className=&quot;text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                        >
                          Email notifications
                        </label>
                      </div>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <Checkbox id=&quot;notify-push&quot; defaultChecked />
                        <label
                          htmlFor=&quot;notify-push&quot;
                          className=&quot;text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white&quot;
                        >
                          Push notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </>
  )
}

// Import UI components for Payment Settings tab
<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from "@/components/ui/button",
import { Switch } from "@/components/ui/switch",
import { Label } from "@/components/ui/label",
import { Checkbox } from "@/components/ui/checkbox",
=======
import { Button } from &quot;@/components/ui/button&quot;;
import { Switch } from &quot;@/components/ui/switch&quot;;
import { Label } from &quot;@/components/ui/label&quot;;
import { Checkbox } from &quot;@/components/ui/checkbox&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
