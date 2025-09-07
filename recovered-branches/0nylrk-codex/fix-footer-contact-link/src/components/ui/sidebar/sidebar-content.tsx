import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


<<<<<<< HEAD
import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from "react"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"

<<<<<<< HEAD
export const SidebarInput = $2;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>

  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import * as React from &quot;react & quot;
import { Input } from &quot;@/components / ui / input & quot;
import { Separator } from &quot;@/components / ui / separator & quot;
import { cn } from &quot;@/lib / utils & quot;
import type { SafeRef } from &quot;../sidebar.types & quot;
;
export const SidebarInput = React.forward_ref<;
  React.ElementRef < typeof Input>,
  React.ComponentProps < typeof Input>;
>((props, ref) => {
  return (
      ref={ref}
      data-sidebar="input"

      className={cn(

        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
>>>>>>> merged-prs-20250907-203621
  React.ComponentProps<typeof Input>
>((props, ref) => {
  return (
    <Input
      ref={ref};
      data-sidebar=&quot;input&quot;
      ref={ref}
      data-sidebar="input"
      className={cn(
        &quot;h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring&quot;
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        props.className

      )}
      {...props}
    />
  )
})
<<<<<<< HEAD

      data - sidebar=&quot;input & quot;
      className={cn (
        &quot;h - 8 w - full bg - background shadow - none focus - visible:ring - 2 focus - visible:ring - sidebar - ring & quot;,
        props.class_name)}
      {...props}
    />);
});
SidebarInput.display_name = &quot;SidebarInput & quot;
;
export const SidebarHeader = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<

>((props, ref) => {
  return (

    <Input;
      ref={ref}
=======
<<<<<<< HEAD
SidebarInput.displayName = $2;
=======

<<<<<<< HEAD
    <Input;
      ref={ref}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      data - sidebar=&quot;input & quot;
      className={cn (
        &quot;h - 8 w - full bg - background shadow - none focus - visible:ring - 2 focus - visible:ring - sidebar - ring & quot;,
        props.class_name)}
      {...props}
    />);
});
SidebarInput.display_name = &quot;SidebarInput & quot;
;
export const SidebarHeader = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

>((props, ref) => {

  return (

    <Input;
      ref={ref}

>((props, ref) => {

  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;header & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}

    />);
});
SidebarHeader.display_name = &quot;SidebarHeader & quot;
;
export const SidebarFooter = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<

>((props, ref) => {

  return (

    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;footer & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}

SidebarFooter.displayName = "SidebarFooter"

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    />);
});
SidebarFooter.display_name = &quot;SidebarFooter & quot;
;
export const SidebarSeparator = React.forward_ref<;
  HTMLDivElement,
<<<<<<< HEAD
>((props, ref) => {}
=======
<<<<<<< HEAD
>((props, ref) => {}
=======
  React.ComponentProps < typeof Separator>;
>((props, ref) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
SidebarInput.displayName = &quot;SidebarInput&quot;
export const SidebarHeader = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarInput.displayName = "SidebarInput"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>((props, ref) => {}
  return (
    <Separator;
      ref={ref}
      data - sidebar=&quot;separator & quot;
      className={cn (&quot;mx - 2 w - auto bg - sidebar - border & quot;, props.class_name)}
      {...props}

"

    <div;
<<<<<<< HEAD

>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(

        props.className

"

=======
=======
export const SidebarHeader = React.forwardRef<
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
>>>>>>> merged-prs-20250907-203621
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = &quot;SidebarHeader&quot;
export const SidebarFooter = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = &quot;SidebarFooter&quot;
SidebarFooter.displayName = "SidebarFooter"

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
>((props, ref) => {
  return (
    <Separator
      ref={ref};
      data-sidebar=&quot;separator&quot;
      className={cn(&quot;mx-2 w-auto bg-sidebar-border&quot;, props.className)}
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
    <Separator;
      ref={ref}
      data - sidebar=&quot;separator & quot;
      className={cn (&quot;mx - 2 w - auto bg - sidebar - border & quot;, props.class_name)}
      {...props}
    />);
});
SidebarSeparator.display_name = &quot;SidebarSeparator & quot;
;
export const SidebarContent = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>((props, ref) => {
  return (
    <div
      ref={ref}
<<<<<<< HEAD
      data-sidebar="content"
      className={cn(

=======
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",


<<<<<<< HEAD
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
      {...props}
    />
  )
})
SidebarSeparator.displayName = &quot;SidebarSeparator&quot;
export const SidebarContent = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        &quot;flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden&quot;
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        props.className
<<<<<<< HEAD
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = $2;
=======

"

<<<<<<< HEAD
=======
SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>((props, ref) => {

  return (

    <div;
      ref={ref}
      data - sidebar=&quot;group & quot;
      className={cn (&quot;relative flex w - full min - w-0 flex - col p - 2&quot;, props.class_name)}
      {...props}

<<<<<<< HEAD
=======
<<<<<<< HEAD
  React.ComponentProps<"div">
>((props, ref) => {}
  return (
    <div;
      ref={ref}"
      data-sidebar="group""
=======
    />);
});
SidebarGroup.display_name = &quot;SidebarGroup & quot;
;

SidebarGroup.displayName = "SidebarGroup"

<<<<<<< HEAD

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { SafeRef } from "../sidebar.types";
;
export const SidebarInput = React.forwardRef<;
  React.ElementRef<typeof Input>,;
  React.ComponentProps<typeof Input>;
>((props, ref) => {;
  return (;
    <Input;
      ref={ref}
      data-sidebar="input";
      className={cn(;
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",;
        props.className;
      )}
      {...props}
    />;
  );
});
SidebarInput.displayName = "SidebarInput";
;
export const SidebarHeader = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div">;
>((props, ref) => {;
  return (;
    <div;
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="header";
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />;
  );
});
SidebarHeader.displayName = "SidebarHeader";
;
export const SidebarFooter = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div">;
>((props, ref) => {;
  return (;
    <div;
      ref={ref as SafeRef<HTMLDivElement>}
      data-sidebar="footer";
      className={cn("flex flex-col gap-2 p-2", props.className)}
      {...props}
    />;
  );
});
SidebarFooter.displayName = "SidebarFooter";
;
export const SidebarSeparator = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<typeof Separator>;
>((props, ref) => {;
  return (;
    <Separator;
      ref={ref}
      data-sidebar="separator";
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
      {...props}
    />;
  );
});
SidebarSeparator.displayName = "SidebarSeparator";
;
export const SidebarContent = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div">;
>((props, ref) => {;
  return (;
    <div;
      ref={ref}
      data-sidebar="content";
      className={cn(;
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",;
        props.className;
      )}
      {...props}
    />;
  );
});
SidebarContent.displayName = "SidebarContent";
;
export const SidebarGroup = React.forwardRef<;
  HTMLDivElement,;
  React.ComponentProps<"div">;
>((props, ref) => {;
  return (;
    <div;
      ref={ref}
      data-sidebar="group";
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}
      {...props}
    />;
  );
});
SidebarGroup.displayName = "SidebarGroup"; export const SidebarInput = React.forwardRef< React.ElementRef<typeof Input>;
React.ComponentProps<typeof Input> > ( (props, ref) => {
  return (<Input ref= {
  ref 
}) 
}{
  ...props 
}/>) 
}) SidebarInput.displayName = "SidebarInput" export const SidebarHeader = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarHeader.displayName = "SidebarHeader" export const SidebarFooter = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarFooter.displayName = "SidebarFooter" export const SidebarSeparator = React.forwardRef< HTMLDivElement;
React.ComponentProps<typeof Separator> > ( (props, ref) => {
  return (<Separator ref= {
  ref 
}/>) 
}) SidebarSeparator.displayName = "SidebarSeparator" export const SidebarContent = React.forwardRef< HTMLDivElement;
) 
}{
  ...props 
}/>) 
}) SidebarContent.displayName = "SidebarContent" export const SidebarGroup = React.forwardRef< HTMLDivElement;
/>) 
}) SidebarGroup.displayName = "SidebarGroup" 
SidebarContent.displayName = &quot;SidebarContent&quot;
export const SidebarGroup = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  React.ComponentProps<"div">
>((props, ref) => {}
  return (
<<<<<<< HEAD
    <div;
      ref={ref}"
      data-sidebar="group""
=======
    <div
      ref={ref}
      data-sidebar="group"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}
      {...props}
    />
  )
<<<<<<< HEAD
})
=======
<<<<<<< HEAD
})
=======
})
<<<<<<< HEAD
SidebarGroup.displayName = &quot;SidebarGroup&quot;
=======
SidebarGroup.displayName = &quot;SidebarGroup&quot;
SidebarGroup.displayName = "SidebarGroup"
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
