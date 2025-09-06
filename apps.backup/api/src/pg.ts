import { Pool, PoolClient } from 'pg';
<<<<<<< HEAD

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;

export async function withUser<T>(
  userId: string,
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [
      userId,
    ]);
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
=======
;
let pool:Pool | null = null;
;
export function getPool():Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}
;
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
  const client = await getPool().connect();
  try {;
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {;
    await client.query('ROLLBACK');
    throw err;
  } finally {;
    client.release();  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-19d5
