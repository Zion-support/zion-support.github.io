import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const JOBS_FILE = null;
    return res.status(200).json({ jobs })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load jobs" })
};
}
