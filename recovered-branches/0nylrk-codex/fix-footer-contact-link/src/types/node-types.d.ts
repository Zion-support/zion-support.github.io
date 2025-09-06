<<<<<<< HEAD
=======
// Add basic type definitions for Node.js globals used in the project;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface Process {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string,
    SLACK_SIGNING_SECRET?: string,
    SLACK_BOT_TOKEN?: string,

<<<<<<< HEAD

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

=======
    OPENAI_API_KEY?: string;
  }
}
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
declare let process: Process,
declare let console: Console,
declare let __dirname: string,
;
declare let process: Process,;
declare let console: Console,;
declare let __dirname: string,;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
