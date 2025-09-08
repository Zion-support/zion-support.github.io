<<<<<<< HEAD



    pool = new Pool({ connectionString:process.env.DATABASE_URL });


  }
  return pool;
}


export async function withUser<T    />(userId:string, fn:(client:PoolClient) => Promise<T    />):Promise<T    /> {;
=======
;
  if (!pool) {pool = new Pool({ "connectionString": process.env.DATABASE_URL })if (!pool) {if (!pool) {pool = new Pool({ "connectionString":process.env.DATABASE_URL })pool = new Pool({ "connectionString":process && process.env.DATABASE_URL }
}
 ;
  return pool;
}

export async function withUser<T>("userId":string, "fn":("client":PoolClient) => Promise<T>):Promise<T> {export async function withUser<T>("userId":string, "fn":("client":PoolClient) => Promise<T>):Promise<T> {const client = await getPool().connect()try {await client.query('BEGIN')await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId])const result  = await fn(client)export async function withUser<T>("userId": string, "fn": ("client": PoolClient) => Promise<T>): Promise<T> {const client = await getPool().connect()try {await client.query('BEGIN'),await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);`  }
  const result = await fn(client;
  return result;
  } catch (err) {await client.query('ROLLBACK')throw err;}'

const result = await fn(client)} finally {client.release()}
}
} finally {client.release ()}
}
  if (!pool) {;
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
  }
  if (!pool) {;
    }
    pool = new Pool({ "connectionString": process.env.DATABASE_URL
});
    pool = new Pool({ "connectionString": process && process.env.DATABASE_URL
});
  }
  return pool
}
>>>>>>> origin/cursor/delete-old-data-records-6bba

export async function withUser<T>("userId":string, "fn":("client":PoolClient) => Promise<T>):Promise<T> {;

}

<<<<<<< HEAD
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
</T>


=======
const client = await getPool().connect();
  try {
    }
    await client.query('BEGIN');'
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);`
const result = await fn(client);
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

export async function withUser<T>("userId": string, "fn": ("client": PoolClient) => Promise<T>): Promise<T> {;

}

const client = await getPool().connect();
  try {;
    }
    await client.query('BEGIN'),;'
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;`

const result = await fn(client),;
    await client.query('COMMIT');'
    return result;
  } catch (err) {
    }
    await client.query('ROLLBACK');'
;
export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
  const client = await getPool().connect(),;
  try {;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;

<<<<<<< HEAD
    return result;
  } catch (err) {
    await client.query('ROLLBACK');

=======

    await client.query('COMMIT');
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
>>>>>>> origin/cursor/delete-old-data-records-6bba
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






=======
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
