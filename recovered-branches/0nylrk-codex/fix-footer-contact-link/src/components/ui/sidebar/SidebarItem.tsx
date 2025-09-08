

    <div
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-md"
        active ? "bg-primary/10 text-primary" : "text-muted-foreground hover: bg-accent hover:text-accent-foreground",

        className

      )}

      {...props}>;

      {...props}
    >
      {children}

    </div>);
}



