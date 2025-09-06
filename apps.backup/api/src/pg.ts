<<<<<<< HEAD

<<<<<<< HEAD
=======

  if (!pool) {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
=======
<<<<<<< HEAD
import { Pool, PoolClient } from 'pg';
<<<<<<< HEAD
    await client && client.query('BEGIN';
    await client && client.query(`SELECT set_config('app && app.current_user_id';
    await client && client.query('COMMIT';
    await client && client.query('ROLLBACK';
    await client.query ('BEGIN';
    await client.query (`SELECT set_config ('app.current_user_id';
    await client.query ('COMMIT';
    await client.query ('ROLLBACK';
=======
let pool:Pool | null = null;
export function getPool():Pool {
<<<<<<< HEAD
  if (!pool) {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  if (!pool) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}
<<<<<<< HEAD
<<<<<<< HEAD

=======



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {
=======

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
<<<<<<< HEAD
<<<<<<< HEAD

import { Pool, PoolClient } from 'pg',;
let pool: Pool | null = null,;
export function getPool(): Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
=======
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
=======
;
let pool:Pool | null = null;
;
export function get_pool ():Pool {
  // Check condition
if ( {) {
  $2
}
    pool = new Pool ({ connection_string:process.env.DATABASE_URL });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  return pool;
}

=======
=======
import { Pool, PoolClient } from 'pg',;
let pool: Pool | null = null,;
export function getPool(): Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    await client.query('COMMIT');
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
  } finally {

    client && client.release();  }

=======
client.release ();  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
client.release();  }
}

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  } finally {;
    client.release();
  }

<<<<<<< HEAD
=======
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  } finally {
client.release();  }
=======
  } finally {
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
