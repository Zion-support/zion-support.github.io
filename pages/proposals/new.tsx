import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';
<<<<<<< HEAD
=======

ursor/integrate-build-improve-and-re-verify-b76c
const NewProposal: NextPage = () => {
  const [jobBrief, setJobBrief] = useState('');
  const [resumeSummary, setResumeSummary] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN;

  const pitchPrompt = useMemo(
    () =>
      `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`,
    [jobBrief, relevantExperience, resumeSummary]
  );
  const pitchPrompt = useMemo(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]);
  const pitchPrompt = useMemo(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]);
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  return (
    <div>
      <Head>
        <title>New Proposal - Zion AI Marketplace</title>
      </Head>
      <h1 className='text-2xl font-semibold mb-4'>Create Proposal</h1>
<<<<<<< HEAD
=======
      <h1 className="text-2xl font-semibold mb-4">Create Proposal</h1>
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      <div className='grid gap-4'>
        <label className='text-sm'>
          Job Description / Brief
          <textarea
            value={jobBrief}
            onChange={e => setJobBrief(e.target.value)}
            rows={6}
            className='mt-1 w-full rounded-md border p-3'
          />
        </label>
        <label className='text-sm'>
          Your Resume Summary
          <textarea
            value={resumeSummary}
            onChange={e => setResumeSummary(e.target.value)}
            rows={4}
            className='mt-1 w-full rounded-md border p-3'
          />
        </label>
        <label className='text-sm'>
          Relevant Experience Highlights
          <textarea
            value={relevantExperience}
            onChange={e => setRelevantExperience(e.target.value)}
            rows={6}
            className='mt-1 w-full rounded-md border p-3'
          />
        </label>
      </div>

      <div className='mt-6 flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Proposal / Cover Letter</h2>
        <AIAssistant
          buttonLabel='Generate Pitch Based on Profile & Job'
<<<<<<< HEAD
          title='Generate Proposal'          defaultPrompt={pitchPrompt}
=======
          title='Generate Proposal'
      <h1 className="text-2xl font-semibold mb-4">Create Proposal</h1>

      <div className="grid gap-4">
        <label className="text-sm">Job Description / Brief
          <textarea value={jobBrief} onChange={e => setJobBrief(e.target.value)} rows={6} className="mt-1 w-full rounded-md border p-3" />
        </label>
        <label className="text-sm">Your Resume Summary
          <textarea value={resumeSummary} onChange={e => setResumeSummary(e.target.value)} rows={4} className="mt-1 w-full rounded-md border p-3" />
        </label>
        <label className="text-sm">Relevant Experience Highlights
          <textarea value={relevantExperience} onChange={e => setRelevantExperience(e.target.value)} rows={6} className="mt-1 w-full rounded-md border p-3" />
        </label>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Proposal / Cover Letter</h2>
        <AIAssistant
          buttonLabel="Generate Pitch Based on Profile & Job"
          title="Generate Proposal"
          buttonLabel="Generate Pitch Based on Profile & Job"
          title="Generate Proposal"
ursor/integrate-build-improve-and-re-verify-b76c
          defaultPrompt={pitchPrompt}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          onAccept={setCoverLetter}
          authorizationToken={operatorToken}
        />
      </div>
      <textarea
        value={coverLetter}
        onChange={e => setCoverLetter(e.target.value)}
        rows={14}
        className='mt-2 w-full rounded-md border p-3'
      />
<<<<<<< HEAD
=======
      <textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} rows={14} className="mt-2 w-full rounded-md border p-3" />
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    </div>
  );
};

<<<<<<< HEAD
export default NewProposal;
=======
export default NewProposal;
      <textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} rows={14} className="mt-2 w-full rounded-md border p-3" />
    </div>
  )
};

export default NewProposal;
export default NewProposal;
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
