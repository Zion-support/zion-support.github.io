<<<<<<< HEAD
import { use_theme } from &quot;next - themes & quot;
import { Toaster as Sonner, toast } from &quot;sonner & quot;
;
type ToasterProps = React.ComponentProps < typeof Sonner>;
const Toaster = ({ ...props }: ToasterProps) =>: any {
  const { theme = &quot;system & quot; } = use_theme ();
  return (
    <Sonner;
      theme={theme as ToasterProps[&quot;theme & quot;]}
      className=&quot;toaster group & quot;
      toast_options={{
        class_names: {
          toast:;
            &quot;group toast group-[.toaster]:bg - background group-[.toaster]:text - foreground group-[.toaster]:border - border group-[.toaster]:shadow - lg & quot;,
          description: &quot;group-[.toast]:text - muted - foreground & quot;,
          action_button:;
            &quot;group-[.toast]:bg - primary group-[.toast]:text - primary - foreground & quot;,
          cancel_button:;
            &quot;group-[.toast]:bg - muted group-[.toast]:text - muted - foreground & quot;}}}
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      {...props}
    />);
}
;
export { Toaster, toast } />) 
}export {
  Toaster, toast 
}
