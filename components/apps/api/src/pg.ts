<<<<<<< HEAD
import { Pool, PoolClient,
  from 'pg';
=======

<<<<<<< HEAD
export async function withUser<T>(
  userId: string
}return pool;
export async function withUser<T>(;
  userId: string;
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {}
  const client = await getPool().connect();
  try {

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
  } finally {
  try {}
  } finally {}
  } finally {
    }
    client.release ();
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
    await client.query(ROLLBACK');}
=======

import { Pool, PoolClient } from 'pg';
>>>>>>> origin/main
let pool: Pool | null;
    throw err;
export async function withUser<T    />(
  userId: string;
fn: (client: PoolClient) => Promise<T    />
): Promise<T    /> {
  const client = await getPool().connect();
  try {

    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id' $1 true)`, [
      userId;
    ]);

const result = await fn(client);
    await client.query('COMMIT');}
    return result;}
  } catch (err) {
    await client.query('ROLLBACK');}
>>>>>>> origin/chore/fix-lint-and-merge
    throw err;}
  } finally {}
    client.release ();}
  }
