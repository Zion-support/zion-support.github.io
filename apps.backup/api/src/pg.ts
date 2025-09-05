<<<<<<< HEAD
import { Pool, PoolClient } from 'pg',

let pool: Pool | null = null,

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
  }
  return pool
}

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
}
=======
import {_Pool, _PoolClient} from 'pg';

const _pool = new Pool({_connectionString: process.env.DATABASE_URL});

export const _getPool = () => pool;

export async function withTransaction(_userId, _fn) {_const _client = await pool.connect();
  const _client = _client;
  
  try {
    await client.query('BEGIN');
    const _result = await _fn(client);
    await client.query('COMMIT');
    return result;} catch (error) {_await client.query('ROLLBACK');
    throw error;} finally {_client.release();}
}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
