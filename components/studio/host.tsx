import React, { useState } from 'react';

type PersonaConfig = {
  voice: 'Visionary' | 'Grounded' | 'Technical';
  language: string;
  cloneStyleText?: string;

};

export default function StudioHostPage() {
  const [persona, setPersona] = useState<PersonaConfig>({
    voice: 'Visionary',
    language: 'English',
  });
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeBio, setInviteeBio] = useState('');
  const [topic, setTopic] = useState('');
  const [operatorPrompt, setOperatorPrompt] = useState(
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.'
  );

  const [generating, setGenerating] = useState(false);
  const [episode, setEpisode] = useState<any>(null);
  const [synthesizing, setSynthesizing] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch('/api/podcast/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          persona,
          invitee: { name: inviteeName, bio: inviteeBio },
          topic,
          operatorPrompt,
        }),
      });

      const data = await res.json();
      setEpisode(data.episode);
    } catch (e) {
      console.error(e);
      alert('Failed to generate episode');
    } finally {
      setGenerating(false);    }

    }

  };

  const handleSynthesize = async () => {
    if (!episode?.id) return;
    setSynthesizing(true);
    try {
      const res = await fetch('/api/podcast/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ episodeId: episode.id, persona }),
      });

      const data = await res.json();
      setEpisode(data.episode);
    } catch (e) {
      console.error(e);
      alert('Failed to synthesize audio');
    } finally {
      setSynthesizing(false);    }

    }

  };

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
  };

  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-bold'>Podcast Studio Host</h1>

    }
  };

  return (

          </div>
        </div>
      </section>

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
              <ol className='list-decimal list-inside space-y-1'>                {episode.questions?.map((q: string, idx: number) => (

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
                  {episode.youtubeDescription}
                </pre>
              </div>
              <div>
                <h4 className='font-semibold'>Spotify Description</h4>
                <pre className='whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded'>
                  {episode.spotifyDescription}
                </pre>
              </div>
              <div>
                <h4 className='font-semibold'>Transcript</h4>
                <pre className='whitespace-pre-wrap text-sm bg-gray-50 p-3 rounded max-h-64 overflow-auto'>
                  {episode.transcript}
                </pre>
              </div>
            </div>
            <div className='flex gap-3'>
              <button
                className='px-4 py-2 bg-purple-600 text-white rounded'
                onClick={handleSynthesize}
                disabled={synthesizing}
              >
                {synthesizing ? 'Synthesizing…' : 'Synthesize Audio'}
              </button>
              <button
                className='px-4 py-2 bg-gray-800 text-white rounded'
                onClick={handlePublishRss}
                disabled={publishing}
              >                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
            {episode.audio && (

                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
            {episode.audio && (