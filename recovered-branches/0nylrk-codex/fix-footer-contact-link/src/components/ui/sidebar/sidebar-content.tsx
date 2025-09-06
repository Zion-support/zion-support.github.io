
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

=======


=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import * as React from "react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"

<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

    <Input

<<<<<<< HEAD
      className={cn(

=======
      ref={ref}
      data-sidebar="input"

      className={cn(

        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
    <Input;
      ref={ref}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

=======

SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
>((props, ref) => {
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;header & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
<<<<<<< HEAD
    />
  )
})

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
    />);
});
SidebarHeader.display_name = &quot;SidebarHeader & quot;
;
export const SidebarFooter = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

=======

SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
>((props, ref) => {
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;footer & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
<<<<<<< HEAD
    />
  )
})

=======


SidebarFooter.displayName = "SidebarFooter"



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
    />);
});
SidebarFooter.display_name = &quot;SidebarFooter & quot;
;
export const SidebarSeparator = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps < typeof Separator>;
>((props, ref) => {
  return (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

    <Separator

<<<<<<< HEAD
      {...props}
    />
  )
})

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
SidebarInput.displayName = &quot;SidebarInput&quot;
export const SidebarHeader = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
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
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
<<<<<<< HEAD


      {...props}

========
    <Separator;
      ref={ref}
      data - sidebar=&quot;separator & quot;
      className={cn (&quot;mx - 2 w - auto bg - sidebar - border & quot;, props.class_name)}
      {...props}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
    />);
});
SidebarSeparator.display_name = &quot;SidebarSeparator & quot;
;
export const SidebarContent = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

=======

SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
>((props, ref) => {
  return (
    <div;
      ref={ref}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

      data-sidebar="content"
      className={cn(

<<<<<<< HEAD
=======
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        props.className
      )}
      {...props}
    />
  )
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
      data - sidebar=&quot;content & quot;
      className={cn (
        &quot;flex min - h-0 flex - 1 flex - col gap - 2 overflow - auto group - data-[collapsible = icon]:overflow - hidden & quot;,
        props.class_name)}
      {...props}
    />);
});
SidebarContent.display_name = &quot;SidebarContent & quot;
;
export const SidebarGroup = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

=======

SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
>((props, ref) => {
  return (
    <div;
      ref={ref}
      data - sidebar=&quot;group & quot;
      className={cn (&quot;relative flex w - full min - w-0 flex - col p - 2&quot;, props.class_name)}
      {...props}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
<<<<<<< HEAD
    />
  )
})

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
    />);
});
SidebarGroup.display_name = &quot;SidebarGroup & quot;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx

=======

SidebarGroup.displayName = "SidebarGroup"

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sidebar/sidebar-content.tsx
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
SidebarContent.displayName = &quot;SidebarContent&quot;
export const SidebarGroup = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<&quot;div&quot;>
SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<
  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,
  React.ComponentProps<"div">
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = &quot;SidebarGroup&quot;
SidebarGroup.displayName = "SidebarGroup"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
