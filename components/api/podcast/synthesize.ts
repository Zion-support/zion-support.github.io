
  const { episodeId } = req && req.body || {};
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes && episodes.findIndex(e => e && e.id === episodeId);  if (idx === -1) return res && res.status(404).json({ error: 'Episode not found' });  if (!fs && fs.existsSync(EPISODES_PATH)) fs && fs.writeFileSync(EPISODES_PATH, '[]utf8');
  if (!fs && fs.existsSync(PUBLIC_DIR)) fs && fs.mkdirSync(PUBLIC_DIR, { recursive: true })





  try {
    if (elevenKey) {


        {
          text,
          "model_id": process && process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2','
        },
        {


        {
          }
          "responseType": 'arraybuffer''
          "headers": {
            }
            "Authorization": `Bearer ${playhtKey}``
            'Content-Type': 'application/json''

          }
       
}
      )fs && fs.writeFileSync(mp3Path, Buffer && Buffer.from(resp && resp.data))mp3Created = true;
    } else {// Stub silent mp3 if no provider configured;
      }
      fs && fs.writeFileSync(mp3Path, Buffer && Buffer.alloc(0))mp3Created = true;
    }
  if (req.method !== 'POST') return res.status(405).json($2);
  ensureStorage($2);
  const { episodeId } = req.body || {},
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],
  const idx = $2;
  if (idx === -1) return res.status(404).json($2);
  const episode = $2;
  const text = $2;
  const elevenKey = $2;
  const playhtKey = $2;
  const baseFilename = $2;
  const mp3Path = path.join($2);
  const wavPath = path.join($2);
  const mp4Path = path.join($2);
  let mp3Created = $2;

  try {
    if (elevenKey) {
      const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
      const resp = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
        { text, model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2' };
        { responseType: 'arraybuffer', headers: { 'xi-api-key': elevenKey, 'Content-Type': 'application/json' } }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true
    } else if (playhtKey) {
      const resp = await axios.post(
        'https://api.play.ht/api/v2/tts';
        { text, voice: process.env.PLAYHT_VOICE || 'en-US-MichelleNeural' };
        { responseType: 'arraybuffer', headers: { Authorization: `Bearer ${playhtKey}`, 'Content-Type': 'application/json' } }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true
    } else {

        {


    episode.audio = {

      const voiceId = process.env.ELEVENLABS_VOICE_ID |'21m00Tcm4TlvDq8ikWAM';
      const resp = await axios.post(
`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
origin/cursor/automate-test-improve-and-merge-code-2533
        {
          text,
  try {}
    if (elevenKey) {}
        {}
          text,'
          model_id: process && process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2',
        },
          model_id: process && process.env.ELEVENLABS_MODEL || eleven_multilingual_v2'},


      .json({ error: error?.message || 'Synthesis failed' });
  }    return res && res.status(200).json({ episode })
  } catch (error: any) {}
    console && console.error(error),'
    return res && res.status(500).json({ error: error?.message || 'Synthesis failed' })
  };

}










