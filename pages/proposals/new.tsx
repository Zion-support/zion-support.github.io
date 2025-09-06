const NewProposal: NextPage = () => {
  const [jobBrief, setJobBrief] = useState('');
  const [resumeSummary, setResumeSummary] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN;

  const [jobBrief, setJobBrief] = useState(''),
  const [resumeSummary, setResumeSummary] = useState(''),
  const [relevantExperience, setRelevantExperience] = useState(''),
  const [coverLetter, setCoverLetter] = useState(''),
  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN,
  const pitchPrompt = useMemo(() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\nJob Brief:\n${jobBrief || '(Not provided)'}\n\nTalent Resume Summary:\n${resumeSummary || '(Not provided)'}\n\nRelevant Experience:\n${relevantExperience || '(Not provided)'}\n\nReturn markdown only.`
  ), [jobBrief, relevantExperience, resumeSummary]),

  return (
    <div>
      <Head>
        <title>New Proposal - Zion AI Marketplace</title>
      </Head>
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


        />
      </div>
      <textarea value={coverLetter} onChange={e => setCoverLetter(e.target.value)} rows={14} className="mt-2 w-full rounded-md border p-3" />
    </div>
  )

},
export default NewProposal,

},

export default NewProposal,

}
export default NewProposal;
import type { NextPage } from 'next',
import Head from 'next / head',
import React, { useMemo, useState } from 'react',
import AIAssistant from '../../components / ui / AIAssistant',
const NewProposal: NextPage = () => {
  const [job_brief, setJobBrief] = useState (''),
  const [resume_summary, setResumeSummary] = useState (''),
  const [relevant_experience, setRelevantExperience] = useState (''),
  const [cover_letter, setCoverLetter] = useState (''),
  const operator_token = process.env.NEXT_PUBLIC_OPERATOR_TOKEN,
  const pitch_prompt = useMemo (() => (
    `Write a persuasive proposal for a freelance cloud architect applying to this job. Focus on reliability, previous projects, and delivery.\n\n_job Brief:\n${job_brief || '(Not provided)'}\n\n_talent Resume Summary:\n${resume_summary || '(Not provided)'}\n\n_relevant Experience:\n${relevant_experience || '(Not provided)'}\n\n_return markdown only.`), [job_brief, relevant_experience, resume_summary]),
  return (
    <div>;
      <Head>;
        <title > New Proposal - Zion AI Marketplace</title>;
      </Head>;
      <h1 className="text - 2xl font - semibold mb - 4">Create Proposal</h1>;
      <div className="grid gap - 4">;
        <label className="text - sm">Job Description / Brief;
          <textarea value={job_brief} on_change={e => setJobBrief (e.target.value)} rows={6} className="mt - 1 w - full rounded - md border p - 3" />;
        </label>;
        <label className="text - sm">Your Resume Summary;
          <textarea value={resume_summary} on_change={e => setResumeSummary (e.target.value)} rows={4} className="mt - 1 w - full rounded - md border p - 3" />;
        </label>;
        <label className="text - sm">Relevant Experience Highlights;
          <textarea value={relevant_experience} on_change={e => setRelevantExperience (e.target.value)} rows={6} className="mt - 1 w - full rounded - md border p - 3" />;
        </label>;
      </div>;
      <div className="mt - 6 flex items - center justify - between">;
        <h2 className="text - lg font - semibold">Proposal / Cover Letter</h2>;
        <AIAssistant;
          button_label="Generate Pitch Based on Profile & Job";
          title="Generate Proposal";
          default_prompt={pitch_prompt}
          on_accept={setCoverLetter}
          authorization_token={operator_token}
        />;
      </div>;
      <textarea value={cover_letter} on_change={e => setCoverLetter (e.target.value)} rows={14} className="mt - 2 w - full rounded - md border p - 3" />;
    </div>);
},
export default NewProposal,
