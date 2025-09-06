<<<<<<< HEAD
import { useTheme } from &quot;next-themes&quot;
import { Toaster as Sonner, toast } from &quot;sonner&quot;
=======
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {
<<<<<<< HEAD
  const { theme = &quot;system&quot; } = useTheme()
=======
  const { theme = "system" } = useTheme()

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
<<<<<<< HEAD
            &quot;group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg&quot;
          description: &quot;group-[.toast]:text-muted-foreground&quot;
          actionButton:
            &quot;group-[.toast]:bg-primary group-[.toast]:text-primary-foreground&quot;
=======
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {...props}
    />;
  );
}
<<<<<<< HEAD
export { Toaster, toast }
=======
;
export { Toaster, toast }
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
