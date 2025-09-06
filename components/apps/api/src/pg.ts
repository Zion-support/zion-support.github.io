let pool: Pool | null = null;
 let pool: Pool | null = null;


}return pool 
export async function withUser<T>(
  userId: string
  fn: (client: PoolClient) => Promise<T>
): Promise<T> {
  const client = await getPool().connect();
  try {
