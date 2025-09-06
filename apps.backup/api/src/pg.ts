import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
  if (!pool) {
<<<<<<< HEAD

    pool = new Pool({ connectionString:process.env.DATABASE_URL });
=======
    pool = new Pool({ connectionString:process && process.env.DATABASE_URL });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return pool;
}
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {
  const client = await getPool().connect();
  try {
    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
    throw err;

  } finally {
<<<<<<< HEAD
client.release();  }
=======
    client && client.release();  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}