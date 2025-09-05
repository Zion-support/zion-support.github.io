import type { NextPage } from 'next',
import Head from 'next/head',
import React, { useMemo, useState } from 'react',
import AIAssistant from '../../components/ui/AIAssistant',
const ResumeBuilder: NextPage = () => {
  const [role, setRole] = useState('Data Scientist'),
  const [experienceYears, setExperienceYears] = useState(5),
  const [skills, setSkills] = useState('Python, Machine Learning, Cloud Systems'),
  const [tone, setTone] = useState('clear and concise'),

  const [summary, setSummary] = useState(''),
  const [experience, setExperience] = useState(''),
  const [skillsText, setSkillsText] = useState(''),

  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN,

  const generateSummaryPrompt = useMemo(() => (
    `Create a professional resume summary for a ${role.toLowerCase()} with ${experienceYears} years of experience in ${skills}. Tone: ${tone}.\n\nReturn markdown only.`
  ), [role, experienceYears, skills, tone]),

  const improveSectionPrompt = (sectionName: string, content: string) => (
    `Improve the following resume ${sectionName} to be professional, concise, and results-focused. Keep markdown formatting.\n\n${content}`
  ),

  return (
    <div>
      <Head>
        <title>Resume Builder - Zion AI Marketplace</title>
      </Head>

      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Resume Builder</h1>

      <section className=&quot;mb-8&quot;>
        <h2 className=&quot;text-lg font-semibold mb-2&quot;>Profile</h2>
        <div className=&quot;grid gap-3 sm:grid-cols-2&quot;>
          <label className=&quot;text-sm&quot;>Role
            <input value={role} onChange={e => setRole(e.target.value)} className=&quot;mt-1 w-full rounded-md border p-2&quot; />
          </label>
          <label className=&quot;text-sm&quot;>Years of Experience
            <input type=&quot;number&quot; value={experienceYears} onChange={e => setExperienceYears(Number(e.target.value))} className=&quot;mt-1 w-full rounded-md border p-2&quot; />
          </label>
          <label className=&quot;text-sm sm:col-span-2&quot;>Key Skills
            <input value={skills} onChange={e => setSkills(e.target.value)} className=&quot;mt-1 w-full rounded-md border p-2&quot; />
          </label>
          <label className=&quot;text-sm sm:col-span-2&quot;>Tone
            <input value={tone} onChange={e => setTone(e.target.value)} className=&quot;mt-1 w-full rounded-md border p-2&quot; />
          </label>
        </div>
      </section>

      <section className=&quot;mb-8&quot;>
        <div className=&quot;flex items-center justify-between mb-2&quot;>
          <h2 className=&quot;text-lg font-semibold&quot;>Summary</h2>
          <div className=&quot;flex gap-2&quot;>
            <AIAssistant
              buttonLabel=&quot;Generate with AI&quot;
              title=&quot;Generate Resume Summary&quot;
              defaultPrompt={generateSummaryPrompt}
              onAccept={setSummary}
              authorizationToken={operatorToken}
            />
            <AIAssistant
              buttonLabel=&quot;Improve with AI&quot;
              title=&quot;Improve Resume Summary&quot;
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
              onAccept={setSummary}
              authorizationToken={operatorToken}
            />
          </div>
        </div>
        <textarea value={summary} onChange={e => setSummary(e.target.value)} rows={6} className=&quot;w-full rounded-md border p-3&quot; />
      </section>

      <section className=&quot;mb-8&quot;>
        <div className=&quot;flex items-center justify-between mb-2&quot;>
          <h2 className=&quot;text-lg font-semibold&quot;>Experience</h2>
          <AIAssistant
            buttonLabel=&quot;Improve with AI&quot;
            title=&quot;Improve Experience&quot;
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
            onAccept={setExperience}
            authorizationToken={operatorToken}
          />
        </div>
        <textarea value={experience} onChange={e => setExperience(e.target.value)} rows={10} className=&quot;w-full rounded-md border p-3&quot; />
      </section>

      <section className=&quot;mb-8&quot;>
        <div className=&quot;flex items-center justify-between mb-2&quot;>
          <h2 className=&quot;text-lg font-semibold&quot;>Skills</h2>
          <AIAssistant
            buttonLabel=&quot;Improve with AI&quot;
            title=&quot;Improve Skills&quot;
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
            onAccept={setSkillsText}
            authorizationToken={operatorToken}
          />
        </div>
        <textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className=&quot;w-full rounded-md border p-3&quot; />
      </section>
    </div>
  )
},

export default ResumeBuilder,