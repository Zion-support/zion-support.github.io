import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code;
    return res.status(status).json({ ok: false, error: e?.message || "Server error" })
  }
}
