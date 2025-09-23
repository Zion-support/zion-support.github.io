"use client";
import React, { useState } from 'react';

type PersonaConfig = {
  voice: string;
  language: string;
};

type Episode = {
  id: string;
  title: string;
  questions: string[];
  bestQuote: string;
  youtubeDescription: string;
  spotifyDescription: string;
  transcript: string;
  audio?: {
    mp3Url?: string;
    wavUrl?: string;
    mp4Url?: string;
  };
};

export default function StudioHostPage() {
  const [persona, setPersona] = useState<PersonaConfig>({ 
    voice: 'Visionary', 
    language: 'English' 
  });
  const [inviteeName, setInviteeName] = useState('');
  const [inviteeBio, setInviteeBio] = useState('');
  const [topic, setTopic] = useState('');
  const [operatorPrompt, setOperatorPrompt] = useState(
    'Generate a 15-minute podcast script interviewing the founder of a global decentralized talent protocol called Zion. Include visionary and technical questions, plus a CTA.'
  );
  const [generating, setGenerating] = useState(false);
  const [episode, setEpisode] = useState<Episode | null>(null);
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
      setGenerating(false);
    }
  };

  const handleSynthesize = async () => {
    if (!episode) return;
    setSynthesizing(true);
    try {
      const res = await fetch('/api/podcast/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ episodeId: episode.id }),
      });
      const data = await res.json();
      setEpisode({ ...episode, audio: data.audio });
    } catch (e) {
      console.error(e);
      alert('Failed to synthesize audio');
    } finally {
      setSynthesizing(false);
    }
  };

  const handlePublish = async () => {
    if (!episode) return;
    setPublishing(true);
    try {
      const res = await fetch('/api/podcast/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ episodeId: episode.id }),
      });
<<<<<<< HEAD
      await res.json();
=======
      const data = await res.json();
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
      alert('Episode published successfully!');
    } catch (e) {
      console.error(e);
      alert('Failed to publish episode');
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Podcast Studio Host</h1>
      
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Configuration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
<<<<<<< HEAD
            <label className="block text-sm font-medium mb-2">Host Persona</label>
            <select
=======
            <label className="block text-sm font-medium" htmlFor="voice">
              Voice
            </label>
            <select
              id="voice"
              className="mt-1 w-full border rounded p-2"
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
              value={persona.voice}
              onChange={(e) => setPersona({ ...persona, voice: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="Visionary">Visionary</option>
              <option value="Technical">Technical</option>
<<<<<<< HEAD
              <option value="Casual">Casual</option>
=======
              <option value="Conversational">Conversational</option>
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
            </select>
          </div>
          
          <div>
<<<<<<< HEAD
            <label className="block text-sm font-medium mb-2">Language</label>
            <select
=======
            <label className="block text-sm font-medium" htmlFor="language">
              Language
            </label>
            <select
              id="language"
              className="mt-1 w-full border rounded p-2"
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
              value={persona.language}
              onChange={(e) => setPersona({ ...persona, language: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
<<<<<<< HEAD
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Invitee Name</label>
          <input
            type="text"
            value={inviteeName}
            onChange={(e) => setInviteeName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter guest name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Invitee Bio</label>
          <textarea
            value={inviteeBio}
            onChange={(e) => setInviteeBio(e.target.value)}
            className="w-full p-2 border rounded h-20"
            placeholder="Enter guest bio"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter podcast topic"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Operator Prompt</label>
          <textarea
            value={operatorPrompt}
            onChange={(e) => setOperatorPrompt(e.target.value)}
            className="w-full p-2 border rounded h-24"
            placeholder="Enter custom prompt"
          />
        </div>

        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded" 
          onClick={handleGenerate} 
          disabled={generating}
        >
          {generating ? 'Generating...' : 'Generate Episode'}
=======
          <div>
            <label className="block text-sm font-medium" htmlFor="inviteeName">
              Invitee Name
            </label>
            <input
              id="inviteeName"
              type="text"
              className="mt-1 w-full border rounded p-2"
              value={inviteeName}
              onChange={(e) => setInviteeName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="topic">
              Topic
            </label>
            <input
              id="topic"
              type="text"
              className="mt-1 w-full border rounded p-2"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <label className="block text-sm font-medium" htmlFor="operatorPrompt">
            Operator Prompt
          </label>
          <textarea
            id="operatorPrompt"
            className="mt-1 w-full border rounded p-2"
            rows={3}
            value={operatorPrompt}
            onChange={(e) => setOperatorPrompt(e.target.value)}
          />
        </div>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={handleGenerate}
          disabled={generating}
        >
          {generating ? 'Generating…' : 'Generate Episode'}
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
        </button>
      </section>

      {episode && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Episode Draft</h2>
          <div className="border rounded p-4 space-y-3">
            <p className="text-sm text-gray-600">ID: {episode.id}</p>
            <h3 className="text-lg font-bold">{episode.title}</h3>
            <div>
              <h4 className="font-semibold">Questions</h4>
              <ol className="list-decimal list-inside space-y-2">
                {episode.questions?.map((q: string, idx: number) => (
                  <li key={idx}>{q}</li>
                ))}
              </ol>
            </div>
<<<<<<< HEAD

=======
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
            <div>
              <h4 className="font-semibold">Best Quote</h4>
              <p>{episode.bestQuote}</p>
            </div>
<<<<<<< HEAD

=======
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
            <div>
              <h4 className="font-semibold">YouTube Description</h4>
              <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-2 rounded">
                {episode.youtubeDescription}
              </pre>
            </div>
<<<<<<< HEAD

=======
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
            <div>
              <h4 className="font-semibold">Spotify Description</h4>
              <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-2 rounded">
                {episode.spotifyDescription}
              </pre>
            </div>
<<<<<<< HEAD

=======
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
            <div>
              <h4 className="font-semibold">Transcript</h4>
              <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-2 rounded">
                {episode.transcript}
              </pre>
            </div>
<<<<<<< HEAD

            <div className="flex space-x-4">
=======
            <div className="flex gap-2">
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
              <button
                className="px-4 py-2 bg-purple-600 text-white rounded"
                onClick={handleSynthesize}
                disabled={synthesizing}
              >
                {synthesizing ? 'Synthesizing...' : 'Synthesize Audio'}
              </button>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded"
                onClick={handlePublish}
                disabled={publishing}
              >
                {publishing ? 'Publishing...' : 'Update RSS'}
              </button>
            </div>
<<<<<<< HEAD

            {episode.audio && (
              <div className="space-y-2">
                <h4 className="font-semibold">Audio Files</h4>
                <div className="flex space-x-4">
                  {episode.audio.mp3Url && (
                    <a
                      href={episode.audio.mp3Url}
                      download
                      className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                      Download MP3
                    </a>
                  )}
                  {episode.audio.wavUrl && (
                    <a
                      href={episode.audio.wavUrl}
                      download
                      className="px-4 py-2 bg-green-600 text-white rounded"
                    >
                      Download WAV
                    </a>
                  )}
                  {episode.audio.mp4Url && (
                    <a
                      href={episode.audio.mp4Url}
                      download
                      className="px-4 py-2 bg-red-600 text-white rounded"
                    >
                      Download MP4
                    </a>
                  )}
                </div>
=======
            {episode.audio && (
              <div className="space-y-2">
                <h4 className="font-semibold">Audio Files</h4>
                {episode.audio.mp3Url && (
                  <a
                    href={episode.audio.mp3Url}
                    className="text-blue-600 underline block"
                  >
                    Download MP3
                  </a>
                )}
                {episode.audio.wavUrl && (
                  <a
                    href={episode.audio.wavUrl}
                    className="text-blue-600 underline block"
                  >
                    Download WAV
                  </a>
                )}
                {episode.audio.mp4Url && (
                  <a
                    href={episode.audio.mp4Url}
                    className="text-blue-600 underline block"
                  >
                    Download MP4
                  </a>
                )}
>>>>>>> f8c5ea439523d2ce0733666810df367abf9ff500
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}