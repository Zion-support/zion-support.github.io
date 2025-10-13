<<<<<<< HEAD
export const Icon = (
  name,
  className = "",
  ...props
: 
=======
export const Icon = ({
//   name,
  className = "",
//   ...props
}: {
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
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