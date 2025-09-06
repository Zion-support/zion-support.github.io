import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = null;
    res.status(200).json(JSON.parse(data))

  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }
}
