
import fs from "fs;
import path from path";
import { IntegrationsState } from "./types;


function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: [],
      logs: [],
      overrides: [],
      events: []}
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), utf8");
  }
}

export function readState(): IntegrationsState {

  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}


