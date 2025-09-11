<<<<<<< HEAD
<<<<<<< HEAD
};
export default function StudioHostPage() {;
  const [persona, setPersona] = useState<PersonaConfig>({;
    voice: 'Visionary',;
    language: 'English',;
import React, { useState } from 'react';

type PersonaConfig = {
  voice: 'Visionary' | 'Grounded' | 'Technical';
  language: string;
  cloneStyleText?: string;
}
export default function StudioHostPage() {
  const [persona, setPersona] = useState<PersonaConfig>({


    voice: 'Visionary'
    language: 'English'
    voice: 'Visionary',
    language: 'English',;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';



<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  });
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeBio, setInviteeBio] = useState('');
  const [topic, setTopic] = useState('');


<<<<<<< HEAD
<<<<<<< HEAD

  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),;

type PersonaConfig = {
  voice: 'Visionary' | 'Grounded' | 'Technical',
  language: string,
  cloneStyleText?: string
};
export default function StudioHostPage() {
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' })
  const [operatorPrompt, setOperatorPrompt] = useState(;
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.';
  );};
export default function StudioHostPage() {;
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),;
  const [operatorPrompt, setOperatorPrompt] = useState(
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.'
  );}
export default function StudioHostPage() {
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' })
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeBio, setInviteeBio] = useState('');
  const [topic, setTopic] = useState('');
  const [operatorPrompt, setOperatorPrompt] = useState('Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.');
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [generating, setGenerating] = useState(false);
  const [episode, setEpisode] = useState<any>(null);
  const [synthesizing, setSynthesizing] = useState(false);
  const [publishing, setPublishing] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ persona, invitee: { name: inviteeName, bio: inviteeBio }, topic, operatorPrompt })});
      const data = await res.json();
      setEpisode(data.episode)
}
;
export default /**
 * StudioHostPage - Function description
 */
function StudioHostPage() {
  const [persona, set_persona] = useState < PersonaConfig>({
    voice: 'Visionary',
    language: 'English',
  });
  const [invitee_name, setInviteeName] = useState ('');
  const [invitee_bio, setInviteeBio] = useState ('');
  const [topic, set_topic] = useState ('');
  const [operator_prompt, setOperatorPrompt] = useState (
    'Generate a 15 - minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.');}
;
export default /**
 * StudioHostPage - Function description
 */
function StudioHostPage() {
  const [persona, set_persona] = useState < PersonaConfig>({ voice: 'Visionary', language: 'English' }),
  const [invitee_name, setInviteeName] = useState ('');
  const [invitee_bio, setInviteeBio] = useState ('');
  const [topic, set_topic] = useState ('');
  const [operator_prompt, setOperatorPrompt] = useState ('Generate a 15 - minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.');
;
  const [generating, set_generating] = useState (false);
  const [episode, set_episode] = useState < any>(null);
  const [synthesizing, set_synthesizing] = useState (false);
  const [publishing, set_publishing] = useState (false);
;
  const handle_generate = async () => {
    set_generating (true);
    try {
      const res = await fetch ('/api / podcast / generate', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          persona,
          invitee: { name: invitee_name, bio: invitee_bio },
          topic,
          operator_prompt,
        }),
      });
      const data = await res.json ();
      set_episode (data.episode);
    } catch (e) {
      console.error (e);
      alert ('Failed to generate episode');
    } finally {
      set_generating (false);    }      const data = await res.json ();
      set_episode (data.episode);

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    } catch (e) {
      console.error (e);
      alert ('Failed to generate episode');
    } finally {
      set_generating (false);
    }

<<<<<<< HEAD
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ episodeId: episode.id, persona })});
      const data = await res.json();
      setEpisode(data.episode)
  }
