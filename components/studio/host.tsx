import React, { useState } from 'react';

type PersonaConfig = any;
  language: string;
  cloneStyleText?: string;
}
export default function StudioHostPage() {
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),
  const [inviteeName, setInviteeName] = useState($2);
  const [inviteeBio, setInviteeBio] = useState($2);
  const [topic, setTopic] = useState($2);
  const [operatorPrompt, setOperatorPrompt] = useState($2);
  const [generating, setGenerating] = useState($2);
  const [episode, setEpisode] = useState<any>(null),
  const [synthesizing, setSynthesizing] = useState($2);
  const [publishing, setPublishing] = useState($2);
  const handleGenerate = async () => {
    setGenerating($2);
    try {
      const res = await fetch('/api/podcast/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ persona, invitee: { name: inviteeName, bio: inviteeBio}, topic, operatorPrompt })}),
      const data = await res.json($2);
=======
=======
<<<<<<< HEAD
  });
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeBio, setInviteeBio] = useState('');
=======
    voice: 'Visionary''
    language: 'English''
    voice: 'Visionary','
    language: 'English',;


  });'
  const [inviteeName, setInviteeName] = useState('');'
  const [inviteeBio, setInviteeBio] = useState('');'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [topic, setTopic] = useState('');

export default function StudioHostPage() { return null; }
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),;'
  const [inviteeName, setInviteeName] = useState('');'
  const [inviteeBio, setInviteeBio] = useState('');'
  const [topic, setTopic] = useState('');'
  const [operatorPrompt, setOperatorPrompt] = useState('Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.');
  const [operatorPrompt, setOperatorPrompt] = useState(
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.'
  );

origin/cursor/automate-test-improve-and-merge-code-2533
  const [generating, setGenerating] = useState(false);
  const [episode, setEpisode] = useState<any>(null);
  const [synthesizing, setSynthesizing] = useState(false);
  const [publishing, setPublishing] = useState(false);
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch('/api/podcast/generate', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          persona
          invitee: { name: inviteeName, bio: inviteeBio }
          topic
          operatorPrompt
        })
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
          persona,
          invitee: { name: inviteeName, bio: inviteeBio },
          topic,
          operatorPrompt,
        }),
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      });
      const data = await res.json();
      setEpisode(data.episode);
origin/cursor/automate-test-improve-and-merge-code-2533
    } catch (e) {
<<<<<<< HEAD
      console.error(e);
      alert('Failed to generate episode');
    } finally {
      setGenerating(false);    }      const data = await res.json();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      setEpisode(data.episode)
    } catch (e) {
      console.error($2);
      alert('Failed to generate episode')
    } finally {
      setGenerating(false)
    }
  },

  const handleSynthesize = $2;
    setSynthesizing($2);
    try {
      const res = await fetch('/api/podcast/synthesize', {
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ episodeId: episode.id, persona })}),
      const data = await res.json($2);
=======
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ episodeId: episode.id, persona })
=======
      console.error (e);
=======
    } catch (e) {}
      console.error (e);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      alert ('Failed to generate episode');
    } finally {}
      set_generating (false);
    }

  return ('
    <div className='space-y-8'>;'
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>;
'
      <section className='space-y-3'>;'
        <h2 className='text-xl font-semibold'>AI Persona</h2>;'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;'
            <label className='block text-sm font-medium'>Voice</label>;
<<<<<<< HEAD
      setGenerating(false);
    }
  }
  const handleSynthesize = async () => {
    if (!episode?.id) return;
    setSynthesizing(true);
    try {
      const res = await fetch('/api/podcast/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ episodeId: episode.id, persona }),
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      });
      const data = await res.json();
      setEpisode(data.episode);
    } catch (e) {
      console.error(e);
      alert('Failed to synthesize audio');
    } finally {
<<<<<<< HEAD
      setSynthesizing(false);    }      const data = await res.json();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      setEpisode(data.episode)
    } catch (e) {
      console.error($2);
      alert('Failed to synthesize audio')
    } finally {
      setSynthesizing(false)
    }
