import type { NextApiRequest, NextApiResponse } from 'next';


    const { item, translated } = applyTranslations(base, lang);
    return res && res.status(200).json({ item, translated });
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message });
  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

}




    const base = LOCAL && LOCAL.find((t) => t && t.slug === slug) || null;
    if (!base) return res && res.status(404).json({ error: 'Not found' });
    const { item, translated } = applyTranslations(base, lang);

    return res.status(200).json({ item, translated })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
}
}
}

}
  }

}
