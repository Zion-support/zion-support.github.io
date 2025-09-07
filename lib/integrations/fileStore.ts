
  }
}

export function readState(): IntegrationsState {

=======

  try {
    const raw = fs.readFileSync(STATE_FILE, "utf8");
    return JSON.parse(raw) as IntegrationsState;
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] }
  }
}


>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
