
export default function EpisodePage() {


    <div className='space-y-4'>

      <h1 className='text-2xl font-bold'>{episode.title}</h1>
      <p className='text-sm text-gray-600'>
        Guest: {episode.invitee?.name} ·{' '}
        {new Date(episode.createdAt).toLocaleString()}
      </p>
      {episode.audio?.mp3Url && ('
        <audio controls className='w-full'>'
          <source src={episode.audio.mp3Url} type='audio/mpeg' />
        </audio>
      )}
      <div>'
        <h2 className='text-xl font-semibold'>Transcript</h2>'
        <pre className='whitespace-pre-wrap bg-gray-50 p-3 rounded'>
<div className='space-y-4' />
      <h1 className='text-2xl font-bold' />{episode.title}</h1>
      <p className='text-sm text-gray-600' />

        Guest: {episode.invitee?.name} ·{' '}
        {new Date(episode.createdAt).toLocaleString(,}
}
    <div className='space-y-4>
      <h1 className=text-2xl font-bold'>{episode.title}</h1>
      <p className='text-sm text-gray-600>
  }, [id])if (!episode) return <div>Loading…</div>;
  return (<div className=space-y-4'>;
      <h1 className='text-2xl font-bold>{episode.title}</h1>;
      <p className=text-sm text-gray-600'>;
        Guest: {episode.invitee?.name} ·{' }
        {new Date(episode.createdAt).toLocaleString()}

      </p>;
      {episode.audio?.mp3Url && (<audio controls className='w-full'    />;}
          <source src={episode.audio.mp3Url} type='audio/mpeg'    />;
        </audio>;
      )}

      <div    />;
        <h2 className='text-xl font-semibold'    />Transcript</h2>;
        <pre className='whitespace-pre-wrap bg-gray-50 p-3 rounded'    />;

          {episode.transcript}


        </pre>
      </div>
    </div>




