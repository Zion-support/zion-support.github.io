<<<<<<< HEAD
<<<<<<< HEAD
import * as React from &quot;react&quot;
import { Input } from &quot;@/components/ui/input&quot;
import { Separator } from &quot;@/components/ui/separator&quot;
import { cn } from &quot;@/lib/utils&quot;
import type { SafeRef } from &quot;../sidebar.types&quot;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import * as React from "react"
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import * as React from "react"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import * as React from "react"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import type { SafeRef } from "../sidebar.types"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
<<<<<<< HEAD
  React.ComponentProps<typeof Input>
<<<<<<< HEAD
=======
  React.ComponentProps<typeof Input>export const SidebarInput = React.forwardRef<
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  React.ComponentProps<typeof Input>
export const SidebarInput = React.forwardRef<
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  React.ElementRef<typeof Input>
  React.ComponentProps<typeof Input>
=======
import * as React from "react""
import { Input } from "@/components/ui/input""
import { Separator } from "@/components/ui/separator""
import { cn } from "@/lib/utils""
import type { SafeRef } from "../sidebar.types"

export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
React.ComponentProps<typeof Input>;
;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import * as React from &quot;react & quot;
import { Input } from &quot;@/components / ui / input & quot;
import { Separator } from &quot;@/components / ui / separator & quot;
import { cn } from &quot;@/lib / utils & quot;
import type { SafeRef } from &quot;../sidebar.types & quot;
;

import * as React from "react"""
import { Input } from "@/components/ui/input"""
import { Separator } from "@/components/ui/separator"""
import { cn } from "@/lib/utils"""
import type { SafeRef } from "../sidebar.types""
export const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>
</typeof>
  React.ComponentProps<typeof Input>
pr-12325
export const SidebarInput = React.forward_ref<;
  React.ElementRef < typeof Input>,
  React.ComponentProps < typeof Input>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>((props, ref) => {
<<<<<<< HEAD
<<<<<<< HEAD
  return (

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        props.className
=======

        props.className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
      ref={ref}
      data-sidebar="input"

      className={cn(

        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",

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
        props.className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      )}
      {...props}
    />
  )
})

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
<Input;
      ref={ref}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

"
SidebarInput.displayName = "SidebarInput"

export const SidebarHeader = React.forwardRef<

>((props, ref) => {}
  return (;
    <Input;
      ref={ref}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>((props, ref) => {
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Input;
      ref={ref}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
>((props, ref) => {
=======

>((props, ref) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;header & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
    />
  )
})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    />);
});
SidebarHeader.display_name = &quot;SidebarHeader & quot;
;
export const SidebarFooter = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>((props, ref) => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>((props, ref) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
=======

>((props, ref) => {}
  return (;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div;
      ref={ref as SafeRef < HTMLDivElement>}
      data - sidebar=&quot;footer & quot;
      className={cn (&quot;flex flex - col gap - 2 p - 2&quot;, props.class_name)}
      {...props}
<<<<<<< HEAD
<<<<<<< HEAD
    />
  )
})

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
SidebarFooter.displayName = "SidebarFooter"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement
  React.ComponentProps<typeof Separator>
<<<<<<< HEAD
>((props, ref) => {
  return (

    <Separator
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    />);
});
SidebarFooter.display_name = &quot;SidebarFooter & quot;
;
export const SidebarSeparator = React.forward_ref<;
  HTMLDivElement,
>((props, ref) => {}
  return (

>((props, ref) => {}
  return (
    <Separator;
      ref={ref}
      data - sidebar=&quot;separator & quot;
      className={cn (&quot;mx - 2 w - auto bg - sidebar - border & quot;, props.class_name)}
      {...props}

"
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
SidebarSeparator.displayName = "SidebarSeparator"

export const SidebarContent = React.forwardRef<

return (
    <div;
<<<<<<< HEAD
      ref={ref}

<<<<<<< HEAD

      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", props.className)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {...props}
    />
  )
})

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>((props, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        props.className
=======
      ref={ref}        props.className
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      ref={ref}        props.className
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        props.className;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      ref={ref}

      data-sidebar="content"
      className={cn(

        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",

"flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",

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
    <div;
      ref={ref}        props.className
  return (
      ref={ref}"
      data-sidebar="input""
      className={cn(
        &quot;flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden&quot;
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        props.className
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      )}
      {...props}
    />
  )
<<<<<<< HEAD
})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

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
<<<<<<< HEAD

"
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
SidebarContent.displayName = "SidebarContent"

export const SidebarGroup = React.forwardRef<

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>((props, ref) => {

=======
})>((props, ref) => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>((props, ref) => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
})>((props, ref) => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
=======

>((props, ref) => {}
  return (;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div;
      ref={ref}
      data - sidebar=&quot;group & quot;
      className={cn (&quot;relative flex w - full min - w-0 flex - col p - 2&quot;, props.class_name)}
      {...props}

/>);
});
SidebarGroup.display_name = &quot;SidebarGroup & quot;
;

SidebarGroup.displayName = "SidebarGroup"

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
  React.ComponentProps<"div">
>((props, ref) => {}
  return (
    <div;
      ref={ref}"
      data-sidebar="group""
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}
      {...props}
    />
  )
})
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
SidebarGroup.displayName = &quot;SidebarGroup&quot;"
SidebarGroup.displayName = "SidebarGroup"

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
})

      data - sidebar=&quot;input & quot;
      className={cn (
        &quot;h - 8 w - full bg - background shadow - none focus - visible:ring - 2 focus - visible:ring - sidebar - ring & quot;,)
        props.class_name)}
    />);
});
SidebarInput.display_name = &quot;SidebarInput & quot;
;
export const SidebarHeader = React.forward_ref<;
  HTMLDivElement,
  React.ComponentProps<&quot;div & quot;>;

SidebarInput.displayName = "SidebarInput""
export const SidebarHeader = React.forwardRef<

    <Input;
      ref={ref})

    <div;
      ref={ref as SafeRef < HTMLDivElement>}
</div>
export const SidebarFooter = React.forward_ref<;

SidebarHeader.displayName = "SidebarHeader""
export const SidebarFooter = React.forwardRef<

export const SidebarSeparator = React.forwardRef<
  HTMLDivElement;
  React.ComponentProps<typeof Separator>
export const SidebarSeparator = React.forward_ref<;
  HTMLDivElement,)
    <Separator;
      ref={ref}
      data - sidebar=&quot;separator & quot;)
      className={cn (&quot;mx - 2 w - auto bg - sidebar - border & quot;, props.class_name)}

export const SidebarContent = React.forward_ref<;

SidebarSeparator.displayName = "SidebarSeparator""
export const SidebarContent = React.forwardRef<

      data-sidebar="content""
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden","
export const SidebarGroup = React.forward_ref<;

SidebarContent.displayName = "SidebarContent""
export const SidebarGroup = React.forwardRef<

      data - sidebar=&quot;group & quot;)
      className={cn (&quot;relative flex w - full min - w-0 flex - col p - 2&quot;, props.class_name)}

  HTMLDivElement,;
  React.ComponentProps<&quot;div&quot;>
  HTMLDivElement,"
  React.ComponentProps<"div">"
      data-sidebar="group"")"
      className={cn("relative flex w-full min-w-0 flex-col p-2", props.className)}"
</div>"
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
