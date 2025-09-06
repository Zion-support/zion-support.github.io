// Add basic type definitions for Node.js globals used in the project;
<<<<<<< HEAD
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
declare let __dirname:string; // Add basic type definitions for Node.js globals used in the project 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
