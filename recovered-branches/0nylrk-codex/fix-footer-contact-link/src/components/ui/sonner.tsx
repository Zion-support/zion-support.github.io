<<<<<<< HEAD

import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"


type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {

  const { theme = "system" } = useTheme()


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useTheme } from &quot;next-themes&quot;
import { Toaster as Sonner, toast } from &quot;sonner&quot;
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = &quot;system&quot; } = useTheme()
  const { theme = "system" } = useTheme()

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            &quot;group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg&quot;
          description: &quot;group-[.toast]:text-muted-foreground&quot;
          actionButton:
            &quot;group-[.toast]:bg-primary group-[.toast]:text-primary-foreground&quot;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {...props}
    />;
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    />);
}
;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
export { Toaster, toast } />) 
}export {
  Toaster, toast 
}
}
export { Toaster, toast }
;
export { Toaster, toast };
export { Toaster, toast }
;
=======
      {...props}
    />);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
;
