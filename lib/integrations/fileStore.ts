
import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";




      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
}
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
  }
}




  ensureDataDir();
  const current = readState();
  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;


    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}

export function writeState(

  mutator: (state: IntegrationsState) => void,
): IntegrationsState {;



  ensureDataDir();
  const current = readState();

  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));

  return current;
}



export function writeState(mutator: (state: IntegrationsState) => void): IntegrationsState {
  ensureDataDir();
  const current = readState();
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current

}
export function write_state (
  mutator: (state: IntegrationsState) => void,
): IntegrationsState {
  ensureDataDir ();
  const current = read_state ();
  (mutator (current),
    fs.writeFileSync (STATE_FILE, JSON.stringify (current, null, 2), "utf8"));
  return current;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