<<<<<<< HEAD
  },

  const handlePublishRss = $2;
    setPublishing($2);
    try {
      const res = await fetch($2);
      await res.json($2);
      alert('RSS feed updated. Platforms will pull on next refresh.')
=======
=======
      setSynthesizing(false);
    }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }
  const handlePublishRss = async () => {
    if (!episode?.id) return;
    setPublishing(true);
    try {
<<<<<<< HEAD
      const res = await fetch('/api/podcast/rss', { method: 'POST' });
=======
const res = await fetch('/api/podcast/rss', { method: 'POST' });
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      await res.json();
      alert('RSS feed updated. Platforms will pull on next refresh.');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    } catch (e) {
<<<<<<< HEAD
      console.error($2);
      alert('Failed to update RSS')
    } finally {
      set_generating (false);
      setPublishing(false)
    }
  },
=======
      console.error(e);
      alert('Failed to update RSS');
    } finally {
      setPublishing(false);
    }
  }
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  return (
<div className='space-y-8'>
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>
      <section className='space-y-3'>
        <h2 className='text-xl font-semibold'>AI Persona</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label className='block text-sm font-medium'>Voice</label>
origin/cursor/automate-test-improve-and-merge-code-2533
            <select
=======
            <select'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className='mt-1 w-full border rounded p-2'
              value={persona && persona.voice}
              onChange={e =>;
                setPersona({ ...persona, voice: e && e.target.value as any });
      set_publishing (false);
    }
  }
;
  return ('
    <div className='space - y-8'>;'
      <h1 className='text - 3xl font - bold'>Podcast Studio Host</h1>;'
      <section className='space - y-3'>;'
        <h2 className='text - xl font - semibold'>AI Persona</h2>;'
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
          <div>;'
            <label className='block text - sm font - medium'>Voice</label>;
<<<<<<< HEAD
            <select;'
              className='mt - 1 w - full border rounded p - 2';
              value={persona.voice}
              on_change={e =>;
                set_persona ({ ...persona, voice: e.target.value as any });
              }
            >;'
              <option value='Visionary'>Visionary</option>;'
              <option value='Grounded'>Grounded</option>;'
              <option value='Technical'>Technical</option>;
=======
<div className='space-y-8' />
      <h1 className='text-3xl font-bold' />Podcast Studio Host</h1>
      <section className='space-y-3' />
        <h2 className='text-xl font-semibold' />AI Persona</h2>
        <div className='grid grid-cols-1 md: grid-cols-3 gap-4' />
          <div />
            <label className='block text-sm font-medium' />Voice</label>
            <select;
className='mt-1 w-full border rounded p-2'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  return (
export default function StudioHostPage() {const [persona, setPersona] = useState<PersonaConfig>({voice: 'Visionary';
    language: 'English';
    voice: 'Visionary',language: 'English',})const [inviteeName, setInviteeName] = useState('')const [inviteeBio, setInviteeBio] = useState('')const [topic, setTopic]  = useState('')export default function StudioHostPage() {const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),const [inviteeName, setInviteeName] = useState('')const [inviteeBio, setInviteeBio] = useState('')const [topic, setTopic] = useState('')const [operatorPrompt, setOperatorPrompt]  = useState('Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.')const [operatorPrompt, setOperatorPrompt] = useState('Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.';
  )const [generating, setGenerating] = useState(false)const [episode, setEpisode] = useState<any>(null)const [synthesizing, setSynthesizing] = useState(false)const [publishing, setPublishing]  = useState(false)const handleGenerate = async () => {setGenerating(true)try {const res = await fetch('/api/podcast/generate', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({persona,invitee: { name: inviteeName, bio: inviteeBio },topic,operatorPrompt,}),})const data = await res.json()setEpisode(data.episode)} catch (e) {console.error (e)alert ('Failed to generate episode')} finally {set_generating (false)}return (<div className='space-y-8'>;
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>;<section className='space-y-3'>;
        <h2 className='text-xl font-semibold'>AI Persona</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>Voice</label>;setGenerating(false)}
  }
  const handleSynthesize = async () => {if (!episode?.id) return;
    setSynthesizing(true)try {const res = await fetch('/api/podcast/synthesize', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ episodeId: episode.id, persona }),})const data = await res.json()setEpisode(data.episode)} catch (e) {console.error(e)alert('Failed to synthesize audio')} finally {setSynthesizing(false)}
  }
  const handlePublishRss = async () => {if (!episode?.id) return;
    setPublishing(true)try {const res = await fetch('/api/podcast/rss', { method: 'POST' })await res.json()alert('RSS feed updated. Platforms will pull on next refresh.')} catch (e) {console.error(e)alert('Failed to update RSS')} finally {setPublishing(false)}
  }
  return (<div className='space-y-8'>;
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>;
      <section className='space-y-3'>;
        <h2 className='text-xl font-semibold'>AI Persona</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>Voice</label>;
            <select;
              className='mt-1 w-full border rounded p-2';
              value={persona && persona.voice}
              onChange={e =>;
                setPersona({ ...persona, voice: e && e.target.value as any })set_publishing (false)}
  }return (<div className='space - y-8'>;
      <h1 className='text - 3xl font - bold'>Podcast Studio Host</h1>;
      <section className='space - y-3'>;
        <h2 className='text - xl font - semibold'>AI Persona</h2>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
          <div>;
            <label className='block text - sm font - medium'>Voice</label>;
            <select;
              className='mt - 1 w - full border rounded p - 2';
              value={persona.voice}
              on_change={e =>;
                set_persona ({ ...persona, voice: e.target.value as any })}
            >;
<<<<<<< HEAD
              <option value='Visionary'>Visionary</option>;
              <option value='Grounded'>Grounded</option>;
              <option value='Technical'>Technical</option>;
=======
              <option value='Visionary' />Visionary</option>;
              <option value='Grounded' />Grounded</option>;
              <option value='Technical' />Technical</option>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </select>;
          </div>;
          <div>}
            />;
          </div>;
