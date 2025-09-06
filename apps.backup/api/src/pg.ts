import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
  if (!pool) {

  if (!pool) {;
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
=======
    pool = new Pool({ connectionString:process && process.env.DATABASE_URL });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return pool;
}
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
  const client = await getPool().connect();
  try {
    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
import { Pool, PoolClient } from 'pg',;
let pool: Pool | null = null,;
export function getPool(): Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;
    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return result;
  } catch (err) {
    await client.query ('ROLLBACK');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    throw err;

  } finally {
client.release();  }
  } finally {
client.release();  }
}
  } finally {;
    client.release();
  }
}
}
