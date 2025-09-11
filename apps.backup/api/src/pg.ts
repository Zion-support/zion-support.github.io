
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
import { Pool, PoolClient } from 'pg';
=======

  if (!pool) {;
=======

  if (!pool) {;


=======
  if (!pool) {;>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
=======
  if (!pool) {;
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
=======
  if (!pool) {;
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  return pool;
}



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;


  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
=======
import { Pool, PoolClient } from 'pg',;
let pool: Pool | null = null,;
export function getPool(): Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
  return pool;
}

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;


export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
=======  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
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

import { Pool, PoolClient } from 'pg',;
let pool: Pool | null = null,;
export function getPool(): Pool {;
  if (!pool) {;
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}=======;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;

    await client.query('COMMIT');
    await client.query('COMMIT');
=======
=======


    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  } finally {

    client && client.release();  }

=======
  } finally {;
    client.release();
  }

}

<<<<<<< HEAD
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
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
