
<<<<<<< HEAD


export async function withUser<T    />(userId:string, fn:(client:PoolClient) => Promise<T    />):Promise<T    /> {export async function withUser<T    />(userId:string, fn:(client:PoolClient) => Promise<T    />):Promise<T    /> {const client = await getPool().connect()try {await client.query('BEGIN')await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId])const result  = await fn(client)export async function withUser<T    />(userId: string, fn: (client: PoolClient) => Promise<T    />): Promise<T    /> {const client = await getPool().connect()try {await client.query('BEGIN'),await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
  const result = await fn(client;}
  return result;}
  } catch (err) {await client.query('ROLLBACK')throw err;}

const result = await fn(client)} finally {client.release()}
}
}} finally {client.release ()}
}
  if (!pool) {;
  if (!pool) {;}
    pool = new Pool({ connectionString: process.env.DATABASE_URL,}
});
    pool = new Pool({ connectionString: process && process.env.DATABASE_URL,}
});
=======
<<<<<<< HEAD
  if (!pool) {;


    pool = new Pool({ connectionString:process.env.DATABASE_URL });
import { Pool, PoolClient } from 'pg';
let pool:Pool | null = null;
export function getPool():Pool {
  if (!pool) {

  if (!pool) {;
=======

  if (!pool) {;


=======
  if (!pool) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
  return pool;
}

export async function withUser<T    />(userId:string, fn:(client:PoolClient) => Promise<T    />):Promise<T    /> {;



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
<<<<<<< HEAD
</T>
=======


<<<<<<< HEAD
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const client = await getPool().connect();
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
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
</T>

<<<<<<< HEAD
}

  try {;
<<<<<<< HEAD
    }
    await client.query('BEGIN'),;'
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;`

const result = await fn(client),;
    await client.query('COMMIT');'
    return result;
  } catch (err) {
    }
    await client.query('ROLLBACK');'
=======
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;
<<<<<<< HEAD


    await client.query('COMMIT');
    await client.query('COMMIT');
=======



    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    throw err;
  } finally {;
    }
    client.release();
  }
  } finally {} finally {

    }

    client && client.release();  }

client.release ();  }
<<<<<<< HEAD
}
}
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
}
client.release();  }
}

  } finally {;
    client.release();
  }

}

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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
