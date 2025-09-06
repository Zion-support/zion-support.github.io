<<<<<<< HEAD
import { Pool, PoolClient } from 'pg';
<<<<<<< HEAD
    await client && client.query('BEGIN';
    await client && client.query(`SELECT set_config('app && app.current_user_id';
    await client && client.query('COMMIT';
    await client && client.query('ROLLBACK';
    await client.query ('BEGIN';
    await client.query (`SELECT set_config ('app.current_user_id';
    await client.query ('COMMIT';
    await client.query ('ROLLBACK';
=======
let pool:Pool | null = null;
export function getPool():Pool {
<<<<<<< HEAD
  if (!pool) {

=======
  if (!pool) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}
<<<<<<< HEAD
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {
=======

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
=======
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
<<<<<<< HEAD
<<<<<<< HEAD

  } finally {
client.release();  }
=======
  } finally {
client.release();  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  } finally {;
    client.release();
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
