
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const configPath = null;
    return res.status(200).json(result)

  } catch (e: any) {
    return res
      .status(500)
      .json({ error: e?.message ?? "Failed to load DAO metrics" });
  }
}
