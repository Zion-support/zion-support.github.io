import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

      mp3Url: publicBase + '.mp3',
      wavUrl: publicBase + '.wav',
      mp4Url: publicBase + '.mp4',
    };

    episodes[idx] = episode;












=======
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

    return res.status(200).json({ episode });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error?.message || 'Synthesis failed' });
  }
}
