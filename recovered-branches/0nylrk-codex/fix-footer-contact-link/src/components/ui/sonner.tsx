import { useTheme } from &quot;next-themes&quot;
import { Toaster as Sonner, toast } from &quot;sonner&quot;
type ToasterProps = React.ComponentProps<typeof Sonner>
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = &quot;system&quot; } = useTheme()
  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            &quot;group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg&quot;
          description: &quot;group-[.toast]:text-muted-foreground&quot;
          actionButton:
            &quot;group-[.toast]:bg-primary group-[.toast]:text-primary-foreground&quot;
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {...props}
    />;
  );
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
}
export { Toaster, toast }
export { Toaster, toast };
;
<<<<<<< HEAD
=======
<<<<<<< HEAD
export { Toaster, toast };
=======
export { Toaster, toast }
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
;
