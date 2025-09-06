<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sonner.tsx

type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {

=======

import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"


type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {

  const { theme = "system" } = useTheme()


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { useTheme } from &quot;next-themes&quot;
import { Toaster as Sonner, toast } from &quot;sonner&quot;
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = &quot;system&quot; } = useTheme()
  const { theme = "system" } = useTheme()

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            &quot;group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg&quot;
          description: &quot;group-[.toast]:text-muted-foreground&quot;
          actionButton:
            &quot;group-[.toast]:bg-primary group-[.toast]:text-primary-foreground&quot;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {...props}
    />;
  );
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sonner.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sonner.tsx

;

<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
export { Toaster, toast } />) 
}export {
  Toaster, toast 
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/ui/sonner.tsx
=======
}
export { Toaster, toast }
;
export { Toaster, toast };
export { Toaster, toast }
;
;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
