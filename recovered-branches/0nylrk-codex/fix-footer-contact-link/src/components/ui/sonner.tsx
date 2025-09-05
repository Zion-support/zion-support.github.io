
type ToasterProps = React.ComponentProps<typeof Sonner>

const _Toaster = (_{_...props}: ToasterProps) => {_const { theme = "system"} = useTheme()

  return (
    <Sonner
      theme={_theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={_{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg", _description: "group-[.toast]:text-muted-foreground", _actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground", _cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}
      {_...props}
    />
  )
}

export {_Toaster, _toast}
