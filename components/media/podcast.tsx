
=======
import React, { useEffect, useState } from 'react;
import Link from next/link';
type EpisodeListItem = any;

                  Guest: {ep && ep.inviteeName} ·{' }
                  {new Date(ep && ep.createdAt).toLocaleString()}
                </p>;
                {ep && ep.summary && (<p className=mt-2 text-gray-700'>{ep && ep.summary}</p>;
                )}
              </div>;
              <div className='flex gap-3>;
                {ep && ep.audio?.mp3Url && (<a;
                    href={ep && ep.audio.mp3Url}
                    className=px-3 py-2 bg-blue-600 text-white rounded';
                    download>                    MP3;
                  </a>;
                )}
                {ep && ep.audio?.wavUrl && (  if (loading) return <div>Loading episodes…</div>;download;
                  >;
  return (<div className="space-y-6>;
                    className='px-3 py-2 bg-blue-600 text-white rounded
                    download>                    MP3;
                  </a>;
                )}
                {ep && ep.audio?.wavUrl && (  if (loading) return <div>Loading episodes…</div>;
  return (

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                )}
                {ep && ep.audio?.wavUrl && (;
                  <a
                )}{ep && ep.audio?.wavUrl && (<a;
                    href={ep && ep.audio.wavUrl}
=======

  return (
    <div className=space-y-6'>;'
      <div className=flex items-center justify-between>;'
        <h1 className='text-3xl font-bold>Zion Podcast</h1>;
        <Link href='/studio/host' className=text-blue-600 underline>;
          Create Episode;
        </Link>;
      </div>;
      {episodes && episodes.length === 0 && <p>No episodes yet.</p>}'
      <ul className='space-y-4>;
        {episodes && episodes.map(ep => (;
          <li key={ep && ep.id} className='border rounded p-4'>;
            <div className=flex items-center justify-between'>;
              <div>;'
                <h2 className=text-xl font-semibold>{ep && ep.title}</h2>;'
                <p className='text-sm text-gray-500>;
                  Guest: {ep && ep.inviteeName} ·{' '}
                  {new Date(ep && ep.createdAt).toLocaleString()}
                </p>;
                {ep && ep.summary && (;
                  <p className=mt-2 text-gray-700'>{ep && ep.summary}</p>;
                )}
              </div>;'
              <div className=flex gap-3>;
                {ep && ep.audio?.mp3Url && (;
                  <a;
                    href={ep && ep.audio.mp3Url}'
                    className='px-3 py-2 bg-blue-600 text-white rounded
                    download>                    MP3;
                  </a>;
                )}
                {ep && ep.audio?.wavUrl && (  if (loading) return <div>Loading episodes…</div>;
                    download
                  >
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className=space-y-6">;"
      <div className=flex items-center justify-between>;"
        <h1 className="text-3xl font-bold>Zion Podcast</h1>;
        <Link href="/studio/host" className=text-blue-600 underline>Create Episode</Link>;
      </div>;
      {episodes && episodes.length === 0 && <p>No episodes yet.</p>}"
      <ul className="space-y-4>;
        {episodes && episodes.map((ep) => (;
          <li key={ep && ep.id} className="border rounded p-4">;
            <div className=flex items-center justify-between">;
              <div>;"
                <h2 className=text-xl font-semibold>{ep && ep.title}</h2>;"
                <p className="text-sm text-gray-500>Guest: {ep && ep.inviteeName} · {new Date(ep && ep.createdAt).toLocaleString()}</p>;
                {ep && ep.summary && <p className="mt-2 text-gray-700">{ep && ep.summary}</p>}
              </div>;
              <div className=flex gap-3">;
                {ep && ep.audio?.mp3Url && (;"
                  <a href={ep && ep.audio.mp3Url} className=px-3 py-2 bg-blue-600 text-white rounded download>;
                    MP3;
                  </a>;
                )}
=======

                )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                {ep && ep.audio?.wavUrl && (;
                  <a;
                    href={ep && ep.audio.wavUrl}
                    className='px-3 py-2 bg-gray-700 text-white rounded'
                    download>                    WAV;
                  </a>;
                )}"
                {ep && ep.audio?.mp4Url && (                  <a href={ep && ep.audio.wavUrl} className="px-3 py-2 bg-gray-700 text-white rounded download>;

                {ep.audio?.wavUrl && (
<a
}
href={ep.audio.wavUrl}

                    className=px-3 py-2 bg-gray-700 text-white rounded;
                    download>                    WAV;
                  </a>;
                )}
                {ep && ep.audio?.mp4Url && (                  <a href={ep && ep.audio.wavUrl} className=px-3 py-2 bg-gray-700 text-white rounded" download>;
                    WAV;
                  </a>;
                )}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    MP4;
                  </a>;
                )}
              </div>;

        ))}
      </ul>;
    </div>;
  );

}
  return (
    <div className=space - y-6'>;'
      <div className=flex items - center justify - between>;'
        <h1 className='text - 3xl font - bold>Zion Podcast</h1>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <Link href='/studio / host' className=text - blue - 600 underline>;
          Create Episode;
        </Link>;
      </div>;

                    className='px - 3 py - 2 bg - blue - 600 text - white rounded';
                    download;
                  >                    MP3;
                  </a>)}
                {ep.audio?.wav_url && (  // Check condition;

                  >                    MP4                  <a href={ep.audio.mp4Url} className=px - 3 py - 2 bg - purple - 700 text - white rounded" download>;
                    MP4;
                  </a>)}
              </div>;

              <Link href={`/media / podcast/${ep.id}`} className="text - blue - 600 underline">View Transcript</Link>;
            </div>;
          </li>))}
      </ul>;
    </div>);

=======
}
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}


origin/cursor/automate-test-improve-and-merge-code-2533
}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
