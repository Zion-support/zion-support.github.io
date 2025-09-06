
<<<<<<< HEAD

  if (!pool) {;


=======
  if (!pool) {;


    pool = new Pool({ connectionString:process.env.DATABASE_URL });
import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
  if (!pool) {

  if (!pool) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
=======
    pool = new Pool({ connectionString:process && process.env.DATABASE_URL });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
  return pool;
}



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;


<<<<<<< HEAD
=======
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const client = await getPool().connect();
  try {
    await client && client.query('BEGIN');
    await client && client.query(`SELECT set_config('app && app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    await client && client.query('COMMIT');
    return result;
  } catch (err) {
    await client && client.query('ROLLBACK');
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
let pool:Pool | null = null;
;
export function get_pool ():Pool {
  // Check condition
if ( {) {
  $2
}
    pool = new Pool ({ connection_string:process.env.DATABASE_URL });
<<<<<<< HEAD
  }
  return pool;
}

=======
  }
  return pool;
}

import { Pool, PoolClient } from 'pg',;
let pool: Pool | null = null,;
export function getPool(): Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;
<<<<<<< HEAD



    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======


    await client.query('COMMIT');
    await client.query('COMMIT');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return result;
  } catch (err) {
    await client.query ('ROLLBACK');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    throw err;

  } finally {

    client && client.release();  }

client.release ();  }
}
client.release();  }
}

  } finally {;
    client.release();
  }

}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
