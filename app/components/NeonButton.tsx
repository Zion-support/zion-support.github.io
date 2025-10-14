}

const NeonButton: React.FC<NeonButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = 
}) => {
  
  const variantClasses = {
    primary: "'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hove",
    r:shadow-blue-500/40 focu,
    s:ring-blue-500',
    secondary: "'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 hove",
    r:shadow-purple-500/40 focu,
    s:ring-purple-500',
    accent: "'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hove",
    r:shadow-cyan-500/40 focu,
    s:ring-cyan-500'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`````
  
  if (href) {
    return (
<>      <a
        href={href}
        className={classes}
        target="_blank""
        rel="noopener noreferrer"></a>
        {children}
      </a>
    )}
  }
  
  if (to) {
    return (
      <Link to={to} className={classes}></Link>
        {children</></NeonButtonProps></Link></NeonButtonProps></Link>}
      </Link>
"