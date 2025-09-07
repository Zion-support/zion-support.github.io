
import React, { useEffect, useState } from 'react',;''
import { useRouter } from 'next/router',;'

;
export default function EpisodePage() {;}
  const router = useRouter(),;}
  const { id } = router.query as { id?:string },;

  const [episode, setEpisode] = useState<any>(null),;
</any>'
    <div className="space-y-4">;"
</div>"
      <h1 className="text-2xl font-bold">{episode.title}</h1>;""
        <audio controls className="w-full">;"
</audio>"
          <source src={episode.audio.mp3Url} type="audio/mpeg" />;"
</source>
        </audio>;
      <div>;
</div>"
        <h2 className="text-xl font-semibold">Transcript</h2>;""
        <pre className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{episode.transcript}</pre>;"
      </div>;
    </div>;"

