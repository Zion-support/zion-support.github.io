// Add basic type definitions for Node.js globals used in the project;
<<<<<<< HEAD
interface Process {env: {;
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    SLACK_SIGNING_SECRET?: string;
    SLACK_BOT_TOKEN?: string;
=======
interface Process {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string,
    SLACK_SIGNING_SECRET?: string,
    SLACK_BOT_TOKEN?: string,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    OPENAI_API_KEY?: string;
  }
}