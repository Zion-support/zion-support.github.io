
<<<<<<< HEAD
import React from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { TransactionHistory } from "@/components/transactions/TransactionHistory",;
import { GradientHeading } from "@/components/GradientHeading",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
;
export default function Payments() {;
  return (;
    <>;
      <Header />;
      <div className="min-h-screen bg-zion-blue py-12 px-4">;
        <div className="container mx-auto">;
          <div className="mb-12 text-center">;
            <GradientHeading level="h1" className="text-4xl lg:text-5xl font-bold mb-4">;
              Payments & Transactions;
            </GradientHeading>;
            <p className="text-zion-slate-light max-w-2xl mx-auto">;
              Track your payment history, manage transactions in escrow, and view your financial activities.;
            </p>;
          </div>;
          ;
          <Tabs defaultValue="history" className="w-full">;
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">;
              <TabsTrigger value="history">Transaction History</TabsTrigger>;
              <TabsTrigger value="settings">Payment Settings</TabsTrigger>;
            </TabsList>;
            ;
            <TabsContent value="history">;
              <TransactionHistory />;
            </TabsContent>;
            ;
            <TabsContent value="settings">;
              <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">;
                <h2 className="text-2xl font-bold text-white mb-6">Payment Settings</h2>;
                ;
                <div className="space-y-8">;
                  <div className="border-b border-zion-blue-light pb-6">;
                    <h3 className="text-lg font-medium text-white mb-3">Default Payment Method</h3>;
                    <p className="text-zion-slate-light mb-4">;
                      Manage your payment methods and set your default preference.;
                    </p>;
                    <Button ;
                      onClick={() => window.open('https://stripe.com_blank')}
                      className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white";
                    >;
                      Manage Payment Methods;
                    </Button>;
                  </div>;
                  ;
                  <div className="border-b border-zion-blue-light pb-6">;
                    <h3 className="text-lg font-medium text-white mb-3">Escrow Settings</h3>;
                    <p className="text-zion-slate-light mb-4">;
                      Set your preferences for escrow services. Escrow holds funds until both parties confirm the service has been completed satisfactorily.;
                    </p>;
                    <div className="flex items-center space-x-2">;
                      <Switch id="escrow-default" />;
                      <Label htmlFor="escrow-default" className="text-white">;
                        Use escrow by default;
                      </Label>;
                    </div>;
                  </div>;
                  ;
                  <div>;
                    <h3 className="text-lg font-medium text-white mb-3">Payment Notifications</h3>;
                    <p className="text-zion-slate-light mb-4">;
                      Choose how you want to be notified about payments and transactions.;
                    </p>;
                    <div className="space-y-2">;
                      <div className="flex items-center space-x-2">;
                        <Checkbox id="notify-email" defaultChecked />;
                        <label;
                          htmlFor="notify-email";
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white";
                        >;
                          Email notifications;
                        </label>;
                      </div>;
                      <div className="flex items-center space-x-2">;
                        <Checkbox id="notify-push" defaultChecked />;
                        <label;
                          htmlFor="notify-push";
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white";
                        >;
                          Push notifications;
                        </label>;
                      </div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </div>;
      <Footer />;
    </>;
  );
}
;
// Import UI components for Payment Settings tab;
import { Button } from "@/components/ui/button",;
import { Switch } from "@/components/ui/switch",;
import { Label } from "@/components/ui/label",;
import { Checkbox } from "@/components/ui/checkbox",;
=======
import React from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { TransactionHistory } from "@/components/transactions/TransactionHistory",
import { GradientHeading } from "@/components/GradientHeading",
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",import React from "react";

export default function Payments() {_return (_<>
      <Header />
      <div className=&quot;min-h-screen bg-zion-blue py-12 px-4&quot;>
        <div className=&quot;container mx-auto&quot;>
          <div className=&quot;mb-12 text-center&quot;>
            <GradientHeading level=&quot;h1&quot; className=&quot;text-4xl lg:text-5xl font-bold mb-4&quot;>
              Payments & Transactions
            </GradientHeading>
            <p className=&quot;text-zion-slate-light max-w-2xl mx-auto&quot;>
              Track your payment history, manage transactions in escrow, and view your financial activities.            </p>
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
                      onClick={() => window.open('https://stripe.com_blank')}                      className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white"
                      onClick={() => window.open('https://stripe.com', '_blank')}
                      className=&quot;bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white&quot;
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
                          htmlFor="notify-email"
                          className="text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70 text-white"                        >
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
import { Button } from "@/components/ui/button",
import { Switch } from "@/components/ui/switch",
import { Label } from "@/components/ui/label",
import { Checkbox } from "@/components/ui/checkbox",
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
