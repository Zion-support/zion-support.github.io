<<<<<<< HEAD:pages_backup/proposals/new.tsx
const [jobBrief, setJobBrief] = useState(''),'
  const [resumeSummary, setResumeSummary] = useState(''),'
  const [relevantExperience, setRelevantExperience] = useState(''),'
=======


<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [jobBrief, setJobBrief] = useState(''),
  const [resumeSummary, setResumeSummary] = useState(''),
  const [relevantExperience, setRelevantExperience] = useState(''),
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/proposals/new.tsx
  const [coverLetter, setCoverLetter] = useState(''),
  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN,
  const pitchPrompt = useMemo(() => ('
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]),

<<<<<<< HEAD:pages_backup/proposals/new.tsx
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/proposals/new.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';

<<<<<<< HEAD:pages_backup/proposals/new.tsx
=======
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/proposals/new.tsx
  return (
    <div>
      <Head>
        <title>New Proposal - Zion AI Marketplace</title>
      </Head>

      <div className="grid gap-4">
        <label className="text-sm">Job Description / Brief

          <textarea value={jobBrief} onChange={e => setJobBrief(e.target.value)} rows={6} className="mt-1 w-full rounded-md border p-3" />
        </label>"
        <label className="text-sm">Your Resume Summary"
          <textarea value={resumeSummary} onChange={e => setResumeSummary(e.target.value)} rows={4} className="mt-1 w-full rounded-md border p-3" />
        </label>"
        <label className="text-sm">Relevant Experience Highlights"
          <textarea value={relevantExperience} onChange={e => setRelevantExperience(e.target.value)} rows={6} className="mt-1 w-full rounded-md border p-3" />
        </label>
      </div>"
      <div className="mt-6 flex items-center justify-between">"
        <h2 className="text-lg font-semibold">Proposal / Cover Letter</h2>
        <AIAssistant"
          buttonLabel="Generate Pitch Based on Profile & Job""
          title="Generate Proposal"

<<<<<<< HEAD:pages_backup/proposals/new.tsx
=======
<<<<<<< HEAD
          defaultPrompt={pitchPrompt}
          onAccept={setCoverLetter}
          authorizationToken={operatorToken}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/proposals/new.tsx
          defaultPrompt={pitchPrompt  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}
          onAccept={setCoverLetter  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          authorizationToken={operatorToken  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD:pages_backup/proposals/new.tsx
=======

<<<<<<< HEAD
},
export default NewProposal,

},

export default NewProposal,

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/proposals/new.tsx
        />
      </div>

        />
      </div>"
      <textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} rows={14} className="mt-2 w-full rounded-md border p-3" />
    </div>
  )
<<<<<<< HEAD
}
export default NewProposal;

},
export default NewProposal,
},

export default NewProposal,;
export default NewProposal,
=======

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

},
export default NewProposal,
},

},
export default NewProposal,

},
export default NewProposal,
},
;
export default NewProposal,;
export default NewProposal,

},
export default NewProposal,

},

export default NewProposal,

<<<<<<< HEAD:pages_backup/proposals/new.tsx
  );
};

export default NewProposal;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/proposals/new.tsx
