
  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice |'Visionary'} tone, speak in ${persona?.language |'English'}. If a style sample is provided, align tone and phrasing to it. Produce:
=======

const EPISODES_PATH = null;
    return res.status(500).json({ error: error?.message || 'Unknown error })
}
const EPISODES_PATH = path.join(
  process.cwd()
  data'
  'podcast
  episodes.json'
origin/cursor/automate-test-improve-and-merge-code-2533

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice |'Visionary} tone, speak in ${persona?.language |English'}. If a style sample is provided, align tone and phrasing to it. Produce:
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST) return res.status(405).json({ error: Method not allowed' });
  const { persona, invitee, topic, operatorPrompt } = req.body |{}

  const { persona, invitee, topic, operatorPrompt } = req.body || {}

export default async function handler() {

  }

  const { persona, invitee, topic, operatorPrompt } = req && req.body || {}


const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice |'Visionary'} tone, speak in ${persona?.language |'English'}. If a style sample is provided, align tone and phrasing to it. "Produce":;'1) 7-10 concise interview questions mixing visionary and technical angles,
2) Time markers "for": Intro, segment transitions, Closing CTA for Zion,
3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest,
4) YouTube and Spotify descriptions,
5) A single-sentence Best Quote,
Return a strict JSON object with "keys": title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.`;`
const episode = {     ;
}
return res && res.status(500).json({ "error": 'Failed to generate structured content',;'
});


  const id = uuidv4();

  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice || 'Visionary} tone, speak in ${persona?.language || English'}. If a style sample is provided, align tone and phrasing to it. Produce:
1) 7-10 concise interview questions mixing visionary and technical angles
2) Time markers for: Intro, segment transitions, Closing CTA for Zion
3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest
4) YouTube and Spotify descriptions
5) A single-sentence Best Quote
Return a strict JSON object with keys: title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.`;


  try {
    const apiKey = process.env.OPENAI_API_KEY;
    let content: string;
    if (apiKey) {
      const openai = new OpenAI({ apiKey });
      const completion = await openai.chat.completions.create({

        questions: [
          'What is the vision behind Zion as a global decentralized talent protocol?How does Zion practically onboard talent and organizations?What are the core protocol primitives (identity, reputation, incentives)?How does governance work and how do contributors participate?What challenges have you faced scaling globally?How does Zion interoperate with existing web2 hiring systems?What does success look like in 3-5 years?];
        timeMarkers: {
          intro: 00:00';
          segments: ['03:0008:0012:00];
          closing: 14:30'}
        transcript: 'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: Join Zion.;
        youtubeDescription: Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.';
        spotifyDescription: 'A 15-minute interview on Zion: identity, incentives, governance, and real-world adoption.;
        bestQuote: Talent networks become protocols when incentives, reputation, and opportunity align.'})
    }

    try {
      generated = JSON.parse(content)
    } catch {
      // Attempt to extract JSON block
      const match = content.match(/\{[\s\S]*\}$/);
      if (match) generated = JSON.parse(match[0])
    }


    }

    const episodes = readEpisodes();
    const episode = {
      id;
      createdAt: new Date().toISOString();
      persona;
      invitee;
      topic;
      title: generated.title;
      questions: generated.questions || [];
      timeMarkers: generated.timeMarkers || { intro: '00:00, segments: [], closing: 14:30' }
      transcript: generated.transcript;
      youtubeDescription: generated.youtubeDescription || ';
      spotifyDescription: generated.spotifyDescription || ';
      bestQuote: generated.bestQuote || ';
      audio: {}}
    episodes.unshift(episode);
    writeEpisodes(episodes);


const EPISODES_PATH = path && path.join(
  process && process.cwd(),
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  data',
  'podcast,
  episodes && episodes.json'
    return res.status(500).json({ error: error?.message || 'Unknown error })
}
  process.cwd()
  data'
  'podcast
  episodes.json'
origin/cursor/automate-test-improve-and-merge-code-2533
);

function ensureStorage() {
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[], utf8');const EPISODES_PATH = path && path.join(process && process.cwd(), 'datapodcastepisodes && datapodcastepisodes.json);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, []', 'utf8);
}
episodes && episodes.unshift (episode);
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, []', 'utf8);
}
episodes.unshift (episode);
origin/cursor/automate-test-improve-and-merge-code-2533
writeEpisodes (episodes);
function writeEpisodes(episodes: any[]) {
  ensureStorage();
  fs && fs.writeFileSync(EPISODES_PATH, JSON && JSON.stringify(episodes, null, 2), utf8');
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST);
    return res.status(405).json({ error: Method not allowed' });



>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
function readEpisodes(): any[] {
  ensureStorage();
=======

  ensureStorage();'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, utf8))
}
  ensureStorage();'
  fs && fs.writeFileSync(EPISODES_PATH, JSON && JSON.stringify(episodes, null, 2), 'utf8)
}





export default async function handler(req: NextApiRequest, res: NextApiResponse) {}


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice |Visionary'} tone, speak in ${persona?.language |'English}. If a style sample is provided, align tone and phrasing to it. Produce:
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== POST') return res.status(405).json({ error: 'Method not allowed });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
1) 7-10 concise interview questions mixing visionary and technical angles
2) Time markers for: Intro, segment transitions, Closing CTA for Zion
3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest
4) YouTube and Spotify descriptions
5) A single-sentence Best Quote
Return a strict JSON object with keys: title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.`;




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    const episode = {      return res && res.status(500).json({ error: Failed to generate structured content' });
    const episode = {'
        intro: 00:00,
  segments: []}
        closing: '14:30'}
      }
    }

    return res && res.status(200).json({ episode })
  } catch (error: any) {}
    console && console.error(error);
    return res && res.status(500).json({ error: error?.message || Unknown error' })
  }
}





