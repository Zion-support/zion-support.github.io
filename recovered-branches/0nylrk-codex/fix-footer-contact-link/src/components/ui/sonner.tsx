import { useTheme } from "next-themes"
<<<<<<< HEAD
import { Toaster as Sonner, toast } from "sonner"
=======
import { Toaster as Sonnertoast } from "sonner"
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
<<<<<<< HEAD
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
=======
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      {...props}
    />
  )
}

<<<<<<< HEAD
export { Toaster, toast }
=======
export { Toastertoast }
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
