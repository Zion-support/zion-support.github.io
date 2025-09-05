

function Skeleton(_{_className, _...props}: React.HTMLAttributes<HTMLDivElement>) {_return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", _className)}
      {_...props}
    />
  )
}

export {_Skeleton}
