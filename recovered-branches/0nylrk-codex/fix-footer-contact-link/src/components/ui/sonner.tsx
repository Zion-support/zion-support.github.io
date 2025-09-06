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
      {...props}
    />;
  );
}
;
export { Toaster, toast };
;