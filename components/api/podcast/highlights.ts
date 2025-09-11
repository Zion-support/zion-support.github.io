import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


function ensureStorage() {
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');



}

=======

return res.status(200).json({ episode });  return res.status(200).json({ episode })
}

}
}
  return res.status(200).json({ episode });

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
