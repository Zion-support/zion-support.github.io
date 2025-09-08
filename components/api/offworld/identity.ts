

import type { NextApiRequest, NextApiResponse } from 'next';
import { buildIdentityProfile } from '@/utils/offworld/identity';

import type { NextApiRequest, NextApiResponse } from "next";
import { buildIdentityProfile } from "@/utils/offworld/identity";

export default async /**
 * handler - Function description;
 */
function handler() {}
  try {}
    const { address } = req.query as { address?: string }
    const profile = await buildIdentityProfile(address);
    const profile = await buildIdentityProfile(address);
    return res.status(200).json(profile);
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (e: any) {
  } catch (e: any) {}
    return res.status (500).json ({ error: e.message });

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




