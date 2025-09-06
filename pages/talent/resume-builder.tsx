<<<<<<< HEAD

<<<<<<< HEAD
const ResumeBuilder: NextPage = () => {

=======

=======
<<<<<<< HEAD
const ResumeBuilder: NextPage = () => {
  const [role, setRole] = useState('Data Scientist');
  const [experienceYears, setExperienceYears] = useState(5);
  const [skills, setSkills] = useState('Python, Machine Learning, Cloud Systems');
  const [tone, setTone] = useState('clear and concise');
  const [summary, setSummary] = useState('');
  const [experience, setExperience] = useState('');
  const [skillsText, setSkillsText] = useState('');
  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN;
=======
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';

const ResumeBuilder: NextPage = () => {
<<<<<<< HEAD
  const [role, setRole] = useState('Data Scientist')
  const [experienceYears, setExperienceYears] = useState(5)
  const [skills, setSkills] = useState('Python, Machine Learning, Cloud Systems')
  const [tone, setTone] = useState('clear and concise')
  const [summary, setSummary] = useState('')
  const [experience, setExperience] = useState('')
  const [skillsText, setSkillsText] = useState('')
  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const generateSummaryPrompt = useMemo(() => (
    `Create a professional resume summary for a ${role.toLowerCase()} with ${experienceYears} years of experience in ${skills}. Tone: ${tone}.\n\nReturn markdown only.`
  ), [role, experienceYears, skills, tone])
  const improveSectionPrompt = (sectionName: string, content: string) => (
    `Improve the following resume ${sectionName} to be professional, concise, and results-focused. Keep markdown formatting.\n\n${content}`
<<<<<<< HEAD

  );


=======

=======
<<<<<<< HEAD
  );

=======
  )
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div>
      <Head>
        <title>Resume Builder - Zion AI Marketplace</title>
      </Head>
<<<<<<< HEAD


=======
<<<<<<< HEAD
<h1 className="text-2xl font-semibold mb-4">Resume Builder</h1>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <h1 className="text-2xl font-semibold mb-4">Resume Builder</h1>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
          </label>
        </div>
      </section>
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Summary</h2>
          <div className="flex gap-2">
            <AIAssistant
              buttonLabel="Generate with AI"
              title="Generate Resume Summary"
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              defaultPrompt={generateSummaryPrompt}
              onAccept={setSummary}
              authorizationToken={operatorToken}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              defaultPrompt={generateSummaryPrompt  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onAccept={setSummary  } catch (error) {
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            />
            <AIAssistant
              buttonLabel="Improve with AI"
              title="Improve Resume Summary"

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            />
            <AIAssistant
<<<<<<< HEAD
buttonLabel="Improve with AI"
              title="Improve Resume Summary"
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
=======
              buttonLabel="Improve with AI"
              title="Improve Resume Summary"
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
<<<<<<< HEAD

              onAccept={setSummary}
              authorizationToken={operatorToken}
=======

              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              onAccept={setSummary}
              authorizationToken={operatorToken}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              onAccept={setSummary}
              authorizationToken={operatorToken}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onAccept={setSummary  } catch (error) {
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
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            />
          </div>
        </div>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            />
          </div>
        </div>
<<<<<<< HEAD
<textarea value={summary} onChange={e => setSummary(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <textarea value={summary} onChange={e => setSummary(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      </section>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Experience</h2>
          <AIAssistant
            buttonLabel="Improve with AI"
            title="Improve Experience"
<<<<<<< HEAD

=======
<<<<<<< HEAD
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
<<<<<<< HEAD

            onAccept={setExperience}
            authorizationToken={operatorToken}
=======

            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            onAccept={setExperience}
            authorizationToken={operatorToken}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onAccept={setExperience}
            authorizationToken={operatorToken}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onAccept={setExperience  } catch (error) {
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
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          />
        </div>
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          />
        </div>
<<<<<<< HEAD
<textarea value={experience} onChange={e => setExperience(e.target.value)} rows={10} className="w-full rounded-md border p-3" />
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <textarea value={experience} onChange={e => setExperience(e.target.value)} rows={10} className="w-full rounded-md border p-3" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      </section>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Skills</h2>
          <AIAssistant
            buttonLabel="Improve with AI"
            title="Improve Skills"
<<<<<<< HEAD

=======
<<<<<<< HEAD
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
<<<<<<< HEAD

            onAccept={setSkillsText}
            authorizationToken={operatorToken}
=======

            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            onAccept={setSkillsText}
            authorizationToken={operatorToken}

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
            onAccept={setSkillsText}
            authorizationToken={operatorToken}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onAccept={setSkillsText  } catch (error) {
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
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          />
        </div>
        <textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
      </section>
    </div>
  )

<<<<<<< HEAD
},

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

},
export default ResumeBuilder,

=======
},

export default ResumeBuilder,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          />
        </div>
<<<<<<< HEAD
<textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
=======
        <textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      </section>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
export default ResumeBuilder;
<<<<<<< HEAD
import type { NextPage } from 'next',
import Head from 'next / head',
import React, { useMemo, useState } from 'react',
import AIAssistant from '../../components / ui / AIAssistant',
const ResumeBuilder: NextPage = () => {
  const [role, set_role] = useState ('Data Scientist'),
  const [experience_years, setExperienceYears] = useState (5),
  const [skills, set_skills] = useState ('Python, Machine Learning, Cloud Systems'),
  const [tone, set_tone] = useState ('clear and concise'),
  const [summary, set_summary] = useState (''),
  const [experience, set_experience] = useState (''),
  const [skills_text, setSkillsText] = useState (''),
  const operator_token = process.env.NEXT_PUBLIC_OPERATOR_TOKEN,
  const generateSummaryPrompt = useMemo (() => (
    `Create a professional resume summary for a ${role.toLowerCase ()} with ${experience_years} years of experience in ${skills}. Tone: ${tone}.\n\n_return markdown only.`), [role, experience_years, skills, tone]),
  const improveSectionPrompt = (section_name: string, content: string) =>: any (
    `Improve the following resume ${section_name} to be professional, concise, and results - focused. Keep markdown formatting.\n\n${content}`),
  return (
    <div>;
      <Head>;
        <title > Resume Builder - Zion AI Marketplace</title>;
      </Head>;
      <h1 className="text - 2xl font - semibold mb - 4">Resume Builder</h1>;
      <section className="mb - 8">;
        <h2 className="text - lg font - semibold mb - 2">Profile</h2>;
        <div className="grid gap - 3 sm:grid - cols - 2">;
          <label className="text - sm">Role;
            <input value={role} on_change={e => set_role (e.target.value)} className="mt - 1 w - full rounded - md border p - 2" />;
          </label>;
          <label className="text - sm">Years of Experience;
            <input type="number" value={experience_years} on_change={e => setExperienceYears (Number (e.target.value))} className="mt - 1 w - full rounded - md border p - 2" />;
          </label>;
          <label className="text - sm sm:col - span - 2">Key Skills;
            <input value={skills} on_change={e => set_skills (e.target.value)} className="mt - 1 w - full rounded - md border p - 2" />;
          </label>;
          <label className="text - sm sm:col - span - 2">Tone;
            <input value={tone} on_change={e => set_tone (e.target.value)} className="mt - 1 w - full rounded - md border p - 2" />;
          </label>;
        </div>;
      </section>;
      <section className="mb - 8">;
        <div className="flex items - center justify - between mb - 2">;
          <h2 className="text - lg font - semibold">Summary</h2>;
          <div className="flex gap - 2">;
            <AIAssistant;
              button_label="Generate with AI";
              title="Generate Resume Summary";
              default_prompt={generateSummaryPrompt}
              on_accept={set_summary}
              authorization_token={operator_token}
            />;
            <AIAssistant;
              button_label="Improve with AI";
              title="Improve Resume Summary";
              default_prompt={improveSectionPrompt ('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
              on_accept={set_summary}
              authorization_token={operator_token}
            />;
          </div>;
        </div>;
        <textarea value={summary} on_change={e => set_summary (e.target.value)} rows={6} className="w - full rounded - md border p - 3" />;
      </section>;
      <section className="mb - 8">;
        <div className="flex items - center justify - between mb - 2">;
          <h2 className="text - lg font - semibold">Experience</h2>;
          <AIAssistant;
            button_label="Improve with AI";
            title="Improve Experience";
            default_prompt={improveSectionPrompt ('experience section', experience || 'Add experience details to improve.')}
            on_accept={set_experience}
            authorization_token={operator_token}
          />;
        </div>;
        <textarea value={experience} on_change={e => set_experience (e.target.value)} rows={10} className="w - full rounded - md border p - 3" />;
      </section>;
      <section className="mb - 8">;
        <div className="flex items - center justify - between mb - 2">;
          <h2 className="text - lg font - semibold">Skills</h2>;
          <AIAssistant;
            button_label="Improve with AI";
            title="Improve Skills";
            default_prompt={improveSectionPrompt ('skills list', skills_text || `Create a professional skills list for ${role} with ${experience_years} years in ${skills}.`)}
            on_accept={setSkillsText}
            authorization_token={operator_token}
          />;
        </div>;
        <textarea value={skills_text} on_change={e => setSkillsText (e.target.value)} rows={6} className="w - full rounded - md border p - 3" />;
      </section>;
    </div>);
},
export default ResumeBuilder,
=======

=======
},
export default ResumeBuilder,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
},
<<<<<<< HEAD

export default ResumeBuilder,;
=======
export default ResumeBuilder,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
