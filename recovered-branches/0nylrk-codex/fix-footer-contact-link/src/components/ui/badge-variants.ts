
<<<<<<< HEAD
import { cva } from "class-variance-authority",;
;
export const badgeVariants = cva(;
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",;
  {;
    variants:{;
      variant:{;
        default:;
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",;
        secondary:;
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",;
        destructive:;
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",;
        outline:"text-foreground",;
        success:;
          "border-transparent bg-green-100 text-green-800 hover:bg-green-200/80",;
        warning:;
          "border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200/80",;
        info:;
          "border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200/80"}},;
    defaultVariants:{;
      variant:"default"}}
),;
=======
import { cva } from "class-variance-authority",
export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus: outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",  {
    variants: {
      variant: {
        default:
          &quot;border-transparent bg-primary text-primary-foreground hover:bg-primary/80&quot;,
        secondary:
          &quot;border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80&quot;,
        destructive:
          &quot;border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80&quot;,
        outline: &quot;text-foreground&quot;,
        success: 
          &quot;border-transparent bg-green-100 text-green-800 hover:bg-green-200/80&quot;,
        warning:
          &quot;border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200/80&quot;,
        info:
          &quot;border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200/80&quot;}},
    defaultVariants: {
      variant: "default"}}
),);
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
