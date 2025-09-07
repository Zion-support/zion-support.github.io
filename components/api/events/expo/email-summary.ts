
    }
    // TODO: Integrate with actual provider
    return res.status(200).json({ status: 'queued, provider });
  } catch (e: any) {
return res
      .status(500)
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  }
  if (req.method !== 'POST') return res.status(405).json({ "error": 'Method not allowed','
});
  try {
    }

