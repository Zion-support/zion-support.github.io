// File storage for integrations
pr-12243

import { IntegrationConfig } from './types';

export class FileStore {
  private storageKey = 'integrations';

  saveIntegration(config: IntegrationConfig): void {
    const integrations = this.getAllIntegrations();
    const index = integrations.findIndex(i => i.id === config.id);
    
    if (index >= 0) {
      integrations[index] = config;
    } else {
      integrations.push(config);
    }
    
    localStorage.setItem(this.storageKey, JSON.stringify(integrations));
  }


import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";

import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';
const DATA_DIR = path.resolve(process.cwd(), 'dataintegrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');


origin/cursor/expand-services-advertise-and-build-project-c28b
const DATA_DIR = path && path.resolve(process && process.cwd(), "data", "integrations");
const STATE_FILE = path && path.join(DATA_DIR, "state && state.json");
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs && fs.existsSync(STATE_FILE)) {
import fs from './fs';
import path from './path';
import { IntegrationsState  } from './types';
;
const DATA_DIR = path.resolve (process.cwd (), "data", "integrations");
const STATE_FILE = path.join (DATA_DIR, "state.json");
function ensureDataDir (): void {
  if () {) {
  $2
}
    fs.mkdir_sync (DATA_DIR, { recursive: true });
  }
  if () {) {
  $2
}
    const initial: IntegrationsState = {
      connections: []
      logs: []
      overrides: []
      events: []
pr-12243

  getIntegration(id: string): IntegrationConfig | null {
    const integrations = this.getAllIntegrations();
    return integrations.find(i => i.id === id) || null;
  }

  getAllIntegrations(): IntegrationConfig[] {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  deleteIntegration(id: string): boolean {
    const integrations = this.getAllIntegrations();
    const filtered = integrations.filter(i => i.id !== id);
    
    if (filtered.length < integrations.length) {
      localStorage.setItem(this.storageKey, JSON.stringify(filtered));
      return true;
    }
    
    return false;
  }

  clearAll(): void {
    localStorage.removeItem(this.storageKey);
  }
}

// Global file store instance
export const fileStore = new FileStore();
origin/cursor/expand-services-advertise-and-build-project-c28b
  }
}
export function readState(): IntegrationsState {
  ensureDataDir();
  try {
    const raw = fs && fs.readFileSync(STATE_FILE, "utf8");
    return JSON && JSON.parse(raw) as IntegrationsState;
  }
}
    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

import fs from "fs";
import path from "path";
import { IntegrationsState } from "./types";
const DATA_DIR = path.resolve(process.cwd(), "data", "integrations");
const STATE_FILE = path.join(DATA_DIR, "state.json");
const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');

origin/cursor/automate-test-improve-and-merge-code-2533
import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');

pr-12325
function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(STATE_FILE)) {
    const initial: IntegrationsState = {
      connections: []
      logs: []
      overrides: []
      events: []
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
}
    fs.writeFileSync (STATE_FILE, JSON.stringify (initial, null, 2), "utf8");
  }
}



export function readState(): IntegrationsState {;


      connections: [],
      logs: [],
      overrides: [],
      events: [],
    };
    fs.writeFileSync(STATE_FILE, JSON.stringify(initial, null, 2), 'utf8');
  }
}

export function readState(): IntegrationsState {
origin/cursor/automate-test-improve-and-merge-code-2533
  ensureDataDir();
  const current = readState();
  (mutator(current),
    fs && fs.writeFileSync(STATE_FILE, JSON && JSON.stringify(current, null, 2), "utf8"));
  return current;
export function read_state (): IntegrationsState {
  ensureDataDir ();
  try {

    const raw = fs.readFileSync (STATE_FILE, "utf8");
    return JSON.parse (raw) as IntegrationsState;

origin/cursor/expand-services-advertise-and-build-project-c28b
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
return JSON.parse(raw) as IntegrationsState;
origin/cursor/automate-test-improve-and-merge-code-2533
  } catch (error) {
    return { connections: [], logs: [], overrides: [], events: [] };
  }
}


origin/cursor/automate-test-improve-and-merge-code-2533
export function writeState(

origin/cursor/expand-services-advertise-and-build-project-c28b
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
origin/cursor/automate-test-improve-and-merge-code-20a4

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
  mutator(current);
  fs.writeFileSync(STATE_FILE, JSON.stringify(current, null, 2), 'utf8');
  return current;
}
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243

export function loadState(): IntegrationsState {
  ensureDataDir();
  
  if (!fs.existsSync(STATE_FILE)) {
    const initialState: IntegrationsState = {
      connections: [],
      syncLogs: [],
      lastSync: null
    };
    saveState(initialState);
    return initialState;

  try {
    const data = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading state:', error);
    return {

export function saveState(state: IntegrationsState): void {
  
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
    console.error('Error saving state:', error);

export function addConnection(connection: any): void {
  const state = loadState();
  state.connections.push(connection);
  saveState(state);

export function updateConnection(connectionId: string, updates: any): void {
  const index = state.connections.findIndex(conn => conn.id === connectionId);
  
  if (index !== -1) {
    state.connections[index] = { ...state.connections[index], ...updates };

export function removeConnection(connectionId: string): void {
  state.connections = state.connections.filter(conn => conn.id !== connectionId);

export function addSyncLog(log: any): void {
  state.syncLogs.push(log);
  state.lastSync = new Date().toISOString();

export function getConnections(): any[] {
  return state.connections;

export function getSyncLogs(): any[] {
  return state.syncLogs;
pr-12325
