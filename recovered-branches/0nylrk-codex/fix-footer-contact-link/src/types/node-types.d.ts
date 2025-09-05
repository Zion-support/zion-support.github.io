
<<<<<<< HEAD
// Add basic type definitions for Node.js globals used in the project;
interface Process {;
  env:{;
    [key:string]:string | undefined;
    NODE_ENV:'development' | 'production' | 'test';
    PORT?:string;
    SLACK_SIGNING_SECRET?:string;
    SLACK_BOT_TOKEN?:string;
    OPENAI_API_KEY?:string;
  };
}
;
declare let process:Process;
declare let console:Console;
declare let __dirname:string;
=======
// Add basic type definitions for Node.js globals used in the project
interface Process {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string,
    SLACK_SIGNING_SECRET?: string,
    SLACK_BOT_TOKEN?: string,
    OPENAI_API_KEY?: string
  }}

declare let process: Process,
declare let console: Console,
declare let __dirname: string,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
