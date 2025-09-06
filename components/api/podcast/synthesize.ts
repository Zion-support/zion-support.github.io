import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const EPISODES_PATH = null;

    return res.status(500).json({ error: error?.message || 'Synthesis failed' })
};
}
