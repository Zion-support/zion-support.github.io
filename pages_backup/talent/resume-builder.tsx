import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useMemo, useState } from 'react';
import AIAssistant from '../../components/ui/AIAssistant';
const ResumeBuilder: NextPage;
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div>
      <Head>
        <title>Resume Builder - Zion AI Marketplace</title>
      </Head>

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
  );
};

export default ResumeBuilder;
origin/cursor/automate-test-improve-and-merge-code-2533
