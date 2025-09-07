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
  const client = await getPool().connect();
<<<<<<< HEAD
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
  }

