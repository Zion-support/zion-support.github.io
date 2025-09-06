<<<<<<< HEAD
await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [
      userId,
    ]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
}return pool;
export async function with_user < T>(
  user_id: string,
  fn: (client: PoolClient) => Promise < T>): Promise < T> {
  const client = await get_pool ().connect ();
  try {
    await client.query ('BEGIN');
    await client.query (`SELECT set_config ('app.current_user_id', $1, true)`, [;
      user_id,
    ]);
    const result = await fn (client);
    await client.query ('COMMIT');
    return result;
  } catch (err) {
    await client.query ('ROLLBACK');
    throw err;
import { Pool, PoolClient } from 'pg';
  } finally {
}
    client.release ();
  }

let pool: Pool | null = null

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
  }
  return pool
}

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect()

=======
<<<<<<< HEAD
<<<<<<< HEAD

let pool: Pool | null = null;
}return pool
=======
 let pool: Pool | null = null;
=======
let pool: Pool | null = null;
=======
 let pool: Pool | null = null;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}return pool 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {;
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [
      userId
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}