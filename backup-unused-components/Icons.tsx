export const Icon = ({
//   name,
  className = "",
//   ...props
}: {
  name: string;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <span className={`icon ${className}`} {...props}>
      {name}
</span>
  );
};

export default Icon;