;
  const handle_synthesize = async () => {
    // Check condition
if (return) {
  $2
}
    set_synthesizing (true);
    try {
      const res = await fetch ('/api / podcast / synthesize', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ episode_id: episode.id, persona }),
      });
      const data = await res.json ();
      set_episode (data.episode);
    } catch (e) {
      console.error (e);
      alert ('Failed to synthesize audio');
    } finally {
      set_synthesizing (false);    }      const data = await res.json ();
      set_episode (data.episode);
    } catch (e) {
      console.error (e);
      alert ('Failed to synthesize audio');
    } finally {
      set_synthesizing (false);
    }
  };
  const handlePublishRss = async () => {;
    if (!episode?.id) return;
    setPublishing(true);
    try {
      const res = await fetch('/api/podcast/rss', { method: 'POST' }),
      await res.json();
      alert('RSS feed updated. Platforms will pull on next refresh.')
  }
;
  const handlePublishRss = async () => {
    // Check condition
if (return) {
  $2
}
    set_publishing (true);
    try {
      const res = await fetch ('/api / podcast / rss', { method: 'POST' });
      await res.json ();
      alert ('RSS feed updated. Platforms will pull on next refresh.');
    } catch (e) {
      console.error (e);
      alert ('Failed to update RSS');
    } finally {
      set_publishing (false);    }
  }
;
  return (
    <div className='space - y-8'>;
      <h1 className='text - 3xl font - bold'>Podcast Studio Host</h1>      await res.json ();
      alert ('RSS feed updated. Platforms will pull on next refresh.');
    } catch (e) {
      console.error (e);
      alert ('Failed to update RSS');
    } finally {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }

    }

  };

  const handlePublishRss = async () => {;

    if (!episode?.id) return;
    setPublishing(true);


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className='space-y-8'>;
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>;
      <section className='space-y-3'>;
        <h2 className='text-xl font-semibold'>AI Persona</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>Voice</label>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <select
              className='mt-1 w-full border rounded p-2'
              value={persona && persona.voice}
              onChange={e =>;
                setPersona({ ...persona, voice: e && e.target.value as any });
      set_publishing (false);
    }
  }
;
  return (
    <div className='space - y-8'>;
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
                set_persona ({ ...persona, voice: e.target.value as any });
              }
            >;
              <option value='Visionary'>Visionary</option>;
              <option value='Grounded'>Grounded</option>;
              <option value='Technical'>Technical</option>;
            </select>;
          </div>;
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <label className='block text - sm font - medium'>Language</label>;
            <input;
              className='mt - 1 w - full border rounded p - 2';
              value={persona.language}
              on_change={e =>;
                set_persona ({ ...persona, language: e.target.value });
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              }
            />;
          </div>;
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Podcast Studio Host</h1>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">AI Persona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div>
            <label className='block text-sm font-medium'>Invitee Name</label>
              value={persona && persona.cloneStyleText || ''}
              onChange={e =>;
                setPersona({ ...persona, cloneStyleText: e && e.target.value });
              }
            />          </div>;
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
            <label className='block text-sm font-medium'>Invitee Name</label>;
            <input
              className='mt-1 w-full border rounded p-2'
              value={inviteeName}
              onChange={e => setInviteeName(e && e.target.value)}
            />;
          </div>;
          <div className='md:col-span-2'>;
            <label className='block text-sm font-medium'>Invitee Bio</label>;
            <textarea
              className='mt-1 w-full border rounded p-2'
              rows={3}
              value={inviteeBio}
              onChange={e => setInviteeBio(e && e.target.value)}
            />;
          </div>;
          <div className='md:col-span-3'>;
            <label className='block text-sm font-medium'>Topic</label>;
            <input
              className='mt-1 w-full border rounded p-2'
              value={topic}
              onChange={e => setTopic(e && e.target.value)}
            />;
          </div>;
          <div className='md:col-span-3'>;
            <label className='block text-sm font-medium'>Operator Prompt</label>;
            <textarea
              className='mt-1 w-full border rounded p-2'
              rows={3}
              value={operatorPrompt}
              onChange={e => setOperatorPrompt(e && e.target.value)}
            />;
          </div>;
        </div>;
        <button
          className='px-4 py-2 bg-blue-600 text-white rounded'
          onClick={handleGenerate}
          disabled={generating}>          {generating ? 'Generating…' : 'Generate Episode'}
      <section className="space-y-3">;
        <h2 className="text-xl font-semibold">AI Persona</h2>;
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">;
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Voice">Voice</label>;
            <select
              className="mt-1 w-full border rounded p-2"
