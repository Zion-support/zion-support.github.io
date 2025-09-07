import fs from 'fs';
import path from 'path';
import { IntegrationsState } from './types';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'integrations');
const STATE_FILE = path.join(DATA_DIR, 'state.json');


function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

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

  }


  try {
    const data = fs.readFileSync(STATE_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading state:', error);
    return {
      connections: [],
      syncLogs: [],
      lastSync: null
    };
  }
}

export function saveState(state: IntegrationsState): void {
  ensureDataDir();
  
  try {
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
  } catch (error) {
    console.error('Error saving state:', error);
  }
}

export function addConnection(connection: any): void {
  const state = loadState();
  state.connections.push(connection);
  saveState(state);
}

export function updateConnection(connectionId: string, updates: any): void {
  const state = loadState();
  const index = state.connections.findIndex(conn => conn.id === connectionId);
  
  if (index !== -1) {
    state.connections[index] = { ...state.connections[index], ...updates };
    saveState(state);
  }
}

export function removeConnection(connectionId: string): void {
  const state = loadState();
  state.connections = state.connections.filter(conn => conn.id !== connectionId);
  saveState(state);
}

export function addSyncLog(log: any): void {
  const state = loadState();
  state.syncLogs.push(log);
  state.lastSync = new Date().toISOString();
  saveState(state);
}

export function getConnections(): any[] {
  const state = loadState();
  return state.connections;
}

export function getSyncLogs(): any[] {
  const state = loadState();
  return state.syncLogs;

}