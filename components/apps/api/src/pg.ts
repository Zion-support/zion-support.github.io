 let pool: Pool | null = null;
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
