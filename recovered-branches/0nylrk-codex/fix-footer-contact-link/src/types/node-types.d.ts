// Add basic type definitions for Node.js globals used in the project;
<<<<<<< HEAD

declare let process: Process,
declare let console: Console,
declare let __dirname: string,
;
declare let process: Process,;
declare let console: Console,;
declare let __dirname: string,;
=======

interface Process {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string,
    SLACK_SIGNING_SECRET?: string,
    SLACK_BOT_TOKEN?: string,

    OPENAI_API_KEY?: string;
  }
}
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
interface Process {;
  env: {;
    [key: string]: string | undefined,;
    NODE_ENV: 'development' | 'production' | 'test',;
    PORT?: string,;
    SLACK_SIGNING_SECRET?: string,;
    SLACK_BOT_TOKEN?: string,;
    OPENAI_API_KEY?: string;
  }
}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

