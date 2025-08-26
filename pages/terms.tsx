import Head from 'next/head';

export default function TermsPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<Head>
				<title>Terms of Service - Zion Tech Solutions</title>
				<meta name="description" content="Terms of Service for Zion Tech Solutions." />
			</Head>
			<h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
			<p className="text-gray-700 leading-7">
				These terms govern your use of our website and services. By accessing or using our
				site, you agree to these terms. For more details, please reach out via the Contact page.
			</p>
		</div>
	);
}