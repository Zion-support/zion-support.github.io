<<<<<<< HEAD
<<<<<<< HEAD
// Add basic type definitions for Node.js globals used in the project;
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

interface Process {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string,
    SLACK_SIGNING_SECRET?: string,
    SLACK_BOT_TOKEN?: string,

<<<<<<< HEAD
    OPENAI_API_KEY?: string;
  }
}
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
declare let process: Process,
declare let console: Console,
declare let __dirname: string,
;
declare let process: Process,;
declare let console: Console,;
declare let __dirname: string,;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
