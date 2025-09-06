<<<<<<< HEAD
// Add basic type definitions for Node.js globals used in the project
interface Process {
  env: {
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    SLACK_SIGNING_SECRET?: string;
    SLACK_BOT_TOKEN?: string;
    OPENAI_API_KEY?: string;
  };
}

declare var process: Process;
declare var console: Console;
declare var __dirname: string;
=======
 // Add basic type definitions for Node.js globals used in the project 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
