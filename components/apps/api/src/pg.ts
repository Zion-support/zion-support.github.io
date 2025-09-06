<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

let pool: Pool | null = null;
}return pool
 let pool: Pool | null = null;
let pool: Pool | null = null;
 let pool: Pool | null = null;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}return pool 
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
    ]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
    throw err;
=======
import { Pool, PoolClient } from 'pg';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  } finally {
=======
    client.release ();
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
