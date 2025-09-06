<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx

<<<<<<< HEAD
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
import React from "react";
import { Button } from "@/components/ui/button";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { Check, X } from 'lucide-react'
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD

import React from "react";
import { Button } from "@/components/ui/button";
=======
import React from 'react'
import { Button } from '@/components/ui/button'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Check, X } from 'lucide-react'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export function EnterprisePricingTable() {
  const plans = [
    {
      name: 'Teams'
      price: '$599'
      billing: '/month'
      description: 'Perfect for small teams'
      users: 'Up to 10 users'
      popular: false
      features: [
        { name: 'Private hiring portal', included: true }
        { name: 'Dedicated talent pool', included: true }
        { name: 'Standard SLA (24h)', included: true }
        { name: 'Basic branding', included: true }
        { name: 'Admin dashboard', included: true }
        { name: 'Team collaboration', included: true }
        { name: 'API access', included: false }
        { name: 'Custom integrations', included: false }
        { name: 'Dedicated success manager', included: false }
      ]
    }
    {
      name: 'Business'
      price: '$1,999'
      billing: '/month'
      description: 'Ideal for growing companies'
      users: 'Up to 50 users'
      popular: true
      features: [
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
      features: [
        { name: 'Private hiring portal', included: true }
        { name: 'Dedicated talent pool', included: true }
        { name: 'Premium SLA (1h)', included: true }
        { name: 'Full white labeling', included: true }
        { name: 'Admin dashboard', included: true }
        { name: 'Team collaboration', included: true }
        { name: 'API access', included: true }
        { name: 'Custom integrations', included: true }
        { name: 'Dedicated success manager', included: true }
      ]
    }
  ]

  return (
    <section id='pricing' className='py-20 px-4 md:px-6'>
      <div className='container mx-auto max-w-7xl'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Enterprise Plans
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>            Choose the perfect plan for your team size and requirements
          </p>
        </div>
        <div className='overflow-x-auto'>
          <Table className='border rounded-lg'>    <section id="pricing" className="py-20 px-4 md:px-6">
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
TableBody,
  TableCell,
  TableHead,
  TableHeader,

import React from "react",
import { Button } from "@/components/ui/button",
import { Check, X } from 'lucide-react'
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow} from "@/components/ui/table",
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx

import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD

=======
xport function EnterprisePricingTable() {
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
import { Badge } from "@/components/ui/badge";
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
export function EnterprisePricingTable() {
>>>>>>>   const plans = [
=======
import { Badge } from "@/components/ui/badge",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export function EnterprisePricingTable() {
  const plans = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
      price: "$1,999";
=======
      price: "$1,999",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        { name: 'Private hiring portal', included: true },
        { name: 'Dedicated talent pool', included: true },
        { name: 'Premium SLA (1h)', included: true },
        { name: 'Full white labeling', included: true },
        { name: 'Admin dashboard', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'API access', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated success manager', included: true },
      ],
    },
  ]
  return (
    <section id='pricing' className='py-20 px-4 md:px-6'>
      <div className='container mx-auto max-w-7xl'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Enterprise Plans
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>            Choose the perfect plan for your team size and requirements
          </p>
        </div>
        <div className='overflow-x-auto'>
          <Table className='border rounded-lg'>    <section id="pricing" className="py-20 px-4 md:px-6">
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        { name: "Private hiring portal", included: true },
        { name: "Dedicated talent pool", included: true },
        { name: "Premium SLA (1h)", included: true },
        { name: "Full white labeling", included: true },
        { name: "Admin dashboard", included: true },
        { name: "Team collaboration", included: true },
        { name: "API access", included: true },
        { name: "Custom integrations", included: true },
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        { name: "Dedicated success manager", included: true }]}],

  return (
    <section id="pricing" className="py-20 px-4 md:px-6">
<<<<<<< HEAD
<<<<<<< HEAD

========
        { name: "Dedicated success manager", included: true }]}];
  return (
    <section id="pricing" className="py-20 px-4 md:px-6">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
      <div className="container mx-auto max-w-7xl">
=======
>>>>>>>       <div className="container mx-auto max-w-7xl">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import {  Table,  Table,;
=======

import React from "react",;
import { Button } from "@/components/ui/button",;
import { Check, X } from 'lucide-react';
import {;
  Table,;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  TableBody,;
  TableCell,;
  TableHead,;
  TableHeader,;
<<<<<<< HEAD
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
=======
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
    <section id="pricing" className="py-20 px-4 md:px-6">;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <div className="container mx-auto max-w-7xl">;
        <div className="text-center mb-12">;
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>;
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">;
<<<<<<< HEAD
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
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx

            Choose the perfect plan for your team size and requirements
          </p>
        </div>
<<<<<<< HEAD

=======
        <div className='overflow-x-auto'>
          <Table className='border rounded-lg'>
========
            Choose the perfect plan for your team size and requirements
          </p>
        </div>
        <div className="overflow-x-auto">
          <Table className="border rounded-lg">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Plans</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          </p>
        </div>
<<<<<<< HEAD
        <div className='overflow-x-auto'>
          <Table className='border rounded-lg'>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>                           {plan.billing}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                          {plan.billing}
>>>>>>>                         </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}
<<<<<<< HEAD

=======
=======
=======

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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                          {plan.billing}
                        </span>
                      </div>
                      <p className='text-sm text-muted-foreground mt-1'>
                        {plan.description}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </p>
                      <p className='text-sm font-medium mt-2'>{plan.users}</p>                      <Button
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.name === 'Enterprise'
                          ? 'Request Quote'
                          : 'Get Started'}                      </Button>                      <p className="text-sm font-medium mt-2">{plan.users}</p>
                      <Button
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant = {plan.popular ? 'default' : 'outline',}
                      >
                        {plan.name === 'Enterprise'
                          ? 'Request Quote'
                          : 'Get Started'}                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
<<<<<<< HEAD
>>>>>>>                       </Button>
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                      </Button>
>>>>>>>                     </div>
                  </TableHead>
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                ))}
<<<<<<< HEAD

              </TableRow>;
