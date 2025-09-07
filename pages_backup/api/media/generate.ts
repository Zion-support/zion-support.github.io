import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

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

    res.status(200).json({ ok: true, text, fallback: true });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message || 'Unknown error' });
  }

}
  } catch (error) {
    console.error("Error:", error);

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