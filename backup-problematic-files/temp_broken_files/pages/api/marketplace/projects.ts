import type { NextApiRequest, NextApiResponse } from "next"
import { v4 as uuidv4 } from "uuid"
import { getDemoUser } from "../../../utils/marketplace/
import { getProjectById, saveProject } from "../../../utils/marketplace/
import { Project, ProjectDocument, ProjectNote } from "../../../utils/marketplace/