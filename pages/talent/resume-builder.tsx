
<<<<<<< HEAD
<<<<<<< HEAD

=======
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';

const ResumeBuilder: NextPage = () => {
  const [role, setRole] = useState('Data Scientist')
  const [experienceYears, setExperienceYears] = useState(5)
  const [skills, setSkills] = useState('Python, Machine Learning, Cloud Systems')
  const [tone, setTone] = useState('clear and concise')
  const [summary, setSummary] = useState('')
  const [experience, setExperience] = useState('')
  const [skillsText, setSkillsText] = useState('')
  const operatorToken = process.env.NEXT_PUBLIC_OPERATOR_TOKEN
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const generateSummaryPrompt = useMemo(() => (
    `Create a professional resume summary for a ${role.toLowerCase()} with ${experienceYears} years of experience in ${skills}. Tone: ${tone}.\n\nReturn markdown only.`
  ), [role, experienceYears, skills, tone])
  const improveSectionPrompt = (sectionName: string, content: string) => (
    `Improve the following resume ${sectionName} to be professional, concise, and results-focused. Keep markdown formatting.\n\n${content}`
<<<<<<< HEAD

<<<<<<< HEAD
  );


=======

=======
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div>
      <Head>
        <title>Resume Builder - Zion AI Marketplace</title>
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <h1 className="text-2xl font-semibold mb-4">Resume Builder</h1>
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
              defaultPrompt={generateSummaryPrompt}
              onAccept={setSummary}
              authorizationToken={operatorToken}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            />
            <AIAssistant
              buttonLabel="Improve with AI"
              title="Improve Resume Summary"
<<<<<<< HEAD
<<<<<<< HEAD

              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}

              onAccept={setSummary}
              authorizationToken={operatorToken}
=======

=======
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}

              onAccept={setSummary}
              authorizationToken={operatorToken}

<<<<<<< HEAD
=======
              onAccept={setSummary}
              authorizationToken={operatorToken}
              defaultPrompt={improveSectionPrompt('summary', summary |'No content provided. Generate a summary based on role, years, and skills.')}
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
              onAccept={setSummary}
              authorizationToken={operatorToken}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
              onAccept={setSummary}
              authorizationToken={operatorToken}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
            />
          </div>
        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            />
          </div>
        </div>
        <textarea value={summary} onChange={e => setSummary(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
      </section>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Experience</h2>
          <AIAssistant
            buttonLabel="Improve with AI"
            title="Improve Experience"
<<<<<<< HEAD
<<<<<<< HEAD

            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}

            onAccept={setExperience}
            authorizationToken={operatorToken}
=======

=======
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}

            onAccept={setExperience}
            authorizationToken={operatorToken}

<<<<<<< HEAD
=======
            onAccept={setExperience}
            authorizationToken={operatorToken}
            defaultPrompt={improveSectionPrompt('experience section', experience |'Add experience details to improve.')}
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
            onAccept={setExperience}
            authorizationToken={operatorToken}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
            onAccept={setExperience}
            authorizationToken={operatorToken}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          />
        </div>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          />
        </div>
        <textarea value={experience} onChange={e => setExperience(e.target.value)} rows={10} className="w-full rounded-md border p-3" />
      </section>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Skills</h2>
          <AIAssistant
            buttonLabel="Improve with AI"
            title="Improve Skills"
<<<<<<< HEAD
<<<<<<< HEAD

            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}

            onAccept={setSkillsText}
            authorizationToken={operatorToken}
=======

=======
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}

            onAccept={setSkillsText}
            authorizationToken={operatorToken}

<<<<<<< HEAD
=======
            onAccept={setSkillsText}
            authorizationToken={operatorToken}
            defaultPrompt={improveSectionPrompt('skills list', skillsText |`Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
            onAccept={setSkillsText}
            authorizationToken={operatorToken}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
            onAccept={setSkillsText}
            authorizationToken={operatorToken}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          />
        </div>
        <textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
      </section>
    </div>
  )

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
},
export default ResumeBuilder,
},
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

},
export default ResumeBuilder,

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
},

export default ResumeBuilder,

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          />
        </div>
        <textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
      </section>
    </div>
  )
}
export default ResumeBuilder;

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
},
export default ResumeBuilder,
},

export default ResumeBuilder,;
export default ResumeBuilder,
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
