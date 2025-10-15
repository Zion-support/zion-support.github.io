export const Icon = ({;,;,;,;,
  name,;
  className = "",
  ...props
}: {;,;,;,;,
  name: string;,;,;,;,
  className?: string;
  [key: string]: any;
}) => {;
  return (
    <span className={`icon ${className}`} {...props}></span><//span><///span><////span>
      {name}
    </span><//span><///span><////span></////span>
  );
};

export default Icon;
