

import type { NextApiRequest, NextApiResponse } from 'next';
import { buildIdentityProfile } from '@/utils/offworld/identity';

import type { NextApiRequest, NextApiResponse } from "next";
import { buildIdentityProfile } from "@/utils/offworld/identity";

  } catch (e) {
    return res.status (500).json ({ error: e.message,}
});
  }
  try {}
    const { address } = req.query as { address?: string }

const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
  } catch (e) {
    return res.status(500).json({ error: e.message,}

});
  }

