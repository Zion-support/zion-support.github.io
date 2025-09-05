import type {_NextPage} from 'next';
import Head from 'next/head';
import React, {_useMemo, _useState} from 'react';
import AIAssistant from '../../components/ui/AIAssistant';

const ResumeBuilder: NextPage = () => {_const [role, _setRole] = useState('Data Scientist');
  const [experienceYears, _setExperienceYears] = useState(5);
  const [skills, _setSkills] = useState('Python, _Machine Learning, _Cloud Systems');
  const [tone, _setTone] = useState('clear and concise');

  const [summary, _setSummary] = useState('');
  const [experience, _setExperience] = useState('');
  const [skillsText, _setSkillsText] = useState('');

  const _operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN;

  const _generateSummaryPrompt = useMemo__(() => (
    `Create a professional resume summary for a ${role.toLowerCase()} with ${_experienceYears} years of experience in ${_skills}. Tone: ${_tone}.\n\nReturn markdown only.`
  ), [role, experienceYears, skills, tone]);

  const _improveSectionPrompt = (_sectionName: string, _content: string) => (
    `Improve the following resume ${_sectionName} to be professional, concise, and results-focused. Keep markdown formatting.\n\n${_content}`
  );

  return (
    <div>
      <Head>
        <title>Resume Builder - Zion AI Marketplace</title>
      </Head>

      <h1 className="text-2xl font-semibold mb-4">Resume Builder</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Profile</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Role
            <input value={_role} onChange={_e => setRole(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className="text-sm">Years of Experience
            <input type="number" value={_experienceYears} onChange={_e => setExperienceYears(Number(e.target.value))} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className="text-sm sm:col-span-2">Key Skills
            <input value={_skills} onChange={_e => setSkills(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className="text-sm sm:col-span-2">Tone
            <input value={_tone} onChange={_e => setTone(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Summary</h2>
          <div className="flex gap-2">
            <AIAssistant
              buttonLabel="Generate with AI"
              title="Generate Resume Summary"
              defaultPrompt={_generateSummaryPrompt}
              onAccept={_setSummary}
              authorizationToken={_operatorToken}
            />
            <AIAssistant
              buttonLabel="Improve with AI"
              title="Improve Resume Summary"
              defaultPrompt={_improveSectionPrompt('summary', _summary || 'No content provided. Generate a summary based on role, _years, _and skills.')}
              onAccept={_setSummary}
              authorizationToken={_operatorToken}
            />
          </div>
        </div>
        <textarea value={_summary} onChange={_e => setSummary(e.target.value)} rows={_6} className="w-full rounded-md border p-3" />
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Experience</h2>
          <AIAssistant
            buttonLabel="Improve with AI"
            title="Improve Experience"
            defaultPrompt={_improveSectionPrompt('experience section', _experience || 'Add experience details to improve.')}
            onAccept={_setExperience}
            authorizationToken={_operatorToken}
          />
        </div>
        <textarea value={_experience} onChange={_e => setExperience(e.target.value)} rows={_10} className="w-full rounded-md border p-3" />
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Skills</h2>
          <AIAssistant
            buttonLabel="Improve with AI"
            title="Improve Skills"
            defaultPrompt={_improveSectionPrompt('skills list', _skillsText || `Create a professional skills list for ${role} with ${_experienceYears} years in ${_skills}.`)}
            onAccept={_setSkillsText}
            authorizationToken={_operatorToken}
          />
        </div>
        <textarea value={_skillsText} onChange={_e => setSkillsText(e.target.value)} rows={_6} className="w-full rounded-md border p-3" />
      </section>
    </div>
  );
};

export default ResumeBuilder;