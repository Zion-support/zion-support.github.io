<<<<<<< HEAD:pages/proposals/new.tsx
<<<<<<< HEAD

<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const [jobBrief, setJobBrief] = useState(''),
  const [resumeSummary, setResumeSummary] = useState(''),
  const [relevantExperience, setRelevantExperience] = useState(''),
  const [coverLetter, setCoverLetter] = useState(''),
  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN,
  const pitchPrompt = useMemo(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]),

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/proposals/new.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';
<<<<<<< HEAD

const NewProposal: NextPage = () => {
  const [jobBrief, setJobBrief] = useState('')
  const [resumeSummary, setResumeSummary] = useState('')
  const [relevantExperience, setRelevantExperience] = useState('')
  const [coverLetter, setCoverLetter] = useState('')
  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN
  const pitchPrompt = useMemo(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief |'(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary |'(Not provided)'}\n\nRelevant Experience:\n${relevantExperience |'(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary])
  const [jobBrief, setJobBrief] = useState(''),
  const [resumeSummary, setResumeSummary] = useState(''),
  const [relevantExperience, setRelevantExperience] = useState(''),
  const [coverLetter, setCoverLetter] = useState(''),
  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN,
  const pitchPrompt = useMemo(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const NewProposal: NextPage;
<<<<<<< HEAD:pages/proposals/new.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/proposals/new.tsx
  return (
    <div>
      <Head>
        <title>New Proposal - Zion AI Marketplace</title>
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      <h1 className="text-2xl font-semibold mb-4">Create Proposal</h1>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

          defaultPrompt={pitchPrompt}
          onAccept={setCoverLetter}
          authorizationToken={operatorToken}
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
          defaultPrompt={pitchPrompt}
          onAccept={setCoverLetter}
          authorizationToken={operatorToken}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<h1 className='text-2xl font-semibold mb-4'>Create Proposal</h1>

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
<<<<<<< HEAD:pages/proposals/new.tsx
<<<<<<< HEAD
          buttonLabel="Generate Pitch Based on Profile & Job"
          title="Generate Proposal"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          defaultPrompt={pitchPrompt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          onAccept={setCoverLetter  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          authorizationToken={operatorToken  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        />
      </div>

<<<<<<< HEAD
    </div>
  )
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
},
export default NewProposal,

},

export default NewProposal,

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        />
      </div>
      <textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} rows={14} className="mt-2 w-full rounded-md border p-3" />
    </div>
  )
<<<<<<< HEAD
}
export default NewProposal;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/proposals/new.tsx
          buttonLabel='Generate Pitch Based on Profile & Job'
          title='Generate Proposal'
          defaultPrompt={pitchPrompt}
          onAccept={setCoverLetter}
          authorizationToken={operatorToken}
origin/cursor/automate-test-improve-and-merge-code-2533
        />
      </div>
<textarea
        value={coverLetter}
        onChange={e => setCoverLetter(e.target.value)}
        rows={14}
        className='mt-2 w-full rounded-md border p-3'
      />
    </div>
<<<<<<< HEAD:pages/proposals/new.tsx
<<<<<<< HEAD
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

},
export default NewProposal,
},

},
export default NewProposal,

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
}
export default NewProposal;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
},
export default NewProposal,
},

export default NewProposal,;
export default NewProposal,
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

},
export default NewProposal,

=======
},
<<<<<<< HEAD
export default NewProposal,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default NewProposal,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/proposals/new.tsx
  );
};

export default NewProposal;
<<<<<<< HEAD:pages/proposals/new.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/proposals/new.tsx
