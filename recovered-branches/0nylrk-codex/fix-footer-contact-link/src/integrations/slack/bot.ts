
// Mock implementation of Slack bot that doesn't require external dependencies
// This replaces the original implementation which had dependency issues

interface SlackCommand {
  text: string
}

interface SlackAck {
  (): Promise<void>
}

interface SlackRespond {
  (text: string): Promise<void>
}

// Define console type to avoid TypeScript errors
interface SafeConsole {
  log: (message: string) => void
}

// Declare available globals
declare const globalThis: {
  console?: SafeConsole;
  process?: {
    env: {
      PORT?: string;
      [key: string]: string | undefined
    }
  }
},

// Mock App class that mimics the Slack Bolt SDK behavior
class MockApp {
  private commandHandlers: Record<string, Function> = {},

  command(commandName: string, handler: Function) {
    this.commandHandlers[commandName] = handler;
    return this
  }

  async start(port?: number): Promise<void> {
    // Safely log without direct console reference
    const safeConsole = null;