import type { NextPage } from 'next';
import Head from 'next/head';
<<<<<<< HEAD
<<<<<<< HEAD
import { Users, Target, Award, Globe, Zap, Shield, Brain, Rocket } from 'lucide-react';
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-145a

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Zion Tech Solutions</title>
        <meta name="description" content="About page" />
      </Head>
      
      <main>
        <h1>About</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default About;
>>>>>>> origin/cursor/website-audit-and-enhancement-145a
=======

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About | Zion Tech Group</title>
				<meta name="description" content="About Zion Tech Group" />
				<link rel="canonical" href="https://ziontechgroup.com/about" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					<h1 className="text-4xl font-bold mb-4">About Us</h1>
					<p className="text-white/80 max-w-2xl">We build autonomous systems and cutting-edge technology solutions.</p>
				</div>
			</main>
		</>
	);
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
