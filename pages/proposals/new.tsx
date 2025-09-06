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