=======
      </div>
    </section>
  )
}
========
=======
            Choose the perfect plan for your team size and requirements;
          </p>;
        </div>;
;
        <div className="overflow-x-auto">;
          <Table className="border rounded-lg">;
            <TableHeader>;
              <TableRow>;
                <TableHead className="w-[200px]">Plan Features</TableHead>;
                {plans.map((plan) => (;
                  <TableHead key={plan.name} className="text-center">;
                    <div className="flex flex-col items-center">;
                      {plan.popular && (;
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
                      </Button>;
                    </div>;
                  </TableHead>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                ))}
              </TableRow>;
            </TableHeader>;
            <TableBody>;
<<<<<<< HEAD
              {(plans[0]?.features || []).map((feature, index,) => (;
                <TableRow key={feature && feature.name}>;
                  <TableCell className='font-medium'>{feature && feature.name}</TableCell>;
                  {plans && plans.map(plan => (;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
                    <TableCell
                      key={`${plan && plan.name}-${feature && feature.name}`}
                      className='text-center'>;
                        <Check className='h-5 w-5 text-green-500 mx-auto' />;
                      ) : (;
                        <X className='h-5 w-5 text-muted-foreground mx-auto' />                      )}
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;
                      {plan && plan.features[index]?.included ? (;
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;
                      ) : (;
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  {plans.map((plan) => (
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">
=======
=======
                      </p>;
                      <p className="text-sm font-medium mt-2">{plan.users}</p>;
                      <Button;
                        className={`mt-4 w-full ${plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                      </Button>
                    </div>
                  </TableHead>
                ))}
<<<<<<< HEAD
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
                        <X className='h-5 w-5 text-muted-foreground mx-auto' />                      )}
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {plan.features[index]?.included ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />
<<<<<<< HEAD
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx

>>>>>>>                       )}
========
                      )}
=======
              {(plans[0]?.features || []).map((feature, index) => (;
                <TableRow key={feature.name}>;
                  <TableCell className="font-medium">{feature.name}</TableCell>;
                  {plans.map((plan) => (;
                    <TableCell key={`${plan.name}-${feature.name}`} className="text-center">;
                      {plan.features[index]?.included ? (;
                        <Check className="h-5 w-5 text-green-500 mx-auto" />;
                      ) :(;
                        <X className="h-5 w-5 text-muted-foreground mx-auto" />;                      )}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
                    </TableCell>;
                  ))}
                </TableRow>;
              ))}
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx


        <div className="mt-8 text-center text-sm text-muted-foreground">

========
<<<<<<< HEAD
        <div className="mt-8 text-center text-sm text-muted-foreground">
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
          All plans include SSL security, 99.9% uptime SLA, and dedicated support
        </div>
      </div>
    </section>
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx

=======
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className='mt-8 text-center text-sm text-muted-foreground'>
          All plans include SSL security, 99.9% uptime SLA, and dedicated
          support        </div>
      </div>
    </section>
  )
}        <div className="mt-8 text-center text-sm text-muted-foreground">
          All plans include SSL security, 99.9% uptime SLA, and dedicated support
        </div>
<<<<<<< HEAD
      </div>
    </section>
  )
}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
    </section>;
  );
};
<<<<<<< HEAD

>>>>>>>               </TableRow>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
              </TableRow>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                </TableRow>
              ))}
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
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
<<<<<<<< HEAD:src/components/enterprise/EnterprisePricingTable.tsx
;
<<<<<<< HEAD

=======
>>>>>>> 
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
  );
}
import React from 'react';
import { Button } from '@/components / ui / button';
import { Check, X } from 'lucide-react';
import {  Table,  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components / ui / table';
import { Badge } from '@/components / ui / badge';
  TableRow} from "@/components / ui / table",
import { Badge  } from '@/components / ui / badge';
export /**
 * EnterprisePricingTable - Function description
 */
function EnterprisePricingTable() {
  const plans = [;
    {
      name: 'Teams',
      price: '$599',
      billing: '/month',
      description: 'Perfect for small teams',
      users: 'Up to 10 users',
      popular: false,
      features: [;
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
    {
      name: 'Business',
      price: '$1, 999',
      billing: '/month',
      description: 'Ideal for growing companies',
      users: 'Up to 50 users',
      popular: true,
      features: [;
        { name: 'Private hiring portal', included: true },
        { name: 'Dedicated talent pool', included: true },
        { name: 'Enhanced SLA (8h)', included: true },
        { name: 'Advanced branding', included: true },
        { name: 'Admin dashboard', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'API access', included: true },
        { name: 'Custom integrations', included: false },
        { name: 'Dedicated success manager', included: false },
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      billing: '',
      description: 'For large organizations',
      users: 'Unlimited users',
      popular: false,
      features: [;
        { name: 'Private hiring portal', included: true },
        { name: 'Dedicated talent pool', included: true },
        { name: 'Premium SLA (1h)', included: true },
        { name: 'Full white labeling', included: true },
        { name: 'Admin dashboard', included: true },
        { name: 'Team collaboration', included: true },
        { name: 'API access', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated success manager', included: true },
      ],
    },
  ];
  return (
    <section id='pricing' className='py - 20 px - 4 md:px - 6'>;
      <div className='container mx - auto max - w-7xl'>;
        <div className='text - center mb - 12'>;
          <h2 className='text - 3xl md:text - 4xl font - bold mb - 4'>;
            Enterprise Plans;
          </h2>;
          <p className='text - xl text - muted - foreground max - w-2xl mx - auto'>            Choose the perfect plan for your team size and requirements;
          </p>;
        </div>;
        <div className='overflow - x-auto'>;
          <Table className='border rounded - lg'>    <section id="pricing" className="py - 20 px - 4 md:px - 6">;
      <div className="container mx - auto max - w-7xl">;
        <div className="text - center mb - 12">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 4">Enterprise Plans</h2>;
          <p className="text - xl text - muted - foreground max - w-2xl mx - auto">;
          </p>;
        </div>;
        <div className='overflow - x-auto'>;
          <Table className='border rounded - lg'>;
            <TableHeader>;
              <TableRow>;
                <TableHead className='w-[200px]'>Plan Features</TableHead>;
                {plans.map (plan => (
                  <TableHead key={plan.name} className='text - center'>;
                    <div className='flex flex - col items - center'>                <TableHead className="w-[200px]">Plan Features</TableHead>;
                {plans.map ((plan, ) => (
                  <TableHead key={plan.name} className="text - center">;
                    <div className="flex flex - col items - center">;
                      {plan.popular && (
                        <Badge className='mb - 2 bg - zion - purple'>;
                          Most Popular;
                        </Badge>)}
                      <span className='font - bold text - xl'>{plan.name}</span>;
                      <div className='flex items - baseline mt - 1'>;
                        <span className='text - 2xl font - bold'>{plan.price}</span>;
                        <span className='text - sm text - muted - foreground ml - 1'>;
                          {plan.billing}
                        </span>;
                      </div>;
                      <p className='text - sm text - muted - foreground mt - 1'>;
                        {plan.description}
                      </p>;
                      <p className='text - sm font - medium mt - 2'>{plan.users}</p>                      <Button;
                        className={`mt - 4 w - full ${plan.popular ? 'bg - zion - purple hover:bg - zion - purple / 90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >;
                        {plan.name === 'Enterprise';
                          ? 'Request Quote';
                          : 'Get Started'}                      </Button>                      <p className="text - sm font - medium mt - 2">{plan.users}</p>;
                      <Button;
                        className={`mt - 4 w - full ${plan.popular ? 'bg - zion - purple hover:bg - zion - purple / 90' : ''}`}
                        variant = {plan.popular ? 'default' : 'outline', }
                      >;
                        {plan.name === 'Enterprise';
                          ? 'Request Quote';
                          : 'Get Started'}                        {plan.name === "Enterprise" ? "Request Quote" : "Get Started"}
                      </Button>;
                    </div>;
                  </TableHead>))}
              </TableRow>;
            </TableHeader>;
            <TableBody>;
              {(plans[0]?.features || []).map ((feature, index, ) => (
                <TableRow key={feature.name}>;
                  <TableCell className='font - medium'>{feature.name}</TableCell>;
                  {plans.map (plan => (
                    <TableCell;
                      key={`${plan.name}-${feature.name}`}
                      className='text - center';
                    >;
                        <Check className='h - 5 w - 5 text - green - 500 mx - auto' />) : (
                        <X className='h - 5 w - 5 text - muted - foreground mx - auto' />                      )}
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />;
                      {plan.features[index]?.included ? (
                        <Check className="h - 5 w - 5 text - green - 500 mx - auto" />) : (
                        <X className="h - 5 w - 5 text - muted - foreground mx - auto" />)}
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
=======
            </TableBody>;
          </Table>;
        </div>;
;
=======
            </TableBody>;
          </Table>;
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="mt-8 text-center text-sm text-muted-foreground">;
          All plans include SSL security, 99.9% uptime SLA, and dedicated support;
        </div>;
      </div>;
    </section>;
<<<<<<< HEAD
  ),;}
 import { ;
  {;
  {;
  Check, X ;
 } from "lucide-react";
import {;
  Table;
TableBody;
TableCell;
TableHead;
TableHeader;
export function EnterprisePricingTable () {;
  const plans = [ {;
  name: "Teams";";
price: "$599";";
billing: "/month";";
description: "Perfect for small teams";";
users: "Up to 10 users";
popular: false;
features: [ {";
  name: "Private hiring portal", included: true ;
};
{";
  name: "Dedicated talent pool", included: true ;
};
{";
  name: "Standard SLA (24h) ", included: true ;
};
{";
  name: "Basic branding", included: true ;
};
{";
  name: "Admin dashboard", included: true ;
};
{";
  name: "Team collaboration", included: true ;
};
{";
  name: "API access", included: false ;
};
{";
  name: "Custom integrations", included: false ;
};
{";
  name: "Dedicated success manager", included: false ;
}] ;
};
{";
  name: "Business";";
price: "$1,  999";";
billing: "/month";";
description: "Ideal for growing companies";";
users: "Up to 50 users";
popular: true;
features: [ {";
  name: "Private hiring portal", included: true ;
};
{";
  name: "Dedicated talent pool", included: true ;
};
{";
  name: "Enhanced SLA (8h) ", included: true ;
};
{";
  name: "Advanced branding", included: true ;
};
{";
  name: "Admin dashboard", included: true ;
};
{";
  name: "Team collaboration", included: true ;
};
{";
  name: "API access", included: true ;
};
{";
  name: "Custom integrations", included: false ;
};
{";
  name: "Dedicated success manager", included: false ;
}] ;
};
{";
  name: "Enterprise";";
price: "Custom";";
billing: "";";
description: " For large organizations";";
users: " Unlimited users";
popular: false;";
features: [ return (<section id=" pricing"className="py-20 px-4 md:px-6"> plans.map ( (plan) => (<TableHead key= {;
  plan.name ";
}className="text-center"> <div className="flex flex-col items-center"> {";
  plan.popular && (<Badge className="mb-2 bg-zion-purple">Most Popular</Badge>) ";
}<span className="font-bold text-xl"> {;
  plan.name ";
}</span> <div className="flex items-baseline mt-1"> <span className="text-2xl font-bold"> {;
  plan.price ";
}</span> <span className="text-sm text-muted-foreground ml-1"> {;
  plan.billing ";
}</span> </div> <p className="text-sm text-muted-foreground mt-1"> {;
  plan.description ";
}</p> <p className="text-sm font-medium mt-2"> {;
  plan.users ;
}</p> <Button className= {;
  `mt-4 w-full $ {';
  plan.popular ? 'bg-zion-purple hover:bg-zion-purple/90' : '' ;
}` ;
}variant= {';
  plan.popular ? 'default': 'outline' ;
}> </Button> </div> </TableHead>) ) ;
}</TableRow> </TableHeader> <TableBody> {;
  (plans[0]?.features || []) .map ( (feature, index) => (<TableRow key= {;
  feature.name ";
}> <TableCell className="font-medium"> {;
  feature.name ;
}</TableCell> {;
  plans.map ( (plan) => (<TableCell key= {;
  `$ {;
  plan.name ;
}-$ {;
  feature.name ;
}` ";
}className="text-center"> {";
  plan.features[index]?.included ? (<Check className="h-5 w-5 text-green-500 mx-auto"/>) : (<X className="h-5 w-5 text-muted-foreground mx-auto"/>) ;
}</TableCell>) ) ;
}</TableRow>) ) ";
}</TableBody> </Table> </div> <div className="mt-8 text-center text-sm text-muted-foreground"> All plans include SSL security, 99.9% uptime SLA, and dedicated support </div> </div> </section>) ;
}'"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/src/components/enterprise/EnterprisePricingTable.tsx
=======
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
