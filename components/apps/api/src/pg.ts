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
  } catch (err) {await client.query('ROLLBACK')throw err;} finally {client.release ()}}
=======
}return pool 
export async function withUser<T>(
  userId: string;
    fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
  } finally {
    client.release ();
  }
}
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
