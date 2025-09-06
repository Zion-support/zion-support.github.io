<<<<<<< HEAD
 let pool: Pool | null = null;
=======
<<<<<<< HEAD
<<<<<<< HEAD

let pool: Pool | null = null;
}return pool
=======
 let pool: Pool | null = null;
=======
let pool: Pool | null = null;
=======
 let pool: Pool | null = null;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}return pool 

let pool: Pool | null = null;
}return pool
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [
      userId
    ]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
    throw err;
  } finally {
    client && client.release();
    throw err;
import { Pool, PoolClient } from 'pg';

  } finally {
    client && client.release();
  }
}
    client.release ();
  }
}
