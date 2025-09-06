import { Pool, PoolClient } from 'pg';
<<<<<<< HEAD
let pool: Pool | null = null;
export function getPool(): Pool {;
  if (!pool) {;
=======

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}
<<<<<<< HEAD
;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
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
    client.release();
  }
}
=======

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
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