<<<<<<< HEAD
          <div>value={persona && persona.cloneStyleText || ''}
              onChange={e =>;
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Podcast Studio Host</h1>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">AI Persona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium">Voice</label>
            <select
              className="mt-1 w-full border rounded p-2"
              value={persona.voice}
              onChange={(e) => setPersona({ ...persona, voice: e.target.value as any })}
            >
              <option value="Visionary">Visionary</option>
              <option value="Grounded">Grounded</option>
              <option value="Technical">Technical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Language</label>
            <input className="mt-1 w-full border rounded p-2" value={persona.language} onChange={(e) => setPersona({ ...persona, language: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Clone Style (optional)</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={3} placeholder="Paste representative writing or notes to clone tone" value={persona.cloneStyleText || ''} onChange={(e) => setPersona({ ...persona, cloneStyleText: e.target.value })} />
=======
<<<<<<< HEAD
          <div>;'
              value={persona && persona.cloneStyleText || ''}
=======
          <div />value={persona && persona.cloneStyleText || ''}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              onChange={e =>;
}
                setPersona({ ...persona, cloneStyleText: e && e.target.value,}
});
              }
            />          </div>;
        </div>;
      </section>;'
      <section className='space-y-3'>;'
        <h2 className='text-xl font-semibold'>Episode Generator</h2>;'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>          </div>;
        </div>;
      </section>;'
      <section className='space-y-3'>;'
        <h2 className='text-xl font-semibold'>Episode Generator</h2>;'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;'
            <label className='block text-sm font-medium'>Invitee Name</label>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Episode Generator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
                setPersona({ ...persona, cloneStyleText: e && e.target.value })}/>          </div>;
            />          </div>;
                setPersona({ ...persona, cloneStyleText: e && e.target.value })}/>          </div>;
        </div>;
      </section>;
      <section className='space-y-3'>;
        <h2 className='text-xl font-semibold'>Episode Generator</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>          </div>;
        </div>;
      </section>;
      <section className='space-y-3'>;
        <h2 className='text-xl font-semibold'>Episode Generator</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>Invitee Name</label>;/>;
          </div>;
        </div>;
      </section>;
<section className='space-y-3'>;
        <h2 className='text-xl font-semibold'>Episode Generator</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>Invitee Name</label>;
            <input
              className='mt-1 w-full border rounded p-2'
=======
<section className='space-y-3'>
        <h2 className='text-xl font-semibold'>Episode Generator</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label className='block text-sm font-medium'>Invitee Name</label>
origin/cursor/automate-test-improve-and-merge-code-2533
            <input
=======
            <input'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className='mt-1 w-full border rounded p-2'
