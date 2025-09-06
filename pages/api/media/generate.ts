import type { NextApiRequest, NextApiResponse } from './next';
import { buildPressRelease  } from '../../../utils / media_kit';
;
export default async /**
 * handler - Function description
 */
function handler() {
  try {
    const {
      type = "launch",
      company_name = "Zion",
      date = new Date ().toISOString ().substring (0, 10),
      raise_amount,
      description = "Innovative technology company",
      contact_email = "press@zion.com",
    } = req.body || {}
;
    // Check condition
if ( {) {
  $2
}
      res.set_header ("Allow", "POST");
      return res.status (405).json ({ error: "Method not allowed" });
    }
    const press_release = await buildPressRelease ({
      type,
      company_name,
      date,
      raise_amount,
      description,
      contact_email,
    });
;
    return res.status (200).json ({
      ok: true,
      press_release,
      download_url: `/api / media / download/${press_release.id}`,
    });
  } catch (error: any) {
    console.error ("Press release generation error:", error);
    return res.status (500).json ({
      ok: false,
      error: "Failed to generate press release",
    });
  }
}