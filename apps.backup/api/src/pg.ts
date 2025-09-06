import { Pool, PoolClient } from 'pg';
<<<<<<< HEAD
let pool:Pool | null = null;
export function getPool():Pool {
=======

let pool: Pool | null = null;
}

export function getPool(): Pool {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (!pool) {
<<<<<<< HEAD
    pool;
    throw err
=======
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } finally {
client.release();  }
}