<section className='space-y-3' />
        <h2 className='text-xl font-semibold' />Episode Generator</h2>
        <div className='grid grid-cols-1 md: grid-cols-3 gap-4' />
          <div />
            <label className='block text-sm font-medium' />Invitee Name</label>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <input;
              className='mt-1 w-full border rounded p-2';
              value={inviteeName}
              onChange={e => setInviteeName(e && e.target.value)}
            />;
<<<<<<< HEAD
          </div>;'
          <div className='md:col-span-2'>;'
            <label className='block text-sm font-medium'>Invitee Bio</label>;
            <textarea'
              className='mt-1 w-full border rounded p-2'
=======
          </div>;
          <div className='md:col-span-2'>;
            <label className='block text-sm font-medium'>Invitee Bio</label>;
            <textarea;
              className='mt-1 w-full border rounded p-2';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              rows={3}
              value={inviteeBio}
              onChange={e => setInviteeBio(e && e.target.value)}
            />;
<<<<<<< HEAD
          </div>;'
          <div className='md:col-span-3'>;'
            <label className='block text-sm font-medium'>Topic</label>;
            <input'
              className='mt-1 w-full border rounded p-2'
=======
          </div>;
          <div className='md:col-span-3'>;
            <label className='block text-sm font-medium'>Topic</label>;
            <input;
              className='mt-1 w-full border rounded p-2';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              value={topic}
              onChange={e => setTopic(e && e.target.value)}
            />;
<<<<<<< HEAD
          </div>;'
          <div className='md:col-span-3'>;'
            <label className='block text-sm font-medium'>Operator Prompt</label>;
            <textarea'
              className='mt-1 w-full border rounded p-2'
=======
          </div>;
          <div className='md:col-span-3'>;
            <label className='block text-sm font-medium'>Operator Prompt</label>;
            <textarea;
              className='mt-1 w-full border rounded p-2';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              rows={3}
              value={operatorPrompt}
              onChange={e => setOperatorPrompt(e && e.target.value)}
            />;
          </div>;
        </div>;
