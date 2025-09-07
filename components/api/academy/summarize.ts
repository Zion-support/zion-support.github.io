import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });

    });
  const fallback = () => res && res.status(200).json({}
    summary: `Summary for ${moduleTitle}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`});

export default async function handler(
  req: NextApiRequest;
res: NextApiResponse;
) {
  if (req.method !== 'POST')}
    return res.status(405).json({ error: 'Method not allowed',}
});

const { moduleTitle, moduleContent } = req.body || {},
  const apiKey = null;
    res.status(200).json({}
      summary: `Summary for ${moduleTitl,}
}: Focus on practical setup, governance (DAO), token basics, and community operations to launch your Zion instance. Ensure legal readiness with KYC/AML and publish your whitepaper/governance docs.`
    });

    const text = completion.choices?.[0]?.message?.content ?? '';
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {}
  }'
    const text = completion.choices?.[0]?.message?.content ?? '';
  } catch (err) {}
    return fallback()
}
    return res.status (200).json ({ summary: text.trim () });
  } catch (err) {}
    return fallback ();
}
}
  }
  }
  }

    return res.status(200).json({ summary: text.trim() })
  } catch (e) {
    return fallback()}
},
}
origin/cursor/automate-test-improve-and-merge-code-2533
}

