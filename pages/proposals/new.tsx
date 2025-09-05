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

  return (
    <div>
      <Head>
        <title>New Proposal - Zion AI Marketplace</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-4">Create Proposal</h1>

      <div className="grid gap-4">
        <label className="text-sm">Job Description / Brief
          <textarea value={_jobBrief} onChange={_e => setJobBrief(e.target.value)} rows={_6} className="mt-1 w-full rounded-md border p-3" />
        </label>
        <label className="text-sm">Your Resume Summary
          <textarea value={_resumeSummary} onChange={_e => setResumeSummary(e.target.value)} rows={_4} className="mt-1 w-full rounded-md border p-3" />
        </label>
        <label className="text-sm">Relevant Experience Highlights
          <textarea value={_relevantExperience} onChange={_e => setRelevantExperience(e.target.value)} rows={_6} className="mt-1 w-full rounded-md border p-3" />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Proposal / Cover Letter</h2>
        <AIAssistant
          buttonLabel="Generate Pitch Based on Profile & Job"
          title="Generate Proposal"
          defaultPrompt={_pitchPrompt}
          onAccept={_setCoverLetter}
          authorizationToken={_operatorToken}
        />
      </div>
      <textarea value={_coverLetter} onChange={_e => setCoverLetter(e.target.value)} rows={_14} className="mt-2 w-full rounded-md border p-3" />
    </div>
  );
};

export default NewProposal;