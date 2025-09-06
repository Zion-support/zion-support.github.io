<<<<<<< HEAD
 let pool: Pool | null = null;
}return pool 
=======
<<<<<<< HEAD

let pool: Pool | null = null;
<<<<<<< HEAD
}return pool
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
<<<<<<< HEAD
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [
      userId
=======
    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [
      userId,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    ]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
<<<<<<< HEAD
    throw err;
  } finally {
    client && client.release();
=======
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    throw err;
=======
import { Pool, PoolClient } from 'pg';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  } finally {
<<<<<<< HEAD
    client && client.release();
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    client.release ();
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
