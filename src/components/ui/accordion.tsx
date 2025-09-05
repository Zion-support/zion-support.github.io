<<<<<<< HEAD
prev.includes(value) ? prev.filter(item => item !== value) [...prev,value]; )}}; return () <div className = {`space-y-1 ${className}`}> {React.Children.map(children,(child) => { if (React.isValidElement(child)) { return React.cloneElement(child,{ isOpen: openItem s.includes(child.props.value),onToggle: : unknown handleToggle(child.props.value) })} return child})} export function Accordion(props: any) {; const [openItems,setOpenItems] = useState<string[]>(; defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []; ); if (type === 'single') {; setOpenItems(openItems.includes(value) ? [] : [value])} else { setOpenItems(prev = > ; prev.includes(value) ; ? prev.filter(item => item !== value); : [...prev,value]; )}; return ()` <div className={`space-y-1 ${className}`}> {React.Children.map(children,(child) => { if (React.isValidElement(child)) { return React.cloneElement(child,{ isOpen: openItem s.includes(child.props.value),onToggle: : unknown handleToggle(child.props.value) }); return child})} </div> )} interface AccordionItemProps extends React.PropsWithChildren<{}> { children: Reac t.ReactNode; value: string; className?: string; isOpen?: boolean; onToggle?: () => void} export function AccordionItem(props: any) {; return (;` <div className={`border-b border-gray-200 ${className}`}> {React.Children.map(children: unknow n,(child: unknow n {; if (React.isValidElement(child)) {; return React.cloneElement(child,{ isOpen,onToggle }); return child})} </div> )} interface AccordionTriggerProps extends React.PropsWithChildren<{}> { children: Reac t.ReactNode; className?: string; isOpen?: boolean; onToggle?: () => void} export function AccordionTrigger(props: any) { return () <button` className = {`flex w-full items-center justify-between py-4 font-medium transition-all hover: underline focus:outline-none focus: rin g-2 focus: rin g-blue-500 focus: rin g-offset-2 ${className}`} onClick={onToggle} {children} <ChevronDown` className={`h-4 w-4 shrink-0 transition-transform duration-200 ${ ' isOpen ? 'rotate-180' : ''` }`} /> </button> )} interface AccordionContentProps extends React.PropsWithChildren<{}> {;` className={`h-4 w-4 shrink-0 transition-transform duration-200 ${; isOpen ? 'rotate-180' : '';` }`} ; />; </button>; )} children: Reac t.ReactNode; className?: string; isOpen?: boolean} export function AccordionContent(props: any) { if (!isOpen) return null; return ()` <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}> {children} </div> )} export function AccordionContent(props: any) {; if (!isOpen) return null; return ()` <div className = {`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}> {children}; </div>; )} '` </ChevronDown> </string> </div>
=======
import * as React from "react"
import { ElementRef, ComponentPropsWithoutRef } from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from 'lucide-react'

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
>>>>>>> origin/automation/changelog
