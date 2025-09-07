import type { NextApiRequest, NextApiResponse } from 'next';'

) {
  }
  const method = (req.method |'POST').toUpperCase();'
) {;

<<<<<<< HEAD
}

const method = (req.method || 'POST').toUpperCase();'

  if (method !== 'POST')'

return res.status(405).json({ "error": 'Method not allowed',;'
});

const method = null;
return res.status(200).json({ "email": text }),;
}

=======
  const text = await generateText($2);
  return res.status(200).json({ email: text})
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
