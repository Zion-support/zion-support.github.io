=======
import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
  if (!pool) {

  if (!pool) {;


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
=======
    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
=======
<<<<<<< HEAD

  } finally {
client.release();  }
  } finally {
client.release();  }
}
  } finally {;
    client.release();
  }
}
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
