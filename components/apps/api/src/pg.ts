<<<<<<< HEAD
<<<<<<< HEAD


}return pool 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}return pool 
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {

<<<<<<< HEAD
    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [
      userId,

<<<<<<< HEAD
    ]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    throw err;
=======
import { Pool, PoolClient } from 'pg';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  } finally {
<<<<<<< HEAD

}

=======
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    client.release ();
  }
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  } finally {
    client.release ();
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
