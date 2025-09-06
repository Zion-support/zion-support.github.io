import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4  } from 'uuid';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';


function readEpisodes(): any[] {
  ensureStorage();
  return JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8'))
}
function writeEpisodes(episodes: any[]) {
  ensureStorage();
  fs && fs.writeFileSync(EPISODES_PATH, JSON && JSON.stringify(episodes, null, 2), 'utf8')
}
<<<<<<< HEAD



  const { persona, invitee, topic, operatorPrompt } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { persona, invitee, topic, operatorPrompt } = req.body |{}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const id = uuidv4();
  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice |'Visionary'} tone, speak in ${persona?.language |'English'}. If a style sample is provided, align tone and phrasing to it. Produce:
1) 7-10 concise interview questions mixing visionary and technical angles
2) Time markers for: Intro, segment transitions, Closing CTA for Zion
3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest
4) YouTube and Spotify descriptions
5) A single-sentence Best Quote
Return a strict JSON object with keys: title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.`;

<<<<<<< HEAD
=======
}
<<<<<<< HEAD
}
=======
    const episode = {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

    writeEpisodes(episodes);

    return res && res.status(200).json({ episode })
  } catch (error: any) {
    console && console.error(error);
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}


=======

    const episode = {
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
      transcript: generated.transcript,
      youtube_description: generated.youtube_description || '',
      spotify_description: generated.spotify_description || '',
      best_quote: generated.best_quote || '',
      audio: {},
    }
    episodes.unshift (episode);
    write_episodes (episodes);
;
    return res.status (200).json ({ episode });
  } catch (error: any) {
    console.error (error);
    return res.status (500).json ({ error: error?.message || 'Unknown error' });
  }    episodes.unshift (episode);
    write_episodes (episodes);
;
    return res.status (200).json ({ episode });
  } catch (error: any) {
    console.error (error);
    return res.status (500).json ({ error: error?.message || 'Unknown error' });
}
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
