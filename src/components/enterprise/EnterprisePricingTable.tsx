
import { Check, X } from 'lucide-react'

import {  Table,  Table
  TableBody
  TableCell
  TableHead
  TableHeader
  TableRow
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
  TableRow} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

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
      price: "$1,999";
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
    {;
      name: 'Business',;
      price: '$1,999',;
      billing: '/month',;
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
      billing: '',;
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
          </p>
        </div>

                          {plan.billing}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}

=======

                      </p>;
                      <p className="text-sm font-medium mt-2">{plan.users}</p>;
                      <Button;

                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                      </Button>
                    </div>
                  </TableHead>
                ))}
<<<<<<< HEAD
