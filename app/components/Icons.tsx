interface IconProps {
  name: string;
  className?: string;
  [key: string]: unknown;
}

export const Icon = ({
  name,
  className = "",
  ...props
}: IconProps) => {
  return (
    <span className={`icon ${className}`} {...props}>
      {name}
    </span>
  );
};

export default Icon;
