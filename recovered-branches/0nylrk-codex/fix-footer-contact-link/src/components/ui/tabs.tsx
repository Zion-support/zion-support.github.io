import * as React from &quot;react&quot;
import * as TabsPrimitive from &quot;@radix-ui/react-tabs&quot;

import { cn } from &quot;@/lib/utils&quot;    )}
    {_...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName,
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(_({className, _...props}, ref) => (
  <TabsPrimitive.Trigger,
ref={ref}
    className={cn(
      &quot;inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm&quot;,
      className    )}
    {_...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName,
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(_({className, _...props}, ref) => (
  <TabsPrimitive.Content,
ref={ref}
    className={cn(
      &quot;mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2&quot;,
      className    )}
    {_...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName,
export {Tabs, TabsList, TabsTrigger, TabsContent}
