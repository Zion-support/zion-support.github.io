// Add basic type definitions for Node.js globals used in the project;
    OPENAI_API_KEY?: string;
  }
}
=======
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

declare let process: Process,
declare let console: Console,
declare let __dirname: string,
;
declare let process: Process,;
declare let console: Console,;
declare let __dirname: string,;
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
