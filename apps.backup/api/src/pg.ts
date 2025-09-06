
import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {





    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
