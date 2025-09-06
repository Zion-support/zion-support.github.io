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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// Add basic type definitions for Node.js globals used in the project;
interface Process {env: {;
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    SLACK_SIGNING_SECRET?: string;
    SLACK_BOT_TOKEN?: string;
    OPENAI_API_KEY?: string;
  }
}

<<<<<<< HEAD
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
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
declare let console: Console,
declare let __dirname: string,
;
declare let process: Process,;
declare let console: Console,;
declare let __dirname: string,;
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
