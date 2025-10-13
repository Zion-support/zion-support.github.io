  name: string;
  className?: string;
  [key: string]: any;
) => 
  return (
    <span className="{`icon" ${className}`} {...props}></span>
      {name}
</span>
  );
;
export default Icon;