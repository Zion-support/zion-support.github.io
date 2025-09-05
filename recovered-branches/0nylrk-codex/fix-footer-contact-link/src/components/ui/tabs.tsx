import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"


const _Tabs = TabsPrimitive.Root

const _TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(_({_className, _...props}, _ref) => (
  <TabsPrimitive.List
    ref={_ref}
    className={_cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", _className
    )}
    {_...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const _TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(_({_className, _...props}, _ref) => (
  <TabsPrimitive.Trigger
    ref={_ref}
    className={_cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", _className
    )}
    {_...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const _TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(_({_className, _...props}, _ref) => (
  <TabsPrimitive.Content
    ref={_ref}
    className={_cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", _className
    )}
    {_...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export {_Tabs, _TabsList, _TabsTrigger, _TabsContent}
