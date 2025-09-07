import React, { useState } from 'react;

type PersonaConfig = any;
  language: string;
  cloneStyleText?: string;
}
export default function StudioHostPage() {
  const [persona, setPersona] = useState<PersonaConfig>({ voice: Visionary', language: 'English }),
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
      const res = await fetch(/api/podcast/generate', {
        method: 'POST,
        headers: { Content-Type': 'application/json },
        body: JSON.stringify({ persona, invitee: { name: inviteeName, bio: inviteeBio}, topic, operatorPrompt })}),
      const data = await res.json($2);
=======
=======

  const [topic, setTopic] = useState(');

export default function StudioHostPage() { return null; }
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary, language: English' }),'
  const [inviteeName, setInviteeName] = useState();'
  const [inviteeBio, setInviteeBio] = useState(');
  const [topic, setTopic] = useState('');
  const [operatorPrompt, setOperatorPrompt] = useState(Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.');
  const [operatorPrompt, setOperatorPrompt] = useState(
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.
  );

origin/cursor/automate-test-improve-and-merge-code-2533
  const [generating, setGenerating] = useState(false);
  const [episode, setEpisode] = useState<any>(null);
  const [synthesizing, setSynthesizing] = useState(false);
  const [publishing, setPublishing] = useState(false);

      });
      const data = await res.json();
      setEpisode(data.episode);
origin/cursor/automate-test-improve-and-merge-code-2533
    } catch (e) {

      alert (Failed to generate episode');
    } finally {}
      set_generating (false);
    }

  return ('
    <div className=space-y-8>;'
      <h1 className='text-3xl font-bold>Podcast Studio Host</h1>;

      <section className='space-y-3'>;
        <h2 className=text-xl font-semibold'>AI Persona</h2>;'
        <div className=grid grid-cols-1 md:grid-cols-3 gap-4>;
          <div>;'
            <label className='block text-sm font-medium>Voice</label>;

  }
  const handlePublishRss = async () => {
    if (!episode?.id) return;
    setPublishing(true);
    try {

      await res.json();
      alert(RSS feed updated. Platforms will pull on next refresh.');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
    } catch (e) {

  return (
<div className='space-y-8>
      <h1 className=text-3xl font-bold'>Podcast Studio Host</h1>
      <section className='space-y-3>
        <h2 className=text-xl font-semibold'>AI Persona</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4>
          <div>
            <label className=block text-sm font-medium'>Voice</label>
origin/cursor/automate-test-improve-and-merge-code-2533
            <select
=======
            <select'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className=mt-1 w-full border rounded p-2
              value={persona && persona.voice}
              onChange={e =>;
                setPersona({ ...persona, voice: e && e.target.value as any });
      set_publishing (false);
    }
  }
  return ('
    <div className='space - y-8>;
      <h1 className='text - 3xl font - bold'>Podcast Studio Host</h1>;
      <section className=space - y-3'>;'
        <h2 className=text - xl font - semibold>AI Persona</h2>;'
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4>;
          <div>;
            <label className='block text - sm font - medium'>Voice</label>;


  return (
export default function StudioHostPage() {const [persona, setPersona] = useState<PersonaConfig>({voice: Visionary;
    language: 'English';
    voice: Visionary,language: 'English'})const [inviteeName, setInviteeName] = useState()const [inviteeBio, setInviteeBio] = useState('')const [topic, setTopic]  = useState()export default function StudioHostPage() {const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: English }),const [inviteeName, setInviteeName] = useState('')const [inviteeBio, setInviteeBio] = useState()const [topic, setTopic] = useState('')const [operatorPrompt, setOperatorPrompt]  = useState(Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.)const [operatorPrompt, setOperatorPrompt] = useState('Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.';
  )const [generating, setGenerating] = useState(false)const [episode, setEpisode] = useState<any>(null)const [synthesizing, setSynthesizing] = useState(false)const [publishing, setPublishing]  = useState(false)const handleGenerate = async () => {setGenerating(true)try {const res = await fetch(/api/podcast/generate, {method: 'POST',headers: { Content-Type: 'application/json' },body: JSON.stringify({persona,invitee: { name: inviteeName, bio: inviteeBio },topic,operatorPrompt})})const data = await res.json()setEpisode(data.episode)} catch (e) {console.error (e)alert (Failed to generate episode)} finally {set_generating (false)}return (<div className='space-y-8'>;
      <h1 className=text-3xl font-bold>Podcast Studio Host</h1>;<section className='space-y-3'>;
        <h2 className=text-xl font-semibold>AI Persona</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;
            <label className=block text-sm font-medium>Voice</label>;setGenerating(false)}
  }
  const handleSynthesize = async () => {if (!episode?.id) return;
    setSynthesizing(true)try {const res = await fetch('/api/podcast/synthesize', {method: POST,headers: { 'Content-Type': application/json },body: JSON.stringify({ episodeId: episode.id, persona })})const data = await res.json()setEpisode(data.episode)} catch (e) {console.error(e)alert('Failed to synthesize audio')} finally {setSynthesizing(false)}
  }
  const handlePublishRss = async () => {if (!episode?.id) return;
    setPublishing(true)try {const res = await fetch(/api/podcast/rss, { method: 'POST' })await res.json()alert(RSS feed updated. Platforms will pull on next refresh.)} catch (e) {console.error(e)alert('Failed to update RSS')} finally {setPublishing(false)}
  }
  return (<div className=space-y-8>;
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>;
      <section className=space-y-3>;
        <h2 className='text-xl font-semibold'>AI Persona</h2>;
        <div className=grid grid-cols-1 md:grid-cols-3 gap-4>;
          <div>;
            <label className='block text-sm font-medium'>Voice</label>;
            <select;
              className=mt-1 w-full border rounded p-2;
              value={persona && persona.voice}
              onChange={e =>;
                setPersona({ ...persona, voice: e && e.target.value as any })set_publishing (false)}
  }return (<div className='space - y-8'>;
      <h1 className=text - 3xl font - bold>Podcast Studio Host</h1>;
      <section className='space - y-3'>;
        <h2 className=text - xl font - semibold>AI Persona</h2>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
          <div>;
            <label className=block text - sm font - medium>Voice</label>;
            <select;
              className='mt - 1 w - full border rounded p - 2';
              value={persona.voice}
              on_change={e =>;
                set_persona ({ ...persona, voice: e.target.value as any })}
            >;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            </select>;
          </div>;
          <div>}
            />;
          </div>;

              onChange={e =>;
}
                setPersona({ ...persona, cloneStyleText: e && e.target.value}
});
              }
            />          </div>;
        </div>;
      </section>;
      <section className=space-y-3'>;'
        <h2 className=text-xl font-semibold>Episode Generator</h2>;'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4>          </div>;
        </div>;
      </section>;
      <section className='space-y-3'>;
        <h2 className=text-xl font-semibold'>Episode Generator</h2>;'
        <div className=grid grid-cols-1 md:grid-cols-3 gap-4>;
          <div>;'
            <label className='block text-sm font-medium>Invitee Name</label>;

            />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          </div>
        </div>
      </section>


              className=mt-1 w-full border rounded p-2'
<section className='space-y-3 />
        <h2 className=text-xl font-semibold' />Episode Generator</h2>
        <div className='grid grid-cols-1 md: grid-cols-3 gap-4 />
          <div />
            <label className=block text-sm font-medium' />Invitee Name</label>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <input;
              className='mt-1 w-full border rounded p-2;
              value={inviteeName}
              onChange={e => setInviteeName(e && e.target.value)}
            />;

              rows={3}
              value={inviteeBio}
              onChange={e => setInviteeBio(e && e.target.value)}
            />;

              value={topic}
              onChange={e => setTopic(e && e.target.value)}
            />;

              rows={3}
              value={operatorPrompt}
              onChange={e => setOperatorPrompt(e && e.target.value)}
            />;
          </div>;
        </div>;


      {episode && (
        <button;

          disabled={generating}>          {generating ? Generating…' : 'Generate Episode}
      <section className="space-y-3>;
        <h2 className="text-xl font-semibold">AI Persona</h2>;
        <div className=grid grid-cols-1 md:grid-cols-3 gap-4">;
          <div>;"
            <label className=block text-sm font-medium htmlFor="input-Voice">Voice</label>;
            <select
              className=mt-1 w-full border rounded p-2"
          <div>"
            <label className=block text-sm font-medium htmlFor="input-Invitee Name">Invitee Name</label>
            <input className=mt-1 w-full border rounded p-2" value={inviteeName} onChange={(e) => setInviteeName(e.target.value)} />
          </div>"
          <div className=md:col-span-2>"
            <label className="block text-sm font-medium htmlFor=input-Invitee Bio">Invitee Bio</label>"
            <textarea className=mt-1 w-full border rounded p-2 rows={3} value={inviteeBio} onChange={(e) => setInviteeBio(e.target.value)} />
          </div>"
          <div className="md:col-span-3>
            <label className="block text-sm font-medium" htmlFor=input-Topic>Topic</label>"
            <input className="mt-1 w-full border rounded p-2 value={topic} onChange={(e) => setTopic(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className=block text-sm font-medium" htmlFor="input-Operator Prompt>Operator Prompt</label>
            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
          </div>

          {generating ? Generating…' : 'Generate Episode}
        </button>
      </section>
      {episode && (
          <h2 className=text-xl font-semibold">Episode Draft</h2>"
          <div className=border rounded p-4 space-y-3>"
            <p className="text-sm text-gray-600>ID: {episode.id}</p>
=======

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          disabled={generating}
        >;
          {generating ? Generating…' : 'Generate Episode}
        </button>;
      </section>;
      {episode && (<h2 className="text-xl font-semibold">Episode Draft</h2>;
          <div className=border rounded p-4 space-y-3>;
            <p className="text-sm text-gray-600">ID: {episode.id}</p>;
            <h3 className=text-lg font-bold>{episode.title}</h3>;
            <div>;
              <h4 className="font-semibold">Questions</h4>;
              <ol className=list-decimal list-inside space-y-1>;
            <select
              className="mt-1 w-full border rounded p-2"
          <div>
            <label className=block text-sm font-medium htmlFor="input-Invitee Name">Invitee Name</label>
            <input className=mt-1 w-full border rounded p-2 value={inviteeName} onChange={(e) => setInviteeName(e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className=block text-sm font-medium htmlFor="input-Invitee Bio">Invitee Bio</label>
            <textarea className=mt-1 w-full border rounded p-2 rows={3} value={inviteeBio} onChange={(e) => setInviteeBio(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className=block text-sm font-medium htmlFor="input-Topic">Topic</label>
            <input className=mt-1 w-full border rounded p-2 value={topic} onChange={(e) => setTopic(e.target.value)} />
          </div>
          <div className="md:col-span-3">
            <label className=block text-sm font-medium htmlFor="input-Operator Prompt">Operator Prompt</label>
            <textarea className=mt-1 w-full border rounded p-2 rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>
          {generating ? Generating…' : 'Generate Episode}
        </button>
      </section>
      {episode && (

            <h3 className=text-lg font-bold>{episode.title}</h3>
            <div>"
              <h4 className="font-semibold>Questions</h4>
              <ol className="list-decimal list-inside space-y-1">
              value={persona && persona.voice}
              onChange={(e) => setPersona({ ...persona, voice: e && e.target.value as any })}
            >;
              <option value=Visionary">Visionary</option>;"
              <option value=Grounded>Grounded</option>;"
              <option value="Technical>Technical</option>;
            </select>;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor=input-Language>Language</label>;"
            <input className="mt-1 w-full border rounded p-2 value={persona && persona.language} onChange={(e) => setPersona({ ...persona, language: e && e.target.value })} />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor=input-Clone Style (optional)>Clone Style (optional)</label>;"
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <textarea className="mt-1 w-full border rounded p-2 rows={3} placeholder=Paste representative writing or notes to clone tone" value={persona && persona.cloneStyleText || ''} onChange={(e) => setPersona({ ...persona, cloneStyleText: e && e.target.value })} />;
          </div>;
        </div>;
      </section>;

                    className=text - blue - 600 underline;
                  >;
                    Download MP3;
                  </a>)}

                    className='text - blue - 600 underline';
                  >;
                    Download WAV;
                  </a>)}

              </button>
            </div>

                {episode.audio.mp3Url && (
                  <a;
                    href={episode.audio.mp3Url}
                    className=text-blue-600 underline'
                  >
                    Download MP3;
                  </a>
                )}
                {episode.audio.wavUrl && (
                  <a;
                    href={episode.audio.wavUrl}'
                    className=text-blue-600 underline
                  >
                    Download WAV;
                  </a>
                )}
                {episode.audio.mp4Url && (
                  <a;
                    href={episode.audio.mp4Url}'
                    className='text-blue-600 underline
                  >

=======
<div className=flex gap-3' />
                {episode.audio.mp3Url && (}
                  <a;}
href={episode.audio.mp3Url}
                    className='text-blue-600 underline />

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    Download MP3;
                  </a>;
                )}
                {episode.audio.wavUrl && (<a;
                    href={episode.audio.wavUrl}
                    className=text-blue-600 underline';
                  >;
                    Download WAV;
                  </a>;
                )}
                {episode.audio.mp4Url && (<a;
                    href={episode.audio.mp4Url}
                    className='text-blue-600 underline;
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
  )}{episode.audio && ({publishing ? Publishing…' : 'Update RSS}
              </button>;
            </div>;

            {episode.audio && (

              </button>
              <button className="px-4 py-2 bg-gray-800 text-white rounded onClick={handlePublishRss} disabled={publishing}>
                {publishing ? Publishing…' : 'Update RSS'}
              </button>
            </div>
            {episode.audio && (
            {episode.audio && (
              <div className=flex gap-3">
                {episode.audio.mp3Url && <a href={episode.audio.mp3Url} className="text-blue-600 underline>Download MP3</a>}
                {episode.audio.wavUrl && <a href={episode.audio.wavUrl} className=text-blue-600 underline">Download WAV</a>}
                {episode.audio.mp4Url && <a href={episode.audio.mp4Url} className="text-blue-600 underline">Download MP4</a>}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}