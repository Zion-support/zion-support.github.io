
import React from "react";


import React from './react';
;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: 'button' | 'a'
	href?: string
	className?: string
}

export default function Button({ as = 'button', href, className = '', children, ...rest }: ButtonProps) {
	if (as === 'a' && href) {
		return (
			<a href={href} className={`inline-flex items-center justify-center px-4 py-2 rounded ${className}`} {...(rest as any)}>
				{children}
			</a>
		)
	}
	return (
		<button className={`inline-flex items-center justify-center px-4 py-2 rounded ${className}`} {...rest}>
			{children}
		</button>
	)
}=======
=======  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover: scale-105 active:scale-95';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;



export default Button;
      {...props}
    >;
      {children}
    </button>);
}
;
export { Button }
;

export { Button };
==============

export { Button };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd
