<<<<<<< HEAD
import { Pool, PoolClient } from 'pg',
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

let pool: Pool | null = null,

<<<<<<< HEAD
export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
=======
export function getPool(): Pool {_if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  return pool
}

<<<<<<< HEAD
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect(),
  try {
    await client.query('BEGIN'),
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),
    const result = await fn(client),
    await client.query('COMMIT'),
    return result
  } catch (err) {
    await client.query('ROLLBACK'),
    throw err
  } finally {
    client.release()
  }
=======
export async function withUser<T>(_userId: string, _fn: (client: PoolClient) => Promise<T>): Promise<T> {_const _client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', _$1, _true)`, _[userId]);
    const _result = await fn(client);
    await client.query('COMMIT');
    return result;} catch (err) {_await client.query('ROLLBACK');
    throw err;} finally {_client.release();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}