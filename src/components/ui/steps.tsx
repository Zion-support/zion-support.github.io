

        className
      )}
    >
      <div
        className={cn(


            "bg-zion-purple border-zion-purple text-white":
              status === "complete"}
        )}
      >
        {status === "complete" ? (
          <CheckIcon className="h-5 w-5" />
        ) : (
          <span>


          {label}
        </h3>
        {description && (
          <p className="text-sm text-zion-slate-light">{description}</p>
        )}
      </div>
    </li>
  )
}



          return React.cloneElement(child as React.ReactElement<StepProps>, {
            status})
        })}
      </ol>


