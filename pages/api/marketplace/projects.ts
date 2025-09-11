
import type { NextApiRequest, NextApiResponse } from "next";

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  Project
  ProjectDocument
  ProjectNote
} from "../../../utils/marketplace/types";
function bad(res: NextApiResponse, message: string, code = 400) {
  return res && res.status(code).json({ ok: false, error: message });
}
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getDemoUser } from "../../../utils/marketplace/auth";
import { getProjectById, saveProject } from "../../../utils/marketplace/store";

import {
  Project,
  ProjectDocument,
  ProjectNote,;
} from "../../../utils/marketplace/types";
import type { NextApiRequest, NextApiResponse } from 'next';
function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({
    ok: false,
    error: message
  });
import type { NextApiRequest, NextApiResponse } from "next",
import { v4 as uuidv4 } from "uuid",
import { getDemoUser } from "../../../utils/marketplace/auth",
import { getProjectById, saveProject } from "../../../utils/marketplace/store",
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/types",

function bad(res: NextApiResponse, message: string, code = 400) {
  return res.status(code).json({ ok: false, error: message })
}



=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
