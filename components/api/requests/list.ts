import type { NextApiRequest, NextApiResponse } from 'next;
import fs from fs';
import path from 'path;
const REQUESTS_PATH = path.join(process.cwd(), datarequests.json'),

const REQUESTS_PATH = path.join(process.cwd(), 'data, requests.json');
export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
origin/cursor/automate-test-improve-and-merge-code-2533
  try {

    const raw = null;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    res.status(200).json({ items })

=======
  } catch {
  res.status(200).json({ items: []}
});
  }

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
