
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
=======
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
      companyName = "Zion",
      date = new Date().toISOString().substring(0, 10),
      raiseAmount,
      description = "Innovative technology company",
      contactEmail = "press@zion.com",;
    } = req.body || {};
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
<<<<<<< HEAD
      type = "launch",
      company_name = "Zion",
      date = new Date ().toISOString ().substring (0, 10),
      raise_amount,
      description = "Innovative technology company",


    return res && res.status(200).json({
      ok: true,
      pressRelease,
      downloadUrl: `/api/media/download/${pressRelease && pressRelease.id}`,
=======
    }
    const pressRelease = await buildPressRelease({
      type
      companyName
      date
      raiseAmount
      description
      contactEmail
    });
    return res.status(200).json({
      ok: true
      pressRelease
      downloadUrl: `/api/media/download/${pressRelease.id}`
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    });
  } catch (error: any) {
    console.error("Press release generation error:", error);
    return res.status(500).json({
      ok: false
      error: "Failed to generate press release"
    });
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    const text = buildPressRelease(type, { companyName, date, raiseAmount, tokenName } as any);
    res.status(200).json({ ok: true, text, fallback: true });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' });
  }
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
=======

  }

}

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
  }
}
=======

  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
