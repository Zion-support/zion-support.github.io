import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>About | Zion Tech Group</title>
			</Head>
			<main className="mx-auto max-w-4xl px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">About Zion Tech Group</h1>
				<p className="text-gray-700">We build modern AI, cloud, and cybersecurity solutions.</p>
			</main>
		</>
	);
};

export default About;
