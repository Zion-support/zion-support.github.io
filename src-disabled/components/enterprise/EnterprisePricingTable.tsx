:src_backup/components/enterprise/EnterprisePricingTable.tsx
import { Check, X } from 'lucide-react'

:src_backup/components/enterprise/EnterprisePricingTable.tsx
TableBody,
  TableCell,
  TableHead,
  TableHeader,
:src_backup/components/enterprise/EnterprisePricingTable.tsx

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Check, X } from 'lucide-react'
import {
  Table,
:src_backup/components/enterprise/EnterprisePricingTable.tsx
import { Check, X } from 'lucide-react'

import { Badge } from "@/components/ui/badge",

import { Badge } from "@/components/ui/badge",;

import {
  Table;
  TableBody;
  TableCell;
  TableHead;
  TableHeader;
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge";
export function EnterprisePricingTable() {
  const plans = null;
:src_backup/components/enterprise/EnterprisePricingTable.tsx
export function EnterprisePricingTable() {
  const plans = [
    {
      name: "Teams",
      price: "$599",
      billing: "/month",
      description: "Perfect for small teams",
      users: "Up to 10 users",
      popular: false,
      features: [
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
:src/components/enterprise/EnterprisePricingTable.tsx
      price: "$1,999",      billing: "/month",

      billing: "/month",
      description: "Ideal for growing companies",
      users: "Up to 50 users",
      popular: true,
      features: [
:src/components/enterprise/EnterprisePricingTable.tsx
        { name: 'Private hiring portal', included: true }
        { name: 'Dedicated talent pool', included: true }
        { name: 'Enhanced SLA (8h)', included: true }
        { name: 'Advanced branding', included: true }
        { name: 'Admin dashboard', included: true }
        { name: 'Team collaboration', included: true }
        { name: 'API access', included: true }
        { name: 'Custom integrations', included: false }
        { name: 'Dedicated success manager', included: false }
      ]
    }
    {
      name: 'Enterprise'
      price: 'Custom'
      billing: ''
      description: 'For large organizations'
      users: 'Unlimited users'
      popular: false
      features: [      <div className="container mx-auto max-w-7xl">

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
      features: [

:src/components/enterprise/EnterprisePricingTable.tsx
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">

:src/components/enterprise/EnterprisePricingTable.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import {  Table,  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow,;
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge";
export function EnterprisePricingTable() {;
  const plans = [;
    {;
      name: 'Teams',;
      price: '$599',;
      billing: '/month',,
  description: 'Perfect for small teams',;
      users: 'Up to 10 users',;
      popular: false,;
      features: [;
        { name: 'Private hiring portal', included: true },;
        { name: 'Dedicated talent pool', included: true },;
        { name: 'Standard SLA (24h)', included: true },;
        { name: 'Basic branding', included: true },;
        { name: 'Admin dashboard', included: true },;
        { name: 'Team collaboration', included: true },;
        { name: 'API access', included: false },;
        { name: 'Custom integrations', included: false },;
        { name: 'Dedicated success manager', included: false },;
      ],;
    },;
    {;
      name: 'Business',;
      price: '$1,999',;
      billing: '/month',,
  description: 'Ideal for growing companies',;
      users: 'Up to 50 users',;
      popular: true,;
      features: [;
        { name: 'Private hiring portal', included: true },;
        { name: 'Dedicated talent pool', included: true },;
        { name: 'Enhanced SLA (8h)', included: true },;
        { name: 'Advanced branding', included: true },;
        { name: 'Admin dashboard', included: true },;
        { name: 'Team collaboration', included: true },;
        { name: 'API access', included: true },;
        { name: 'Custom integrations', included: false },;
        { name: 'Dedicated success manager', included: false },;
      ],;
    },;
    {;
      name: 'Enterprise',;
      price: 'Custom',;
      billing: '',,
  description: 'For large organizations',;
      users: 'Unlimited users',;
      popular: false,;
      features: [;
        { name: 'Private hiring portal', included: true },;
        { name: 'Dedicated talent pool', included: true },;
        { name: 'Premium SLA (1h)', included: true },;
        { name: 'Full white labeling', included: true },;
        { name: 'Admin dashboard', included: true },;
        { name: 'Team collaboration', included: true },;
        { name: 'API access', included: true },;
        { name: 'Custom integrations', included: true },;
        { name: 'Dedicated success manager', included: true },;
      ],;
    },;
  ];

  return (
    <section id='pricing' className='py-20 px-4 md:px-6'>;
      <div className='container mx-auto max-w-7xl'>;
        <div className='text-center mb-12'>;
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>;
            Enterprise Plans;
          </h2>;
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>            Choose the perfect plan for your team size and requirements;
          </p>;
        </div>;

        <div className='overflow-x-auto'>;
          <Table className='border rounded-lg'>    <section id="pricing" className="py-20 px-4 md:px-6">;
      <div className="container mx-auto max-w-7xl">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
          </p>;
        </div>;

        <div className='overflow-x-auto'>;
          <Table className='border rounded-lg'>;
            <TableHeader>;
              <TableRow>;
                <TableHead className='w-[200px]'>Plan Features</TableHead>;
                {plans && plans.map(plan => (;
                  <TableHead key={plan && plan.name} className='text-center'>;
                    <div className='flex flex-col items-center'>                <TableHead className="w-[200px]">Plan Features</TableHead>;
                {plans && plans.map((plan,) => (;
                  <TableHead key={plan && plan.name} className="text-center">;
                    <div className="flex flex-col items-center">;
                      {plan && plan.popular && (;
                        <Badge className='mb-2 bg-zion-purple'>;
                          Most Popular;
                        </Badge>;
                      )}
                      <span className='font-bold text-xl'>{plan && plan.name}</span>;
                      <div className='flex items-baseline mt-1'>;
                        <span className='text-2xl font-bold'>{plan && plan.price}</span>;
                        <span className='text-sm text-muted-foreground ml-1'>;
                          {plan && plan.billing}
                        </span>;
                      </div>;
                      <p className='text-sm text-muted-foreground mt-1'>;
                        {plan && plan.description}
                      </p>;
                      <p className='text-sm font-medium mt-2'>{plan && plan.users}</p>                      <Button
                        className={`mt-4 w-full ${plan && plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan && plan.popular ? 'default' : 'outline'}>;
                        {plan && plan.name === 'Enterprise';
                          ? 'Request Quote';
                          : 'Get Started'}                      </Button>                      <p className="text-sm font-medium mt-2">{plan && plan.users}</p>;
                      <Button
                        className={`mt-4 w-full ${plan && plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant = {plan && plan.popular ? 'default' : 'outline',}>;
                        {plan && plan.name === 'Enterprise';
                          ? 'Request Quote';
                          : 'Get Started'}                        {plan && plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
                      </Button>;
                    </div>;
                  </TableHead>;

            Choose the perfect plan for your team size and requirements
:src/components/enterprise/EnterprisePricingTable.tsx
          </p>
        </div>

  return (
    <section id='pricing' className='py-20 px-4 md:px-6'>
      <div className='container mx-auto max-w-7xl'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Enterprise Plans
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Choose the perfect plan for your team size and requirements
          </p>
        </div>

<div className='overflow-x-auto'>
          <Table className='border rounded-lg'>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[200px]'>Plan Features</TableHead>
                {plans.map(plan => (
                  <TableHead key={plan.name} className='text-center'>
                    <div className='flex flex-col items-center'>                <TableHead className="w-[200px]">Plan Features</TableHead>
                {plans.map((plan,) => (
                  <TableHead key={plan.name} className="text-center">
                    <div className="flex flex-col items-center">
                      {plan.popular && (
                        <Badge className='mb-2 bg-zion-purple'>
                          Most Popular
                        </Badge>
                      )}
                      <span className='font-bold text-xl'>{plan.name}</span>
                      <div className='flex items-baseline mt-1'>
                        <span className='text-2xl font-bold'>{plan.price}</span>
                        <span className='text-sm text-muted-foreground ml-1'>
:src/components/enterprise/EnterprisePricingTable.tsx
                          {plan.billing}
                        </span>
                      </div>
                      <p className='text-sm text-muted-foreground mt-1'>
                        {plan.description}
:src/components/enterprise/EnterprisePricingTable.tsx

                      </Button>
                    </div>
                  </TableHead>
                ))}      </div>

                      </p>
                      <p className='text-sm font-medium mt-2'>{plan.users}</p>
                      <Button
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
{plan.name === 'Enterprise'
                          ? 'Request Quote'
                          : 'Get Started'}
origin/cursor/automate-test-improve-and-merge-code-2533
                      </Button>
                    </div>
                  </TableHead>
                ))}
:src_backup/components/enterprise/EnterprisePricingTable.tsx
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {(plans[0]?.features || []).map((feature, index,) => (;
                <TableRow key={feature && feature.name}>;
                  <TableCell className='font-medium'>{feature && feature.name}</TableCell>;
                  {plans && plans.map(plan => (;
                    <TableCell
                      key={`${plan && plan.name}-${feature && feature.name}`}`
                      className='text-center'>;
                        <Check className='h-5 w-5 text-green-500 mx-auto' />;
                      ) : (;
                        <X className='h-5 w-5 text-muted-foreground mx-auto' />                      )}'
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;,
                      {plan && plan.features[index]?.included ? (;
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;
                      ) : (;
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;
                  <TableCell className="font-medium">{feature.name}</TableCell>"
                  {plans.map((plan) => (
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">",
                      {plan.features[index]?.included ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />"
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />"
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />

              </TableRow>
            </TableHeader>
            <TableBody>
              {(plans[0]?.features |[]).map((feature, index,) => (
                <TableRow key={feature.name}>
<TableCell className='font-medium'>{feature.name}</TableCell>
                  {plans.map(plan => (
                    <TableCell
                      key={`${plan.name}-${feature.name}`}
                      className='text-center'
                    >
                        <Check className='h-5 w-5 text-green-500 mx-auto' />
                      ) : (
                        <X className='h-5 w-5 text-muted-foreground mx-auto' />
origin/cursor/automate-test-improve-and-merge-code-2533
                      )}
                    </TableCell>;
                  ))}
                </TableRow>;
              ))}
        <div className="mt-8 text-center text-sm text-muted-foreground">"
          All plans include SSL security, 99.9% uptime SLA, and dedicated support
        </div>
:src_backup/components/enterprise/EnterprisePricingTable.tsx
      </div>
    </section>
:src_backup/components/enterprise/EnterprisePricingTable.tsx
      </div>;
    </section>;
  )
};
              </TableRow>;
            </TableHeader>;
            <TableBody>;,
              {(plans[0]?.features || []).map((feature, index) => (;
                <TableRow key={feature.name}>;
                  <TableCell className="font-medium">{feature.name}</TableCell>;
                  {plans.map((plan) => (;
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">;,
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">;
                      {plan.features[index]?.included ? (;
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;
                      ) : (;
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;
                      )}
                    </TableCell>;
                  ))}
                </TableRow>
                </TableRow>;
              ))}
:src_backup/components/enterprise/EnterprisePricingTable.tsx

            </TableBody>;
          </Table>;
        </div>;
        <div className='mt-8 text-center text-sm text-muted-foreground'>;
          All plans include SSL security, 99 && 99.9% uptime SLA, and dedicated;
          support        </div>;
      </div>;
    </section>;
  );
}        <div className="mt-8 text-center text-sm text-muted-foreground">;
          All plans include SSL security, 99 && 99.9% uptime SLA, and dedicated support;
        </div>;
      </div>;
    </section>;
  );
}
:src_backup/components/enterprise/EnterprisePricingTable.tsx

  );
}
import React from 'react';
import { Button } from '@/components / ui / button';
import { Check, X } from 'lucide-react';
:src_backup/components/enterprise/EnterprisePricingTable.tsx
import {  Table,  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
:src_backup/components/enterprise/EnterprisePricingTable.tsx
  TableRow} from "@/components/ui/table",
import { Badge } from "@/components/ui/badge",
export function EnterprisePricingTable() {
  const plans = [
    {
      name: "Teams",
      price: "$599",
      billing: "/month",
      description: "Perfect for small teams",
      users: "Up to 10 users",
      popular: false,
      features: [
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
      price: "$1,999",
      billing: "/month",
      description: "Ideal for growing companies",
      users: "Up to 50 users",
      popular: true,
      features: [
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
      features: [
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
import React from "react",;
import { Button } from "@/components/ui/button",;
import { Check, X } from 'lucide-react';
import {;
  Table,;
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
  TableRow} from "@/components/ui/table",;
import { Badge } from "@/components/ui/badge",;
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
      price: "$1,999",;
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
        { name: "Custom integrations", included: true };
        { name: "Dedicated success manager", included: true }]}];
  return (;
    <section id="pricing" className="py-20 px-4 md:px-6">;
      <div className="container mx-auto max-w-7xl">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
            Choose the perfect plan for your team size and requirements;
          </p>;
        </div>;
        <div className="overflow-x-auto">;
          <Table className="border rounded-lg">;
            <TableHeader>;
:src_backup/components/enterprise/EnterprisePricingTable.tsx
              <TableRow>;
                <TableHead className="w-[200px]">Plan Features</TableHead>;
                {plans.map((plan) => (;
                  <TableHead key={plan.name} className="text-center">;
                    <div className="flex flex-col items-center">;
                      {plan.popular && (;
                        <Badge className="mb-2 bg-zion-purple">Most Popular</Badge>;
                      )}
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
:src_backup/components/enterprise/EnterprisePricingTable.tsx
                      <p className="text-sm font-medium mt-2">{plan.users}</p>;
                      <Button;
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
                      </Button>
                    </div>
                  </TableHead>
                ))}
              </TableRow>;
            </TableHeader>;
            <TableBody>;
{(plans[0]?.features || []).map((feature, index) => (;
                <TableRow key={feature.name}>;
                  <TableCell className="font-medium">{feature.name}</TableCell>;
                  {plans.map((plan) => (;
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">;
                      {plan.features[index]?.included ? (;
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;
                      ) : (;
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;
                      )}
                    </TableCell>;
                  ))}
                </TableRow>;
              ))}
            </TableBody>;
          </Table>;
        </div>;
        <div className="mt-8 text-center text-sm text-muted-foreground">;
          All plans include SSL security, 99.9% uptime SLA, and dedicated support;
        </div>;
      </div>;
    </section>;
  );
              {(plans[0]?.features || []).map ((feature, index, ) => (
                <TableRow key={feature.name}>;
                  <TableCell className='font - medium'>{feature.name}</TableCell>;
                  {plans.map (plan => (
                    <TableCell;
                      key={`${plan.name}-${feature.name}`}`
                      className='text - center';
                    >;
                        <Check className='h - 5 w - 5 text - green - 500 mx - auto' />) : ('
                        <X className='h - 5 w - 5 text - muted - foreground mx - auto' />                      )}'
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />;,
                      {plan.features[index]?.included ? (
                        <Check className="h - 5 w - 5 text - green - 500 mx - auto" />) : ("
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />)}"
                    </TableCell>))}
                </TableRow>))}
            </TableBody>;
          </Table>;
        </div>;
        <div className='mt - 8 text - center text - sm text - muted - foreground'>;
          All plans include SSL security, 99.9% uptime SLA, and dedicated;
          support        </div>;
      </div>;
    </section>);
}        <div className="mt - 8 text - center text - sm text - muted - foreground">;
          All plans include SSL security, 99.9% uptime SLA, and dedicated support;
        </div>;
      </div>;
    </section>);
}
;)))]]
        <div className="mt-8 text-center text-sm text-muted-foreground">;
          All plans include SSL security, 99.9% uptime SLA, and dedicated support;
        </div>;
      </div>;
    </section>;
  );
}
;
;
:src_backup/components/enterprise/EnterprisePricingTable.tsx

            </TableBody>
          </Table>
        </div>

<div className='mt-8 text-center text-sm text-muted-foreground'>
          All plans include SSL security, 99.9% uptime SLA, and dedicated
          support
        </div>
      </div>
    </section>
  );
}
:src/components/enterprise/EnterprisePricingTable.tsx
                      <p className='text - sm text - muted - foreground mt - 1'>;
                      <p className='text - sm font - medium mt - 2'>{plan.users}</p>                      <Button;`;
                        className={`mt - 4 w - full ${plan.popular ? 'bg - zion - purple hover:bg - zion - purple / 90' : }`}
                      >;
                        {plan.name === 'Enterprise';
                          : 'Get Started'}                                            <p className="text - sm font - medium mt - 2">{plan.users}</p>;"
                        variant = {plan.popular ? 'default' : 'outline', }

                  ))}

                  <TableCell className='font - medium'>{feature.name};
                      key={`${plan.name}-${feature.name}`}
                      className='text - center';

                        <Check className='h - 5 w - 5 text - green - 500 mx - auto' />) : (
)
                        <X className='h - 5 w - 5 text - muted - foreground mx - auto' />                      )}

                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />;"
                        <Check className="h - 5 w - 5 text - green - 500 mx - auto" />) : ("
)"
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />)}"

        <div className='mt - 8 text - center text - sm text - muted - foreground'>;
    </section>);
}        <div className="mt - 8 text - center text - sm text - muted - foreground">;"
    </section>);"`;
pr-12325
