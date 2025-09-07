import React from "react";""
import {Header} from "@/components/Header";""
import {Footer} from "@/components/Footer";""
import {TransactionHistory} from "@/components/transactions/TransactionHistory";""
import {GradientHeading} from "@/components/GradientHeading";""
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";"
export default function Payments() {
  return (
    <>
      <Header />

"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
</div>"
        <div className="container mx-auto">"
          <div className="mb-12 text-center">"
</div>
            <GradientHeading;"
              level="h1"""
              className="text-4xl lg:text-5xl font-bold mb-4""
            >

            <p className="text-zion-slate-light max-w-2xl mx-auto">"
</p>
          <Tabs defaultValue="history" className="w-full">"
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">"
              <TabsTrigger value="history">Transaction History""
              <TabsTrigger value="settings">Payment Settings"
            
            <TabsContent value="history">"

              <TransactionHistory />

            
            <TabsContent value="settings">"
              <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6">"
                <h2 className="text-2xl font-bold text-white mb-6">"
</h2>
                <div className="space-y-8">"
                  <div className="border-b border-zion-blue-light pb-6">"
                    <h3 className="text-lg font-medium text-white mb-3">"
</h3>
                    </h3>"
                    <p className="text-zion-slate-light mb-4">"
                    <Button;)"
                      onClick={() => window.open("https://stripe.com_blank")}"

                    
                    </p>"
                    <div className="flex items-center space-x-2">"
                      <Switch id="escrow-default" />"
                      <Label htmlFor="escrow-default" className="text-white">"

                      

                  <div>
                    <div className="space-y-2">"
                        <Checkbox id="notify-email" defaultChecked />"

                        <label;"
                          htmlFor="notify-email"""
                          className="text-sm font-medium leading-none peer-disabled: cursor-not-allowed peer-disabled:opacity-70 text-white""
</label>
                        <Checkbox id="notify-push" defaultChecked />"

                          htmlFor="notify-push"""
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white""
            
          
      <Footer />

    </>
  );
}



