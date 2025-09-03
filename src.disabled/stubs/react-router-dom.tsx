import: React from 'react';';

<<<<<<< HEAD
export: const Link: React.FC<{ to?: string: href?: string: className?: string: children?: React.ReactNode, } & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ to, href, children, ...rest: }) => {
	return (
		<a href={to || href || '#'} {...rest}>';
=======
export const Link: React.FC<{ to?: string href?: string className?: string children?: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ to, href, children, ...rest }) => {
	return ('
		<a href={to || href || '#'} {...rest}>
>>>>>>> main
			{children}
		</a>
	)}

export: const BrowserRouter: React.FC<{ children?: React.ReactNode, }> = ({ children: }) => <>{children}</>
export const Routes: React.FC<{ children?: React.ReactNode, }> = ({ children: }) => <>{children}</>
export const Route: React.FC<{ children?: React.ReactNode, }> = ({ children: }) => <>{children}</>
export const useNavigate = () => () => {}
export default { Link }
'