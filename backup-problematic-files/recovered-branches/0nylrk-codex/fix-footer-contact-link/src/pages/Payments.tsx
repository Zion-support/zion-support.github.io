
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

          <Tabs defaultValue="history" className="w-full">;
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">;
              <TabsTrigger value="history">Transaction History</TabsTrigger>;
              <TabsTrigger value="settings">Payment Settings</TabsTrigger>;
            </TabsList>;

                <div className="space-y-8">;
                  <div className="border-b border-zion-blue-light pb-6">;
                    <h3 className="text-lg font-medium text-white mb-3">Default Payment Method</h3>;
                    <p className="text-zion-slate-light mb-4">;
                      Manage your payment methods and set your default preference.;
                    </p>;

                      className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white";
                    >;
                      Manage Payment Methods;
                    </Button>;
                  </div>;

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

                  <div>;
                    <h3 className="text-lg font-medium text-white mb-3">Payment Notifications</h3>;
                    <p className="text-zion-slate-light mb-4">;
                      Choose how you want to be notified about payments and transactions.;
                    </p>;
                    <div className="space-y-2">;
                      <div className="flex items-center space-x-2">;
                        <Checkbox id="notify-email" defaultChecked />;

                          Email notifications;
                        </label>;
                      </div>;
                      <div className="flex items-center space-x-2">;
                        <Checkbox id="notify-push" defaultChecked />;

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
