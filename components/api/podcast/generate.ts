<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4  } from 'uuid';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
  const id = uuidv4();

  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice || 'Visionary'} tone, speak in ${persona?.language || 'English'}. If a style sample is provided, align tone and phrasing to it. Produce:
1) 7-10 concise interview questions mixing visionary and technical angles
2) Time markers for: Intro, segment transitions, Closing CTA for Zion
3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest
4) YouTube and Spotify descriptions
5) A single-sentence Best Quote
Return a strict JSON object with keys: title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.`;      transcript: generated.transcript,
      youtube_description: generated.youtube_description || '',
      spotify_description: generated.spotify_description || '',
      best_quote: generated.best_quote || '',
      audio: {},
    }
    episodes.unshift (episode);
    write_episodes (episodes);
;
    return res.status (200).json ({ episode });
  } catch (error: any) {}
    console.error (error);'
    return res.status (500).json ({ error: error?.message || 'Unknown error' });
  }    episodes.unshift (episode);
    write_episodes (episodes);
;
    return res.status (200).json ({ episode });
  } catch (error: any) {}
    console.error (error);'
    return res.status (500).json ({ error: error?.message || 'Unknown error' });
}
  }

}
}
}
}
