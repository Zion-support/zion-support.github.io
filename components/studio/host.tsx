
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
<<<<<<< HEAD
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


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  });
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeBio, setInviteeBio] = useState('');
  const [topic, setTopic] = useState('');
<<<<<<< HEAD
<<<<<<< HEAD
  const [operatorPrompt, setOperatorPrompt] = useState(
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.'
  );}
export default function StudioHostPage() {
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' })
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),;
=======
=======
  const [operatorPrompt, setOperatorPrompt] = useState(;
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.';
  );};
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

export default function StudioHostPage() {;
  const [persona, setPersona] = useState<PersonaConfig>({ voice: 'Visionary', language: 'English' }),;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeBio, setInviteeBio] = useState('');
  const [topic, setTopic] = useState('');
  const [operatorPrompt, setOperatorPrompt] = useState('Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.');
  const [generating, setGenerating] = useState(false);
  const [episode, setEpisode] = useState<any>(null);
  const [synthesizing, setSynthesizing] = useState(false);
  const [publishing, setPublishing] = useState(false);
    } catch (e) {
      console.error (e);
      alert ('Failed to generate episode');
    } finally {
      set_generating (false);
    }

      });
      const data = await res && res.json();
      setEpisode(data && data.episode);
    } catch (e) {;
      console && console.error(e);
      alert('Failed to generate episode');
    } finally {;
      setGenerating(false);    }      const data = await res && res.json();
      setEpisode(data && data.episode);
    } catch (e) {;
      console && console.error(e);
      alert('Failed to generate episode');
    } finally {;
      setGenerating(false);
    } catch (e) {
      console.error (e);
      alert ('Failed to synthesize audio');
    } finally {
      set_synthesizing (false);
    }
  };

  const handleSynthesize = async () => {;
    if (!episode?.id) return;
    setSynthesizing(true);
    try {;
      const res = await fetch('/api/podcast/synthesize', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ episodeId: episode && episode.id, persona }),;
      });
      const data = await res && res.json();
      setEpisode(data && data.episode);
    } catch (e) {;
      console && console.error(e);
      alert('Failed to synthesize audio');
    } finally {;
      setSynthesizing(false);    }      const data = await res && res.json();
      setEpisode(data && data.episode);
    } catch (e) {;
      console && console.error(e);
      alert('Failed to synthesize audio');
    } finally {;
      setSynthesizing(false);
    }
    if (!episode?.id) return;
    setPublishing(true);
    try {;
      const res = await fetch('/api/podcast/rss', { method: 'POST' });
      await res && res.json();
      alert('RSS feed updated. Platforms will pull on next refresh.');
    } catch (e) {;
      console && console.error(e);
      alert('Failed to update RSS');
    } finally {;
      setPublishing(false);    }
  }
  return (
    <div className='space-y-8'>;
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>      await res && res.json();
      alert('RSS feed updated. Platforms will pull on next refresh.');
    } catch (e) {;
      console && console.error(e);
      alert('Failed to update RSS');
    } finally {;
      setPublishing(false);
    } catch (e) {
      console.error (e);
      alert ('Failed to update RSS');
    } finally {
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
  return (
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
              }
            />;
          </div>;
          <div>;
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

          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Episode Generator</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
                ))}
                {synthesizing ? 'Synthesizing…' : 'Synthesize Audio'}
              </button>;
              <button className="px - 4 py - 2 bg - gray - 800 text - white rounded" on_click={handlePublishRss} disabled={publishing}>;
                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>;
            </div>;
            {episode.audio && (
            )}
          </div>;
        </section>;
      )}
    </div>;
  );
              <div className='flex gap - 3'>;
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
                disabled={publishing}
              >                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
<<<<<<< HEAD
            {episode.audio && (
              <div className='flex gap-3'>
                {episode.audio.mp3Url && (
                  <a
                    href={episode.audio.mp3Url}
                    className='text-blue-600 underline'
                  >
                    Download MP3
                  </a>
                )}
                {episode.audio.wavUrl && (
                  <a
                    href={episode.audio.wavUrl}
                    className='text-blue-600 underline'
                  >
                    Download WAV
                  </a>
                )}
                {episode.audio.mp4Url && (
                  <a
                    href={episode.audio.mp4Url}
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
            {episode.audio && (
              <div className='flex gap-3'>
                {episode.audio.mp3Url && (
                  <a
                    href={episode.audio.mp3Url}
                    className='text-blue-600 underline'
                  >
                    Download MP3
                  </a>
                )}
                {episode.audio.wavUrl && (
                  <a
                    href={episode.audio.wavUrl}
                    className='text-blue-600 underline'
                  >
                    Download WAV
                  </a>
                )}
                {episode.audio.mp4Url && (
                  <a
                    href={episode.audio.mp4Url}
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
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
            {episode.audio && (

                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
            {episode.audio && (
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
