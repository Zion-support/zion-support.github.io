<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next/head',
import React, { useMemo, useState } from 'react',
import AIAssistant from '../../components/ui/AIAssistant',
const NewProposal: NextPage = () => {
  const [jobBrief, setJobBrief] = useState(''),
  const [resumeSummary, setResumeSummary] = useState(''),
  const [relevantExperience, setRelevantExperience] = useState(''),
  const [coverLetter, setCoverLetter] = useState(''),

  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN,

  const pitchPrompt = useMemo(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]),
=======
import type {_NextPage} from 'next';
import Head from 'next/head';
import React, {_useMemo, _useState} from 'react';
import AIAssistant from '../../components/ui/AIAssistant';

const NewProposal: NextPage = () => {_const [jobBrief, _setJobBrief] = useState('');
  const [resumeSummary, _setResumeSummary] = useState('');
  const [relevantExperience, _setRelevantExperience] = useState('');
  const [coverLetter, _setCoverLetter] = useState('');

  const _operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN;

  const _pitchPrompt = useMemo__(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, _previous projects, _and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${_resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${_relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <div>
      <Head>
        <title>New Proposal - Zion AI Marketplace</title>
      </Head>
      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Create Proposal</h1>

<<<<<<< HEAD
      <div className=&quot;grid gap-4&quot;>
        <label className=&quot;text-sm&quot;>Job Description / Brief
          <textarea value={jobBrief} onChange={e => setJobBrief(e.target.value)} rows={6} className=&quot;mt-1 w-full rounded-md border p-3&quot; />
        </label>
        <label className=&quot;text-sm&quot;>Your Resume Summary
          <textarea value={resumeSummary} onChange={e => setResumeSummary(e.target.value)} rows={4} className=&quot;mt-1 w-full rounded-md border p-3&quot; />
        </label>
        <label className=&quot;text-sm&quot;>Relevant Experience Highlights
          <textarea value={relevantExperience} onChange={e => setRelevantExperience(e.target.value)} rows={6} className=&quot;mt-1 w-full rounded-md border p-3&quot; />
=======
      <div className="grid gap-4">
        <label className="text-sm">Job Description / Brief
          <textarea value={_jobBrief} onChange={_e => setJobBrief(e.target.value)} rows={_6} className="mt-1 w-full rounded-md border p-3" />
        </label>
        <label className="text-sm">Your Resume Summary
          <textarea value={_resumeSummary} onChange={_e => setResumeSummary(e.target.value)} rows={_4} className="mt-1 w-full rounded-md border p-3" />
        </label>
        <label className="text-sm">Relevant Experience Highlights
          <textarea value={_relevantExperience} onChange={_e => setRelevantExperience(e.target.value)} rows={_6} className="mt-1 w-full rounded-md border p-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </label>
      </div>

      <div className=&quot;mt-6 flex items-center justify-between&quot;>
        <h2 className=&quot;text-lg font-semibold&quot;>Proposal / Cover Letter</h2>
        <AIAssistant
<<<<<<< HEAD
          buttonLabel=&quot;Generate Pitch Based on Profile & Job&quot;
          title=&quot;Generate Proposal&quot;
          defaultPrompt={pitchPrompt}
          onAccept={setCoverLetter}
          authorizationToken={operatorToken}
        />
      </div>
      <textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} rows={14} className=&quot;mt-2 w-full rounded-md border p-3&quot; />
=======
          buttonLabel="Generate Pitch Based on Profile & Job"
          title="Generate Proposal"
          defaultPrompt={_pitchPrompt}
          onAccept={_setCoverLetter}
          authorizationToken={_operatorToken}
        />
      </div>
      <textarea value={_coverLetter} onChange={_e => setCoverLetter(e.target.value)} rows={_14} className="mt-2 w-full rounded-md border p-3" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </div>
  )
},

export default NewProposal,