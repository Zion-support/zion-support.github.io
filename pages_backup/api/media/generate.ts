import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });

    if (req.method !== "POST") {"
      res.setHeader("Allow", "POST");"
      return res.status(405).json({ error: "Method not allowed" });

    });
  } catch (error: any) {"
    console.error("Press release generation error:", error);
    return res.status(500).json({}
      ok: false"
      error: "Failed to generate press release"
    });
:pages_backup/api/media/generate.ts
    }

    const text = buildPressRelease(type, { companyName, date, raiseAmount, tokenName } as any);
    res.status(200).json({ ok: true, text, fallback: true });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' });
  }
}
}
  } catch (error) {
    console.error("Error:", error);

}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
:pages_backup/api/media/generate.ts
}
}

"
