<<<<<<< HEAD
<<<<<<< HEAD


}return pool 
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {

    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [
      userId,

=======
<<<<<<< HEAD
await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [
      userId,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    ]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    throw err;
import { Pool, PoolClient } from 'pg';
  } finally {
<<<<<<< HEAD

}

=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    client.release ();
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }

let pool: Pool | null = null

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
  }
  return pool
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect()

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

let pool: Pool | null = null;
}return pool
 let pool: Pool | null = null;
let pool: Pool | null = null;
 let pool: Pool | null = null;
}return pool 
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
