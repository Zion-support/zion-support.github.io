<<<<<<< HEAD:pages/talent/resume-builder.tsx
<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
  const generateSummaryPrompt = useMemo(() => (
    `Create a professional resume summary for a ${role.toLowerCase()} with ${experienceYears} years of experience in ${skills}. Tone: ${tone}.\n\nReturn markdown only.`
  ), [role, experienceYears, skills, tone])
  const improveSectionPrompt = (sectionName: string, content: string) => (`
    `Improve the following resume ${sectionName} to be professional, concise, and results-focused. Keep markdown formatting.\n\n${content}`
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======

  );


=======

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/talent/resume-builder.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';
const ResumeBuilder: NextPage;
<<<<<<< HEAD:pages/talent/resume-builder.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/talent/resume-builder.tsx
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
  return (
    <div>
      <Head>
        <title>Resume Builder - Zion AI Marketplace</title>
      </Head>
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD:pages/talent/resume-builder.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
      <h1 className="text-2xl font-semibold mb-4">Resume Builder</h1>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Profile</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm">Role
            <input value={role} onChange={e => setRole(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
<<<<<<< HEAD
          </label>
          <label className="text-sm">Years of Experience
=======
      <section className="mb-8">"
        <h2 className="text-lg font-semibold mb-2">Profile</h2>"
        <div className="grid gap-3 sm:grid-cols-2">"
          <label className="text-sm">Role"
            <input value={role} onChange={e => setRole(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>"
          <label className="text-sm">Years of Experience"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
            <input type="number" value={experienceYears} onChange={e => setExperienceYears(Number(e.target.value))} className="mt-1 w-full rounded-md border p-2" />
          </label>"
          <label className="text-sm sm:col-span-2">Key Skills"
            <input value={skills} onChange={e => setSkills(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>"
          <label className="text-sm sm:col-span-2">Tone"
            <input value={tone} onChange={e => setTone(e.target.value)} className="mt-1 w-full rounded-md border p-2" />
          </label>
        </div>
      </section>
"
      <section className="mb-8">"
        <div className="flex items-center justify-between mb-2">"
          <h2 className="text-lg font-semibold">Summary</h2>"
          <div className="flex gap-2">
            <AIAssistant"
              buttonLabel="Generate with AI""
              title="Generate Resume Summary"
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD

              defaultPrompt={generateSummaryPrompt}
              onAccept={setSummary}
              authorizationToken={operatorToken}

            />
            <AIAssistant

              onAccept={setSummary}
              authorizationToken={operatorToken}

            />
          </div>
        </div>

=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/talent/resume-builder.tsx

<h1 className='text-2xl font-semibold mb-4'>Resume Builder</h1>

      <section className='mb-8'>
        <h2 className='text-lg font-semibold mb-2'>Profile</h2>
        <div className='grid gap-3 sm:grid-cols-2'>
          <label className='text-sm'>
            Role
            <input
              value={role}
              onChange={e => setRole(e.target.value)}
              className='mt-1 w-full rounded-md border p-2'
            />
origin/cursor/automate-test-improve-and-merge-code-2533
          </label>
          <label className='text-sm'>
            Years of Experience
            <input
              type='number'
              value={experienceYears}
              onChange={e => setExperienceYears(Number(e.target.value))}
              className='mt-1 w-full rounded-md border p-2'
            />
          </label>
          <label className='text-sm sm:col-span-2'>
            Key Skills
            <input
              value={skills}
              onChange={e => setSkills(e.target.value)}
              className='mt-1 w-full rounded-md border p-2'
            />
          </label>
          <label className='text-sm sm:col-span-2'>
            Tone
            <input
              value={tone}
              onChange={e => setTone(e.target.value)}
              className='mt-1 w-full rounded-md border p-2'
            />
          </label>
        </div>
      </section>

<section className='mb-8'>
        <div className='flex items-center justify-between mb-2'>
          <h2 className='text-lg font-semibold'>Summary</h2>
          <div className='flex gap-2'>
            <AIAssistant
<<<<<<< HEAD:pages/talent/resume-builder.tsx
<<<<<<< HEAD
              buttonLabel="Generate with AI"
              title="Generate Resume Summary"
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              defaultPrompt={generateSummaryPrompt  } catch (error) {
    console.error("Error:", error);
=======

              defaultPrompt={generateSummaryPrompt  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onAccept={setSummary  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              authorizationToken={operatorToken  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
            />
            <AIAssistant"
              buttonLabel="Improve with AI""
              title="Improve Resume Summary"
<<<<<<< HEAD
<<<<<<< HEAD
              defaultPrompt={improveSectionPrompt('summary', summary |'No content provided. Generate a summary based on role, years, and skills.')}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD
              onAccept={setSummary}
              authorizationToken={operatorToken}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

              onAccept={setSummary}
              authorizationToken={operatorToken}
=======

              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}

              onAccept={setSummary}
              authorizationToken={operatorToken}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/talent/resume-builder.tsx
              buttonLabel='Generate with AI'
              title='Generate Resume Summary'
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
origin/cursor/automate-test-improve-and-merge-code-2533
              onAccept={setSummary}
              authorizationToken={operatorToken}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')  } catch (error) {
    console.error("Error:", error);
=======
'
              defaultPrompt={improveSectionPrompt('summary', summary || 'No content provided. Generate a summary based on role, years, and skills.')  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onAccept={setSummary  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
              authorizationToken={operatorToken  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
            />
          </div>
        </div>"
        <textarea value={summary} onChange={e => setSummary(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      </section>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
=======

      </section>"
      <section className="mb-8">"
        <div className="flex items-center justify-between mb-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
          <h2 className="text-lg font-semibold">Experience</h2>
          <AIAssistant"
            buttonLabel="Improve with AI""
            title="Improve Experience"
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
<<<<<<< HEAD
            onAccept={setExperience}
            authorizationToken={operatorToken}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

            onAccept={setExperience}
            authorizationToken={operatorToken}
=======

            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}

            onAccept={setExperience}
            authorizationToken={operatorToken}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
            />
          </div>
        </div>
<textarea
          value={summary}
          onChange={e => setSummary(e.target.value)}
          rows={6}
          className='w-full rounded-md border p-3'
        />
      </section>

      <section className='mb-8'>
        <div className='flex items-center justify-between mb-2'>
          <h2 className='text-lg font-semibold'>Experience</h2>
          <AIAssistant
            buttonLabel='Improve with AI'
            title='Improve Experience'
            defaultPrompt={improveSectionPrompt(
              'experience section',
              experience || 'Add experience details to improve.'
            )}
origin/cursor/automate-test-improve-and-merge-code-2533
            onAccept={setExperience}
            authorizationToken={operatorToken}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')  } catch (error) {
    console.error("Error:", error);
=======
'
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')}
'
            defaultPrompt={improveSectionPrompt('experience section', experience || 'Add experience details to improve.')  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onAccept={setExperience  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            authorizationToken={operatorToken  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
          />
        </div>"
        <textarea value={experience} onChange={e => setExperience(e.target.value)} rows={10} className="w-full rounded-md border p-3" />
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      </section>
      <section className="mb-8">
        <div className="flex items-center justify-between mb-2">
=======

      </section>"
      <section className="mb-8">"
        <div className="flex items-center justify-between mb-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
          <h2 className="text-lg font-semibold">Skills</h2>
          <AIAssistant"
            buttonLabel="Improve with AI""
            title="Improve Skills"
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
<<<<<<< HEAD
            onAccept={setSkillsText}
            authorizationToken={operatorToken}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

            onAccept={setSkillsText}
            authorizationToken={operatorToken}
=======

            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}

            onAccept={setSkillsText}
            authorizationToken={operatorToken}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
          />
        </div>
<textarea
          value={experience}
          onChange={e => setExperience(e.target.value)}
          rows={10}
          className='w-full rounded-md border p-3'
        />
      </section>

      <section className='mb-8'>
        <div className='flex items-center justify-between mb-2'>
          <h2 className='text-lg font-semibold'>Skills</h2>
          <AIAssistant
            buttonLabel='Improve with AI'
            title='Improve Skills'
            defaultPrompt={improveSectionPrompt(
              'skills list',
              skillsText ||
                `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`
            )}
origin/cursor/automate-test-improve-and-merge-code-2533
            onAccept={setSkillsText}
            authorizationToken={operatorToken}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)  } catch (error) {
    console.error("Error:", error);
=======
'`
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)}
'`
            defaultPrompt={improveSectionPrompt('skills list', skillsText || `Create a professional skills list for ${role} with ${experienceYears} years in ${skills}.`)  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
            onAccept={setSkillsText  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            authorizationToken={operatorToken  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
          />
        </div>"
        <textarea value={skillsText} onChange={e => setSkillsText(e.target.value)} rows={6} className="w-full rounded-md border p-3" />
      </section>
    </div>
  )
<<<<<<< HEAD
}
export default ResumeBuilder;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD
},
export default ResumeBuilder,
},
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx




},
export default ResumeBuilder,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
<<<<<<< HEAD
},
export default ResumeBuilder,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
          />
        </div>
<textarea
          value={skillsText}
          onChange={e => setSkillsText(e.target.value)}
          rows={6}
          className='w-full rounded-md border p-3'
        />
      </section>
    </div>
<<<<<<< HEAD:pages/talent/resume-builder.tsx
<<<<<<< HEAD
  )

},
export default ResumeBuilder,
},

},
export default ResumeBuilder,

},
export default ResumeBuilder,
},
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx


<<<<<<< HEAD:pages_backup/talent/resume-builder.tsx
=======
<<<<<<< HEAD
=======
},

export default ResumeBuilder,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/talent/resume-builder.tsx
  );
};

export default ResumeBuilder;
<<<<<<< HEAD:pages/talent/resume-builder.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/talent/resume-builder.tsx
=======

'";`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/talent/resume-builder.tsx
