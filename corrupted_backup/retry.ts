 
}
<<<<<<< HEAD

export async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const { retries = 3, minTimeout = 500 } = options;
  let attempt = 0;
  while (true) {
    try {
      return await fn();
    } catch (err) {
      attempt++;
      if (attempt > retries) throw err;
      const delay = Math.pow(2, attempt - 1) * minTimeout;
      await new Promise(res => setTimeout(res, delay));
    }
  }
}

export default retry;
=======
}export default retry;
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
