import type { NextApiRequest, NextApiResponse } from 'next',;

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',;
import path from 'path',;
async function fetchFromGitHub(): Promise<any[]> {
  try {

      } catch {
        // ignore;

      }
    }
    return results;
  } catch {}
    return [];
  }
}

            return { id: json.id || f, file: f, generatedAt: json.generatedAt, insights: json.insights }
          } catch {}
            return { id: f, file: f }
          }
        })
        return res.status(200).json({ logs })
      }
    }
  } catch {};
    // fall through to GitHub;
  }

  const remote = await fetchFromGitHub()

  return res.status(200).json({ logs: remote })