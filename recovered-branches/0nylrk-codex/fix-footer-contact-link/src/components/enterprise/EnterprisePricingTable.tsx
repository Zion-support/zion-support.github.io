<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/EnterprisePricingTable.tsx


<<<<<<< HEAD
import React from "react",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

import React from "react";
import {Button} from "@/components/ui/button";
import {Check, X} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import React from "react",
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button",
import { Check, X } from "lucide-react",
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function EnterprisePricingTable() {

  const plans = [
    {
      name: "Teams"
      price: "$599"
      billing: "/month"
      description: "Perfect for small teams"
      users: "Up to 10 users"
      popular: false
      features: [
        { name: "Private hiring portal", included: true }
        { name: "Dedicated talent pool", included: true }
        { name: "Standard SLA (24h)", included: true }
        { name: "Basic branding", included: true }
        { name: "Admin dashboard", included: true }
        { name: "Team collaboration", included: true }
        { name: "API access", included: false }
        { name: "Custom integrations", included: false }
        { name: "Dedicated success manager", included: false }]}
    {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

      name: "Business",;
      price: "$1,999";

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      name: "Business",
      price: "$1,999",

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      name: "Business"
      price: "$1,999";
      billing: "/month"
      description: "Ideal for growing companies"
      users: "Up to 50 users"
      popular: true
      name: "Business",;
      price: "$1,999";
      name: "Business",
      price: "$1,999",
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      billing: "/month",
      description: "Ideal for growing companies",
      users: "Up to 50 users",
      popular: true,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      features: [
        { name: "Private hiring portal", included: true }
        { name: "Dedicated talent pool", included: true }
        { name: "Enhanced SLA (8h)", included: true }
        { name: "Advanced branding", included: true }
        { name: "Admin dashboard", included: true }
        { name: "Team collaboration", included: true }
        { name: "API access", included: true }
        { name: "Custom integrations", included: false }
        { name: "Dedicated success manager", included: false }]}
    {
      name: "Enterprise"
      price: "Custom"
      billing: ""
      description: "For large organizations"
      users: "Unlimited users"
      popular: false
      features: [
        { name: "Private hiring portal", included: true }
        { name: "Dedicated talent pool", included: true }
        { name: "Premium SLA (1h)", included: true }
        { name: "Full white labeling", included: true }
        { name: "Admin dashboard", included: true }
        { name: "Team collaboration", included: true }
        { name: "API access", included: true }
        { name: "Custom integrations", included: true }
        { name: "Dedicated success manager", included: true }]}]

  return (
    <section id="pricing" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team size and requirements
          </p>
        </div>
        <div className="overflow-x-auto">
          <Table className="border rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Plan Features</TableHead>
                {plans.map((plan) => (
                  <TableHead key={plan.name} className="text-center">
                    <div className="flex flex-col items-center">
                      {plan.popular && (
                        <Badge className="mb-2 bg-zion-purple">Most Popular</Badge>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/EnterprisePricingTable.tsx
import React from "react";
import {Button} from "@/components/ui/button";
import {Check, X} from "lucide-react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Check, X } from "lucide-react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function EnterprisePricingTable() {;
  const plans = [;
    {;
      name: "Teams",;
      price: "$599",;
      billing: "/month",;
      description: "Perfect for small teams",;
      users: "Up to 10 users",;
      popular: false,;
      features: [;
        { name: "Private hiring portal", included: true },;
        { name: "Dedicated talent pool", included: true },;
        { name: "Standard SLA (24h)", included: true },;
        { name: "Basic branding", included: true },;
        { name: "Admin dashboard", included: true },;
        { name: "Team collaboration", included: true },;
        { name: "API access", included: false },;
        { name: "Custom integrations", included: false },;
        { name: "Dedicated success manager", included: false }]},;
    {;
      name: "Business",;
<<<<<<< HEAD
      price: "$1,999";
=======
      price: "$1,999",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      billing: "/month",;
      description: "Ideal for growing companies",;
      users: "Up to 50 users",;
      popular: true,;
      features: [;
        { name: "Private hiring portal", included: true },;
        { name: "Dedicated talent pool", included: true },;
        { name: "Enhanced SLA (8h)", included: true },;
        { name: "Advanced branding", included: true },;
        { name: "Admin dashboard", included: true },;
        { name: "Team collaboration", included: true },;
        { name: "API access", included: true },;
        { name: "Custom integrations", included: false },;
        { name: "Dedicated success manager", included: false }]},;
    {;
      name: "Enterprise",;
      price: "Custom",;
      billing: "",;
      description: "For large organizations",;
      users: "Unlimited users",;
      popular: false,;
      features: [;
        { name: "Private hiring portal", included: true },;
        { name: "Dedicated talent pool", included: true },;
        { name: "Premium SLA (1h)", included: true },;
        { name: "Full white labeling", included: true },;
        { name: "Admin dashboard", included: true },;
        { name: "Team collaboration", included: true },;
        { name: "API access", included: true },;
<<<<<<< HEAD
        { name: "Custom integrations", included: true },;
        { name: "Dedicated success manager", included: true }]}],;
  return (
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Check, X } from "lucide-react",;
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
;
export function EnterprisePricingTable() {;
  const plans = [;
    {;
      name:"Teams",;
      price:"$599",;
      billing:"/month",;
      description:"Perfect for small teams",;
      users:"Up to 10 users",;
      popular:false,;
      features:[;
        { name:"Private hiring portal", included:true },;
        { name:"Dedicated talent pool", included:true },;
        { name:"Standard SLA (24h)", included:true },;
        { name:"Basic branding", included:true },;
        { name:"Admin dashboard", included:true },;
        { name:"Team collaboration", included:true },;
        { name:"API access", included:false },;
        { name:"Custom integrations", included:false },;
        { name:"Dedicated success manager", included:false }]},;
    {;
      name:"Business",;
      price:"$1,999",;
      billing:"/month",;
      description:"Ideal for growing companies",;
      users:"Up to 50 users",;
      popular:true,;
      features:[;
        { name:"Private hiring portal", included:true },;
        { name:"Dedicated talent pool", included:true },;
        { name:"Enhanced SLA (8h)", included:true },;
        { name:"Advanced branding", included:true },;
        { name:"Admin dashboard", included:true },;
        { name:"Team collaboration", included:true },;
        { name:"API access", included:true },;
        { name:"Custom integrations", included:false },;
        { name:"Dedicated success manager", included:false }]},;
    {;
      name:"Enterprise",;
      price:"Custom",;
      billing:"",;
      description:"For large organizations",;
      users:"Unlimited users",;
      popular:false,;
      features:[;
        { name:"Private hiring portal", included:true },;
        { name:"Dedicated talent pool", included:true },;
        { name:"Premium SLA (1h)", included:true },;
        { name:"Full white labeling", included:true },;
        { name:"Admin dashboard", included:true },;
        { name:"Team collaboration", included:true },;
        { name:"API access", included:true },;
        { name:"Custom integrations", included:true },;
        { name:"Dedicated success manager", included:true }]}],;
;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        { name: "Custom integrations", included: true };
        { name: "Dedicated success manager", included: true }]}];
  return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <section id="pricing" className="py-20 px-4 md:px-6">;
      <div className="container mx-auto max-w-7xl">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
            Choose the perfect plan for your team size and requirements;
          </p>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="overflow-x-auto">;
          <Table className="border rounded-lg">;
            <TableHeader>;
              <TableRow>;
                <TableHead className="w-[200px]">Plan Features</TableHead>;
<<<<<<< HEAD
<<<<<<< HEAD
                {plans && plans.map((plan) => (;
                  <TableHead key={plan && plan.name} className="text-center">;
                    <div className="flex flex-col items-center">;
                      {plan && plan.popular && (;
                        <Badge className="mb-2 bg-zion-purple">Most Popular</Badge>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/EnterprisePricingTable.tsx



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/EnterprisePricingTable.tsx
                      )}
                      <span className="font-bold text-xl">{plan && plan.name}</span>;
                      <div className="flex items-baseline mt-1">;
                        <span className="text-2xl font-bold">{plan && plan.price}</span>;
                        <span className="text-sm text-muted-foreground ml-1">;
                          {plan && plan.billing}
                        </span>;
                      </div>;
                      <p className="text-sm text-muted-foreground mt-1">;
                        {plan && plan.description}
                      </p>;
                      <p className="text-sm font-medium mt-2">{plan && plan.users}</p>;
                      <Button
                        className={`mt-4 w-full ${plan && plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan && plan.popular ? 'default' : 'outline'}>;
                        {plan && plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                {plans.map((plan) => (;
                  <TableHead key={plan.name} className="text-center">;
                    <div className="flex flex-col items-center">;
                      {plan.popular && (;
<<<<<<< HEAD
                        <Badge className="mb-2 bg-zion-purple">Most Popular</Badge>;                      )}
                      <span className="font-bold text-xl">{plan.name}</span>;
                      <div className="flex items-baseline mt-1">;
                        <span className="text-2xl font-bold">{plan.price}</span>;
                        <span className="text-sm text-muted-foreground ml-1">;
                          {plan.billing}
                        </span>;
                      </div>;
                      <p className="text-sm text-muted-foreground mt-1">;
                        {plan.description}
                      </p>;
                      <p className="text-sm font-medium mt-2">{plan.users}</p>;
                      <Button;
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' :''}`}
                        variant={plan.popular ? 'default' :'outline'}
                      >;
                        {plan.name === "Enterprise" ? "Request Quote" :"Get Started"}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      </Button>;
                    </div>;
                  </TableHead>;
                ))}
              </TableRow>;
            </TableHeader>;
            <TableBody>;
<<<<<<< HEAD
              {plans[0].features && features.map((feature, index) => (;
                <TableRow key={feature && feature.name}>;
                  <TableCell className="font-medium">{feature && feature.name}</TableCell>;
                  {plans && plans.map((plan) => (;
                    <TableCell key={`${plan && plan.name}-${feature && feature.name}`} className="text-center">;
                      {plan && plan.features[index].included ? (;
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;
                      ) : (;
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;
                      )}
=======
              {plans[0].features.map((feature, index) => (;
                <TableRow key={feature.name}>;
                  <TableCell className="font-medium">{feature.name}</TableCell>;
                  {plans.map((plan) => (;
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">;
                      {plan.features[index].included ? (;
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;
                      ) :(;
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;                      )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </TableCell>;
                  ))}
                </TableRow>;
              ))}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/EnterprisePricingTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/EnterprisePricingTable.tsx
            </TableBody>;
          </Table>;
        </div>;
<<<<<<< HEAD
        <div className="mt-8 text-center text-sm text-muted-foreground">;
          All plans include SSL security, 99 && 99.9% uptime SLA, and dedicated support;
        </div>;
      </div>;
    </section>;
  );
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/EnterprisePricingTable.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/enterprise/EnterprisePricingTable.tsx
import React from './react';
import { Button } from '@/components / ui / button';
import { Check, X } from './lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
export /**
 * EnterprisePricingTable - Function description
 */
function EnterprisePricingTable() {
  const plans = [;
    {
      name: "Teams",
      price: "$599",
      billing: "/month",
      description: "Perfect for small teams",
      users: "Up to 10 users",
      popular: false,
      features: [;
        { name: "Private hiring portal", included: true },
        { name: "Dedicated talent pool", included: true },
        { name: "Standard SLA (24h)", included: true },
        { name: "Basic branding", included: true },
        { name: "Admin dashboard", included: true },
        { name: "Team collaboration", included: true },
        { name: "API access", included: false },
        { name: "Custom integrations", included: false },
        { name: "Dedicated success manager", included: false }]},
    {
      name: "Business",
      price: "$1, 999";
      billing: "/month",
      description: "Ideal for growing companies",
      users: "Up to 50 users",
      popular: true,
      features: [;
        { name: "Private hiring portal", included: true },
        { name: "Dedicated talent pool", included: true },
        { name: "Enhanced SLA (8h)", included: true },
        { name: "Advanced branding", included: true },
        { name: "Admin dashboard", included: true },
        { name: "Team collaboration", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: false },
        { name: "Dedicated success manager", included: false }]},
    {
      name: "Enterprise",
      price: "Custom",
      billing: "",
      description: "For large organizations",
      users: "Unlimited users",
      popular: false,
      features: [;
        { name: "Private hiring portal", included: true },
        { name: "Dedicated talent pool", included: true },
        { name: "Premium SLA (1h)", included: true },
        { name: "Full white labeling", included: true },
        { name: "Admin dashboard", included: true },
        { name: "Team collaboration", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "Dedicated success manager", included: true }]}],
  return (
    <section id="pricing" className="py - 20 px - 4 md:px - 6">;
      <div className="container mx - auto max - w-7xl">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Enterprise Plans</h2>;
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;
            Choose the perfect plan for your team size and requirements;
          </p>;
        </div>;
        <div className="overflow - x-auto">;
          <Table className="border rounded - lg">;
            <TableHeader>;
              <TableRow>;
                <TableHead className="w-[200px]">Plan Features</TableHead>;
                {plans.map ((plan) => (
                  <TableHead key={plan.name} className="text - center">;
                    <div className="flex flex - col items - center">;
                      {plan.popular && (
                        <Badge className="mb - 2 bg - zion - purple">Most Popular</Badge>)}
                      <span className="font - bold text - xl">{plan.name}</span>;
                      <div className="flex items - baseline mt - 1">;
                        <span className="text - 2xl font - bold">{plan.price}</span>;
                        <span className="text - sm text - muted - foreground ml - 1">;
                          {plan.billing}
                        </span>;
                      </div>;
                      <p className="text - sm text - muted - foreground mt - 1">;
                        {plan.description}
                      </p>;
                      <p className="text - sm font - medium mt - 2">{plan.users}</p>;
                      <Button;
                        className={`mt - 4 w - full ${plan.popular ? 'bg - zion - purple hover:bg - zion - purple / 90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >;
                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
                      </Button>;
                    </div>;
                  </TableHead>))}
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {plans[0].features.map ((feature, index) => (
                <TableRow key={feature.name}>;
                  <TableCell className="font - medium">{feature.name}</TableCell>;
                  {plans.map ((plan) => (
                    <TableCell key={`${plan.name}-${feature.name}`} className="text - center">;
                      {plan.features[index].included ? (
                        <Check className="h - 5 w - 5 text - green - 500 mx - auto" />) : (
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />)}
                    </TableCell>))}
                </TableRow>))}
            </TableBody>;
          </Table>;
        </div>;
        <div className="mt - 8 text - center text - sm text - muted - foreground">;
          All plans include SSL security, 99.9% uptime SLA, and dedicated support;
        </div>;
      </div>;
    </section>);
}
=======
;
        <div className="mt-8 text-center text-sm text-muted-foreground">;
          All plans include SSL security, 99.9% uptime SLA, and dedicated support;
        </div>;
      </div>;
    </section>;
  ),;}
 import {
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function EnterprisePricingTable () {
  const plans = [ {
  name: "Teams";
price: "$599";
billing: "/month";
description: "Perfect for small teams";
users: "Up to 10 users";
popular: false;
features: [ {
  name: "Private hiring portal", included: true 
};
{
  name: "Dedicated talent pool", included: true 
};
{
  name: "Standard SLA (24h) ", included: true 
};
{
  name: "Basic branding", included: true 
};
{
  name: "Admin dashboard", included: true 
};
{
  name: "Team collaboration", included: true 
};
{
  name: "API access", included: false 
};
{
  name: "Custom integrations", included: false 
};
{
  name: "Dedicated success manager", included: false 
}] 
};
{
  name: "Business";
price: "$1, 999";
billing: "/month";
description: "Ideal for growing companies";
users: "Up to 50 users";
popular: true;
features: [ {
  name: "Private hiring portal", included: true 
};
{
  name: "Dedicated talent pool", included: true 
};
{
  name: "Enhanced SLA (8h) ", included: true 
};
{
  name: "Advanced branding", included: true 
};
{
  name: "Admin dashboard", included: true 
};
{
  name: "Team collaboration", included: true 
};
{
  name: "API access", included: true 
};
{
  name: "Custom integrations", included: false 
};
{
  name: "Dedicated success manager", included: false 
}] 
};
{
  name: "Enterprise";
price: "Custom";
billing: "";
description: " For large organizations";
users: " Unlimited users";
popular: false;
features: [ return (<section id=" pricing"className="py-20 px-4 md:px-6"> plans.map ( (plan) => (<TableHead key= {
  plan.name 
}className="text-center"> <div className="flex flex-col items-center"> {
  plan.popular && (<Badge className="mb-2 bg-zion-purple">Most Popular</Badge>) 
}<span className="font-bold text-xl"> {
  plan.name 
}</span> <div className="flex items-baseline mt-1"> <span className="text-2xl font-bold"> {
  plan.price 
}</span> <span className="text-sm text-muted-foreground ml-1"> {
  plan.billing 
}</span> </div> <p className="text-sm text-muted-foreground mt-1"> {
  plan.description 
}</p> <p className="text-sm font-medium mt-2"> {
  plan.users 
}</p> <Button className= {
  `mt-4 w-full $ {
  plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : '' 
}` 
}variant= {
  plan.popular ? 'default': 'outline' 
}> </Button> </div> </TableHead>) ) 
}</TableRow> </TableHeader> <TableBody> {
  plans[0].features.map ( (feature, index) => (<TableRow key= {
  feature.name 
}> <TableCell className="font-medium"> {
  feature.name 
}</TableCell> {
  plans.map ( (plan) => (<TableCell key= {
  `$ {
  plan.name 
}-$ {
  feature.name 
}` 
}className="text-center"> {
  plan.features[index].included ? (<Check className="h-5 w-5 text-green-500 mx-auto"/>) : (<X className="h-5 w-5 text-muted-foreground mx-auto"/>) 
}</TableCell>) ) 
}</TableRow>) ) 
}</TableBody> </Table> </div> <div className="mt-8 text-center text-sm text-muted-foreground"> All plans include SSL security, 99.9% uptime SLA, and dedicated support </div> </div> </section>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
                        <Badge className="mb-2 bg-zion-purple">Most Popular</Badge>;
                      )}
                      <span className="font-bold text-xl">{plan.name}</span>
                      <div className="flex items-baseline mt-1">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        <span className="text-sm text-muted-foreground ml-1">
                          {plan.billing}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}
                      </p>
                      <p className="text-sm font-medium mt-2">{plan.users}</p>
                      <Button
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
                      </Button>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans[0].features.map((feature, index) => (
                <TableRow key={feature.name}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  {plans.map((plan) => (
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">
                      {plan.features[index].included ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          All plans include SSL security, 99.9% uptime SLA, and dedicated support
        </div>
      </div>
    </section>
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
