
}

export default function Structureddata({ className = '', children, ...props }: StructureddataProps) {
  return()
    <div className={`structureddata-component ${className}`} {...props} /></div>
      {children}
    </div>)
  );
}