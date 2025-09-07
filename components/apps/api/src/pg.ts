<<<<<<< HEAD
}return pool 
=======
<<<<<<< HEAD

import { Pool, PoolClient } from 'pg';
let pool: Pool | null;
    throw err
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {

<<<<<<< HEAD
  } finally {
    client.release ();
  }
}

=======
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
    client.release ();
  }

=======

}return pool;
import { Pool, PoolClient  } from 'pg';
let pool: Pool | null;
    throw err;
export async function withUser<T>(userId: string;
  fn: (client: PoolClient) => Promise<T>;
): Promise<T> {const client = await getPool().connect()try {await client.query('BEGIN')await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [;
      userId;
    ])const result = await fn(client)await client.query('COMMIT')return result;
  } catch (err) {await client.query('ROLLBACK')throw err;} finally {client.release ()}}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