// Import UI components for Payment Settings tab;
import {Button} from "@/components/ui/button";""
import {Switch} from "@/components/ui/switch";""
import {Label} from "@/components/ui/label";""
import {Checkbox} from "@/components/ui/checkbox";"
                          Email notifications;
                        </label>;
                      </div>;"
                      <div className="flex items-center space-x-2">;"
                        <Checkbox id="notify-push" defaultChecked />;"

                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white">;"
                      </div>;
            ;
      <Footer />;

    </>;
}"
import {Checkbox} from "@/components/ui/checkbox";""
import { Button } from "@/components/ui/button",""
import { Switch } from "@/components/ui/switch",""
import { Label } from "@/components/ui/label",""
import { Checkbox } from "@/components/ui/checkbox",""
import React from "react",;""
import { Header } from "@/components/Header",;""
import { Footer } from "@/components/Footer",;""
import { TransactionHistory } from "@/components/transactions/TransactionHistory",;""
import { GradientHeading } from "@/components/GradientHeading",;""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;"
export default function Payments() {;
  return (;"
import React from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { TransactionHistory } from '@/components / transactions / TransactionHistory';
import { GradientHeading } from '@/components / GradientHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components / ui / tabs';
export default /**
 * Payments - Function description;
 */)
function Payments() {
    <>;
      <Header />;

      <div className="min - h-screen bg - zion - blue py - 12 px - 4">;"
        <div className="container mx - auto">;"
          <div className="mb - 12 text - center">;"
            <GradientHeading level="h1" className="text - 4xl lg:text - 5xl font - bold mb - 4">;"

            ;"
            <p className="text - zion - slate - light max - w-2xl mx - auto">;"
            </p>;
          <Tabs default_value="history" className="w - full">;"
            <TabsList className="grid w - full max - w-md mx - auto grid - cols - 2 mb - 8">;"
              <TabsTrigger value="history">Transaction History;""
              <TabsTrigger value="settings">Payment Settings;"
            <TabsContent value="history">;"

              <TransactionHistory />;

            <TabsContent value="settings">;"
              <div className="bg - zion - blue - dark rounded - lg border border - zion - blue - light p - 6">;"
                <h2 className="text - 2xl font - bold text - white mb - 6">Payment Settings</h2>;""
                <div className="space - y-8">;"
                  <div className="border - b border - zion - blue - light pb - 6">;"
                    <h3 className="text - lg font - medium text - white mb - 3">Default Payment Method</h3>;""
                    <p className="text - zion - slate - light mb - 4">;"
                      on_click={() => window.open ('https://stripe.com_blank')}

                    <h3 className="text - lg font - medium text - white mb - 3">Escrow Settings</h3>;""
                    </p>;"
                    <div className="flex items - center space - x-2">;"
                      <Switch id="escrow - default" />;"
                      <Label html_for="escrow - default" className="text - white">;"

                  <div>;
                    <h3 className="text - lg font - medium text - white mb - 3">Payment Notifications</h3>;""
                    <div className="space - y-2">;"
                        <Checkbox id="notify - email" default_checked />;"

                          html_for="notify - email";""
                          className="text - sm font - medium leading - none peer - disabled: cursor - not - allowed peer - disabled:opacity - 70 text - white";"
                        >;
                        <Checkbox id="notify - push" default_checked />;"

                          html_for="notify - push";""
                          className="text - sm font - medium leading - none peer - disabled:cursor - not - allowed peer - disabled:opacity - 70 text - white";"

    </>);
// Import UI components for Payment Settings tab;"
import { Button } from '@/components / ui / button';
import { Switch } from '@/components / ui / switch';
import { Label } from '@/components / ui / label';
import { Checkbox } from '@/components / ui / checkbox';




// Import UI components for Payment Settings tab;
import { Button } from "@/components/ui/button",;""
import { Switch } from "@/components/ui/switch",;""
import { Label } from "@/components/ui/label",;""
import { Checkbox } from "@/components/ui/checkbox",; return (<> <Header /> <div className="min-h-screen bg-zion-blue py-12 px-4" > <div className="container mx-auto" > <div className="mb-12 text-center" > <GradientHeading level="h1" className="text-4xl lg:text-5xl font-bold mb-4" > Payments & Transactions  </p> </div> <Tabs defaultValue="history" className="w-full" > <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8" > <TabsTrigger value="history" >Transaction History <TabsTrigger value="settings" >Payment Settings  <TabsContent value="history" > <TransactionHistory />  <TabsContent value="settings" > <div className="bg-zion-blue-dark rounded-lg border border-zion-blue-light p-6" > <h2 className="text-2xl font-bold text-white mb-6" >Payment Settings</h2> <div className="space-y-8" > <div className="border-b border-zion-blue-light pb-6" > <h3 className="text-lg font-medium text-white mb-3" >Default Payment Method</h3> <p className="text-zion-slate-light mb-4" > Manage your payment methods and set your default preference. </p> <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white" border-b border-zion-blue-light pb-6"> <h3 className=" text-lg font-medium text-white mb-3">Escrow Settings</h3> <p className=" text-zion-slate-light mb-4"> Set your preferences for escrow services. Escrow holds funds until both parties confirm the service has been completed satisfactorily. </p> <div className=" flex items-center space-x-2"> <Switch id=" escrow-default"/> <Label htmlFor=" escrow-default"className=" text-white"> Use escrow by default  </div> </div> <div> <h3 className=" text-lg font-medium text-white mb-3">Payment Notifications</h3> <p className=" text-zion-slate-light mb-4"> Choose how you want to be notified about payments and transactions. </p> <div className=" space-y-2"> <div className=" flex items-center space-x-2"> <Checkbox id=" notify-email"defaultChecked /> <label > Email notifications </label> </div> <div className=" flex items-center space-x-2"> <Checkbox id=" notify-push"defaultChecked /> <label htmlFor=" notify-push"className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white" > Push notifications </label> </div> </div> </div> </div> </div>   </div> </div> <Footer /> </>)"