


    pool = new Pool({ connectionString:process.env.DATABASE_URL });


  }
  return pool;
}


export async function withUser<T    />(userId:string, fn:(client:PoolClient) => Promise<T    />):Promise<T    /> {;
export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
</T>


    return result;
  } catch (err) {
    await client.query('ROLLBACK');