<<<<<<< HEAD

            <textarea className="mt-1 w-full border rounded p-2" rows={3} placeholder="Paste representative writing or notes to clone tone" value={persona.cloneStyleText || ''} onChange={(e) => setPersona({ ...persona, cloneStyleText: e.target.value })} />
=======
              value={persona.voice}
              onChange={(e) => setPersona({ ...persona, voice: e.target.value as any })}
            >
              <option value="Visionary">Visionary</option>
              <option value="Grounded">Grounded</option>
              <option value="Technical">Technical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Language">Language</label>
            <input className="mt-1 w-full border rounded p-2" value={persona.language} onChange={(e) => setPersona({ ...persona, language: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Clone Style (optional)">Clone Style (optional)</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={3} placeholder="Paste representative writing or notes to clone tone" value={persona.cloneStyleText |''} onChange={(e) => setPersona({ ...persona, cloneStyleText: e.target.value })} />

    }
  };

  return (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Episode Generator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<<<<<<< HEAD
<<<<<<< HEAD
            <textarea className="mt-1 w-full border rounded p-2" rows={3} placeholder="Paste representative writing or notes to clone tone" value={persona.cloneStyleText || ''} onChange={(e) => setPersona({ ...persona, cloneStyleText: e.target.value })} />
          </div>
        </div>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Episode Generator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        <section className="space-y-4">
=======

        <section className="space-y-4">

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

        <section className="space-y-4">

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <h2 className="text-xl font-semibold">Episode Draft</h2>
          <div className="border rounded p-4 space-y-3">
            <p className="text-sm text-gray-600">ID: {episode.id}</p>
            <h3 className="text-lg font-bold">{episode.title}</h3>
            <div>
              <h4 className="font-semibold">Questions</h4>
              <ol className="list-decimal list-inside space-y-1">
<<<<<<< HEAD
<<<<<<< HEAD
                {episode.questions?.map((q: string, idx: number) => (
=======

                {episode.questions?.map((q: string, idx: number) => (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

                {episode.questions?.map((q: string, idx: number) => (

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <li key={idx}>{q}</li>
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
            <textarea className="mt-1 w-full border rounded p-2" rows={3} placeholder="Paste representative writing or notes to clone tone" value={persona && persona.cloneStyleText || ''} onChange={(e) => setPersona({ ...persona, cloneStyleText: e && e.target.value })} />;
          </div>;
        </div>;
      </section>;
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
      {episode && (;
        <section className='space-y-4'>;
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

  const [generating, setGenerating] = useState(false),
  const [episode, setEpisode] = useState<any>(null),
  const [synthesizing, setSynthesizing] = useState(false),
  const [publishing, setPublishing] = useState(false),

  const handleGenerate = async () => {
    setGenerating(true),
    try {
      const res = await fetch('/api/podcast/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ persona, invitee: { name: inviteeName, bio: inviteeBio }, topic, operatorPrompt })}),
      const data = await res.json()
      setEpisode(data.episode)
    } catch (e) {
      console.error(e),
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch('/api/podcast/generate', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          persona
          invitee: { name: inviteeName, bio: inviteeBio }
          topic
          operatorPrompt
        })
      });
      const data = await res.json();
      setEpisode(data.episode);
    } catch (e) {
      console.error(e);
      alert('Failed to generate episode');
    } finally {
      setGenerating(false);    }      const data = await res.json();
      setEpisode(data.episode)
    } catch (e) {
      console.error(e);
      alert('Failed to generate episode')
    } finally {
      setGenerating(false)
    }
  }
  const handleSynthesize = async () => {
    if (!episode?.id) return;
    setSynthesizing(true);
    try {
      const res = await fetch('/api/podcast/synthesize', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ episodeId: episode.id, persona })
      });
      const data = await res.json();
      setEpisode(data.episode);
    } catch (e) {
      console.error(e);
      alert('Failed to synthesize audio');
    } finally {
      setSynthesizing(false);    }      const data = await res.json();
      setEpisode(data.episode)
    } catch (e) {
      console.error(e);
      alert('Failed to synthesize audio')
    } finally {
      setSynthesizing(false)
    }
  }
  const handlePublishRss = async () => {
    if (!episode?.id) return;
    setPublishing(true);
    try {
      const res = await fetch('/api/podcast/rss', { method: 'POST' });
      await res.json();
      alert('RSS feed updated. Platforms will pull on next refresh.');
    } catch (e) {
      console.error(e);
      alert('Failed to update RSS');
    } finally {
      setPublishing(false);    }
  }
  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>      await res.json();
      alert('RSS feed updated. Platforms will pull on next refresh.')
    } catch (e) {
      console.error(e);
      alert('Failed to update RSS')
    } finally {
      setPublishing(false)
    }
  }

  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>
      <section className='space-y-3'>
        <h2 className='text-xl font-semibold'>AI Persona</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label className='block text-sm font-medium'>Voice</label>
            <select
              className='mt-1 w-full border rounded p-2'
              value={persona.voice}
              onChange={e =>
                setPersona({ ...persona, voice: e.target.value as any })
              }
            >
              <option value='Visionary'>Visionary</option>
              <option value='Grounded'>Grounded</option>
              <option value='Technical'>Technical</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium'>Language</label>
            <input
              className='mt-1 w-full border rounded p-2'
              value={persona.language}
              onChange={e =>
                setPersona({ ...persona, language: e.target.value })
              }
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Clone Style (optional)
            </label>
            <textarea
              className='mt-1 w-full border rounded p-2'
              rows={3}
              placeholder='Paste representative writing or notes to clone tone'
              value={persona.cloneStyleText |''}
              onChange={e =>
                setPersona({ ...persona, cloneStyleText: e.target.value })
              }
            />          </div>
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-xl font-semibold'>Episode Generator</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>          </div>
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-xl font-semibold'>Episode Generator</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label className='block text-sm font-medium'>Invitee Name</label>
            <input
              className='mt-1 w-full border rounded p-2'
              value={inviteeName}
              onChange={e => setInviteeName(e.target.value)}
            />
          </div>
          <div className='md:col-span-2'>
            <label className='block text-sm font-medium'>Invitee Bio</label>
            <textarea
              className='mt-1 w-full border rounded p-2'
              rows={3}
              value={inviteeBio}
              onChange={e => setInviteeBio(e.target.value)}
            />
          </div>
          <div className='md:col-span-3'>
            <label className='block text-sm font-medium'>Topic</label>
            <input
              className='mt-1 w-full border rounded p-2'
              value={topic}
              onChange={e => setTopic(e.target.value)}
            />
          </div>
          <div className='md:col-span-3'>
            <label className='block text-sm font-medium'>Operator Prompt</label>
            <textarea
              className='mt-1 w-full border rounded p-2'
              rows={3}
              value={operatorPrompt}
              onChange={e => setOperatorPrompt(e.target.value)}
            />
          </div>
        </div>
        <button
          className='px-4 py-2 bg-blue-600 text-white rounded'
          onClick={handleGenerate}
          disabled={generating}
        >          {generating ? 'Generating…' : 'Generate Episode'}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">AI Persona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Voice">Voice</label>
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
            <label className="block text-sm font-medium" htmlFor="input-Language">Language</label>
            <input className="mt-1 w-full border rounded p-2" value={persona.language} onChange={(e) => setPersona({ ...persona, language: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="input-Clone Style (optional)">Clone Style (optional)</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={3} placeholder="Paste representative writing or notes to clone tone" value={persona.cloneStyleText |''} onChange={(e) => setPersona({ ...persona, cloneStyleText: e.target.value })} />
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    }
  };

  return (

          </div>
        </div>
      </section>
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
        <section className='space-y-4'>
          <h2 className='text-xl font-semibold'>Episode Draft</h2>
          <div className='border rounded p-4 space-y-3'>
            <p className='text-sm text-gray-600'>ID: {episode.id}</p>
            <h3 className='text-lg font-bold'>{episode.title}</h3>
            <div>
              <h4 className='font-semibold'>Questions</h4>
              <ol className='list-decimal list-inside space-y-1'>                {episode.questions?.map((q: string, idx: number) => (        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Episode Draft</h2>
          <div className="border rounded p-4 space-y-3">
            <p className="text-sm text-gray-600">ID: {episode.id}</p>
            <h3 className="text-lg font-bold">{episode.title}</h3>
            <div>
              <h4 className="font-semibold">Questions</h4>
              <ol className="list-decimal list-inside space-y-1">
                  <li key={idx}>{q}</li>

                ))}
<<<<<<< HEAD
<<<<<<< HEAD
              </ol>
            </div>
            <div>
              <h4 className="font-semibold">Best Quote</h4>
              </ol>
            </div>
            <div>
              <h4 className='font-semibold'>Best Quote</h4>
              <p>{episode.bestQuote}</p>
            </div>
                disabled={publishing}
              >                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
=======

=======
              </ol>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </div>
            {episode.audio && (              <p>{episode.bestQuote}</p>
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
            <label className='block text - sm font - medium'>;
              Clone Style (optional);
            </label>;
            <textarea;
              className='mt - 1 w - full border rounded p - 2';
              rows={3}
              placeholder='Paste representative writing or notes to clone tone';
              value={persona.cloneStyleText || ''}
              on_change={e =>;
                set_persona ({ ...persona, cloneStyleText: e.target.value });
              }
            />          </div>;
        </div>;
      </section>;
      <section className='space - y-3'>;
        <h2 className='text - xl font - semibold'>Episode Generator</h2>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>          </div>;
        </div>;
      </section>;
      <section className='space - y-3'>;
        <h2 className='text - xl font - semibold'>Episode Generator</h2>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
          <div>;
            <label className='block text - sm font - medium'>Invitee Name</label>;
            <input;
              className='mt - 1 w - full border rounded p - 2';
              value={invitee_name}
              on_change={e => setInviteeName (e.target.value)}
            />;
          </div>;
          <div className='md:col - span - 2'>;
            <label className='block text - sm font - medium'>Invitee Bio</label>;
            <textarea;
              className='mt - 1 w - full border rounded p - 2';
              rows={3}
              value={invitee_bio}
              on_change={e => setInviteeBio (e.target.value)}
            />;
          </div>;
          <div className='md:col - span - 3'>;
            <label className='block text - sm font - medium'>Topic</label>;
            <input;
              className='mt - 1 w - full border rounded p - 2';
              value={topic}
              on_change={e => set_topic (e.target.value)}
            />;
          </div>;
          <div className='md:col - span - 3'>;
            <label className='block text - sm font - medium'>Operator Prompt</label>;
            <textarea;
              className='mt - 1 w - full border rounded p - 2';
              rows={3}
              value={operator_prompt}
              on_change={e => setOperatorPrompt (e.target.value)}
            />;
          </div>;
        </div>;
        <button;
          className='px - 4 py - 2 bg - blue - 600 text - white rounded';
          on_click={handle_generate}
          disabled={generating}
        >          {generating ? 'Generating…' : 'Generate Episode'}
      <section className="space - y-3">;
        <h2 className="text - xl font - semibold">AI Persona</h2>;
        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 4">;
          <div>;
            <label className="block text - sm font - medium" html_for="input - Voice">Voice</label>;
            <select;
              className="mt - 1 w - full border rounded p - 2";
              value={persona.voice}
              on_change={(e) => set_persona ({ ...persona, voice: e.target.value as any })}
            >;
              <option value="Visionary">Visionary</option>;
              <option value="Grounded">Grounded</option>;
              <option value="Technical">Technical</option>;
            </select>;
          </div>;
          <div>;
            <label className="block text - sm font - medium" html_for="input - Language">Language</label>;
            <input className="mt - 1 w - full border rounded p - 2" value={persona.language} on_change={(e) => set_persona ({ ...persona, language: e.target.value })} />;
          </div>;
          <div>;
            <label className="block text - sm font - medium" html_for="input - Clone Style (optional)">Clone Style (optional)</label>;
            <textarea className="mt - 1 w - full border rounded p - 2" rows={3} placeholder="Paste representative writing or notes to clone tone" value={persona.cloneStyleText || ''} on_change={(e) => set_persona ({ ...persona, cloneStyleText: e.target.value })} />;
          </div>;
        </div>;
      </section>;
          <div>;
            <label className="block text - sm font - medium" html_for="input - Invitee Name">Invitee Name</label>;
            <input className="mt - 1 w - full border rounded p - 2" value={invitee_name} on_change={(e) => setInviteeName (e.target.value)} />;
          </div>;
          <div className="md:col - span - 2">;
            <label className="block text - sm font - medium" html_for="input - Invitee Bio">Invitee Bio</label>;
            <textarea className="mt - 1 w - full border rounded p - 2" rows={3} value={invitee_bio} on_change={(e) => setInviteeBio (e.target.value)} />;
          </div>;
          <div className="md:col - span - 3">;
            <label className="block text - sm font - medium" html_for="input - Topic">Topic</label>;
            <input className="mt - 1 w - full border rounded p - 2" value={topic} on_change={(e) => set_topic (e.target.value)} />;
          </div>;
          <div className="md:col - span - 3">;
            <label className="block text - sm font - medium" html_for="input - Operator Prompt">Operator Prompt</label>;
            <textarea className="mt - 1 w - full border rounded p - 2" rows={3} value={operator_prompt} on_change={(e) => setOperatorPrompt (e.target.value)} />;
          </div>;
        </div>;
        <button className="px - 4 py - 2 bg - blue - 600 text - white rounded" on_click={handle_generate} disabled={generating}>;
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>;
      </section>;
      {episode && (
        <section className='space - y-4'>;
          <h2 className='text - xl font - semibold'>Episode Draft</h2>;
          <div className='border rounded p - 4 space - y-3'>;
            <p className='text - sm text - gray - 600'>ID: {episode.id}</p>;
            <h3 className='text - lg font - bold'>{episode.title}</h3>;
            <div>;
              <h4 className='font - semibold'>Questions</h4>;
              <ol className='list - decimal list - inside space - y-1'>                {episode.questions?.map ((q: string, idx: number) => (        <section className="space - y-4">;
          <h2 className="text - xl font - semibold">Episode Draft</h2>;
          <div className="border rounded p - 4 space - y-3">;
            <p className="text - sm text - gray - 600">ID: {episode.id}</p>;
            <h3 className="text - lg font - bold">{episode.title}</h3>;
            <div>;
              <h4 className="font - semibold">Questions</h4>;
              <ol className="list - decimal list - inside space - y-1">;
                  <li key={idx}>{q}</li>))}
              </ol>;
            </div>;
            <div>;
              <h4 className='font - semibold'>Best Quote</h4>;
              <p>{episode.best_quote}</p>;
            </div>;
            <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 3'>;
              <div>;
                <h4 className='font - semibold'>YouTube Description</h4>;
                <pre className='whitespace - pre - wrap text - sm bg - gray - 50 p - 3 rounded'>;
                  {episode.youtube_description}
                </pre>;
              </div>;
              <div>;
                <h4 className='font - semibold'>Spotify Description</h4>;
                <pre className='whitespace - pre - wrap text - sm bg - gray - 50 p - 3 rounded'>;
                  {episode.spotify_description}
                </pre>;
              </div>;
              <div>;
                <h4 className='font - semibold'>Transcript</h4>;
                <pre className='whitespace - pre - wrap text - sm bg - gray - 50 p - 3 rounded max - h-64 overflow - auto'>;
                  {episode.transcript}
                </pre>;
              </div>;
            </div>;
            <div className='flex gap - 3'>;
              <button;
                className='px - 4 py - 2 bg - purple - 600 text - white rounded';
                on_click={handle_synthesize}
                disabled={synthesizing}
              >;
                {synthesizing ? 'Synthesizing…' : 'Synthesize Audio'}
<<<<<<< HEAD
                {synthesizing ? 'Synthesizing…' : 'Synthesize Audio'}
              </button>;
              <button className="px - 4 py - 2 bg - gray - 800 text - white rounded" on_click={handlePublishRss} disabled={publishing}>;
              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded" onClick={handlePublishRss} disabled={publishing}>
=======
              </button>;
              <button;
                className='px - 4 py - 2 bg - gray - 800 text - white rounded';
                on_click={handlePublishRss}
                disabled={publishing}
              >                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>;
            </div>;
            {episode.audio && (              <p>{episode.best_quote}</p>;
            </div>;
            <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 3">;
              <div>;
                <h4 className="font - semibold">YouTube Description</h4>;
                <pre className="whitespace - pre - wrap text - sm bg - gray - 50 p - 3 rounded">{episode.youtube_description}</pre>;
              </div>;
              <div>;
                <h4 className="font - semibold">Spotify Description</h4>;
                <pre className="whitespace - pre - wrap text - sm bg - gray - 50 p - 3 rounded">{episode.spotify_description}</pre>;
              </div>;
              <div>;
                <h4 className="font - semibold">Transcript</h4>;
                <pre className="whitespace - pre - wrap text - sm bg - gray - 50 p - 3 rounded max - h-64 overflow - auto">{episode.transcript}</pre>;
              </div>;
            </div>;
            <div className="flex gap - 3">;
              <button className="px - 4 py - 2 bg - purple - 600 text - white rounded" on_click={handle_synthesize} disabled={synthesizing}>;

                {synthesizing ? 'Synthesizing…' : 'Synthesize Audio'}
              </button>;
              <button className="px - 4 py - 2 bg - gray - 800 text - white rounded" on_click={handlePublishRss} disabled={publishing}>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>;
            </div>;
            {episode.audio && (
<<<<<<< HEAD
=======

}

=======
              <div className='flex gap - 3'>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
              </ol>
            </div>
              <div className='flex gap - 3'>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <div className='flex gap-3'>
                {episode.audio.mp3Url && (
                  <a;
                    href={episode.audio.mp3Url}
                    className='text - blue - 600 underline';
                  >;
                    Download MP3;
                  </a>)}
                {episode.audio.wav_url && (
                  <a;
                    href={episode.audio.wav_url}
                    className='text - blue - 600 underline';
                  >;
                    Download WAV;
                  </a>)}
                {episode.audio.mp4Url && (
                  <a;
                    href={episode.audio.mp4Url}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    className='text - blue - 600 underline';
                  >;
                    Download MP4;
                  </a>)}              </div>              <div className="flex gap - 3">;
                {episode.audio.mp3Url && <a href={episode.audio.mp3Url} className="text - blue - 600 underline">Download MP3</a>}
                {episode.audio.wav_url && <a href={episode.audio.wav_url} className="text - blue - 600 underline">Download WAV</a>}
                {episode.audio.mp4Url && <a href={episode.audio.mp4Url} className="text - blue - 600 underline">Download MP4</a>}
            )}
          </div>;
        </section>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                disabled={publishing}
              >                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
<<<<<<< HEAD

;

<<<<<<< HEAD
                    className='text-blue-600 underline'
                  >
                    Download MP4
                  </a>
                )}              </div>              <div className="flex gap-3">
                {episode.audio.mp3Url && <a href={episode.audio.mp3Url} className="text-blue-600 underline">Download MP3</a>}
                {episode.audio.wavUrl && <a href={episode.audio.wavUrl} className="text-blue-600 underline">Download WAV</a>}
                {episode.audio.mp4Url && <a href={episode.audio.mp4Url} className="text-blue-600 underline">Download MP4</a>}
            )}
          </div>
        </section>
      )}
    </div>
  );
}
;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

;

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            {episode.audio && (

                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
            {episode.audio && (

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
