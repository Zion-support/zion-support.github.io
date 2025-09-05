<<<<<<< HEAD
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";
;
type ToasterProps = React.ComponentProps<typeof Sonner>;
;
const Toaster = ({ ...props } ToasterProps) => {;
  const { theme = "system" } = useTheme();
;
  return (;
    <Sonner;
      theme={theme as ToasterProps["theme"]}
      className="toaster group";
      toastOptions={{;
        classNames:{;
          toast:;
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",;
          description:"group-[.toast]:text-muted-foreground",;
          actionButton:;
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",;
          cancelButton:;
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {...props}
    />;
  );
}
;
export { Toaster, toast }
=======
import { useTheme } from &quot;next-themes&quot;
import { Toaster as Sonner, toast } from &quot;sonner&quot;

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = &quot;system&quot; } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps[&quot;theme&quot;]}
      className=&quot;toaster group&quot;
      toastOptions={{
        classNames: {
          toast:
            &quot;group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg&quot;,
          description: &quot;group-[.toast]:text-muted-foreground&quot;,
          actionButton:
            &quot;group-[.toast]:bg-primary group-[.toast]:text-primary-foreground&quot;,
          cancelButton:
            &quot;group-[.toast]:bg-muted group-[.toast]:text-muted-foreground&quot;}}}
      {...props}    />
  )
}

export {_Toaster, _toast}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
