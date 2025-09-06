<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Pool, PoolClient } from 'pg';
<<<<<<< HEAD
let pool: Pool | null = null;
export function getPool(): Pool {;
  if (!pool) {;
=======

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}
<<<<<<< HEAD
;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect();
  try {;
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {;
    await client.query('ROLLBACK');
    throw err;
  } finally {;
    client.release();
  }
}
=======
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  if (!pool) {;
  if (!pool) {;    pool = new Pool({ connectionString:process.env.DATABASE_URL });
=======



    pool = new Pool({ connectionString:process.env.DATABASE_URL });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  if (!pool) {;
  if (!pool) {;
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    pool = new Pool({ connectionString:process && process.env.DATABASE_URL });
  }
  return pool;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const client = await getPool().connect();
  try {}
    await client.query('BEGIN');'
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
<<<<<<< HEAD
<<<<<<< HEAD
    const result = await fn(client);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;'
    await client.query('BEGIN'),;'`
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;


<<<<<<< HEAD

    await client.query('COMMIT');
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return result;
  } catch (err) {'
    await client.query('ROLLBACK');
    throw err;
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

  } finally {
client.release();  }
  } finally {
client.release();  }
}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  } finally {;
=======
    const result = await fn(client);  } finally {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    const result = await fn(client);  } finally {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    client.release();
  }
}
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
=======
}

  } finally {
client.release ();  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
client.release();  }
}

=======
  } finally {;
    client.release();
  }

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

client.release ();  }

}



'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;


  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {;
    client.release();
  }
}
}

  } finally {

  } finally {

    client && client.release();  }

client.release ();  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
