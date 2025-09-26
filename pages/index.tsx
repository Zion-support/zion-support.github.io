import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Zion App - Advanced Technology Solutions</title>
				<meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div style={{ 
				padding: '2rem', 
				maxWidth: '1200px', 
				margin: '0 auto',
				fontFamily: 'system-ui, -apple-system, sans-serif'
			}}>
				<header style={{ textAlign: 'center', marginBottom: '3rem' }}>
					<h1 style={{ 
						fontSize: '3rem', 
						fontWeight: 'bold', 
						color: '#2563eb',
						marginBottom: '1rem'
					}}>
						Zion App
					</h1>
					<p style={{ 
						fontSize: '1.2rem', 
						color: '#64748b',
						maxWidth: '600px',
						margin: '0 auto'
					}}>
						Advanced Technology Solutions for Modern Businesses
					</p>
				</header>

				<main>
					<section style={{ marginBottom: '3rem' }}>
						<h2 style={{ 
							fontSize: '2rem', 
							marginBottom: '1.5rem',
							color: '#1e293b'
						}}>
							Our Services
						</h2>
						<div style={{ 
							display: 'grid', 
							gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
							gap: '2rem'
						}}>
							<div style={{ 
								padding: '1.5rem',
								border: '1px solid #e2e8f0',
								borderRadius: '8px',
								backgroundColor: '#f8fafc'
							}}>
								<h3 style={{ color: '#2563eb', marginBottom: '1rem' }}>
									AI & Machine Learning
								</h3>
								<p style={{ color: '#64748b' }}>
									Cutting-edge artificial intelligence solutions to automate and optimize your business processes.
								</p>
							</div>
							<div style={{ 
								padding: '1.5rem',
								border: '1px solid #e2e8f0',
								borderRadius: '8px',
								backgroundColor: '#f8fafc'
							}}>
								<h3 style={{ color: '#2563eb', marginBottom: '1rem' }}>
									Cloud Solutions
								</h3>
								<p style={{ color: '#64748b' }}>
									Scalable cloud infrastructure and deployment solutions for modern applications.
								</p>
							</div>
							<div style={{ 
								padding: '1.5rem',
								border: '1px solid #e2e8f0',
								borderRadius: '8px',
								backgroundColor: '#f8fafc'
							}}>
								<h3 style={{ color: '#2563eb', marginBottom: '1rem' }}>
									Web Development
								</h3>
								<p style={{ color: '#64748b' }}>
									Modern, responsive web applications built with the latest technologies and best practices.
								</p>
							</div>
						</div>
					</section>

					<section style={{ 
						textAlign: 'center',
						padding: '3rem 0',
						backgroundColor: '#f1f5f9',
						borderRadius: '12px',
						marginBottom: '3rem'
					}}>
						<h2 style={{ 
							fontSize: '2rem', 
							marginBottom: '1rem',
							color: '#1e293b'
						}}>
							Ready to Get Started?
						</h2>
						<p style={{ 
							fontSize: '1.1rem', 
							color: '#64748b',
							marginBottom: '2rem'
						}}>
							Contact us today to discuss your project requirements and how we can help your business grow.
						</p>
						<button style={{
							backgroundColor: '#2563eb',
							color: 'white',
							padding: '1rem 2rem',
							border: 'none',
							borderRadius: '8px',
							fontSize: '1.1rem',
							cursor: 'pointer',
							transition: 'background-color 0.2s'
						}}>
							Get In Touch
						</button>
					</section>
				</main>

				<footer style={{ 
					textAlign: 'center',
					padding: '2rem 0',
					borderTop: '1px solid #e2e8f0',
					color: '#64748b'
				}}>
					<p>&copy; 2024 Zion App. All rights reserved.</p>
				</footer>
			</div>
		</>
	);
}