// POST /api/email/process — trigger one email processing cycle
import { execFile } from 'child_process';
import { promisify } from 'util';
const execFileAsync = promisify(execFile);

export async function POST() {
  try {
    const scriptPath = `${process.cwd()}/.hermes/scripts/email-responder.cjs`;
    const { stdout, stderr } = await execFileAsync('node', ['--once', scriptPath], {
      env: { ...process.env, EMAIL_DRY_RUN: process.env.EMAIL_DRY_RUN || 'true' },
      timeout: 120000
    });

    const output = (stdout || '') + (stderr || '');
    return new Response(JSON.stringify({
      triggered: true,
      dryRun: process.env.EMAIL_DRY_RUN !== 'false',
      output: output.slice(0, 1000),
      summary: {
        processed: (output.match(/✅ Processed:\s*(\d+)/)?.[1] || 0),
        pending: (output.match(/⏳ Pending:\s*(\d+)/)?.[1] || 0),
        failed: (output.match(/❌ Processing failed:\s*(\d+)/)?.[1] || 0)
      }
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
