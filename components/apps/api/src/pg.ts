<<<<<<< HEAD
}return pool 
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
=======
<<<<<<< HEAD
<<<<<<< HEAD
}return pool 
import { Pool, PoolClient } from 'pg';
let pool: Pool | null;
    throw err
origin/cursor/automate-test-improve-and-merge-code-2533
export async function withUser<T>(
  userId: string
=======
}return pool;
export async function withUser<T>(;
  userId: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  const client = await getPool().connect();
<<<<<<< HEAD
  try {

<<<<<<< HEAD
}return pool;
import { Pool, PoolClient  } from 'pg';
let pool: Pool | null;
    throw err;
export async function withUser<T>(userId: string;
  fn: (client: PoolClient) => Promise<T>;
): Promise<T> {const client = await getPool().connect()try {await client.query('BEGIN')await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [;
      userId;
    ])const result = await fn(client)await client.query('COMMIT')return result;

  } finally {
    client.release ();
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
origin/cursor/automate-test-improve-and-merge-code-2533
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  } finally {
=======
  try {}
  } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    client.release ();
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
    await client.query('ROLLBACK');}
    throw err;}
  } finally {}
    client.release ();}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }
}

  } catch (err) {await client.query('ROLLBACK')throw err;} finally {client.release ()}}
import { Pool, PoolClient } from 'pg';
let pool: Pool | null = $2;
export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL })
  }
  return pool
}

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getPool().connect($2);
  try {
    await client.query($2);
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),
    const result = await fn($2);
    await client.query($2);
    return result
  } catch (err) {
    await client.query($2);
    throw err
  } finally {
    client.release()
  }
}
