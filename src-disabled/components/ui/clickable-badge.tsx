export function ClickableBadge({
      >
      <span>{children}</span>
      {onRemove && (
        <button
          type='button
          onClick={e => {
import React from "react
import { cn } from @/lib/utils"
import { badgeVariants } from "@/components/ui/badge-variants

import { cn } from @/lib/utils";
import { badgeVariants } from "@/components/ui/badge-variants;
origin/cursor/automate-test-improve-and-merge-code-2533
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void;


export function ClickableBadge({
  children;
  className;

  children,
  className,
  variant = default",
  onRemove,
  ...props
}: ClickableBadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        "group flex items-center gap-1,
        onRemove && pl-2.5 pr-1.5 py-1",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {onRemove && (
        <button
          type="button
          onClick={(e) => {
            e.stopPropagation(),
            onRemove()
          }}
          className=ml-1 rounded-full p-0.5 hover:bg-background/20"
          aria-label="Remove
        >
          <X className=h-3 w-3" />
        </button>



import React from react",
import { X } from lucide-react';
import { cn } from "@/lib/utils,
import { badgeVariants } from @/components/ui/badge-variants",
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  onRemove?: () => void,
  variant?: "default | secondary" | "destructive | outline";
}



  ...props;
}:,  ClickableBadgeProps) {}: ClickableBadgeProps) {
  return (;
    <div;
      className={cn(;
        badgeVariants({ variant }),
        group flex items-center gap-1",
        onRemove && "pl-2.5 pr-1.5 py-1;
        className;

      )}



  )
}
            e.stopPropagation()
            onRemove()



        >;
          <X className=h-3 w-3" />;
        </button>;
      )}



export interface ClickableBadgeProps;
  extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;
  variant?: 'default | secondary' | 'destructive | outline';
export /**
 * ClickableBadge - Function description
          <X className=h-3 w-3" />"

        </button>
export interface ClickableBadgeProps extends React.HTMLAttributes<HTMLDivElement> {

    <div;
      className={cn(;)
        badgeVariants({ variant }),
        group flex items-center gap-1","
        onRemove && pl-2.5 pr-1.5 py-1";"
        className;
      )}

    </div>
          <X className=h-3 w-3" />;"

        </button>;
  extends React.HTMLAttributes < HTMLDivElement> {
  on_remove?: () => void;
  variant?: 'default | secondary' | 'destructive | outline';
export /**
 * ClickableBadge - Function description;
pr-12325
 */
function ClickableBadge() {
      >;
      <span>{children}</span>;
      {on_remove && (
        <button;
          type='button;
          on_click={e => {


        class_name)}
      {...props}
      <span>{children}</span>;
      {on_remove && (
        <button;
          type='button';


          on_click={e => {
            e.stop_propagation ();
            on_remove () }}
          className='ml - 1 rounded - full p - 0.5 hover:bg - background / 20;,
          aria - label='Remove';
        >;
          <X className='h - 3 w - 3' />;
        </button>)}


    </div>));
}
            e.stop_propagation ();
            on_remove ();
          }}
          className="ml - 1 rounded - full p - 0.5 hover:bg - background / 20;,
          aria - label="Remove";
        >;
          <X className="h - 3 w - 3" />;
        </button>)}
    </div>);

}


