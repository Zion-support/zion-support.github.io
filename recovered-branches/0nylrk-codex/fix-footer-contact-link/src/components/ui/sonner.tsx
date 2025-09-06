<<<<<<< HEAD
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
=======

import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"


type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {

  const { theme = "system" } = useTheme()


>>>>>>> main
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
<<<<<<< HEAD
<<<<<<< HEAD
            &quot;group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg&quot;
          description: &quot;group-[.toast]:text-muted-foreground&quot;
          actionButton:
            &quot;group-[.toast]:bg-primary group-[.toast]:text-primary-foreground&quot;
=======
=======

>>>>>>> main
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> main
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {...props}
    />;
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
export { Toaster, toast }
=======
;
<<<<<<< HEAD
export { Toaster, toast };
=======
export { Toaster, toast }
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
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
      {...props}
    />);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

;

>>>>>>> main
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
