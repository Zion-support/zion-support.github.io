<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> origin/cursor/build-and-fix-errors-c9ef

interface ToasterProps {
  position?: string;
}

export function Toaster({ position = 'top-right' }: ToasterProps) {
  return <div id="sonner-toaster" data-position={position} />;
}
=======
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
>>>>>>> origin/cursor/check-and-fix-github-actions-e92c
