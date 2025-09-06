

        ref={ref as SafeRef<HTMLDivElement>}
        className={cn('px-3 py-2', className)}        {...props}
      >
        {title && (
          <button
            type='button'
            className='flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-medium text-muted-foreground hover:bg-secondary/30'
            onClick={() => setExpanded(!expanded)}          >
            <div className='flex items-center gap-2'>

              {icon}
              <span>{title}</span>
            </div>
            {showChevron && (
              <ChevronDown

            )}
          </button>
        )}
