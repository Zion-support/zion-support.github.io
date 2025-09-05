<<<<<<< HEAD
import * as React from &quot;react&quot;
import * as TogglePrimitive from &quot;@radix-ui/react-toggle&quot;
import { cva, type VariantProps } from &quot;class-variance-authority&quot;

import { cn } from &quot;@/lib/utils&quot;

const toggleVariants = cva(
<<<<<<< HEAD
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover: bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
=======
  &quot;inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground&quot;,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  {
    variants: {
      variant: {
        default: &quot;bg-transparent&quot;,
        outline:
          &quot;border border-input bg-transparent hover:bg-accent hover:text-accent-foreground&quot;},
      size: {
        default: &quot;h-10 px-3&quot;,
        sm: &quot;h-9 px-2.5&quot;,
        lg: &quot;h-11 px-5&quot;}},
    defaultVariants: {
      variant: &quot;default&quot;,
      size: &quot;default&quot;}}
=======
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"


const _toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {_variants: {
      variant: {
        default: "bg-transparent", _outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},
      size: {_default: "h-10 px-3", _sm: "h-9 px-2.5", _lg: "h-11 px-5"}},
    defaultVariants: {_variant: "default", _size: "default"}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
)

type ToggleRef = React.ElementRef<typeof TogglePrimitive.Root>
type ToggleProps = React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>

<<<<<<< HEAD
const Toggle = React.forwardRef<ToggleRef ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
=======
const _Toggle = React.forwardRef<ToggleRef, ToggleProps>(_({_className, _variant, _size, _...props}, _ref) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <TogglePrimitive.Root
      ref={_ref}
      className={_cn(toggleVariants({ variant, _size, _className}))}
      {_...props}
    />
  )
)

Toggle.displayName = TogglePrimitive.Root.displayName

export {_Toggle, _toggleVariants}
