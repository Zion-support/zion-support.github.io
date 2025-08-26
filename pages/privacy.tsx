import Head from 'next/head';

export default function PrivacyPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<Head>
				<title>Privacy Policy - Zion Tech Solutions</title>
				<meta name="description" content="Privacy Policy for Zion Tech Solutions." />
			</Head>
			<h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
			<p className="text-gray-700 leading-7">
				We value your privacy. This page outlines how we collect, use, and safeguard your
				information. For questions, please contact us via the Contact page.
			</p>
		</div>
	);
}