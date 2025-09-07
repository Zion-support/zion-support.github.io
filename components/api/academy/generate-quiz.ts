import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { moduleTitle, moduleContent } = req.body || {},
  const apiKey = null;
      return res.status(200).json(json)

    } catch {
      return fallback ();
    }
  } catch (err) {
    return fallback ();
  }    } catch {
      return fallback()
    }
  } catch (err) {
    return fallback()
}

}

      return res.status(200).json(json);
    } catch {
      return fallback();
    }
  } catch (err) {
    return fallback ();
}
}
    return fallback();
  }
origin/cursor/automate-test-improve-and-merge-code-2533
    return fallback();
  }
}
