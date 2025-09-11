const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return <textarea className={cn(className)} ref={ref} {...props} />;
  }
);

export { Textarea };
