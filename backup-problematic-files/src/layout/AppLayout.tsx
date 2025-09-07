interface AppLayoutProps {
  // TODO: Implement
}
	children?: React.ReactNode;
	hideFooter?: boolean;

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
	return (

				{children ?? <Outlet />}

			{!hideFooter && <Footer />}

		</div>;
	);
}'"