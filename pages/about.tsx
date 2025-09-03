import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="About Zion Tech Group" />
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About Zion Tech Group</h1>
        <p className="text-gray-700 max-w-3xl">
          We deliver practical, outcome-driven technology services across AI, Cloud, and Product Engineering.
          Our team has shipped production systems for startups and enterprises, with measurable ROI.
        </p>
      </main>
    </div>
  );
};

export default About;