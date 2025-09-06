import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';

const ResumeBuilder: NextPage = () => {
  const [role, setRole] = useState('Data Scientist');
  const [experienceYears, setExperienceYears] = useState(5);
  const [skills, setSkills] = useState(
    'Python, Machine Learning, Cloud Systems'
  );
const ResumeBuilder: NextPage = () => {
  const [role, setRole] = useState('Data Scientist');
  const [experienceYears, setExperienceYears] = useState(5);
  const [skills, setSkills] = useState('Python, Machine Learning, Cloud Systems');
const ResumeBuilder: NextPage = () => {
  const [role, setRole] = useState('Data Scientist');
  const [experienceYears, setExperienceYears] = useState(5);
  const [skills, setSkills] = useState('Python, Machine Learning, Cloud Systems');
ursor/integrate-build-improve-and-re-verify-b76c
  const [tone, setTone] = useState('clear and concise');

  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');
  const [skillsText, setSkillsText] = useState('');

  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN;

  const generateSummaryPrompt = useMemo(
    () =>
      `Create a professional resume summary for a ${role.toLowerCase()} with ${experienceYears} years of experience in ${skills}. Tone: ${tone}.\n\nReturn markdown only.`,
    [role, experienceYears, skills, tone]
  );

  const improveSectionPrompt = (sectionName: string, content: string) =>
    `Improve the following resume ${sectionName} to be professional, concise, and results-focused. Keep markdown formatting.\n\n${content}`;
  const generateSummaryPrompt = useMemo(() => (
    `Create a professional resume summary for a ${role.toLowerCase()} with ${experienceYears} years of experience in ${skills}. Tone: ${tone}.\n\nReturn markdown only.`
  ), [role, experienceYears, skills, tone]);

  const improveSectionPrompt = (sectionName: string, content: string) => (
    `Improve the following resume ${sectionName} to be professional, concise, and results-focused. Keep markdown formatting.\n\n${content}`
  );
  const generateSummaryPrompt = useMemo(() => (
    `Create a professional resume summary for a ${role.toLowerCase()} with ${experienceYears} years of experience in ${skills}. Tone: ${tone}.\n\nReturn markdown only.`
  ), [role, experienceYears, skills, tone]);

  const improveSectionPrompt = (sectionName: string, content: string) => (
    `Improve the following resume ${sectionName} to be professional, concise, and results-focused. Keep markdown formatting.\n\n${content}`
  );
ursor/integrate-build-improve-and-re-verify-b76c

  return (
    <div>
      <Head>
        <title>Resume Builder - Zion AI Marketplace</title>
      </Head>

      <h1 className='text-2xl font-semibold mb-4'>Resume Builder</h1>
      <h1 className="text-2xl font-semibold mb-4">Resume Builder</h1>
ursor/integrate-build-improve-and-re-verify-b76c

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Profile</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Role
            <input value={role} onChange={e => setRole(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className="text-sm">Years of Experience
            <input type="number" value={experienceYears} onChange={e => setExperienceYears(Number(e.target.value))} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className="text-sm sm:col-span-2">Key Skills
            <input value={skills} onChange={e => setSkills(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className='text-sm sm:col-span-2'>
            Tone
            <input
              value={tone}
              onChange={e => setTone(e.target.value)}
              className='mt-1 w-full rounded-md border p-2'
            />
      <h1 className="text-2xl font-semibold mb-4">Resume Builder</h1>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Profile</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Role
            <input value={role} onChange={e => setRole(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className="text-sm">Years of Experience
            <input type="number" value={experienceYears} onChange={e => setExperienceYears(Number(e.target.value))} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className="text-sm sm:col-span-2">Key Skills
            <input value={skills} onChange={e => setSkills(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
          <label className="text-sm sm:col-span-2">Tone
            <input value={tone} onChange={e => setTone(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          <label className="text-sm sm:col-span-2">Tone
            <input value={tone} onChange={e => setTone(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
ursor/integrate-build-improve-and-re-verify-b76c
          </label>
        </div>
      </section>

      <section className='mb-8'>
        <div className='flex items-center justify-between mb-2'>
          <h2 className='text-lg font-semibold'>Summary</h2>
          <div className='flex gap-2'>
            <AIAssistant
              buttonLabel='Generate with AI'
              title='Generate Resume Summary'
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Summary</h2>
          <div className="flex gap-2">
            <AIAssistant
              buttonLabel="Generate with AI"
              title="Generate Resume Summary"
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Summary</h2>
          <div className="flex gap-2">
            <AIAssistant
              buttonLabel="Generate with AI"
              title="Generate Resume Summary"
ursor/integrate-build-improve-and-re-verify-b76c
              defaultPrompt={generateSummaryPrompt}
              onAccept={setSummary}
              authorizationToken={operatorToken}
            />
            <AIAssistant
              buttonLabel='Improve with AI'
              title='Improve Resume Summary'
              defaultPrompt={improveSectionPrompt(
                'summary',
                summary ||
                  'No content provided. Generate a summary based on role, years, and skills.'
              )}
              buttonLabel="Improve with AI"
              title="Improve Resume Summary"
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
              buttonLabel="Improve with AI"
              title="Improve Resume Summary"
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
ursor/integrate-build-improve-and-re-verify-b76c
              onAccept={setSummary}
              authorizationToken={operatorToken}
            />
          </div>
        </div>
        <textarea
          value={summary}
          onChange={e => setSummary(e.target.value)}
          rows={6}
          className='w-full rounded-md border p-3'
        />
        <textarea value={summary} onChange={e => setSummary(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
ursor/integrate-build-improve-and-re-verify-b76c
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Experience</h2>
          <AIAssistant
            buttonLabel='Improve with AI'
            title='Improve Experience'
            defaultPrompt={improveSectionPrompt(
              'experience section',
              experience || 'Add experience details to improve.'
            )}
        <textarea value={summary} onChange={e => setSummary(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Experience</h2>
          <AIAssistant
            buttonLabel="Improve with AI"
            title="Improve Experience"
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
            buttonLabel="Improve with AI"
            title="Improve Experience"
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
ursor/integrate-build-improve-and-re-verify-b76c
            onAccept={setExperience}
            authorizationToken={operatorToken}
          />
        </div>
        <textarea
          value={experience}
          onChange={e => setExperience(e.target.value)}
          rows={10}
          className='w-full rounded-md border p-3'
        />
        <textarea value={experience} onChange={e => setExperience(e.target.value)} rows={10} className="w-full rounded-md border p-3" />
ursor/integrate-build-improve-and-re-verify-b76c
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Skills</h2>
          <AIAssistant
            buttonLabel='Improve with AI'
            title='Improve Skills'
            defaultPrompt={improveSectionPrompt(
              'skills list',
              skillsText ||
                `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`
            )}
        <textarea value={experience} onChange={e => setExperience(e.target.value)} rows={10} className="w-full rounded-md border p-3" />
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Skills</h2>
          <AIAssistant
            buttonLabel="Improve with AI"
            title="Improve Skills"
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
            buttonLabel="Improve with AI"
            title="Improve Skills"
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
ursor/integrate-build-improve-and-re-verify-b76c
            onAccept={setSkillsText}
            authorizationToken={operatorToken}
          />
        </div>
        <textarea
          value={skillsText}
          onChange={e => setSkillsText(e.target.value)}
          rows={6}
          className='w-full rounded-md border p-3'
        />
        <textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
ursor/integrate-build-improve-and-re-verify-b76c
      </section>
    </div>
  )
};

export default ResumeBuilder;
        <textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
      </section>
    </div>
  )
};

export default ResumeBuilder;
export default ResumeBuilder;
ursor/integrate-build-improve-and-re-verify-b76c
