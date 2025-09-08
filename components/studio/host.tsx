
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


const [topic, setTopic] = useState('');




  const [generating, setGenerating] = useState(false);
  const [episode, setEpisode] = useState<any>(null);
  const [synthesizing, setSynthesizing] = useState(false);
  const [publishing, setPublishing] = useState(false);


    try {
      const res = await fetch('/api/podcast/synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

      <section className='space-y-3'>;
        <h2 className='text-xl font-semibold'>AI Persona</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>Voice</label>;

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


            </select>;
          </div>;

          <div>;

    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Podcast Studio Host</h1>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">AI Persona</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div>;'




            />



        </div>;

            <textarea className="mt-1 w-full border rounded p-2" rows={3} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
          </div>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleGenerate} disabled={generating}>
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>
      </section>
        <button'
          className='px-4 py-2 bg-blue-600 text-white rounded'
          onClick={handleGenerate}'
          <div className="md:col-span-3">
            <label className=block text-sm font-medium" htmlFor="input-Operator Prompt>Operator Prompt</label>


          disabled={generating}
        >
origin/cursor/automate-test-improve-and-merge-code-2533
          {generating ? 'Generating…' : 'Generate Episode'}
        </button>
      </section>
      {episode && ("
          <h2 className="text-xl font-semibold">Episode Draft</h2>"
          <div className="border rounded p-4 space-y-3">"
            <p className="text-sm text-gray-600">ID: {episode.id}</p>"







      {episode && (;
        <section className='space-y-4'>;



        <button;
className='px-4 py-2 bg-blue-600 text-white rounded'
          onClick={handleGenerate}

          disabled={generating}
            />
          {generating ? 'Generating…' : 'Generate Episode'}


        </button>
      </section>



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



                {publishing ? 'Publishing…' : 'Update RSS'}
              </button>
            </div>
            {episode.audio && (


                    className='text-blue-600 underline'    />












