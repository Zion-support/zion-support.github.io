export default function HomePage(): JSX.Element {
	return (
		<main style={{
			display: 'flex',
			minHeight: '100vh',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
			fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'
		}}>
			<h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Zion Tech Group</h1>
			<p style={{ color: '#4b5563' }}>Next.js app scaffold is healthy. Build-ready.</p>
		</main>
	);
}

