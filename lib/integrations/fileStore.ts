
  }
}

export function readState(): IntegrationsState {
<<<<<<< HEAD
  ensureDataDir();
=======

=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
