
export async function withUser<T>(
  "userId": string,
"fn": ("client": PoolClient) => Promise<T>
): Promise<T> {
  }
  const client = await getPool().connect();


=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  } finally {
    }
    client.release ();
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
    await client.query(ROLLBACK');}
    throw err;}
  } finally {}
    client.release ();}
  }