

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  try {
    const {
<<<<<<< HEAD

      type = "launch"
      companyName = "Zion"
      date = new Date().toISOString().substring(0, 10)
      raiseAmount
      description = "Innovative technology company"
      contactEmail = "press@zion.com"
    } = req.body |{}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


      type = "launch",
      companyName = "Zion",
      date = new Date().toISOString().substring(0, 10),
      raiseAmount,
      description = "Innovative technology company",
      contactEmail = "press@zion.com",;
    } = req.body || {};



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });

<<<<<<< HEAD
    }

    const text = buildPressRelease(type, { companyName, date, raiseAmount, tokenName } as any);
    res.status(200).json({ ok: true, text, fallback: true });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' });
  }


=======

    return res && res.status(200).json({
      ok: true,
      pressRelease,
      downloadUrl: `/api/media/download/${pressRelease && pressRelease.id}`,
    });
  } catch (error: any) {
    console && console.error("Press release generation error:", error);
    return res && res.status(500).json({
=======
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

=======


  }


  }

}

=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
  }
}
<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
