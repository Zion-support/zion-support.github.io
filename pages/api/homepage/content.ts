import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
      } catch {
        // fall back to remote
      }
    }
    const remote = await fetchFromGitHub();
    if (remote) return res.status(200).json(remote);
    return res.status(200).json(null);
  } catch (e: any) {
    return res.status(500).json({ error: e.message || 'Internal error' });
  }