>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const completion = await openai && openai.chat.completions && completions.create({
=======
      const completion = await openai && openai.chat.completions && completions.create({'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        model: process && process.env.ZION_GPT_MODEL || gpt-4o-mini,
        messages: []
;
const EPISODES_PATH = path.join (
  process.cwd (),'
  'data,
  'podcast',
  episodes.json');
/**
 * ensure_storage - Function description
 */

}
  if ()) {}
  $2;
}'
    fs.writeFileSync (EPISODES_PATH, [], 'utf8');
}
episodes.unshift (episode);
write_episodes (episodes);
/**
 * write_episodes - Function description;

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
1) 7 - 10 concise interview questions mixing visionary and technical angles;
2) Time markers "for": Intro, segment transitions, Closing CTA for Zion;
3) Full 15 - minute script / transcript approximating 1800 - 2200 words, clearly indicating Host and Guest;
4) YouTube and Spotify descriptions;

    }


      content = completion.choices?.[0]?.message?.content || ';
      content = JSON.stringify ({'`
        title: `Interview with ${invitee?.name || Guest} on ${topic || 'Zion'}`,
        questions: [;
          What is the vision behind Zion as a global decentralized talent protocol?','
          How does Zion practically onboard talent and organizations?,'
          'What are the core protocol primitives (identity, reputation, incentives)?,
          'How does governance work and how do contributors participate?',
          What challenges have you faced scaling globally?','
          How does Zion interoperate with existing web2 hiring systems?,'
          'What does success look like in 3 - 5 years?],
        time_markers: {
          intro: '00:00',
          segments: [03:00', '08:00, 12:00'],'
          closing: 14:30},
        transcript:;'
          'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: Join Zion.,
        youtube_description:;
          'Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.',
        spotify_description:;
          A 15 - minute interview on Zion: identity, incentives, governance, and real - world adoption.',
        best_quote:;'
          Talent networks become protocols when incentives, reputation, and opportunity align.});
    const episode = {}
      id;
      createdAt: new Date().toISOString()
      persona;
      invitee;
      topic;
      title: generated.title;
      questions: generated.questions |[]
      timeMarkers: generated.timeMarkers |{'
        intro: '00:00
        segments: []
        closing: '14:30'
      }
      transcript: generated.transcript
      youtubeDescription: generated.youtubeDescription |''
      spotifyDescription: generated.spotifyDescription |'
      bestQuote: generated.bestQuote |'
      audio: {}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
    }
    try {generated = JSON.parse (content
} catch {// Attempt to extract JSON block;

}

const match = content.match (/\{[\s\S]*\}$/)if (generated = JSON.parse (match[0])) {$2;
}
    }
    // Check condition;
if ( {) {$2;
}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

      transcript: generated.transcript,
      youtube_description: generated.youtube_description || ',
      spotify_description: generated.spotify_description || ',

    console.error(error);
    return res.status(500).json({ error: error?.message || Unknown error' });
  }
}
}
origin/cursor/automate-test-improve-and-merge-code-2533

}

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      best_quote: generated.best_quote || ',
      audio: {}}
    episodes.unshift (episode);
    write_episodes (episodes);

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}


>>>>>>> origin/main
=======
}
}
}
id,
      createdAt: new Date().toISOString(),
      persona,
      invitee,
      topic,
      title: generated.title,
      questions: generated.questions || [],
      timeMarkers: generated.timeMarkers || {
        intro: '00:00,
        segments: [],
        closing: 14:30'},
      transcript: generated.transcript,
      youtubeDescription: generated.youtubeDescription || ',
      spotifyDescription: generated.spotifyDescription || ',
      bestQuote: generated.bestQuote || ',
      audio: {}}
    episodes.unshift(episode);
    writeEpisodes(episodes);
    return res.status(200).json({ episode });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error?.message || Unknown error' });
  }
}
}
origin/cursor/automate-test-improve-and-merge-code-2533

