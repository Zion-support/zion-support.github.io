import * as React from "react"


const _Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(_({_className, _type, _...props}, _ref) => {_return (
      <input
        type={type}
        className={_cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", _className
        )}
        ref={_ref}
        {_...props}
      />
    )
  }
)
Input.displayName = "Input"

export {_Input}
