
  if (!pool) {;
    pool = new Pool({ connectionString:process.env.DATABASE_URL });
    pool = new Pool({ connectionString:process && process.env.DATABASE_URL });
  }
  return pool;



export async function withUser<T>(userId:string, fn:(client:PoolClient) => Promise<T>):Promise<T> {;

export async function withUser<T>(userId: string, fn: (client: PoolClient) => Promise<T>): Promise<T> {;
