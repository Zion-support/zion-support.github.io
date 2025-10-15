export const Icon = (_{
  name, className = "", ...props
}: {
  name: string;
  className?: string;
  [key: string]: unknown;
}) => {
const Component = () => {
  return (
    <span className={`icon ${className}`} {...props}>
      {name}
    </span>
  )
}
}
export default Icon