import { Check, X } from 'lucide-react'

TableBody,
  TableCell,
  TableHead,
  TableHeader,

import React from "react",
import { Button } from "@/components/ui/button",

import {

  Table,
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
      name: "Business",
      price: "$1,999";
      description: "Ideal for growing companies",
      users: "Up to 50 users",
      popular: true,
        { name: "Enhanced SLA (8h)", included: true },
        { name: "Advanced branding", included: true },
        { name: "API access", included: true },
      name: "Enterprise",
      price: "Custom",
      billing: "",
      description: "For large organizations",
      users: "Unlimited users",

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">

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
      billing: '/month',;
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
      name: 'Business',;
      price: '$1,999',;
      description: 'Ideal for growing companies',;
      users: 'Up to 50 users',;
      popular: true,;
        { name: 'Enhanced SLA (8h)', included: true },;
        { name: 'Advanced branding', included: true },;
        { name: 'API access', included: true },;
      name: 'Enterprise',;
      price: 'Custom',;
      billing: '',;
      description: 'For large organizations',;
      users: 'Unlimited users',;
        { name: 'Premium SLA (1h)', included: true },;
        { name: 'Full white labeling', included: true },;
        { name: 'Custom integrations', included: true },;
        { name: 'Dedicated success manager', included: true },;
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
                      <p className='text-sm text-muted-foreground mt-1'>;
                        {plan && plan.description}
                      <p className='text-sm font-medium mt-2'>{plan && plan.users}</p>                      <Button
                        className={`mt-4 w-full ${plan && plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan && plan.popular ? 'default' : 'outline'}>;
                        {plan && plan.name === 'Enterprise';
                          ? 'Request Quote';
                          : 'Get Started'}                      </Button>                      <p className="text-sm font-medium mt-2">{plan && plan.users}</p>;
                      <Button
                        variant = {plan && plan.popular ? 'default' : 'outline',}>;
                          : 'Get Started'}                        {plan && plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
                      </Button>;
                  </TableHead>;

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

                      <span className="font-bold text-xl">{plan.name}</span>;
                      <div className="flex items-baseline mt-1">;
                        <span className="text-2xl font-bold">{plan.price}</span>;
                        <span className="text-sm text-muted-foreground ml-1">;

                          {plan.billing}
                        </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}
                      <p className='text-sm font-medium mt-2'>{plan.users}</p>                      <Button
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.name === 'Enterprise'
                          ? 'Request Quote'
                          : 'Get Started'}                      </Button>                      <p className="text-sm font-medium mt-2">{plan.users}</p>
                        variant = {plan.popular ? 'default' : 'outline',}
                          : 'Get Started'}                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
                      <p className="text-sm font-medium mt-2">{plan.users}</p>;
                      <Button;

                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}

                      </Button>
                  </TableHead>
                ))}

              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {(plans[0]?.features || []).map((feature, index,) => (;
                <TableRow key={feature && feature.name}>;
                  <TableCell className='font-medium'>{feature && feature.name}</TableCell>;

                    <TableCell
                      key={`${plan && plan.name}-${feature && feature.name}`}
                      className='text-center'>;
                        <Check className='h-5 w-5 text-green-500 mx-auto' />;
                      ) : (;
                        <X className='h-5 w-5 text-muted-foreground mx-auto' />                      )}
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;
                      {plan && plan.features[index]?.included ? (;
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;

                  <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">
                      {plan.features[index]?.included ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />

                    </TableCell>;

        <div className="mt-8 text-center text-sm text-muted-foreground">

          All plans include SSL security, 99.9% uptime SLA, and dedicated support

    </section>

    </section>;
  );
};

              {(plans[0]?.features || []).map((feature, index) => (;
                <TableRow key={feature.name}>;
                  <TableCell className="font-medium">{feature.name}</TableCell>;
                  {plans.map((plan) => (;
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">;
                      {plan.features[index]?.included ? (;
                </TableRow>

            </TableBody>;
          </Table>;

        <div className='mt-8 text-center text-sm text-muted-foreground'>;
          All plans include SSL security, 99 && 99.9% uptime SLA, and dedicated;
          support        </div>;
}        <div className="mt-8 text-center text-sm text-muted-foreground">;
          All plans include SSL security, 99 && 99.9% uptime SLA, and dedicated support;
}

import { Button } from '@/components / ui / button';
import {  Table,  Table,
  TableRow,
} from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
  TableRow} from "@/components / ui / table",
import { Badge  } from '@/components / ui / badge';
export /**
 * EnterprisePricingTable - Function description
 */
function EnterprisePricingTable() {
      name: 'Teams',
      price: '$599',
      billing: '/month',
      description: 'Perfect for small teams',
      users: 'Up to 10 users',
        { name: 'Private hiring portal', included: true },
        { name: 'Dedicated talent pool', included: true },
        { name: 'Standard SLA (24h)', included: true },
        { name: 'Basic branding', included: true },
        { name: 'Admin dashboard', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'API access', included: false },
        { name: 'Custom integrations', included: false },
        { name: 'Dedicated success manager', included: false },
      ],
    },
      name: 'Business',
      price: '$1, 999',
      description: 'Ideal for growing companies',
      users: 'Up to 50 users',
        { name: 'Enhanced SLA (8h)', included: true },
        { name: 'Advanced branding', included: true },
        { name: 'API access', included: true },
      name: 'Enterprise',
      price: 'Custom',
      billing: '',
      description: 'For large organizations',
      users: 'Unlimited users',
        { name: 'Premium SLA (1h)', included: true },
        { name: 'Full white labeling', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated success manager', included: true },
    <section id='pricing' className='py - 20 px - 4 md:px - 6'>;
      <div className='container mx - auto max - w-7xl'>;
        <div className='text - center mb - 12'>;
          <h2 className='text - 3xl md:text - 4xl font - bold mb - 4'>;
          <p className='text - xl text - muted - foreground max - w-2xl mx - auto'>            Choose the perfect plan for your team size and requirements;
        <div className='overflow - x-auto'>;
          <Table className='border rounded - lg'>    <section id="pricing" className="py - 20 px - 4 md:px - 6">;
      <div className="container mx - auto max - w-7xl">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Enterprise Plans</h2>;
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;
          <Table className='border rounded - lg'>;
                {plans.map (plan => (
                  <TableHead key={plan.name} className='text - center'>;
                    <div className='flex flex - col items - center'>                <TableHead className="w-[200px]">Plan Features</TableHead>;
                {plans.map ((plan, ) => (
                  <TableHead key={plan.name} className="text - center">;
                    <div className="flex flex - col items - center">;
                        <Badge className='mb - 2 bg - zion - purple'>;
                        </Badge>)}
                      <span className='font - bold text - xl'>{plan.name}</span>;
                      <div className='flex items - baseline mt - 1'>;
                        <span className='text - 2xl font - bold'>{plan.price}</span>;
                        <span className='text - sm text - muted - foreground ml - 1'>;
                      <p className='text - sm text - muted - foreground mt - 1'>;
                      <p className='text - sm font - medium mt - 2'>{plan.users}</p>                      <Button;
                        className={`mt - 4 w - full ${plan.popular ? 'bg - zion - purple hover:bg - zion - purple / 90' : ''}`}
                      >;
                        {plan.name === 'Enterprise';
                          : 'Get Started'}                      </Button>                      <p className="text - sm font - medium mt - 2">{plan.users}</p>;
                        variant = {plan.popular ? 'default' : 'outline', }
                  </TableHead>))}
              {(plans[0]?.features || []).map ((feature, index, ) => (
                  <TableCell className='font - medium'>{feature.name}</TableCell>;
                    <TableCell;
                      key={`${plan.name}-${feature.name}`}
                      className='text - center';
                        <Check className='h - 5 w - 5 text - green - 500 mx - auto' />) : (
                        <X className='h - 5 w - 5 text - muted - foreground mx - auto' />                      )}
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />;
                        <Check className="h - 5 w - 5 text - green - 500 mx - auto" />) : (
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />)}
                    </TableCell>))}
                </TableRow>))}
        <div className='mt - 8 text - center text - sm text - muted - foreground'>;
          All plans include SSL security, 99.9% uptime SLA, and dedicated;
    </section>);
}        <div className="mt - 8 text - center text - sm text - muted - foreground">;
          All plans include SSL security, 99.9% uptime SLA, and dedicated support;
;