<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';
const NewProposal: NextPage = () => {
  const [jobBrief, setJobBrief] = useState($2);
  const [resumeSummary, setResumeSummary] = useState($2);
  const [relevantExperience, setRelevantExperience] = useState($2);
  const [coverLetter, setCoverLetter] = useState($2);
  const operatorToken = $2;
  const pitchPrompt = useMemo(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]),

  return (
    <div>
      <Head>
        <title>New Proposal - Zion AI Marketplace</title>
      </Head>
      <h1 className = $2;
export default NewProposal,
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

export default function new() {
  return (
    <Layout>
      <Head>
        <title>New - Zion Tech Group</title>
        <meta name="description" content="New solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">New</h1>
          <p className="text-lg text-gray-600">
            Professional new solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
