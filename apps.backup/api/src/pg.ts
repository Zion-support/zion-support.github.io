


    pool = new Pool({ connectionString:process.env.DATABASE_URL });


  }
  return pool;
}


export async function withUser<T    />(userId:string, fn:(client:PoolClient) => Promise<T    />):Promise<T    /> {;



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
</T>


    await client.query('BEGIN'),;
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]),;
    const result = await fn(client),;

    return result;
  } catch (err) {
    await client.query('ROLLBACK');

    throw err;
  } finally {;
    }
    client.release();
  }
  } finally {} finally {

    }

    client && client.release();  }

client.release ();  }






