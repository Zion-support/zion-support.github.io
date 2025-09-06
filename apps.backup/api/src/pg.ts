<<<<<<< HEAD
import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
  if (!pool) {

=======
<<<<<<< HEAD
import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
<<<<<<< HEAD
  if (!pool) {

  if (!pool) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}
<<<<<<< HEAD
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {
=======
<<<<<<< HEAD
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {
=======

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const client = await getPool().connect();
  try {
    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
;
let pool:Pool | null = null;
;
export function get_pool ():Pool {
  // Check condition
if ( {) {
  $2
}
    pool = new Pool ({ connection_string:process.env.DATABASE_URL });
  }
  return pool;
}
<<<<<<< HEAD
export async function with_user < T>(user_id:string, fn:(client:PoolClient) => Promise < T>):Promise < T> {
  const client = await get_pool ().connect ();
  try {
    await client.query ('BEGIN');
    await client.query (`SELECT set_config ('app.current_user_id', $1, true)`, [user_id]);
    const result = await fn (client);
    await client.query ('COMMIT');
=======

;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    return result;
  } catch (err) {
    await client.query ('ROLLBACK');
    throw err;
<<<<<<< HEAD

  } finally {
client.release();  }
client.release ();  }
}
=======
<<<<<<< HEAD
<<<<<<< HEAD

    client && client.release();  }

=======
client.release ();  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
client.release();  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  } finally {;
    client.release();
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
