
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {

  const { theme = "system" } = useTheme()

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
<<<<<<< HEAD
          toast:

            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",

          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {...props}
    />;
  );
import { use_theme } from &quot;next - themes & quot;
=======
          toast:import { use_theme } from &quot;next - themes & quot;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",;
          description:"group-[.toast]:text-muted-foreground",;
=======
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",,
  description:"group-[.toast]:text-muted-foreground",;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          actionButton:;
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",;
          cancelButton:;
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {...props}
    />);
}
<<<<<<< HEAD

;
;
;
=======
;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
