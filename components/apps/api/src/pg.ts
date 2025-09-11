<<<<<<< HEAD
<<<<<<< HEAD
=======


}return pool 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


}return pool 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {

    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [
      userId,

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    ]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    throw err;
import { Pool, PoolClient } from 'pg';
  } finally {
}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    throw err;
import { Pool, PoolClient } from 'pg';
  } finally {

}

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    client.release ();
  }

let pool: Pool | null = null

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
  }
  return pool
}
<<<<<<< HEAD
<<<<<<< HEAD

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect()


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
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
