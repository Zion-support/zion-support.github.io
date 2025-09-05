
// Add basic type definitions for Node.js globals used in the project
interface Process {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string,
    SLACK_SIGNING_SECRET?: string,
    SLACK_BOT_TOKEN?: string,
    OPENAI_API_KEY?: string
  }
}

<<<<<<< HEAD
declare let process: Process,
declare let console: Console,
declare let __dirname: string,
=======
declare let process: Process;
declare let console: Console;
declare let __dirname: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