<<<<<<< HEAD
            <label className="block text-sm font-medium">Invitee Name</label>
            <input className="mt-1 w-full border rounded p-2" value={inviteeName} onChange={(e) => setInviteeName(e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Invitee Bio</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={inviteeBio} onChange={(e) => setInviteeBio(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-medium">Topic</label>
            <input className="mt-1 w-full border rounded p-2" value={topic} onChange={(e) => setTopic(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-medium">Operator Prompt</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>
      </section>
=======
<<<<<<< HEAD
        <button'
          className='px-4 py-2 bg-blue-600 text-white rounded'
          onClick={handleGenerate}'
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

      {episode && (
        <button;
<<<<<<< HEAD
          className='px-4 py-2 bg-blue-600 text-white rounded';
          onClick={handleGenerate}disabled={generating}>          {generating ? 'Generating…' : 'Generate Episode'}
          disabled={generating}>          {generating ? 'Generating…' : 'Generate Episode'}
        <button;
          className='px-4 py-2 bg-blue-600 text-white rounded';
          onClick={handleGenerate}disabled={generating}>          {generating ? 'Generating…' : 'Generate Episode'}
      <section className="space-y-3">;
        <h2 className="text-xl font-semibold">AI Persona</h2>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Voice">Voice</label>;
            <select;
              className="mt-1 w-full border rounded p-2";
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Invitee Name">Invitee Name</label>;
            <input className="mt-1 w-full border rounded p-2" value={inviteeName} onChange={(e) => setInviteeName(e.target.value)} />;
          </div>;
          <div className="md:col-span-2">;
            <label className="block text-sm font-medium" htmlFor="input-Invitee Bio">Invitee Bio</label>;
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={inviteeBio} onChange={(e) => setInviteeBio(e.target.value)} />;
          </div>;
          <div className="md:col-span-3">;
            <label className="block text-sm font-medium" htmlFor="input-Topic">Topic</label>;
            <input className="mt-1 w-full border rounded p-2" value={topic} onChange={(e) => setTopic(e.target.value)} />;
          </div>;
          <div className="md:col-span-3">;
            <label className="block text-sm font-medium" htmlFor="input-Operator Prompt">Operator Prompt</label>;
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />;
          </div>;
        </div>;
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>;
=======
className='px-4 py-2 bg-blue-600 text-white rounded'
          onClick={handleGenerate}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          disabled={generating}>          {generating ? 'Generating…' : 'Generate Episode'}
      <section className="space-y-3">;"
        <h2 className="text-xl font-semibold">AI Persona</h2>;"
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
          <div>;"
            <label className="block text-sm font-medium" htmlFor="input-Voice">Voice</label>;
            <select"
              className="mt-1 w-full border rounded p-2"
          <div>"
            <label className="block text-sm font-medium" htmlFor="input-Invitee Name">Invitee Name</label>"
            <input className="mt-1 w-full border rounded p-2" value={inviteeName} onChange={(e) => setInviteeName(e.target.value)} />
          </div>"
          <div className="md:col-span-2">"
            <label className="block text-sm font-medium" htmlFor="input-Invitee Bio">Invitee Bio</label>"
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={inviteeBio} onChange={(e) => setInviteeBio(e.target.value)} />
          </div>"
          <div className="md:col-span-3">"
            <label className="block text-sm font-medium" htmlFor="input-Topic">Topic</label>"
            <input className="mt-1 w-full border rounded p-2" value={topic} onChange={(e) => setTopic(e.target.value)} />
          </div>"
          <div className="md:col-span-3">"
            <label className="block text-sm font-medium" htmlFor="input-Operator Prompt">Operator Prompt</label>"
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
          </div>
<<<<<<< HEAD
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>
          disabled={generating}
        >
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
        </div>"
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>
      </section>
      {episode && ("
          <h2 className="text-xl font-semibold">Episode Draft</h2>"
          <div className="border rounded p-4 space-y-3">"
            <p className="text-sm text-gray-600">ID: {episode.id}</p>"
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          disabled={generating}
        >;
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>;
      </section>;
      {episode && (<h2 className="text-xl font-semibold">Episode Draft</h2>;
          <div className="border rounded p-4 space-y-3">;
            <p className="text-sm text-gray-600">ID: {episode.id}</p>;
            <h3 className="text-lg font-bold">{episode.title}</h3>;
            <div>;
              <h4 className="font-semibold">Questions</h4>;
              <ol className="list-decimal list-inside space-y-1">;
            <select
              className="mt-1 w-full border rounded p-2"
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Invitee Name">Invitee Name</label>
            <input className="mt-1 w-full border rounded p-2" value={inviteeName} onChange={(e) => setInviteeName(e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium" htmlFor="input-Invitee Bio">Invitee Bio</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={inviteeBio} onChange={(e) => setInviteeBio(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-medium" htmlFor="input-Topic">Topic</label>
            <input className="mt-1 w-full border rounded p-2" value={topic} onChange={(e) => setTopic(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-medium" htmlFor="input-Operator Prompt">Operator Prompt</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>
      </section>
      {episode && (
<<<<<<< HEAD
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Episode Draft</h2>
          <div className="border rounded p-4 space-y-3">
            <p className="text-sm text-gray-600">ID: {episode.id}</p>
            <h3 className="text-lg font-bold">{episode.title}</h3>
            <div>
              <h4 className="font-semibold">Questions</h4>
              <ol className="list-decimal list-inside space-y-1">
              value={persona && persona.voice}
              onChange={(e) => setPersona({ ...persona, voice: e && e.target.value as any })}
            >;
              <option value="Visionary">Visionary</option>;
              <option value="Grounded">Grounded</option>;
              <option value="Technical">Technical</option>;
            </select>;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Language">Language</label>;
            <input className="mt-1 w-full border rounded p-2" value={persona && persona.language} onChange={(e) => setPersona({ ...persona, language: e && e.target.value })} />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Clone Style (optional)">Clone Style (optional)</label>;
=======
          <h2 className="text-xl font-semibold">Episode Draft</h2>
          <div className="border rounded p-4 space-y-3">
            <p className="text-sm text-gray-600">ID: {episode.id}</p>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <h3 className="text-lg font-bold">{episode.title}</h3>
            <div>"
              <h4 className="font-semibold">Questions</h4>"
              <ol className="list-decimal list-inside space-y-1">
              value={persona && persona.voice}
              onChange={(e) => setPersona({ ...persona, voice: e && e.target.value as any })}
            >;"
              <option value="Visionary">Visionary</option>;"
              <option value="Grounded">Grounded</option>;"
              <option value="Technical">Technical</option>;
            </select>;
          </div>;
          <div>;"
            <label className="block text-sm font-medium" htmlFor="input-Language">Language</label>;"
            <input className="mt-1 w-full border rounded p-2" value={persona && persona.language} onChange={(e) => setPersona({ ...persona, language: e && e.target.value })} />;
          </div>;
          <div>;"
            <label className="block text-sm font-medium" htmlFor="input-Clone Style (optional)">Clone Style (optional)</label>;'"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <textarea className="mt-1 w-full border rounded p-2" rows={3} placeholder="Paste representative writing or notes to clone tone" value={persona && persona.cloneStyleText || ''} onChange={(e) => setPersona({ ...persona, cloneStyleText: e && e.target.value })} />;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Invitee Name">Invitee Name</label>;
            <input className="mt-1 w-full border rounded p-2" value={inviteeName} onChange={(e) => setInviteeName(e && e.target.value)} />;
          </div>;
          <div className="md:col-span-2">;
            <label className="block text-sm font-medium" htmlFor="input-Invitee Bio">Invitee Bio</label>;
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={inviteeBio} onChange={(e) => setInviteeBio(e && e.target.value)} />;
          </div>;
          <div className="md:col-span-3">;
            <label className="block text-sm font-medium" htmlFor="input-Topic">Topic</label>;
            <input className="mt-1 w-full border rounded p-2" value={topic} onChange={(e) => setTopic(e && e.target.value)} />;
          </div>;
          <div className="md:col-span-3">;
            <label className="block text-sm font-medium" htmlFor="input-Operator Prompt">Operator Prompt</label>;
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e && e.target.value)} />;
          </div>;
        </div>;
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>;
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>;
      </section>;
      {episode && (<section className='space-y-4'>;
          <h2 className='text-xl font-semibold'>Episode Draft</h2>;
          <div className='border rounded p-4 space-y-3'>;
            <p className='text-sm text-gray-600'>ID: {episode && episode.id}</p>;
            <h3 className='text-lg font-bold'>{episode && episode.title}</h3>;
            <div>;
              <h4 className='font-semibold'>Questions</h4>;
              <ol className='list-decimal list-inside space-y-1'>                {episode && episode.questions?.map((q: string, idx: number) => (        <section className="space-y-4">;
          <h2 className="text-xl font-semibold">Episode Draft</h2>;
          <div className="border rounded p-4 space-y-3">;
            <p className="text-sm text-gray-600">ID: {episode && episode.id}</p>;
            <h3 className="text-lg font-bold">{episode && episode.title}</h3>;
            <div>;
              <h4 className="font-semibold">Questions</h4>;
              <ol className="list-decimal list-inside space-y-1">;
                  <li key={idx}>{q}</li>;
                {episode.audio.mp3Url && (<a;
                    href={episode.audio.mp3Url}
=======
          <div>;"
            <label className="block text-sm font-medium" htmlFor="input-Invitee Name">Invitee Name</label>;"
            <input className="mt-1 w-full border rounded p-2" value={inviteeName} onChange={(e) => setInviteeName(e && e.target.value)} />;
          </div>;"
          <div className="md:col-span-2">;"
            <label className="block text-sm font-medium" htmlFor="input-Invitee Bio">Invitee Bio</label>;"
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={inviteeBio} onChange={(e) => setInviteeBio(e && e.target.value)} />;
          </div>;"
          <div className="md:col-span-3">;"
            <label className="block text-sm font-medium" htmlFor="input-Topic">Topic</label>;"
            <input className="mt-1 w-full border rounded p-2" value={topic} onChange={(e) => setTopic(e && e.target.value)} />;
          </div>;"
          <div className="md:col-span-3">;"
            <label className="block text-sm font-medium" htmlFor="input-Operator Prompt">Operator Prompt</label>;"
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e && e.target.value)} />;
          </div>;
        </div>;"
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>;'
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>;
      </section>;
      {episode && (;'
        <section className='space-y-4'>;'
          <h2 className='text-xl font-semibold'>Episode Draft</h2>;'
          <div className='border rounded p-4 space-y-3'>;'
            <p className='text-sm text-gray-600'>ID: {episode && episode.id}</p>;'
            <h3 className='text-lg font-bold'>{episode && episode.title}</h3>;
            <div>;'
              <h4 className='font-semibold'>Questions</h4>;'"
              <ol className='list-decimal list-inside space-y-1'>                {episode && episode.questions?.map((q: string, idx: number) => (        <section className="space-y-4">;"
          <h2 className="text-xl font-semibold">Episode Draft</h2>;"
          <div className="border rounded p-4 space-y-3">;"
            <p className="text-sm text-gray-600">ID: {episode && episode.id}</p>;"
            <h3 className="text-lg font-bold">{episode && episode.title}</h3>;
            <div>;"
              <h4 className="font-semibold">Questions</h4>;"
              <ol className="list-decimal list-inside space-y-1">;
                  <li key={idx}>{q}</li>;
                {episode.audio.mp3Url && (
                  <a;
                    href={episode.audio.mp3Url}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    className='text - blue - 600 underline';
                  >;
                    Download MP3;
                  </a>)}
<<<<<<< HEAD
                {episode.audio.wav_url && (<a;
                    href={episode.audio.wav_url}
=======
                {episode.audio.wav_url && (
                  <a;
                    href={episode.audio.wav_url}'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    className='text - blue - 600 underline';
                  >;
                    Download WAV;
                  </a>)}
<<<<<<< HEAD
                {episode.audio.mp4Url && (<a;
                disabled={publishing}
              >                {publishing ? 'Publishing…' : 'Update RSS'}<section className='space-y-4'>;
          <h2 className='text-xl font-semibold'>Episode Draft</h2>;
          <div className='border rounded p-4 space-y-3'>;
            <p className='text-sm text-gray-600'>ID: {episode.id}</p>;
            <h3 className='text-lg font-bold'>{episode.title}</h3>;
            <div>;
              <h4 className='font-semibold'>Questions</h4>;
              <ol className='list-decimal list-inside space-y-1'>;
                {episode.questions?.map((q: string, idx: number) => (<li key={idx}>{q}</li>;
                {episode.questions?.map((q: string, idx: number) => (
                  <li key={idx}>{q}</li>
                ))}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold">Best Quote</h4>
              <p>{episode.bestQuote}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <h4 className="font-semibold">YouTube Description</h4>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">{episode.youtubeDescription}</pre>
              </div>
              <div>
                <h4 className="font-semibold">Spotify Description</h4>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded">{episode.spotifyDescription}</pre>
              </div>
              <div>
                <h4 className="font-semibold">Transcript</h4>
                <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded max-h-64 overflow-auto">{episode.transcript}</pre>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-purple-600 text-white rounded" onClick={handleSynthesize} disabled={synthesizing}>
                {synthesizing ? 'Synthesizing…' : 'Synthesize Audio'}
              >                {publishing ? 'Publishing…' : 'Update RSS'}
=======
                {episode.audio.mp4Url && (
                  <a;
                disabled={publishing}'
              >                {publishing ? 'Publishing…' : 'Update RSS'}
<section className='space-y-4'>
          <h2 className='text-xl font-semibold'>Episode Draft</h2>
          <div className='border rounded p-4 space-y-3'>
            <p className='text-sm text-gray-600'>ID: {episode.id}</p>
            <h3 className='text-lg font-bold'>{episode.title}</h3>
            <div>
              <h4 className='font-semibold'>Questions</h4>
              <ol className='list-decimal list-inside space-y-1'>
                {episode.questions?.map((q: string, idx: number) => (
                  <li key={idx}>{q}</li>
                ))}
              </ol>
            </div>
            <div>
<h4 className='font-semibold'>Best Quote</h4>
              <p>{episode.bestQuote}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
              <div>
                <h4 className='font-semibold'>YouTube Description</h4>
                <pre className='whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded'>

<section className='space-y-4' />
          <h2 className='text-xl font-semibold' />Episode Draft</h2>}
          <div className='border rounded p-4 space-y-3' />}
            <p className='text-sm text-gray-600' />ID: {episode.id}</p>
            <h3 className='text-lg font-bold' />{episode.titl,}
}</h3>
            <div />
              <h4 className='font-semibold' />Questions</h4>
              <ol className='list-decimal list-inside space-y-1' />
                {episode.questions?.map((q: string, idx: number) => (}
                  <li key={idx} />{q}</li>

                ),
}
              </ol>;
            </div>;
            <div />;
<h4 className='font-semibold' />Best Quote</h4>;
              <p />{episode.bestQuote}</p>;
            </div>;
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3' />;
              <div />;
                <h4 className='font-semibold' />YouTube Description</h4>;
                <pre className='whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded' />;
                  {episode.youtubeDescription}
                </pre>;
              </div>;
              <div />;
                <h4 className='font-semibold' />Spotify Description</h4>;
                <pre className='whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded' />;
                  {episode.spotifyDescription}
                </pre>;
              </div>;
              <div />;
                <h4 className='font-semibold' />Transcript</h4>;
                <pre className='whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded max-h-64 overflow-auto' />;
                  {episode.transcript}
                </pre>;
              </div>;
            </div>;
            <div className='flex gap-3' />;
              <button;
                className='px-4 py-2 bg-purple-600 text-white rounded';
                onClick={handleSynthesize}
                disabled={synthesizing}
               />;
                {synthesizing ? 'Synthesizing…' : 'Synthesize Audio'}
              </button>;
              <button;
                className='px-4 py-2 bg-gray-800 text-white rounded';
                onClick={handlePublishRss}
                disabled={publishing}

               />
                {publishing ? 'Publishing…' : 'Update RSS'}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </button>
            </div>
<<<<<<< HEAD
            {episode.audio && (
<<<<<<< HEAD
<div className='flex gap-3'>
                {episode.audio.mp3Url && (
                  <a
              >;
                {publishing ? 'Publishing…' : 'Update RSS'}</button>;
            </div>;
            {episode.audio && (<div className='flex gap-3'>;
                {episode.audio.mp3Url && (<a;
                    href={episode.audio.mp3Url}
                    className='text-blue-600 underline';
                  >;
=======
<<<<<<< HEAD
<div className='flex gap-3'>
=======
            {episode.audio && ('
              <div className='flex gap-3'>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                {episode.audio.mp3Url && (
                  <a;
                    href={episode.audio.mp3Url}'
                    className='text-blue-600 underline'
                  >
                    Download MP3;
                  </a>
                )}
                {episode.audio.wavUrl && (
                  <a;
                    href={episode.audio.wavUrl}'
                    className='text-blue-600 underline'
                  >
                    Download WAV;
                  </a>
                )}
                {episode.audio.mp4Url && (
                  <a;
                    href={episode.audio.mp4Url}'
                    className='text-blue-600 underline'
                  >
<<<<<<< HEAD
                    Download MP4
                  </a>
                )}
              </div>
=======
                    Download MP4;
                  </a>"
                )}              </div>              <div className="flex gap-3">"
                {episode.audio.mp3Url && <a href={episode.audio.mp3Url} className="text-blue-600 underline">Download MP3</a>}"
                {episode.audio.wavUrl && <a href={episode.audio.wavUrl} className="text-blue-600 underline">Download WAV</a>}"
                {episode.audio.mp4Url && <a href={episode.audio.mp4Url} className="text-blue-600 underline">Download MP4</a>}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<div className='flex gap-3' />
                {episode.audio.mp3Url && (}
                  <a;}
href={episode.audio.mp3Url}
                    className='text-blue-600 underline' />

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    Download MP3;
                  </a>;
                )}
                {episode.audio.wavUrl && (<a;
                    href={episode.audio.wavUrl}
                    className='text-blue-600 underline';
                  >;
                    Download WAV;
                  </a>;
                )}
                {episode.audio.mp4Url && (<a;
                    href={episode.audio.mp4Url}
                    className='text-blue-600 underline';
                  >;
                    Download MP4;
                  </a>;
                )}
              </div>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            )}
          </div>;
        </section>;
      )}
    </div>;
  )}{episode.audio && ({publishing ? 'Publishing…' : 'Update RSS'}
              </button>;
            </div>;


;

            {episode.audio && (

              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded" onClick={handlePublishRss} disabled={publishing}>
                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
            {episode.audio && (
            {episode.audio && (
              <div className="flex gap-3">
                {episode.audio.mp3Url && <a href={episode.audio.mp3Url} className="text-blue-600 underline">Download MP3</a>}
                {episode.audio.wavUrl && <a href={episode.audio.wavUrl} className="text-blue-600 underline">Download WAV</a>}
                {episode.audio.mp4Url && <a href={episode.audio.mp4Url} className="text-blue-600 underline">Download MP4</a>}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}