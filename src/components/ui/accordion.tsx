
import * as React from "react"
import { ElementRef, ComponentPropsWithoutRef } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item

const AccordionItem = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>

import * as React from 'react';
import {ElementRef, ComponentPropsWithoutRef} from 'react';
import * as AccordionPrimitive from '@radix - ui / react - accordion';
import {ChevronDown} from 'lucide-react';
import {cn} from '@/lib / utils';
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forward_ref<;
  ElementRef < typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef < typeof AccordionPrimitive.Item>;
></typeof>(({ class_name, ...props }, ref) => (
  <AccordionPrimitive.Item;
    ref={ref}
    className={cn("border-b", className)}
    {...props}

AccordionItem.displayName = "AccordionItem"

AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(

AccordionItem.displayName = 'AccordionItem'
const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>
  ComponentPropsWithoutRef<typeof AccordionPrimitive.T</typeof>rigger>
AccordionItem.displayName = "AccordionItem"

AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
      )}
    </AccordionPrimitive>  {...props}
    >
      {children}
      <ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200' />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
  />));
AccordionItem.display_name = 'AccordionItem';
const AccordionTrigger = React.forward_ref<;
  ElementRef < typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef < typeof AccordionPrimitive.T</typeof > rigger>;
>(({ class_name, children, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>;
    <AccordionPrimitive.Trigger;
      ref={ref}
      className={cn (
        'flex flex - 1 items - center justify - between py - 4 font - medium transition - all hover:underline [&[data - state = open]>svg]:rotate - 180',
        class_name)}
    </AccordionPrimitive>  {...props}
    >;
      {children}
      <ChevronDown className='h - 4 w - 4 shrink - 0 transition - transform duration - 200' />;
    </AccordionPrimitive.Trigger>;
  </AccordionPrimitive.Header>));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className = {
  cn("pb-4 pt-0",
  className)

    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

